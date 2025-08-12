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
    title: "The Greenwich Hotel New York",
    desc: "Tribeca’s award-winning hotel, with a home-away-from-home vibe, locals-favorite restaurant, and must-visit subterranean pool and spa.",
    img: "/new-york.jpg",
    link: "/new-york",
    perks: [
      "$100 hotel / resort credit.",
      "Breakfast daily.",
      "Upgrade & extended check-in/out whenever possible.",
    ],
  },
  {
    title: "Hacienda AltaGracia, Auberge Resorts Collection",
    desc: "A secluded wellness haven in Costa Rica’s lush highlands, offering immersive nature experiences, holistic healing, and barefoot luxury.",
    img: "/collection.jpg",
    link: "/resort-collection",
    perks: [
      "$100 hotel credit.",
      "Breakfast daily.",
      "Extended check-in/out whenever possible.",
    ],
  },
  {
    title: "Six Senses Ibiza",
    desc: "A meaningful setting for experiences rooted in the local culture, music, art, sustainable fashion, and wellness.",
    img: "/six-sense.jpg",
    link: "/six-sense",
    perks: [
      "$100 hotel credit.",
      "Welcome amenity.",
      "Breakfast daily.",
      "Extended check-in/out whenever possible.",
    ],
  },

  {
    title: "Domaine de Fontenille",
    desc: "This restored 18th-century home sits amid an organic garden and 17th-century vineyard in Luberon, an idyllic hilltop region in Provence.",
    img: "/domaine.jpg",
    link: "/domaine",
    perks: [
      "Complimentary experience.",
      "One-way airport transfer.",
      "Welcome amenities.",
      "Breakfast daily.",
      "Upgrade & extended check-in/out whenever possible",
    ],
  },

  {
    title: "Chablé Yucatan",
    desc: "This luxury Mexico resort was founded on the basis of Mayan well-being, and offers thoughtful immersion into the country’s vibrant culture.",
    img: "/chable.jpg",
    link: "/chable",
    perks: [
      "$100 hotel / resort credit.",
      "Breakfast daily.",
      "Upgrade & extended check-in/out whenever possible.",
    ],
  },

  {
    title: "Passalacqua",
    desc: "A lavish lakeside retreat offering Baroque elegance, terraced gardens, and panoramic views of Lake Como.",
    img: "/pasa-acqua.jpg",
    link: "/pasa-acqua",
    perks: [
      "$100 hotel / resort credit.",
      "Breakfast daily.",
      "Upgrade & extended check-in/out whenever possible.",
    ],
  },
  // Add more hotels as needed
];

export default function FeatureHotels() {
  const swiperRef = useRef(null);

  return (
    <section className="px-4 md:px-10 py-12">
      {/* Header */}
      <div className="flex justify-between items-center relative mb-6">
        <h2 className="text-3xl lg:text-6xl mb-7">Featured hotels</h2>

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
