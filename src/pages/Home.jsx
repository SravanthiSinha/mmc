import { Link } from 'react-router-dom';
import heroImage from '../assets/images/hero-background.jpg';
import IndividualTherapy from '../assets/images/individual-therapy.svg';
import CouplesTherapy from '../assets/images/couples-therapy.svg';
import WellNessCoaching from '../assets/images/wellness-coaching.svg';
import { FadeInSection, HoverCard } from '../components/shared/Animations';
import { BOOKING_URL } from '../constants';

const Home = () => {
  const checklistItems = [
    "Feeling anxious or overwhelmed by life's demands?",
    "Struggling with cultural identity or intergenerational conflicts?",
    "Battling negative thought patterns or self-doubt?",
    "Finding it difficult to connect in your relationships?",
    "Seeking a safe space to navigate your immigrant or BIPOC experience?",
    "Wanting support for stress, trauma, or life transitions?"
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
                  className="inline-block bg-brand-coral text-white text-lg sm:text-xl md:text-2xl font-bold px-6 py-3 rounded-full
                    hover:bg-brand-coralLight transition-colors duration-200"
                >
                  Book a consultation
                </Link>
                <span className="text-brand-text-secondary text-sm sm:text-base md:text-lg mt-2">
                  *We also offer a free 20-minute initial consultation
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* It's Never Too Late Section */}

      <section className="py-12 md:py-20 bg-brand-background-primary">
        <FadeInSection delay={100}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
              {/* Left Column */}
              <div className="flex-1 flex flex-col space-y-6 md:space-y-8">
                <h2 className="text-2xl md:text-3xl font-serif text-brand-text-primary">
                  It’s never too late to start the journey of healing
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


      {/* Not Alone Section */}
      <section className="py-12 md:py-20 bg-brand-background-secondary">
        <FadeInSection delay={100}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-brand-text-primary mb-6 md:mb-8">
                You are not alone – We're here to help you reclaim your life
              </h2>
              <p className="text-base md:text-xl text-brand-text-primary">
                Life’s challenges can feel isolating, but you don’t have to face them alone.
                At Mind Matters Center, we’re committed to walking alongside you on your journey toward healing and growth.
                Our dedicated therapists provide the support and understanding you need to overcome obstacles and start living your life with confidence and peace.
              </p>
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* What We Offer Section */}
      <section className="py-12 md:py-24 bg-brand-background-primary">
        <FadeInSection delay={100}>
          <div className="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8">
            <div className="bg-neutral-150 rounded-lg shadow-2xl p-8 md:p-12 " >
              <div className="text-center">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-brand-text-primary mb-6 md:mb-8">
                  What we offer
                </h2>
              </div>
              <p className="text-base md:text-xl text-brand-text-primary">
                We specialize in providing culturally sensitive therapy services, with a focus on supporting Asian American individuals and couples.
                Whether you're navigating anxiety, trauma, relationship challenges, or other life stressors, we tailor our approach to meet your unique needs.
                Our therapists draw from a wide range of therapeutic modalities, including Cognitive Behavioral Therapy (CBT),
                Trauma-Focused Therapy, mindfulness practices, relational therapy, psychodynamic therapy, and more, to help you achieve lasting healing in a safe,
                compassionate environment. Whatever your path to wellness looks like, we're here to support you every step of the way.
              </p>
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* Services Section */}
      <section className="py-12 md:py-20 bg-brand-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-xl md:text-3xl lg:text-5xl font-serif text-brand-text-primary mb-8 md:mb-12">
              Our services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
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
                <FadeInSection key={index} delay={index * 100}>
                  <HoverCard className="bg-white p-6 rounded-lg shadow-sm h-full">
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

            {/* Final CTA */}

            <FadeInSection delay={400} className="mt-12 md:mt-16 text-center">
              <section className='flex flex-col items-center'>
                <p className="text-xl md:text-2xl lg:text-3xl text-brand-text-primary mb-8">
                  <span className="font-semibold">Take the first step toward healing</span>
                </p>
                <p className="text-lg md:text-xl lg:text-3xl text-brand-text-primary mb-8">
                  Reach out today to schedule your consultation. Together, we can begin your path to emotional well-being and a more fulfilling life.
                </p>

                <div className="flex flex-col items-center gap-2">
                  <Link
                    to={BOOKING_URL} target="_blank"
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
              </section>
            </FadeInSection>

          </div>
        </div>
      </section>
    </>
  );
};

export default Home;