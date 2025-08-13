import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col font-chiswick items-center justify-center min-h-screen bg-gray-900 text-white px-4">
      <h1 className="text-9xl font-extrabold text-yellow-400">404</h1>
      <p className="mt-4 text-2xl md:text-3xl lg:text-5xl font-semibold">
        Oops! Page not found
      </p>
      <p className="mt-2 text-gray-400 text-center max-w-md">
        The page you’re looking for doesn’t exist or has been moved.
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-yellow-500 text-black font-bold rounded-full shadow-lg hover:bg-yellow-400 transition-all duration-300"
      >
        Go Home
      </Link>
    </div>
  );
}
