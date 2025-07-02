import React from "react";
import { Link } from "react-router-dom";

const FooterComp = () => {
  return (
    <footer className="bg-blue-900 text-white py-10 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div>
            <h1 className="text-xl font-bold text-white mb-2">
              INFINITY <span className="text-blue-300">MOVIES</span>
            </h1>
            <p className="text-sm text-gray-300">
              Your ultimate destination for movie reviews, news, and updates.
              Stay connected for the latest in the movie world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h6 className="text-lg font-semibold mb-2">Quick Links</h6>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/register" className="hover:text-blue-300">
                  Register
                </Link>
              </li>
              <li>
                <Link to="/movies" className="hover:text-blue-300">
                  Movies
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Explore Us */}
          <div>
            <h6 className="text-lg font-semibold mb-2">Explore Us</h6>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/careers" className="hover:text-blue-300">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-blue-300">
                  Privacy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-blue-300">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h6 className="text-lg font-semibold mb-2">Contact Us</h6>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:info@infinitymovies.com" className="hover:text-blue-300">
                  info@infinitymovies.com
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="hover:text-blue-300">
                  123-456-7890
                </a>
              </li>
              <li>
                <span>Infinity Movies, Hollywood</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 text-center text-sm text-gray-400 border-t border-gray-700 pt-4">
          &copy; 2024 INFINITY MOVIES | Designed by S.A.R
        </div>
      </div>
    </footer>
  );
};

export default FooterComp;
