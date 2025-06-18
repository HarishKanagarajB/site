import Image from "next/image";
import Link from "next/link";
import AxiosInstance from "../utils/axiosInstance";

async function getServices() {
  try {
    const [servicesResponse, solutionsResponse] = await Promise.all([
      AxiosInstance.get("service-v2"),
      AxiosInstance.get("solution-v2"),
    ]);


    const servicesData = servicesResponse.data;
    const solutionsData = solutionsResponse.data;

    const services = Array.isArray(servicesData)
      ? servicesData
      : Array.isArray(servicesData?.data)
      ? servicesData.data
      : [];

    const solutions = Array.isArray(solutionsData)
      ? solutionsData
      : Array.isArray(solutionsData?.data)
      ? solutionsData.data
      : [];

    return { services, solutions };
  } catch (error) {
    console.error("Failed to fetch services and solutions:", error);
    return { services: [], solutions: [], error: "Failed to load data" };
  }
}


export default async function ServicePage() {
  const { services, solutions, error } = await getServices();

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
                SERVICES
              </h1>
            </div>
          </section>
          <div className="max-w-6xl sm:mx-auto mx-0 sm:p-8 p-4 shadow-md"
            style={{ backgroundColor: '#F9FAFB' }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
              {services.map((item: any) => (
                <div key={item.id} className="single-services bg-white hover:shadow-lg h-full flex flex-col border-[0.1px] border-gray-200">
                  <Link href={`/service/${item.slug}`  as const}>
                    <div className="p-6 flex-1">
                      <div className="case-logo mb-6 justify-start">
                        {item?.acf?.image_name_ && (
                          <Image
                            src={`/images/thumbnail/service/${item.acf.image_name_}`}
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
                          __html: item.excerpt.rendered,
                        }}
                        className="sm:text-base text-sm leading-[1.5] mb-4 text-left text-black sm:w-5/6"
                      ></div>
                      <div className="flex items-center gap-2 py-1 rounded-md px-2 text-sm font-bold"
                        style={{ color: '#505050' }}
                      >
                        <p>Learn More</p>
                        <Image
                          src="/images/icons/solution_arrow.png"
                          width={16}
                          height={16}
                          alt="career-briefcase icon"
                        />

                      </div>

                      {Array.isArray(item?.acf?.techstack) && item.acf.techstack.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-2 mb-2">
                          {item.acf.techstack.map((tech: any, index: number) =>
                            tech.thumbnail_image ? (
                              <div key={index} className="relative group mr-2">
                                <Image
                                   src={`/images/thumbnail/tech/${tech.image_name_}`}
                                  alt={tech.title}
                                  height={40}
                                  width={40}
                                  className="object-contain h-12 w-auto"
                                />
                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 rounded bg-black text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
                                  {tech.title}
                                </div>
                              </div>
                            ) : null
                          )}
                        </div>
                      )}

                    </div>
                  </Link>
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
                  Industries We Serve
                </h2>
         
                  <>
                    <>
                      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-2">
                        {solutions.map((item: any) => (
                          // <Link href={`/industry/${item.slug}`}>
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
