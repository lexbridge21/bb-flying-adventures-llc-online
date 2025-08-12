import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import {
  FaStar,
  FaUser,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const reviews = [
  {
    advisorName: "Jon H.",
    reviewerName: "Kathy F.",
    location: "Las Vegas",
    date: "December 2024",
    review: `Jon was fantastic to work with. Willing to hear my suggestions and together with his ideas we had a wonderful trip. No problems with hotel or tickets. I definitely will reach out to Jon again.`,
    advisorImage: "/jon.png",
  },
  {
    advisorName: "Jeff K.",
    reviewerName: "Julie P.",
    location: "Amsterdam",
    date: "November 2024",
    review: `Jeff Katcherian was an exceptional travel agent who made my trip to Amsterdam seamless and memorable. He patiently provided a range of hotel options, each with detailed perks, and helped me book activities. This will definitely not be the last time I book a trip through him. Highly recommend!`,
    advisorImage: "/jeffk.png",
  },
  {
    advisorName: "Alberto M.",
    reviewerName: "Jessy T.",
    location: "travel by cruise",
    date: "November 2024",
    review: `Loved this trip Alberto helped me plan with my friends`,
    advisorImage: "/albertom.png",
  },
  {
    advisorName: "Zachary Z.",
    reviewerName: "Jennifer H.",
    location: "travel to Madison",
    date: "November 2024",
    review: `Zachary is incredibly knowledgeable and just gets it. All the trips I’ve booked with Zachary have come with perks, like room upgrades, hotel credit and early check-in/late check-out. He also always secures competitive rates. His hotel suggestions are amazing too.`,
    advisorImage: "/zarchryz.png",
  },
  {
    advisorName: "Lynette B.",
    reviewerName: "Anne F.",
    location: "travel to Lisbon",
    date: "October 2024",
    review: `Lynette Briones did an exceptional job of curating our visit to Lisbon. From dining at the best brunch spot, sipping cocktails at a rooftop bar, to immersing ourselves in Fado music. Every recommendation was spot on. Her expertise made our stay memorable, and we recommend her for your next trip!`,
    advisorImage: "/lynette.png",
  },
  {
    advisorName: "Emma Kate Y.",
    reviewerName: "Sara T.",
    location: "travel to Charleston",
    date: "March 2024",
    review: `It was so wonderful working with Emma Kate to plan our recent trip to Charleston, SC! I have worked with many well-known luxury travel planning companies in the past, and Emma Kate’s attention to detail and organizational skills are unmatched.`,
    advisorImage: "/emma.png",
  },
  {
    advisorName: "Sunseray J.",
    reviewerName: "Bryce J.",
    location: "Louisiana",
    date: "January 2025",
    review: `I had an absolutely amazing experience working with Sunseray to plan my trip to New Orleans! I cannot recommend Sunseray enough for anyone looking to plan their next trip. She went above and beyond, and I’m already looking forward to working with her for my next trip!`,
    advisorImage: "/sunseray.png",
  },
];

const StarReview = () => {
  const swiperRef = useRef(null);

  return (
    <section className="relative bg-[#fdf9f4] m-4 p-4 sm:p-6">
      {/* Background with title */}
      <div
        className="relative bg-cover bg-center py-16 px-4 sm:px-8"
        style={{ backgroundImage: "url('/ocean.jpg')" }}
      >
        <h2 className="text-white text-2xl sm:text-4xl md:text-5xl text-center mb-12 font-chiswick">
          Over 21,000 5-star reviews
        </h2>

        {/* Arrows on large screens */}
        <div className="hidden lg:flex justify-between absolute top-1/2 left-0 right-0 z-10 px-4">
          <button
            className="w-8 h-8 bg-transparent border text-white rounded-full flex items-center justify-center hover:bg-white hover:text-black transition"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <FaArrowLeft />
          </button>
          <button
            className="w-8 h-8 bg-transparent border text-white rounded-full flex items-center justify-center hover:bg-white hover:text-black transition"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <FaArrowRight />
          </button>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation, Pagination]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          pagination={{
            clickable: true,
            el: ".swiper-pagination",
          }}
          breakpoints={{
            320: { slidesPerView: 1.1, spaceBetween: 16 },
            640: { slidesPerView: 1.2, spaceBetween: 20 },
            1024: { slidesPerView: 1, spaceBetween: 30 },
          }}
          className="max-w-5xl mx-auto"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col sm:flex-row bg-[#e7ddd2] p-5 sm:p-8 gap-6 rounded-md">
                {/* Advisor Image + Name Container */}
                <div className="flex items-center sm:block sm:min-w-[160px] sm:text-center border border-black bg-white p-3">
                  <img
                    src={review.advisorImage}
                    alt={review.advisorName}
                    className="w-20 h-20 sm:w-36 sm:h-44 object-cover"
                  />
                  <div className="ml-4 sm:ml-0 sm:mt-3">
                    <p className="text-xs text-[#4a4033] font-semibold">
                      BB ADVISOR
                    </p>
                    <p className="text-base sm:text-lg font-semibold text-black">
                      {review.advisorName}
                    </p>
                  </div>
                </div>

                {/* Review Text */}
                <div className="text-[#4a4033] space-y-4 flex-1">
                  <div className="flex space-x-1 text-black text-lg">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                  <p className="text-sm sm:text-base font-blanco lg:text-[1.1rem] leading-relaxed">
                    {review.review}
                  </p>
                  <div className="text-sm space-y-1 text-black">
                    <p className="flex items-center gap-2">
                      <FaUser className="text-xs" />
                      {review.reviewerName}
                    </p>
                    <p className="flex items-center gap-2">
                      <FaMapMarkerAlt className="text-xs" />
                      <div>
                        Booked travel to{" "}
                        <span className="underline"> {review.location}</span>{" "}
                        with{" "}
                        <span className="underline">{review.advisorName}</span>
                      </div>
                    </p>
                    <p className="flex items-center gap-2">
                      <FaCalendarAlt className="text-xs" />
                      {review.date}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* Pagination Dots (hidden on small screens) */}
          <div className="swiper-pagination hidden md:hidden mt-10"></div>
        </Swiper>
      </div>
    </section>
  );
};

export default StarReview;
