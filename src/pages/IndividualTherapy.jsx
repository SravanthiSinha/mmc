import React from 'react';
import { Link } from 'react-router-dom';
import { FadeInSection } from '../components/shared/Animations';
import IndividualTherapyImg from '../assets/images/individual-therapy.svg';
import { BOOKING_URL } from '../constants';

const IndividualTherapy = () => {
    return (
        <div className="min-h-screen pt-16 sm:pt-20 md:pt-24 bg-brand-background-secondary">
            {/* Hero Section */}
            <section className="px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 mt-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-brand-text-primary">
                            Individual therapy
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
                                    <img src={IndividualTherapyImg} alt="Individual therapy illustration" className="w-full h-full" />
                                </div>
                            </div>
                            <div className="md:w-1/2">
                                <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-brand-text-primary mb-10">
                                    A safe space for your healing journey
                                </h2>
                                <p className="text-lg text-brand-text-primary mb-6">
                                    At Mind Matters Center, we provide culturally responsive <strong>individual therapy</strong> to help you manage stress, anxiety, depression, and life transitions. Our therapists create a safe, supportive space where you can explore your thoughts, emotions, and challenges at your own pace.
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
                                Our specialization
                            </h3>
                            <p className="text-base md:text-lg text-brand-text-primary">
                                We specialize in working with <strong>Asian American and BIPOC individuals</strong> and those seeking therapy that honors cultural identity, family dynamics, and personal values. Whether you're facing relationship struggles, career stress, or past trauma, we tailor our approach to meet your unique needs.
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
                            <span className="font-semibold">Take the first step toward healing</span>
                        </p>
                        <p className="text-lg md:text-xl text-brand-text-primary mb-8">
                            Reach out today to schedule your consultation. Together, we can begin your path to emotional well-being and a more fulfilling life.
                        </p>

                        <div className="flex flex-col items-center gap-2">
                            <Link
                                to={BOOKING_URL} target="_blank"
                                className="inline-block bg-brand-coral text-white text-base sm:text-lg md:text-xl font-bold 
                                px-6 py-3 rounded-full hover:bg-brand-coralLight transition-all duration-200
                                hover:transform hover:scale-105 active:scale-95"
                            >
                                Book Now
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

export default IndividualTherapy;