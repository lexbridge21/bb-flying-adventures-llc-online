import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useRef } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const southTrips = [
  {
    image: "/advrslaura.png",
    title: "Laura Allen",
    description:
      "A lover of warm beach towns, local eats and a salted rim. Mom of two divas often last in the carpool line.",
  },

  {
    image: "/advrs-sim.png",
    title: "Betsy Simpson",
    description:
      "A lover of travel that is always researching the next new place to visit.",
  },
  {
    image: "/saima.png",
    title: "Saima Khan",
    description: "Welcome, and thanks for stopping by!",
  },
  {
    image: "/advrs-keeton.png",
    title: "Lauren Keeton",
    description:
      "I am either on a trip or planning one and sometimes both at once.",
  },
  {
    image: "/advrs-drimer.png",
    title: "Micah Drimmer",
    description: "Meticulous travel planner with a perpetual travel itch.",
  },
  {
    image: "/advrsalberto.png",
    title: "Alberto Mussali",
    description: `I'm a passionate traveler who believes in experiencing every destination to the fullest.`,
  },
];

export default function SouthAmericaAdvisor() {
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
        {southTrips.map((trip, index) => (
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
