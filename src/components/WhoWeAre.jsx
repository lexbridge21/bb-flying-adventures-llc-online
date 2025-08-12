import { Link } from "react-router-dom";

export default function WhoWeAre() {
  return (
    <section className="px-0 mx-3 py-12 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center">
        {/* TEXT Content */}
        <div className=" h-screen p-6 md:p-10 flex flex-col justify-center order-2 md:order-1">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-chiswick mb-4">
            Who we are
          </h2>

          <p className="text-gray-700 mb-6 leading-relaxed ">
            BB was founded in 2021 by two Lovers : Petter Makarov and Barbara
            Liguori . They saw firsthand how rewarding being a travel advisor
            could be.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed ">
            They also understood why more people didn't pursue a career as an
            advisor. The industry was antiquated, designed to keep newcomers
            out. So, they decided it was time for a change. Enter BB.
          </p>

          <p className="text-gray-700 mb-6 leading-relaxed ">
            BB HQ is a diverse, multitalented and dynamic team, united by our
            shared love of travel, as well as our commitment to inclusivity in
            the industry.
          </p>
        </div>
        {/* IMAGE */}
        <img
          src="/who-we-are.png" // ✅ replace with your actual image path
          alt="Travel Tips"
          className="w-full h-screen object-cover order-1 md:order-2"
        />
      </div>
    </section>
  );
}
