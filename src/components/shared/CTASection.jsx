import React from 'react';
import { Link } from 'react-router-dom';
import { FadeInSection } from '../shared/Animations';

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
                        <span className="font-semibold">Book a free 20-minute consultation</span>{' '}
                        to see how therapy can help you move forward.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
                        <Link
                            to="/book-consultation"
                            className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-brand-coral text-white 
                                text-base sm:text-lg font-semibold rounded-full hover:bg-brand-coralLight 
                                transition-all duration-300 hover:transform hover:scale-105 active:scale-95"
                        >
                            Book a consultation
                        </Link>
                    </div>

                    <div className="text-brand-text-primary">
                        <p className="text-lg font-semibold mb-2">Have Questions?</p>
                        Email us at {' '}
                        <a
                            href="mailto:contact@mindmatterscenter.com"
                            className="text-brand-coral hover:text-brand-sage transition-colors duration-300"
                        >
                            contact@mindmatterscenter.com
                        </a>
                    </div>
                </div>
            </section>
        </FadeInSection>
    );
};

export default CTASection;