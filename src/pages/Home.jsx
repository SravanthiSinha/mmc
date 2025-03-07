import { Link } from 'react-router-dom';
import heroImage from '../assets/images/hero-background.jpg';
import IndividualTherapyImg from '../assets/images/individual-therapy.svg';
import CouplesTherapyImg from '../assets/images/couples-therapy.svg';
import WellNessCoachingImg from '../assets/images/wellness-coaching.svg';
import { FadeInSection, HoverCard } from '../components/shared/Animations';
import BookNowCTA from '../components/shared/BookNowCTA';
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
      title: 'Trauma Therapy',
      path: '/trauma-therapy',
      description: 'Healing from trauma with evidence-based approaches for strength and recovery'
    },
    {
      title: 'Therapy for Women',
      path: '/womens-therapy',
      description: 'Supporting women through unique challenges, life transitions, and personal growth'
    },
    {
      title: 'Therapy for Asian Americans and BIPOC',
      path: '/asia-bipoc-therapy',
      description: 'Culturally sensitive therapy for navigating identity and systemic challenges'
    },
    {
      title: 'Anxiety Therapy',
      path: '/anxiety-therapy',
      description: 'Evidence-based techniques to manage worry and regain a sense of calm'
    },
    {
      title: 'Depression Therapy',
      path: '/depression-therapy',
      description: 'Support for understanding emotions and rediscovering motivation and joy'
    },
    {
      title: 'Relationship Therapy',
      path: '/relationship-counseling',
      description: 'Guidance to build communication, trust, and emotional connection'
    },
    {
      title: 'Family & Cultural Dynamics',
      path: '/family-cultural-dynamic',
      description: 'Navigating intergenerational issues and family expectations with compassion'
    },
    {
      title: 'Therapy for Burnout and Stress',
      path: '/stress-burnout',
      description: 'Restoring balance and well-being in your personal and professional life'
    }
  ];

  const features = [
    {
      title: "TELEHEALTH",
      description: "Virtual therapy sessions across CA.",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 21V19C6 17.9391 6.42143 16.9217 7.17157 16.1716C7.92172 15.4214 8.93913 15 10 15H14C15.0609 15 16.0783 15.4214 16.8284 16.1716C17.5786 16.9217 18 17.9391 18 19V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M3 10V15M3 15H5M3 15V18M21 10V15M21 15H19M21 15V18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      title: "NO WAIT LIST",
      description: "Convenient appointments available when it works for you!",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 8V12L15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      title: "SERVING DIVERSE POPULATIONS",
      description: "A safe and welcoming space for clients from all walks of life",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    }
  ];

  const FlowerIcon = () => (
    <svg width="60" height="60" viewBox="0 0 40 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Flower petals */}
      <circle cx="20" cy="10" r="5" stroke="currentColor" strokeWidth="1" fill="none" />
      <circle cx="15" cy="15" r="5" stroke="currentColor" strokeWidth="1" fill="none" />
      <circle cx="25" cy="15" r="5" stroke="currentColor" strokeWidth="1" fill="none" />
      <circle cx="20" cy="20" r="5" stroke="currentColor" strokeWidth="1" fill="none" />
      {/* Center */}
      <circle cx="20" cy="15" r="2" stroke="currentColor" strokeWidth="1" fill="none" />
    </svg>
  );

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
            <div className="max-w-5xl mx-auto md:mx-0">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-brand-text-secondary mb-4 md:mb-6">
                Virtual therapy in California for Asian-American and BIPOC communities on their path to healing
              </h1>
              <p className="text-xl sm:text-2xl md:text-3xl text-brand-text-secondary/90 mb-6 md:mb-8">
                Inclusive virtual therapy in California for diverse communities
              </p>
              <div className="flex flex-col items-start gap-2">
                <BookNowCTA size="lg" />
                <span className="text-brand-text-secondary text-sm sm:text-base md:text-lg mt-2">
                  *We also offer a free 20-minute initial consultation
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features section */}
      <section className="py-6 md:py-20 bg-brand-background-secondary text-brand-text-primary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <h2 className="text-xl md:text-2xl text-center mb-12">
              Psychological services for adults & teens in centennial and surrounding areas in California.
            </h2>
          </FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {features.map((feature, index) => (
              <FadeInSection key={index} delay={index * 100}>
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="bg-white/10 p-4 rounded-full mb-2 text-brand-sage">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg tracking-wide text-brand-sage">
                    {feature.title}
                  </h3>
                  <div className="h-px w-12 bg-brand-sage/20 mx-auto"></div>
                  <p className="text-base">
                    {feature.description}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <BookNowCTA />
          </div>
        </div>
      </section>

      {/* Are You Experiencing Section - Identify Pain Points */}
      <section className="py-12 md:py-20 bg-brand-background-primary">
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
                <p className="text-2xl md:text-3xl lg:text-4xl text-brand-text-primary font-semibold">
                  We support Asian Americans and BIPOC communities using culturally <span className="text-brand-coral">sensitive</span> therapy to meet you where you are
                </p>
                <p className="text-xl md:text-2xl lg:text-3xl text-brand-text-primary">
                  At Mind Matters Center, we provide inclusive, compassionate care to help you find clarity, balance, and empowerment.
                </p>
              </div>
            </div>
            <div className="mt-6 text-center">
              <BookNowCTA />
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* Not Alone Section - Empathy and Support */}
      <section className="py-12 md:py-20 bg-brand-background-secondary">
        <FadeInSection delay={100}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-brand-text-primary mb-6 md:mb-8">
                You are not alone – We're here to help you reclaim your life
              </h2>
              <p className="text-base md:text-xl text-brand-text-primary">
                At Mind Matters Center, we're committed to walking alongside you on your journey toward healing and growth.
                Our dedicated therapists in California provide the support and understanding you need to overcome obstacles and start living your life with confidence and peace.
              </p>
              <div className="mt-8">
                <BookNowCTA />
              </div>
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* Team Introduction Section */}
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
                {/* Added BookNowCTA button under the image */}
                <div className="mt-4 flex justify-center">
                  <BookNowCTA />
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

      {/* Services Section - What We Offer */}
      <section className="py-12 md:py-20 bg-brand-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-xl md:text-3xl lg:text-5xl font-serif text-brand-text-primary mb-6 md:mb-8">
              Our Therapy Services
            </h2>

            {/* What We Offer Content */}
            <div className="max-w-4xl mx-auto mb-12 md:mb-16">
              <p className="text-base md:text-lg text-brand-text-primary mb-6">
                We specialize in providing culturally sensitive therapy services, with a focus on supporting Asian American individuals and couples.
                Whether you're navigating anxiety, trauma, relationship challenges, or other life stressors, we tailor our approach to meet your unique needs.
              </p>
              <div className="mt-6">
                <BookNowCTA />
              </div>
            </div>

            <div className="flex flex-wrap justify-center max-w-6xl mx-auto">
              {[
                {
                  icon: IndividualTherapyImg,
                  title: "Individual therapy",
                  description: "One-on-one sessions focused on your personal growth and healing journey.",
                  path: "/individual-therapy"
                },
                {
                  icon: CouplesTherapyImg,
                  title: "Couples therapy",
                  description: "Building stronger relationships through open communication and understanding.",
                  path: "/couples-therapy"
                },
                {
                  icon: WellNessCoachingImg,
                  title: "Wellness coaching",
                  description: "Holistic approach to achieving balance in mind, body, and spirit.",
                  path: "/wellness-coaching"
                }
              ].map((service, index) => (
                <FadeInSection key={index} delay={index * 100} className="w-full md:w-1/2 lg:w-1/3 p-3">
                  <Link to={service.path} className="block h-full no-underline">
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
                  </Link>
                </FadeInSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Section - Areas of Expertise */}
      {/* Specialties Section - Areas of Expertise */}
      <section className="py-12 md:py-20 bg-brand-background-primary">
        <FadeInSection delay={100}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-brand-text-primary mb-4">
                Areas of Focus
              </h2>
              <p className="text-base md:text-lg text-brand-text-primary/90 max-w-3xl mx-auto">
                Our therapeutic approaches are tailored to your unique needs, addressing specific challenges with cultural sensitivity and evidence-based care.
              </p>
            </div>

            <div className="flex flex-wrap -mx-3">
              {specialties.slice(0, 4).map((specialty, index) => (
                <FadeInSection key={index} delay={index * 100} className="w-full sm:w-1/2 lg:w-1/4 px-3 mb-6">
                  <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 h-full group overflow-hidden">
                    <div className="p-6 flex flex-col h-full">
                      <div className="mb-4 text-brand-sage flex justify-center">
                        <FlowerIcon />
                      </div>
                      <h3 className="text-lg font-medium text-brand-text-primary mb-3 text-center group-hover:text-brand-coral transition-colors">
                        {specialty.title}
                      </h3>
                      <p className="text-brand-text-primary/80 mb-6 text-center flex-grow">
                        {specialty.description}
                      </p>
                      <Link
                        to={specialty.path}
                        className="mt-auto mx-auto uppercase text-sm tracking-wider font-medium text-brand-sage hover:text-brand-coral transition-colors flex items-center"
                      >
                        Learn More
                        <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </FadeInSection>
              ))}
            </div>

            <div className="flex flex-wrap -mx-3">
              {specialties.slice(4).map((specialty, index) => (
                <FadeInSection key={index + 4} delay={(index + 4) * 100} className="w-full sm:w-1/2 lg:w-1/4 px-3 mb-6">
                  <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 h-full group overflow-hidden">
                    <div className="p-6 flex flex-col h-full">
                      <div className="mb-4 text-brand-sage flex justify-center">
                        <FlowerIcon />
                      </div>
                      <h3 className="text-lg font-medium text-brand-text-primary mb-3 text-center group-hover:text-brand-coral transition-colors">
                        {specialty.title}
                      </h3>
                      <p className="text-brand-text-primary/80 mb-6 text-center flex-grow">
                        {specialty.description}
                      </p>
                      <Link
                        to={specialty.path}
                        className="mt-auto mx-auto uppercase text-sm tracking-wider font-medium text-brand-sage hover:text-brand-coral transition-colors flex items-center"
                      >
                        Learn More
                        <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </FadeInSection>
              ))}
            </div>

            <div className="flex justify-center mt-8">
              <BookNowCTA />
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* Additional Resources Section */}
      <section className="py-12 md:py-20 bg-brand-background-primary">
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
                <Link to="/chinese-services" className="block h-full">
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
      <section className="py-12 md:py-20 bg-brand-background-secondary">
        <FadeInSection delay={400}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-xl md:text-2xl lg:text-3xl text-brand-text-primary mb-8">
              <span className="font-semibold">Take the first step toward healing</span>
            </p>
            <p className="text-lg md:text-xl text-brand-text-primary mb-8">
              Reach out today to schedule your consultation. Together, we can begin your path to emotional well-being and a more fulfilling life.
            </p>

            <div className="flex flex-col items-center gap-2">
              <BookNowCTA size="lg" />
              <span className="text-sm sm:text-base text-brand-text-primary/80 mt-2">
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