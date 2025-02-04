import React from 'react';
import { FadeInSection } from '../components/shared/Animations';

const PrivacyPolicy = () => {
  const lastUpdated = "February 04, 2025";

  return (
    <div className="min-h-screen pt-20 sm:pt-24 md:pt-32 bg-brand-background-secondary">
      {/* Header Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-brand-text-primary mb-6">
              Privacy Policy
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-4 sm:px-6 lg:px-8 py-8 bg-white">
        <FadeInSection>
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <p className="text-sm text-brand-text-primary mb-8">Last updated: {lastUpdated}</p>
              <p className="text-brand-text-primary mb-6">
                Welcome to Mind Matters Center. This Privacy Policy explains how our website operates and what happens when you visit or use our services.
              </p>
            </div>

            <div className="space-y-12">
              <section>
                <h2 className="text-xl sm:text-2xl font-serif text-brand-text-primary mb-4">
                  Website Information
                </h2>
                <p className="text-brand-text-primary mb-4">
                  Our website is a static informational site. We do not:
                </p>
                <ul className="list-disc pl-6 mb-6 text-brand-text-primary space-y-2">
                  <li>Have user accounts or login systems on this website</li>
                  <li>Collect or store any personal information</li>
                  <li>Use cookies or tracking technologies</li>
                  <li>Process any payments directly</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-serif text-brand-text-primary mb-4">
                  Third-Party Services
                </h2>
                <p className="text-brand-text-primary mb-6">
                  Our website provides links to two external services:
                </p>
                <ul className="list-disc pl-6 mb-6 text-brand-text-primary space-y-2">
                  <li><strong>Consultation Booking:</strong> When you book a consultation, you'll be redirected to our third-party booking platform</li>
                  <li><strong>Client Portal:</strong> When you access the client portal, you'll be redirected to our secure Electronic Health Records (EHR) system</li>
                </ul>
                <p className="text-brand-text-primary mb-6">
                  For both services:
                </p>
                <ul className="list-disc pl-6 mb-6 text-brand-text-primary space-y-2">
                  <li>Any information you provide is collected and managed by these third-party services</li>
                  <li>Each service has its own privacy policy and security measures</li>
                  <li>The EHR system is HIPAA-compliant and ensures the security of your health information</li>
                  <li>We recommend reviewing their respective privacy policies before providing your information</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-serif text-brand-text-primary mb-4">
                  Client Portal Security
                </h2>
                <p className="text-brand-text-primary mb-6">
                  While our website simply provides a link to the client portal, the EHR system itself:
                </p>
                <ul className="list-disc pl-6 mb-6 text-brand-text-primary space-y-2">
                  <li>Maintains its own secure login system</li>
                  <li>Follows HIPAA guidelines for protecting health information</li>
                  <li>Has separate privacy and security policies</li>
                  <li>Manages all patient data independently from our website</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-serif text-brand-text-primary mb-4">
                  External Links
                </h2>
                <p className="text-brand-text-primary mb-6">
                  Our website contains links to external services (booking platform, EHR system, and potentially other resources). We are not responsible for the content or privacy practices of these external sites. We encourage you to review their individual privacy policies before providing any personal information.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-serif text-brand-text-primary mb-4">
                  Updates to This Policy
                </h2>
                <p className="text-brand-text-primary mb-6">
                  We may update this privacy policy as needed. Any changes will be posted on this page with an updated revision date.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-serif text-brand-text-primary mb-4">
                  Contact Information
                </h2>
                <p className="text-brand-text-primary mb-6">
                  If you have questions about this privacy policy, you can reach us through our consultation booking platform or the client portal.
                </p>
              </section>
            </div>
          </div>
        </FadeInSection>
      </section>
    </div>
  );
};

export default PrivacyPolicy;