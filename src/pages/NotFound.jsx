import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col bg-[#f8f5f1] font-chiswick items-center justify-center min-h-screen  text-white px-4">
      <h1 className="text-9xl font-extrabold text-[#e3d9ce]">404</h1>
      <p className="mt-4 text-2xl md:text-3xl text-black lg:text-5xl font-semibold">
        Oops! Page not found
      </p>
      <p className="mt-2 text-gray-400 text-center max-w-md">
        The page you’re looking for doesn’t exist or has been moved.
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-[#e3d9ce] text-black font-bold rounded-full shadow-lg hover:bg-yellow-400 transition-all duration-300"
      >
        Go Home
      </Link>
    </div>
  );
}
