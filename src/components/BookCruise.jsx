import { Link } from "react-router-dom";

export default function BookCruise() {
  return (
    <section className="px-0 mx-3 py-12 md:px-8 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* TEXT Content */}
        <div className="p-6 md:p-6 flex flex-col justify-center order-2 md:order-1">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-chiswick mb-8">
            Book your cruise <br /> with us to get:
          </h2>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <div>
              <strong>Exclusive perks:</strong>
              <p>
                From onboard credits to early boarding, BB Travel Advisors get
                you exclusive cruising benefits.
              </p>
            </div>

            <div>
              <strong>Seamless booking:</strong>
              <p>
                Cruises are complicated. BB Travel Advisors wade through the
                fine print so you don't have to.
              </p>
            </div>

            <div>
              <strong>Insider intel:</strong>
              <p>
                BB Travel Advisors know how to book the best ships, cabins and
                dining options available.
              </p>
            </div>

            <div>
              <strong>Tailored planning:</strong>
              <p>
                Whether you want a family-friendly cruise or a yacht charter, BB
                Travel Advisors will book the best cruise for you.
              </p>
            </div>
          </div>
        </div>

        {/* IMAGE */}
        <div className="order-1 md:order-2">
          <img
            src="/book-cruise.png"
            alt="Book Cruise"
            className="w-full h-auto lg:h-screen object-cover"
          />
        </div>
      </div>
    </section>
  );
}
