import { Link } from "react-router-dom";

export default function CareerHero() {
  return (
    <section className="px-0 mx-3 py-12 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center">
        {/* TEXT Content */}
        <div className=" h-screen p-6 md:p-10 flex flex-col justify-center order-2 md:order-1">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-chiswick mb-4">
            Work with us
          </h2>

          <p className="text-gray-700 mb-6 leading-relaxed ">
            Hi, we’re BB Travel, the modern travel agency powering the next
            generation of travel entrepreneurs.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed ">
            We are a team of entrepreneurs, technologists and creatives
            committed to expanding access, enhancing resources and bringing a
            fresh perspective that redefines what it means to be a travel agent.
          </p>

          <p className="text-gray-700 mb-6 leading-relaxed ">
            We’re excited about what we’re creating, and proud to be a LinkedIn
            Top Startup of 2024. If you’re passionate about building something
            that will change the travel industry from the ground up, we’d love
            to hear from you.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed ">
            Or, if you’re interested in a flexible career as a travel advisor,
            apply to become a BB Travel Advisor.
          </p>
        </div>

        {/* IMAGE */}
        <img
          src="/career-hero.png" // ✅ replace with your actual image path
          alt="Travel Tips"
          className="w-full h-screen object-cover order-1 md:order-2"
        />
      </div>
    </section>
  );
}
