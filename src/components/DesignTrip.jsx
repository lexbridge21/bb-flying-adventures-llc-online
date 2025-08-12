import React from "react";
import { FaRegClock } from "react-icons/fa";

const DesignTrip = () => {
  return (
    <section className="w-full min-h-screen bg-[#FBF8F5] flex justify-center items-start px-5 py-10">
      <div className="max-w-6xl w-full bg-white rounded-md border overflow-hidden flex flex-col md:flex-row md:min-h-[90vh]">
        {/* Left Section */}
        <div className="flex-1 flex flex-col p-8 md:p-12 order-2 md:order-1">
          {/* Logo stays at top */}
          <h1 className="text-3xl font-serif mb-6 md:mb-10">BB Travel LLC</h1>

          <div className="flex flex-col justify-center flex-grow lg:p-15">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Let’s design your trip
            </h2>

            <p className="text-gray-700 lg:text-xl mb-3">
              Our advisors book hotels, cruises, safaris and more.
            </p>
            <p className="text-gray-700  lg:text-xl mb-3">
              Based in Canada? Please head{" "}
              <a href="#" className=" underline">
                here
              </a>
              .
            </p>
            <p className="text-gray-700  lg:text-xl mb-6">
              ¿Prefieres español? Haz clic{" "}
              <a href="#" className=" underline">
                aquí
              </a>
              .
            </p>

            {/* Link Button */}
            <a
              href="book-now"
              className="inline-block w-45 hover:bg-white  lg:text-xl border hover:text-black bg-black text-white px-6 py-3 font-bold text-sm   transition-all duration-200"
            >
              GET STARTED
            </a>

            {/* Clock Info */}
            <div className="flex items-center gap-2 font-bold text-gray-600 text-sm mt-3">
              <FaRegClock /> <span>Takes 2 minutes</span>
            </div>
          </div>
        </div>

        {/* Right Section (Image) */}
        <div className="flex-1 order-1 md:order-2">
          <img
            src="/designtrip.gif" // Replace with your GIF/image
            alt="Design Trip"
            className="w-full h-full object-cover md:rounded-none"
          />
        </div>
      </div>
    </section>
  );
};

export default DesignTrip;
