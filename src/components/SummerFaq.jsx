import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function SummerFaq() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Where should I travel this summer?",
      answer:
        "This is where a BB Travel Advisor comes in. Tell them your vibe, budget and what you want to do. They'll then find the perfect spot to live out your best summer yet. But if you need some initial inspiration, our community is particularly loving Singapore, Rome, Kyoto, Istanbul, Lisbon and Chicago.",
    },
    {
      question: "What are the perks of working with a BB Travel Advisor?",
      answer: `Working with a BB Travel agent levels up your vacation experience. A travel agent handles all the logistics — on-the-ground transfers, hotel and tour bookings, itinerary planning — so you can get the most out of your trip, without any of the stress. 
    
    When booking your trip through a  BB Travel Advisor, you’ll also benefit from the partnerships we have with more than 8,200 hotels and travel providers around the world, including Virtuoso, Four Seasons, Rosewood, Belmond and beyond. (Read more about our partners.) Say hello to room upgrades, complimentary breakfasts, resort credits and top-tier treatment.`,
    },
    {
      question: "What types of travel can I book with BB Travel?",
      answer:
        "You name it, we book it: resort vacations, safaris, bachelor / bachelorette trips, city breaks, cruises (and yachts), business trips, private jets, vacation home rentals, multi-day tours, weekend escapes…We do it all.",
    },
    {
      question: "Do BB Travel Advisors book yachts?",
      answer:
        "Yes! We partner with several yacht-charter companies. Tell us what you want, and a BB Travel Advisor will find you the best partner to set sail with.",
    },
    {
      question: "What are the best summer travel destinations for families?",
      answer:
        "A BB Travel Advisor will find the destination that suits your family best, whether you're the kind of family who thrives on a dude ranch in Wyoming, an all-inclusive resort in Mexico, a Mediterranean cruise or African safari.",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="px-6 py-12 md:px-16 lg:px-24 max-w-3xl mx-auto">
      <h2 className="text-3xl md:text-4xl lg:text-6xl font-chiswick text-center mb-8">
        Summer travel FAQs
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
