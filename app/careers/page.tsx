import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import AxiosInstance from "../utils/axiosInstance";

async function getCareerListings() {
  try {
    const response = await AxiosInstance.get("career");
    return { data: response.data, error: null };
  } catch (error: any) {
    console.error("Failed to fetch career listings:", error.message);
    return { data: [], error: error.message };
  }
}

// Format to YYYY-MM-DD
const formatDate = (inputDate: string) => {
  const date = new Date(inputDate);
  return date.toISOString().split("T")[0];
};

// Normalize experience text
const normalizeExperience = (exp: string | undefined): string => {
  if (!exp) return "";

  const cleaned = exp.toLowerCase().trim();

  if (cleaned.includes("fresher") || cleaned.includes("freaher")) {
    return "No experience required";
  }

  if (cleaned.includes("month")) {
    const match = cleaned.match(/(\d+)\s*[-to]+\s*(\d+)/);
    if (match) {
      return `${match[1]} to ${match[2]} months of experience preferred`;
    }
    return `${cleaned.replace(/[^0-9\-]/g, "").replace("-", " to ")} months of experience preferred`;
  }

  const yearsMatch = cleaned.match(/\d+/);
  if (yearsMatch) {
    const years = yearsMatch[0];
    return `Minimum ${years} year${years === "1" ? "" : "s"} of experience required`;
  }

  return "Experience requirements not specified";
};


export default async function CareersPage() {
  const { data, error } = await getCareerListings();

  const jsonLd = data.map((job: any) => ({
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job?.title?.rendered || "",
    description: (job?.acf?.job_description || "")
      .replace(/<[^>]+>/g, "")
      .replace(/"/g, "'"),
    datePosted: formatDate(job?.date),
    // validThrough: job?.acf?.valid_through || "2025-12-31T23:59",
    employmentType: job?.acf?.employment_type?.toUpperCase() || "FULL_TIME",
    experienceRequirements: normalizeExperience(job?.acf?.experience),
    identifier: {
      "@type": "PropertyValue",
      name: "uSiS Technologies",
      value: job?.id?.toString() || "N/A",
    },
    url: `https://usistech.com/career/${job.slug}`,
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        streetAddress: job?.acf?.street_address || "Default Street",
        addressLocality: job?.acf?.location || "Coimbatore",
        addressRegion: "Tamil Nadu",
        postalCode: job?.acf?.postal_code || "641001",
        addressCountry: {
          "@type": "Country",
          name: "India",
        },
      },
    },
    hiringOrganization: {
      "@type": "Organization",
      name: "uSiS Technologies",
      sameAs: "https://www.linkedin.com/company/usis-technologies",
      logo: "https://usistech.com/images/logo/logo.png",
    },
  }));

  return (
    <>
      {jsonLd.map((schema: any, index: number) => (
        <Script
          key={`job-schema-${index}`}
          id={`job-schema-${index}`}
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <div className="max-w-6xl sm:mx-auto mx-0">
        <section className="title-block pt-20 sm:pt-28">
          <div className="text-center sm:pt-8 py-5">
            <h1
              className="sm:text-3xl text-lg m-0 font-bold relative pb-3 inline-block"
              style={{
                backgroundImage: "url('/images/icons/three-dot.png')",
                backgroundSize: "43px 9px",
                backgroundPosition: "50% 46px",
                backgroundRepeat: "no-repeat",
                padding: "0 0 30px 0",
              }}
            >
              CAREERS
            </h1>
          </div>
        </section>

        <div
          className="max-w-7xl mx-auto mb-14 sm:p-16 p-4 bg-white"
          style={{ boxShadow: "0 0 12px rgba(0, 0, 0, 0.07)" }}
        >
          {error ? (
            <div className="flex justify-center items-center flex-col">
              <Image
                className="mx-auto"
                src="/images/banner/error-banner.png"
                width={400}
                height={499}
                alt="Error 404"
              />
              <p className="text-red-600 text-center mt-4">
                Failed to load careers. Please try again later.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-6">
              {data.map((job: any) => (
                <div key={job.id}>
                  <Link href={`/career/${job.slug}`}>
                    <div className="w-full border p-5 h-full flex flex-col justify-between hover:shadow-md transition-shadow duration-200">
                      <div>
                        <div
                          className="mb-4 font-semibold text-lg pr-5"
                          dangerouslySetInnerHTML={{
                            __html: job.title.rendered,
                          }}
                        ></div>

                        <div className="mb-4 pr-5 flex flex-wrap gap-3">
                          <div
                            className="flex items-center gap-2 py-1 rounded-md px-2 text-xs"
                            style={{ backgroundColor: "#E7F1FF" }}
                          >
                            <Image
                              src="/images/icons/career-briefcase.png"
                              width={16}
                              height={16}
                              alt="Experience icon"
                            />
                            {job.acf.experience}
                          </div>

                          <div
                            className="flex items-center gap-2 py-1 rounded-md px-2 text-xs"
                            style={{ backgroundColor: "#E7F1FF" }}
                          >
                            <Image
                              src="/images/icons/career-location.png"
                              width={12}
                              height={12}
                              alt="Location icon"
                            />
                            {job.acf.location}
                          </div>
                        </div>

                        <div className="mb-4 text-sm text-gray-700 leading-normal">
                          <div
                            dangerouslySetInnerHTML={{
                              __html: job.acf.job_description,
                            }}
                          />
                        </div>
                      </div>

                      <div className="flex justify-end mt-auto">
                        <Image
                          src="/images/icons/career-arrow.png"
                          width={16}
                          height={16}
                          alt="Arrow icon"
                        />
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          )}

          <div className="flex justify-end">
            <Link href="/careers/apply">
              <button className="bg-[#67bcdb] text-white mt-10 px-8 py-4 hover:bg-blue-600">
                Apply Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
