import Image from "next/image";
import Link from "next/link";
import AxiosInstance from "../utils/axiosInstance";
import Script from "next/script";

const generateServiceSchema = (services: any[]) =>
  services.map((service: any) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service?.title?.rendered || "",
    "description": service?.excerpt?.rendered.replace(/<[^>]+>/g, "") || "",
    "serviceType": service?.acf?.category || "IT Services",
    "provider": {
      "@type": "Organization",
      "name": "uSiS Technologies",
      "url": "https://usistech.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://usistech.com/images/logo/logo.png"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2nd Floor, Site 30 & 31, Thiru Senthil Nagar",
        "addressLocality": "Coimbatore",
        "addressRegion": "Tamil Nadu",
        "postalCode": "641017",
        "addressCountry": "IN"
      }
    },
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "url": `https://usistech.com/service/${service.slug}`
  }));

async function getServices() {
  try {
    const [servicesResponse,customerResponse] = await Promise.all([
      AxiosInstance.get("partner"),
      AxiosInstance.get("customer-benefit"),
    ]);


    const servicesData = servicesResponse.data;
    const customerData = customerResponse.data;

    const partner = Array.isArray(servicesData)
      ? servicesData
      : Array.isArray(servicesData?.data)
        ? servicesData.data
        : [];

    const customer = Array.isArray(customerData)
      ? customerData
      : Array.isArray(customerData?.data)
        ? customerData.data
        : [];

    return { partner, customer };
  } catch (error) {
    console.error("Failed to fetch services and solutions:", error);
    return { partner: [], customer: [], error: "Failed to load data" };
  }
}


export default async function ServicePage() {
  const { partner, customer, error } = await getServices();

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

  return (
    <>
      {partner.length > 0 &&
        generateServiceSchema(partner).map((schema, index) => (
          <Script
            key={`service-schema-${index}`}
            id={`service-schema-${index}`}
            type="application/ld+json"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}

      <div className="max-w-6xl sm:mx-auto mx-0">
        <section className="title-block pt-24 sm:pt-28">
          <div className="text-center sm:pt-8 py-0">
            <h1
              className="sm:text-3xl text-lg m-0 font-bold relative pb-3 inline-block mb-6"
              style={{
                backgroundImage: "url('/images/icons/three-dot.png')",
                backgroundSize: "43px 9px",
                backgroundPosition: "50% 46px",
                backgroundRepeat: "no-repeat",
                padding: "0 0 30px 0",
              }}
            >
              uSiS Technologies is an Official Frappe & ERPNext Partner
            </h1>
            <div className="bg-white shadow-md p-6 text-md">
              <p className="px-4"> uSiS Technologies is proud to partner with Frappe Technologies, the creators of ERPNext and Frappe HR, to deliver powerful, open-source ERP and HR solutions tailored for modern businesses.</p>
              <p className="mt-4 ">Through this partnership, uSiS combines deep domain expertise, certified implementation capabilities, and ongoing support with Frappe’s flexible and scalable platforms—helping organizations streamline operations, improve visibility, and accelerate growth.</p>
            </div>
          </div>
        </section>
        <div className="max-w-6xl sm:mx-auto mx-0 sm:p-8 p-4  shadow-md"
          style={{ backgroundColor: '#F9FAFB' }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 ">
            {partner.map((item: any) => (
              <div key={item.id} className="single-services bg-white hover:shadow-lg h-full flex flex-col border-[0.1px] border-gray-200">
                <div className="p-6 flex-1">
                  <div className="case-logo mb-6 justify-start">
                    {item?.acf?.image_name_ && (
                      <Image
                        src={`/images/thumbnail/partner/${item.acf.image_name_}`}
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
                    dangerouslySetInnerHTML={{
                      __html: item.content.rendered,
                    }}
                    className="sm:text-base text-sm leading-[1.5] mb-4 text-left text-black sm:w-5/6"
                  ></div>

                </div>
              </div>
            ))}
          </div>
        </div>
          <div className="max-w-6xl sm:mx-auto mx-0 sm:py-4 sm:px-8 p-4 mb-14 shadow-md"
            style={{ backgroundColor: '#f3f3f3' }}
          >
            <section className="testi-block py-5 bg-cover bg-center">
              <div className="container service relative">
                <h2 className="text-center text-base sm:text-xl text-[#e04a31] font-extrabold mb-2 sm:mb-5 uppercase">
                  Benefits for Customers
                </h2>
         
                  <>
                    <>
                      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-2">
                        {customer.map((item: any) => (
                          // <Link href={`/industry/${item.slug}`}>
                          <div key={item.id} className="single-services bg-white hover:shadow-lg h-full sm:!min-h-[100px] flex flex-col border-[0.1px] border-gray-200">
                            <div className="p-4 lg:p-8 flex-1">
                              <div className="case-logo mb-4 justify-center flex align-middle">

                                {item?.acf?.image_name && (
                                  <Image
                                    src={`/images/thumbnail/customer/${item.acf.image_name}`}
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
                          // </Link>
                        ))}
                      </div>
                    </>
                  </>
             
              </div>
            </section>
          </div>
      </div>
    </>
  );
}
