import { Link } from "react-router-dom";

export default function CelebrationBook() {
  return (
    <section className="px-0 mx-3 py-12 md:px-8 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* TEXT Content */}
        <div className="p-6 md:p-6 flex flex-col justify-center order-2 md:order-1">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-chiswick mb-8">
            Expert help with <br /> extra value
          </h2>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <div>
              <strong>Stress-free travel: </strong>
              <p>
                Forget endless email chains and hours spent on logistics. Your
                BB Travel Advisor takes care of every detail so you can focus on
                enjoying your trip.
              </p>
            </div>

            <div>
              <strong>Unlock the best rates:</strong>
              <p>
                BB Travel Advisors can see all available rates, so you won't
                have to shop around.
              </p>
            </div>

            <div>
              <strong>Tailored recs:</strong>
              <p>
                BB Travel Advisors curate each trip specifically to you and your
                party. They make sure everyone in your group is happy — from the
                planner to the plus-one.
              </p>
            </div>
          </div>
        </div>

        {/* IMAGE */}
        <div className="order-1 md:order-2">
          <img
            src="/celebration.png"
            alt="celebration"
            className="w-full h-auto lg:h-screen object-cover"
          />
        </div>
      </div>
    </section>
  );
}
