import AxiosInstance from "@/app/utils/axiosInstance";
import Image from "next/image";
import Link from "next/link";
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

interface Blog {
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

async function getBlog(slug: string[]): Promise<Blog | null> {
    try {
        const response = await AxiosInstance.get(`blog?slug=${slug.join("/")}`);
        return Array.isArray(response.data) && response.data.length > 0
            ? response.data[0]
            : null;
    } catch (error) {
        return null;
    }
}


export default async function BlogDetail({
    params,
}: {
    params: Promise<{ slug?: string[] }>;
}) {
    const { slug = [] } = await params;
    const blog = await getBlog(slug);
    const relatedArticles = await AxiosInstance.get("blog").then(res => res.data).catch(() => []);


    if (!blog) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <Image
                    className="mx-auto"
                    src="/images/banner/error-banner.png"
                    width={400}
                    height={499}
                    alt="Error 404"
                />
            </div>
        );
    }

    return (
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
                                    .filter((item: { slug: string[]; }) => item.slug !== slug)
                                    .map((article: { acf: { date: any; }; id: Key | null | undefined; slug: any; title: { rendered: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; }; }) => {
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
    );
}


export async function generateStaticParams() {
    try {
        const res = await AxiosInstance.get("blog");
        const allBlogs = res.data;

        return allBlogs.map((item: any) => ({
            slug: item.slug.split("/"),
        }));
    } catch (error) {
        return [];
    }
}


