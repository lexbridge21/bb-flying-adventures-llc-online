import { Link } from "react-router-dom";

const features = [
  {
    img: "/advisor.svg", // Replace with your SVG path
    title: "ADVISORS",
    desc: "Travel-passionate entrepreneurs, enabled by tech and accessible opportunities.",
  },
  {
    img: "/partners.svg",
    title: "PARTNERS",
    desc: "Trusted distribution that delivers high-quality customers and insightful data at scale.",
  },
  {
    img: "/travelers.svg",
    title: "TRAVELERS",
    desc: "Better experience, better trips, better value",
  },
];

const BetterEquation = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-12 px-4">
      <h3 className="text-3xl sm:text-4xl lg:text-6xl mb-25">
        A better equation in travel
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl w-full">
        {features.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* SVG Icon */}
            <img src={item.img} alt={item.title} className="w-16 h-16 mb-4" />

            {/* Title */}
            <h3 className="text-xl lg:text-2xl mb-2">{item.title}</h3>

            {/* Paragraph */}
            <p className="text-lg max-w-xs font-blanco lg:text-xl">
              {item.desc}
            </p>

            {/* Button */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BetterEquation;
