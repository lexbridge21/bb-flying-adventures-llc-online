import { Link } from "react-router-dom";

export default function PartnerBook() {
  return (
    <section className="px-0 mx-3 py-12 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center">
        {/* TEXT Content */}
        <div className="bg-[#e7ddd2] h-screen p-6 md:p-10 flex flex-col justify-center order-2 md:order-1">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-chiswick mb-4">
            Book with BB
          </h2>

          <p className="text-gray-700 mb-6 leading-relaxed">
            Tell us more about yourself to get matched with a BB Advisor and
            start planning your dream trip today.
          </p>

          <Link
            to="/book-now"
            className="border bg-black text-white border-black px-6 py-3 font-medium hover:bg-white hover:text-black transition w-fit"
          >
            GET STARTED
          </Link>
        </div>

        {/* IMAGE */}
        <img
          src="/partner-book.jpg" // ✅ replace with your actual image path
          alt="Travel Tips"
          className="w-full h-screen object-cover order-1 md:order-2"
        />
      </div>
    </section>
  );
}
