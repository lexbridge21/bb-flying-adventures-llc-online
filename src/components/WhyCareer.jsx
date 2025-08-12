export default function WhyCareer() {
  const reasons = [
    {
      number: "1",
      title: "We're forging our own path",
      text: " BB Travel has always been about driving change within the industry. We're not interested in maintaining the status quo. ",
    },
    {
      number: "2",
      title: "We're stronger together",
      text: "Community is our cornerstone. We believe that we can all go further together, and we're deeply invested in building a culture of collaboration",
    },
    {
      number: "3",
      title: "We believe in technology",
      text: "We see technology as the answer to some of the most fundamental challenges the travel industry faces.",
    },
  ];

  return (
    <section className="w-full bg-[#e7ddd2]  px-6 py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Side */}
        <div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-normal mb-6 leading-tight font-chiswick">
            This is why we get <br /> out of bed in the <br /> morning
          </h2>
          <p className="text-gray-800 text-base md:text-lg max-w-lg font-blanco">
            ...and what we're excited to bring to life through our work every
            single day. We hope it gets you excited, too.
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
                <h3 className="text-xl lg:text-4xl font-normal mb-1 font-chiswick">
                  {reason.title}
                </h3>
                <p className="text-gray-700 text-base lg:text-2x1 font-blanco">
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
