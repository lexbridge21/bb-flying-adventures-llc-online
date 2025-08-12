import React from "react";

const content = [
  {
    title: "Community of travel professionals",
    text: "BB Advisors are magnetic, open-minded and endlessly curious about the world around them. They're entrepreneurs and professionals with a distinct point of view, great taste and savvy expertise that informs the travel experiences they create.",
    button: {
      text: "JOIN US",
      link: "/careers", // Change to your actual route or external URL
    },
    image: "/join.png", // Replace with actual image
    reverseOnDesktop: false,
  },
  {
    title: "Powerful partners",
    text: "BB’s partners understand the value of a more connected travel community. They’re hungry for data and insights, and appreciate our tech-savvy approach. They know this mindset will ensure they stay ahead of the curve in a competitive market. BB’s partners are excited to work hand-in-hand, continuing to enhance the traveler experience and evolve the future of our industry.",
    button: {
      text: "PARTNER WITH US",
      link: "/partners", // Change to your actual route or external URL
    },
    image: "/partner.png", // Replace with actual image
    reverseOnDesktop: true,
  },
  {
    title: "Curator of exceptional experiences",
    text: "BB travelers crave authentic connections and are savvy explorers of the world. They're not just booking trips – they’re seeking experiences. Our travelers know that using a BB Advisor is about more than just logistics; it’s about making the most of their travel and feeling empowered to explore.",
    button: {
      text: "BOOK WITH US",
      link: "/book-now", // Change to your actual route or external URL
    },
    image: "/book.png", // Replace with actual image
    reverseOnDesktop: false,
  },
];

const AboutMix = () => {
  return (
    <div className="bg-[#e7ddd2] mx-6 my-6 space-y-16">
      {content.map((item, idx) => (
        <div
          key={idx}
          className={`grid grid-cols-1 md:grid-cols-2 gap-6 items-center ${
            item.reverseOnDesktop ? "md:flex-row-reverse md:flex" : ""
          }`}
        >
          {/* Image Section (Always First on Mobile) */}
          <div className="w-full">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full lg:h-screen object-cover"
            />
          </div>

          {/* Text Section */}
          <div className="text-black px-2 p-6 ">
            <h2 className="text-2xl p-6 sm:text-3xl lg:text-5xl font-semibold mb-4">
              {item.title}
            </h2>
            <p className="text-gray-700 mb-4 p-6 leading-relaxed font-blanco lg:text-[1.1rem]">
              {item.text}
            </p>
            <a
              href={item.button.link}
              className="bg-black ml-6 text-white border hover:bg-white hover:text-black px-5 py-2 text-sm font-medium tracking-wide inline-block"
            >
              {item.button.text}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutMix;
