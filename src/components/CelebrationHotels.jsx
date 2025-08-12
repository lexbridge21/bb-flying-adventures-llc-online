import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";
import { useRef } from "react";

const hotels = [
  {
    title: "The Lodge & Spa at Brush Creek Ranch",
    desc: "A collection of all-inclusive guest ranches on 30,000 secluded acres in Saratoga, Wyoming, with rustic yet refined accommodations.",
    img: "/ranch.jpg",

    perks: [
      "$100 hotel / resort credit.",
      "Breakfast daily.",
      "Upgrade & extended check-in/out whenever possible.",
    ],
  },

  {
    title: "Rosewood Mayakoba",
    desc: "A serene jungle retreat where luxurious lagoon suites, white-sand beaches, and world-class service create an unforgettable Riviera Maya escape.",
    img: "/rosewood.jpg",

    perks: [
      "$100 hotel / resort credit.",
      "Breakfast daily.",
      "Upgrade & extended check-in/out whenever possible.",
    ],
  },
  {
    title: "Estelle Manor",
    desc: "A grand country estate blending heritage charm with contemporary luxury, set amid 60 acres of Oxfordshire parkland.",
    img: "/manor.jpg",

    perks: [
      "$100 food / beverage credit.",
      "Breakfast daily.",
      "Upgrade & extended check-in/out whenever possible.",
    ],
  },
  {
    title: "The Colony Hotel Palm Beach",
    desc: "A glamorous Palm Beach icon blending vintage charm with chic, modern style just steps from the ocean.",
    img: "/palm-beach.jpg",

    perks: [
      "$100 hotel credit.",
      "Breakfast daily.",
      "Upgrade & extended check-in/out whenever possible.",
    ],
  },
  {
    title: "Hyatt Ziva Los Cabos- All Inclusive",
    desc: "A standout all-inclusive resort for families, with seven restaurants, a kids’ club, live entertainment, and stunning views across the Sea of Cortez.",
    img: "/hyatt.jpg",
    perks: [
      "Hotel / resort credit.",
      "Welcome amenity.",
      "Breakfast daily.",
      "Upgrade & extended check-in/out whenever possible",
    ],
  },

  {
    title: "Necker Island",
    desc: "A 74-acre private island paradise in the British Virgin Islands, famously owned by Sir Richard Branson and operated as a luxury resort by Virgin Limited Edition.",
    img: "/necker.jpg",

    perks: [
      "Spa credit.",
      "Breakfast daily.",
      "Upgrade & extended check-in/out whenever possible",
    ],
  },

  {
    title: "Palazzo Avino",
    desc: "A romantic cliffside retreat in Ravello offering breathtaking Amalfi Coast views, Michelin-starred dining, and timeless Italian elegance.",
    img: "/palazzo.jpg",
    perks: [
      "$100 hotel / resort credit.",
      "Breakfast daily.",
      "Upgrade & extended check-in/out whenever possible.",
    ],
  },
  // Add more hotels as needed
];

export default function CelebrationHotels() {
  const swiperRef = useRef(null);

  return (
    <section className="px-4 md:px-10 py-12">
      {/* Header */}
      <div className="flex justify-between items-center relative mb-6">
        <h2 className="text-3xl lg:text-6xl mb-7">
          Best hotels for groups & events
        </h2>

        {/* Arrows - stay exactly like in NextTrip */}
        <div className="hidden md:flex gap-3 absolute right-0 top-1/2 -translate-y-1/2">
          <button
            className="w-8 h-8 cursor-pointer rounded-full border flex items-center justify-center hover:bg-black hover:text-white transition"
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
          320: { slidesPerView: 1.1, spaceBetween: 15 },
          500: { slidesPerView: 1.5, spaceBetween: 18 },
          676: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 25 },
        }}
        className="mt-[3rem] pb-10"
      >
        {hotels.map((hotel, i) => (
          <SwiperSlide key={i}>
            <img
              src={hotel.img}
              alt={hotel.title}
              className="w-full h-64 object-cover mb-5"
            />
            <div className="mt-[-0.5rem]">
              <h3 className="text-lg sm:text-xl lg:text-3xl mb-2 font-chiswick">
                {hotel.title}
              </h3>
              <p className="text-sm sm:text-base lg:text-[1.2rem] text-[#63574a] mb-4 font-blanco">
                {hotel.desc}
              </p>
              <h5 className="font-semibold text-[15px] sm:text-base mb-2 font-chiswick">
                BB Perk
              </h5>
              <ul className="space-y-1">
                {hotel.perks.map((perk, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-[#4a4033] text-sm sm:text-base font-blanco"
                  >
                    <FaStar className="text-[#7b6a58] text-sm mt-1" />
                    {perk}
                  </li>
                ))}
              </ul>
            </div>
          </SwiperSlide>
        ))}

        {/* Pagination for small screens only */}
        <div className="swiper-pagination hidden md:hidden mt-[4rem]"></div>
      </Swiper>
    </section>
  );
}
