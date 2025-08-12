import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function CelebrationFaq() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What are the perks of working with a BB Travel Advisor?",
      answer:
        "Working with a BB travel agent levels up your vacation experience. A travel agent handles all the logistics — on-the-ground transfers, hotel and tour bookings, itinerary planning — so you can get the most out of your trip, without any of the stress. ",
    },
    {
      question: "Who is actually booking my trip?",
      answer:
        "Your BB Travel Advisor is a live human (with feelings and everything!). We use technology to communicate, organize information and manage the sales process, but when it comes to organizing the best possible trip for each traveler, we believe that you can’t replace a real connection with a travel expert. Robots don’t get you like we do.",
    },
    {
      question: "How much do BB Travel Advisors charge?",
      answer:
        "BB Travel Advisors don’t charge anything for most hotel bookings. Advisors receive commissions from properties and travel providers, at no additional cost to you. For more complicated multi-stop itineraries, BB Travel Advisors may charge a planning fee. This will always be transparently presented upfront.",
    },
    {
      question: "What kinds of travel partnerships does BB Travel have?",
      answer:
        "BB Travel has partnered with more than 5,000 hotels, meaning our advisors have access to exclusive upgrades & perks at 5,000+ properties around the world, many of which belong to prestigious collections including Virtuoso, Four Seasons, Rosewood and more. We work with both high-end luxury partners as well as lifestyle boutique partners. At BB Travel, it’s all about meeting your clients where they're at.",
    },
    {
      question: "Can a BB Travel Advisor help me with a room block?",
      answer:
        "Yes, a BB Travel Advisor can help you book a room block! Our expert advisors will coordinate directly with the hotel to ensure everything is handled. Whether it’s a wedding, corporate retreat, or special event, we’ve got you covered.",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="px-6 py-12 md:px-16 lg:px-24 max-w-3xl mx-auto">
      <h2 className="text-3xl md:text-4xl lg:text-6xl font-chiswick text-center mb-8">
        Still have questions?
      </h2>

      <div className="divide-y divide-gray-300">
        {faqs.map((faq, index) => (
          <div key={index}>
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex justify-between items-center py-4 text-left text-lg font-chiswick focus:outline-none"
            >
              {faq.question}
              {openIndex === index ? (
                <FaMinus className="text-lg" />
              ) : (
                <FaPlus className="text-lg" />
              )}
            </button>

            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                openIndex === index
                  ? "max-h-40 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-gray-600 pb-4">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
