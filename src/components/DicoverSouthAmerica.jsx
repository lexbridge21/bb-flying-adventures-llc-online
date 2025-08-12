import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useRef, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const southTrips = [
  {
    image: "/five-sense.png",
    title:
      "Engage Your Five Senses in Argentina's Bustling Capital, Buenos Aires",
    author: "Kirsty Cowie",
    description:
      "When I travel, rich culture and food is what I look for and Buenos Aires offers exactly that. From interesting food markets to tango shows, I was blown away by everything available in Argentina's capital.",
  },

  {
    image: "/cannua.png",
    title:
      "Travel Guide to Colombia: Medellín, Cartagena, Baru Islands & Cannua",
    author: "Micah Drimmer",
    description:
      "Colombia is a hidden gem in South America, full of vibrant cities, pristine beaches, lush mountains and rich history. During a recent trip in November 2024, I explored Medellín and surrounding areas, Cartagena and the Barú Peninsula. From eco-lodges to luxury resorts, I fell in love with the country’s diverse landscapes, warm people, delicious cuisine and endless opportunities for adventure.",
  },
  {
    image: "/pairing.png",
    title: "Buenos Aires and Iguazu Falls: A Perfect Pairing",
    author: "Alicen Holmes",
    description:
      "Buenos Aires, with its vibrant culture, tango music, and delicious cuisine, complements the natural beauty of Iguazu Falls seamlessly. Just like the perfect pairing of Argentine beef and Malbec wine, exploring the bustling city life of Buenos Aires and then immersing yourself in the awe-inspiring wonders of Iguazu Falls creates a well-rounded and unforgettable experience.",
  },
  {
    image: "/singulard.png",
    title: "Epic Remoteness Redefined: A Stay at The Singular Patagonia",
    author: "Alberto Mussali",
    description:
      "The Singular Patagonia is not just a hotel—it’s a gateway into the raw, cinematic beauty of Chilean Patagonia. Housed in a restored 20th-century cold storage plant, it combines industrial heritage with modern luxury in a setting that feels both remote and deeply personal. My stay here was immersive and unforgettable, from glacier excursions to evenings by the fire with views of the fjord. This report captures what makes The Singular one of the most remarkable properties in South America.",
  },
  {
    image: "/mendoza.png",
    title: "Holiday Trip to Mendoza & Buenos Aires, Argentina",
    author: "Laura Allen",
    description:
      "Buenos Aires is a historic and elegant city and many are surprised to find it has a European feel with its 19th-century buildings and charming neighborhoods. Each of the neighborhoods or ‘barrios’ have different characters so it’s one of those cities where you’ll want to spend a lot of time simply meandering along the tree-lined streets to get a feel for each area. In contrast, Mendoza is a small city with many art deco buildings and small plazas at the foothills of the Andes mountains (in the heart of wine country!). A short, easy flight connects the two cities and makes for a perfect Christmas + New Year’s trip (plus, it’s warm!!)",
  },
  {
    image: "/coloumbia.png",
    title: "Best 5-Day Itinerary for Medellín, Colombia",
    author: "Laura Zapata",
    description:
      "Medellín is a resilient, inspiring, beautiful and magical city. It is visually stunning – terracotta buildings surrounded by mountains. Medellín is called the city of eternal spring so even though there might always be a chance of rain, the weather year-round is between 60-80 F and the sun shines most days. The food is incredible - from street food to fine dining restaurants, Medellín has an incredible culinary scene. And paisas (people from the region of Antioquia, where Medellín is located) are some of the kindest, most welcoming and most joyful people you will ever meet. It is no secret that Medellín has a difficult past, but what you’ll learn from visiting this vibrant city is how through investments in art and infrastructure the city has transformed. I’m lucky to have visited this incredible city many times, most recently to marry my husband (a paisa!), and hope to call it a second home one day. I hope you will fall in love and let Medellín inspire you the way that it has for me.",
  },
  {
    image: "/site.png",
    title: "Site Inspection at Hotel das Cataratas in Iguazu Falls, Brazil",
    author: "Isabella Darden",
    description:
      "In March of 2024, I did a site inspection while staying at the breathtaking Hotel das Cataratas, a Belmond Hotel. As the only hotel located inside Iguazu National Park, Belmond guests have exclusive access to the park before the park opens and after it closes, so it's easy to beat the crowds and see the falls during sunrise and sunset.",
  },
];

export default function DiscoverSouthAmerica() {
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
          Discover South America
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
        {southTrips.map((trip, index) => {
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
