import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useRef, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const asiaTrips = [
  {
    image: "/aboard-virgin.png",
    title:
      "Aboard Virgin Voyages Sailing to Bimini, Puerto Plata and Grand Turk",
    author: "Payton Brown",
    description:
      "As someone who loves travel and cruising, sailing with Virgin Voyages was such an exciting and different experience! Starting in Miami, a city bursting with culture, art and beach vibes, this cruise stands out because of its amazing stops in Bimini, Puerto Plata and Grand Turk. Each destination offers access to exclusive (to Virgin Voyage) excursions that offer relaxation, adventure and local charm — ideal for anyone wanting a bit of everything. Before setting sail, Miami’s got its own magic that’s worth exploring. Whether you're strolling the art deco streets of South Beach or grabbing a bite in the trendy Wynwood district, spending a day or two here really sets the mood for your vacation. In this guide, I’ll share some top picks for what to do, where to eat and where to stay so you can enjoy your time in Miami before hopping aboard the cruise ship.",
  },

  {
    image: "/joanna.png",
    title: "Atlantis Paradise Island: A Whimsical Water Wonderland",
    author: "Joanna Johnsen",
    description:
      "More than just a hotel, Atlantis Paradise Island is a sprawling wonderland of outdoor entertainment and aquatic adventure, coupled with high-end dining and evening entertainment for adults as well as the entire family. You could spend days exploring its expansive grounds and never run out of things to do! Dive into the heart of a mythical civilization with elaborately themed architecture, then unwind on pristine private beaches. Take an exhilarating plunge down one of their many waterslides, or relax by the pool overlooking the turquoise ocean. Encounter exotic marine life at the on-site aquarium, watch a dazzling Junkanoo parade or spend an evening trying your luck at a world-class casino! This resort has something for everyone.",
  },
  {
    image: "/budd.png",
    title: "Virgin Voyages - 4 Fabulous Nights on the Scarlet Lady",
    author: "Heather Budd",
    description:
      "As someone that had NEVER been on a cruise before, I was not sure what to expect on our four night Caribbean cruise aboard Virgin Voyage's Scarlet Lady. We embarked from Miami, had a day at sea, a day in Key West, then onto Bimini and finally back to Miami. Despite some less than ideal weather, we had a really good time!",
  },
  {
    image: "/claudis.png",
    title: "Zemi Beach House Trip Report",
    author: "Claudia Riegelhaupt",
    description:
      "I stayed at Zemi Beach House in Anguilla and have been meaning to share my notes!  It's one of the five main resorts on Anguilla, but the only one set on Shoal Bay, which is the opposite side of the island from the other big ones (Four Seasons, Malliouhana, Aurora and Cap Juluca). It's about a 20-30 min taxi ride to get to those other spots and the bars/restaurants on that part of the island",
  },
  {
    image: "/efros.png",
    title: "Site Inspection at Holiday Inn Resort Aruba",
    author: "Marina Efros",
    description:
      "In November of 2024, I did a site inspection at the Holiday Inn while visiting Aruba. Since Aruba is a more luxurious island to visit, I wanted to visit a more budget-friendly option while not sacrificing location for my clients who may want to visit this beautiful island.",
  },
  {
    image: "/parry.png",
    title:
      "What to Know about the Adults-only Virgin Voyages Beach Club at Bimini",
    author: "Kelsey Parry",
    description:
      "Get ready for an unforgettable adventure at Virgin Voyages Beach Club at Bimini, a tropical paradise in the Bahamas. This guide will explain everything you need to know about exploring the Beach Club at Bimini and making the most of your day. Whether you're seeking relaxation, adventure or a mix of both, this itinerary ensures a seamless, luxurious experience.",
  },
  {
    image: "/audrey.png",
    title: "The Beaches of Barbados Are Calling",
    author: "Audrey Brown",
    description:
      "The Caribbean and its many islands are beautiful, with clear turquoise waters and a relaxed vibe. But when you get to live in one of these places, a new appreciation of the depth of the culture forms, and the island's true beauty emerges. Having lived in Barbados for 3 years, I can honestly say it's a gorgeous and interesting island.",
  },
];

export default function DiscoverCaribbean() {
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
        <h3 className="text-2xl md:text-3xl lg:text-5xl">
          Discover the Caribbean
        </h3>
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
        {asiaTrips.map((trip, index) => {
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
