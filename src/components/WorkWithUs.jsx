import React from "react";

const WorkWithUs = () => {
  return (
    <div className="w-full">
      {/* Top image section with text overlay */}
      <div className="relative w-full  h-[60vh] md:h-[70vh] lg:h-[80vh]">
        <img
          src="/skyline.png" // Replace with your actual image URL
          alt="NYC Skyline"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-semibold">
            Work with us
          </h1>
        </div>
      </div>

      {/* Features section */}
      <div className="bg-[#e7ddd2] py-12 px-6 md:px-16 lg:px-32 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        <div>
          <div className="flex justify-center mb-4">
            <img src="/desktop.svg" alt="" />
          </div>
          <h2 className="text-lg font-medium">
            Sunlit NYC headquarters
            <br />
            with skyline views
          </h2>
        </div>

        <div>
          <div className="flex justify-center mb-4">
            <img src="/star.svg" alt="" />
          </div>
          <h2 className="text-lg font-medium">Best-in-class benefits</h2>
        </div>

        <div>
          <div className="flex justify-center mb-4">
            <img src="/user.svg" alt="" />
          </div>
          <h2 className="text-lg font-medium">
            Weekly catered lunches,
            <br />
            team outings and travel
            <br />
            perks
          </h2>
        </div>
      </div>
    </div>
  );
};

export default WorkWithUs;
