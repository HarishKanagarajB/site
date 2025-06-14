import AxiosInstance from "@/app/utils/axiosInstance";
import Image from "next/image";
import Link from "next/link";

interface Expertise {
  image_name_: string;
  title: string;
  description_: string;
  thumbnail_image: {
    url: string;
  };
}

interface Solution {
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

interface PageProps {
  params: Promise<{ slug?: string[] }>; 
}

async function getSolution(slug: string[]): Promise<Solution | null> {
  try {
    const response = await AxiosInstance.get(`solution-v3?slug=${slug.join("/")}`);
    return Array.isArray(response.data) && response.data.length > 0
      ? response.data[0]
      : null;
  } catch (err) {
    return null;
  }
}


export default async function SolutionDetailPage(props: PageProps) {
  const { slug = [] } = await props.params; 
  const solution = await getSolution(slug);

  if (!solution) {
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
    <div className="container max-w-6xl mx-auto sm:px-4">
      <section className="title-block pt-24 sm:pt-28">
        <div className="text-center pt-2 mb-6">
          <Link href="/solutions">
            <p className="text-base uppercase">Solutions</p>
          </Link>
          <h1
            className="sm:text-3xl text-lg m-0 font-bold relative pb-3 inline-block"
            style={{
              backgroundImage: "url('/images/icons/three-dot.png')",
              backgroundSize: "43px 9px",
              backgroundPosition: "50% 46px",
              backgroundRepeat: "no-repeat",
              paddingBottom: "30px",
            }}
          >
            {solution?.title?.rendered}
          </h1>
        </div>
        <div className="bg-white shadow-md p-4">
          <div
            className="sm:text-base text-sm leading-[1.5] text-center max-w-4xl mx-auto wp-description"
            dangerouslySetInnerHTML={{
              __html: solution?.content?.rendered || "",
            }}
          ></div>
        </div>
      </section>

      <section className="testi-block bg-gray-50 p-6 mb-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {solution?.acf?.expertise?.map((item, index) => (
            <div
              key={index}
              className="single-services bg-white h-full flex flex-col shadow-md hover:shadow-lg transition"
            >
              <div className="p-6 flex-1">
                <div className="case-logo mb-6 flex justify-start">
                  <Image
                    src={`/images/thumbnail/solutions/${item.image_name_}`}
                    width={80}
                    height={80}
                    alt="Thumbnail"
                  />
                </div>
                <h3 className="text-lg text-left font-bold text-black mb-2">
                  {item.title}
                </h3>
                <div
                  className="sm:text-base text-xs leading-[1.5] text-black text-left sm:w-5/6"
                  dangerouslySetInnerHTML={{
                    __html: item.description_,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
