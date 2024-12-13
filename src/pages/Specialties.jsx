import React from 'react';
import { Link } from 'react-router-dom';

const Specialties = () => {
    const specialties = [
        {
            title: 'Anxiety & Depression',
            path: '/anxiety-depression',
            description: 'Whether it\'s everyday stress or deeper emotional struggles, we help you manage anxiety and depression with proven therapeutic tools.',
        },
        {
            title: 'Trauma & PTSD',
            path: '/trauma',
            description: 'If you\'re dealing with past trauma or PTSD, our trauma-focused therapy can help you heal and regain control over your life.',
        },
        {
            title: 'Relationship Issues',
            path: '/relationship-counseling',
            description: 'From communication breakdowns to trust issues, we support couples in improving their relationships and deepening their connection.',
        },
        {
            title: 'Family & Cultural Dynamics',
            path: '/cultural-dynamic',
            description: 'Navigating intergenerational issues and family expectations can be tough. We help you understand and manage these pressures with compassion and insight.',
        },
        {
            title: 'Stress & Burnout',
            path: '/stress-burnout',
            description: 'Life can get overwhelming, especially when juggling multiple roles. We help you build resilience and create balance in your life.',
        },
    ];

    return (
        <div className="min-h-screen bg-brand-background-primary">
            {/* Hero Section */}
            <div className="bg-gradient-to-b from-brand-blue-soft/10 to-brand-background-primary">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 sm:pt-32 sm:pb-20">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-brand-text-secondary mb-8 sm:mb-12">
                            Our Specialties
                        </h1>
                        <div className="space-y-4">
                            <p className="text-lg sm:text-xl text-brand-text-secondary">
                                At <strong className="text-brand-yellow font-semibold">Mind Matters Center</strong>, we specialize in providing culturally sensitive therapy designed to support the mental health and well-being of Asian American individuals and couples.
                            </p>
                            <p className="text-lg sm:text-xl text-brand-text-secondary">
                                We understand the unique challenges that come with balancing cultural expectations, family dynamics, and personal growth, and we are here to offer a safe, understanding space to work through them.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-semibold text-brand-sage">
                        Our therapists use a variety of evidence-based approaches to help you address common challenges
                    </h2>
                </div>

                {/* Flexbox layout for specialties */}
                <div className="flex flex-wrap justify-center gap-6 lg:gap-8 mb-16">
                    {specialties.map((specialty) => (
                        <Link
                            key={specialty.title}
                            to={specialty.path}
                            className="flex-1 basis-[calc(100%-1.5rem)] sm:basis-[calc(50%-1.5rem)] min-w-[280px] max-w-[500px]
                                p-6 sm:p-8 bg-brand-gray-warm rounded-xl transition-all duration-300 
                                hover:shadow-lg hover:bg-white hover:scale-[1.02] 
                                border border-transparent hover:border-brand-sage/20"
                        >
                            <h3 className="font-heading text-lg sm:text-xl font-semibold text-brand-text-secondary mb-3 
                                group-hover:text-brand-yellow transition-colors duration-300">
                                {specialty.title}
                            </h3>
                            <p className="text-brand-text-secondary text-base sm:text-lg">
                                {specialty.description}
                            </p>
                        </Link>
                    ))}
                </div>

                {/* Bottom Section */}
                <div className="max-w-4xl mx-auto text-center px-4">
                    <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-semibold text-brand-text-secondary mb-6">
                        Our Therapeutic Approach
                    </h2>
                    <div className="text-brand-text-secondary text-base sm:text-lg md:text-xl space-y-4">
                        <p>
                            We combine therapies like Cognitive Behavioral Therapy (CBT), Trauma-Focused Therapy, mindfulness, relational therapy, and psychodynamic therapy, all tailored to your unique needs.
                            At <span className="font-semibold text-brand-yellow">Mind Matters Center</span>,
                            we believe that therapy should respect and integrate your cultural background while helping you move forward with confidence and clarity.
                        </p>
                        <p>
                            Our goal is to help you feel heard, understood, and empowered as you work toward emotional healing and a more balanced life.
                        </p>
                    </div>

                    <Link
                        to="/book-consultation"
                        className="inline-block mt-8 sm:mt-12 px-6 sm:px-8 py-3 sm:py-4 bg-brand-coral text-white 
                            text-lg sm:text-xl font-semibold rounded-full hover:bg-opacity-90 
                            transition-all duration-300 hover:transform hover:scale-105 active:scale-95"
                    >
                        Book a Consultation
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Specialties;