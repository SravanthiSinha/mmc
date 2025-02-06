import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

export const FadeInSection = ({ children, className = '', delay = 0, direction = 'up' }) => {
  const elementRef = useRef(null);

  const getTranslateClass = () => {
    switch (direction) {
      case 'up': return 'translate-y-8';
      case 'down': return '-translate-y-8';
      case 'left': return 'translate-x-8';
      case 'right': return '-translate-x-8';
      default: return 'translate-y-8';
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('opacity-100', 'translate-y-0', 'translate-x-0');
              entry.target.classList.remove('opacity-0', getTranslateClass());
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [delay, direction]);

  return (
    <div
      ref={elementRef}
      className={`transform transition-all duration-1000 opacity-0 ${getTranslateClass()} ${className}`}
    >
      {children}
    </div>
  );
};

export const HoverCard = ({ children, className = '' }) => {
  return (
    <div
      className={`transform transition-all duration-300 hover:scale-105 hover:shadow-lg ${className}`}
    >
      {children}
    </div>
  );
};

export const AnimatedFAQItem = ({ question, answer, isOpen, onClick, index, useFade = true }) => {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [answer, isOpen]);

  const formatAnswer = (content) => {
    if (typeof content === 'string') {
      return content.split('\n').map((paragraph, idx) => (
        paragraph.trim() && (
          <p key={idx} className="mb-4 last:mb-0">
            {paragraph.trim().startsWith('•') ? (
              <ul className="list-disc pl-6">
                <li>{paragraph.substring(1).trim()}</li>
              </ul>
            ) : paragraph.trim()}
          </p>
        )
      )).filter(Boolean);
    }
    return content;
  };

  const Content = () => (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:border-brand-sage/30 transition-all duration-300">
      <button
        onClick={onClick}
        className="w-full px-4 sm:px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-all duration-300 group"
        aria-expanded={isOpen}
      >
        <span className="text-base sm:text-lg font-semibold text-brand-sage group-hover:text-brand-sage/80 transition-colors pr-4">
          {question}
        </span>
        <svg
          className={`w-5 h-5 sm:w-6 sm:h-6 text-brand-sage transition-transform duration-300 flex-shrink-0
            ${isOpen ? 'transform rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        style={{ maxHeight: isOpen ? `${height}px` : '0px' }}
        className="transition-all duration-300 ease-in-out overflow-hidden"
      >
        <div 
          ref={contentRef} 
          className="px-4 sm:px-6 py-4 prose text-brand-text-primary text-base sm:text-lg"
        >
          {formatAnswer(answer)}
        </div>
      </div>
    </div>
  );

  return useFade ? (
    <FadeInSection delay={index * 100}>
      <Content />
    </FadeInSection>
  ) : (
    <Content />
  );
};

export const ValueCard = ({ icon, title, description, index }) => {
  return (
    <FadeInSection
      delay={index * 150}
      className="flex-1 basis-[calc(100%-1.5rem)] sm:basis-[calc(50%-1.5rem)] md:basis-[calc(33.333%-1.5rem)]
        min-w-[280px] max-w-[400px] bg-white p-6 rounded-lg shadow-lg border border-brand-gray-warm
        text-center transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
    >
      <div className="flex justify-center mb-4 transition-transform duration-300 hover:scale-110">
        {icon}
      </div>
      <h3 className="text-lg sm:text-xl font-semibold text-brand-text-primary mb-2">
        {title}
      </h3>
      <p className="text-base text-brand-text-primary">
        {description}
      </p>
    </FadeInSection>
  );
};

export const CrisisCard = ({ name, number, description, callText, index }) => (
  <FadeInSection
    delay={index * 100}
    className="w-full sm:w-[calc(50%-1rem)] flex flex-col"
  >
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md 
      transition-all duration-300 h-full border border-brand-gray-warm 
      flex flex-col hover:scale-102 transform"
    >
      <div className="flex-grow">
        <h3 className="text-base sm:text-lg font-semibold text-brand-text-primary mb-2">
          {name}
        </h3>
        <p className="text-sm sm:text-base text-brand-text-primary mb-4">
          {description}
        </p>
      </div>
      <div className="bg-brand-gray-warm p-3 sm:p-4 rounded-full mt-auto 
        transform transition-all duration-300 hover:bg-brand-sage/10"
      >
        <div className="flex items-center justify-center gap-2 flex-wrap text-center">
          <span className="text-sm sm:text-base text-brand-text-primary">
            {callText}
          </span>
          <span className="font-bold text-brand-coral text-sm sm:text-base">
            {number}
          </span>
        </div>
      </div>
    </div>
  </FadeInSection>
);

export const SpecialtyCard = ({ title, description, path, img_path }) => (
  <FadeInSection>
    <Link
      to={path}
      className="group flex flex-col sm:flex-row h-full bg-white rounded-2xl overflow-hidden shadow-sm 
        hover:shadow-lg transition-all duration-300 border border-brand-gray-warm/10"
    >
      {/* Image Section */}
      <div className="relative w-full sm:w-2/5 h-48 sm:h-auto overflow-hidden">
        <img
          src={img_path}
          alt={`${title} therapy service`}
          className="w-full h-full object-cover transition-transform duration-500 
            group-hover:scale-105"
        />
        {/* Mobile-only gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent sm:hidden"></div>
      </div>

      {/* Content Section */}
      <div className="relative flex-1 p-6 sm:p-8 flex flex-col">
        {/* Decorative Element */}
        <div className="absolute top-0 right-0 w-24 h-24 opacity-5 transform translate-x-8 -translate-y-8">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-brand-sage">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
          </svg>
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-serif text-brand-text-primary mb-3 
          group-hover:text-brand-sage transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-brand-text-primary/80 text-base sm:text-lg leading-relaxed mb-6">
          {description}
        </p>

        {/* Learn More Link */}
        <div className="mt-auto flex items-center text-brand-sage group-hover:text-brand-coral transition-colors duration-300">
          <span className="text-sm font-semibold">Learn more</span>
          <svg
            className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
      </div>
    </Link>
  </FadeInSection>
);

export const AnimatedIcon = ({ children, className = '' }) => (
  <div className={`transition-all duration-300 hover:scale-110 hover:text-brand-coral ${className}`}>
    {children}
  </div>
);


export default { FadeInSection, HoverCard, AnimatedFAQItem, ValueCard, CrisisCard, SpecialtyCard, AnimatedIcon };