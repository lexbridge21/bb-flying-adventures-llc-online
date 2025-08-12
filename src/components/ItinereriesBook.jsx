import { Link } from "react-router-dom";

export default function ItinerariesBook() {
  return (
    <section className="px-0 mx-3 py-12 md:px-8 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* TEXT Content */}
        <div className="p-6 md:p-6 flex flex-col justify-center order-2 md:order-1">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-chiswick mb-8">
            Your dream trip, <br /> perfectly planned
          </h2>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <div>
              <strong>Custom recommendations:</strong>
              <p>
                A BB Travel Advisor will connect you with a bucket-list-worthy
                itinerary on any continent—based entirely on how you like to
                explore.
              </p>
            </div>

            <div>
              <strong>Seamless planning:</strong>
              <p>
                No destination is too far, no ask too complex.BB Travel Advisors
                handle the logistics so you can focus on the fun part.
              </p>
            </div>

            <div>
              <strong>Global connections:</strong>
              <p>
                Travel like an insider with local guides and partners who
                uncover hidden gems and best-kept secrets.
              </p>
            </div>
          </div>
        </div>

        {/* IMAGE */}
        <div className="order-1 md:order-2">
          <img
            src="/itinararies-tour.png"
            alt="itinararies-tour"
            className="w-full h-auto lg:h-screen object-cover"
          />
        </div>
      </div>
    </section>
  );
}
