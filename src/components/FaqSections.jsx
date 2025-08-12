import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqData = [
  {
    section: "For Travelers",
    items: [
      {
        question: "What exactly do BB Travel Advisors do?",
        answer:
          "BB Travel Advisors help you plan incredible trips using their travel expertise, personal recommendations, and exclusive perks.",
      },
      {
        question: "What types of travel can I book with BB Travel?",
        answer:
          "From weekend getaways to international vacations, BB Travel Advisors can help with all types of travel: leisure, luxury, group trips, and more.",
      },
      {
        question: "What are the perks of working with a BB Travel Advisor?",
        answer:
          "You get insider knowledge, VIP treatment at hotels, and a custom travel experience—all at no extra cost to you.",
      },
      {
        question: "How much do BB Travel Advisors charge?",
        answer:
          "Most of the time, working with a Fora Advisor is free! They earn commissions from travel partners, not from your pocket.",
      },
      {
        question: "What if I actually enjoy planning my travel?",
        answer:
          "Great! Your BB Travel Advisor can help enhance your plans with perks, insights, and reservations you may not be able to access alone.",
      },
      {
        question: "I’m planning a group trip. Can BB Travel Advisors help?",
        answer:
          "Absolutely. BB Travel Advisors are experienced in coordinating group travel, including corporate retreats and celebrations.",
      },
      {
        question:
          "How do I make the most of my experience when planning a trip with BB Travel?",
        answer:
          "Be open, share your preferences, and communicate early—your advisor will tailor the trip to your style.",
      },
      {
        question:
          "Does BB Travel endorse all the views and opinions shared in guides, trip reports, and itineraries on your site?",
        answer:
          "Views expressed in content belong to the authors and do not necessarily reflect BB Travel's stance.",
      },
    ],
  },
  {
    section: "About BB Travel",
    items: [
      {
        question: "What is BB Travel?",
        answer: (
          <>
            Learn more{" "}
            <a href="/about-us" className="underline font-medium">
              About Us
            </a>
            .
          </>
        ),
      },
      {
        question: "Who is behind BB Travel?",
        answer:
          "We’re a passionate team of technologists, travel industry pros, and entrepreneurs backed by visionary investors.",
      },
      {
        question: "Is BB Travel hiring?",
        answer:
          "Yes! Check our careers page to explore open roles and join our mission to modernize travel advising.",
      },
    ],
  },
  {
    section: "Questions you’re afraid to ask? We got you.",
    items: [
      {
        question: "How does BB Travel make money?",
        answer:
          "BB Travel earns commissions from hotels and travel partners when you book through an advisor.",
      },
      {
        question: "Why do I have to pay to become an advisor?",
        answer:
          "The small fee covers training, tools, and support to help you succeed as a travel advisor.",
      },
      {
        question: "Are there booking minimums?",
        answer:
          "Nope. You're welcome to book as much—or as little—as you want. Flexibility is part of the BB Travel model.",
      },
    ],
  },
];

const FaqSections = () => {
  const [openIndexes, setOpenIndexes] = useState({});

  const toggle = (question) => {
    setOpenIndexes((prev) => ({
      ...prev,
      [question]: !prev[question],
    }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h2 className="text-center text-3xl md:text-5xl font-semibold mb-12">
        FAQ
      </h2>

      {faqData.map((section, i) => (
        <div key={i} className="mb-12">
          <h3 className="text-center text-xl md:text-3xl font-semibold mb-6">
            {section.section}
          </h3>

          <div className="border-t border-gray-200">
            {section.items.map((item, index) => {
              const question = item.question;
              const answer = item.answer;
              const isOpen = !!openIndexes[question];

              return (
                <div
                  key={index}
                  className="border-b border-gray-200 transition-all duration-300"
                >
                  <button
                    onClick={() => toggle(question)}
                    className="w-full flex justify-between items-center py-4 text-left text-sm sm:text-base font-medium text-gray-900 hover:text-black"
                  >
                    <span className="pr-4">{question}</span>
                    <span className="text-base sm:text-lg transition-transform duration-300">
                      {isOpen ? <FaMinus className="rotate-180" /> : <FaPlus />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pb-4 text-sm text-gray-700 leading-relaxed px-1 sm:px-2">
                      {answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaqSections;
