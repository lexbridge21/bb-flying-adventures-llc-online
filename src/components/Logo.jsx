import { Link } from "react-router-dom";
import logo from "../assets/logo.svg"; // or .png if you're still using PNG

export default function Logo() {
  return (
    <Link to="/" className="flex items-center">
      <img
        src={logo}
        alt="BB Flying Adventure LLC"
        className="h-auto w-32 sm:w-36 md:w-38 lg:w-45 xl:w-48  object-contain font-chiswick font-normal"
      />
    </Link>
  );
}
