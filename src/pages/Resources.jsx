import { Link } from 'react-router-dom';

const Resources = () => {
    const crisisLines = [
        {
            name: "Suicide and Crisis Lifeline",
            number: "988",
            description: "Free, confidential support available 24/7",
            callText: "Call or text"
        },
        {
            name: "Crisis Text Line",
            number: "741741",
            description: "Real-time assistance from trained counselors",
            callText: "Text HOME to"
        },
        {
            name: "LGBT National Hotline",
            number: "1-888-843-4564",
            description: "Support with coming out, gender identity, and more",
            callText: "Call"
        },
        {
            name: "Trevor Crisis Hotline",
            number: "1-866-488-7386",
            description: "Crisis support for LGBTQIA+ youth",
            callText: "Call"
        },
        {
            name: "National Sexual Assault Hotline",
            number: "1-800-656-4673",
            description: "Support and local sexual assault services",
            callText: "Call"
        },
        {
            name: "National Domestic Violence Hotline",
            number: "1-800-799-7233",
            description: "Advocates for those in abusive situations",
            callText: "Call"
        },
        {
            name: "National Abortion Federation Hotline",
            number: "1-800-772-9100",
            description: "Abortion referrals and financial assistance",
            callText: "Call"
        },
        {
            name: "Alcoholism & Drug Dependence Hopeline",
            number: "1-800-622-2255",
            description: "Resources and assessment for addiction",
            callText: "Call"
        },
        {
            name: "National Eating Disorders Helpline",
            number: "1-800-931-2237",
            description: "Support and treatment options for eating disorders",
            callText: "Call"
        }
    ];

    return (


        <div className="min-h-screen pt-32 bg-brand-background-secondary">
            {/* Hero Section */}
            <section className="mb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-brand-text-secondary mb-12">
                            Resources for Your Mental Health Journey
                        </h1>
                        <p className="text-lg md:text-xl text-brand-text-secondary mb-2">
                            At <span className="font-semibold text-brand-yellow">Mind Matters Center</span>, we offer various resources to support your emotional well-being.
                        </p>
                        <p className="text-lg md:text-xl text-brand-text-secondary">
                            <span className="font-semibold">While we do not provide crisis services</span>, we've compiled helpful tools for managing stress, anxiety, and other mental health concerns.
                        </p>
                    </div>
                </div>
            </section>

            {/* California Resources Section */}
            <section className="bg-brand-background-primary py-10">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
                    <h2 className="text-2xl md:text-3xl font-serif text-brand-text-secondary mb-6">
                        Crisis Resources
                    </h2>
                    <p className="text-lg text-brand-text-secondary mb-6">
                        If you have an urgent or emergent need for mental health assistance, please CALL or TEXT Crisis Lifeline to 988, or call 911 and go to the nearest emergency department.
                    </p>
                    <a
                        href="https://focus.senate.ca.gov/mentalhealth/suicide"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-brand-sage text-white px-6 py-3 rounded-full hover:bg-opacity-90 transition-colors duration-200"
                    >
                        Visit California Mental Health Resources
                    </a>
                </div>
            </section>

            {/* Crisis Resources Section */}
            <section className="bg-brand-background-primary py-10">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8   shadow-md border border-brand-gray-warm rounded-md py-10 px-30">
                    <h2 className="text-2xl md:text-3xl font-serif text-brand-yellow mb-8 text-center">
                        24/7 Crisis Resources
                    </h2>
                    <div className="flex flex-wrap -m-3 justify-center ">
                        {crisisLines.map((line, index) => (
                          <div
                          key={index}
                          className="w-full md:w-1/2 p-3"
                      >
                          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 h-full border border-brand-gray-warm flex flex-col">
                              <div className="flex-grow">
                                  <h3 className="text-lg font-semibold text-brand-text-secondary mb-2">
                                      {line.name}
                                  </h3>
                                  <p className="text-brand-text-secondary mb-4 text-small">
                                      {line.description}
                                  </p>
                              </div>
                              <div className="bg-brand-gray-warm p-4 rounded-full mt-auto">
                                  <div className="flex items-center justify-center gap-2">
                                      <span className="text-brand-text-secondary whitespace-nowrap">{line.callText}</span>
                                      <span className="font-bold text-brand-coral whitespace-nowrap">
                                          {line.number}
                                      </span>
                                  </div>
                              </div>
                          </div>
                      </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Help Section */}
            <section className="py-16 bg-brand-background-primary">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl md:text-3xl font-serif text-brand-text-secondary mb-6">
                        Need Non-Emergency Support?
                    </h2>
                    <p className="text-lg text-brand-text-secondary mb-8">
                        If you're looking for ongoing therapeutic support, we're here to help.
                    </p>
                    <Link
                        to="/book-consultation"
                        className="inline-block bg-brand-coral text-white text-lg font-bold px-6 py-3 rounded-full
             hover:bg-opacity-90 transition-colors duration-200"
                    >
                        Book a Consultation
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Resources;