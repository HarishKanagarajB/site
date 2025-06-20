import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import AxiosInstance from "@/app/utils/axiosInstance";

interface Career {
  id: number;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  acf: {
    experience: string;
    location: string;
  };
}

export async function generateStaticParams() {
  try {
    const response = await AxiosInstance.get<Career[]>("career");
    return response.data.map((career) => ({
      slug: career.slug.split("/"),
    }));
  } catch (error) {
    console.error("Error generating career static params:", error);
    return [];
  }
}

export default async function CareerDetail({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug = [] } = await params;
  const slugPath = slug.join("/");

  let career: Career | null = null;

  try {
    const response = await AxiosInstance.get<Career[]>(`career?slug=${slugPath}`);
    career = response.data?.[0] || null;
  } catch (error) {
    console.error("Error fetching career details:", error);
  }

  const jsonLd = career && {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: career.title.rendered,
    description: career.content.rendered.replace(/<[^>]+>/g, "").replace(/"/g, "'"),
    experienceRequirements: career.acf.experience,
    url: `https://usistech.com/career/${career.slug}`,
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: career.acf.location,
        addressRegion: "Tamil Nadu",
        addressCountry: "India",
      },
    },
    hiringOrganization: {
      "@type": "Organization",
      name: "uSiS Technologies",
      sameAs: "https://www.linkedin.com/company/usis-technologies",
      logo: "https://usistech.com/images/logo/logo.png",
    },
  };

  return (
    <>
      {career && (
        <Script
          id="career-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}

      <div className="max-w-6xl sm:mx-auto mx-0">
        <section className="title-block pt-28 sm:pt-32">
          <div className="text-center py-0">
            <Link href="/careers/apply">
              <p className="text-base uppercase">Careers</p>
            </Link>
            <h1
              className="sm:text-3xl text-lg m-0 font-bold relative pb-3 inline-block"
              style={{
                backgroundImage: "url('/images/icons/three-dot.png')",
                backgroundSize: "43px 9px",
                backgroundPosition: "50% 52px",
                backgroundRepeat: "no-repeat",
                padding: "0 0 36px 0",
              }}
              dangerouslySetInnerHTML={{
                __html: career ? career.title.rendered : "Career not found",
              }}
            >
            </h1>
          </div>

          <div className="container bg-white shadow-md mb-14 mx-auto">
            {!career ? (
              <div className="flex justify-center items-center min-h-[400px]">
                <Image
                  className="mx-auto"
                  src="/images/banner/error-banner.png"
                  width={400}
                  height={499}
                  alt="Error 404"
                />
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 my-6">
                <div className="col-span-1 md:col-span-8 p-4 sm:ml-5 mb-6">
                  <div
                    className="my-4 text-medium leading-8 wp-content"
                    dangerouslySetInnerHTML={{ __html: career.content.rendered }}
                  />
                </div>

                <div className="col-span-1 md:col-span-4 sm:mt-10">
                  <div className="text-left bg-[rgba(242,242,242,0.58)] p-6 mx-5 sm:m-[0_20px_30px_0] mt-6">
                    <div className="flex items-center pb-5">
                      <div className="font-semibold text-sm text-gray-700 uppercase w-28">Role</div>
                      <div className="text-gray-800 text-sm" dangerouslySetInnerHTML={{ __html: career.title.rendered }}></div>
                    </div>

                    <div className="flex items-center pb-5">
                      <div className="font-semibold text-sm text-gray-700 uppercase w-28">Experience</div>
                      <div className="text-gray-800 text-sm">{career.acf.experience}</div>
                    </div>

                    <div className="flex items-center pb-5">
                      <div className="font-semibold text-sm text-gray-700 uppercase w-28">Location</div>
                      <div className="text-gray-800 text-sm">{career.acf.location}</div>
                    </div>

                    <Link
                      href={{
                        pathname: "/careers/apply",
                        query: { role: career.title.rendered },
                      }}
                      className="btn bg-[#67bcdb] text-white w-full sm:w-60 py-2 shadow-md hover:bg-white hover:text-gray-700 border-gray-500 
                      flex justify-center mx-auto mt-5 transition duration-300"
                    >
                      Apply Now
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
}
