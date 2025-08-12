import React from "react";

const AfricaHero = () => {
  return (
    <section className="flex flex-col md:flex-row h-screen w-full">
      {/* Left Side - Image */}
      <div
        className="w-full md:w-1/2 h-64 md:h-full bg-cover bg-center"
        style={{ backgroundImage: "url('/beach.jpg')" }} // Replace with your image path
      />

      {/* Right Side - Content */}
      <div className="w-full md:w-1/2 bg-[#f3ebdf] flex items-center justify-center px-6 md:px-12 py-10 text-center md:text-left">
        <div>
          <p className="text-xs tracking-widest  text-center lg:text-2xl text-gray-700 uppercase mb-2">
            Explore
          </p>
          <h1 className="text-4xl md:text-5xl text-center lg:text-7xl  font-normal text-gray-900 mb-4">
            Africa
          </h1>
          <p className="text-sm md:text-base text-gray-800 max-w-md mx-auto md:mx-0">
            Africa invites travelers to embark on a journey filled with wildlife
            encounters, vibrant cultures and the chance to explore a land rich
            in history and natural wonders.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AfricaHero;
