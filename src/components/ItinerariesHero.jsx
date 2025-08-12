import { Link } from "react-router-dom";

export default function ItinerariesHero() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-4   h-screen">
      <h2 className="font-blanco italic text-3xl md:text-5xl lg:text-7xl     max-w-4xl leading-tight">
        Itineraries and tours
      </h2>

      <p className="font-chiswick text-base md:text-lg lg:text-xl mt-6 max-w-2xl">
        Multi-stop itineraries curated just for you. Connect with an expert
        advisor to mix culture, cuisine, adventure and relaxation across the
        globe, all in one seamless trip.
      </p>
      <div className="flex justify-center items-center mt-6 mb-14">
        <Link
          to="/book-now"
          className="px-5 py-2 bg-black text-white border border-black transition-colors duration-300 hover:bg-white hover:text-black"
        >
          BOOK WITH BB
        </Link>
      </div>
    </section>
  );
}
