import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu and dropdown on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { path: '/', label: 'Home' },
    {
      path: '/specialties',
      label: 'Specialties',
      dropdownItems: [
        { path: '/anxiety-depression', label: 'Anxiety & Depression' },
        { path: '/trauma', label: 'Trauma & PTSD' },
        { path: '/relationship-counseling', label: 'Relationship Counseling' },
        { path: '/cultural-dynamic', label: 'Family Culture Dynamic' },
        { path: '/stress-burnout', label: 'Stress and Burn out' }
      ]
    },
    { path: '/about', label: 'About us' },
    { path: '/faq', label: 'FAQ' },
    { path: '/resources', label: 'Resources' },
    { 
      path: 'https://your-client-portal-url.com', // Replace with actual client portal URL
      label: 'Client Portal',
      isExternal: true 
    }
  ];

  // Helper function to render the appropriate link type
  const renderLink = (link, className, onClick = () => {}) => {
    if (link.isExternal) {
      return (
        <a
          href={link.path}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
          onClick={onClick}
        >
          {link.label}
        </a>
      );
    }
    
    return (
      <Link
        to={link.path}
        className={className}
        onClick={onClick}
      >
        {link.label}
      </Link>
    );
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}
        ${isMenuOpen ? 'bg-white' : ''}`}
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-32">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link
            to="/"
            className={`text-xl sm:text-2xl md:text-3xl font-semibold transition-colors
              ${location.pathname === '/' && !scrolled ? 'text-brand-text-primary' : 'text-brand-text-secondary'}`}
          >
            Mind Matters Center
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-gray-100/20 transition-colors"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            <svg
              className={`w-6 h-6 transition-colors
                ${scrolled || isMenuOpen ? 'text-brand-text-secondary' : 'text-brand-text-secondary'}`}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
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

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2 xl:space-x-6">
            <div className="flex items-center space-x-1 xl:space-x-2 text-base xl:text-lg">
              {navLinks.map((link) => (
                <div key={link.path} className="relative dropdown-container">
                  {link.dropdownItems ? (
                    <div className="group">
                      <Link
                        to={link.path}
                        className={`px-3 py-2 rounded-full transition-all duration-200 flex items-center gap-1
                          ${location.pathname === '/' && !scrolled ? 'text-brand-text-primary' : 'text-brand-text-secondary'}
                          ${location.pathname === link.path ? 'font-semibold' : ''}`}
                      >
                        {link.label}
                        <svg
                          className={`w-4 h-4 transition-transform group-hover:rotate-180`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </Link>

                      {/* Hover Dropdown Menu */}
                      <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                        {link.dropdownItems.map((item) => (
                          <Link
                            key={item.path}
                            to={item.path}
                            className="block px-4 py-2 text-brand-text-secondary hover:bg-gray-50 transition-colors"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    renderLink(
                      link,
                      `px-3 xl:px-4 py-2 rounded-full transition-all duration-200
                        ${location.pathname === link.path ? 'underline font-semibold' : ''}
                        ${location.pathname === '/' && !scrolled ? 'text-brand-text-primary' : 'text-brand-text-secondary'}`
                    )
                  )}
                </div>
              ))}
            </div>
            <Link
              to="/book-consultation"
              className="bg-brand-coral text-white text-base xl:text-xl font-bold 
                px-4 xl:px-6 py-2 rounded-full hover:bg-opacity-90 transition-colors duration-200
                whitespace-nowrap"
            >
              Book a Consultation
            </Link>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-black/50 z-40"
            aria-hidden="true"
            onClick={() => setIsMenuOpen(false)}
          />
        )}

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed inset-0 top-20 bg-white z-50 transform transition-transform duration-300 ease-in-out
            ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="flex flex-col p-4 space-y-2 max-h-[calc(100vh-5rem)] overflow-y-auto">
            {navLinks.map((link) => (
              <div key={link.path}>
                {link.dropdownItems ? (
                  <>
                    <Link
                      to={link.path}
                      className={`w-full flex justify-between items-center px-4 py-3 text-lg rounded-lg transition-colors duration-200 
                        text-brand-text-secondary hover:bg-gray-100
                        ${location.pathname === link.path ? 'font-semibold bg-gray-50' : ''}`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </Link>
                    <div className="ml-4 mt-2 space-y-2">
                      {link.dropdownItems.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          onClick={() => setIsMenuOpen(false)}
                          className="block px-4 py-2 text-brand-text-secondary hover:bg-gray-50 rounded-lg transition-colors"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  renderLink(
                    link,
                    `block px-4 py-3 text-lg rounded-lg transition-colors duration-200 text-brand-text-secondary
                      hover:bg-gray-100
                      ${location.pathname === link.path ? 'font-semibold bg-gray-50' : ''}`,
                    () => setIsMenuOpen(false)
                  )
                )}
              </div>
            ))}
            <div className="pt-4">
              <Link
                to="/book-consultation"
                onClick={() => setIsMenuOpen(false)}
                className="block bg-brand-coral text-white text-xl font-bold px-4 py-3 
                  rounded-full text-center hover:bg-opacity-90 transition-colors duration-200"
              >
                Book a Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;