import React from 'react';
import { Link } from 'react-router-dom';
import { FadeInSection } from '../shared/Animations';
import { CONTACT_INFO } from '../../constants';

const CTASection = () => {
    return (
        <FadeInSection direction="up">
            <section className="bg-brand-background-secondary py-6 sm:py-8 mt-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
                    <h2 className="text-2xl sm:text-3xl font-serif text-brand-text-primary mb-6">
                        Ready to Find Support?
                    </h2>

                    <p className="text-lg sm:text-xl text-brand-text-primary mb-8">
                        You don't have to navigate these challenges alone.{' '}
                        <span>Book a free 20-minute consultation</span>{' '}
                        to see how therapy can help you move forward.
                    </p>

                    <div className="flex flex-col items-center gap-3 mb-10">
                        <Link
                            to="/book-consultation"
                            className="inline-block bg-brand-coral text-white text-base sm:text-lg md:text-xl font-bold 
                                px-8 py-3 rounded-full hover:bg-brand-coralLight transition-all duration-200
                                hover:transform hover:scale-105 active:scale-95"
                        >
                            Book a consultation
                        </Link>
                        <span className="text-sm sm:text-base text-brand-text-primary/80">
                            Free 20 Minute Consultation
                        </span>
                    </div>

                    <div className="text-brand-text-primary pt-6">
                        <p className="font-semibold mb-2">Have Questions?</p>
                        <div className="space-y-2">
                            <p>
                                Call us at{' '}
                                <a
                                    href="tel:+14153790835"
                                    className="text-brand-coral hover:text-brand-sage transition-colors duration-300"
                                    aria-label="Call our office"
                                >
                                    {CONTACT_INFO.phone}
                                </a>
                            </p>
                            <p>
                                Email us at{' '}
                                <a
                                    href={`mailto:${CONTACT_INFO.email}`}
                                    className="text-brand-coral hover:text-brand-sage transition-colors duration-300"
                                    aria-label="Email us"
                                >
                                    {CONTACT_INFO.email}
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </FadeInSection>
    );
};

export default CTASection;