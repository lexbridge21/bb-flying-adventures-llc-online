import { Link } from "react-router-dom";

export default function HeroJet() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-4  h-90">
      <h2 className="font-blanco text-3xl md:text-5xl lg:text-7xl    max-w-4xl leading-tight">
        Fly higher with BB
      </h2>

      <p className="font-blanco text-base md:text-lg lg:text-xl mt-6 max-w-2xl">
        Travel is about more than the destination. Connect with BB to plan your
        next departure..
      </p>
      <div className="flex justify-center items-center mt-6 mb-14">
        <Link
          to="/book-now"
          className="px-5 py-2 bg-white text-black border border-black transition-colors duration-300 hover:bg-black hover:text-white"
        >
          BOOK WITH BB
        </Link>
      </div>
    </section>
  );
}
