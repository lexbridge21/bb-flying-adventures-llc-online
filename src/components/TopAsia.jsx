import React, { useState } from "react";

const destinations = [
  { name: "Bhutan", img: "/bhutan.png" },
  { name: "India", img: "/india.png" },
  { name: "Laos", img: "/laos.png" },
  { name: "Nepal", img: "/nepal.png" },
  { name: "Singapore", img: "singapore.png" },
  { name: "Taiwan", img: "/tiawan.png" },
  { name: "Vietnam", img: "/vietnam.png" },
  { name: "Cambodia", img: "/cambodia.png" },
  { name: "Indonesia", img: "/indonesia.png" },
  { name: "Malaysia", img: "/malaysia.png" },
  { name: "Pakistan", img: "/pakistan.png" },
  { name: "South Korea", img: "/south-korea.png" },
  { name: "Thailand", img: "/Thailand.png" },
  { name: "China", img: "/china.png" },
  { name: "Japan", img: "/japan.png" },
  { name: "Maldives", img: "/maldives.png" },
  { name: "Philippines", img: "/philippines.png" },
  { name: "Sri Lanka", img: "/sri-lanka.png" },
  { name: "Turkey", img: "/turkey.png" },
];

export default function TopAsia() {
  const [visibleCount, setVisibleCount] = useState(6);

  const toggleShow = () => {
    if (visibleCount >= destinations.length) {
      setVisibleCount(6); // Show less
    } else {
      setVisibleCount(destinations.length); // Show all
    }
  };

  return (
    <div className="py-10 bg-[#FAF6F1]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-normal mb-8">
          Top destinations in Asia
        </h2>

        {/* Desktop grid */}
        <div className="hidden md:grid md:grid-cols-3 md:gap-x-10">
          {[...Array(3)].map((_, colIndex) => (
            <div key={colIndex} className="space-y-5">
              {destinations
                .filter((_, i) => i % 3 === colIndex)
                .map((d, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <img
                      src={d.img}
                      alt={d.name}
                      className="w-20 h-20 object-cover"
                    />
                    <span className="font-normal text-xl lg:text-[1.8rem]">
                      {d.name}
                    </span>
                  </div>
                ))}
            </div>
          ))}
        </div>

        {/* Mobile grid (2 columns) */}
        <div className="md:hidden">
          <div className="grid grid-cols-2 gap-5">
            {destinations.slice(0, visibleCount).map((d, i) => (
              <div key={i} className="flex items-center gap-3">
                <img
                  src={d.img}
                  alt={d.name}
                  className="w-16 h-16 object-cover"
                />
                <span className="font-medium">{d.name}</span>
              </div>
            ))}
          </div>

          {/* Toggle Button */}
          <div className="flex justify-center">
            <button
              onClick={toggleShow}
              className="mt-4 cursor-pointer px-6 py-2 bg-black text-white border  transition-colors duration-300 hover:bg-white hover:text-black"
            >
              {visibleCount >= destinations.length ? "See Less" : "See All"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
