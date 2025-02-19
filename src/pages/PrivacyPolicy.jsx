import React from 'react';
import { FadeInSection } from '../components/shared/Animations';
import { CONTACT_INFO } from '../constants';

const PrivacyPolicy = () => {
    const sections = [
        {
            title: "Information We Collect",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            ),
            content: "We collect personal and non-personal information in the following ways:",
            subsections: [
                {
                    title: "Personal Information",
                    content: "When you fill out forms, book an appointment, or contact us, you may provide your name, email, phone number, and other details."
                },
                {
                    title: "Automatically Collected Information",
                    content: "When you visit our website, we may collect data such as IP address, browser type, and browsing behavior through cookies and analytics tools."
                },
                {
                    title: "Health-Related Information",
                    content: "If you engage in therapy services, your information is protected under HIPAA (Health Insurance Portability and Accountability Act) and other confidentiality laws."
                }
            ]
        },
        {
            title: "How We Use Your Information",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            content: "We use the collected information to:",
            listItems: [
                "Provide and improve our services",
                "Respond to inquiries and appointment requests",
                "Ensure website security and performance",
                "Comply with legal and ethical obligations",
                "Communicate updates, when applicable, with your consent"
            ]
        },
        {
            title: "Sharing and Disclosure",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
            ),
            content: "We do not sell your personal information. We may share your data in the following cases:",
            listItems: [
                "With Your Consent: If you explicitly agree to share your information with third parties",
                "Legal Compliance: If required by law or to protect rights, safety, or comply with regulatory requirements",
                "Service Providers:  We may work with trusted third-party vendors (such as payment processors or appointment scheduling software) who are contractually required to protect your information."
            ]
        },
        {
            title: "Data Security",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
            ),
            content: "We take reasonable steps to protect your personal information from unauthorized access, disclosure, or misuse. However, no method of transmission over the Internet is 100% secure. If you suspect a security issue, please contact us immediately.",
        },
        {
            title: "Your Rights and Choices",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            content: "Depending on your location and applicable laws, you may have the right to:",
            listItems: ["Request access to the personal information we have about you",
                "Correct or delete your information",
                "Withdraw consent for specific uses of your data",
                "Opt-out of non-essential communications",
            ],
            content2: <span>To exercise your rights, contact us at <strong className="text-brand-sage">{CONTACT_INFO.email}</strong></span>
        },
        {
            title: "Cookies and Tracking",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
            content: "We use cookies and similar tracking tools to enhance your browsing experience. You can manage your cookie preferences through your browser settings.",
        },

        {
            title: "Third-Party Links",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                </svg>
            ),
            content: "Our website may contain links to external websites. We are not responsible for their privacy practices, so we encourage you to review their policies before sharing information."
        },
        {
            title: "Updates to This Policy",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
            ),
            content: "We may update this Privacy Policy from time to time. Any changes will be reflected on this page with an updated effective date. We encourage you to review this policy periodically."
        },
        {
            title: "Contact Us",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 12c0 2.5-2.5 4-4 4s-4-1.5-4-4"
                    />
                </svg>
            ),
            content: <span>If you have any questions or concerns about this Privacy Policy, please contact us at: <strong className="text-brand-sage">{CONTACT_INFO.email}</strong></span>,
        }
    ];

    return (

        <div className="min-h-screen pt-20 sm:pt-24 md:pt-32 bg-brand-background-secondary">
            {/* Hero Section */}
            <section className="mb-12 sm:mb-16 md:mb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-brand-text-primary mb-6 sm:mb-8">
                            Privacy Policy
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl text-brand-text-primary/80 mb-8 sm:mb-12">
                            Effective Date: Feb 7th, 2025
                        </p>
                        <p className="text-base sm:text-lg md:text-xl text-brand-text-primary">
                            <strong className="text-brand-text-primary">Mind Matters Center</strong> ("we," "us," or "our") is committed to protecting your privacy.
                            This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website and engage with our services. By using our website, you agree to the terms outlined below.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content with refined spacing */}
            <section className="py-16 sm:py-20 md:py-24 bg-brand-background-primary">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-8 sm:gap-10 md:gap-12">
                        {sections.map((section, index) => (
                            <FadeInSection key={index} delay={index * 100}>
                                <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 md:p-10 border border-brand-gray-warm hover:shadow-md transition-shadow duration-300">
                                    <div className="flex items-center gap-5 mb-8">
                                        <div className="p-3 bg-brand-sage/10 rounded-xl text-brand-sage">
                                            {section.icon}
                                        </div>
                                        <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-brand-text-primary">
                                            {section.title}
                                        </h2>
                                    </div>

                                    {section.content && (
                                        <p className="text-base sm:text-lg text-brand-text-primary mb-8 leading-relaxed">
                                            {section.content}
                                        </p>
                                    )}

                                    {section.subsections && (
                                        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
                                            {section.subsections.map((subsection, idx) => (
                                                <div
                                                    key={idx}
                                                    className="bg-brand-background-secondary rounded-xl p-6 hover:shadow-md transition-shadow duration-300"
                                                >
                                                    <h3 className="text-lg font-semibold text-brand-sage mb-3">
                                                        {subsection.title}
                                                    </h3>
                                                    <p className="text-base text-brand-text-primary leading-relaxed">
                                                        {subsection.content}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {section.listItems && (
                                        <ul className="space-y-4">
                                            {section.listItems.map((item, idx) => (
                                                <li key={idx} className="flex items-center gap-4">
                                                    <svg
                                                        className="w-5 h-5 text-brand-sage flex-shrink-0 mt-1"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M5 13l4 4L19 7"
                                                        />
                                                    </svg>
                                                    <span className="text-base sm:text-lg text-brand-text-primary leading-relaxed">
                                                        {item}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                    {section.content2 && (
                                        <p className="text-base sm:text-lg text-brand-text-primary my-8 leading-relaxed">
                                            {section.content2}
                                        </p>
                                    )}
                                </div>
                            </FadeInSection>
                        ))}
                    </div>
                </div>
            </section>

            {/*  Acknowledgment section */}
            <section className="bg-brand-background-secondary py-8 sm:py-10">
                <FadeInSection direction="up" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
                    <div className="max-w-3xl mx-auto text-center mb-12">
                        <h2 className="font-heading text-lg sm:text-xl md:text-2xl font-semibold text-brand-text-primary">
                            By using our services, you acknowledge that you have read and understood this Privacy Policy.
                        </h2>
                    </div>
                </FadeInSection>
            </section>
        </div>
    );
};

export default PrivacyPolicy;