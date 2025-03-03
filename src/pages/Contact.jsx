import React from 'react';
import { Link } from 'react-router-dom';
import { FadeInSection } from '../components/shared/Animations';
import { BOOKING_URL, CONTACT_INFO } from '../constants';

const Contact = () => {
  return (
    <div className="min-h-screen pt-20 sm:pt-24 md:pt-32 bg-brand-background-secondary">
      {/* Hero Section */}
      <section className="mb-12 sm:mb-16 md:mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-brand-text-primary mb-6 sm:mb-8">
              Contact Us
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-brand-text-primary max-w-3xl mx-auto">
               We're here to answer your questions and help you begin your journey toward healing and well-being.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-12 md:py-16 bg-brand-background-primary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="bg-white shadow-md rounded-xl p-8 md:p-10 border border-brand-gray-warm">
              <h2 className="text-xl md:text-2xl font-serif text-brand-text-primary mb-8 text-center">
                Get in Touch
              </h2>

              <div className="space-y-8 max-w-xl mx-auto">
                {/* Email */}
                <div className="flex items-center gap-6">
                  <div className="bg-brand-sage/10 p-3 rounded-full">
                    <svg className="w-8 h-8 text-brand-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-brand-text-primary/70">Email</p>
                    <a href={`mailto:${CONTACT_INFO.email}`} className="text-lg text-brand-text-primary hover:text-brand-sage transition-colors">
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-6">
                  <div className="bg-brand-sage/10 p-3 rounded-full">
                    <svg className="w-8 h-8 text-brand-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-brand-text-primary/70">Phone</p>
                    <a href={`tel:${CONTACT_INFO.phone.replace(/[^\d+]/g, '')}`} className="text-lg text-brand-text-primary hover:text-brand-sage transition-colors">
                      {CONTACT_INFO.phone}
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-brand-gray-warm text-center">
                <h3 className="text-lg font-medium text-brand-text-primary mb-6">
                  Ready to schedule a session?
                </h3>
                <Link
                  to={BOOKING_URL}
                  target="_blank"
                  className="inline-block bg-brand-coral text-white text-lg font-bold 
                    px-8 py-4 rounded-full hover:bg-brand-coralLight transition-all duration-200
                    hover:transform hover:scale-105 active:scale-95"
                >
                  Book Now
                </Link>
                <p className="text-sm text-brand-text-primary/70 mt-3">
                  Free 20-minute initial consultation
                </p>
              </div>
            </div>

          </FadeInSection>
        </div>
      </section>

      {/* Important Note Section */}
      <section className="py-8 sm:py-12 bg-brand-background-secondary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="bg-white shadow-sm rounded-xl p-6 border border-brand-gray-warm/50">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-brand-sage/10 p-2 rounded-full">
                  <svg className="w-6 h-6 text-brand-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-brand-text-primary">
                  Important Note
                </h3>
              </div>
              <div>
                <p className="text-base text-brand-text-primary/80">
                  For emergency situations or immediate crisis support, please call <strong>988</strong> (Suicide and Crisis Lifeline) or visit your nearest emergency room. Our email and phone are not monitored 24/7 and are not appropriate for urgent mental health concerns.
                </p>
                <p className="text-base text-brand-text-primary/80 mt-4">
                  Our team typically responds to inquiries within 1-2 business days.
                </p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Resources Link */}
      <section className="py-8 sm:py-12 bg-brand-background-secondary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInSection>
            <Link
              to="/resources"
              className="inline-flex items-center text-brand-sage hover:text-brand-coral transition-colors"
            >
              <span>View our crisis resources and mental health support options</span>
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
};

export default Contact;