import { Link } from "react-router-dom";

export default function SummerDeserves() {
  const reasons = [
    {
      number: "1",
      title: "Save time",
      text: "Skip the logistics. Your advisor handles every detail, from flights to hidden-gem dinners, so you can focus on enjoying yourself.",
    },
    {
      number: "2",
      title: "Worry less",
      text: "Need to pivot mid-trip? Craving a last-minute upgrade? Your BB Travel Advisor is one text away — and already three steps ahead.",
    },
    {
      number: "3",
      title: "Unlock VIP access",
      text: "Upgrades, exclusive amenities, free breakfasts, spa credits — all the good stuff you won’t find online, unlocked by your BB Travel Advisor",
    },
  ];

  return (
    <section className="w-full bg-[#e7ddd2]  px-6 py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Side */}
        <div>
          <h2 className="text-3xl md:text-5xl font-normal mb-6 leading-tight font-chiswick">
            Your summer <br /> deserves better <br /> than basic
          </h2>
          <p className="text-gray-800 text-base md:text-lg max-w-lg font-blanco">
            BB Travel Advisors don't just book trips — they unlock the kind of
            moments you'll talk about long after the tan fades.
          </p>
        </div>

        {/* Right Side */}
        <div className="flex flex-col gap-10">
          {reasons.map((reason, index) => (
            <div key={index} className="flex items-start">
              {/* Number with line */}
              <div className="flex flex-col items-center mr-5">
                <div className="w-10 h-10 flex items-center justify-center border border-black rounded-full text-lg font-semibold">
                  {reason.number}
                </div>
                {index !== reasons.length - 1 && (
                  <div className="w-px h-full bg-black"></div>
                )}
              </div>

              {/* Text */}
              <div>
                <h3 className="text-xl lg:text-3xl font-normal mb-1 font-chiswick">
                  {reason.title}
                </h3>
                <p className="text-gray-700 text-base font-blanco">
                  {reason.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
