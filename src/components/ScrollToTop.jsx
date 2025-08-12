import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // makes it scroll smoothly
    });
  }, [pathname]); // runs every time the URL changes

  return null;
};

export default ScrollToTop;
