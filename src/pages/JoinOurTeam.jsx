import React from 'react';
import { FadeInSection } from '../components/shared/Animations';
import TherapistImg from '../assets/images/therapist.jpg';

const JoinOurTeam = () => {
    return (
        <div className="min-h-screen pt-16 sm:pt-20 md:pt-28 lg:pt-32 bg-brand-background-secondary">
            {/* Hero Section */}
            <section className="mb-8 sm:mb-12 md:mb-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-brand-text-primary mb-4 sm:mb-6">
                            Join our team
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl text-brand-text-primary max-w-3xl mx-auto">
                            Join Mind Matters Center, a culturally responsive and thriving therapy practice dedicated to providing
                            compassionate, evidence-based mental health care.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content Section */}
            <section className="py-8 sm:py-12 md:py-16 bg-brand-background-primary">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <FadeInSection>
                        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
                            {/* Image Section */}
                            <div className="relative rounded-2xl overflow-hidden shadow-lg h-[340px]  md:h-[410px] lg:h-[500px]">
                                <img
                                    src={TherapistImg}
                                    alt="Therapist at work"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Content Section */}
                            <div className="space-y-6 sm:space-y-8">
                                <div>
                                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-brand-text-primary mb-3 sm:mb-4">
                                        Licensed Therapist Position
                                    </h2>
                                    <p className="text-base sm:text-lg text-brand-text-primary/90">
                                        We're seeking licensed therapists who are passionate about providing culturally responsive care,
                                        with a focus on serving Asian American communities.
                                    </p>
                                </div>

                                <div className="space-y-4 sm:space-y-6">
                                    <h3 className="text-xl font-semibold text-brand-text-primary">
                                        THE IDEAL CANDIDATE:
                                    </h3>
                                    <div className="space-y-4 sm:space-y-6">
                                        <div className="flex items-start gap-3 sm:gap-4">
                                            <span className="text-brand-coral text-lg mt-1">•</span>
                                            <p className="text-base sm:text-lg text-brand-text-primary/90">
                                                Licensed Therapist (LMFT, LCSW, LPCC, or Licensed Psychologist) in California. We're also open to associates.
                                            </p>
                                        </div>
                                        <div className="flex items-start gap-3 sm:gap-4">
                                            <span className="text-brand-coral text-lg mt-1">•</span>
                                            <p className="text-base sm:text-lg text-brand-text-primary/90">
                                                Experience with evidence-based practices (CBT, EMDR, IFS, EFT) and passion for working with
                                                diverse populations, especially Asian American clients.
                                            </p>
                                        </div>
                                        <div className="flex items-start gap-3 sm:gap-4">
                                            <span className="text-brand-coral text-lg mt-1">•</span>
                                            <p className="text-base sm:text-lg text-brand-text-primary/90">
                                                Strong communication skills and ability to work in a supportive, team-oriented environment.
                                                Familiarity with Google Suite and EHR systems.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Contact Information */}
                                <div className="pt-2 sm:pt-4">
                                    <p className="text-base sm:text-lg text-brand-text-primary/90 mb-2">
                                        Ready to join a team that prioritizes well-being, professional growth, and cultural sensitivity
                                        in mental health care?
                                    </p>
                                    <p className="text-base sm:text-lg text-brand-text-primary/90 italic mb-2">
                                        For more information, please email us at:
                                    </p>
                                    <a
                                        href="mailto:info@mindmatterscenter.com"
                                        className="text-base sm:text-lg text-brand-coral hover:text-brand-coralLight transition-colors duration-200"
                                    >
                                        info@mindmatterscenter.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </FadeInSection>
                </div>
            </section>
        </div>
    );
};

export default JoinOurTeam;