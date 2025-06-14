"use client";
import React, { useEffect, useState } from "react";
import AxiosInstance from "../utils/axiosInstance";
import GlobalLoader from "../utils/GlobalLoader";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

export default function Blogs() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    AxiosInstance.get("blog/")
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const jsonLd = data.map((data: any) => ({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    name: data?.title?.rendered || "",
    description: (data?.excerpt?.rendered || "").replace(/<[^>]+>/g, "").replace(/"/g, "'"),
    datePublished: data?.acf?.date,
    url: `https://usistech.com/blog/${data.slug}`,
    logo: "https://usistech.com/images/logo/logo.png",
    publisher: {
      "@type": "Organization",
      "@id": "https://usistech.com",
       "name": "uSiS Techonologies",
      "logo":{
         "@type": "ImageObject",
         "@id": "https://usistech.com/images/logo/logo.png",
         "url": "https://usistech.com/images/logo/logo.png",
          "width": "600",
          "height": "60"
      }
    },
  }));
  //  console.log(JSON.stringify(jsonLd));

  return (
    <>
      {jsonLd.map((schema, index) => (
        <Script
          key={`blog-schema-${index}`}
          id={`blog-schema-${index}`}
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <div className="max-w-6xl sm:mx-auto mx-0 ">
        <section className="title-block pt-20 sm:pt-28">
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
              BLOG
            </h1>
          </div>
        </section>

        <div
          className="max-w-7xl mx-auto sm:mb-14 sm:p-10 p-4 bg-white"
          style={{
            boxShadow: "0 0 12px rgba(0, 0, 0, 0.07)",
          }}
        >
          {loading ? (
            <div>
              <GlobalLoader />
              <div style={{ minHeight: "100vh" }}></div>
            </div>
          ) : error ? (
            <div>Error: {error}</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-6">
              {data.map((data: any) => (
                <div key={data.id}>
                  <Link href={`/blog/${data.slug}`}>

                    <div className="w-full hover:shadow-md border transition-shadow duration-200 p-2 h-full flex flex-col md:flex-row items-start gap-5">
                      <Image
                        src={data.acf.thumbnail_image.url}
                        width={350}
                        height={250}
                        alt="Blog Image"
                        className="flex-shrink-0 w-auto h-[250px]"
                      />

                      <div className="flex flex-col justify-between w-full">
                        <div>
                          <div className="mb-3 font-semibold text-base sm:text-lg pr-5">
                            {data.title.rendered}
                          </div>

                          <div
                            className="mb-4 sm:text-base text-sm text-gray-700 leading-normal"
                            dangerouslySetInnerHTML={{
                              __html: data.excerpt.rendered || "",
                            }}
                          ></div>

                          <div className="mb-2 pr-5 flex flex-wrap gap-3">
                            <div
                              className="flex items-center gap-2  rounded-md text-xs"
                            >
                              Posted on: {data.acf.date}
                            </div>
                          </div>
                        </div>

                        <div className="pr-5 flex flex-wrap gap-3">
                          <div className="flex items-center gap-2 py-1 font-bold rounded-md  text-[#4581E7] text-sm">
                            Read More
                            <Image
                              src="/images/icons/career-arrow.png"
                              width={12}
                              height={12}
                              alt="Success icon"
                            />
                          </div>
                        </div>
                      </div>
                    </div>









                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </>
  );
}
