import React, { useState } from 'react';

const faqs = [
    {
        question: "What are the prerequisites for this program?",
        answer: "Basic understanding of programming concepts and familiarity with Linux command line is recommended. No prior DevOps experience is required - we start from the fundamentals."
    },
    {
        question: "How long is the program duration?",
        answer: "The complete program spans 6 months with 3 months of intensive training and 3 months of project work and placement preparation. Classes are conducted on weekends to accommodate working professionals."
    },
    {
        question: "What certification will I receive?",
        answer: "Upon successful completion, you'll receive a dual certification from Kongu Engineering College and GUVI. Additionally, we prepare you for industry certifications like AWS, Docker, and Kubernetes."
    },
    {
        question: "Is placement assistance provided?",
        answer: "Yes! We provide 100% placement assistance. Our dedicated placement cell works with 50+ hiring partners including TCS, Infosys, Zoho, and more. We also conduct mock interviews and resume building workshops."
    },
    {
        question: "What is the fee structure?",
        answer: "Please contact our admissions team for the latest fee structure. We offer flexible EMI options and scholarships for meritorious students. Early bird discounts are also available."
    },
    {
        question: "Can I attend classes online?",
        answer: "Yes, we offer a hybrid model. All live classes are also streamed online, and recordings are available for 1 year. However, we recommend attending in-person sessions for hands-on labs whenever possible."
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section id="faq" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <span className="text-guvi-green font-bold tracking-wider uppercase text-sm">Got Questions?</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Frequently Asked Questions</h2>
                </div>

                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-xl border border-gray-100 overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
                            >
                                <span className="font-semibold text-gray-900">{faq.question}</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className={`w-5 h-5 text-gray-500 transition-transform ${openIndex === idx ? 'rotate-180' : ''}`}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>
                            </button>

                            <div className={`overflow-hidden transition-all duration-300 ${openIndex === idx ? 'max-h-96' : 'max-h-0'}`}>
                                <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-12 text-center">
                    <p className="text-gray-600 mb-4">Still have questions?</p>
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 text-kongu-blue font-bold hover:text-guvi-green transition-colors"
                    >
                        Contact Our Team
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
