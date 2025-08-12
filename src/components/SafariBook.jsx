import { Link } from "react-router-dom";

export default function SafariBook() {
  return (
    <section className="px-0 mx-3 py-12 md:px-8 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* TEXT Content */}
        <div className="p-6 md:p-6 flex flex-col justify-center order-2 md:order-1">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-chiswick mb-8">
            Go wild with BB Travel
          </h2>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <div>
              <strong>Tailored planning:</strong>
              <p>
                Safari logistics are next-level — beyond your average trip. BB
                Travel Advisors mind all the details, from lodging to guiding to
                bush-plane transfers, ensuring the only wild adventure you have
                is the one you planned.
              </p>
            </div>

            <div>
              <strong>Personal recommendations:</strong>
              <p>
                Following the Great Migration across the Serengeti and tracking
                tigers in India are equally thrilling — and wildly different. A
                BB Travel Advisor will match you to your ideal safari style so
                that you get that once-in-a-lifetime trip in the place — and
                price range — that suits you best.
              </p>
            </div>

            <div>
              <strong>Insider intel:</strong>
              <p>
                Some safari lodges have connecting family tents, while others
                are adults-only. Some are designed for wheelchair users, while
                others present mobility challenges. Your BB Travel Advisor has
                the connections and nuance you can't find on the internet, so
                they can match you to the perfect camp.
              </p>
            </div>
          </div>
        </div>

        {/* IMAGE */}
        <div className="order-1 md:order-2">
          <img
            src="/safaribook.png"
            alt="safaribook"
            className="w-full h-auto lg:h-screen object-cover"
          />
        </div>
      </div>
    </section>
  );
}
