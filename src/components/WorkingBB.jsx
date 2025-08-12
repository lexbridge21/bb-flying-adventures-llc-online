import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const testimonials = [
  {
    name: "Yossi Eliyahu",
    title: "VP of Engineering",
    image: "/yossi.png", // Replace with actual image
    quote:
      "The company culture at BB is energizing and collaborative, and there’s a real sense of teamwork in everything we do. It’s exciting to be creating something new together and every day.",
  },
  {
    name: "Victor Okon",
    title: "Senior Front-End Engineer",
    image: "/victor.png", // Replace with actual image
    quote:
      "Not only is the team awesome, but BB’s leadership team really trusts its employees to make meaningful contributions – everyone’s voice is heard, which makes a world of difference in the day-to-day.",
  },
  {
    name: "Matigan King",
    title: "Editorial & SEO Lead",
    image: "/king.png", // Replace with actual image
    quote:
      "I am constantly struck by how lucky I am to work with and learn from such an extraordinary team. Everyone is kind, eager to help and generous with their wisdom, energy and spirit. It's truly a gift to work here!",
  },
];

const WorkingBB = () => {
  return (
    <div className="py-12 px-4 md:px-12 lg:px-24 ">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-2">
        Working at BB LLC
      </h2>
      <p className="text-center text-gray-600 mb-10">
        As told by a few team members at BB HQ
      </p>

      <Swiper
        spaceBetween={20}
        slidesPerView={1.3}
        breakpoints={{
          640: {
            slidesPerView: 1.3,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        pagination={{ clickable: true }}
        modules={[Pagination]}
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="overflow-hidden p-4 h-full">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-64 object-cover "
              />
              <p className="italic text-gray-700 mt-4 text-sm md:text-base">
                “{item.quote}”
              </p>
              <div className="mt-4">
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-gray-500">{item.title}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default WorkingBB;
