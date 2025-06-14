"use client";
import AxiosInstance from "@/app/utils/axiosInstance";
import GlobalLoader from "@/app/utils/GlobalLoader";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import Head from "next/head";

interface Blogs {
    title?: {
        rendered?: string;
    };
    experience?: {
        rendered?: string;
    };
    acf?: {
        experience?: string;
        location?: string;
        image?: any;
    };
    content?: {
        rendered?: string;
    };
    description: string;
}

interface BlogDetailProps {
    params: Promise<{ slug: string[] }>; // params is now a Promise that resolves to an object with slug
}

export default function BlogDetail({ params }: BlogDetailProps) {
    const [blog, setBlog] = useState<Blogs | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const [relatedArticles, setRelatedArticles] = useState<any[]>([]);


    // Use React.use() to unwrap params (since it's a Promise)
    const unwrappedParams = React.use(params); // This will resolve the Promise and get the actual params
    const { slug } = unwrappedParams || {}; // Access the slug from unwrappedParams

    useEffect(() => {
        // If slug is not available, do nothing
        if (!slug || slug.length === 0) return;

        const fetchBlog = async () => {
            try {
                setLoading(true);
                // Create the slug query string by joining the array with "/"
                const response = await AxiosInstance.get(
                    `blog?slug=${slug.join("/")}`
                );

                if (
                    response.data &&
                    Array.isArray(response.data) &&
                    response.data.length > 0
                ) {
                    // Set the first service from the array
                    setBlog(response.data[0]);
                } else {
                    setBlog(null);
                }
            } catch (err: any) {
                // Handle error if fetching fails
                setError("Error fetching data: " + err.message);
            } finally {
                // Set loading to false after fetching
                setLoading(false);
            }
        };
        AxiosInstance.get("blog/")
            .then((res) => {
                setRelatedArticles(res.data);
            })
            .catch((err) => {
                console.error("Failed to fetch related articles", err);
            });

        fetchBlog();
    }, [slug]); // Run effect whenever slug changes

    const jsonLd = blog && {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        title: blog?.title?.rendered || "",
        description: (blog?.content?.rendered || "").replace(/<[^>]+>/g, "").replace(/"/g, "'"),
        url: "https://usistech.com/blog",
        logo: "https://usistech.com/images/logo/logo.png",
        publisher: {
            "@type": "Organization",
            "@id": "https://usistech.com",
            "name": "uSiS Techonologies",
            "logo": {
                "@type": "ImageObject",
                "@id": "https://usistech.com/images/logo/logo.png",
                "url": "https://usistech.com/images/logo/logo.png",
                "width": "600",
                "height": "60"
            }
        },
    };
    //  console.log(JSON.stringify(jsonLd));
    return (
        <>
            <Head>
                {blog && (
                    <Script
                        id="blog-schema"
                        type="application/ld+json"
                        strategy="afterInteractive"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                    />
                )}
            </Head>

            {loading ? (
                <div>
                    <GlobalLoader />
                    <div style={{ minHeight: "100vh" }}></div>
                </div>
            ) : !blog || error ? (
                <div className="flex justify-center items-center min-h-screen">
                    <Image
                        className="mx-auto"
                        src="/images/banner/error-banner.png"
                        width={400}
                        height={499}
                        alt="Error 404"
                    />
                </div>
            ) : (
                <div className="max-w-6xl sm:mx-auto mx-0">
                    <section className="title-block pt-28 sm:pt-32" itemScope itemType="https://schema.org/JobPosting">
                        <div className="text-center py-0">
                            <Link href={"/blog"}>
                                <p className="text-base uppercase">Blog</p>
                            </Link>
                            <h1 itemProp="title"
                                className="sm:text-3xl text-lg m-0 font-bold relative pb-3 inline-block "
                                style={{
                                    backgroundImage: "url('/images/icons/three-dot.png')",
                                    backgroundSize: "43px 9px",
                                    backgroundPosition: "50% 52px",
                                    backgroundRepeat: "no-repeat",
                                    padding: "0 0 30px 0",
                                }}
                            >
                                {blog?.title?.rendered || ""}
                            </h1>
                        </div>

                        <div className="container bg-white shadow-md mb-14 mx-auto">
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 text-base font-helveticaNeue leading-[30px] my-6 p-8">
                                <div className="col-span-1 md:col-span-8">
                                    <Image
                                        src={blog?.acf?.image?.url}
                                        width={500}
                                        height={200}
                                        alt="Blog Image"
                                        className="w-full h-auto object-cover"
                                    />
                                    <div
                                        className="my-4 text-medium leading-8 wp-content"
                                        dangerouslySetInnerHTML={{
                                            __html: blog?.content?.rendered || "",
                                        }}
                                    ></div>
                                </div>
                                <div className="col-span-1 md:col-span-4 p-4 pt-2 wp-content bg-gray-100">
                                    <h2 className="text-xl font-semibold mb-2">Recent Articles</h2>
                                    <div>
                                        {relatedArticles
                                            .filter((item) => item.slug !== slug)
                                            .map((article) => {
                                                const originalDate = article.acf?.date;

                                                const [day, month, year] = originalDate.split('/');

                                                const parsedDate = new Date(`${year}-${month}-${day}`);
                                                if (isNaN(parsedDate.getTime())) {
                                                    return null; 
                                                }
                                                const now = new Date();
                                                const isCurrentYear = parsedDate.getFullYear() === now.getFullYear();
                                                const formattedDate = isCurrentYear
                                                    ? parsedDate.toLocaleDateString("en-US", {
                                                        month: "short",
                                                        day: "numeric",
                                                    })
                                                    : parsedDate.toLocaleDateString("en-US", {
                                                        month: "short",
                                                        day: "numeric",
                                                        year: "numeric",
                                                    });
                                                return (
                                                    <div key={article.id} className="mb-2">
                                                        <Link
                                                            href={`/blog/${article.slug}`}
                                                            className="block text-base font-normal leading-tight"
                                                        >
                                                            {article.title.rendered}
                                                        </Link>
                                                        <p className="text-sm text-gray-500 mt-2">{formattedDate}</p>
                                                        <hr className="mt-2 border-gray-300" />
                                                    </div>
                                                );
                                            })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            )}
        </>
    );
}

