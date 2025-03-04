import React from 'react';
import { Link } from 'react-router-dom';
import { FadeInSection } from '../components/shared/Animations';
import WellnessCoachingImg from '../assets/images/wellness-coaching.svg';
import { BOOKING_URL } from '../constants';

const WellnessCoaching = () => {
    return (
        <div className="min-h-screen pt-16 sm:pt-20 md:pt-24 bg-brand-background-secondary">
            {/* Hero Section */}
            <section className="px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 mt-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-brand-text-primary">
                            Wellness Coaching
                        </h1>
                    </div>
                </div>
            </section>

            {/* Main Content Section */}
            <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-8 bg-brand-background-primary">
                <FadeInSection>
                    <div className="max-w-6xl mx-auto">
                        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center m-6">
                            <div className="md:w-1/2 flex justify-center">
                                <div className="w-60 h-60 md:w-72 md:h-72">
                                    <img src={WellnessCoachingImg} alt="Wellness coaching illustration" className="w-full h-full" />
                                </div>
                            </div>
                            <div className="md:w-1/2">
                                <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-brand-text-primary mb-10">
                                    Achieve balance and thrive in every aspect of life
                                </h2>
                                <p className="text-lg text-brand-text-primary mb-6">
                                    Your mental well-being goes beyond therapy. Our <strong>wellness coaching</strong> services help you build resilience, set meaningful goals, and create a balanced life. Whether you're looking to improve stress management, enhance self-care, or develop healthier habits, we offer personalized coaching to support your journey.
                                </p>
                            </div>
                        </div>
                    </div>
                </FadeInSection>
            </section>

            {/* Enhanced Specialization Section */}
            <section className="py-12 md:py-16 bg-brand-background-primary">
                <FadeInSection>
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="bg-white rounded-2xl shadow p-8 md:p-12 border-l-4 border-brand-sage">
                            <h3 className="text-xl md:text-2xl font-serif text-brand-sage mb-6">
                                Our Approach
                            </h3>
                            <p className="text-base md:text-lg text-brand-text-primary">
                                Unlike therapy, <strong>wellness coaching</strong> is future-focused and designed to help you take actionable steps toward a more fulfilling life. We work with <strong>Asian American individuals, BIPOC communities, and professionals</strong> who want culturally attuned guidance in areas like career growth, work-life balance, and personal development.
                            </p>
                        </div>
                    </div>
                </FadeInSection>
            </section>

            {/* Final CTA */}
            <section className="py-12 md:py-20 bg-brand-background-secondary">
                <FadeInSection delay={400}>
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <p className="text-xl md:text-2xl lg:text-3xl text-brand-text-primary mb-8">
                            <span className="font-semibold">Invest in yourself</span>
                        </p>
                        <p className="text-lg md:text-xl text-brand-text-primary mb-8">
                            Ready to create positive change and build a more balanced, fulfilling life? Our wellness coaches are here to support your journey with culturally responsive guidance.
                        </p>

                        <div className="flex flex-col items-center gap-2">
                            <Link
                                to={BOOKING_URL} target="_blank"
                                className="inline-block bg-brand-coral text-white text-base sm:text-lg md:text-xl font-bold 
                                px-6 py-3 rounded-full hover:bg-brand-coralLight transition-all duration-200
                                hover:transform hover:scale-105 active:scale-95"
                            >
                                Schedule a Session
                            </Link>
                            <span className="text-sm sm:text-base text-brand-text-primary/80">
                                Free 20 Minute Consultation
                            </span>
                        </div>
                    </div>
                </FadeInSection>
            </section>
        </div>
    );
};

export default WellnessCoaching;