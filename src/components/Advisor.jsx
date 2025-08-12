import { Link } from "react-router-dom";

export default function Advisor() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-4 py-20 h-screen">
      <h2 className="font-blanco italic text-3xl md:text-5xl lg:text-7xl mt-[-15rem]  max-w-4xl leading-tight">
        Summer won&apos;t plan itself
      </h2>

      <p className="font-blanco text-base md:text-lg lg:text-xl mt-6 max-w-2xl">
        But a BB-Flying-Adventure-llc Advisor can. They know where you should
        go, where you should stay, and how to actually relax when you&apos;re
        there.
      </p>

      <Link to="/summer">
        <button className=" cursor-pointer mt-8 bg-black text-white px-6 py-3 text-lg md:text-xl hover:bg-white hover:text-black border border-black transition font-chiswick ">
          Book Your Summer
        </button>
      </Link>
    </section>
  );
}
