import Image from "next/image";
import Link from "next/link";
import AxiosInstance from "../utils/axiosInstance";
import Script from "next/script";

const generateProductSchema = (products: any[]) =>
  products.map((product: any) => ({
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product?.title?.rendered || "",
    "description": product?.excerpt?.rendered.replace(/<[^>]+>/g, "") || "",
    "productType": product?.acf?.category || "IT Products",
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
    "url": `https://usistech.com/product/${product.slug}`
  }));

async function getProducts() {
  try {
    const [productsResponse] = await Promise.all([
      AxiosInstance.get("product"),
    ]);


    const productsData = productsResponse.data;

    const products = Array.isArray(productsData)
      ? productsData
      : Array.isArray(productsData?.data)
      ? productsData.data
      : [];


    return { products };
  } catch (error) {
    console.error("Failed to fetch products and solutions:", error);
    return { products: [], solutions: [], error: "Failed to load data" };
  }
}


export default async function ProductPage() {
  const { products, error } = await getProducts();

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
    {products.length > 0 &&
  generateProductSchema(products).map((schema, index) => (
    <Script
      key={`product-schema-${index}`}
      id={`product-schema-${index}`}
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  ))}

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
                PRODUCT
              </h1>
            </div>
          </section>
          <div className="max-w-6xl sm:mx-auto mx-0 sm:p-8 p-4 shadow-md"
            style={{ backgroundColor: '#F9FAFB' }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
              {products.map((item: any) => (
                <div key={item.id} className="single-products bg-white hover:shadow-lg h-full flex flex-col border-[0.1px] border-gray-200">
                  <Link href={`/product/${item.slug}`  as const}>
                    <div className="p-6 flex-1">
                      <div className="case-logo mb-6 justify-start">
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


                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

        </div>
    </>
  );
}
