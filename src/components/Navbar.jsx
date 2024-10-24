// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path 
      ? 'text-brand-primary-600 font-medium' 
      : 'text-brand-neutral-700 hover:text-brand-primary-500 font-light';
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/faq', label: 'FAQs' },
  ];

  return (
    <nav className="bg-brand-neutral-50 shadow-sm relative">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Brand Name */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="transition-transform duration-300 hover:scale-105">
              <Logo />
            </div>
            <span className="font-heading text-2xl font-normal text-brand-neutral-900 tracking-tight">
              Mind Matters Center
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`${isActive(path)} text-lg transition-colors duration-300 hover:text-brand-primary-500`}
              >
                {label}
              </Link>
            ))}
            <Link
              to="/book"
              className="bg-brand-primary-500 hover:bg-brand-primary-600 text-white 
                         px-5 py-2 rounded-full text-lg font-normal transition-all duration-300 
                         shadow-sm hover:shadow"
            >
              Book Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-brand-neutral-700 hover:text-brand-neutral-900 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu - Updated Design */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-brand-neutral-100 z-50">
            <div className="container mx-auto py-6 px-4">
              <div className="flex flex-col space-y-6">
                {navLinks.map(({ path, label }) => (
                  <Link
                    key={path}
                    to={path}
                    className={`${isActive(path)} text-lg px-4 py-2 rounded-lg transition-all duration-300
                               hover:bg-brand-neutral-50`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {label}
                  </Link>
                ))}
                <div className="pt-4 border-t border-brand-neutral-100">
                  <Link
                    to="/book"
                    className="block bg-brand-primary-500 hover:bg-brand-primary-600 text-white 
                             px-6 py-3 rounded-full text-lg font-normal text-center 
                             shadow-sm hover:shadow transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Book Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;