import { Link } from "react-router-dom";

const features = [
  {
    img: "/rec.svg", // Replace with your SVG path
    title: "PERSONALIZED TRAVEL RECS",
    desc: "Customized travel planning for your style",
  },
  {
    img: "/insider.svg",
    title: "INSIDER KNOWLEDGE",
    desc: "Expert advice from people who've actually been there",
  },
  {
    img: "/vip.svg",
    title: "VIP PERKS",
    desc: "Free upgrades, spa credits and more: we've got you",
  },
];

const TravelBetter = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-12 px-4">
      <h3 className="lg:text-6xl mb-25">
        Travel the way you want, but better.
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
      <Link
        to="/book-now"
        className="mt-25 px-5 py-2 bg-black text-white  border border-black transition-colors duration-300 hover:bg-white hover:text-black"
      >
        Book with BB
      </Link>
    </div>
  );
};

export default TravelBetter;
