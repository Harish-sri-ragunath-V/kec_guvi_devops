import React, { useState, useEffect, useRef } from 'react';

const stats = [
    { value: 500, suffix: '+', label: 'Students Trained' },
    { value: 95, suffix: '%', label: 'Placement Rate' },
    { value: 50, suffix: '+', label: 'Hiring Partners' },
    { value: 4.8, suffix: '/5', label: 'Student Rating' }
];

const partners = [
    'TCS', 'Infosys', 'Wipro', 'Cognizant', 'Zoho', 'Freshworks', 'HCL', 'Tech Mahindra'
];

const Stats = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [counts, setCounts] = useState(stats.map(() => 0));
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, [isVisible]);

    useEffect(() => {
        if (!isVisible) return;

        const duration = 2000;
        const steps = 60;
        const interval = duration / steps;

        let step = 0;
        const timer = setInterval(() => {
            step++;
            setCounts(stats.map(stat => {
                const progress = Math.min(step / steps, 1);
                const easeOut = 1 - Math.pow(1 - progress, 3);
                return Number((stat.value * easeOut).toFixed(1));
            }));

            if (step >= steps) clearInterval(timer);
        }, interval);

        return () => clearInterval(timer);
    }, [isVisible]);

    return (
        <section ref={sectionRef} className="py-20 bg-kongu-blue text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-1/4 w-64 h-64 bg-guvi-green rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 md:px-6 relative">
                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="text-center">
                            <div className="text-4xl md:text-5xl font-black mb-2">
                                {counts[idx]}{stat.suffix}
                            </div>
                            <div className="text-blue-200 text-sm font-medium uppercase tracking-wider">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Partners */}
                <div className="border-t border-white/20 pt-12">
                    <p className="text-center text-blue-200 text-sm font-medium uppercase tracking-wider mb-8">
                        Our Hiring Partners
                    </p>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                        {partners.map((partner, idx) => (
                            <div
                                key={idx}
                                className="text-xl md:text-2xl font-bold text-white/60 hover:text-white transition-colors"
                            >
                                {partner}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;
