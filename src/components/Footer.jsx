import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaPinterestP,
  FaTwitter,
  FaYoutube,
  FaSpotify,
  FaLinkedinIn,
} from "react-icons/fa";
import Notiflix from "notiflix";

export default function Footer() {
  return (
    <footer className="font-chiswick bg-[#f8f5f1] border-t border-gray-300 px-6 py-10 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* TOP SECTION */}
        <div className="border-b border-gray-300 pb-8">
          <div className="flex flex-col md:grid md:grid-cols-5 gap-10">
            {/* Logo + FOR TRAVEL ADVISORS inline on mobile */}
            <Link to="/">
              <img
                src="/BBLogo.svg"
                alt="Logo"
                className="w-16 h-16 mb-4 sm:mb-0"
              />
            </Link>

            {/* FOR TRAVELERS + OUR COMPANY inline on mobile */}
            <div className="flex flex-col sm:flex-row sm:gap-10 sm:items-start col-span-1 sm:col-span-2">
              <div>
                <h3 className="font-semibold text-[12] mb-3">FOR TRAVELERS</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link to="/book-now"> BOOK WITH US</Link>
                  </li>
                  <li>
                    <Link to="/private-jets">Private Jet</Link>
                  </li>

                  <li>
                    <Link to="/categories">TRAVEL CATEGORIES</Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-[12] mb-3 ">OUR COMPANY</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link to="/about-us">ABOUT US</Link>
                  </li>
                  <li>
                    <Link to="/the-journal">THE JOURNAL</Link>
                  </li>
                  <li>
                    <Link to="/press">PRESS</Link>
                  </li>
                  <li>
                    <Link to="/careers">CAREERS</Link>
                  </li>
                  <li>
                    <Link to="/contact-us">CONTACT US</Link>
                  </li>
                  <li>
                    <Link to="/partners">PARTNERS</Link>
                  </li>
                  <li>
                    <Link to="/faq">FAQ</Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* NEWSLETTER remains block */}
            <div>
              <h3 className="font-semibold text-[12] mb-3">NEWSLETTER</h3>
              <p className="text-sm mb-4">
                Stay in-the-know with travel recs, hotel features & travel
                advisor news.
              </p>
              <button
                onClick={() =>
                  Notiflix.Notify.success(
                    "You have successfully subscribed to our newsletter!"
                  )
                }
                className="border border-black cursor-pointer px-4 py-2 w-[15rem] text-[12px] hover:bg-black hover:text-white transition"
              >
                SUBSCRIBE TO OUR NEWSLETTER
              </button>

              <div className="flex gap-4 mt-5 cursor-pointer ">
                <a href="https://www.facebook.com" target="_blank">
                  <FaFacebookF className="h-7 w-7" />
                </a>
                <a href="https://www.instagram.com">
                  <FaInstagram className="h-7 w-7 " />
                </a>
                <a href="https://www.tiktok.com">
                  <FaTiktok className="h-7 w-7" />
                </a>
                <a href="https://www.twitter.com" target="_blank">
                  <FaTwitter className="h-7 w-7" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="text-xs text-gray-700 mt-6">
          <p>© 2025 BB Travel, Inc. All Rights Reserved</p>

          {/* Bottom Links */}
          <div className="mt-4 flex lg:flex-end gap-4 text-[12px] lg:text-sm">
            <Link to="/privacy-policy">PRIVACY POLICY</Link> •
            <Link to="/terms">TERMS OF USE</Link> •
            <Link to="/site-overview">SITE OVERVIEW</Link>
          </div>

          {/* Signature Image */}
          <div className="mt-6 flex justify-center">
            <img
              src="/travel-bb.svg"
              alt="Travel by BB"
              className="w-full max-w-md h-[15rem] object-contain bg-transparent"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
