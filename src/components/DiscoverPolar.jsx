import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useRef, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const polarTrips = [
  {
    image: "/antartica.png",
    title: "The Ultimate Polar Escape with Antarctica 21",
    author: "Alberto Mussali",
    description:
      "Antarctica: the only place where wildlife feels truly at peace. Untouched by human intrusion, this place is the perfect summer vacation for animals. It is more than a destination. It is the last true wilderness on earth. This place provides an out-of-this-world experience.",
  },

  {
    image: "/cruising.png",
    title: "Cruising to Antarctica",
    author: "Melissa Elliott",
    description:
      "For many, Antarctica is a once-in-a-lifetime destination. It's a place shrouded in mystery and brimming with otherworldly beauty that draws adventure seekers and nature lovers. Visiting Antarctica is unlike any experience I've ever had. It's the coldest, driest and windiest continent on Earth, yet there's an unexpected warmth to its vast, untouched landscapes. The penguins, ever curious and friendly, seem to greet you as you disembark your zodiac, welcoming you to their icy world. The ice itself is an ever-changing masterpiece. You can hear it gurgle as it shifts and moves! There's no shortage of incredible activities to take part in, from kayaking and hiking to zodiac rides and cross-country skiing. The wildlife — birds, seals, penguins and whales — is abundant, creating a truly immersive and unforgettable bucket-list experience.",
  },
  {
    image: "/nadia.png",
    title: "A Winter Wonderland Getaway to Harads, Sweden",
    author: "Nadia Bess",
    description:
      "Visiting Stockholm or the Swedish Lapland? Harads, a charming village with only 600 people situated just south of the Arctic circle, is the perfect destination to add on for some ultimate bucket-list winter adventures. From a treehouse to a spa hotel floating on a river, the hotels in Harads will take your breath away for an idyllic winter wonderland getaway. Lulea Airport is only roughly an hour from Harads and has direct flights to Stockholm, Paris, London and Dusseldorf, making it an ideal long weekend getaway or add-on to a Northern Europe itinerary. From dogsledding to snowmobiling to viewing the Northern Lights, the number of winter activities available to you in this region is endless! Because the Northern Lights cannot be guaranteed, the longer you are able to stay close to the Arctic Circle, the more opportunities for viewing you will have.",
  },
  {
    image: "/northlight.png",
    title: "Your Ultimate Guide to Experiencing the Northern Lights",
    author: "Alexandra Farrington",
    description:
      "Seeing the Northern Lights has long been a bucket-list goal of mine, combining both natural wonder and personal aspiration. Being able to pair this experience with unique local culture and activities makes these destinations even more special. It's not just about ticking a box; it's also about fully experiencing each location in a meaningful way.",
  },
  {
    image: "/kirk.png",
    title: "Dreaming Of Antarctica? Here’s Everything You Need To Know!",
    author: "Mei-Mei Kirk",
    description:
      "Ancient glaciers frozen in time. Towering snow-clad mountains. Azure icebergs, sea and sky. Ferocious howling winds. Silence that takes your breath away. It's hard to grasp the pristine immensity of the 7th continent. But what made Antarctica truly unique for me was the exuberant wildlife, fearless and thriving here at the end of the world, from waddling penguins to playful fur seals to hungry humpbacks. Ready to plan? Here's everything you need to know.",
  },
  {
    image: "/eater-budd.png",
    title:
      "The Arctic vs. Antarctica Cruises: Cruising North or Sailing South for Your Polar Adventure?",
    author: "Heather Budd",
    description:
      "There is something very magical about Earth's polar regions: sweeping, unspoiled landscapes, unique flora and fauna — and the thrill of discovering the world's most isolated areas. We are fortunate to live in a time when the adventurous traveler has a variety of choices for accessing these distant and stunning destinations in a respectful and safe way. Whether you are attracted to the Arctic's dramatic coastlines and native cultures or Antarctica's pristine icy wilderness, these cruises provide experiences that are unlike any other.",
  },
  {
    image: "/peacock.png",
    title:
      "Exploring the Arctic with Ponant and Abercrombie & Kent: A Luxury Expedition",
    author: "Kelsey Peacock",
    description:
      "The Arctic is a breathtaking wonderland of fire, ice and color. My recent cruise with Abercrombie & Kent aboard Ponant’s Le Lyrial exceeded all expectations. From waking up to icebergs drifting by to unforgettable wildlife encounters and indulgent spa treatments, every moment felt like a dream. This once-in-a-lifetime journey combined adventure, luxury and impeccable service, and I can’t wait to help you plan your own Arctic adventure!",
  },
];

export default function DiscoverPolar() {
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
        <h3 className="text-2xl md:text-3xl lg:text-5xl">Discover Polar</h3>
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
        {polarTrips.map((trip, index) => {
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
