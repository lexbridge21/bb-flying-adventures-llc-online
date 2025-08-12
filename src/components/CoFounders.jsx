import React from "react";

const coFounders = [
  {
    name: " Petter Makarov ",
    role: "Founder + CEO",
    image: "/pettermacarov.jpg", // Replace with your own image URL
  },
  {
    name: "Evan Frank",
    role: "Co-founder",
    image: "/frank.png", // Replace with your own image URL
  },
  {
    name: "Jake Peters",
    role: "Co-founder + Chief Product & Technology Officer",
    image: "/jake.png", // Replace with your own image URL
  },
];

const CoFounders = () => {
  return (
    <div className="  px-4 sm:px-8 lg:px-16 text-center">
      <h2 className="text-3xl sm:text-4xl font-semibold text-black mb-10">
        Our Co-Founders
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {coFounders.map((founder, index) => (
          <div
            key={index}
            className=" border border-black flex justify-center flex-col p-6 h-[70vh]"
          >
            <div className="flex justify-center">
              <img
                src={founder.image}
                alt={founder.name}
                className="w-36 h-36 rounded-full object-cover"
              />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-black">
              {founder.name}
            </h3>
            <p className="mt-2 text-base font-bold text-gray-800">
              {founder.role}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoFounders;
