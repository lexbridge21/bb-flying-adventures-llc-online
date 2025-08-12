import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useRef, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const middleTrips = [
  {
    image: "/boutique.png",
    title: "Aspen Boutique Hotels",
    author: "Gabrielle Brechner",
    description:
      "Deciding where to base yourself on a trip to Aspen is a task for first-timers and veterans alike. There are so many amazing Aspen boutique hotels to lay your head, depending on your vibe and the kind of vacation you're taking. Where you stay isn't just about where you ski!",
  },

  {
    image: "/mexico.png",
    title: "Site Inspection at Mondrian Mexico City",
    author: "Alberto Mussali",
    description:
      "Experience contemporary luxury and vibrant energy at Mondrian Condesa, a stylish oasis in the heart of Mexico City's trendy Condesa neighborhood. With its sleek design, avant-garde art and chic ambiance, this boutique hotel captivates the senses. Indulge in culinary delights at the onsite restaurant and sip handcrafted cocktails at the bar. Unwind in sophisticated rooms adorned with modern amenities and artistic touches. Whether exploring the eclectic shops and cafés of Condesa or lounging in the lush courtyard garden, Mondrian Condesa offers a captivating blend of urban sophistication and laid-back charm.",
  },
  {
    image: "/winter.png",
    title: "Aspen in Winter",
    author: "Megan Smith",
    description:
      "Aspen is a renowned destination, known for its upscale and luxury resorts, cultural attractions, shopping and world-class skiing, not to mention its vibrant après-ski and dining scenes. A fantastic option for travelers year-round, Aspen in winter is especially enchanting. Aspen offers varied terrain for skiers, snowboarders and adventure seekers of all skill levels from beginner to expert, as well as plenty of outdoor activities for non-skiers. With four unique mountains to explore (Aspen Mountain, Aspen Highlands, Buttermilk and Snowmass), travelers to Aspen in winter will be spoiled for choice with groomed slopes, terrain parks and even back bowls.",
  },
  {
    image: "/ski-hotel.png",
    title: "Ski Right to Your Door: Aspen's Premier Ski-In/Ski-Out Hotels",
    author: "Alli Widman",
    description:
      "In early April 2024, I enjoyed spring skiing at AspenSnowmass and did more than 10 site inspections. While there are so many wonderful hotels in Aspen, only a handful are proper ski-in-out. The Little Nell is the only ski-in-out hotel at Ajax Mountain. Located at the base of the Silver Queen Gondola, the service is top-notch and the whole experience is luxurious. From spacious King Rooms with mountain views to residences with up to four-bedrooms, comfort is top priority. The Viceroy and Limelight are wonderful ski-in-out options at Snowmass and the Ritz-Carlton is perfect for ski-in-out access to Aspen Highlands.",
  },
  {
    image: "/week-end.png",
    title: "Romantic Weekend in Washington, Connecticut ",
    author: "Jill Albino",
    description:
      "Washington, Connecticut, is a beautiful destination close to New York City with great spas, excellent restaurants, and antique shopping. It’s the perfect getaway for romance and relaxation without having to take the plane and head far out. And yet, it’s just far enough from the metropolis that it feels like a country vacation.",
  },
  {
    image: "/disneyland.png",
    title: "First Timer's Guide to Disneyland and California Adventure",
    author: "Timadge Berkhadley",
    description: `Disneyland is celebrating its 100th Anniversary in 2023, a favorite destination for all ages, it's literally the "Happiest Place on Earth". If this is your 1st time or 10th time at Disneyland there is always something for everyone. Being able to create memories, joy and excitement in such a magical place is exactly the emotions you need to feel at Disneyland. This year Disneyland will be kicking off limited-time offerings taking place throughout the year like a new "World of Color - One" celebration, and "Wondrous Journeys" sparkling fireworks celebration.`,
  },
  {
    image: "/canyon.png",
    title: "Four Days of Adventure and Romance in Sedona & Grand Canyon",
    author: "Stephanie Vaughn",
    description:
      "Sedona is the perfect place to combine adventure, relaxation, and romance on a trip. Sedona is known for its picturesque landscape - the red rocks are unlike anything I’ve ever seen. It’s almost magical, and many point to this place as a source of spiritual energy due to the various energy vortexes you can find. If you need to recharge or reconnect with yourself or your partner, this is THE PLACE",
  },
];

export default function DiscoverNorthAmerica() {
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
          Discover North America
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
