import { Link } from "react-router-dom";

export default function SummerAdvisor() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-4   h-screen">
      <h2 className="font-chiswick text-3xl md:text-5xl lg:text-5xl     max-w-4xl leading-tight">
        Your summer trip <br /> won't plan itself. <br /> But a BB Travel
        Advisor can
      </h2>

      <p className="font-blanco text-base md:text-lg lg:text-xl mt-6 max-w-2xl">
        Whether it’s just you, your soulmate, or your in-laws (with a lot of
        opinions), a BB Travel Advisor knows where to send you—with no stress
        and a summer trip worth bragging about.
      </p>
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
