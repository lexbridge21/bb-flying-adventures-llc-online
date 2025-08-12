import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function HoneyFaq() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How do I pick a honeymoon destination?",
      answer:
        "Your BB Travel Advisor will spend time getting to know your travel style. Are you a luxury hotel lover? Do you want an all-inclusive resort? Are you into active adventure? No matter what your vision looks like, your Fora Advisor can lend their destination expertise to help you choose your dream destination.",
    },
    {
      question: "Why should I use a travel agent to plan my honeymoon?",
      answer:
        "You made it through the toasts, celebrations, and (miraculously) the wedding planning. Now it’s time to exhale. Even though honeymoon planning can be overwhelming, it doesn’t have to be. Just as a wedding planner helps you prepare for the big day, a travel agent helps manage all the logistics and details of your honeymoon so you can have the stress-free getaway you deserve.",
    },
    {
      question: "What are the top honeymoon destinations?",
      answer:
        "The best honeymoon destination for you depends on your travel style. Generally, BB Travel Advisors send a lot of newlyweds to locales like Botswana, the Bahamas, the Maldives, Bali, and the Amalfi Coast. Other popular honeymoon destinations include sun-soaked settings like Greece, Hawai'i, and Mexico.",
    },
    {
      question: "Where should I go for a tropical honeymoon?",
      answer:
        "We love French Polynesia, the Bahamas, and Riviera Maya. These are among the top destinations for those who have their eyes (and hearts) set on a tropical honeymoon.",
    },
    {
      question: "Where should I go for an adventurous honeymoon?",
      answer:
        "Costa Rica, African safari and Chile (Patagonia) are top adventure spots. New Zealand, the Swiss Alps, or the Dolomites are also popular choices, to name a few. Don't forget cruises! Your Fora Advisor knows just the right expedition cruise to fit your adventurous spirit.",
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
