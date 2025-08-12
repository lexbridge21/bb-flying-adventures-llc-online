import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useRef, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const europeTrips = [
  {
    image: "/rabia.png",
    title: "Beach Hopping Along the Albanian Riviera",
    author: "Rabia Malik",
    description:
      "The Albanian Riviera is a hidden gem in Europe that combines unspoiled beaches, pristine waters and charming coastal villages that beachgoers and adventure seekers alike will love. The region has a rich cultural history to explore, as well as a burgeoning Mediterranean food scene, all for a fraction of the cost of Europe's current hotspots with a fraction of the crowds. Holidaying along the Albanian Riviera is about to get more popular as people discover the picturesque coastline has all the best elements of Greece and Italy, with their own unique, vibrant local traditions and history.",
  },

  {
    image: "/crotia.png",
    title: "Best Hotels in Dubrovnik, Croatia",
    author: "Rachel Havens",
    description:
      "Discover this carefully curated selection of hotels in Dubrovnik. These exceptional properties epitomize the harmonious blend of contemporary luxury and historical charm that defines this captivating coastal city. Each hotel reflects the unique character of Dubrovnik, offering a timeless escape where modern comfort seamlessly complements the city's rich heritage. Immerse yourself in the allure of the Adriatic coast through this handpicked selection, ensuring a truly unforgettable stay in this remarkable destination.",
  },
  {
    image: "/lana.png",
    title: "Activities, Hotels & Restaurants in Vienna, Austria",
    author: "Lana Jainarain",
    description:
      "Vienna has a special place in my heart because I lived there for a season! This beautiful city can be explored via its food scene, nature escapes or rich history. My personal favorite way to explore is by wandering to different coffee houses or cafes throughout the city. In the spring, adventure to Kahlenburg outside of the city for wine tastings and vineyard views. In the winter, Vienna is a place of holiday cheer with various Christmas markets and ice skating at Rathausplatz (city hall). The city is full of history with its museums and architecture. Explore your way through the districts by restaurant hopping at Vienna's best dining spots!",
  },
  {
    image: "/nathan.png",
    title: "Salzburg's Surroundings: Austria Beyond Mozart and Do-Re-Mi",
    author: "Nathan Mitchell",
    description:
      "From the moment I arrived at Phum Baitang, I felt like I had been dropped into a Cambodian dreamscape. With its name meaning “green village,” the property captures everything I love about travel — authenticity, aesthetic harmony, and soul-soothing quiet.",
  },
  {
    image: "/eaton.png",
    title: "Croatia: The Dalmatian Coast for Foodies",
    author: "Cheryl Eaton",
    description:
      "I have loved Italy and Spain for the incredible food and wine offerings. Croatia was next on the list for epicurean discoveries. The country was so much more than I expected. Priced lower than Italy, and one step up from Spain as expected. When you add in the history, the European elegance and people so happy to share their beautiful country and farm-to-table food and blossoming wine culture. Foodies that love new experiences and plenty of seafood from the clean Adriatic Sea will be thrilled.",
  },
  {
    image: "/gordon.png",
    title: "Sailing the Croatian Islands: A Seven-Day Voyage with Sail Croatia",
    author: "Alyssa Gordon",
    description:
      "Embarking on a private boat tour with Sail Croatia was the epitome of an unforgettable summer adventure. With no hidden fees and a hassle-free experience, our seven-day sailing odyssey along the Croatian coastline was the perfect blend of relaxation and exploration.",
  },
  {
    image: "/laura.png",
    title: "Exploring Brussels: A 3-Day Itinerary for Families with Kids",
    author: "Laura Vander Neut",
    description:
      "Brussels is a vibrant city with a rich history, stunning architecture and a lively cultural scene. Many families feel nervous about traveling to other countries with small children. But with the right plan and expectations, your whole family can have a great time, especially in a busy city like Brussels. My family went to Brussels when my daughters were 5 and 3. We found many activities for kids and delicious food they liked. This itinerary offers a mix of historical and cultural activities with ample downtime for the kids. Reach out and let’s personalize this trip for your family!",
  },
];

export default function DiscoverEurope() {
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
        <h3 className="text-2xl md:text-3xl lg:text-5xl">Discover Europe</h3>
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
        {europeTrips.map((trip, index) => {
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
