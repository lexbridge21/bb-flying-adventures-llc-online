import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useRef } from "react";

const trips = [
  {
    title: "Summer travel",
    desc: "A modern cruise line known for its laid-back culture and ambiance, offering trips to the Caribbean, Bermuda, Alaska, Hawai'i, and Europe.",
    img: "/summer.png",
    link: "/summer",
  },
  {
    title: "Honeymoons",
    desc: "You've already planned the wedding. Why add anything else to your plate?",
    img: "/honeymoon.png",
    link: "/honeymoons",
  },
  {
    title: "Cruises",
    desc: "BB Advisors matchmake every sea-bound passenger to the right ship, whether it's your first or fiftieth time on board.",
    img: "/cruises.png",
    link: "/cruises",
  },
  {
    title: "Itineraries & tours",
    desc: "Our advisors curate multi-stop itineraries that blend culture, cuisine, adventure, and relaxation into a seamless travel experience.",
    img: "/itineraries-tour.png",
    link: "/itineraries-tour",
  },
  {
    title: "Celebrations & milestones",
    desc: "From milestone celebrations to epic get-togethers, Fora makes planning group travel easy. Let an expert advisor bring your vision to life.",
    img: "/celebrate.png",
    link: "/celebrate",
  },
  {
    title: "Private jets, helicopters & flights",
    desc: "Whether you're flying private or business class, our advisors handle the details—so you can sit back, relax, and arrive in style.",
    img: "/private-jet.png",
    link: "/private-jets",
  },
  {
    title: "Safaris",
    desc: "From leopard sightings to gorilla trekking, safaris are where bucket lists meet reality. Let Fora turn your wildest dreams into wild encounters.",
    img: "/safari.png",
    link: "/safari",
  },
];

export default function NextTrip() {
  const swiperRef = useRef(null);

  return (
    <section className=" px-4 md:px-10 py-12 lg:mt-[-15rem] mt-[-20rem]">
      {/* Header */}
      <div className="flex justify-between items-center relative mb-6">
        <h2 className="text-xl sm:text-2xl lg:text-3xl md:text-[20px] font-[500] font-chiswick">
          Book your next trip with a BB Advisor
        </h2>

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
            <Link to={trip.link}>
              <img
                src={trip.img}
                alt={trip.title}
                className="w-full h-64 object-cover mb-5"
              />
            </Link>
            <div className="mt-[-0.5rem]">
              <h3 className="text-lg sm:text-xl  lg:text-3xl mb-2 font-chiswick">
                {trip.title}
              </h3>
              <p className=" text-sm sm:text-base lg:text-[1.2rem] text-[#63574a] mb-4 font-blanco">
                {trip.desc}
              </p>
              <button
                className="border border-black px-4 py-2 text-sm sm:text-base hover:bg-black hover:text-white transition-colors duration-200 cursor-pointer font-chiswick"
                onClick={() => (window.location.href = trip.link)}
              >
                LEARN MORE
              </button>
            </div>
          </SwiperSlide>
        ))}

        {/* Pagination (hidden on large screens) */}
        <div className="swiper-pagination hidden md:hidden mt-[4rem]"></div>
      </Swiper>
    </section>
  );
}
