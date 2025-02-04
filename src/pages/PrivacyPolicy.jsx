import React, { useState } from 'react';
import { FadeInSection, AnimatedFAQItem } from '../components/shared/Animations';

const PrivacyPolicy = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const formatContent = (content) => {
        if (typeof content === 'string') {
            return content.split('•').map(item => item.trim()).join('\\n• ');
        }
        return content;
    };


    const privacyContent = [
        {
            title: "WHAT IS CONSIDERED PERSONAL INFORMATION?",
            content: "Personal information refers to information such as your name, address, email address, geographic location, purchase history, gender, credit card information and browsing habits on our site."
        },
        {
            title: "WHAT INFORMATION DO WE COLLECT?",
            content: `We collect information from you when you register on the site, place an order, enter a contest or sweepstakes, respond to a survey or communication such as e-mail, or participate in another site feature.

      When ordering or registering, we may ask you for your name, e-mail address, mailing address, phone number, credit card information or other information. You may, however, visit our site anonymously.

      Like many websites, we use cookies to enhance your experience and gather information about visitors and visits to our websites. Please refer to the do we use cookies section below for information about cookies and how we use them.`
        },
        {
            title: "WE MAY PROCESS THE FOLLOWING CATEGORIES OF PERSONAL DATA ABOUT YOU:",
            content: (
                <ul className="list-disc pl-6 space-y-4">
                    <li><strong>Communication Data</strong>  that includes any communication that you send to us whether that be through the contact form on our website, through email, text, social media messaging, social media posting or any other communication that you send us. We process this data for the purposes of communicating with you, for record keeping and for the establishment, pursuance or defense of legal claims. Our lawful ground for this processing is our legitimate interests which in this case are to reply to communications sent to us, to keep records and to establish, pursue or defend legal claims.</li>
                    <li><strong>Customer Data</strong> that includes data relating to any purchases of goods and/or services such as your name, title, billing address, delivery address email address, phone number, contact details, purchase details and your card details. We process this data to supply the goods and/or services you have purchased and to keep records of such transactions. Our lawful ground for this processing is the performance of a contract between you and us and/or taking steps at your request to enter into such a contract.</li>
                    <li><strong>User Data</strong>that includes data about how you use our website and any online services together with any data that you post for publication on our website or through other online services. We process this data to operate our website and ensure relevant content is provided to you, to ensure the security of our website, to maintain back- ups of our website and/or databases and to enable publication and administration of our website, other online services and business. Our lawful ground for this processing is our legitimate interests which in this case are to enable us to properly administer our website and our business.</li>
                    <li><strong>Technical Data</strong>that includes data about your use of our website and online services such as your IP address, your login data, details about your browser, length of visit to pages on our website, page views and navigation paths, details about the number of times you use our website, time zone settings and other technology on the devices you use to access our website. The source of this data is from our analytics tracking system. We process this data to analyse your use of our website and other online services, to administer and protect our business and website, to deliver relevant website content and advertisements to you and to understand the effectiveness of our advertising. Our lawful ground for this processing is our legitimate interests which in this case are to enable us to properly administer our website and our business and to grow our business and to decide our marketing strategy.</li>
                    <li><strong>Marketing Data</strong> that includes data about your preferences in receiving marketing from us and our third parties and your communication preferences. We process this data to enable you to partake in our promotions such as sales offers, affiliate offers, free contests with give-aways, to deliver relevant website content and advertisements to you and measure or understand the effectiveness of this advertising. Our lawful ground for this processing is our legitimate interests which in this case are to study how customers use our products/services, to develop them, to grow our business and to decide our marketing strategy.</li>
                    <li>We may use Customer Data, User Data, Technical Data and Marketing Data to deliver relevant website content and advertisements to you (including Facebook adverts or other display advertisements) and to measure or understand the effectiveness of the advertising we serve you. Our lawful ground for this processing is legitimate interests which is to grow our business. We may also use such data to send other marketing communications to you. Our lawful ground for this processing is either consent or legitimate interests (namely to grow our business)</li>
                </ul>
            )
        },
        {
            title: "SENSITIVE DATA",
            content: `We do not collect any Sensitive Data about you. Sensitive data refers to data that includes details about your race or ethnicity, religious or philosophical beliefs, sex life, sexual orientation, political opinions, trade union membership, information about your health and genetic and biometric data. We do not collect any information about criminal convictions and offenses.`
        },
        {
            title: "MARKETING COMMUNICATIONS",
            content: `Our lawful ground of processing your personal data to send you marketing communications is either your consent or our legitimate interests (namely to grow our business).

      Under the Privacy and Electronic Communications Regulations, we may send you marketing communications from us if (i) you made a purchase or asked for information from us about our goods or services or (ii) you agreed to receive marketing communications and in each case you have not opted out of receiving such communications since. Under these regulations, if you are a limited company, we may send you marketing emails without your consent. However you can still opt out of receiving marketing emails from us at any time.

      You can ask us or third parties to stop sending you marketing messages at any time simply by unsubscribing from emails via the unsubscribe button which can be found at the bottom of each email or by sending an email with your request to stop receiving emails.

      If you opt out of receiving marketing communications this opt-out does not apply to personal data provided as a result of other transactions, such as purchases, warranty registrations etc.`
        },
        {
            title: "DISCLOSURE OF YOUR PERSONAL DATA",
            content: `We may have to share your personal data with the parties set out below:

      • Service providers who provide IT and system administration services.
      • Professional advisers including lawyers, bankers, auditors and insurers.
      • Government bodies that require us to report processing activities.
      • Third party technology platforms and advertisers that support the running and growth of Mind Matters Center.

      We require all third parties to whom we transfer your data to respect the security of your personal data and to treat it in accordance with the law. We only allow such third parties to process your personal data for specified purposes and in accordance with our instructions.`
        },
        {
            title: "HOW DO WE USE YOUR INFORMATION?",
            content: `We may use the information we collect from you when you register, purchase products, respond to a survey or marketing communication, surf the website, or use certain other site features in the following ways:

      • To personalize your site experience and to allow us to deliver the type of content and product offerings in which you are most interested.
      • To allow us to better service you in responding to your customer service requests.
      • To quickly process your transactions.
      • To administer a survey or other site feature.
      • If you have opted-in to receive our email newsletter, we will send you educational and marketing emails.
      • If you would no longer like to receive promotional email from us, please refer to the "How can you opt-out, remove or modify information you have provided to us?" section.
      • If you have not opted-in to receive email newsletters, you will not receive these emails.

      Visitors who register or participate in other site features such as marketing programs will be given a choice whether they would like to be on our email list and receive e-mail communications from us.`
        },
        {
            title: "DATA SECURITY",
            content: "We have put in place security measures to prevent your personal data from being accidentally lost, used, altered, disclosed, or accessed without authorization. We also allow access to your personal data only to those employees and partners who have a business need to know such data. They will only process your personal data on our instructions and they must keep it confidential. We have procedures in place to deal with any suspected personal data breach and will notify you and any applicable regulator of a breach if we are legally required to."
        },
        {
            title: "DATA RETENTION",
            content: `We will only retain your personal data for as long as necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements. When deciding what the correct time is to keep the data for we look at its amount, nature and sensitivity, potential risk of harm from unauthorized use or disclosure, the processing purposes, if these can be achieved by other means and legal requirements.

      For tax purposes the law requires us to keep basic information about our customers (including Contact, Identity, Financial and Transaction Data) for seven years after they stop being customers. In some circumstances we may anonymize your personal data for research or statistical purposes in which case we may use this information indefinitely without further notice to you.`
        },
        {
            title: "COOKIES",
            content: "As you browse Mind Matters Center website, advertising cookies will be placed on your computer so that we can understand what you are interested in. ookies are files with a small amount of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a web site and stored on your computer’s hard drive. To opt out of cookies, find and select the settings tab of your internet browser and click “block third party cookies and site data” or de-select the “accept cookies” box."
        },
        {
            title: "HOW DO WE PROTECT VISITOR INFORMATION?",
            content: "We implement a variety of security measures to maintain the safety of your personal information. Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems, and are required to keep the information confidential. When you place orders or access your personal information, we offer the use of a secure server. All sensitive/credit information you supply is transmitted via Secure Socket Layer (SSL) technology and then encrypted into our databases to be only accessed as stated above."
        },
        {
            title: "DO WE DISCLOSE THE INFORMATION WE COLLECT TO OUTSIDE PARTIES?",
            content: "We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information unless we provide you with advance notice, except as described below. It does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential. We may also release your information when we believe release is appropriate to comply with the law, enforce our site policies, or protect ours or others’ rights, property, or safety. However, non-personally identifiable visitor information may be provided to other parties for marketing, advertising, or other uses."
        },
        {
            title: "HOW CAN YOU OPT-OUT, REMOVE OR MODIFY INFORMATION YOU HAVE PROVIDED TO US?",
            content: "To modify your email subscriptions, you can find an unsubscribe link at the bottom of each email. Please note that due to email production schedules you may receive any emails already in production. Please note that we may maintain information about an individual sales transaction in order to service that transaction and for record keeping."
        },
        {
            title: "THIRD PARTY LINKS",
            content: "In an attempt to provide you with increased value, we may include third party links on our site. These linked sites have separate and independent privacy policies. We, therefore, have no responsibility or liability for the content and activities of these linked sites. Nonetheless, we seek to protect the integrity of our site and welcome any feedback about these linked sites (including if a specific link does not work)."
        },
        {
            title: "YOUR ACCESS TO AND CONTROL OVER INFORMATION",
            content: `You may opt out of any future contacts from us at any time. You can do the following at any time by contacting us via the email address or phone number given on our website:

      • See what data we have about you, if any.
      • Change/correct any data we have about you.
      • Have us delete any data we have about you.
      • Express any concern you have about our use of your data.`
        },
        {
            title: "CHANGES TO OUR POLICY",
            content: "If we decide to change our privacy policy, we will post those changes on this page. Policy changes will apply only to information collected after the date of the change. Last updated: February 04, 2025"
        },
        {
            title: "ONLINE PRIVACY POLICY",
            content: "This privacy policy refers only to information collected through our websites, and does not apply to information collected in person at events, coaching calls or social media."
        },
        {
            title: "YOUR CONSENT",
            content: "In using our site, you agree to our privacy policy."
        },
        {
            title: "QUESTIONS AND FEEDBACK",
            content: "We welcome your questions, comments, and concerns about privacy. Please send us any and all feedback pertaining to privacy, or any other issue via email at: contact@mindmatterscenter.com"
        }
    ];


    return (
        <div className="min-h-screen pt-20 sm:pt-24 md:pt-32 bg-brand-background-primary">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20">
                {/* Header */}
                <div className="text-center mb-8 sm:mb-12">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-brand-text-primary mb-8 sm:mb-10">
                        Privacy Policy
                    </h1>
                    <p className="text-brand-text-primary mb-6">
                        Welcome to Mind Matters Center. This Privacy Policy explains how our website operates and what happens when you visit or use our services.
                    </p>
                </div>

                {/* Privacy Policy Accordion */}
                <div className="space-y-3 sm:space-y-4">
                    {privacyContent.map((section, index) => (
                        <AnimatedFAQItem
                            key={index}
                            question={section.title}
                            answer={formatContent(section.content)}
                            isOpen={openIndex === index}
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            index={index}
                            useFade={false}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;