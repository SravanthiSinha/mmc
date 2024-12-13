import { Link } from 'react-router-dom';

const About = () => {
  const values = [
    {
      title: "Cultural Sensitivity",
      description: "Deep understanding of Asian American experiences and challenges",
      icon: (
        <svg className="w-12 h-12 text-brand-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      )
    },
    {
      title: "Evidence-Based Approach",
      description: "Utilizing proven therapeutic methods tailored to your needs",
      icon: (
        <svg className="w-12 h-12 text-brand-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Safe Space",
      description: "Non-judgmental environment for healing and growth",
      icon: (
        <svg className="w-12 h-12 text-brand-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen pt-32 bg-brand-background-secondary">
      {/* Hero Section */}
      <section className="mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-brand-text-secondary mb-8">
              Welcome to <span className="text-brand-yellow">Mind Matters Center</span>
            </h1>
            <p className="text-lg md:text-xl text-brand-text-secondary mb-8">
              An Asian-owned, women-owned company committed to providing compassionate,
              culturally sensitive therapy and wellness services.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-brand-background-primary py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto text-brand-text-secondary">
            <p className="text-xl mb-6">
              At <strong className="text-brand-yellow">Mind Matters Center</strong>, we believe that everyone deserves the opportunity to heal, grow, and live a fulfilling life.
              As an Asian-owned, women-owned company, we are deeply committed to providing compassionate,
              culturally sensitive therapy and wellness services that empower individuals and couples to navigate life’s challenges and embrace emotional well-being.
            </p>
            <p className="text-xl mb-6">
              We specialize in working with Asian American clients, understanding the unique cultural experiences and struggles that shape their mental health.
              Whether you’re dealing with anxiety, trauma, relationship issues, or other life stressors, our team of experienced therapists is here to offer personalized support tailored to your needs.
            </p>
          </div>
        </div>
      </section>
      {/* Approach Section */}
      <section className="bg-brand-background-primary py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-serif text-brand-text-secondary mb-8 text-center">
            Our Therapeutic Approach
          </h2>

          <p className="text-lg text-brand-text-secondary mb-6">
            Our approach is rooted in a blend of evidence-based therapies—like Cognitive Behavioral Therapy (CBT),
            Trauma-Focused Therapy, mindfulness, and relational therapy—combined with cultural sensitivity and respect.
            We create a safe and non-judgmental space where you can explore your feelings, gain clarity, and develop the tools you need to thrive.
          </p>
          <p className="text-lg text-brand-text-secondary mb-8">
            We are passionate about creating a welcoming and inclusive space for all. We aim to help
            you find healing, balance, and empowerment in every aspect of your life. Whether through
            individual therapy, couples counseling, or wellness coaching, we are here to walk alongside
            you every step of the way.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg border border-brand-gray-warm text-center">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-brand-text-secondary mb-2">
                  {value.title}
                </h3>
                <p className="text-brand-text-secondary">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-10 bg-brand-background-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-serif text-brand-text-secondary mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-lg text-brand-text-secondary mb-8">
            Take the first step towards healing and growth with Mind Matters Center.
          </p>
          <Link
            to="/book-consultation"
            className="inline-block bg-brand-coral text-white text-lg md:text-xl font-bold px-6 py-3 
              rounded-full hover:bg-opacity-90 transition-colors duration-200"
          >
            Book a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;