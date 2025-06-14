'use client';

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function HomeClient({ clients, testimonials, services, solutions }: any) {
  const serviceSwiperRef = useRef<any>(null);
  const solutionSwiperRef = useRef<any>(null);

  return (
    <>
      <div>
            <section
  id="banner"
  className="banner relative w-full sm:h-screen h-[50vh] overflow-hidden"
>
  <video
    className="absolute top-0 left-0 w-full h-full object-cover"
    src="/images/banner/bg-video.mp4" 
    autoPlay
    loop
    muted
    playsInline
  />
  <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30"></div>

  <div className="relative z-10 flex sm:items-center items-end justify-center text-center w-full sm:h-screen h-[50vh]">
    <div className="bannercaption w-[300px] sm:w-[600px]">
      <h1 className="text-white text-xl md:text-3xl font-bold mb-3 sm:mt-20 -mt-[200px] sm:leading-10 leading-6">
        Most Preferred IT Partner of the Businesses, Worldwide
      </h1>
      <h3 className="text-white text-md md:text-xl mt-7 sm:mt-0 font-medium leading-6 sm:leading-0">
        We Are Customer Centric and So Are Our Smart Solutions - User
        Friendly, Efficient, Reliable, And High Quality
      </h3>
    </div>
  </div>
</section>

        <section className="box-block relative sm:-mt-[140px] sm:px-6 lg:px-8 z-10">
          <div className="container max-w-6xl mx-auto">
            <div className="contentwrap-shadow  bg-white  sm:mb-12 shadow-xl">
              <div className="wat-we-do p-6 flex flex-wrap justify-between">
                <div className="w-full md:w-1/3 mb-6 md:mb-0">
                  <div className="we-do-single text-center sm:py-4 sm:px-8">
                    <div className="single-image mb-4">
                      <Image
                        className="mx-auto w-14 sm:w-24"
                        src="/images/banner/hand.png"
                        width={90}
                        height={50}
                        alt="Prompt Customer Support"
                      />
                    </div>
                    <h2 className="text-lg font-semibold sm:font-bold text-gray-800 mb-1 sm:mb-4 uppercase">
                      Prompt Customer Support
                    </h2>
                    <p className="text-black sm:text-sm text-[13px]">
                      Initial queries to after sales questions, our technical
                      support experts help you throughout for a quick and
                      effective resolution.
                    </p>
                  </div>
                </div>
                <div className="w-full md:w-1/3 mb-6 md:mb-0">
                  <div className="we-do-single text-center sm:py-4 sm:px-10">
                    <div className="single-image mb-4">
                      <Image
                        className="mx-auto w-9 sm:w-16"
                        src="/images/banner/code.png"
                        width={62}
                        height={50}
                        alt="Great Value for Money"
                      />
                    </div>
                    <h2 className="text-lg font-semibold sm:font-bold text-gray-800 mb-1 sm:mb-4 uppercase">
                      Great Value for Money
                    </h2>
                    <p className="sm:text-sm text-[13px]">
                      Easy to use technology fuels up your business processes to
                      deliver accurate &amp; timely output.
                    </p>
                  </div>
                </div>
                <div className="w-full md:w-1/3">
                  <div className="we-do-single text-center sm:py-4 sm:px-10">
                    <div className="single-image mb-4">
                      <Image
                        className="mx-auto w-9 sm:w-12"
                        src="/images/banner/mob-app.png"
                        width={50}
                        height={50}
                        alt="Quality Assurance"
                      />
                    </div>
                    <h2 className="text-lg font-semibold sm:font-bold  text-gray-800 mb-1 sm:mb-4 uppercase">
                      Quality Assurance
                    </h2>
                    <p className="sm:text-sm text-[13px]">
                      Every project we deliver is thoroughly quality assured to
                      instill process efficiency, information reliance, and
                      usability. Repeatedly.
                    </p>
                  </div>
                </div>
              </div>

              <section className="testi-block bg-gray-50 sm:py-12 pt-5 bg-cover bg-center min-h-32 sm:min-h-[520px]">
                <div className="container service mx-auto sm:px-24 relative">
                  <h2 className="text-center text-base sm:text-xl text-[#e04a31] font-extrabold mb-2 sm:mb-10 uppercase">
                    Our Services
                  </h2>

            
                    <>
                      <div className="relative p-5 pt-2 sm:pt-0 sm:p-0">
                        <Swiper
                          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                          onSwiper={(swiper) => {
                            serviceSwiperRef.current = swiper;
                          }}
                          navigation={{
                            nextEl: ".service-swiper-next",
                            prevEl: ".service-swiper-prev",
                          }}
                          pagination={{
                            clickable: true,
                          }}
                          spaceBetween={20}
                          slidesPerView={3}
                          autoplay={{
                            delay: 6000,
                            disableOnInteraction: false,
                          }}
                          loop={true}
                          breakpoints={{
                            320: { slidesPerView: 2, spaceBetween: 0 },
                            640: { slidesPerView: 2, spaceBetween: 15 },
                            1024: { slidesPerView: 3, spaceBetween: 20 },
                          }}

                        >
                          {services.map((item: any) => (
                            <SwiperSlide key={item.id} className="p-2 sm:p-0"  >
                              <Link href={`/service/${item.slug}`}>
                                <div className="single-services bg-white h-full hover:shadow-lg sm:!min-h-[410px] flex flex-col border-[0.1px] border-gray-20">

                                  <div className="hidden sm:flex p-4 lg:p-8 flex-1 flex-col">
                                    <div className="case-logo mb-6 flex justify-start items-center">
                                      {item?.acf?.thumbnail_image && (
                                        <Image
                                        src={`/images/thumbnail/service/${item.acf.image_name_}`}
                                          width={80}
                                          height={80}
                                          alt="Thumbnail"
                                        />
                                      )}
                                    </div>
                                    <h3 className="text-lg text-left font-bold text-black mb-2">
                                      {item.title.rendered}
                                    </h3>
                                    <div
                                      dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }}
                                      className="text-sm leading-relaxed mb-4 text-left text-black"
                                    ></div>
                                    {Array.isArray(item?.acf?.techstack) && item.acf.techstack.length > 0 && (
                                      <div className="flex flex-wrap gap-4">
                                        {item.acf.techstack
                                          .filter((tech: any) => tech.thumbnail_image)
                                          .slice(0, 5)
                                          .map((tech: any, index: number) => (
                                            <div key={index} className="relative group">
                                              <Image
                                                 src={`/images/thumbnail/tech/${tech.image_name_}`}
                                                alt={tech.title}
                                                height={40}
                                                width={40}

                                                className="object-contain h-8 w-auto"
                                              />
                                              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 rounded bg-black text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
                                                {tech.title}
                                              </div>
                                            </div>
                                          ))}
                                      </div>
                                    )}

                                  </div>
                                  <div className="block sm:hidden !min-h-[150px] border-[0.1px] border-gray-200">
                                    <div className="case-logo my-4 flex justify-center items-center">
                                      {item?.acf?.thumbnail_image && (
                                        <Image
                                        src={`/images/thumbnail/service/${item.acf.image_name_}`}
                                          width={48}
                                          height={48}
                                          alt="Thumbnail"
                                        />
                                      )}
                                    </div>
                                    <h3 className="text-xs text-center font-bold text-black mb-2">
                                      {item.title.rendered}
                                    </h3>
                                  </div>
                                </div>
                              </Link>
                            </SwiperSlide>
                          ))}
                        </Swiper>
                      </div>

                      <div className="custom-service-pagination flex justify-center"></div>

                      <div className="flex justify-center gap-4 sm:mt-0">
                        <button
                          className="hidden sm:block service-swiper-prev bg-white shadow-md rounded-full p-2 sm:absolute sm:left-4 sm:top-1/2 sm:-translate-y-1/2"
                          aria-label="Previous Section"
                        >
                          <Image
                            src="/images/icons/circle-chevron-left.png"
                            alt="Previous"
                            width={32}
                            height={32}
                            className="w-6 h-6 sm:w-8 sm:h-8"
                          />
                        </button>

                        <button
                          className="hidden sm:block service-swiper-next bg-white shadow-md rounded-full p-2 sm:absolute sm:right-4 sm:top-1/2 sm:-translate-y-1/2"
                          aria-label="Next Section"
                        >
                          <Image
                            src="/images/icons/circle-chevron-right.png"
                            alt="Next"
                            width={32}
                            height={32}
                            className="w-6 h-6 sm:w-8 sm:h-8"
                          />
                        </button>
                      </div>
                    </>
            
                </div>
              </section>

              <section className="testi-block pt-6 sm:py-12 bg-cover bg-center min-h-32 sm:min-h-[520px]"
                style={{ backgroundColor: '#f3f3f3' }}
              >
                <div className="container service mx-auto sm:px-24 relative">
                  <h2 className="text-center text-base sm:text-xl text-[#e04a31] font-extrabold mb-2 sm:mb-10 uppercase">
                    Industries We Serve
                  </h2>

               

           
                    <>
                      <div className="relative p-5 pt-2 sm:pt-0 sm:p-0">
                        <Swiper
                          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                          onSwiper={(swiper) => {
                            solutionSwiperRef.current = swiper;
                          }}
                          navigation={{
                            nextEl: ".solution-swiper-next",
                            prevEl: ".solution-swiper-prev",
                          }}
                          pagination={{
                            clickable: true,
                          }}
                          spaceBetween={20}
                          slidesPerView={3}
                          autoplay={{
                            delay: 6000,
                            disableOnInteraction: false,
                          }}
                          loop={true}
                          breakpoints={{
                            320: { slidesPerView: 2, spaceBetween: 0 },
                            640: { slidesPerView: 2, spaceBetween: 15 },
                            1024: { slidesPerView: 3, spaceBetween: 20 },
                          }}

                        >
                          {solutions.map((item: any) => (
                            <SwiperSlide key={item.id} className="p-2 sm:p-0"  >

                              <div className="single-services bg-white h-full hover:shadow-lg sm:!min-h-[380px] flex flex-col border-[0.1px] border-gray-20">

                                <div className="hidden sm:flex p-4 lg:p-8 flex-1 flex-col">
                                  <div className="case-logo mb-6 flex justify-start items-center">
                                    {item?.acf?.thumbnail_image && (
                                      <Image
                                      src={`/images/thumbnail/industries/${item.acf.image_name_}`}
                                        width={80}
                                        height={80}
                                        alt="Thumbnail"
                                      />
                                    )}
                                  </div>
                                  <h3 className="text-lg text-left font-bold text-black mb-2">
                                    {item.title.rendered}
                                  </h3>
                                  <div
                                    dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }}
                                    className="text-sm leading-relaxed mb-4 text-left text-black"
                                  ></div>
                                </div>
                                <div className="block sm:hidden !min-h-[150px] border-[0.1px] border-gray-200">
                                  <div className="case-logo my-4 flex justify-center items-center">
                                    {item?.acf?.thumbnail_image && (
                                      <Image
                                      src={`/images/thumbnail/industries/${item.acf.image_name_}`}
                                        width={48}
                                        height={48}
                                        alt="Thumbnail"
                                      />
                                    )}
                                  </div>
                                  <h3 className="text-xs text-center font-bold text-black mb-2">
                                    {item.title.rendered}
                                  </h3>
                                </div>
                              </div>

                            </SwiperSlide>
                          ))}
                        </Swiper>
                      </div>
                      <div className="custom-service-pagination  flex justify-center"></div>

                      <div className="flex justify-center gap-4 sm:mt-0">

                        <button
                          className="hidden sm:block solution-swiper-prev bg-white shadow-md rounded-full p-2 sm:absolute sm:left-4 sm:top-1/2 sm:-translate-y-1/2"
                          aria-label="Previous Section"
                        >
                          <Image
                            src="/images/icons/circle-chevron-left.png"
                            alt="Previous"
                            width={32}
                            height={32}
                            className="w-6 h-6 sm:w-8 sm:h-8"
                          />
                        </button>


                        <button
                          className="hidden sm:block solution-swiper-next bg-white shadow-md rounded-full p-2 sm:absolute sm:right-4 sm:top-1/2 sm:-translate-y-1/2"
                          aria-label="Next Section"
                        >
                          <Image
                            src="/images/icons/circle-chevron-right.png"
                            alt="Next"
                            width={32}
                            height={32}
                            className="w-6 h-6 sm:w-8 sm:h-8"
                          />
                        </button>
                      </div>


                    </>


                </div>
              </section>

              <section
                className="testi-block bg-gray-50 sm:py-12 py-8 bg-cover bg-center"
                style={{
                  backgroundImage: "url('./images/banner/patter-bg.jpg')",
                  backgroundSize: "150px",
                }}
              >
                <div className="container testimonals mx-auto px-4">
                  <h2 className="text-center text-base sm:text-xl text-[#e04a31] font-extrabold mb-2 sm:mb-10">
                    TESTIMONIALS
                  </h2>
                  <div
                    className=" w-full !bg-[position:42px_20%]"
                    style={{
                      backgroundImage: "url('./images/icons/quote.png')",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                

              
                      <>
                        <Swiper
                          modules={[Navigation, Pagination, Scrollbar, A11y]}
                          navigation
                          pagination={{ clickable: true }}
                          scrollbar={{ draggable: false }}
                          spaceBetween={50}
                          slidesPerView={1}
                          className="mx-8"
                        >
                          {testimonials.map((data: any) => {
                            return (
                              <SwiperSlide key={data.id} className="min-h-52 !flex items-center">
                                <div className="sm:mx-40">
                                  <div
                                    dangerouslySetInnerHTML={{
                                      __html: data.content.rendered,
                                    }}
                                    className="text-black mb-4 text-[13px] sm:text-[17px] text-center leading-5 sm:leading-8"
                                  ></div>
                                  <div className="test-details-block flex justify-center text-center">
                                    <div>
                                      <p className="sm:text-2xl text-sm mb-2">
                                        {data.title.rendered}
                                      </p>
                                      <p className="sm:text-sm text-xs  text-black">
                                        {data.acf.item_title}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </SwiperSlide>
                            );
                          })}
                        </Swiper>
                      </>
              
                  </div>
                </div>
              </section>
              {/* <div className="case-studies mt-5">
              <h2 className="text-center sm:text-lg text-base font-bold mb-3 sm:mb-6 uppercase">
                Case Studies
              </h2>
              <div className="overflow-hidden">
                <div className="relative max-w-full">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-5">
                    
                    <div className="col-span-1">
                      <div className="project-logo flex justify-center mt-5">
                        <img
                        className="w-36 sm:w-60"
                          src="/images/banner/oks.png"
                          alt="Oslo Kristne Senter"
                        />
                      </div>
                    </div>

                   
                    <div className="col-span-1">
                      <div className="project-details text-center sm:text-start">
                        <h4 className="sm:text-md text-xs font-bold mb-2">
                          OKS (Oslo Kristne Senter)
                        </h4>
                        <p className="text-black sm:text-sm text-xs">
                          Official website for the Oslo Kristne Senter. OKS
                          conducts many events in Churches across the country.
                          OKS were in need of a single platform to manage all
                          their location’s local website.
                        </p>
                      </div>
                    </div>

                    
                    <div className="col-span-1">
                      <ul className="list-disc pl-5 sm:text-sm text-xs text-black leading-6 sm:leading-7">
                        <li>User friendly Wordpress CMS platform</li>
                        <li>Developed the multisite functionality</li>
                        <li>Fully responsive and mobile compatibility</li>
                        <li>MP3 player using API</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

              <section className="our-clients bg-gray-50 bg-opacity-54 pb-10 mb-14 min-h-[80px]">
                <h2 className="text-center text-base sm:text-lg font-bold sm:p-6 p-4 uppercase">
                  Our Clients
                </h2>
            

        
                  <>
                    <ul className="clients-logos grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 sm:h-20">
                      {clients.slice(0, 4).map((data: any) => (
                        <li
                          key={data.id}
                          className="relative w-full h-20 flex justify-center items-center group"
                        >
                          <Image
                            src={data.acf.client_logo}
                            alt={`Client ${data.title.rendered}`}
                            width={156}
                            height={56}
                            className="w-[100px] sm:w-[190px] object-contain transition-all duration-300 sm:grayscale sm:group-hover:grayscale-0 sm:group-hover:opacity-100 sm:opacity-30"
                          />
                        </li>
                      ))}
                    </ul>
                  </>
            
              </section>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
