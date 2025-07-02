import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavbarComp = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* NAVBAR UTAMA */}
      <nav className="bg-blue-800 text-white shadow-md z-50 relative">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <Link to="/" className="text-2xl font-bold text-blue-300">
            INFINITY <span className="text-white">MOVIES</span>
          </Link>

          {/* Hamburger */}
          <button
            className="lg:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Desktop Links */}
          <div className="hidden lg:flex space-x-6">
            <Link to="/" className="hover:text-blue-300 transition">
              Homepage
            </Link>
            <Link to="/cooming" className="hover:text-blue-300 transition">
              UpComing
            </Link>
            <Link to="/toprate" className="hover:text-blue-300 transition">
              Top Rated
            </Link>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU PANEL (di bawah navbar) */}
      {isOpen && (
        <div className="bg-blue-700 text-white px-4 py-4 flex flex-col space-y-4 lg:hidden shadow-md z-40">
          <Link
            to="/"
            className="hover:text-blue-300 transition"
            onClick={() => setIsOpen(false)}
          >
            Homepage
          </Link>
          <Link
            to="/cooming"
            className="hover:text-blue-300 transition"
            onClick={() => setIsOpen(false)}
          >
            UpComing
          </Link>
          <Link
            to="/toprate"
            className="hover:text-blue-300 transition"
            onClick={() => setIsOpen(false)}
          >
            Top Rated
          </Link>
        </div>
      )}
    </>
  );
};

export default NavbarComp;
