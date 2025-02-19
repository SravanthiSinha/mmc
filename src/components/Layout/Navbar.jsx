import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Logo from '../../assets/images/favicon.svg';
import { BOOKING_URL, CLIENT_PORTAL_URL } from '../../constants';

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (window.innerWidth >= 1024) {
      setIsMenuOpen(false);
    }
  }, [location]);

  // Helper function to check if a path is active
  const isPathActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  // Helper function to check if any dropdown item is active
  const isDropdownActive = (dropdownItems) => {
    return dropdownItems?.some(item => location.pathname === item.path);
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    {
      path: '/specialties',
      label: 'Specialties',
      dropdownItems: [
        { path: '/anxiety-depression', label: 'Anxiety & depression' },
        { path: '/trauma-ptsd', label: 'Trauma & PTSD' },
        { path: '/relationship-counseling', label: 'Relationship counseling' },
        { path: '/family-cultural-dynamic', label: 'Family culture dynamics' },
        { path: '/stress-burnout', label: 'Stress & burnout' }
      ]
    },
    { path: '/services', label: '中文服务' },
    {
      path: '/about', label: 'About us', dropdownItems: [
        { path: '/our-team', label: 'Our team' },
        { path: '/join-our-team', label: 'Join our team' }
      ]
    },
    { path: '/faq', label: 'FAQ' },
    { path: '/resources', label: 'Resources' },
    {
      path: CLIENT_PORTAL_URL,
      label: 'Client Portal',
      isExternal: true
    }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
      ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}
      ${isMenuOpen ? 'bg-white' : ''}`}
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}

          <Link
            to="/"
            className={`transition-colors flex items-center
              ${location.pathname === '/' && !scrolled ? 'text-brand-text-secondary' : 'text-brand-text-primary'}`}
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="flex items-center">
              <img src={Logo} alt="Mind Matters Center Logo" className="h-7 lg:h-14 w-auto" />
              <span className="ml-2 text-2xl/[1.75rem] font-semibold">Mind Matters Center</span>
            </div>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-4 -mr-4"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <svg
              className={`w-6 h-6 transition-colors
                ${location.pathname === '/' && !scrolled ? 'text-brand-text-secondary' : 'text-brand-text-primary'}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2 xl:space-x-6">
            {navLinks.map((link) => (
              <div key={link.path} className="relative group">
                {/* Main Link */}
                <Link
                  to={link.path}
                  target={link.isExternal ? '_blank' : '_self'}
                  className={`px-2 py-2 rounded-full transition-all duration-200 text-lg
                    ${(isPathActive(link.path) || isDropdownActive(link.dropdownItems)) ? 'font-semibold' : ''}
                    ${location.pathname === '/' && !scrolled ? 'text-brand-text-secondary' : 'text-brand-text-primary'}
                    hover:bg-gray-300/20`}
                >
                  {link.label}
                </Link>

                {/* Desktop Dropdown */}
                {link.dropdownItems && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 z-50 
                  opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    {link.dropdownItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className={`block px-4 py-2 text-brand-text-primary hover:bg-gray-300/20 transition-colors
                          ${location.pathname === item.path ? 'font-semibold bg-gray-100' : ''}`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <Link
              to={BOOKING_URL} target="_blank"
              className="bg-brand-coral text-white text-base xl:text-lg font-bold 
                px-4 py-2 rounded-full hover:bg-brand-coralLight transition-colors duration-200
                whitespace-nowrap"
            >
              Book a consultation
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-16 sm:top-20 bg-white z-50">
            <div className="flex flex-col p-4 space-y-2 h-[calc(100vh-4rem)] sm:h-[calc(100vh-5rem)] overflow-y-auto">
              {navLinks.map((link) => (
                <div key={link.path}>
                  {/* Main Link */}
                  <Link
                    to={link.path}
                    target={link.isExternal ? '_blank' : '_self'}
                    className={`block px-4 py-2 text-base rounded-lg transition-colors duration-200 text-brand-text-primary
                      hover:bg-gray-300
                      ${(isPathActive(link.path) || isDropdownActive(link.dropdownItems)) ? 'font-semibold bg-gray-150' : ''}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>

                  {/* Mobile Dropdown Items */}
                  {link.dropdownItems && (
                    <div className="ml-4 mt-1 space-y-1">
                      {link.dropdownItems.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          className={`block px-4 py-2 text-base text-brand-text-primary hover:bg-gray-150 rounded-lg transition-colors
                            ${location.pathname === item.path ? 'font-semibold bg-gray-100' : ''}`}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <div className="pt-4">
                <Link
                  to={BOOKING_URL} target="_blank"
                  onClick={() => setIsMenuOpen(false)}
                  className="block bg-brand-coral text-white text-xl font-bold px-4 py-3 
                    rounded-full text-center hover:bg-brand-coralLight transition-colors duration-200"
                >
                  Book a consultation
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;