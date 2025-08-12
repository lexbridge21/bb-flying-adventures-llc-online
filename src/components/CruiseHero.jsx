import { Link } from "react-router-dom";

export default function CruiseHero() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-4   h-screen">
      <h2 className="font-chiswick text-3xl md:text-5xl lg:text-5xl     max-w-4xl leading-tight">
        Set sail with BB Travel
      </h2>

      <p className="font-blanco text-base md:text-lg lg:text-xl mt-6 max-w-2xl">
        BB Travel Advisors matchmake every seabound passenger to the right ship,
        whether it's your first or fiftieth time on board.
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
