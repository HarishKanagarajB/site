import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; // Import Swiper styles
import Card from "./Card";
import Image from "next/image";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

interface CardListProps {
  data: {
    problem_statement?: string;
    solution_statement?: string;
    keyword_statement?: string;
    icon?: string;
  }[];
}

const CardList: React.FC<CardListProps> = ({ data }) => {
  const [swiperInstance, setSwiperInstance] = useState<any>(null);
  const [currentSection, setCurrentSection] = useState(0); // To track the current section
  const [isFirstSlide, setIsFirstSlide] = useState(true); // Track if it's the first slide
  const [isLastSlide, setIsLastSlide] = useState(false); // Track if it's the last slide

  // Calculate how many sections of slides there are
  const slidesPerSection = 1; 
  const sections = Math.ceil(data.length / slidesPerSection);

  
  const handleNextSection = () => {
    if (swiperInstance) {
      const nextSection = currentSection + 1;
      if (nextSection < sections) {
        swiperInstance.slideTo(nextSection * slidesPerSection);
        setCurrentSection(nextSection);
      }
    }
  };

  // Move to the previous section
  const handlePrevSection = () => {
    if (swiperInstance) {
      const prevSection = currentSection - 1;
      if (prevSection >= 0) {
        swiperInstance.slideTo(prevSection * slidesPerSection); 
        setCurrentSection(prevSection);
      }
    }
  };

  // Update the buttons disabled state on slide change
  const handleSlideChange = (swiper: any) => {
    const isAtLastSlide = swiper.isEnd; 
    const isAtFirstSlide = swiper.isBeginning; 

    setIsLastSlide(isAtLastSlide); 
    setIsFirstSlide(isAtFirstSlide); 
  };

  return (
    <div className="relative card-list">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        onSwiper={setSwiperInstance}
        onSlideChange={handleSlideChange}
        spaceBetween={20}
        slidesPerView={4}
        slidesPerGroup={slidesPerSection} 
        className="mx-8"
        breakpoints={{
          320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          768: {
            slidesPerView: 4,
            slidesPerGroup: 1,
          },
        }}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <Card
              title={
                item.problem_statement ||
                item.solution_statement ||
                item.keyword_statement ||
                "No Title"
              }
              description={
                item.problem_statement ||
                item.solution_statement ||
                item.keyword_statement ||
                "No Description"
              }
              icon={item.icon || ""}
            />
          </SwiperSlide>
        ))}
      </Swiper>

    
      <div className="absolute right-[40px] top-[-30px] z-10 transform -translate-y-1/2">
        <button
          className="swiper-custom-prev"
          disabled={isFirstSlide}
          onClick={handlePrevSection}
          aria-label="Previous Section"
        >
          <Image
            src="/images/icons/arrow-left.svg"
            alt="Previous"
            className="w-7 h-7"
            width={34}
            height={34}
          />
        </button>
      </div>

    
      <div className="absolute right-0 top-[-30px] z-10 transform -translate-y-1/2">
        <button
          className="swiper-custom-next"
          onClick={handleNextSection}
          disabled={isLastSlide}
          aria-label="Next Section"
        >
          <Image
            src="/images/icons/arrow-right.svg"
            alt="Next"
            className="w-7 h-7"
            width={16}
            height={16}
          />
        </button>
      </div>
    </div>
  );
};

export default CardList;





















