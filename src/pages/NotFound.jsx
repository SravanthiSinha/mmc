import { Link } from 'react-router-dom';
import { FadeInSection, AnimatedIcon } from '../components/shared/Animations';
import { BOOKING_URL } from '../constants';

const NotFound = () => {
  return (
    <div className="min-h-screen pt-20 sm:pt-24 md:pt-32 bg-brand-background-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Icon */}
          <AnimatedIcon className="mb-8 text-brand-sage">
            <svg
              className="w-24 h-24 sm:w-32 sm:h-32"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </AnimatedIcon>

          {/* Main Content */}
          <div className="max-w-lg">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif text-brand-text-primary mb-4">
              Page Not Found
            </h1>
            <p className="text-base sm:text-lg text-brand-text-primary mb-8">
              We understand that feeling lost can be uncomfortable. While this page doesn't exist,
              we're here to help guide you back to where you need to be.
            </p>

            {/* Quick Links */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-12">
              <Link
                to="/"
                className="inline-flex items-center justify-center px-6 py-3 bg-brand-sage text-white 
                  rounded-full hover:bg-brand-sageLight transition-all duration-200
                  hover:transform hover:scale-105 active:scale-95 text-base sm:text-lg font-semibold"
              >
                Return Home
              </Link>
              <Link
                to={BOOKING_URL} target="_blank"
                className="inline-flex items-center justify-center px-6 py-3 bg-brand-coral text-white 
                  rounded-full hover:bg-brand-coralLight transition-all duration-200
                  hover:transform hover:scale-105 active:scale-95 text-base sm:text-lg font-semibold"
              >
                Book a consultation
              </Link>
            </div>

            {/* Additional Resources */}
            <FadeInSection delay={200} className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-brand-gray-warm">

              <h2 className="text-lg sm:text-xl font-semibold text-brand-text-primary mb-4">
                Looking for Something Specific?
              </h2>
              <div className="flex flex-col gap-3">
                <Link
                  to="/specialties"
                  className="text-brand-sage hover:text-brand-text-primary transition-colors duration-200"
                >
                  View Our Specialties →
                </Link>
                <Link
                  to="/resources"
                  className="text-brand-sage hover:text-brand-text-primary transition-colors duration-200"
                >
                  Access Mental Health Resources →
                </Link>
                <Link
                  to="/faq"
                  className="text-brand-sage hover:text-brand-text-primary transition-colors duration-200"
                >
                  Read FAQ →
                </Link>
                <Link
                  to="/about"
                  className="text-brand-sage hover:text-brand-text-primary transition-colors duration-200"
                >
                  Learn About Us →
                </Link>
              </div>
            </FadeInSection>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;