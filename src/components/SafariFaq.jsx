import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function SafariFaq() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What are the perks of working with a BB Travel Advisor?",
      answer:
        "Working with a BB travel agent levels up your vacation experience. A travel agent handles all the logistics — on-the-ground transfers, hotel and tour bookings, itinerary planning — so you can get the most out of your trip, without any of the stress. ",
    },
    {
      question: "Do BB Travel Advisors book yachts?",
      answer:
        "Yes! We partner with several yacht-charter companies. Tell us what you want, and a Fora Advisor will find you the best partner to set sail with.",
    },
    {
      question: "What types of travel should I book with my BB Travel Advisor?",
      answer:
        "All types. Resort vacations, safaris, city breaks, vacation home rentals, once-in-a-lifetime adventures, weekend escapes — we do it all. Send it our way. If we can’t book it we’ll let you know.",
    },
    {
      question: "How much do BB Travel Advisors charge?",
      answer:
        "BB Travel Advisors don’t charge anything for most hotel bookings. Advisors receive commissions from properties and travel providers, at no additional cost to you. For more complicated multi-stop itineraries, BB Travel Advisors may charge a planning fee. This will always be transparently presented upfront.",
    },
    {
      question: "Are Royal Caribbean cruises good for couples, too?",
      answer:
        "Absolutely. Although Royal Caribbean is known for its family-friendly vibe, there is plenty to attract couples, including several adults-only pools and spaces.",
    },
    {
      question: "What types of cruises does Viking offer?",
      answer:
        "Viking is focused on small-ship cruising, although they also have a few ocean cruise ships. Even better, Viking travels to all seven continents.",
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
