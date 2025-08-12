import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useRef, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const middleTrips = [
  {
    image: "/jordan.png",
    title: "Cultural Exploration in Jordan",
    author: "Rabia Malik",
    description:
      "Jordan is a country of adventure, history, culture and hospitality. It is situated at an incredible point in the Middle East between the Holy Land of three major religions. It's also incredibly safe and provides a great glimpse into Middle Eastern culture and countries. Here, sometimes, you can feel like you’re on the moon while other times you can feel as if you are time-traveling to the past. It’s truly a timeless city like no other.",
  },

  {
    image: "/isreal.png",
    title: "7-Day Itinerary for Cultural Exploration in Israel",
    author: "Artemis Koutsogiorgas",
    description:
      "Ancient ruins and sacred sites, modern museums and flavorsome food, Mediterranean beaches and desert oases - there are so many reasons to love Israel. Located only two hours from Greece, you can taste the similarities between the Mediterranean cooking you will experience throughout the region. If you love food, ancient history and warm weather year-round, Israel is a must-see. Discover how you can spend seven days in Israel with this guide I've created to the best sights, hotels and restaurants.",
  },
  {
    image: "/platue.png",
    title:
      "Sparkling Dusit2 Naseem Resort inJabal Akhdar, Oman: Nestled in the Gorgeous Sayq Plateau",
    author: "Susan Anderson",
    description:
      "Oman was exotic, stunning, friendly and gorgeous. The country was so fun to explore and Muscat was amazing with the souks, white sandy beaches and warm water and stark white architecture with sparkling marble floors everywhere. The opera house was especially dreamy.",
  },
  {
    image: "/road-trip.png",
    title: "The Ultimate Oman Road Trip",
    author: "Rhonda Martin",
    description:
      "A vast majority of travelers tend to forget about the Middle East when it comes to deciding where to go for their next trip. Let me tell you, you shouldn’t skip out. Despite some destinations in this region being an obvious no-go zone due to political conflict, Oman makes the cut for both adventurers and luxury travelers to visit. It is considered to be the “Switzerland of the Middle East,” there’s ultimately no history of conflict and the Omani people are the most welcoming and kind that I’ve met throughout my personal travels. The landscapes are otherworldly, and the food is a delicious combination of Indian, Bengali, Persian and Omani.",
  },
  {
    image: "/holy-land.png",
    title: "A Trip To The Holy Land ",
    author: "Victoria Arfmann",
    description:
      "This destination is so special, because it holds so much religious history. Traveling to the holy land is often a once-and-a-lifetime experience for many people. Walking along the Jordan River, floating in the dead sea, visiting all the towns where miracles happened.",
  },
  {
    image: "/food-fun.png",
    title: "Tel Aviv with Kids: 4 Days of Food and Fun",
    author: "Sari Laufer",
    description:
      "Incredible beaches, bustling markets, cafes on every corner — and parks galore, Tel Aviv is an incredible (and incredibly family-friendly) destination. Whether you want to see art and architecture, taste the local cuisine, explore history ancient and modern or just hang on the Mediterranean coast, Tel Aviv really has it all... and this itinerary will help you feel more local than tourist. (NB: This itinerary assumes no guide and no car... but happy to help you plan with either or both of those).",
  },
  {
    image: "/muscat.png",
    title: "One Week in Oman, Starting at the Al Bustan Palace in Muscat!",
    author: "Arun Sastry",
    description:
      "A lovely place that is unpretentious and makes you feel like an honored guest. The staff is a who's who of the United Nations, so just chatting with the staff who hail from places as far away as Kenya, Vietnam, Philippines, Spain is itself a learning experience!",
  },
];

export default function DiscoverMiddleEast() {
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
          Discover the Middle East
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
        {middleTrips.map((trip, index) => {
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
