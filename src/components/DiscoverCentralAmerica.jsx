import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useRef, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const centralTrips = [
  {
    image: "/jen.png",
    title: "The Perfect Belize Combo: Beach Bliss and Rainforest Adventures",
    author: "Jen Lyon",
    description:
      "When Alaska Airlines created a non-stop route from Seattle to Belize, our family was on the next flight! We’ve spent many winter and spring breaks escaping to the sunshine and palm trees in Hawai'i and Mexico, so it was any travelers dream to visit a new country. Belize did not disappoint! We loved the range of relaxing beach time, ocean excursions and rainforest adventures. Plus, the food was top notch and celiac friendly!",
  },

  {
    image: "/savana.png",
    title: "A Blissful Week in Belize",
    author: "Savanna Weis",
    description:
      "Belize. Even the name of the country sounds exotic! Belize is full of aqua blue beaches, emerald jungles, cultural history and welcoming people. You can split your time between lounging on one of the many islands, aka 'cayes', and exploring deep into the jungle of the inland portion of the country. The typical traveler to Belize is in search of rustic luxury and eager to explore all the nature has to offer. On top of all the beautiful landscapes and scenery, the official language of Belize is English and they also use the US Dollar. It's a great place to visit if you are a first time traveller to Central America, or a seasoned travel veteran!",
  },
  {
    image: "/santana.png",
    title: "Nicaragua Unveiled: A Visit to Rancho Santana",
    author: "Alicen Holmes",
    description:
      "Nicaragua is not just a destination, it's a whole vibe, offering adventure, relaxation and a taste of authentic Central American life all rolled into one epic travel experience! While Nicaragua’s neighbor, Costa Rica, gets most of the spotlight, Nicaragua is a gem waiting to be discovered! It's the kind of place where you can hike a volcano in the morning and relax on a beach in the afternoon. Plus, the food is amazing - think fresh seafood, flavorful Nicaraguan dishes and rich coffee that will awaken your taste buds. My recommendation for accommodations is Rancho Santana located on 2,700 acres on Nicaragua’s Emerald Coast. This place has it all! Whether you're into peaceful nature hikes, hitting the waves for surfing, or horseback riding on the beach, Rancho Santana is the place to be.",
  },
  {
    image: "/emily.png",
    title: "My Luxurious Stay at The Rancho Santana Resort in Nicaragua",
    author: "Emily Martin",
    description:
      "Nestled in the picturesque landscapes of Nicaragua, Rancho Santana stands as a beacon of luxury and tranquility. From its stunning vistas to its delectable cuisine and commendable service — hovering at the cusp of a solid 4-star hotel experience — this resort offers an unparalleled getaway. It's an oasis where every detail is meticulously crafted to ensure an unforgettable stay. Moreover, what truly sets Rancho Santana apart is its exceptional value proposition. With accommodations rivaling those of 4 to 5-star establishments, yet priced at a fraction of what you'd typically find in destinations like Mexico, Hawaii or the Caribbean, this resort provides a lavish experience without the hefty price tag. Rancho Santana is not just a destination; it's an invitation to indulge in luxury without compromise.",
  },
  {
    image: "/salvado.png",
    title: "The Most Beautiful Getaway in El Salvador",
    author: "Jonathan Aciego",
    description:
      "My family is originally from El Salvador and the destination has changed tremendously. I believe its a country that is truly a magical escape and with so many people starting to venture to Central America I want to highlight the beauty of El Salvador. Lets not forget that the Miss Universe pageant will be held here for the first time ever.",
  },
  {
    image: "/jen-bernes.png",
    title: "Scouting Trip at Rancho Santana, Nicaragua",
    author: "Jen Barnes",
    description:
      "In April 2024 I did a scouting trip to Rancho Santana on the Pacific Coast of Nicaragua. I will be leading a group of mothers and teenage sons there and wanted to visit the property to get my bearings. The staff arranged for an incredible, yet quick, 3 night stay at the Inn. This resort is barefoot luxury and perfect for families, couples, multi-generational gatherings and friend groups. It ticks the box on so many things including a fabulous staff, great guides, delicious food, lovely accommodations, and tons of fun activities.",
  },
  {
    image: "/roda.png",
    title: "Adventurer's Guide to Puerto Viejo de Talamanca, Costa Rica",
    author: "Rhonda Martin",
    description:
      "Puerto Viejo de Talamanca, is a small surf town located on the Caribbean coast, a sweet relief from the heavily trafficked Pacific coast. It has been popular with backpackers and is a stones throw from the more famous Bocas Del Toro, Panama. While it's a Costa Rican town, it's heavily influenced by the Jamaican and Rastafarian culture.",
  },
];

export default function DiscoverCentralAmerica() {
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
          Discover Central America
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
        {centralTrips.map((trip, index) => {
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
