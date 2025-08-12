import React, { useState } from "react";

const destinations = [
  { name: "Botswana", img: "/botswanasm.png" },
  { name: "Ghana", img: "/ghana.png" },
  { name: "Morocco", img: "/morocco.png" },
  { name: "Rwanda", img: "/rewanda.png" },
  { name: "Sierra Leone", img: "sierra-lone.png" },
  { name: "Tunisia", img: "/tunisia.png" },
  { name: "Zimbabwe", img: "/zimba.png" },
  { name: "Egypt", img: "/egypt.png" },
  { name: "Kenya", img: "/kenyaf.png" },
  { name: "Mozambique", img: "/mosambi.png" },
  { name: "Senegal", img: "/senega.png" },
  { name: "South Africa", img: "/southafri.png" },
  { name: "Uganda", img: "/uganda.png" },
  { name: "Ethiopia", img: "/ethopia.png" },
  { name: "Mauritius", img: "/mauri.png" },
  { name: "Namibia", img: "/nami.png" },
  { name: "Seychelles", img: "/seyhelles.png" },
  { name: "Tanzania", img: "/tanza.png" },
  { name: "Zambia", img: "/zambia.png" },
];

export default function TopAfrica() {
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
          Top destinations in Africa
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
