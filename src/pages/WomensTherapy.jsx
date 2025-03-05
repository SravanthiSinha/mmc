import React from 'react';
import { FadeInSection } from '../components/shared/Animations';
import Womens_Therapy from '../assets/images/womens-therapy.jpg';
import CTASection from '../components/shared/CTASection';
import BookNowCTA from '../components/shared/BookNowCTA';

const WomensTherapy = () => {
    const signs = [
        'Role overwhelm',
        'People-pleasing',
        'Self-criticism',
        'Relationship stress',
        'Identity questions'
    ];

    const approaches = [
        {
            title: 'Identity & life transitions',
            svg: (
                <svg viewBox="0 0 60 60" className="w-full h-full">
                    <circle cx="30" cy="30" r="28" fill="none" stroke="currentColor" strokeWidth="2" />
                    <path d="M20 30c0-5.523 4.477-10 10-10s10 4.477 10 10M18 42c2-5 7-8 12-8s10 3 12 8"
                        fill="none" stroke="currentColor" strokeWidth="2"
                        strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            description: 'Support through major life changes and exploration of authentic self-identity'
        },
        {
            title: 'Relationship dynamics',
            svg: (
                <svg viewBox="0 0 60 60" className="w-full h-full">
                    <circle cx="20" cy="25" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
                    <circle cx="40" cy="25" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
                    <path d="M30 25h0M25 40a15 15 0 0110 0"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
            ),
            description: 'Navigate partnerships, friendships, family roles, and create healthy boundaries'
        },
        {
            title: 'Self-care & empowerment',
            svg: (
                <svg viewBox="0 0 60 60" className="w-full h-full">
                    <path d="M30 10c-11.046 0-20 8.954-20 20s8.954 20 20 20 20-8.954 20-20-8.954-20-20-20z"
                        fill="none" stroke="currentColor" strokeWidth="2" />
                    <path d="M22 28l5 5 12-12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M30 40v-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
            ),
            description: 'Develop practical strategies for self-compassion and confidence in your choices'
        }
    ];

    return (
        <div className="min-h-screen pt-16 sm:pt-20 md:pt-24 bg-brand-background-secondary">
            {/* Hero Section */}
            <section className="px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 mt-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-brand-text-primary">
                            Therapy for women
                        </h1>
                    </div>
                </div>
            </section>

            {/* Understanding Section with Background Image */}
            <section className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8 bg-brand-background-primary">
                <FadeInSection>
                    <div className="max-w-6xl mx-auto">
                        <div className="relative h-[300px] sm:h-[400px] rounded-xl overflow-hidden">
                            <img
                                src={Womens_Therapy}
                                alt="Women in supportive therapy setting"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/40"></div>
                            <div className="relative z-10 flex flex-col items-center justify-center h-full p-4 sm:p-8">
                                <p className="text-center sm:text-lg md:text-xl lg:text-2xl font-semibold text-brand-text-secondary max-w-4xl">
                                    Navigating societal pressures and life transitions? Our therapists help women cultivate
                                    self-compassion, explore their identities, and find empowerment in their unique journeys.
                                </p>
                                <div className="flex justify-center mt-4">
                                    <BookNowCTA />
                                </div>
                            </div>
                        </div>
                    </div>
                </FadeInSection>
            </section>

            {/* Common Signs Section */}
            <section className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8 bg-brand-background-primary border-t border-brand-gray-warm/10">
                <FadeInSection>
                    <div className="max-w-6xl mx-auto">
                        <div className="p-6 sm:p-8 md:p-12">
                            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-brand-text-primary mb-12 text-center">
                                Common challenges
                            </h2>
                            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                                {signs.map((sign, index) => (
                                    <div
                                        key={index}
                                        className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-brand-sage/10 flex items-center justify-center p-4 
                                        group hover:bg-brand-sage hover:scale-105 transition-all duration-300"
                                    >
                                        <span className="text-sm sm:text-base font-semibold text-brand-text-primary group-hover:text-white text-center transition-colors duration-300">
                                            {sign}
                                        </span>
                                    </div>
                                ))}
                            </div>
                            <div className="flex justify-center mt-12">
                                <BookNowCTA />
                            </div>
                        </div>
                    </div>
                </FadeInSection>
            </section>

            {/* Treatment Approach */}
            <section className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8 bg-brand-background-primary border-t border-brand-gray-warm/10">
                <FadeInSection>
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-brand-text-primary mb-6">
                            Our therapeutic approach
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl text-brand-text-primary">
                            We provide a safe, validating space for women to explore their mental health, relationships,
                            and personal growth. Our therapists understand the unique challenges women face and help you
                            move toward authentic self-expression and empowerment.
                        </p>
                    </div>
                </FadeInSection>
            </section>

            {/* Therapeutic Approaches Section */}
            <section className="px-4 sm:px-6 lg:px-8 py-8 sm:py-10 bg-brand-background-primary border-t border-brand-gray-warm/10">
                <FadeInSection>
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-brand-text-primary mb-12 text-center">
                            Therapeutic approaches
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                            {approaches.map((approach, index) => (
                                <div
                                    key={index}
                                    className="bg-white p-6 sm:p-8 rounded-xl shadow hover:shadow-lg 
                                    transition-all duration-300 text-center group"
                                >
                                    <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 text-brand-sage">
                                        {approach.svg}
                                    </div>
                                    <h3 className="text-base sm:text-lg font-semibold text-brand-sage mb-3 sm:mb-4">
                                        {approach.title}
                                    </h3>
                                    <p className="text-sm sm:text-base text-brand-text-primary">
                                        {approach.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-center mt-12">
                            <BookNowCTA />
                        </div>
                    </div>
                </FadeInSection>
            </section>

            {/* Additional Support Section */}
            <section className="px-4 sm:px-6 lg:px-8 py-8 sm:py-8 bg-brand-background-primary">
                <FadeInSection>
                    <div className="max-w-4xl mx-auto">
                        <div className="p-6 sm:p-8 md:p-12 text-center">
                            <p className="text-base sm:text-lg text-brand-text-primary mb-12">
                                Women often balance multiple roles and responsibilities while navigating societal expectations.
                                Our therapists create a space where you can prioritize your own well-being, explore your authentic
                                identity, and develop strategies for setting boundaries and nurturing your mental health.
                            </p>
                        </div>
                    </div>
                </FadeInSection>
            </section>

            <CTASection />
        </div>
    );
};

export default WomensTherapy;