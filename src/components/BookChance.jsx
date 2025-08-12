export default function BookChance() {
  return (
    <section className="w-full px-4 py-12 lg:py-20 ">
      <div className="max-w-4xl mx-auto flex flex-col gap-10">
        {/* Image comes first on small screens, second on large */}
        <div className="order-1 lg:order-2 flex justify-center">
          <img
            src="/private-jet.png"
            alt="Private Jet"
            className="w-full max-w-md lg:max-w-lg object-contain"
          />
        </div>

        {/* Content comes first on large screens, second on small */}
        <div className="order-2 lg:order-1 text-center">
          <h2 className="font-blanco italic text-3xl md:text-5xl lg:text-6xl leading-tight">
            Don't leave your trip to chance
          </h2>

          <p className="font-blanco text-base md:text-lg lg:text-xl mt-6 max-w-2xl mx-auto">
            BB Advisors leverage technology and strong industry connections to
            curate meaningful travel experiences—all while bringing you the best
            value and personalized service.
          </p>
        </div>
      </div>
    </section>
  );
}
