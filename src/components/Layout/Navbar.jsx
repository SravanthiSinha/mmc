import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Handle scroll effect with debouncing
  useEffect(() => {
    let timeoutId;
    const handleScroll = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        setScrolled(window.scrollY > 20);
      }, 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  // Handle resize with debouncing
  useEffect(() => {
    let timeoutId;
    const handleResize = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        if (window.innerWidth >= 1024) {
          setIsMenuOpen(false);
          setActiveDropdown(null);
        }
      }, 100);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    const body = document.body;
    if (isMenuOpen) {
      const scrollY = window.scrollY;
      body.style.position = 'fixed';
      body.style.top = `-${scrollY}px`;
      body.style.width = '100%';
    } else {
      const scrollY = body.style.top;
      body.style.position = '';
      body.style.top = '';
      body.style.width = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
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
      path: 'https://your-client-portal-url.com',
      label: 'Client Portal',
      isExternal: true 
    }
  ];

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
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <Link
            to="/"
            className={`text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold transition-colors
              ${location.pathname === '/' && !scrolled ? 'text-brand-text-primary' : 'text-brand-text-secondary'}`}
          >
            Mind Matters Center
          </Link>

          {/* Mobile Menu Button - Larger touch target */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-4 -mr-4 touch-manipulation"
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
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-4">
            <div className="flex items-center space-x-1 xl:space-x-2 text-sm xl:text-base">
              {navLinks.map((link) => (
                <div key={link.path} className="relative">
                  {link.dropdownItems ? (
                    <div className="group">
                      <button
                        className={`px-3 py-2 rounded-full transition-all duration-200 flex items-center gap-1
                          ${location.pathname === '/' && !scrolled ? 'text-brand-text-primary' : 'text-brand-text-secondary'}
                          ${location.pathname === link.path ? 'font-semibold' : ''}`}
                        aria-expanded={activeDropdown === link.path}
                        onClick={() => setActiveDropdown(activeDropdown === link.path ? null : link.path)}
                      >
                        {link.label}
                        <svg
                          className={`w-4 h-4 transition-transform ${activeDropdown === link.path ? 'rotate-180' : ''}`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      <div 
                        className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 z-50
                          transition-all duration-200 transform origin-top
                          ${activeDropdown === link.path ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}`}
                      >
                        {link.dropdownItems.map((item) => (
                          <Link
                            key={item.path}
                            to={item.path}
                            className="block px-4 py-2 text-brand-text-secondary hover:bg-gray-50 transition-colors"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    renderLink(
                      link,
                      `px-3 py-2 rounded-full transition-all duration-200
                        ${location.pathname === link.path ? 'underline font-semibold' : ''}
                        ${location.pathname === '/' && !scrolled ? 'text-brand-text-primary' : 'text-brand-text-secondary'}`
                    )
                  )}
                </div>
              ))}
            </div>
            <Link
              to="/book-consultation"
              className="bg-brand-coral text-white text-sm xl:text-base font-bold 
                px-4 py-2 rounded-full hover:bg-opacity-90 transition-colors duration-200
                whitespace-nowrap"
            >
              Book a Consultation
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed inset-0 top-16 sm:top-20 bg-white z-50 transform transition-all duration-300 ease-in-out
            ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="flex flex-col p-4 space-y-2 h-[calc(100vh-4rem)] sm:h-[calc(100vh-5rem)] overflow-y-auto">
            {navLinks.map((link) => (
              <div key={link.path}>
                {link.dropdownItems ? (
                  <div>
                    <button
                      className={`w-full flex justify-between items-center px-4 py-3 text-lg rounded-lg
                        text-brand-text-secondary hover:bg-gray-100 transition-colors duration-200
                        ${location.pathname === link.path ? 'font-semibold bg-gray-50' : ''}`}
                      onClick={() => setActiveDropdown(activeDropdown === link.path ? null : link.path)}
                      aria-expanded={activeDropdown === link.path}
                    >
                      {link.label}
                      <svg
                        className={`w-5 h-5 transition-transform duration-200 ${activeDropdown === link.path ? 'rotate-180' : ''}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div
                      className={`ml-4 mt-2 space-y-2 transition-all duration-200
                        ${activeDropdown === link.path ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
                    >
                      {link.dropdownItems.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          onClick={() => {
                            setIsMenuOpen(false);
                            setActiveDropdown(null);
                          }}
                          className="block px-4 py-3 text-brand-text-secondary hover:bg-gray-50 rounded-lg transition-colors"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
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