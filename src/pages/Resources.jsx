import { Link } from 'react-router-dom';


import { FadeInSection, CrisisCard } from '../components/shared/Animations';

const Resources = () => {
    const crisisLines = [
        {
            name: "Suicide and crisis lifeline",
            number: "988",
            description: "Free, confidential support available 24/7",
            callText: "Call or text"
        },
        {
            name: "Crisis text line",
            number: "741741",
            description: "Real-time assistance from trained counselors",
            callText: "Text HOME to"
        },
        {
            name: "LGBT National hotline",
            number: "1-888-843-4564",
            description: "Support with coming out, gender identity, and more",
            callText: "Call"
        },
        {
            name: "Trevor crisis hotline",
            number: "1-866-488-7386",
            description: "Crisis support for LGBTQIA+ youth",
            callText: "Call"
        },
        {
            name: "National sexual assault hotline",
            number: "1-800-656-4673",
            description: "Support and local sexual assault services",
            callText: "Call"
        },
        {
            name: "National domestic violence hotline",
            number: "1-800-799-7233",
            description: "Advocates for those in abusive situations",
            callText: "Call"
        },
        {
            name: "National abortion federation hotline",
            number: "1-800-772-9100",
            description: "Abortion referrals and financial assistance",
            callText: "Call"
        },
        {
            name: "Alcoholism & drug dependence hopeline",
            number: "1-800-622-2255",
            description: "Resources and assessment for addiction",
            callText: "Call"
        },
        {
            name: "National eating disorders helpline",
            number: "1-800-931-2237",
            description: "Support and treatment options for eating disorders",
            callText: "Call"
        }
    ];

    return (
        <div className="min-h-screen pt-20 sm:pt-24 md:pt-32 bg-brand-background-secondary">
            {/* Hero Section */}
            <section className="mb-12 sm:mb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-brand-text-primary mb-8 sm:mb-12">
                            Resources for your mental health journey
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl text-brand-text-primary mb-4">
                            At <span className="font-semibold text-brand-text-primary">Mind Matters Center</span>, we offer various resources to support your emotional well-being.
                        </p>
                        <p className="text-base sm:text-lg md:text-xl text-brand-text-primary">
                            <span className="font-semibold">While we do not provide crisis services</span>, we've compiled helpful tools for managing stress, anxiety, and other mental health concerns.
                        </p>
                    </div>
                </div>
            </section>

            {/* California Resources Section */}
            <section className="bg-brand-background-primary py-8 sm:py-10">
                <FadeInSection>
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-brand-text-primary mb-6">
                            Crisis resources
                        </h2>
                        <p className="text-base sm:text-lg text-brand-text-primary mb-6 text-center">
                            If you have an urgent or emergent need for mental health assistance, please CALL or TEXT Crisis Lifeline to 988, or call 911 and go to the nearest emergency department.
                        </p>
                        <a
                            href="https://focus.senate.ca.gov/mentalhealth/suicide"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-brand-sage text-white px-6 py-3 rounded-full 
                            hover:bg-opacity-90  transition-all duration-200 text-center
                            hover:transform hover:scale-105 active:scale-95"
                        >
                            Visit California mental health resources
                        </a>
                    </div>
                </FadeInSection>
            </section>

            {/* Crisis Resources Section */}
            <section className="bg-brand-background-primary py-8 sm:py-10">
                <FadeInSection direction="up" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="shadow-md border border-brand-gray-warm rounded-xl py-8 sm:py-10 px-4 sm:px-6">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-brand-text-primary mb-8 text-center">
                            24/7 Crisis resources
                        </h2>
                        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                            {crisisLines.map((line, index) => (
                                <CrisisCard key={index} {...line} index={index} />
                            ))}
                        </div>
                    </div>
                </FadeInSection>
            </section>

            {/* Help Section */}
            <section className="py-12 sm:py-16 bg-brand-background-secondary">
                <FadeInSection direction="up">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-brand-text-primary mb-6">
                            Need non-emergency support?
                        </h2>
                        <p className="text-base sm:text-lg text-brand-text-primary mb-8">
                            If you're looking for ongoing therapeutic support, we're here to help.
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
            </section>
        </div>
    );
};

export default Resources;