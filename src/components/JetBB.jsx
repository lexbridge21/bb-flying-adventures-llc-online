import { Link } from "react-router-dom";

export default function JetBB() {
  return (
    <section className="px-0 mx-3 py-12 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center">
        {/* TEXT Content */}
        <div className=" h-screen p-6 md:p-10 flex flex-col justify-center order-2 md:order-1">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-chiswick mb-4">
            Get where you’re going—in style
          </h2>

          <p className="text-gray-700 mb-6 leading-relaxed ">
            <strong>Private jets: </strong>
            <p>
              Skip the lines and bypass TSA so you can travel in ultimate
              comfort, even at 38,000 feet
            </p>
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed ">
            <strong>Helicopters: </strong>
            <p>
              Beat the traffic and take in the aerial sights for a supercharged
              commute.
            </p>
          </p>

          <p className="text-gray-700 mb-6 leading-relaxed ">
            <strong>Business and first class: </strong>
            <p>
              We partner with all major airlines and know the nuanced
              differences between cabins and aircraft.
            </p>
          </p>
        </div>

        {/* IMAGE */}
        <img
          src="/jetbb.jpg" // ✅ replace with your actual image path
          alt="Travel Tips"
          className="w-full h-screen object-cover order-1 md:order-2"
        />
      </div>
    </section>
  );
}
