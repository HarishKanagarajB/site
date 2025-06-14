"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import AxiosInstance from "../utils/axiosInstance";
import GlobalLoader from "../utils/GlobalLoader";
import Link from "next/link";
export default function CaseStudys() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    AxiosInstance.get("case-study/")
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);
  return (
    <>
      {loading ? (
        <div>
          <GlobalLoader />
          <div style={{ minHeight: "100vh" }}></div>
        </div>
      ) : error ? (
        <div className="container mx-auto">
          <div className="mt-20">
            <Image
              className="mx-auto"
              src="/images/banner/error-banner.png"
              width={400}
              height={499}
              alt="Error 404"
            />
          </div>
        </div>
      ) : (
        <div className="container max-w-6xl mx-auto">
          <section className="title-block pt-24 sm:pt-28">
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
                CASE STUDY
              </h1>
            </div>
          </section>
          <div className="container mx-auto px-4 pb-14">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {data.map((data: any) => (
                <div
                  key={data.id}
                  className="portfolio-item bg-white p-3 border-r border-b border-gray-300 group relative transition-all duration-300 ease-in-out hover:bg-gray-100 h-auto"
                >
                  <Link
                    href={`/casestudy/${data.slug}`}
                    className="absolute inset-0 bg-no-repeat bg-[rgba(83,162,191,.92)] group-hover:block hidden transition-all duration-300 ease-in-out "
                    style={{
                      backgroundImage:
                        "url('./images/icons/plug-white-64.png')",
                      backgroundPosition: "50% 50%", 
                    }}
                  >
                    <h3 className="mt-80 text-center text-xl font-semibold text-white ">
                      {data.title.rendered}
                    </h3>
                  </Link>
                  <div className="case-logo mb-6 justify-center">
                    <div className="case-logo mb-6 justify-center flex align-middle">
                      {data?.acf?.thumbnail_image && (
                        <img src={data.acf.thumbnail_image.url} alt="Thumbnail" />
                      )}
                    </div>

                    <h3 className="text-center text-xl font-semibold" >{data.title.rendered}</h3>
                  </div>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: data.excerpt.rendered,
                    }}
                    className="text-gray-600 mb-7 sm:text-sm text-xs  text-center"
                  ></p>
                  <ul className="flex justify-center">
                    <li className="inline-block text-sm text-gray-500 font-light">
                      <p>
                        {data?.acf?.technology &&
                          data.acf.technology.length > 0 ? (
                          <div className="technology-list">
                            {data.acf.technology.map(
                              (tech: any, index: any) => (
                                <span
                                  key={index}
                                  className={`technology-item ${index !==
                                    data.acf.technology.length - 1
                                    ? "mr-2"
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
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
