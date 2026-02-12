"use client";
import AxiosInstance from "@/app/utils/axiosInstance";
import GlobalLoader from "@/app/utils/GlobalLoader";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import CardList from "@/app/components/CardList";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
interface Casestudy {
  title?: {
    rendered?: string;
  };
  acf?: {
    client_name?: string;
    industry?: string;
    technology?: string;
    location?: string;
    screenshot?: string;
  };
  content?: {
    rendered?: string;
  };
  description: string;
}

interface CasestudyProps {
  params: Promise<{ slug: string[] }>;
}

export default function Casestudy({ params }: CasestudyProps) {
  const [casestudy, setCasestudy] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const unwrappedParams = React.use(params);
  const { slug } = unwrappedParams || {};

  useEffect(() => {
    if (!slug || slug.length === 0) return;

    const fetchCasestudy = async () => {
      try {
        setLoading(true);
        const response = await AxiosInstance.get(`case-study?slug=${slug}`);

        if (response.data && response.data.length > 0) {
          setCasestudy(response.data[0]);
        } else {
          setError("No case study found");
        }
      } catch (err: any) {
        setError("Error fetching data: " + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCasestudy();
  }, [slug]);
  return (
    <>
      {loading ? (
        <div>
          <GlobalLoader />
          <div style={{ minHeight: "100vh" }}></div>
        </div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        <section className="title-block pt-32 max-w-6xl mx-auto mb-14">
          <div className="text-center sm:pt-8 py-5">
            <h1
              className="sm:text-3xl text-lg m-0 font-bold relative pb-3 inline-block "
              style={{
                backgroundImage: "url('/images/icons/three-dot.png')",
                backgroundSize: "43px 9px",
                backgroundPosition: "50% 46px",
                backgroundRepeat: "no-repeat",
                padding: "0 0 30px 0",
              }}
            >
              {casestudy?.title?.rendered}
            </h1>
          </div>

          <div className="container bg-white shadow-md mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 mt-6">
              <div className="col-span-1 md:col-span-6 ">
                {casestudy?.acf?.screenshot &&
                  casestudy.acf.screenshot.length > 0 ? (
                  <div className="image-gallery">
                    <Swiper
                      spaceBetween={20}
                      slidesPerView={1}
                      slidesPerGroup={4}
                      className="mx-8"
                    >
                      {casestudy.acf.screenshot.map(
                        (screenshot: any, index: any) => (
                          <SwiperSlide key={index}>
                            <img
                              key={index}
                              src={screenshot.url}
                              alt={screenshot.alt || `Screenshot ${index + 1}`}
                              className="w-full h-[600px] object-cover"
                            />
                          </SwiperSlide>
                        )
                      )}
                    </Swiper>
                  </div>
                ) : (
                  <p>No Featured Image available</p>
                )}
              </div>
              <div className="col-span-1 md:col-span-6 p-4 sm:pl-6">
                <h2 className="text-xl font-bold">Overview</h2>
                <p
                  className="my-2 sm:text-medium text-lg sm:leading-8 pr-4"
                  dangerouslySetInnerHTML={{
                    __html: casestudy?.acf?.overview || "",
                  }}
                ></p>
                {/* <div className="text-left bg-[rgba(242,242,242,0.58)] p-[25px] m-[0_20px_30px_0]  mt-6 bg-[length:400px_auto]">
                  <table className="min-w-full table-auto border-collapse">
                    <tbody>
                      <tr>
                        <td className="py-2 px-4 font-font-normal text-sm text-gray-700 uppercase">
                          <b>Client</b>
                        </td>
                        <td className="py-2 px-4 text-gray-800 text-sm">
                          <span>{casestudy?.acf?.client_name}</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 font-font-normal text-sm text-gray-700 uppercase">
                          <b>Location</b>
                        </td>
                        <td className="py-2 px-4 text-gray-800 text-sm">
                          {casestudy?.acf?.location}
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 font-font-normal text-sm text-gray-700 uppercase">
                          <b>Industry</b>
                        </td>
                        <td className="py-2 px-4 text-gray-800 text-sm">
                          <span>{casestudy?.acf?.industry}</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 font-font-normal text-sm text-gray-700 uppercase">
                          <b>Technology</b>
                        </td>
                        <td className="py-2 px-4 text-gray-800 text-sm">
                          {casestudy?.acf?.technology &&
                          casestudy.acf.technology.length > 0 ? (
                            <div className="technology-list">
                              {casestudy.acf.technology.map(
                                (tech: any, index: any) => (
                                  <span
                                    key={index}
                                    className={`technology-item ${
                                      index !==
                                      casestudy.acf.technology.length - 1
                                        ? "mr-4"
                                        : ""
                                    }`}
                                  >
                                    {tech}
                                  </span>
                                )
                              )}
                            </div>
                          ) : (
                            <p>No technologies listed</p>
                          )}
                        </td>
                      </tr>
                      <tr></tr>
                    </tbody>
                  </table>
                </div> */}

                <div className="text-left  m-[0_20px_30px_0]  mt-6 bg-[length:400px_auto]">
                  <div className="border-b pb-4">
                    <div className="flex items-center pb-2">
                      <Image
                        src="/images/icons/vector.png"
                        alt="Email Icon"
                        className="mr-2 w-5 h-4"
                        width={16}
                        height={16}
                      />
                      <p className="text-xl font-medium">
                        Client:
                      </p>
                    </div>
                    <p>
                      {casestudy?.acf?.client_name}
                    </p>
                  </div>

                  <div className="border-b pb-4 pt-2">
                    <div className="flex items-center pb-2">
                      <Image
                        src="/images/icons/Industry.png"
                        alt="Email Icon"
                        className="mr-2 w-5 h-4"
                        width={16}
                        height={16}
                      />
                      <p className="text-xl font-medium">
                        Industry:
                      </p>
                    </div>
                    <p>
                      {casestudy?.acf?.industry}
                    </p>
                  </div>

                  <div className="border-b pb-4 pt-2">
                    <div className="flex items-center pb-2">
                      <Image
                        src="/images/icons/case location.png"
                        alt="Email Icon"
                        className="mr-2 w-4 h-4"
                        width={16}
                        height={16}
                      />
                      <p className="text-xl font-medium">
                        Location:
                      </p>
                    </div>
                    <p>
                      {casestudy?.acf?.location}
                    </p>
                  </div>

                  <div className="border-b pb-4 pt-2">
                    <div className="flex items-center pb-2">
                      <Image
                        src="/images/icons/tech.png"
                        alt="Email Icon"
                        className="mr-2 w-5 h-4"
                        width={16}
                        height={16}
                      />
                      <p className="text-xl font-medium">
                        Tech Stack:
                      </p>
                    </div>
                    <p>
                      {casestudy?.acf?.technology &&
                        casestudy.acf.technology.length > 0 ? (
                        <div className="technology-list">
                          {casestudy.acf.technology.map(
                            (tech: any, index: any) => (
                              <span
                                key={index}
                                className={`technology-item ${index !==
                                    casestudy.acf.technology.length - 1
                                    ? "mr-4"
                                    : ""
                                  }`}
                              >
                                {tech}
                              </span>
                            )
                          )}
                        </div>
                      ) : (
                        <p>No technologies listed</p>
                      )}
                    </p>
                  </div>
                </div>



              </div>
            </div>
            <div className="container">
              {casestudy ? (
                <div>
                  <section
                    style={{
                      backgroundImage: "url('/images/banner/bg.svg')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      padding: "20px",
                      width: "100%",
                      height: "auto"
                    }}
                  >
                    <h3 className="text-xl font-bold pb-2">Problems</h3>
                    <CardList data={casestudy.acf.problems} />
                  </section>

                  <section className="p-5">
                    <h3 className="text-xl font-bold pb-2">Solutions</h3>
                    <CardList data={casestudy.acf.solutions} />
                  </section>

                  <section
                  style={{
                    backgroundImage: "url('/images/banner/bg.svg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    padding: "20px",
                    width: "100%",
                    height: "auto"
                  }}>
                    <h3 className="text-xl font-bold pb-2">Key Features</h3>
                    <CardList data={casestudy.acf.key_features} />
                  </section>
                </div>
              ) : (
                <p>No case study data available</p>
              )}
            </div>
            <div className="p-5 mt-6">
              <h3 className="text-xl font-bold">Conclusion</h3>
              <p
                 className="my-2 sm:text-medium text-lg sm:leading-8 pr-4"
                dangerouslySetInnerHTML={{
                  __html: casestudy?.acf?.conclusion || "",
                }}
              ></p>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
