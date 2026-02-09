import React, { useState, useEffect } from 'react';

const Hero = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [typedText, setTypedText] = useState('');
    const fullText = '>> Initializing DevOps Pipeline...';

    useEffect(() => {
        setIsVisible(true);

        // Typing effect
        let index = 0;
        const typeInterval = setInterval(() => {
            if (index <= fullText.length) {
                setTypedText(fullText.slice(0, index));
                index++;
            } else {
                clearInterval(typeInterval);
            }
        }, 80);

        return () => clearInterval(typeInterval);
    }, []);

    return (
        <section id="home" className="pt-32 pb-20 px-4 md:px-6 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-40 left-10 w-20 h-20 border border-guvi-green/20 rounded-lg rotate-12 animate-float"></div>
            <div className="absolute bottom-20 right-20 w-16 h-16 border border-kongu-blue/20 rounded-full animate-float-delayed"></div>
            <div className="absolute top-60 right-40 w-8 h-8 bg-guvi-green/10 rounded-full animate-pulse"></div>

            <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
                <div className={`space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-green-50 text-kongu-blue text-sm font-medium border border-blue-100 shadow-sm">
                        <span className="relative flex h-3 w-3 mr-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-guvi-green opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-guvi-green"></span>
                        </span>
                        🎓 Admissions Open for 2026 Batch
                    </div>

                    <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-tight">
                        Master{' '}
                        <span className="relative inline-block">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-kongu-blue via-blue-500 to-guvi-green animate-gradient-x">
                                DevOps
                            </span>
                            <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                                <path d="M2 10C50 2 150 2 198 10" stroke="url(#underline-gradient)" strokeWidth="3" strokeLinecap="round" />
                                <defs>
                                    <linearGradient id="underline-gradient" x1="0" y1="0" x2="200" y2="0">
                                        <stop offset="0%" stopColor="#002147" />
                                        <stop offset="100%" stopColor="#0EB981" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </span>
                        <br />
                        <span className="text-4xl md:text-5xl font-bold text-gray-600">with Industry Leaders</span>
                    </h1>

                    <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
                        Bridging the gap between <span className="font-semibold text-kongu-blue">academic excellence</span> and <span className="font-semibold text-guvi-green">industry demands</span>. A collaborative initiative by KEC and GUVI.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <button className="group relative px-8 py-4 bg-gradient-to-r from-guvi-green to-emerald-500 text-white rounded-xl font-bold shadow-xl shadow-green-500/25 hover:shadow-green-500/40 hover:-translate-y-1 transition-all overflow-hidden">
                            <span className="relative z-10 flex items-center justify-center gap-2">
                                Explore Curriculum
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                </svg>
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-guvi-green opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </button>
                        <button className="group px-8 py-4 bg-white/80 backdrop-blur text-gray-700 border-2 border-gray-200 rounded-xl font-bold hover:border-kongu-blue hover:text-kongu-blue hover:bg-blue-50/50 transition-all flex items-center justify-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                            </svg>
                            Watch Demo
                        </button>
                    </div>

                    <div className="flex items-center gap-6 pt-8">
                        <div className="flex -space-x-3">
                            {[21, 22, 23, 24, 25].map((i, idx) => (
                                <div
                                    key={i}
                                    className="w-10 h-10 rounded-full border-3 border-white bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden shadow-md hover:scale-110 hover:z-10 transition-transform"
                                    style={{ animationDelay: `${idx * 100}ms` }}
                                >
                                    <img src={`https://randomuser.me/api/portraits/thumb/men/${i}.jpg`} alt="Student" className="w-full h-full object-cover" />
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col">
                            <span className="text-2xl font-bold text-gray-900">500+</span>
                            <span className="text-sm text-gray-500">Successful Graduates</span>
                        </div>
                    </div>
                </div>

                <div className={`relative hidden md:block transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                    {/* Glow effect */}
                    <div className="absolute -inset-8 bg-gradient-to-r from-guvi-green/30 via-transparent to-kongu-blue/30 blur-3xl rounded-full opacity-60 animate-pulse"></div>

                    {/* Code editor card */}
                    <div className="relative bg-white rounded-3xl shadow-2xl border border-gray-100 p-3 overflow-hidden transform rotate-1 hover:rotate-0 hover:scale-[1.02] transition-all duration-500 group">
                        <div className="absolute inset-0 bg-gradient-to-br from-kongu-blue/5 to-guvi-green/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 h-[420px] flex flex-col font-mono text-sm overflow-hidden relative">
                            {/* Window controls */}
                            <div className="flex items-center gap-2 mb-6">
                                <div className="w-3 h-3 rounded-full bg-red-500 shadow-lg shadow-red-500/50"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-lg shadow-yellow-500/50"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500 shadow-lg shadow-green-500/50"></div>
                                <span className="ml-4 text-gray-500 text-xs">devops-pipeline.js</span>
                            </div>

                            {/* Code content */}
                            <div className="space-y-2 text-gray-300 flex-1 overflow-hidden">
                                <p><span className="text-purple-400">const</span> <span className="text-blue-400">collaboration</span> = <span className="text-yellow-400">{`{`}</span></p>
                                <p className="pl-4">institute: <span className="text-green-400">'Kongu Engineering College'</span>,</p>
                                <p className="pl-4">partner: <span className="text-green-400">'GUVI'</span>,</p>
                                <p className="pl-4">goal: <span className="text-green-400">'DevOps Excellence'</span>,</p>
                                <p className="pl-4">stack: <span className="text-yellow-300">[</span></p>
                                <p className="pl-8"><span className="text-green-400">'Docker'</span>, <span className="text-green-400">'Kubernetes'</span>,</p>
                                <p className="pl-8"><span className="text-green-400">'Jenkins'</span>, <span className="text-green-400">'AWS'</span></p>
                                <p className="pl-4"><span className="text-yellow-300">]</span></p>
                                <p><span className="text-yellow-400">{`}`}</span>;</p>
                                <br />
                                <p><span className="text-purple-400">async function</span> <span className="text-blue-400">startCareer</span>() <span className="text-yellow-400">{`{`}</span></p>
                                <p className="pl-4"><span className="text-purple-400">await</span> collaboration.<span className="text-blue-400">learn</span>();</p>
                                <p className="pl-4"><span className="text-purple-400">return</span> <span className="text-green-400">'🚀 Success'</span>;</p>
                                <p><span className="text-yellow-400">{`}`}</span></p>
                            </div>

                            {/* Terminal line */}
                            <div className="mt-4 pt-4 border-t border-gray-700">
                                <p className="text-guvi-green flex items-center">
                                    <span className="mr-2">$</span>
                                    <span>{typedText}</span>
                                    <span className="w-2 h-5 bg-guvi-green ml-1 animate-blink"></span>
                                </p>
                            </div>

                            {/* Decorative lines */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-guvi-green/10 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-kongu-blue/10 to-transparent"></div>
                        </div>
                    </div>

                    {/* Floating badges */}
                    <div className="absolute -top-4 -right-4 bg-white rounded-xl px-4 py-2 shadow-lg border border-gray-100 flex items-center gap-2 animate-bounce-slow">
                        <span className="text-2xl">🐳</span>
                        <span className="font-bold text-gray-700">Docker</span>
                    </div>
                    <div className="absolute -bottom-4 -left-4 bg-white rounded-xl px-4 py-2 shadow-lg border border-gray-100 flex items-center gap-2 animate-bounce-slow" style={{ animationDelay: '0.5s' }}>
                        <span className="text-2xl">☸️</span>
                        <span className="font-bold text-gray-700">K8s</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
