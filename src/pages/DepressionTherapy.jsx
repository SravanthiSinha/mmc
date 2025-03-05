import React from 'react';
import { FadeInSection } from '../components/shared/Animations';
import Depression_Img from '../assets/images/depression.jpg';
import CTASection from '../components/shared/CTASection';
import BookNowCTA from '../components/shared/BookNowCTA';

const DepressionTherapy = () => {
    const signs = [
        'Persistent sadness',
        'Loss of interest',
        'Fatigue',
        'Difficulty concentrating',
        'Sleep problems'
    ];

    const approaches = [
        {
            title: 'Cognitive behavioral therapy (CBT)',
            svg: (
                <svg viewBox="0 0 60 60" className="w-full h-full">
                    <circle cx="30" cy="30" r="28" fill="none" stroke="currentColor" strokeWidth="2" />
                    <path d="M30 10v40M18 26l12-12 12 12M18 34l12 12 12-12"
                        fill="none" stroke="currentColor" strokeWidth="2"
                        strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            description: 'Identify and challenge negative thought patterns that contribute to depression'
        },
        {
            title: 'Behavioral activation',
            svg: (
                <svg viewBox="0 0 60 60" className="w-full h-full">
                    <circle cx="30" cy="30" r="28" fill="none" stroke="currentColor" strokeWidth="2" />
                    <path d="M20 40l10-10 5 5 15-15M45 20v10h-10"
                        fill="none" stroke="currentColor" strokeWidth="2"
                        strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            description: 'Gradually increase engagement in positive activities to improve mood and energy'
        },
        {
            title: 'Psychodynamic therapy',
            svg: (
                <svg viewBox="0 0 60 60" className="w-full h-full">
                    <path d="M30 10c-11.046 0-20 8.954-20 20s8.954 20 20 20 20-8.954 20-20-8.954-20-20-20z"
                        fill="none" stroke="currentColor" strokeWidth="2" />
                    <path d="M20 20c5 5 15 5 20 0M20 40c5-5 15-5 20 0M25 30h10"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
            ),
            description: 'Explore underlying issues and past experiences that may contribute to depression'
        }
    ];

    return (
        <div className="min-h-screen pt-16 sm:pt-20 md:pt-24 bg-brand-background-secondary">
            {/* Hero Section */}
            <section className="px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 mt-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-brand-text-primary">
                            Depression therapy
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
                                src={Depression_Img}
                                alt="Person dealing with depression"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/40"></div>
                            <div className="relative z-10 flex flex-col items-center justify-center h-full p-4 sm:p-8">
                                <p className="text-center sm:text-lg md:text-xl lg:text-2xl font-semibold text-brand-text-secondary max-w-4xl">
                                    Feeling overwhelmed by sadness and fatigue? Our depression therapy helps you understand your emotions,
                                    develop coping strategies, and rediscover joy in life.
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
                                Common signs
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
                            Our healing approach
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl text-brand-text-primary">
                            We create a safe space for you to express your feelings and thoughts while providing evidence-based
                            strategies to help you manage depression symptoms and build resilience.
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
                                Depression can make you feel isolated, but you don't have to face it alone.
                                Our therapists are experienced in helping clients navigate through depression,
                                providing compassionate support while working with you to develop practical tools
                                for managing symptoms and moving toward a more fulfilling life.
                            </p>
                        </div>
                    </div>
                </FadeInSection>
            </section>

            <CTASection />
        </div>
    );
};

export default DepressionTherapy;