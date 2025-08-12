import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useRef } from "react";

const trips = [
  {
    title: "Mediterranean islands",
    desc: "Get these under-the-radar islands on your radar.",
    img: "/medi.png",
  },
  {
    title: "Dolomites",
    desc: "Redefine the great outdoor",
    img: "/dolomite.png",
  },
  {
    title: "High-end cruising",
    desc: "Forget about what you Knew about seabound vacations.",
    img: "/high-end.png",
  },
  {
    title: "New York City",
    desc: "Put the athleisure away: It's time to go out.",
    img: "/n-city.png",
  },
  {
    title: "Morocco",
    desc: "Non-stop flight to marrakech? Say less.",
    img: "/morocco.png",
  },
  {
    title: "Thailand",
    desc: `Why watch "The White Lotus" when you can live it? `,
    img: "/thailland.png",
  },
];

export default function SummerHotSwiper() {
  const swiperRef = useRef(null);

  return (
    <section className=" px-4 md:px-10 py-12 lg:mt-[-15rem] mt-[-20rem]">
      {/* Header */}
      <div className="flex justify-between items-center relative mb-6">
        {/* Custom Round Arrows */}
        <div className="hidden md:flex gap-3 absolute right-0 top-1/2 -translate-y-1/2">
          <button
            className="w-8 h-8  cursor-pointer rounded-full border flex items-center justify-center hover:bg-black hover:text-white transition"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <FaArrowLeft />
          </button>

          <button
            className="w-8 h-8 cursor-pointer rounded-full border flex items-center justify-center hover:bg-black hover:text-white transition"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Navigation, Pagination]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
        }}
        breakpoints={{
          320: { slidesPerView: 1.1, spaceBetween: 15 }, // slight peek
          500: { slidesPerView: 1.5, spaceBetween: 18 }, // partial second card
          676: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 25 },
        }}
        className=" mt-[3rem] pb-10"
      >
        {trips.map((trip, i) => (
          <SwiperSlide key={i}>
            <img
              src={trip.img}
              alt={trip.title}
              className="w-full h-64 object-cover mb-5"
            />
            <div className="mt-[-0.5rem]">
              <h3 className="text-lg sm:text-xl  lg:text-3xl mb-2 font-chiswick">
                {trip.title}
              </h3>
              <p className=" text-sm sm:text-base lg:text-[1.2rem] text-[#63574a] mb-4 font-blanco">
                {trip.desc}
              </p>
            </div>
          </SwiperSlide>
        ))}

        {/* Pagination (hidden on large screens) */}
        <div className="swiper-pagination hidden md:hidden mt-[4rem]"></div>
      </Swiper>
    </section>
  );
}
