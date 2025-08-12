import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useRef, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const asiaTrips = [
  {
    image: "/alberto.png",
    title: "Travel Back in Time at Siem Reap",
    author: "Alberto Mussali",
    description:
      "Siem Reap is a vibrant city located in northwestern Cambodia, best known as the gateway to the Angkor Wat temple complex. It serves as the primary base for tourists visiting this ancient wonder. Beyond Angkor Wat, Siem Reap boasts a bustling Old Market, lively Pub Street with numerous restaurants and bars, and opportunities to explore Cambodian culture through traditional dance performances and artisan workshops. With its mix of historical charm and modern amenities, Siem Reap has become a popular destination for those seeking to explore Cambodia's rich heritage.",
  },

  {
    image: "/kaczka.png",
    title: "Unlocking Luxury in an Urban Oasis: Top Osaka Hotels, Japan",
    author: "Elizabeth Kaczka",
    description:
      "Osaka might not be the first city that comes to mind when curating your next trip to Japan, but its close proximity by bullet train to Kyoto, Nara and Hiroshima make it a desirable base for exploring. It's known for its bustling street food scene and friendly atmosphere, and if paired with the right hotels, can be as extraordinary as its bigger sister city, Tokyo. Here's your ultimate guide to the top Osaka hotels, Japan.",
  },
  {
    image: "/havens.png",
    title: "Best Hotels in Osaka, Japan",
    author: "Rachel Havens",
    description:
      "Discover the epitome of luxury and comfort in Osaka with this curated selection of the city's finest hotels. From sleek skyscrapers boasting panoramic views to charming traditional Japanese ambiance, these handpicked accommodations cater to every preference and budget. There is no doubt that these are the best hotels in Osaka, Japan. Conveniently located near Osaka's iconic attractions, shopping districts and culinary hotspots, these hotels offer an ideal base for exploring the vibrant city. This guide will ensure you have an unforgettable stay in Osaka, where culture, cuisine and hospitality converge to create an enriching experience.",
  },
  {
    image: "/musalli.png",
    title:
      "Rustic Elegance in Siem Reap: A Stay at Zannier Hotels Phum Baitang",
    author: "Alberto Mussali",
    description:
      "From the moment I arrived at Phum Baitang, I felt like I had been dropped into a Cambodian dreamscape. With its name meaning “green village,” the property captures everything I love about travel — authenticity, aesthetic harmony, and soul-soothing quiet.",
  },
  {
    image: "/kayhart.png",
    title:
      "Discover Bhutan: A Perfect Destination for a Luxury Nature Vacation",
    author: "Kay Hart",
    description: `Bhutan offers an unparalleled luxury nature vacation with its pristine landscapes, sustainable and luxurious accommodations, and immersive cultural experiences, providing a serene and opulent experience for discerning travelers. It's a big vacation with such a big reward. The natural beauty that Bhutan offers cannot be matched. I always say, "The bumpier the road, the further the trek and the most unmapped the destinations you travel, the bigger the payoff upon arrival." I can validate this stands true for Bhutan. You truly cannot imagine or understand until you experience it. If nature, trees, hiking, fresh fruit, wildlife, home-cooked meals, architecture, sustainability, conscious tourism, meditation, reaching great heights and adventure are your thing, to Bhutan you must go. This is a vacation I will never stop thinking about and will aim to return again and again.`,
  },
  {
    image: "/ruthwalker.png",
    title: "Ningbo: A Luxury Add-on Destination from Shanghai",
    author: "Ruth Walker",
    description:
      "I had a chance to visit Ningbo with friends who live locally. Around two hours from Shanghai by high-speed train, Ningbo is one of China’s wealthiest cities, as it's home to one of the country’s largest ports. The area offers luxury accommodations and incredible cuisine, specializing in fresh local seafood, and rice flour-based dishes: tang yuan (sweetened black sesame paste filled dumplings) and nian gao (thick noodle cakes stir-fried with delicious toppings).",
  },
  {
    image: "/krisytnewada.png",
    title: "Your Guide to an Epic Tokyo to Hokkaido Adventure",
    author: "Kristyne Wada",
    description:
      "For an off-the-beaten-path, adventurous and foodie destination in Japan, add Hokkaido to your itinerary. Getting from Tokyo to Hokkaido is easy with a flight time under two hours and multiple daily flights. This guide unlocks the secrets of Hokkaido and shares the best luxury stays and things to do in Tokyo and Hokkaido from my trip in November 2023.",
  },
];

export default function DiscoverAsia() {
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
        <h3 className="text-2xl md:text-3xl lg:text-5xl">Discover Asia</h3>
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
