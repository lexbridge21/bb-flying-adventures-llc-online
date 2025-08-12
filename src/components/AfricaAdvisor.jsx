import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useRef } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const africaTrips = [
  {
    image: "/botswana.png",
    title: "Gray Grandy",
    description: `I bring that "oldest daughter energy" to all aspects of travel planning. Let my OCD create your itinerary! Let me plan the perfect vacay for your discerning family (even if that is an age seven tyrant).`,
  },

  {
    image: "/jeffwilly.png",
    title: "Jeff Willy",
    description:
      "If I'm not spending a week at an all-inclusive resort in Mexico or the Caribbean, then I'm likely planning a luxurious international trip.",
  },
  {
    image: "/daly.png",
    title: "Megan Daly",
    description:
      "I've been the go-to family trip planner since I was 10. I love food, finding the perfect market and luxury travel.",
  },
  {
    image: "/eliza.png",
    title: "Eliza Jameson",
    description:
      "The one who plans everything whether it's a family vacation, girls trip, wedding, or a couples getaway.",
  },
  {
    image: "/marisa.png",
    title: "Marisa Butterworth",
    description:
      "I am a seasoned globetrotter that loves crafting unforgettable experiences",
  },
  {
    image: "/jenn.png",
    title: "Jenn King",
    description:
      "I love researching and learning about domestic or foreign places and cultures.",
  },
  {
    image: "/bisaya.png",
    title: "Bisaya Abdullahi",
    description:
      "Adventurous twin with a passport full of stories from over 22 countries.",
  },
  {
    image: "/scottdubios.png",
    title: "Scott Dubois",
    description:
      "Wildlife and outdoor travel specialist mixing immersion in nature with experiential luxury. Austin-based travel writer and dad.",
  },
  {
    image: "/leslieren.png",
    title: "Leslie Renna",
    description: `With a passion and love for travel, new experiences and discoveries, I follow the philosophy "you are what you experience."`,
  },
  {
    image: "/singular.png",
    title: "Singular Sojourns",
    description: `We've got a confession: we are utterly, hopelessly addicted to travel.`,
  },
  {
    image: "/patel.png",
    title: "Shivani Patel",
    description: `City explorer, outdoor adventurer, experience (and passport stamp) collector based out of Los Angeles.`,
  },
];

export default function AfricaAdvisor() {
  const swiperRef = useRef(null);

  const handlePrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };

  const handleNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  return (
    <section className="px-4 md:px-10 lg:px-16 py-10 bg-[#f8f5f1] font-chiswick lg:mt-15">
      {/* Heading & Arrows */}
      <div className="flex justify-between items-center mb-6 relative">
        <h3 className="text-2xl md:text-3xl lg:text-5xl">
          Suggested BB Travel Advisors
        </h3>
        {/* Custom Round Arrows */}
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
          320: {
            slidesPerView: 1.2, // Show 1 full card and part of the next
          },
          768: {
            slidesPerView: 2.2,
          },
          1024: {
            slidesPerView: 3.2,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
      >
        {africaTrips.map((trip, index) => (
          <SwiperSlide key={index}>
            <div className=" overflow-hidden h-full text-start">
              <img
                src={trip.image}
                alt={trip.title}
                className="w-full h-80 object-cover lg:mt-10"
              />
              <div className="py-4 flex flex-col h-full ">
                <h3 className="text-x1 md:text-2x1 font-normal lg:text-3xl mb-2">
                  {trip.title}
                </h3>

                <p className="text-sm font-blanco lg:text-lg text-gray-700 leading-snug  ">
                  {trip.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
