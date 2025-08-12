import { Link } from "react-router-dom";

export default function HoneyPlans() {
  return (
    <section className="px-0 mx-3 py-12 md:px-8 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* TEXT Content */}
        <div className="p-6 md:p-6 flex flex-col justify-center order-2 md:order-1">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-chiswick mb-8">
            Leave the planning <br /> to us
          </h2>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <div>
              <strong>Zero stress:</strong>
              <p>
                Share your vision, and we'll bring it to life. Whether it's a
                two-week African safari, beachside bliss, or a chic city escape,
                leave the details to us while you finally exhale.
              </p>
            </div>

            <div>
              <strong>VIP treatment:</strong>
              <p>
                Honeymoons deserve white-glove everything. Complimentary terrace
                breakfasts by the sea? Check. Staff who greet you by name?
                Absolutely. BB's global connections get you the elevated
                experience you deserve.
              </p>
            </div>

            <div>
              <strong>Insider knowledge:</strong>
              <p>
                We'll book that hidden safari lodge you didn't know existed, the
                yacht day you always wanted to splurge on, or a cooking class on
                a farm in Italy. We uncover customized experiences you can't
                miss.
              </p>
            </div>

            <div>
              <strong>24/7 support:</strong>
              <p>
                We have your back from start to finish. BB Advisors tackle any
                hiccups behind the scenes so you have more time to create and
                enjoy unforgettable moments.
              </p>
            </div>
          </div>
        </div>

        {/* IMAGE */}
        <div className="order-1 md:order-2">
          <img
            src="/honeyplans.png"
            alt="Travel Tips"
            className="w-full h-auto lg:h-screen object-cover"
          />
        </div>
      </div>
    </section>
  );
}
