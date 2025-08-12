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
    advisorName: "Emma Kate Y.",
    reviewerName: "Sara T.",
    location: "Charleston",
    date: "March 2024",
    review: `It was so wonderful working with Emma Kate to plan our recent trip to Charleston, SC! I have worked with many well-known luxury travel planning companies in the past, and Emma Kate’s attention to detail and organizational skills are unmatched.`,
    advisorImage: "/advisor.jpg",
  },
  {
    advisorName: "John D.",
    reviewerName: "Liam K.",
    location: "Paris",
    date: "June 2024",
    review: `John helped us experience Paris like locals—great restaurant tips and amazing hotel perks! Highly recommend his service.`,
    advisorImage: "/advisor.jpg",
  },
];

const BookStar = () => {
  const swiperRef = useRef(null);

  return (
    <section className="relative bg-[#fdf9f4] m-4 p-4 sm:p-6">
      {/* Background with title */}
      <div
        className="relative bg-cover bg-center py-16 px-4 sm:px-8"
        style={{ backgroundImage: "url('/bookstar.jpg')" }}
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
                        Booked travel to {review.location} with{" "}
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

export default BookStar;
