import { Link } from 'react-router-dom';
import { FadeInSection } from '../components/shared/Animations';
import AboutUsImg from '../assets/images/aboutus.jpg';
import AsianClientImg from '../assets/images/asian-client.jpg';

const About = () => {
  const values = [
    {
      title: "Cultural sensitivity",
      description: "Deep understanding of Asian American experiences and challenges",
      icon: (
        <svg className="w-10 h-10 sm:w-12 sm:h-12 text-brand-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      )
    },
    {
      title: "Evidence-based approach",
      description: "Utilizing proven therapeutic methods tailored to your needs",
      icon: (
        <svg className="w-10 h-10 sm:w-12 sm:h-12 text-brand-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Safe space",
      description: "Non-judgmental environment for healing and growth",
      icon: (
        <svg className="w-10 h-10 sm:w-12 sm:h-12 text-brand-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen pt-20 sm:pt-24 md:pt-32 bg-brand-background-secondary">
      {/* Hero Section */}
      <section className="mb-12 sm:mb-16 md:mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-brand-text-primary mb-6 sm:mb-8">
              Welcome to <span className="text-brand-text-primary">Mind Matters Center</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-brand-text-primary">
              An Asian-owned, women-owned company committed to providing compassionate,
              culturally sensitive therapy and wellness services.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-brand-background-primary">
        <div className="max-w-7xl mx-auto px-4">
          <FadeInSection >
            <div className="grid lg:grid-cols-2 gap-12 items-center">

              <div className="text-center lg:text-left max-w-xl mx-auto lg:mx-0">
                <h2 className="text-3xl font-serif text-brand-text-primary mb-6">
                  Our mission
                </h2>
                <p className="text-lg text-brand-text-primary/80 leading-relaxed">
                  At <strong className="text-brand-primary">Mind Matters Center</strong>,
                  we believe that everyone deserves the opportunity to heal, grow, and live a fulfilling life.
                  As an Asian-owned, women-owned company, we are deeply committed to providing compassionate,
                  culturally sensitive therapy and wellness services that empower individuals and couples
                  to navigate life's challenges and embrace emotional well-being.
                </p>
              </div>

              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg mx-auto lg:mx-0 w-full max-w-2xl">
                <img
                  src={AboutUsImg}
                  alt="Mind Matters Center peaceful therapy space"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Specialization Section */}
      {/* Specialization Section */}
      <section className="py-8 sm:py-10 bg-brand-background-secondary">
        <div className="max-w-7xl mx-auto px-4">
          <FadeInSection>
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="relative h-[250px] sm:h-[300px] rounded-xl overflow-hidden shadow-lg mx-auto lg:mx-0 w-full max-w-xl order-2 lg:order-1">
                <img
                  src={AsianClientImg}
                  alt="Asian client in therapy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <div className="text-center lg:text-left max-w-xl mx-auto lg:mx-0 order-1 lg:order-2">
                <h2 className="text-2xl sm:text-3xl font-serif text-brand-text-primary mb-4">
                  Our expertise
                </h2>
                <p className="text-base sm:text-lg text-brand-text-primary/80 leading-relaxed">
                  We specialize in working with Asian American clients, understanding the unique cultural
                  experiences and struggles that shape their mental health. Our team of experienced
                  therapists offers personalized support for anxiety, trauma, relationship issues,
                  and other life stressors.
                </p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>
      {/* Approach Section */}
      < section className="py-6 sm:py-8 bg-gradient-to-b from-brand-background-primary to-brand-background-secondary" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection className="text-center mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-brand-text-primary">
              Our therapeutic approach
            </h2>
          </FadeInSection>
          <FadeInSection direction="up">
            <div className="max-w-4xl mx-auto p-4 sm:p-5 backdrop-blur-sm  mb-16">
              <p className="text-base sm:text-lg text-brand-text-primary mb-6 leading-relaxed">
                Our approach is rooted in a blend of evidence-based therapies—like Cognitive Behavioral Therapy (CBT),
                Trauma-focused therapy, mindfulness, and relational therapy—combined with cultural sensitivity and respect.
                We create a safe and non-judgmental space where you can explore your feelings, gain clarity, and develop the tools you need to thrive.
              </p>
              <p className="text-base sm:text-lg text-brand-text-primary leading-relaxed">
                We are passionate about creating a welcoming and inclusive space for all. We aim to help
                you find healing, balance, and empowerment in every aspect of your life. Whether through
                individual therapy, couples counseling, or wellness coaching, we are here to walk alongside
                you every step of the way.
              </p>
            </div>
          </FadeInSection>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="flex-1 basis-[calc(100%-1.5rem)] sm:basis-[calc(50%-1.5rem)] md:basis-[calc(33.333%-1.5rem)] 
                  min-w-[280px] max-w-[400px] bg-white p-6 rounded-xl shadow-lg border border-brand-gray-warm
                  text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-brand-text-primary mb-2">
                  {value.title}
                </h3>
                <p className="text-base text-brand-text-primary">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section >

      {/* CTA Section */}
      < section className="py-8 sm:py-10 md:py-12 bg-brand-background-secondary" >
        <FadeInSection direction="up" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-brand-text-primary mb-4 sm:mb-6">
              Ready to begin your journey?
            </h2>
            <p className="text-base sm:text-lg text-brand-text-primary mb-6 sm:mb-8">
              Take the first step towards healing and growth with Mind Matters Center.
            </p>
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
        </FadeInSection>
      </section >
    </div >
  );
};

export default About;