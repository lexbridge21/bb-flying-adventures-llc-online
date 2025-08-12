import React, { useState } from "react";

const categories = ["Hotels", "Cruises", "Experiences", "Fora Reserve"];

const allPartners = {
  Hotels: [
    {
      name: "Four Seasons",
      image: "/four-seasons.png",
      description:
        "BB is part of the exclusive Four Seasons Preferred Partner program for premium benefits.",
    },
    {
      name: "Rosewood Elite",
      image: "/rosewood.png",
      description:
        "As members of Rosewood Elite, BB travelers unlock perks across Rosewood hotels worldwide.",
    },
    {
      name: "Belmond Club",
      image: "/belmond.png",
      description:
        "Belmond Bellini Club perks include upgrades, credits, and VIP service for BB clients.",
    },
    {
      name: "Rocco Forte",
      image: "/rocco.png",
      description:
        "BB clients enjoy exclusive rates and amenities at Rocco Forte Knights hotels.",
    },
    {
      name: "Aman",
      image: "/aman.png",
      description:
        "Aman’s serene resorts offer unmatched hospitality and perks for BB travelers.",
    },
    {
      name: "Relais & Châteaux",
      image: "/relais.png",
      description:
        "Enjoy VIP treatment and benefits at Relais & Châteaux properties worldwide.",
    },
    {
      name: "Langham Couture",
      image: "/langham.png",
      description:
        "Langham’s Couture program delivers curated perks and elite experiences for BB guests.",
    },
    {
      name: "Hyatt Privé",
      image: "/hyatt.png",
      description:
        "BB travelers access exclusive Hyatt Privé benefits at top-tier Hyatt hotels.",
    },
    {
      name: "Diamond Club",
      image: "/diamond.png",
      description:
        "Dorchester Collection’s Diamond Club offers exclusive privileges for BB guests.",
    },
    {
      name: "The Peninsula",
      image: "/peninsula.png",
      description:
        "The Peninsula PenClub provides VIP amenities and personalized services to BB clients.",
    },
    {
      name: "Fan Club",
      image: "/fan.png",
      description:
        "Preferred perks and benefits at selected Fan Club properties for BB travelers.",
    },
    {
      name: "IHG Destinations",
      image: "/ihg.png",
      description:
        "IHG Destinations delivers elite benefits at Intercontinental, Kimpton, and more.",
    },
  ],
  Cruises: [],
  Experiences: [],
  "Fora Reserve": [],
};

const CruisePartner = () => {
  const [activeCategory, setActiveCategory] = useState("Hotels");
  const [visibleCount, setVisibleCount] = useState(12);

  const currentList = allPartners[activeCategory];

  const handleViewMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <div className="px-4 mt-[-10rem] lg:mt-10 py-10 max-w-7xl mx-auto">
      {/* Navigation Tabs */}
      <div className="flex justify-center gap-6 mb-10 flex-wrap">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => {
              setActiveCategory(category);
              setVisibleCount(12);
            }}
            className={`uppercase px-4 py-2 text-sm font-medium border-b-2 transition-all duration-300 ${
              activeCategory === category
                ? "border-black text-black"
                : "border-transparent text-gray-500 hover:text-black"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Section Title */}
      <h2 className="text-center text-2xl font-semibold mb-8">
        Preferred {activeCategory} Partners
      </h2>

      {/* Cards Grid - 4 per row on lg */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {currentList.slice(0, visibleCount).map((partner, idx) => (
          <div
            key={idx}
            className="border  pt-6 flex flex-col items-center text-center bg-[#f9f6f1] hover:shadow-md transition min-h-[400px] w-full"
          >
            <div className="h-20 m-5 flex items-center justify-center">
              <img
                src={partner.image}
                alt={partner.name}
                className="h-36 lg:h-50 lg:mt-8   object-contain"
              />
            </div>
            <div className="bg-[#e7ddd2] w-full mt-15 p-6  h-full">
              <p className="text-sm text-gray-500 mt-3 font-black lg:text-[1rem] text-start ">
                {partner.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      {visibleCount < currentList.length && (
        <div className="flex justify-center mt-10">
          <button
            onClick={handleViewMore}
            className="px-6 cursor-pointer py-2 border border-black text-sm font-medium hover:bg-black hover:text-white transition"
          >
            MORE
          </button>
        </div>
      )}
    </div>
  );
};

export default CruisePartner;
