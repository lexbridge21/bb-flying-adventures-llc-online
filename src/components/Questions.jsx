import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function Questions() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is a travel agency?",
      answer:
        "A travel agency is a business that helps people plan, book, and manage trips. They provide services such as booking flights, hotels, and tours.",
    },
    {
      question:
        "What is the difference between a travel advisor and a travel agent?",
      answer:
        "A travel advisor offers a more personalized travel planning experience, while a travel agent typically handles bookings. Advisors often provide expert recommendations and perks.",
    },
    {
      question: "What are the benefits of working with a travel agent?",
      answer:
        "Working with a travel agent can save you time, provide insider deals, and give you access to exclusive perks and upgrades.",
    },
    {
      question: "Will I get perks and benefits when I work with a BB Advisor?",
      answer:
        "Yes! BB Advisors have partnerships with hotels and brands to give you special perks like free breakfast, room upgrades, and credits.",
    },
    {
      question: "What types of travel can I book with BB?",
      answer:
        "You can book luxury vacations, city getaways, adventure trips, cruises, and much more through BB Advisors.",
    },
    {
      question:
        "Do BB Advisors count as Disney travel agents? What about cruise travel agents?",
      answer:
        "Yes, BB Advisors can help book Disney vacations and cruises with special perks and recommendations.",
    },
    {
      question: "I’m planning a group trip. Can BB Advisors help?",
      answer:
        "Absolutely! BB Advisors can coordinate group bookings, itineraries, and exclusive group perks.",
    },
    {
      question:
        "How do I make the most of my experience when planning a trip with BB?",
      answer:
        "Share your preferences with your advisor, and they will craft a tailored itinerary with insider recommendations.",
    },
    {
      question: "I’d like to be a BB Advisor myself. How can I join?",
      answer:
        "Visit BB’s website and apply to become a travel advisor. They provide training and tools to help you start your travel business.",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="px-6 py-12 md:px-16 lg:px-24 max-w-3xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-chiswick text-center mb-8">
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
