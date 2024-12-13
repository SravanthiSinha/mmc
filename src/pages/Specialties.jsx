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
            <div className="bg-brand-blue-soft bg-opacity-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-brand-text-secondary mb-12">
                            Our Specialties
                        </h1>
                        <p className="text-xl text-brand-text-secondary text-center mb-2">
                            At <strong className="text-brand-yellow font-semibold">Mind Matters Center</strong>, we specialize in providing culturally sensitive therapy designed to support the mental health and well-being of Asian American individuals and couples.
                        </p>
                        <p className="text-xl text-brand-text-secondary text-center mb-2">
                            We understand the unique challenges that come with balancing cultural expectations, family dynamics, and personal growth, and we are here to offer a safe, understanding space to work through them.
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="font-heading text-3xl font-semibold text-brand-sage mb-12">
                        Our therapists use a variety of evidence-based approaches to help you address common challenges
                    </h1>
                </div>
                {/* Specialties Flex Layout */}
                <div className="flex flex-wrap justify-center gap-8 mb-16">
                    {specialties.map((specialty) => (
                        <Link
                            key={specialty.title}
                            to={specialty.path}
                            className="group p-8 bg-brand-gray-warm rounded-2xl transition-all duration-300 hover:shadow-lg hover:bg-white flex-1 basis-80 min-w-[400px] max-w-[500px]"
                        >
                            <h3 className="font-heading text-xl font-semibold text-brand-text-secondary mb-4 group-hover:text-brand-yellow">
                                {specialty.title}
                            </h3>
                            <p className="text-brand-text-secondary">
                                {specialty.description}
                            </p>
                        </Link>
                    ))}
                </div>

                {/* Bottom Section */}
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="font-heading text-3xl font-semibold text-brand-text-secondary mb-6">
                        Our Therapeutic Approach
                    </h2>
                    <div className="text-brand-text-secondary text-xl space-y-4">
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
                        className="inline-block mt-12 px-8 py-4 bg-brand-coral text-white font-semibold rounded-full hover:bg-opacity-90 transition-colors duration-200"
                    >
                        Book a Consultation
                    </Link>
                </div>
            </div >
        </div >
    );
};

export default Specialties;