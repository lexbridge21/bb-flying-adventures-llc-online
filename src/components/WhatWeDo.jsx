import { Link } from "react-router-dom";

export default function WhatWeDo() {
  return (
    <section className="px-0 mx-3 py-12 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center">
        {/* TEXT Content */}
        <div className=" h-screen p-6 md:p-10 flex flex-col justify-center order-2 md:order-1">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-chiswick mb-4">
            What we do
          </h2>

          <p className="text-gray-700 mb-6 leading-relaxed ">
            We’re reimagining the travel advisor industry, building an agency
            that's modern, inclusive and tech-enabled.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed ">
            Our mission is to power the next generation of travel entrepreneurs.
            We believe in the power of partnership — the synergy between
            advisors, travelers and partners that creates a better, more
            equitable equation for everyone.
          </p>
        </div>
        {/* IMAGE */}
        <img
          src="/what-we-do.png" // ✅ replace with your actual image path
          alt="Travel Tips"
          className="w-full h-screen object-cover order-1 md:order-2"
        />
      </div>
    </section>
  );
}
