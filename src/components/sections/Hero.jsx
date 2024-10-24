// src/components/sections/Hero.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../../assets/images/hero-background.jpg';

const Hero = () => {
  return (
    <div className="relative h-[80vh] min-h-[600px] flex items-center justify-center">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <Link
          to="/book"
          className="inline-block bg-white hover:bg-gray-100 text-brand-primary-600 px-10 py-4 rounded-full 
                     text-lg font-semibold transition-all duration-300 
                     shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
};

export default Hero;