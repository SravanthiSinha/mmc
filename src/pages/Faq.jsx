import { useState } from 'react';

import { FadeInSection, AnimatedFAQItem } from '../components/shared/Animations';


const Faq = () => {
  const faqs = [
    {
      question: "Is everything truly confidential?",
      answer: "Yes, your privacy is our priority. All sessions are conducted securely, and we strictly adhere to HIPAA guidelines."
    },
    {
      question: "Do you offer initial consultation?",
      answer: "We offer a free 20-minute consultation where we can briefly discuss what you're looking for and make sure that I'm a good fit for your needs and goals."
    },
    {
      question: "Individual Session Fees",
      answer: "Session fees vary based on the clinician. Please visit each clinician's booking page for specific pricing."
    },
    {
      question: "Can I use my insurance?",
      answer: `At this time, we are unable to accept insurance and operate as out-of-network providers. This means that you are responsible for the full payment of session fees at the time of service. Upon request, we can provide you with detailed weekly or monthly statements (superbills) that you may submit to your insurance company for potential reimbursement.

      We provide superbills for you to submit to your insurance. Please check with your provider to see if you're eligible for reimbursement.
      
      We are actively exploring the option of accepting insurance and may be able to do so in the near future. Please check back for updates regarding our insurance policy.`
    },
    {
      question: "Can I use my HSA or FSA card?",
      answer: `Yes, we accept HSA and FSA cards for payment.

      If your insurance does not cover or fully reimburse out-of-network mental health services, you may be able to use funds from a Flexible Spending Account (FSA), Health Savings Account (HSA), or Health Reimbursement Account (HRA). Please consult your account provider to confirm eligibility for mental health services as a covered expense.`
    },
    {
      question: "How long are the sessions?",
      answer: "Each session typically lasts 50 minutes, with flexibility based on your individual needs."
    },
    {
      question: "What is the cancellation policy?",
      answer: "Cancellations require a 24-hour notice to avoid charges."
    },
    {
      question: "Do you provide sessions through text messages or phone calls?",
      answer: "We currently offer therapy via secure video sessions. Phone sessions may be available upon request."
    },
    {
      question: "Do you offer couples therapy online?",
      answer: "Yes, couples therapy is available virtually and tailored to meet your relationship goals."
    }
  ];

  // State to track which FAQ is open
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="min-h-screen pt-20 sm:pt-24 md:pt-32 bg-brand-background-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-brand-text-primary mb-8 sm:mb-10">
            Frequently Asked Questions
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-brand-text-primary max-w-2xl mx-auto">
            Find answers to common questions about our therapy services
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <AnimatedFAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              index={index}
              useFade={true}
            />
          ))}
        </div>
      </div>

      {/* GFE Section */}
      <section className="py-6 sm:py-8 md:py-10 bg-brand-background-primary">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection direction="up">
            <div className="shadow-md border border-brand-gray-warm rounded-xl py-8 sm:py-10 px-4 sm:px-6">
              <div className="text-center">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-brand-text-primary mb-4 sm:mb-6">
                  Good Faith Estimate (GFE) - Your rights
                </h2>
                <p className="text-base sm:text-lg text-brand-text-primary mb-6">
                  You have the right to receive a GFE explaining how much your medical care will cost. Under the law, health care providers need to give patients who don't have insurance or who are not using insurance an estimate of the bill for medical items and services.
                </p>
                <div className="my-6 text-left">
                  <ul className="list-disc pl-6 space-y-2 text-base sm:text-lg text-brand-text-primary">
                    <li>You have the right to receive a GFE for the total expected cost of any non-emergency items or services.</li>
                    <li>Make sure your health care provider gives you a GFE in writing at least one business day before your medical service or item.</li>
                    <li>You can also ask your health care provider, and any other provider you choose for a GFE before you schedule an item or service.</li>
                    <li>If you receive a bill that is at least $400 more than your GFE, you can dispute the bill.</li>
                    <li>Make sure to save a copy or picture of your GFE.</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg mt-6">
                  <p className="text-sm sm:text-base">
                    For questions or more information about your right to a GFE, visit{' '}
                    <a
                      href="https://www.cms.gov/nosurprises"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-sage hover:underline focus:outline-none focus:ring-2 focus:ring-brand-sage/50 focus:ring-offset-2 rounded-sm"
                    >
                      www.cms.gov/nosurprises
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
};

export default Faq;