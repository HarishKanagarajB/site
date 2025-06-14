"use client";
import AxiosInstance from "@/app/utils/axiosInstance";
import GlobalLoader from "@/app/utils/GlobalLoader";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
interface Expertise {
  title: string;
  description_: string;
  thumbnail_image: {
    url: string;
  };
}

interface Domain {
  title?: {
    rendered?: string;
  };
  content?: {
    rendered?: string;
  };
  acf?: {
    expertise?: Expertise[];
  };
}

interface DomainDetailProps {
  params: Promise<{ slug: string[] }>; // params is now a Promise that resolves to an object with slug
}

export default function DomainDetail({ params }: DomainDetailProps) {
  const [service, setDomain] = useState<Domain | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  // Use React.use() to unwrap params (since it's a Promise)
  const unwrappedParams = React.use(params); // This will resolve the Promise and get the actual params
  const { slug } = unwrappedParams || {}; // Access the slug from unwrappedParams

  useEffect(() => {
    // If slug is not available, do nothing
    if (!slug || slug.length === 0) return;

    const fetchDomain = async () => {
      try {
        setLoading(true);
        // Create the slug query string by joining the array with "/"
        const response = await AxiosInstance.get(
          `solution-v2?slug=${slug.join("/")}`
        );

        if (
          response.data &&
          Array.isArray(response.data) &&
          response.data.length > 0
        ) {
          // Set the first service from the array
          setDomain(response.data[0]);
        } else {
          setDomain(null);
        }
      } catch (err: any) {
        // Handle error if fetching fails
        setError("Error fetching data: " + err.message);
      } finally {
        // Set loading to false after fetching
        setLoading(false);
      }
    };

    fetchDomain();
  }, [slug]); // Run effect whenever slug changes

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
        <div className="container max-w-6xl mx-auto sm:px-4">
        
        <section className="title-block pt-24 sm:pt-28">
          <div className="text-center pt-8 mb-6">
            
              <p className="text-base uppercase">Industry</p>
            
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
              {service?.title?.rendered}
            </h1>
          </div>
      
          <div className="bg-white shadow-md p-4">
            <div className="sm:text-base text-sm leading-[1.5] text-center max-w-4xl mx-auto wp-description">
              <div
                dangerouslySetInnerHTML={{
                  __html: service?.content?.rendered || "",
                }}
              ></div>
            </div>
          </div>
        </section>
      
      
        <section className="testi-block bg-gray-50 px-8 py-10 sm:mb-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {service?.acf?.expertise?.map((expertiseItem, index) => (
              <div
                key={index}
                className="single-services bg-white h-full flex flex-col shadow-md hover:shadow-lg transition"
              >
                <div className="p-6 flex-1">
                  <div className="case-logo mb-6 flex justify-start">
                    <Image
                      src={expertiseItem.thumbnail_image.url}
                      width={80}
                      height={80}
                      alt="Thumbnail"
                    />
                  </div>
                  <h3 className="text-lg text-left font-bold text-black mb-2">
                    {expertiseItem.title}
                  </h3>
                  <div
                    className="sm:text-base text-sm leading-[1.5] text-black text-left"
                    dangerouslySetInnerHTML={{
                      __html: expertiseItem.description_,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      

      )}

    </>
  );
}
