import { Link } from "react-router-dom";

export default function TravelTips() {
  return (
    <section className="px-0 m-3 py-12 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center">
        {/* TEXT Content */}
        <div className="bg-[#e7ddd2] h-full p-6 md:p-10 flex flex-col justify-center order-2 md:order-1">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-chiswick mb-4">
            Are you the go-to person for travel tips?
          </h2>

          <p className="text-gray-700 mb-6 leading-relaxed">
            Turn it into a dream job. We’ll show you the ropes and make you look
            great. Work from anywhere, flexible or full time—the best job you
            didn’t know existed.
          </p>

          <Link
            to="/about-us"
            className="border border-black px-6 py-3 font-medium hover:bg-black hover:text-white transition w-fit"
          >
            ABOUT US
          </Link>
        </div>

        {/* IMAGE */}
        <img
          src="/travel-tips.jpg" // ✅ replace with your actual image path
          alt="Travel Tips"
          className="w-full h-full object-cover order-1 md:order-2"
        />
      </div>
    </section>
  );
}
