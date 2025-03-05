import React from 'react';
import Anxiety_Therapy from '../assets/images/anxiety.jpg';
import Womens_Therapy from '../assets/images/womens-therapy.jpg';
import BIPOC_Therapy from '../assets/images/asia-bipoc-therapy.jpg';
import Depression_Img from '../assets/images/depression.jpg';
import Stress_Burnout from '../assets/images/stress-burnout.jpg';
import Relationship_Counseling from '../assets/images/relationship-counseling.jpg';
import Cultural_Family from '../assets/images/cultural-family.jpg';
import Trauma_Support from '../assets/images/trauma-support.jpg';
import { FadeInSection, SpecialtyCard } from '../components/shared/Animations';
import CTASection from '../components/shared/CTASection';


const Specialties = () => {
    const specialties = [
        {
            title: 'Trauma therapy',
            path: '/trauma-therapy',
            img_path: Trauma_Support,
            description: 'Healing from trauma takes time, but you don’t have to do it alone. Our trauma-informed therapists provide a safe, compassionate space to help you process past experiences, build resilience, and regain a sense of control. Using evidence-based approaches, we support you in moving forward with strength and healing',
        },
        {
            title: 'Therapy for women',
            path: '/womens-therapy',
            img_path: Womens_Therapy,
            description: 'Women face unique challenges, from societal pressures to life transitions and emotional burnout. Our therapists provide a supportive space for women to explore their mental health, relationships, and personal growth, helping you cultivate self-compassion and empowerment.'
        },
        {
            title: 'Therapy for asian americans and BIPOC community',
            path: '/asia-bipoc-therapy',
            img_path: BIPOC_Therapy,
            description: 'Navigating mental health while balancing cultural identity, family expectations, and systemic challenges can be complex. We offer culturally sensitive therapy tailored to the experiences of Asian Americans and BIPOC individuals, providing a space where you feel seen, understood, and supported.'
        },
        {
            title: 'Anxiety therapy',
            path: '/anxiety-therapy',
            img_path: Anxiety_Therapy,
            description: 'Anxiety can feel overwhelming, affecting your daily life, relationships, and overall well-being. Our therapists use practical, evidence-based techniques to help you manage worry, reduce stress, and regain a sense of calm and confidence in your life.',
        },
        {
            title: 'Depression therapy',
            path: '/depression-therapy',
            img_path: Depression_Img,
            description: "When sadness, fatigue, and hopelessness take over, it's important to have support. Our depression therapy focuses on helping you understand your emotions, develop coping strategies, and rediscover motivation and joy in life.",
        },
        {
            title: 'Relationship therapy',
            path: '/relationship-counseling',
            img_path: Relationship_Counseling,
            description: "Healthy relationships require communication, trust, and emotional connection. Whether you're experiencing conflict, struggling with intimacy, or seeking to strengthen your bond, our therapists provide guidance to help you build a fulfilling and lasting relationship.",
        },
        {
            title: 'Family & cultural dynamics',
            path: '/family-cultural-dynamic',
            img_path: Cultural_Family,
            description: 'Navigating intergenerational issues and family expectations can be tough. We help you understand and manage these pressures with compassion and insight.',
        },
        {
            title: 'Therapy for burn out and stress',
            path: '/stress-burnout',
            img_path: Stress_Burnout,
            description: 'Chronic stress and burnout can leave you feeling exhausted, unmotivated, and disconnected. Our therapy sessions help you identify stressors, set boundaries, and develop self-care strategies to restore balance and well-being in your personal and professional life.',
        },
        // {
        //     title: 'Individual therapy',
        //     path: '/individual-therapy',
        //     img_path: Anxiety_Therapy, // Using a placeholder image, update with actual IndividualTherapyImg when available
        //     description: 'We provide culturally responsive individual therapy to help you manage stress, anxiety, depression, and life transitions. Our therapists create a safe, supportive space where you can explore your thoughts, emotions, and challenges at your own pace.',
        // },
        // {
        //     title: 'Couples therapy',
        //     path: '/couples-therapy',
        //     img_path: Relationship_Counseling, // Using relationship counseling image as a placeholder
        //     description: 'We offer couples therapy to help partners improve communication, rebuild trust, and navigate challenges together. Using evidence-based approaches like Gottman Method and Emotionally Focused Therapy (EFT), we support couples in deepening their understanding of each other and fostering a healthier relationship.',
        // },
        // {
        //     title: 'Wellness coaching',
        //     path: '/wellness-coaching',
        //     img_path: Stress_Burnout, // Using a placeholder image, update with actual WellnessCoachingImg when available
        //     description: "Your mental well-being goes beyond therapy. Our wellness coaching services help you build resilience, set meaningful goals, and create a balanced life. Whether you're looking to improve stress management, enhance self-care, or develop healthier habits, we offer personalized coaching to support your journey.",
        // },
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
                    <div className="grid grid-cols-1 gap-8 max-w-5xl mx-auto">
                        {specialties.map((specialty, index) => (
                            <SpecialtyCard key={index} {...specialty} />
                        ))}
                    </div>
                </FadeInSection>
            </section>
            {/* Bottom Section */}
            <section className="py-4 sm:py-6 md:py-8 bg-gradient-to-b from-brand-background-primary to-brand-background-secondary">
                <FadeInSection direction="up">
                    <div className="max-w-4xl mx-auto text-center px-4">
                        <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-semibold text-brand-text-primary mb-6">
                            Our therapeutic approach
                        </h2>
                        <div className="text-brand-text-primary text-base sm:text-lg md:text-xl space-y-4">
                            <p>
                                We offer Cognitive Behavioral Therapy (CBT), Trauma-Focused Therapy, mindfulness-based therapy, relational therapy, EMDR, Internal Family System ( IFS),
                                attachment therapy and psychodynamic therapy, all tailored to your unique needs.
                                At <span className="font-semibold text-brand-text-primary">Mind Matters Center</span>,we believe that therapy should respect and integrate your cultural background while helping you move forward with confidence and clarity.
                            </p>
                            <p>
                                Our goal is to help you feel heard, understood, and empowered as you work toward emotional healing and a more balanced life.
                            </p>
                        </div>

                    </div>
                </FadeInSection>
            </section>
            <CTASection />
        </div>

    );
};

export default Specialties;