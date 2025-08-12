import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useRef, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const africaTrips = [
  {
    image: "/botswana.png",
    title: "Family-Friendly 9-Day Botswana Safari",
    author: "Greg Alexander",
    description:
      "The diversity in safari type in Botswana is second to none. You can take a boat on the Chobe River and watch elephants swim from bank to bank, trek through the bush on a walking safari, ride a Mokoro on the Okavanga Delta and of course, ride in a traditional safari vehicle while searching for the big five! With the right support, it is the perfect spot to take a family for their first safari experience. ",
  },

  {
    image: "/kenya.png",
    title: "Kenya and Tanzania: The Great Migration Safari",
    author: "Jeff Willy",
    description:
      "The Great Migration is by far one of the most magnificent wildlife phenomena to experience in all of Africa. Every year, over two million wildebeest, zebra and gazelle migrate in a clockwise motion from the Serengeti in Tanzania to the Maasai Mara in Kenya, creating a circular migratory pattern across the Serengeti-Mara ecosystem that attracts an abundance of predators. Experience the migration both through daily game drives and in the air in a luxurious hot air balloon safari.",
  },
  {
    image: "/ancient.png",
    title: "Best of Egypt: Cairo with Nile Cruise",
    author: "Jeff Willy",
    description:
      "Ancient Egypt is one of the oldest civilizations in the world, with a rich history ranging from the Great Pyramids of Giza in Cairo to a variety of archaeological wonders along the Nile in cities such as Luxor and Aswan.",
  },
  {
    image: "/dubios.png",
    title: "Picking the Perfect African Safari",
    author: "Scott Dubios",
    description:
      "When booking your first African safari, legendary names like Serengeti and Kruger often come to mind — and these are both incredible destinations. However, Africa is a massive place and I don't subscribe to the idea of a starter safari. There are a plethora of choices on where to go based on your budget and other interests, so I created this destination guide as a starting point to help you find the safari that best fits your travel style.",
  },
  {
    image: "/egypt-hotel.png",
    title: "Sustainable Red Sea Escape at La Maison Bleue in El Gouna, Egypt",
    author: "Julien Bojan",
    description:
      "I recently spent two weeks in Egypt, a country I had been dying to visit for many years! I started the trip in Cairo and slowly moved southward",
  },
  {
    image: "/delta.png",
    title: "Discovering Botswana’s Okavango Delta with andBeyond",
    author: "Jean King",
    description:
      "In April 2024, I was lucky enough to be invited on an andBeyond FAM trip to Southern Africa. Whether our adventures in Cape Town, Safari.",
  },
  {
    image: "/renna.png",
    title: "Trip Report JW Marriott Masai Mara",
    author: "Leslie Renna",
    description:
      "In 2023 my husband and I were both celebrating milestone birthdays (40 & 45). I wanted to celebrate by visiting an epic destination! He had never been on a Safari, so I thought this would be a great way to celebrate our birthdays together. This property exceeded all of our expectations by making everything so special for us. From the moment we stepped foot on the dirt airstrip the service was phenomenal.",
  },
];

export default function DiscoverAFrica() {
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
        <h3 className="text-2xl md:text-3xl lg:text-5xl ">Discover Africa</h3>
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
        {africaTrips.map((trip, index) => {
          const isExpanded = expandedIndex === index;
          return (
            <SwiperSlide key={index}>
              <div className="overflow-hidden h-full text-start ">
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
