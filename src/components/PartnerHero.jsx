import { FaChevronDown } from "react-icons/fa";

export default function PartnerHero({ nextSectionRef }) {
  const scrollToNext = () => {
    nextSectionRef?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/partner-bg.jpg')" }} // change to your image path
    >
      {/* Overlay for better text visibility */}
      <div className="absolute top-0 left-0 w-full h-full bg-opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        {/* Heading */}
        <h1 className="text-white text-5xl md:text-5xl lg:text-7xl mt-50 font-normal mb-6">
          Partners
        </h1>

        {/* Learn More Button */}
        <button
          onClick={scrollToNext}
          className="flex flex-col items-center text-white animate-bounce cursor-pointer"
        >
          <span className="text-lg md:text-xl mt-60">LEARN MORE</span>
          <FaChevronDown className="text-2xl md:text-3xl mt-1" />
        </button>
      </div>
    </section>
  );
}
