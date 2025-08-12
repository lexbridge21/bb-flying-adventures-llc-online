import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useRef, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const oceaniaTrips = [
  {
    image: "/melbourne.png",
    title: "Luxury in the Laneways: A Stay at W Melbourne",
    author: "Alberto Mussali",
    description:
      "W Melbourne is where cutting-edge design meets the city’s creative pulse. Set in the heart of the vibrant Flinders Lane district, this hotel brings high-energy style, standout dining, and a youthful, fashion-forward vibe to the luxury scene. During my stay, I was impressed by how it balances personality with comfort—making it a great fit for travelers looking to plug into Melbourne’s cultural rhythm. This report dives into what makes W Melbourne a dynamic and unforgettable urban escape.",
  },

  {
    image: "/zeeland.png",
    title: "Is a New Zealand Guided Hike Right for You?",
    author: "Renée Olson",
    description:
      "If dramatic landscapes, untamed wilderness, and world-class trails call to your adventurous spirit, then a guided hiking trip to New Zealand might be your ultimate travel experience. Known for its lush rainforests, alpine peaks, glacial lakes, and coastal tracks, New Zealand offers some of the most unforgettable hiking opportunities on Earth—and a guided trek is one of the best ways to experience them.",
  },
  {
    image: "/solo.png",
    title: "Solo Adventure: The 10 Best Places to Solo Travel",
    author: "Ana Santos",
    description:
      "The call for the solo adventure is undeniable, and as a fellow travel enthusiast, I understand the longing to explore on your own terms. While I'm fortunate to have a travel partner, I've witnessed the transformative power of solo travel firsthand. Embarking on this path requires careful planning, and choosing the right destination is crucial. That's why I've curated a list of the 10 best places to solo travel in 2024, catering to first-timers and seasoned explorers alike. From cultural immersion to exhilarating adventures, get ready to discover unforgettable experiences that will quench your wanderlust and ignite your spirit!",
  },
  {
    image: "/borabora.png",
    title: "Guide to a Relaxing Couples' Getaway in Bora Bora",
    author: "Ashley Morris",
    description:
      "The island of Bora Bora is a fantastic destination for couples looking for a relaxing getaway. It has loads to offer, including luxurious resorts, lots of activities and tours and some of the most beautiful blue water in the world. The Polynesian culture is kind and welcoming, and you will feel at home the moment you set foot on this incredible island.",
  },
  {
    image: "/graham.png",
    title: "Multi-Gen Adventures on New Zealand's South Island",
    author: "Sarah Graham",
    description:
      "Beauty abounds on South Island in Queenstown, New Zealand. It is a stunning destination with incredible nature and plenty of activities for everyone to partake in. From extreme sports like bungee jumping and whitewater rafting to winery-hopping and even familial establishments, South Island has got it all. I can assure you that it is one of the most unique places in the world that makes for a memorable holiday. ",
  },
  {
    image: "/mei-mei.png",
    title: "Epic New Zealand Adventures in Three Weeks",
    author: "Mei-Mei Kirk",
    description:
      "New Zealand is packed with breathtaking beauty, death-defying adventure and charming whimsy. I've visited three times, and each has been extraordinary. Here's a collection of the top highlights in three weeks across both the North and South Islands.",
  },
  {
    image: "/rebecca.png",
    title: "Experiencing Auckland, New Zealand",
    author: "Rebecca Dangler",
    description:
      "For so many travelers, New Zealand is the trip of a lifetime. Visitors traverse the globe dreaming of otherworldly beaches and emerald green forests, but everything starts in Auckland. Before heading off to discover Aotearoa, spend at least 48-hours in AKL experiencing the local cuisine, contemporary design and your first taste of Kiwi culture.",
  },
];

export default function DiscoverOceania() {
  const swiperRef = useRef(null);
  const [expandedIndex, setExpandedIndex] = useState(null); // store the index of expanded card

  const handlePrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };

  const handleNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="mt-[-14rem] px-4  md:px-10 lg:px-16 py-10 bg-[#f8f5f1] font-chiswick lg:mt-15">
      {/* Heading & Arrows */}
      <div className="flex justify-between items-center mb-6 relative">
        <h3 className="text-2xl md:text-3xl lg:text-5xl">Discover Oceania</h3>
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
          320: { slidesPerView: 1.2 },
          768: { slidesPerView: 2.2 },
          1024: { slidesPerView: 3.2 },
          1280: { slidesPerView: 4 },
        }}
      >
        {oceaniaTrips.map((trip, index) => {
          const isExpanded = expandedIndex === index;
          return (
            <SwiperSlide key={index}>
              <div className="overflow-hidden h-full text-start">
                <img
                  src={trip.image}
                  alt={trip.title}
                  className="w-full h-80 object-cover lg:mt-10"
                />
                <div className="py-4 flex flex-col h-full">
                  <h3 className="text-x1 md:text-2x1 font-normal lg:text-3xl mb-2">
                    {trip.title}
                  </h3>
                  <div className="flex items-center text-xs mb-2">
                    <span className="italic text-gray-500">Curated by</span>
                    <span className="ml-1 font-semibold">{trip.author}</span>
                  </div>
                  <div className="w-full">
                    <p
                      className={`text-sm font-blanco lg:text-lg text-gray-700 leading-snug transition-all duration-300 ease-in-out ${
                        isExpanded ? "" : "line-clamp-3"
                      }`}
                    >
                      {trip.description}
                    </p>

                    {trip.description.length > 150 && (
                      <button
                        onClick={() => toggleExpand(index)}
                        className="mt-2 font-chiswick uppercase font-semibold hover:underline text-sm cursor-pointer focus:outline-none"
                      >
                        {isExpanded ? "Show less" : "Read more"}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
