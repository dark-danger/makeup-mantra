'use client';

import { useState } from 'react';

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: 'Who is the best bridal makeup artist in Karnal?',
            answer: 'Makeup Mantra by Jyoti Mehta is the best bridal makeup artist in Karnal, offering professional HD and airbrush makeup services for weddings, engagements, and receptions.',
        },
        {
            question: 'How much does bridal makeup cost in Karnal?',
            answer: 'Bridal makeup packages in Karnal vary based on services. Contact us at 9034683944 for customized bridal makeup packages including HD makeup, airbrush makeup, and complete bridal looks.',
        },
        {
            question: 'Do you provide airbrush makeup services in Karnal?',
            answer: 'Yes! We specialize in professional airbrush makeup in Karnal for weddings, parties, and special occasions. Our HD airbrush makeup ensures a flawless, long-lasting finish.',
        },
        {
            question: 'What areas do you serve in Karnal?',
            answer: 'We serve all areas of Karnal including Moti Nagar and surrounding localities. We provide professional makeup services for weddings, engagements, receptions, and parties across Karnal, Haryana.',
        },
        {
            question: 'How to book a makeup artist for wedding in Karnal?',
            answer: 'Booking is easy! Call us at 9034683944 or fill out our online booking form. We recommend booking at least 2-3 months in advance for wedding makeup services in Karnal.',
        },
        {
            question: 'What makeup services do you offer in Karnal?',
            answer: 'We offer bridal makeup, party makeup, engagement makeup, reception makeup, HD makeup, and airbrush makeup services in Karnal. All services use premium products for a flawless, camera-ready look.',
        },
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-20 px-6 bg-gradient-to-b from-background-purple to-background-dark">
            <div className="max-w-4xl mx-auto">
                {/* Section header */}
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-4 gradient-text">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Common questions about makeup services in Karnal
                    </p>
                </div>

                {/* FAQ List */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="glass-effect rounded-2xl overflow-hidden animate-scale-in"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full px-6 md:px-8 py-5 md:py-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                            >
                                <h3 className="text-lg md:text-xl font-semibold text-white pr-4">
                                    {faq.question}
                                </h3>
                                <svg
                                    className={`w-6 h-6 text-primary-light flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''
                                        }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </button>
                            {openIndex === index && (
                                <div className="px-6 md:px-8 pb-5 md:pb-6 pt-2">
                                    <p className="text-gray-300 leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-12 text-center">
                    <p className="text-gray-400 mb-4">Still have questions?</p>
                    <a
                        href="tel:9034683944"
                        className="inline-block px-8 py-3 bg-gradient-to-r from-primary-light to-primary-dark text-white font-semibold rounded-full hover-lift shadow-lg"
                    >
                        Call Us: 9034683944
                    </a>
                </div>
            </div>
        </section>
    );
}
