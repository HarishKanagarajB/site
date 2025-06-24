import Image from "next/image";
import Link from "next/link";
import AxiosInstance from "../utils/axiosInstance";
import Script from "next/script";

async function getSolutions() {
  try {
    const [solutionV3Response, solutionV2Response] = await Promise.all([
      AxiosInstance.get("solution-v3"),
      AxiosInstance.get("solution-v2"),
    ]);

    const solutionV3DataRaw = solutionV3Response.data;
    const solutionV2DataRaw = solutionV2Response.data;

    const solutionV3Data = Array.isArray(solutionV3DataRaw)
      ? solutionV3DataRaw
      : Array.isArray(solutionV3DataRaw?.data)
      ? solutionV3DataRaw.data
      : [];


    const solutionV2Data = Array.isArray(solutionV2DataRaw)
      ? solutionV2DataRaw
      : Array.isArray(solutionV2DataRaw?.data)
      ? solutionV2DataRaw.data
      : [];

    return {
      solutionV3: solutionV3Data,
      solutionV2: solutionV2Data,
    };
  } catch (error) {
    console.error("Failed to fetch solutions:", error);
    return {
      solutionV3: [],
      solutionV2: [],
      error: "Failed to load solutions data",
    };
  }
}


export default async function SolutionsPage() {
  const { solutionV3, solutionV2, error } = await getSolutions();

  if (error) {
    return (
      <div className="container mx-auto mt-20">
        <Image
          className="mx-auto"
          src="/images/banner/error-banner.png"
          width={400}
          height={499}
          alt="Error"
        />
      </div>
    );
  }
const solutionSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "uSiS Technologies",
  "url": "https://usistech.com/solutions",
  "logo": "https://usistech.com/images/logo/logo.png",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Solution Offerings",
    "itemListElement": solutionV3.map((item: any) => ({
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": item.title?.rendered || "",
        "description": item.excerpt?.rendered
          ?.replace(/<[^>]+>/g, "") // Remove HTML tags
          ?.replace(/"/g, "'") || "",
        "url": `https://usistech.com/solution/${item.slug}`
      }
    }))
  }
};

  return (
    <>
    <Script
  id="solution-schema"
  type="application/ld+json"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(solutionSchema) }}
/>

    <div className="max-w-6xl sm:mx-auto mx-0">
      <section className="title-block pt-24 mb-6 sm:pt-28">
        <div className="text-center sm:pt-8 py-0">
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
            SOLUTIONS
          </h1>
        </div>
      </section>

      {/* Solutions Cards */}
      <div className="max-w-6xl sm:mx-auto mx-0 sm:p-8 p-4 shadow-md" style={{ backgroundColor: '#F9FAFB' }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {solutionV3.length === 0 ? (
            <p className="col-span-full text-center text-gray-500">No solutions found.</p>
          ) : (
            solutionV3.map((item: any) => (
              <div key={item.id} className="single-services bg-white hover:shadow-lg h-full flex flex-col border-[0.1px] border-gray-200">
                <Link href={`/solution/${item.slug}`}>
                  <div className="p-6 flex-1">
                    <div className="case-logo mb-4 justify-start">
                      {item?.acf?.image_name_ && (
                        <Image
                          src={`/images/thumbnail/solutions/${item.acf.image_name_}`}
                          width={80}
                          height={80}
                          alt={item.title.rendered}
                        />
                      )}
                    </div>
                    <h3 className="sm:text-md text-left text-lg font-semibold text-black mb-2">
                      {item.title.rendered}
                    </h3>
                    <div
                      dangerouslySetInnerHTML={{ __html: item.excerpt?.rendered || "" }}
                      suppressHydrationWarning
                      className="sm:text-base text-sm leading-[1.5] mb-4 text-left text-black sm:w-5/6"
                    />

                    <div className="flex items-center gap-2 py-1 rounded-md px-2 text-sm font-bold" style={{ color: '#505050' }}>
                      <p>Learn More</p>
                      <Image
                        src="/images/icons/solution_arrow.png"
                        width={16}
                        height={16}
                        alt="arrow icon"
                      />
                    </div>
                  </div>
                </Link>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Industries We Serve */}
      <div className="max-w-6xl sm:mx-auto mx-0 sm:py-4 sm:px-8 p-4 mb-14 shadow-md" style={{ backgroundColor: '#f3f3f3' }}>
        <section className="testi-block py-5 bg-cover bg-center">
          <div className="container service relative">
            <h2 className="text-center text-base sm:text-xl text-[#e04a31] font-extrabold mb-2 sm:mb-5 uppercase">
              Industries We Serve
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-2">
              {solutionV2.length === 0 ? (
                <p className="col-span-full text-center text-gray-500">No industries found.</p>
              ) : (
                solutionV2.map((item: any) => (
                  <div key={item.id} className="single-services bg-white hover:shadow-lg h-full sm:!min-h-[100px] flex flex-col border-[0.1px] border-gray-200">
                    <div className="p-4 lg:p-8 flex-1">
                      <div className="case-logo mb-4 justify-center flex align-middle">
                        {item?.acf?.image_name_ && (
                          <Image
                            src={`/images/thumbnail/industries/${item.acf.image_name_}`}
                            width={80}
                            height={80}
                            alt={item.title.rendered}
                          />
                        )}
                      </div>
                      <h3 className="sm:text-sm text-center text-xs font-bold text-black sm:mb-4 mb-2">
                        {item.title.rendered}
                      </h3>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
    </>
  );
}
