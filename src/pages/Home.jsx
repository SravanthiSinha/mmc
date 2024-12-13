import { Link } from 'react-router-dom';
import heroImage from '../assets/images/hero-background.jpg';
import IndividualTherapy from '../assets/images/individual-therapy.svg';
import CouplesTherapy from '../assets/images/couples-therapy.svg';
import WellNessCoaching from '../assets/images/wellness-coaching.svg';

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
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-brand-text-primary mb-4 md:mb-6">
                Empowering Healing for AAPI, BIPOC
              </h1>
              <p className="text-xl sm:text-2xl md:text-3xl text-brand-text-primary/90 mb-6 md:mb-8">
                Accessible, Inclusive Virtual Therapy for Diverse Communities in California
              </p>
              <Link
                to="/book-consultation"
                className="inline-block bg-brand-coral text-white text-lg sm:text-xl md:text-2xl font-bold px-6 py-3 rounded-full
                  hover:bg-opacity-90 transition-colors duration-200"
              >
                Book a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* It's Never Too Late Section */}
      <section className="py-12 md:py-20 bg-brand-background-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
            {/* Left Column */}
            <div className="flex-1 flex flex-col space-y-6 md:space-y-8">
              <h2 className="text-2xl md:text-3xl font-serif text-brand-text-secondary">
              It’s Never Too Late to Start the Journey of Healing
              </h2>
              <div className="flex flex-col space-y-4">
                {checklistItems.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <svg className="w-5 h-5 mt-1 text-brand-sage flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                    </svg>
                    <span className="text-base md:text-lg text-brand-text-secondary">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column */}
            <div className="flex-1 flex flex-col justify-center space-y-6 md:space-y-12 mt-8 lg:mt-0">
              <p className="text-3xl md:text-4xl lg:text-5xl text-brand-text-secondary font-semibold">
                Culturally <span className="text-brand-coral">Sensitive</span> Therapy That Meets You Where You Are
              </p>
              <p className="text-xl md:text-2xl lg:text-3xl text-brand-text-secondary">
                At Mind Matters Center, we provide inclusive, compassionate care to help you find clarity, balance, and empowerment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Not Alone Section */}
      <section className="py-12 md:py-20 bg-brand-background-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-brand-text-secondary mb-6 md:mb-8">
              You Are Not Alone – We're Here to Help You Reclaim Your Life
            </h2>
            <p className="text-base md:text-xl text-brand-text-secondary">
            Life’s challenges can feel isolating, but you don’t have to face them alone.
            At Mind Matters Center, we’re committed to walking alongside you on your journey toward healing and growth.
            Our dedicated therapists provide the support and understanding you need to overcome obstacles and start living your life with confidence and peace.
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-12 md:py-24 bg-brand-background-primary">
        <div className="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="bg-neutral-150 rounded-lg shadow-2xl p-8 md:p-12 " >
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-brand-yellow mb-6 md:mb-8">
                What We Offer
              </h2>
              <p className="text-base md:text-xl text-brand-text-secondary">
                We specialize in providing culturally sensitive therapy services, with a focus on supporting Asian American individuals and couples.
                Whether you're navigating anxiety, trauma, relationship challenges, or other life stressors, we tailor our approach to meet your unique needs.
                Our therapists draw from a wide range of therapeutic modalities, including Cognitive Behavioral Therapy (CBT),
                Trauma-Focused Therapy, mindfulness practices, relational therapy, psychodynamic therapy, and more, to help you achieve lasting healing in a safe,
                compassionate environment. Whatever your path to wellness looks like, we're here to support you every step of the way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 md:py-20 bg-brand-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-serif text-brand-yellow mb-8 md:mb-12">
              Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
              {/* Service Cards */}
              <div className="bg-white p-6 rounded-lg shadow-sm h-full">
                <div className="w-32 h-32 md:w-48 md:h-48 mx-auto mb-4">
                  <img src={IndividualTherapy} alt="Individual Therapy" className="w-full h-full" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-2 text-brand-sage">Individual Therapy</h3>
                <p className="text-brand-text-secondary text-center">
                  One-on-one sessions focused on your personal growth and healing journey.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm h-full">
                <div className="w-32 h-32 md:w-48 md:h-48 mx-auto mb-4">
                  <img src={CouplesTherapy} alt="Couples Therapy" className="w-full h-full" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-2 text-brand-sage">Couples Therapy</h3>
                <p className="text-brand-text-secondary text-center">
                  Building stronger relationships through open communication and understanding.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm h-full lg:col-span-1 md:col-span-2 lg:col-span-1">
                <div className="w-32 h-32 md:w-48 md:h-48 mx-auto mb-4">
                  <img src={WellNessCoaching} alt="Wellness Coaching" className="w-full h-full" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-2 text-brand-sage">Wellness Coaching</h3>
                <p className="text-brand-text-secondary text-center">
                  Holistic approach to achieving balance in mind, body, and spirit.
                </p>
              </div>
            </div>

            {/* Final CTA */}
            <div className="mt-12 md:mt-16">
              <p className="text-xl md:text-2xl lg:text-3xl text-brand-text-secondary mb-8">
                <span className="font-semibold">Take the First Step Toward Healing:</span> Reach out today to schedule your consultation. Together, we can begin your path to emotional well-being and a more fulfilling life.
              </p>
              <Link
                to="/book-consultation"
                className="inline-block bg-brand-coral text-white text-lg md:text-2xl font-bold px-6 py-3 rounded-full
                  hover:bg-opacity-90 transition-colors duration-200"
              >
                Book a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;