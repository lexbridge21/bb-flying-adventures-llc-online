import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";
import { useRef } from "react";

const hotels = [
  {
    title: "One&Only Palmilla, Los Cabos",
    desc: "A legendary beachfront escape in Los Cabos offering refined elegance, swimmable beaches, and personalized service in a lush tropical setting.",
    img: "/oneonly.jpg",
    perks: [
      "$150 hotel / resort credit.",
      "Breakfast daily.",
      "Upgrade & extended check-in/out whenever possible.",
    ],
  },
  {
    title: "Hacienda AltaGracia, Auberge Resorts Collection",
    desc: "A secluded wellness haven in Costa Rica’s lush highlands, offering immersive nature experiences, holistic healing, and barefoot luxury.",
    img: "/collection.jpg",
    perks: [
      "$100 hotel credit.",
      "Breakfast daily.",
      "Extended check-in/out whenever possible.",
    ],
  },
  {
    title: "Birkenhead House",
    desc: "Birkenhead House provides luxury accommodation for those seeking time out to relax and recharge body and mind in South Africa.",
    img: "/house.jpg",
    perks: [
      "Private wine tasting and 15% off spa.",
      "Breakfast daily.",
      "Upgrade & extended check-in/out whenever possible.",
    ],
  },

  {
    title: "The Brando",
    desc: "Unmatched luxury and seclusion on a private atoll 30 miles north of Tahiti—the stuff of true castaway fantasies.",
    img: "/brando.jpg",
    perks: [
      "$100 food / beverage credit..",
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
  {
    title: "Amanpuri",
    desc: "Set in Thailand, Aman’s first resort presides over its own peninsula on the Andaman Sea, where you can enjoy the beach, exceptional restaurants and a holistic wellness center.",
    img: "/amanpuri.jpg",
    perks: [
      "$100 food / beverage credit.",
      "Breakfast daily.",
      "Upgrade & extended check-in/out whenever possible.",
    ],
  },
  {
    title: "Post Ranch Inn",
    desc: "A serene cliffside retreat in Big Sur offering luxurious eco-friendly accommodations with breathtaking ocean views.",
    img: "/inn.jpg",
    perks: [
      "$100 hotel / resort credit.",
      "Breakfast daily.",
      "Upgrade & extended check-in/out whenever possible.",
    ],
  },
  {
    title: "Maslina Resort",
    desc: "A mindful luxury retreat on the Hvar coastline, blending contemporary design with natural beauty and holistic wellness.",
    img: "/masila.jpg",
    perks: [
      "$100 food / beverage credit.",
      "Breakfast daily.",
      "Upgrade & extended check-in/out whenever possible.",
    ],
  },
  {
    title: "Round Hill Hotel And Villas",
    desc: "A timeless Caribbean retreat in Montego Bay featuring elegant villas, a private beach, and warm, personalized service in a lush tropical setting.",
    img: "/villa.jpg",
    perks: [
      "$100 hotel / resort credit.",
      "Breakfast daily.",
      "Upgrade & extended check-in/out whenever possible.",
    ],
  },
  // Add more hotels as needed
];

export default function HoneyHotels() {
  const swiperRef = useRef(null);

  return (
    <section className="px-4 md:px-10 py-12">
      {/* Header */}
      <div className="flex justify-between items-center relative mb-6">
        <h2 className="text-3xl lg:text-6xl mb-7">Romantic hotels we love</h2>

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
              <h3 className="text-lg sm:text-xl lg:text-2xl mb-2 font-chiswick">
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
