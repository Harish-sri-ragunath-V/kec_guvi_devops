import React from 'react';

const Features = () => {
    return (
        <section id="features" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="order-2 md:order-1 relative">
                        <div className="absolute -left-10 -top-10 w-40 h-40 bg-guvi-green/10 rounded-full blur-3xl"></div>
                        <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-kongu-blue/10 rounded-full blur-3xl"></div>

                        <div className="relative z-10 grid grid-cols-2 gap-4">
                            <div className="space-y-4 mt-8">
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                                    <h4 className="font-bold text-gray-900 text-lg">Live Classes</h4>
                                    <p className="text-sm text-gray-500 mt-2">Interactive sessions with experts</p>
                                </div>
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                                    <h4 className="font-bold text-gray-900 text-lg">Hands-on Labs</h4>
                                    <p className="text-sm text-gray-500 mt-2">Real-world infrastructure projects</p>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                                    <h4 className="font-bold text-gray-900 text-lg">Mentorship</h4>
                                    <p className="text-sm text-gray-500 mt-2">1-on-1 guidance from industry pros</p>
                                </div>
                                <div className="bg-kongu-blue p-6 rounded-2xl shadow-lg border border-kongu-blue text-white">
                                    <h4 className="font-bold text-lg">Placement</h4>
                                    <p className="text-sm text-blue-100 mt-2">100% Placement assistance support</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="order-1 md:order-2">
                        <span className="text-kongu-blue font-bold tracking-wider uppercase text-sm">Why This Program?</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">Unlock Your Potential with Personalized Learning</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Traditional education meets modern ed-tech. Experience the rigor of Kongu Engineering College combined with the gamified, practical learning approach of GUVI.
                        </p>

                        <ul className="space-y-4">
                            {[
                                "Dual Certification from KEC & GUVI",
                                "Access to GUVI's CodeKata & WebKata platforms",
                                "Mock Interviews with Hiring Managers",
                                "Lifetime access to recorded sessions"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-center gap-3">
                                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-guvi-green text-xs">
                                        ✓
                                    </div>
                                    <span className="text-gray-700 font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-8">
                            <button className="bg-gray-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-gray-800 transition-colors">
                                Download Brochure
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
