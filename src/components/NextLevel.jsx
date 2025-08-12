import { Link } from "react-router-dom";

export default function NextLevel() {
  return (
    <section className="px-4 md:px-10 py-12 text-center">
      <h4
        className="font-blanco italic 
               text-xl sm:text-2xl md:text-3xl lg:text-5xl 
               lg:w-[70%] mx-auto mb-4 p-5 leading-snug"
      >
        Next-level travel powered by tech and the human touch
      </h4>

      <p className=" lg:text-[1.1rem]  text-[#63574a]  max-w-2xl mx-auto mb-6 text-sm sm:text-base font-blanco font-[600] mt-[-1.2rem]">
        Our travel advisors have the tools, insights, and connections to build
        your dream vacation. Get VIP recommendations and perks, a seamless
        booking experience, and maybe a cool new friend along the way.
      </p>

      <div className="flex flex-row justify-center gap-4 flex-wrap">
        {/* First Button */}
        <Link to="book-now">
          <button className="bg-black cursor-pointer text-white px-6 py-3  hover:bg-white hover:text-black border transition">
            Book with BB
          </button>
        </Link>

        {/* Second Button */}
        <Link to="about-us">
          <button className="cursor-pointer bg-white text-black px-6 py-3  border hover:bg-black hover:text-white transition">
            Learn More
          </button>
        </Link>
      </div>
    </section>
  );
}
