export default function BookReason() {
  const reasons = [
    {
      number: "1",
      title: "Get the best value",
      text: "BB's tech-powered platform gives our advisors quick access to all rates and partner perks, saving you time for what matters.",
    },
    {
      number: "2",
      title: "Work with an expert",
      text: "BB Advisors are always one step ahead. They stay current through industry training, partner events, and first-hand experiences to bring your trips to life.",
    },
    {
      number: "3",
      title: "Travel like an insider",
      text: "BB's strong industry network unlocks unique moments you didn't know were possible. Expect VIP treatment, personalized service, and extra perks.",
    },
  ];

  return (
    <section className="w-full bg-[#e7ddd2]  px-6 py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Side */}
        <div>
          <h2 className="text-3xl md:text-5xl font-normal mb-6 leading-tight font-chiswick">
            Reasons to work <br /> with a BB Advisor
          </h2>
          <p className="text-gray-800 text-base md:text-lg max-w-lg font-blanco">
            When you partner with an advisor, the world opens up. You have
            professionals for taxes, healthcare, and home improvements. Why
            should travel planning be any different?
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
