import React from 'react';
import { Link } from 'react-router-dom';
import { FadeInSection } from '../components/shared/Animations';
import ZengImg from '../assets/images/profile_pics/zeng.jpg';

const OurTeam = () => {
    return (
        <div className="min-h-screen pt-20 sm:pt-24 md:pt-32 bg-brand-background-secondary">
            {/* Hero Section */}
            <section className="mb-12 sm:mb-16 md:mb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-brand-text-primary mb-6 sm:mb-8">
                            Meet our team
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl text-brand-text-primary">
                            Dedicated professionals committed to providing culturally sensitive and
                            inclusive mental health care for our community.
                        </p>
                    </div>
                </div>
            </section>

            {/* Team Member Section */}
            <section className="py-12 md:py-16 bg-brand-background-primary">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <FadeInSection>
                        <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col md:flex-row">
                            {/* Profile Image and CTA */}
                            <div className="w-full md:w-[35%] flex flex-col">
                                <div className="relative h-[300px] md:h-[500px] overflow-hidden rounded-br-2xl">
                                    <img
                                        src={ZengImg}
                                        alt="Yajun (Stella) Zeng"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                                    {/* Name and Title Overlay */}
                                    <div className="absolute bottom-0 left-0 right-0 p-6">
                                        <h2 className="text-2xl md:text-3xl font-serif mb-2 text-white">
                                            Yajun (Stella) Zeng, LCSW
                                        </h2>
                                        <p className="text-lg text-white/90 italic">
                                            Clinical Director | Mind Matters Center
                                        </p>
                                    </div>
                                </div>

                                {/* Consultation Button */}
                                <div className="text-center py-6">
                                    <div className="flex flex-col items-center gap-2">
                                        <Link
                                            to="/book-consultation"
                                            className="inline-block bg-brand-coral text-white text-base sm:text-lg md:text-xl font-bold 
                px-6 py-3 rounded-full hover:bg-brand-coralLight transition-all duration-200
                hover:transform hover:scale-105 active:scale-95"
                                        >
                                            Book a consultation
                                        </Link>
                                        <span className="text-sm sm:text-base text-brand-text-primary/80">
                                            Free 20 Minute Consultation
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Bio Content */}
                            <div className="w-full md:w-[65%] p-6 sm:p-8 md:p-10">
                                <div className="space-y-8">
                                    <div className="space-y-6">
                                        <p className="text-lg text-brand-text-primary/90 leading-relaxed">
                                            As an Asian American immigrant, my journey into mental health care was shaped by a deep commitment
                                            to breaking cultural and linguistic barriers that often prevent Asian American communities from
                                            accessing therapy. Navigating life between two cultures has given me a firsthand understanding
                                            of the unique stressors and mental health challenges that arise from bicultural identity,
                                            immigration, and intergenerational dynamics.
                                        </p>
                                        <div className="bg-brand-background-secondary p-6 rounded-lg">
                                            <h3 className="text-lg font-semibold text-brand-text-primary mb-4">Education & Credentials</h3>
                                            <ul className="space-y-3 text-brand-text-primary/90">
                                                <li className="flex items-start gap-2">
                                                    <span className="text-brand-sage">•</span>
                                                    <span>Dual master’s degrees in Social Work (MSW) and Gerontology (MSG) from University of Southern California</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="text-brand-sage">•</span>
                                                    <span>Currently pursuing a Doctorate in Social Work (DSW) at University of Pennsylvania</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="text-brand-sage">•</span>
                                                    <span>Licensed Clinical Social Worker</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <p className="text-lg text-brand-text-primary/90 leading-relaxed">
                                            As a bilingual Licensed Clinical Social Worker fluent in both English and Chinese,
                                            I integrate evidence-based treatment approaches, including Cognitive Behavioral Therapy (CBT),
                                            attachment-based techniques, and relational-focused methods.
                                            My clinical expertise includes working with individuals across the lifespan, with a special focus on older adults,
                                            individuals with chronic illnesses, and immigrants, particularly within the Asian American community.
                                        </p>

                                        <blockquote className="border-l-4 border-brand-sage pl-6 py-4">
                                            <p className="text-lg italic text-brand-text-primary/90">
                                                At Mind Matters Center, I aim to create a safe and culturally responsive space where clients feel seen, heard, and empowered to navigate life’s challenges.
                                                I believe in therapy that honors personal values, fosters self-awareness and strengthens resilience.
                                            </p>
                                        </blockquote>

                                        <p className="text-lg text-brand-text-primary/90 leading-relaxed pt-4">
                                            Outside of therapy, I enjoy exploring new places, traveling, reading, practicing yoga, hiking, backpacking, and indulging in delicious food.
                                            I also love animals—especially dogs- who hold a special place in my heart.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeInSection>
                </div>
            </section>
        </div>
    );
};

export default OurTeam;