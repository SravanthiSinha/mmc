// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/sections/Hero';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Welcome Section */}
      <section className="py-20 bg-gradient-to-b from-brand-neutral-50 to-brand-primary-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-primary-800 mb-6">
              Your Journey to Mental Wellness Starts Here
            </h2>
            <p className="text-xl text-brand-neutral-700 leading-relaxed mb-8">
              We provide culturally sensitive mental health services tailored to the Asian American community. 
              Our experienced therapists understand your unique experiences and challenges.
            </p>
            <Link
              to="/book"
              className="inline-block bg-brand-primary-500 hover:bg-brand-primary-600 text-white px-8 py-3 rounded-full 
                         font-medium text-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-primary-800 mb-16">
            Our Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Individual Therapy",
                description: "One-on-one sessions focused on personal growth and healing",
                features: ["Anxiety & Depression", "Cultural Identity", "Life Transitions"]
              },
              {
                title: "Family Counseling",
                description: "Bridge generational and cultural gaps within families",
                features: ["Intergenerational Trauma", "Communication", "Family Dynamics"]
              },
              {
                title: "Group Therapy",
                description: "Connect with others in a supportive environment",
                features: ["Shared Experiences", "Community Support", "Personal Growth"]
              }
            ].map((service, index) => (
              <div 
                key={index}
                className="bg-brand-neutral-50 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-brand-primary-700 mb-4">
                  {service.title}
                </h3>
                <p className="text-brand-neutral-700 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li 
                      key={idx}
                      className="flex items-center text-brand-neutral-600"
                    >
                      <span className="w-2 h-2 bg-brand-primary-500 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-brand-primary-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-primary-800 mb-16">
              Why Choose Us
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              {[
                {
                  title: "Cultural Understanding",
                  description: "Our therapists understand the unique challenges and experiences of the Asian American community."
                },
                {
                  title: "Multilingual Services",
                  description: "Sessions available in multiple languages to ensure clear and comfortable communication."
                },
                {
                  title: "Professional Expertise",
                  description: "Experienced therapists specialized in cultural identity and intergenerational relationships."
                },
                {
                  title: "Comfortable Environment",
                  description: "A warm, welcoming space where you can feel safe to express yourself freely."
                }
              ].map((feature, index) => (
                <div 
                  key={index}
                  className="flex gap-6"
                >
                  <div className="w-12 h-12 shrink-0 bg-brand-primary-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-2xl">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-primary-700 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-brand-neutral-700">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary-800 mb-6">
              Begin Your Healing Journey Today
            </h2>
            <p className="text-xl text-brand-neutral-700 mb-8">
              Take the first step towards mental wellness. Schedule a consultation with one of our experienced therapists.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/book"
                className="bg-brand-primary-500 hover:bg-brand-primary-600 text-white px-8 py-3 rounded-full 
                           font-medium transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Book Consultation
              </Link>
              <Link
                to="/about"
                className="bg-brand-neutral-100 hover:bg-brand-neutral-200 text-brand-primary-700 px-8 py-3 rounded-full 
                           font-medium transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;