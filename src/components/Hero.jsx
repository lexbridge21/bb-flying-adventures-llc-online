import { FaChevronDown } from "react-icons/fa";

export default function Hero({ nextSectionRef }) {
  const scrollToNext = () => {
    nextSectionRef?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full h-screen overflow-hidden ">
      <video
        className="absolute top-0 left-0 w-full h-full  object-cover"
        autoPlay
        loop
        muted
        playsInline
        poster="/hero-poster.jpg"
      >
        <source src="/hero-vid.webm" type="video/webm" />
        <source src="/hero-vid.mp4" type="video/mp4" />
      </video>

      <div className="relative z-10 flex flex-col items-center justify-end h-full pb-10">
        <button
          onClick={scrollToNext}
          className="flex flex-col items-center text-white animate-bounce cursor-pointer"
        >
          <span className="text-lg md:text-xl">Learn More</span>
          <FaChevronDown className="text-2xl md:text-3xl mt-1" />
        </button>
      </div>
    </section>
  );
}
