import { Link } from "react-router-dom";

export default function SummerHotlist() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-4   h-screen">
      <h2 className="font-blanco italic text-3xl md:text-5xl lg:text-7xl     max-w-4xl leading-tight">
        The Hot List destinations <br /> we're still obsessed with
      </h2>

      <div className="flex justify-center items-center mt-6 mb-14">
        <Link
          to="/book-now"
          className="px-5 py-2 bg-black text-white border border-black transition-colors duration-300 hover:bg-white hover:text-black"
        >
          BOOK YOUR SUMMER
        </Link>
      </div>
    </section>
  );
}
