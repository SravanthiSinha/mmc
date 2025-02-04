import React from 'react';
import { FadeInSection } from '../components/shared/Animations';
import Cultural_Family from '../assets/images/cultural-family.jpg';
import CTASection from '../components/shared/CTASection';

const FamilyCulturalDynamics = () => {
    const struggles = [
        'Pressure to meet family expectations',
        'Cultural stigma around mental health',
        'Navigating identity conflicts'
    ];

    const approaches = [
        {
            title: 'Culturally Responsive Therapy',
            svg: (
                <svg viewBox="0 0 60 60" className="w-full h-full">
                    <circle cx="30" cy="30" r="28" fill="none" stroke="currentColor" strokeWidth="2" />
                    <path d="M20 20h20v20H20z" fill="none" stroke="currentColor" strokeWidth="2" />
                    <path d="M15 15L45 45M15 45L45 15" stroke="currentColor" strokeWidth="2" />
                </svg>
            ),
            description: 'Therapy that honors and integrates your unique cultural background and values'
        },
        {
            title: 'Intergenerational Healing',
            svg: (
                <svg viewBox="0 0 60 60" className="w-full h-full">
                    <circle cx="20" cy="20" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
                    <circle cx="40" cy="40" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
                    <path d="M27 27l6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
            ),
            description: 'Addressing and healing patterns that span across generations'
        },
        {
            title: 'Narrative Therapy',
            svg: (
                <svg viewBox="0 0 60 60" className="w-full h-full">
                    <path d="M15 15h30v30H15z" fill="none" stroke="currentColor" strokeWidth="2" />
                    <path d="M20 25h20M20 30h20M20 35h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
            ),
            description: 'Helping you reshape your story while honoring your cultural heritage'
        }
    ];

    return (
        <div className="min-h-screen pt-16 sm:pt-20 md:pt-24 bg-brand-background-secondary">
            {/* Hero Section */}
            <section className="px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 mt-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-brand-text-primary">
                            Family & cultural dynamics
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
                                src={Cultural_Family}
                                alt="Family cultural dynamics therapy"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/40"></div>
                            <div className="relative z-10 flex items-center justify-center h-full p-4 sm:p-8">
                                <p className="text-center sm:text-lg md:text-xl lg:text-2xl font-semibold text-brand-text-secondary max-w-4xl">
                                    Navigating family expectations and cultural identity can be challenging.
                                    We support you in honoring your heritage while fostering meaningful connections
                                    and emotional well-being.
                                </p>
                            </div>
                        </div>
                    </div>
                </FadeInSection>
            </section>

            {/* Common Struggles Section */}
            <section className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8 bg-brand-background-primary border-t border-brand-gray-warm/10">
                <FadeInSection>
                    <div className="max-w-6xl mx-auto">
                        <div className="p-6 sm:p-8 md:p-12">
                            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-brand-text-primary mb-12 text-center">
                                Common struggles
                            </h2>
                            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                                {struggles.map((struggle, index) => (
                                    <div
                                        key={index}
                                        className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-brand-sage/10 flex items-center justify-center p-4 
                                        group hover:bg-brand-sage hover:scale-105 transition-all duration-300"
                                    >
                                        <span className="text-sm sm:text-base text-brand-text-primary group-hover:text-white text-center transition-colors duration-300">
                                            {struggle}
                                        </span>
                                    </div>
                                ))}
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
                            Our cultural understanding
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl text-brand-text-primary">
                            We recognize that cultural identity and family dynamics are deeply interconnected.
                            Our approach focuses on understanding and respecting your unique background while
                            supporting your growth.
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
                    </div>
                </FadeInSection>
            </section>

            {/* Additional Support Section */}
            <section className="px-4 sm:px-6 lg:px-8 py-8 sm:py-8 bg-brand-background-primary">
                <FadeInSection>
                    <div className="max-w-4xl mx-auto">
                        <div className="p-6 sm:p-8 md:p-12 text-center">
                            <p className="text-base sm:text-lg text-brand-text-primary mb-12">
                                Our therapists understand the complexities of balancing cultural heritage
                                with personal growth. We provide a safe, non-judgmental space where you can
                                explore these challenges and find ways to thrive while honoring both your
                                individual journey and your cultural roots.
                            </p>
                        </div>
                    </div>
                </FadeInSection>
            </section>
            
            <CTASection/>
        </div>
    );
};

export default FamilyCulturalDynamics;