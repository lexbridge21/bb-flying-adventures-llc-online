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
    title: "Norwegian Cruise Line",
    desc: "A modern cruise line known for its laid-back culture and ambiance, offering trips to the Caribbean, Bermuda, Alaska, Hawai'i, and Europe. ",
    img: "/cruise-line.jpg",
  },
  {
    title: "Virgin Voyages",
    desc: "A luxury adults-only cruise line offers voyages to the Caribbean, Mediterranean, Europe, and beyond. Expect excellent food, A+ wellness, and a playful vibe",
    img: "/voyage.jpg",
  },
  {
    title: "Royal Caribbean Cruises",
    desc: "An action-packed cruise experience combining innovative ships, world-class entertainment, and unforgettable destinations across the globe.",
    img: "/royal.jpg",
  },
  {
    title: "National Geographic x Lindblad",
    desc: "National Geographic photographers and scientific experts are aboard every ship, and specialized equipment like hydrophones and underwater cameras make the educational piece more immersive. ",
    img: "/national.jpg",
  },
  {
    title: "Viking",
    desc: "Viking is for the 18+ crowd — especially those who appreciate ongoing learning and immersing themselves in various destinations. You’ll love the Scandinavian aesthetic.",
    img: "/viking.jpg",
  },
  {
    title: "HX",
    desc: "HX — Hurtgruten Expeditions — was a pioneer in expedition cruising. HX’s hybrid ships travel all over the world and focus on supporting both the environment and the local communities of the places they visit.",
    img: "/hx.jpg",
  },
  {
    title: "Regent Seven Seas",
    desc: "very suite aboard a Regent Seven Sea Cruise has a balcony. But, don’t miss spending time on the ship’s interior, where an art collection featuring works by the likes of Picasso and Chagall awaits.",
    img: "/seven-sea.jpg",
  },
  {
    title: "Explora Journeys",
    desc: "This luxury cruise line blends European elegance with small-ship intimacy, offering immersive itineraries and all-suite accommodations aboard sleek, design-forward vessels.",
    img: "/explora.jpg",
  },
  {
    title: "Quark Expeditions",
    desc: "Journey to the ends of the earth with Quark Expeditions, where unparalleled polar adventures redefine exploration. Expect remote destinations, expedition leaders, and immersive off-ship experiences.",
    img: "/expendition.jpg",
  },
  {
    title: "Windstar Cruises",
    desc: "Windstar's boutique yachts accommodate at most 342 guests. You'll love the carefully curated, immersive experiences and regional menus inspired by the brand's partnership with the James Beard Foundation",
    img: "/windstar.jpg",
  },
  {
    title: "Ponant",
    desc: "Ponant offers luxury boutique cruise experiences, all with a French flair. You'll be treated to more intimate, off-the-beaten-path experiences only small ships can offer.",
    img: "/ponant.jpg",
  },
  {
    title: "Four Seasons Yachts",
    desc: "Four Seasons Yachts brings its signature elevated luxury to sea. You'll love the sprawling, Prosper Assouline-designed suites and exceptional service.",
    img: "/season-yatch.jpg",
  },
  {
    title: "The Ritz-Carlton Yacht Collection",
    desc: "The Ritz-Carlton's classic luxury translates to their intimate ships. There are three of them: Evrima holds 298 guests, Ilma can accommodate 448 and the forthcoming Luminara can hold up to 452.",
    img: "/ritz.jpg",
  },
];

export default function CruiseTrip() {
  const swiperRef = useRef(null);

  return (
    <section className=" px-4 md:px-10 py-12 ">
      {/* Header */}
      <div className="flex justify-between items-center relative mb-6">
        <h2 className="text-xl sm:text-2xl lg:text-6xl md:text-[20px] font-[500] font-chiswick">
          Cruises you need on your sonar
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
            </div>
          </SwiperSlide>
        ))}

        {/* Pagination (hidden on large screens) */}
        <div className="swiper-pagination hidden md:hidden mt-[4rem]"></div>
      </Swiper>
    </section>
  );
}
