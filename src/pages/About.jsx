// src/pages/About.jsx
import React from 'react';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import profileImage from '../assets/images/placeholder.jpg';

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const teamMembers = [
    {
      name: "Dr. Sarah Chen, PsyD",
      title: "Clinical Psychologist",
      specialty: "Anxiety, Intergenerational Trauma",
      image: profileImage,
      bio: "Dr. Chen specializes in helping Asian Americans navigate cultural identity, family dynamics, and anxiety. She brings both professional expertise and personal understanding to her practice.",
      languages: ["English", "Mandarin"]
    },
    {
      name: "Dr. James Kim, LMFT",
      title: "Family Therapist",
      specialty: "Family Dynamics, Cultural Identity",
      image: profileImage,
      bio: "With over 15 years of experience, Dr. Kim focuses on bridging generational gaps and helping families navigate bicultural challenges.",
      languages: ["English", "Korean"]
    },
    {
      name: "Dr. Maya Patel, PhD",
      title: "Clinical Psychologist",
      specialty: "Depression, Career Stress",
      image: profileImage,
      bio: "Dr. Patel combines traditional therapeutic approaches with cultural understanding to help clients navigate professional challenges and personal growth.",
      languages: ["English", "Hindi", "Gujarati"]
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => 
      prev === teamMembers.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? teamMembers.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen bg-brand-neutral-50">
      {/* Mission Section */}
      <section className="px-4 py-16 md:py-24 bg-gradient-to-b from-brand-primary-50 to-brand-neutral-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-primary-900 mb-6">
            Culturally Sensitive Mental Health Care
          </h1>
          <p className="text-xl text-brand-neutral-700 leading-relaxed mb-12">
            We understand the unique challenges faced by Asian Americans in mental health. 
            Our practice bridges cultural understanding with professional care, providing 
            a safe space where your experiences are heard and validated.
          </p>
          
          {/* Key Points */}
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-brand-primary-600 mb-3">
                Cultural Understanding
              </h3>
              <p className="text-brand-neutral-700">
                Our therapists understand the nuances of Asian American experiences, 
                from family dynamics to cultural identity.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-brand-primary-600 mb-3">
                Multilingual Services
              </h3>
              <p className="text-brand-neutral-700">
                We offer therapy in multiple Asian languages to ensure comfortable 
                and effective communication.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-brand-primary-600 mb-3">
                Holistic Approach
              </h3>
              <p className="text-brand-neutral-700">
                We integrate modern therapeutic techniques with cultural wisdom 
                for comprehensive care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Carousel Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-primary-800 mb-12">
            Meet Our Team
          </h2>
          
          <div className="relative max-w-5xl mx-auto">
            <div className="overflow-hidden rounded-2xl bg-brand-neutral-50">
              <div className="flex items-center">
                <button 
                  onClick={prevSlide}
                  className="absolute left-4 z-10 p-2 bg-brand-primary-500 text-white rounded-full shadow-lg hover:bg-brand-primary-600 transition-all"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <div className="w-full">
                  <div className="grid md:grid-cols-2 gap-8 p-8">
                    <div className="relative h-[400px] rounded-xl overflow-hidden bg-white">
                      <img 
                        src={teamMembers[currentSlide].image}
                        alt={teamMembers[currentSlide].name}
                        className="w-full h-full object-contain p-4"
                      />
                    </div>
                    <div className="flex flex-col justify-center">
                      <h3 className="text-2xl font-bold text-brand-primary-700 mb-2">
                        {teamMembers[currentSlide].name}
                      </h3>
                      <p className="text-lg font-medium text-brand-primary-600 mb-4">
                        {teamMembers[currentSlide].title}
                      </p>
                      <p className="text-brand-neutral-700 mb-6">
                        {teamMembers[currentSlide].bio}
                      </p>
                      <div className="space-y-2">
                        <p className="font-medium text-brand-primary-600">
                          Specialty: {teamMembers[currentSlide].specialty}
                        </p>
                        <p className="font-medium text-brand-primary-600">
                          Languages: {teamMembers[currentSlide].languages.join(", ")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={nextSlide}
                  className="absolute right-4 z-10 p-2 bg-brand-primary-500 text-white rounded-full shadow-lg hover:bg-brand-primary-600 transition-all"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              <div className="flex justify-center gap-2 pb-6">
                {teamMembers.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentSlide 
                        ? 'bg-brand-primary-500 w-4' 
                        : 'bg-brand-neutral-300'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="px-4 py-16 bg-gradient-to-b from-brand-neutral-50 to-brand-primary-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-primary-800 mb-12">
            Our Approach
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Cultural Competency",
                description: "We recognize the importance of cultural values, family dynamics, and intergenerational relationships in Asian American mental health."
              },
              {
                title: "Safe Space",
                description: "Our practice provides a judgment-free environment where you can explore your identity, relationships, and personal growth."
              },
              {
                title: "Evidence-Based Treatment",
                description: "We combine modern therapeutic techniques with cultural sensitivity to provide effective, personalized care."
              },
              {
                title: "Community Focus",
                description: "We're committed to serving the Asian American community and reducing stigma around mental health care."
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-brand-primary-600 mb-3">
                  {item.title}
                </h3>
                <p className="text-brand-neutral-700">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;