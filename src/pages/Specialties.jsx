import React from 'react';
import { Link } from 'react-router-dom';

import { FadeInSection, SpecialtyCard } from '../components/shared/Animations';


const Specialties = () => {
    const specialties = [
        {
            title: 'Anxiety & depression',
            path: '/anxiety-depression',
            description: 'Whether it\'s everyday stress or deeper emotional struggles, we help you manage anxiety and depression with proven therapeutic tools.',
        },
        {
            title: 'Trauma & PTSD',
            path: '/trauma',
            description: 'If you\'re dealing with past trauma or PTSD, our trauma-focused therapy can help you heal and regain control over your life.',
        },
        {
            title: 'Relationship issues',
            path: '/relationship-counseling',
            description: 'From communication breakdowns to trust issues, we support couples in improving their relationships and deepening their connection.',
        },
        {
            title: 'Family & cultural dynamics',
            path: '/cultural-dynamic',
            description: 'Navigating intergenerational issues and family expectations can be tough. We help you understand and manage these pressures with compassion and insight.',
        },
        {
            title: 'Stress & burnout',
            path: '/stress-burnout',
            description: 'Life can get overwhelming, especially when juggling multiple roles. We help you build resilience and create balance in your life.',
        },
    ];

    return (
        <div className="min-h-screen pt-20 sm:pt-24 md:pt-32 bg-brand-background-secondary">
            {/* Hero Section */}
            <section className="mb-12 sm:mb-16 md:mb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-brand-text-primary mb-6 sm:mb-8">
                            Our specialties
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl text-brand-text-primary">
                            At <strong className="text-brand-text-primary font-semibold">Mind Matters Center</strong>, we specialize in providing culturally sensitive therapy designed to support the mental health and well-being of Asian American individuals and couples.

                        </p>
                        <p className="text-base sm:text-lg md:text-xl text-brand-text-primary">
                            We understand the unique challenges that come with balancing cultural expectations, family dynamics, and personal growth, and we are here to offer a safe, understanding space to work through them.

                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="bg-brand-background-primary py-8 sm:py-10">
                <FadeInSection direction="up" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
                    <div className="max-w-3xl mx-auto text-center mb-12">
                        <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-semibold text-brand-text-primary">
                            Our therapists use a variety of evidence-based approaches to help you address common challenges
                        </h2>
                    </div>
                    <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
                        {specialties.map((specialty, index) => (
                            <SpecialtyCard key={index} {...specialty} />
                        ))}
                    </div>
                </FadeInSection>
            </section>
            {/* Bottom Section */}
            <section className="py-4 sm:py-6 md:py-8 bg-brand-background-primary">
                <FadeInSection direction="up">
                    <div className="max-w-4xl mx-auto text-center px-4">
                        <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-semibold text-brand-text-primary mb-6">
                            Our therapeutic approach
                        </h2>
                        <div className="text-brand-text-primary text-base sm:text-lg md:text-xl space-y-4">
                            <p>
                                We combine therapies like Cognitive Behavioral Therapy (CBT), Trauma-focused therapy, mindfulness, relational therapy, and psychodynamic therapy, all tailored to your unique needs.
                                At <span className="font-semibold text-brand-text-primary">Mind Matters Center</span>,
                                we believe that therapy should respect and integrate your cultural background while helping you move forward with confidence and clarity.
                            </p>
                            <p>
                                Our goal is to help you feel heard, understood, and empowered as you work toward emotional healing and a more balanced life.
                            </p>
                        </div>

                        <Link
                            to="/book-consultation"
                            className="inline-block mt-8 sm:mt-12 px-6 sm:px-8 py-3 sm:py-4 bg-brand-coral text-white 
                            text-lg sm:text-xl font-semibold rounded-full hover:bg-brand-coralLight 
                            transition-all duration-300 hover:transform hover:scale-105 active:scale-95"
                        >
                            Book a consultation
                        </Link>
                    </div>
                </FadeInSection>
            </section>
        </div>

    );
};

export default Specialties;