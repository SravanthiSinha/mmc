import { Link } from 'react-router-dom';
import heroImage from '../assets/images/hero-background.jpg';
import IndividualTherapy from '../assets/images/individual-therapy.svg';
import CouplesTherapy from '../assets/images/couples-therapy.svg';
import WellNessCoaching from '../assets/images/wellness-coaching.svg';
import { FadeInSection, HoverCard } from '../components/shared/Animations';
import { BOOKING_URL } from '../constants';
import ZengImg from '../assets/images/profile_pics/zeng.jpg';

const Home = () => {
  const checklistItems = [
    "Feeling anxious or overwhelmed by life's demands?",
    "Struggling with cultural identity or intergenerational conflicts?",
    "Battling negative thought patterns or self-doubt?",
    "Finding it difficult to connect in your relationships?",
    "Seeking a safe space to navigate your immigrant or BIPOC experience?",
    "Wanting support for stress, trauma, or life transitions?"
  ];

  // Our specialties for quick access
  const specialties = [
    {
      title: 'Anxiety & Depression',
      path: '/anxiety-depression',
      description: 'Relief from persistent worry, sadness, and negative thoughts'
    },
    {
      title: 'Trauma & PTSD',
      path: '/trauma-ptsd',
      description: 'Processing difficult experiences in a safe, supportive environment'
    },
    {
      title: 'Relationship Counseling',
      path: '/relationship-counseling',
      description: 'Rebuilding connection, trust, and communication'
    },
    {
      title: 'Family & Cultural Dynamics',
      path: '/family-cultural-dynamic',
      description: 'Navigating cultural identity and family expectations'
    },
    {
      title: 'Stress & Burnout',
      path: '/stress-burnout',
      description: 'Finding balance and restoring wellbeing'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`
          }}
        ></div>

        {/* Content */}
        <div className="relative z-20 min-h-screen flex items-center">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 md:pt-48">
            <div className="max-w-4xl mx-auto md:mx-0">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-brand-text-secondary mb-4 md:mb-6">
                Empowering healing for AAPI, BIPOC
              </h1>
              <p className="text-xl sm:text-2xl md:text-3xl text-brand-text-secondary/90 mb-6 md:mb-8">
                Accessible, inclusive virtual therapy for diverse communities in California
              </p>
              <div className="flex flex-col items-start gap-2">
                <Link
                  to={BOOKING_URL} target="_blank"
                  className="inline-block bg-brand-coral text-white text-xl font-bold px-6 py-3 rounded-full
                    hover:bg-brand-coralLight transition-colors duration-200"
                >
                  Book Now
                </Link>
                <span className="text-brand-text-secondary text-sm sm:text-base md:text-lg mt-2">
                  *We also offer a free 20-minute initial consultation
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Introduction Section - Personal Connection First */}
      <section className="py-12 md:py-20 bg-brand-background-primary">
        <FadeInSection delay={100}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-brand-text-primary mb-6">
                Our Clinical Team
              </h2>
              <p className="text-base md:text-xl text-brand-text-primary max-w-3xl mx-auto">
                Dedicated professionals committed to providing culturally responsive mental health care
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              {/* Featured Therapist */}
              <div className="md:w-1/2 lg:w-2/5">
                <div className="relative rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={ZengImg}
                    alt="Yajun (Stella) Zeng, LCSW"
                    className="w-full aspect-square md:aspect-auto md:h-[450px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl md:text-2xl font-serif text-white mb-2">
                      Yajun (Stella) Zeng, LCSW
                    </h3>
                    <p className="text-white/90 text-sm md:text-base">
                      Clinical Director | Mind Matters Center
                    </p>
                  </div>
                </div>
              </div>

              {/* Team Description */}
              <div className="md:w-1/2 lg:w-3/5">
                <blockquote className="italic text-lg md:text-xl text-brand-text-primary border-l-4 border-brand-sage pl-6 py-2 mb-6">
                  "At Mind Matters Center, we create a safe and culturally responsive space where clients feel seen, heard, and empowered to navigate life's challenges."
                </blockquote>
                <p className="text-base md:text-lg text-brand-text-primary mb-6">
                  As an Asian American immigrant and bilingual Licensed Clinical Social Worker, I understand the unique challenges that come with balancing cultural expectations, family dynamics, and personal growth.
                </p>
                <p className="text-base md:text-lg text-brand-text-primary mb-8">
                  Our approach integrates evidence-based treatment with cultural sensitivity to help you find healing, balance, and empowerment in every aspect of your life.
                </p>
                <Link
                  to="/our-team"
                  className="inline-flex items-center text-base md:text-lg font-medium text-brand-sage hover:text-brand-coral transition-colors"
                >
                  Meet our entire team
                  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* Are You Experiencing Section - Identify Pain Points */}
      <section className="py-12 md:py-20 bg-brand-background-secondary">
        <FadeInSection delay={100}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
              {/* Left Column */}
              <div className="flex-1 flex flex-col space-y-6 md:space-y-8">
                <h2 className="text-2xl md:text-3xl font-serif text-brand-text-primary">
                  It's never too late to start the journey of healing
                </h2>
                <div className="flex flex-col space-y-4">
                  {checklistItems.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <svg className="w-5 h-5 mt-1 text-brand-sage flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                      </svg>
                      <span className="text-base md:text-lg text-brand-text-primary">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column */}
              <div className="flex-1 flex flex-col justify-center space-y-6 md:space-y-12 mt-8 lg:mt-0">
                <p className="text-3xl md:text-4xl lg:text-5xl text-brand-text-primary font-semibold">
                  Culturally <span className="text-brand-coral">sensitive</span> therapy that meets you where you are
                </p>
                <p className="text-xl md:text-2xl lg:text-3xl text-brand-text-primary">
                  At Mind Matters Center, we provide inclusive, compassionate care to help you find clarity, balance, and empowerment.
                </p>
              </div>
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* Services Section - What We Offer */}
      <section className="py-12 md:py-20 bg-brand-background-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-xl md:text-3xl lg:text-5xl font-serif text-brand-text-primary mb-6 md:mb-8">
              Our services
            </h2>

            {/* What We Offer Content */}
            <div className="max-w-4xl mx-auto mb-12 md:mb-16">
              <p className="text-base md:text-lg text-brand-text-primary mb-6">
                We specialize in providing culturally sensitive therapy services, with a focus on supporting Asian American individuals and couples.
                Whether you're navigating anxiety, trauma, relationship challenges, or other life stressors, we tailor our approach to meet your unique needs.
              </p>
              <p className="text-base md:text-lg text-brand-text-primary">
                Our therapists draw from a wide range of therapeutic modalities, including Cognitive Behavioral Therapy (CBT),
                Trauma-Focused Therapy, mindfulness practices, relational therapy, psychodynamic therapy, and more, to help you achieve lasting healing in a safe,
                compassionate environment. Whatever your path to wellness looks like, we're here to support you every step of the way.
              </p>
            </div>

            <h3 className="text-lg md:text-2xl font-serif text-brand-text-primary mb-8 md:mb-10">
              Our therapeutic approaches
            </h3>

            <div className="flex flex-wrap justify-center max-w-6xl mx-auto">
              {[
                {
                  icon: IndividualTherapy,
                  title: "Individual therapy",
                  description: "One-on-one sessions focused on your personal growth and healing journey."
                },
                {
                  icon: CouplesTherapy,
                  title: "Couples therapy",
                  description: "Building stronger relationships through open communication and understanding."
                },
                {
                  icon: WellNessCoaching,
                  title: "Wellness coaching",
                  description: "Holistic approach to achieving balance in mind, body, and spirit."
                }
              ].map((service, index) => (
                <FadeInSection key={index} delay={index * 100} className="w-full md:w-1/2 lg:w-1/3 p-3">
                  <HoverCard className="bg-white p-6 rounded-lg shadow-lg h-full">
                    <div className="w-32 h-32 md:w-48 md:h-48 mx-auto mb-4 transition-transform duration-300 hover:scale-105">
                      <img src={service.icon} alt={service.title} className="w-full h-full" />
                    </div>
                    <h3 className="text-xl font-semibold text-center mb-2 text-brand-sage">
                      {service.title}
                    </h3>
                    <p className="text-brand-text-primary text-center">
                      {service.description}
                    </p>
                  </HoverCard>
                </FadeInSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Section - Areas of Expertise */}
      <section className="py-12 md:py-20 bg-brand-background-secondary">
        <FadeInSection delay={100}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-brand-text-primary mb-6">
                Explore Our Specialties
              </h2>
              <p className="text-base md:text-xl text-brand-text-primary max-w-3xl mx-auto">
                At Mind Matters Center, we offer specialized therapy services to address a range of challenges.
                Click below to learn more about each area of focus.
              </p>
            </div>

            <div className="flex flex-wrap justify-center">
              {specialties.map((specialty, index) => (
                <FadeInSection key={index} delay={index * 100 + 200} className="w-full sm:w-1/2 lg:w-1/3 p-3">
                  <Link
                    to={specialty.path}
                    className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group h-full"
                  >
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-brand-sage mb-3 group-hover:text-brand-coral transition-colors duration-200">
                        {specialty.title}
                      </h3>
                      <p className="text-brand-text-primary">{specialty.description}</p>
                      <div className="mt-4 text-brand-coral font-medium inline-flex items-center group-hover:translate-x-2 transition-transform duration-200">
                        Learn more
                        <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                </FadeInSection>
              ))}
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* Not Alone Section - Empathy and Support */}
      <section className="py-12 md:py-20 bg-brand-background-primary">
        <FadeInSection delay={100}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-brand-text-primary mb-6 md:mb-8">
                You are not alone – We're here to help you reclaim your life
              </h2>
              <p className="text-base md:text-xl text-brand-text-primary">
                Life's challenges can feel isolating, but you don't have to face them alone.
                At Mind Matters Center, we're committed to walking alongside you on your journey toward healing and growth.
                Our dedicated therapists provide the support and understanding you need to overcome obstacles and start living your life with confidence and peace.
              </p>
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* Additional Resources Section */}
      <section className="py-12 md:py-20 bg-brand-background-secondary">
        <FadeInSection delay={300}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-xl md:text-3xl font-serif text-brand-text-primary">
                Additional Resources
              </h2>
              <p className="text-base text-brand-text-primary/80 mt-2 max-w-2xl mx-auto">
                Explore more ways we can support your mental health journey
              </p>
            </div>

            <div className="flex flex-wrap justify-center max-w-5xl mx-auto">
              <div className="w-full sm:w-1/2 lg:w-1/3 p-3">
                <Link to="/resources" className="block h-full">
                  <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 flex flex-col items-center h-full border border-brand-gray-warm">
                    <div className="bg-brand-sage/10 p-4 rounded-full mb-4">
                      <svg className="w-8 h-8 text-brand-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-brand-text-primary mb-2">Mental Health Resources</h3>
                    <p className="text-brand-text-primary/70 text-center mb-4">Access crisis information and supportive materials for your wellbeing</p>
                    <span className="text-brand-sage mt-auto font-medium inline-flex items-center">
                      View resources
                      <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </div>

              <div className="w-full sm:w-1/2 lg:w-1/3 p-3">
                <Link to="/faq" className="block h-full">
                  <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 flex flex-col items-center h-full border border-brand-gray-warm">
                    <div className="bg-brand-sage/10 p-4 rounded-full mb-4">
                      <svg className="w-8 h-8 text-brand-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-brand-text-primary mb-2">Frequently Asked Questions</h3>
                    <p className="text-brand-text-primary/70 text-center mb-4">Find answers about insurance, fees, scheduling, and what to expect</p>
                    <span className="text-brand-sage mt-auto font-medium inline-flex items-center">
                      See FAQ
                      <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </div>

              <div className="w-full sm:w-1/2 lg:w-1/3 p-3">
                <Link to="/services" className="block h-full">
                  <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 flex flex-col items-center h-full border border-brand-gray-warm">
                    <div className="bg-brand-sage/10 p-4 rounded-full mb-4">
                      <svg className="w-8 h-8 text-brand-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-brand-text-primary mb-2">中文服务</h3>
                    <p className="text-brand-text-primary/70 text-center mb-4">Cultural and linguistic support for Chinese-speaking clients</p>
                    <span className="text-brand-sage mt-auto font-medium inline-flex items-center">
                      了解更多
                      <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </div>
            </div>

            {/* Secondary Links */}
            <div className="flex flex-col md:flex-row justify-center gap-4 mt-8">
              <Link
                to="/join-our-team"
                className="flex items-center p-4 rounded-lg bg-white border border-brand-gray-warm hover:bg-brand-sage/10 transition-all duration-200 shadow-sm hover:shadow-md"
              >
                <svg className="w-5 h-5 text-brand-sage mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
                <span className="font-medium text-brand-text-primary">Interested in joining our team?</span>
                <svg className="w-4 h-4 ml-2 text-brand-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>

              <Link
                to="/contact"
                className="flex items-center p-4 rounded-lg bg-white border border-brand-gray-warm hover:bg-brand-sage/10 transition-all duration-200 shadow-sm hover:shadow-md"
              >
                <svg className="w-5 h-5 text-brand-sage mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="font-medium text-brand-text-primary">Need to get in touch with us?</span>
                <svg className="w-4 h-4 ml-2 text-brand-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* Final CTA */}
      <section className="py-12 md:py-20 bg-brand-background-primary">
        <FadeInSection delay={400}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-xl md:text-2xl lg:text-3xl text-brand-text-primary mb-8">
              <span className="font-semibold">Take the first step toward healing</span>
            </p>
            <p className="text-lg md:text-xl text-brand-text-primary mb-8">
              Reach out today to schedule your consultation. Together, we can begin your path to emotional well-being and a more fulfilling life.
            </p>

            <div className="flex flex-col items-center gap-2">
              <Link
                to={BOOKING_URL} target="_blank"
                className="inline-block bg-brand-coral text-white text-base sm:text-lg md:text-xl font-bold 
              px-6 py-3 rounded-full hover:bg-brand-coralLight transition-all duration-200
              hover:transform hover:scale-105 active:scale-95"
              >
                Book Now
              </Link>
              <span className="text-sm sm:text-base text-brand-text-primary/80">
                Free 20 Minute Consultation
              </span>
            </div>
          </div>
        </FadeInSection>
      </section>
    </>
  );
};

export default Home;