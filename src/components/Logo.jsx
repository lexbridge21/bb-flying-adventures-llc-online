import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/" className="flex items-center">
      <img
        src="/logo.svg"
        alt="BB Travel Logo"
        className="h-auto w-32 sm:w-36 md:w-38 lg:w-45 xl:w-48  object-contain font-chiswick font-normal"
      />
    </Link>
  );
}
