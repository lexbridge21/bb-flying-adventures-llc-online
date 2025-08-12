import React from "react";

const WhyWork = () => {
  return (
    <section className=" px-4 py-16 sm:px-8 lg:px-20">
      <div className="flex flex-col-reverse lg:flex-row items-center max-w-7xl mx-auto gap-10">
        {/* Text Content */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-chiswick font-normal text-black mb-10">
            Why work with a <br /> Fora Advisor
          </h2>

          <ul className="space-y-6 text-[#4a4033] text-base sm:text-lg font-blanco">
            <li className="border-t border-[#4a4033] pt-4">
              • Customized travel planning for your style
            </li>
            <li className="border-t border-[#4a4033] pt-4">
              • Expert advice with personalized recommendations
            </li>
            <li className="border-t border-[#4a4033] pt-4 border-b pb-4">
              • Free upgrades, spa credits and more—we’ve got you
            </li>
          </ul>
        </div>

        {/* Image */}
        <div className="w-full lg:w-1/2">
          <img
            src="/advisor.jpg"
            alt="Advisor Poolside"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyWork;
