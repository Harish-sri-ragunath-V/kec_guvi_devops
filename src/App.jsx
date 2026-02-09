import React, { useState, useEffect, useMemo } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Curriculum from './components/Curriculum'
import Features from './components/Features'
import Team from './components/Team'
import Testimonials from './components/Testimonials'
import Stats from './components/Stats'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import MouseParticles from './components/MouseParticles'
import Loader from './components/Loader'

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadProgress, setLoadProgress] = useState(0);
    const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

    // Simulate loading
    useEffect(() => {
        const interval = setInterval(() => {
            setLoadProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => setIsLoading(false), 300);
                    return 100;
                }
                return prev + Math.random() * 15 + 5;
            });
        }, 150);

        return () => clearInterval(interval);
    }, []);

    // Throttled mouse move handler
    useEffect(() => {
        let ticking = false;

        const handleMouseMove = (e) => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    setMousePosition({
                        x: (e.clientX / window.innerWidth) * 100,
                        y: (e.clientY / window.innerHeight) * 100,
                    });
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Memoized background style
    const backgroundStyle = useMemo(() => ({
        background: `
            radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, 
                rgba(14, 185, 129, 0.1), transparent 50%),
            radial-gradient(500px circle at ${100 - mousePosition.x}% ${mousePosition.y}%, 
                rgba(0, 33, 71, 0.08), transparent 50%),
            linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #f1f5f9 100%)
        `
    }), [mousePosition.x, mousePosition.y]);

    if (isLoading) {
        return <Loader progress={Math.min(loadProgress, 100)} />;
    }

    return (
        <div className="font-sans antialiased text-gray-900 bg-white min-h-screen relative overflow-x-hidden">
            {/* Mouse particle trail */}
            <MouseParticles />

            {/* Simple gradient background */}
            <div
                className="fixed inset-0 pointer-events-none z-0"
                style={backgroundStyle}
            />

            {/* Single floating orb - GPU accelerated */}
            <div
                className="fixed w-[500px] h-[500px] rounded-full pointer-events-none z-0 will-change-transform"
                style={{
                    background: 'radial-gradient(circle, rgba(14, 185, 129, 0.15) 0%, transparent 70%)',
                    left: `${mousePosition.x * 0.7}%`,
                    top: `${mousePosition.y * 0.7}%`,
                    transform: 'translate(-50%, -50%)',
                    filter: 'blur(80px)',
                    transition: 'left 0.5s ease-out, top 0.5s ease-out'
                }}
            />

            {/* Grid pattern - static for performance */}
            <div
                className="fixed inset-0 pointer-events-none z-0 opacity-[0.02]"
                style={{
                    backgroundImage: `
                        linear-gradient(#002147 1px, transparent 1px),
                        linear-gradient(90deg, #002147 1px, transparent 1px)
                    `,
                    backgroundSize: '50px 50px',
                }}
            />

            {/* Main content */}
            <div className="relative z-10">
                <Header />
                <main>
                    <Hero />
                    <About />
                    <Curriculum />
                    <Features />
                    <Team />
                    <Testimonials />
                    <Stats />
                    <FAQ />
                    <Contact />
                </main>
                <Footer />
            </div>
        </div>
    )
}

export default App
