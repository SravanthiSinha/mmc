import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqItems = [
    {
      question: "Is everything truly confidential?",
      answer: (
        <>
          <p className="mb-4">
            All information shared in treatment is confidential except in circumstances 
            governed by law. Information will only be shared when requested and 
            permitted by you through a written release of information. We provide a safe 
            and private environment for our clients.
          </p>
          <p className="mb-2">Legal exceptions to confidentiality include:</p>
          <ul className="list-disc pl-5 space-y-2 text-brand-neutral-700">
            <li>When a client is intent on hurting self or others</li>
            <li>When there is reason to suspect the abuse or neglect of a minor</li>
            <li>When records or information are ordered by a court of law</li>
          </ul>
        </>
      )
    },
    {
      question: "What are your fees?",
      answer: "Our fees vary depending on the type and length of service. Initial consultation sessions are $XXX, and regular therapy sessions range from $XXX to $XXX. We offer sliding scale options for those experiencing financial hardship."
    },
    {
      question: "Can I use my insurance?",
      answer: "Yes, we accept most major insurance plans. We are in-network with [List Insurance Companies]. We can also provide documentation for out-of-network reimbursement. Please contact your insurance provider to verify your mental health benefits."
    },
    {
      question: "Can I use HSA or FSA card?",
      answer: "Yes, we accept both HSA (Health Savings Account) and FSA (Flexible Spending Account) cards as forms of payment for our services."
    },
    {
      question: "How long are our sessions?",
      answer: "Standard individual therapy sessions are 50 minutes long. Initial consultations and family therapy sessions may be scheduled for 60-90 minutes depending on needs."
    },
    {
      question: "What is the cancellation policy?",
      answer: "We require 24-hour notice for cancellations. Late cancellations or missed appointments may be subject to a fee. We understand that emergencies happen and handle these situations on a case-by-case basis."
    },
    {
      question: "What is your contact information?",
      answer: "You can reach us by phone at (XXX) XXX-XXXX during business hours, or email us at contact@mindmatterscenter.com. For non-urgent matters, we typically respond within 24 business hours."
    }
  ];

  return (
    <div className="min-h-screen bg-brand-neutral-50 py-16 px-4">
      <div className="container mx-auto max-w-3xl">
        <h1 className="font-heading text-4xl md:text-5xl font-normal text-brand-neutral-900 text-center mb-12">
          Frequently Asked Questions
        </h1>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full flex items-center justify-between p-6 text-left"
                aria-expanded={openIndex === index}
              >
                <span className="font-heading text-lg text-brand-neutral-800">
                  {item.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-brand-primary-500 transition-transform duration-200
                    ${openIndex === index ? 'transform rotate-180' : ''}`}
                />
              </button>

              <div 
                className={`transition-all duration-200 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}
              >
                <div className="p-6 pt-0 font-light text-brand-neutral-700 leading-relaxed">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-12 text-center">
          <p className="text-brand-neutral-700 mb-4">
            Still have questions? We're here to help.
          </p>
          <a
            href="mailto:contact@mindmatterscenter.com"
            className="inline-block bg-brand-primary-500 hover:bg-brand-primary-600 
                     text-white px-8 py-3 rounded-full text-lg font-normal 
                     transition-all duration-300 shadow-sm hover:shadow"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;