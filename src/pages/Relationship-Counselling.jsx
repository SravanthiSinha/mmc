import React from 'react';
import { FadeInSection } from '../components/shared/Animations';
import Relationship_Counseling from '../assets/images/relationship-counseling.jpg';
import CTASection from '../components/shared/CTASection';

const RelationshipCounseling = () => {
    const challenges = [
        'Communication breakdowns',
        'Trust issues',
        'Feeling emotionally distant',
        'Repeating unhealthy patterns'
    ];

    const approaches = [
        {
            title: 'Gottman Method',
            svg: (
                <svg viewBox="0 0 60 60" className="w-full h-full">
                    <path d="M15 30 A15 15 0 0 1 45 30" fill="none" stroke="currentColor" strokeWidth="2" />
                    <path d="M45 30 A15 15 0 0 1 15 30" fill="none" stroke="currentColor" strokeWidth="2" />
                    <circle cx="30" cy="20" r="5" fill="currentColor" />
                    <circle cx="20" cy="40" r="5" fill="currentColor" />
                    <circle cx="40" cy="40" r="5" fill="currentColor" />
                </svg>
            ),
            description: 'Research-based approach to strengthen relationships through improved communication and understanding'
        },
        {
            title: 'Emotionally Focused Therapy',
            svg: (
                <svg viewBox="0 0 60 60" className="w-full h-full">
                    <path d="M30 10c-11.046 0-20 8.954-20 20s8.954 20 20 20 20-8.954 20-20-8.954-20-20-20z"
                        fill="none" stroke="currentColor" strokeWidth="2" />
                    <path d="M20 25h20M20 35h20" strokeWidth="2" stroke="currentColor" strokeLinecap="round" />
                </svg>
            ),
            description: 'Focuses on emotional bonds and attachment patterns to create deeper connections'
        },
        {
            title: 'Attachment-Based Therapy',
            svg: (
                <svg viewBox="0 0 60 60" className="w-full h-full">
                    <circle cx="20" cy="30" r="15" fill="none" stroke="currentColor" strokeWidth="2" />
                    <circle cx="40" cy="30" r="15" fill="none" stroke="currentColor" strokeWidth="2" />
                    <path d="M30 20v20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
            ),
            description: 'Helps understand and heal relationship patterns based on early attachment experiences'
        }
    ];

    return (
        <div className="min-h-screen pt-16 sm:pt-20 md:pt-24 bg-brand-background-secondary">
            {/* Hero Section */}
            <section className="px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 mt-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-brand-text-primary">
                            Relationship counseling
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
                                src={Relationship_Counseling}
                                alt="Couple in therapy session"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/40"></div>
                            <div className="relative z-10 flex items-center justify-center h-full p-4 sm:p-8">
                                <p className="text-center sm:text-lg md:text-xl lg:text-2xl font-semibold text-brand-text-secondary max-w-4xl">
                                    Feeling disconnected, misunderstood, or struggling with trust? We help couples
                                    improve communication, rebuild emotional closeness, and strengthen their partnership.
                                </p>
                            </div>
                        </div>
                    </div>
                </FadeInSection>
            </section>

            {/* Common Challenges Section */}
            <section className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8 bg-brand-background-primary border-t border-brand-gray-warm/10">
                <FadeInSection>
                    <div className="max-w-6xl mx-auto">
                        <div className="p-6 sm:p-8 md:p-12">
                            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-brand-text-primary mb-12 text-center">
                                Common challenges
                            </h2>
                            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                                {challenges.map((challenge, index) => (
                                    <div
                                        key={index}
                                        className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-brand-sage/10 flex items-center justify-center p-4 
                                        group hover:bg-brand-sage hover:scale-105 transition-all duration-300"
                                    >
                                        <span className="text-sm sm:text-base text-brand-text-primary group-hover:text-white text-center transition-colors duration-300">
                                            {challenge}
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
                            Our healing approach
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl text-brand-text-primary">
                            Whether you're dealing with frequent conflicts, intimacy concerns, or major life transitions,
                            we provide a safe space to explore, heal, and grow together.
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
                                Our therapists provide a safe, neutral space where both partners can express feelings
                                and needs without judgment, learn effective communication tools, and develop deeper
                                understanding and empathy for each other.
                            </p>
                        </div>
                    </div>
                </FadeInSection>
            </section>

            <CTASection />
        </div>
    );
};

export default RelationshipCounseling;