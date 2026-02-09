import React from 'react';

const testimonials = [
    {
        name: "Vijay Anand",
        role: "DevOps Engineer at TCS",
        batch: "2023",
        image: "https://randomuser.me/api/portraits/men/11.jpg",
        quote: "The program transformed my career. I went from knowing basic Linux to deploying production-grade Kubernetes clusters. The hands-on labs were incredible!"
    },
    {
        name: "Sneha Patel",
        role: "Cloud Engineer at Infosys",
        batch: "2023",
        image: "https://randomuser.me/api/portraits/women/23.jpg",
        quote: "GUVI's teaching methodology combined with KEC's structured curriculum gave me the perfect foundation. Got placed within 2 months of completing the course!"
    },
    {
        name: "Rahul Krishnan",
        role: "SRE at Zoho",
        batch: "2022",
        image: "https://randomuser.me/api/portraits/men/36.jpg",
        quote: "The mentorship from industry experts was invaluable. They don't just teach tools, they teach you how to think like a DevOps engineer."
    }
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <span className="text-kongu-blue font-bold tracking-wider uppercase text-sm">Success Stories</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">What Our Alumni Say</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300 relative"
                        >
                            {/* Quote icon */}
                            <div className="absolute top-6 right-6 text-6xl text-gray-100 font-serif">"</div>

                            <div className="relative">
                                <p className="text-gray-600 leading-relaxed mb-6 italic">
                                    "{testimonial.quote}"
                                </p>

                                <div className="flex items-center gap-4">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-12 h-12 rounded-full object-cover"
                                    />
                                    <div>
                                        <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                                        <span className="text-xs text-guvi-green font-medium">Batch {testimonial.batch}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
