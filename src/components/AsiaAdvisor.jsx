import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useRef } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const asiaTrips = [
  {
    image: "/advrsalberto.png",
    title: "Alberto Mussali",
    description: `I'm a passionate traveler who believes in experiencing every destination to the fullest.`,
  },

  {
    image: "/advrseliza.png",
    title: "Elizabeth Kaczka",
    description:
      "Last-minute adventure enthusiast, self care aficionado and lover of opulent hotels – the world is too big and time is too short to stay idle for too long.",
  },
  {
    image: "/advsr-rachel.png",
    title: "Rachel Havens",
    description: `I'm the epitome of a "glampacker" turned connoisseur of luxury and boutique travel.`,
  },
  {
    image: "/advrs-ruth.png",
    title: "Ruth Walker",
    description:
      "I craft immersive journeys for discerning travelers—from families with teens to seasoned adventurers.",
  },
  {
    image: "/krisytnewada.png",
    title: "Kristyne Wada",
    description:
      "Meticulous travel planner who always has at least one trip (usually several) on the horizon.",
  },
  {
    image: "/advsr-kayhart.png",
    title: "Kay Hart",
    description:
      "Lover of feelings, color palettes, moodboards, mom'ing, jungles and white sand beaches intersecting, walkable cities, forest bathing, textiles and tacos",
  },
];

export default function AsiaAdvisor() {
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
        {asiaTrips.map((trip, index) => (
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
