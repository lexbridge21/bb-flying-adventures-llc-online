import React from "react";
import { Link } from "react-router-dom";

// Logos directly from public folder
const logos = [
  "/logo1.png",
  "/logo2.png",
  "/logo3.png",
  "/logo4.png",
  "/logo5.png",
  "/logo6.png",
  "/logo7.png",
  "/logo8.png",
  "/logo9.png",
  "/logo11.png",
];

export default function FeatureIn() {
  return (
    <Link to="/press" className="block">
      {/* Heading */}
      <h3 className="font-chiswick text-[#63574a] text-center uppercase mb-4 md:mb-6 text-sm md:text-base tracking-widest">
        Featured In
      </h3>

      {/* Marquee Section */}
      <section className="overflow-hidden whitespace-nowrap h-[60px] relative font-chiswick">
        <div className="flex animate-scroll hover:[animation-play-state:paused]">
          {/* Duplicate logos for seamless infinite loop */}
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex justify-center items-center mx-3 sm:mx-4 md:mx-6"
            >
              <img
                src={logo}
                alt={`Logo ${i + 1}`}
                className="h-5 w-auto object-contain"
                style={{ mixBlendMode: "darken" }}
              />
            </div>
          ))}
        </div>
      </section>
    </Link>
  );
}
