export default function RedefineJet() {
  const cards = [
    {
      id: 1,
      title: "Aero",
      image: "/jet1.jpg",
      description:
        "Semi-private jets with dedicated lounges, 24/7 concierge service and luxe interiors? Say less.",
    },
    {
      id: 2,
      title: "Wings Air Helicopter",
      image: "/jet2.jpg",
      description:
        "It's the most glamorous way to get from point A to point B.",
    },
    {
      id: 3,
      title: "BB Flights",
      image: "/jet3.jpg",
      description:
        "Long-haul travel, handled. Our in-house flight team handles every detail, from optimal routing to seamless transfers.",
    },
  ];

  return (
    <section className="px-6 py-12 md:px-16 lg:px-24">
      <h2 className="text-3xl lg:text-6xl mb-7">Redefine how you travel</h2>
      <div className="max-w-7xl mx-auto">
        {/* Jet Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div
              key={card.id}
              className="overflow-hidden transition flex flex-col"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-60 object-cover"
              />

              <div className="flex-1 flex flex-col mt-4">
                <h3 className="text-[26px] font-chiswick font-[400] text-black mb-3">
                  {card.title}
                </h3>

                <p className="text-sm text-gray-700 lg:text-[1rem] leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
