import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useRef } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const caribbeanTrips = [
  {
    image: "/advrs-joanna.png",
    title: "Joanna Johnsen",
    description:
      "Boston-based Equestrian. Mom of three boys. Catch me anywhere the sun is shining!",
  },

  {
    image: "/advrs-claudia.png",
    title: "Claudia Riegelhaupt",
    description:
      "A mom of two, always chasing passport stamps, lover of good design, good food and beautiful experiences. Workout and tennis junkie.",
  },
  {
    image: "/advrs-efros.png",
    title: "Marina Efros",
    description:
      "A very detailed and organized travel planner. Based in New Jersey with a love of exploring new destinations.",
  },
  {
    image: "/advrs-payton.png",
    title: "Payton Brown",
    description:
      "Hi, I'm Payton! I am originally from South Georgia and whenever I am not traveling far and wide, I reside in the heart of Atlanta.",
  },
  {
    image: "/advrs-parry.png",
    title: "Kelsey Parry",
    description:
      "Pastry chef, sommelier, points hoarder and cruising enthusiast. Add in a side order of history, please.",
  },
  {
    image: "/advrs-budd.png",
    title: "Heather Budd",
    description:
      "I am a lifelong travel enthusiast and have visited over 35 countries and lived in Europe for 12 years.",
  },
];

export default function CaribbeanAdvisor() {
  const swiperRef = useRef(null);

  const handlePrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };

  const handleNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  return (
    <section className="px-4 md:px-10 lg:px-16 py-10 bg-[#f8f5f1] font-chiswick lg:mt-15">
      {/* Heading & Arrows */}
      <div className="flex justify-between items-center mb-6 relative">
        <h3 className="text-2xl md:text-3xl lg:text-5xl">
          Suggested BB Travel Advisors
        </h3>
        {/* Custom Round Arrows */}
        <div className="hidden md:flex gap-3 absolute right-0 top-1/2 -translate-y-1/2">
          SEE ALL
          <button
            onClick={handlePrev}
            className="w-6 h-6 cursor-pointer rounded-full border flex items-center justify-center hover:bg-black hover:text-white transition"
          >
            <BsChevronCompactLeft />
          </button>
          <button
            onClick={handleNext}
            className="w-6 h-6 cursor-pointer rounded-full border flex items-center justify-center hover:bg-black hover:text-white transition"
          >
            <BsChevronCompactRight />
          </button>
        </div>
      </div>

      {/* Swiper Carousel */}
      <Swiper
        spaceBetween={20}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        breakpoints={{
          320: {
            slidesPerView: 1.2, // Show 1 full card and part of the next
          },
          768: {
            slidesPerView: 2.2,
          },
          1024: {
            slidesPerView: 3.2,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
      >
        {caribbeanTrips.map((trip, index) => (
          <SwiperSlide key={index}>
            <div className=" overflow-hidden h-full text-start">
              <img
                src={trip.image}
                alt={trip.title}
                className="w-full h-80 object-cover lg:mt-10"
              />
              <div className="py-4 flex flex-col h-full ">
                <h3 className="text-x1 md:text-2x1 font-normal lg:text-3xl mb-2">
                  {trip.title}
                </h3>

                <p className="text-sm font-blanco lg:text-lg text-gray-700 leading-snug  ">
                  {trip.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
