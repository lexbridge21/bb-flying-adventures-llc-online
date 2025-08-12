import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useRef } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const asiaTrips = [
  {
    image: "/advrsrabia.png",
    title: "Rabia Malik",
    description:
      "Passionate about living like a local while exploring the world. ",
  },

  {
    image: "/artemis.png",
    title: "Artemis Koutsogiorgas",
    description:
      "Chicago gal living in Athens, Greece! Eating my way through the world one restaurant at a time.",
  },
  {
    image: "/advrs-luafer.png",
    title: "Sari Laufer",
    description:
      "Full-time working mom of two, planner obsessed, NYC by birth, LA by marriage but always dreaming of TLV, OGG, KOA and more.",
  },
  {
    image: "/rhoda-matin.png",
    title: "Rhonda Martin",
    description:
      "Obsessed with scouring Google Earth for hidden gems and planning the next 'new experience'.",
  },
  {
    image: "/advrs-vistoria.png",
    title: "Victoria Arfmann",
    description:
      "NYC-based jetsetter who loves to make travel experiences for others one-of-a-kind.",
  },
  {
    image: "/advrs-johston.png",
    title: "Caitlyn Johnston",
    description:
      "I am a Nurse Practitioner who loves to travel and eat great food.",
  },
];

export default function MiddleEastAdvisor() {
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
