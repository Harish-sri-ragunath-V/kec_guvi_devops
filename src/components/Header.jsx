import React, { useState } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { href: '#home', label: 'Home' },
        { href: '#about', label: 'About' },
        { href: '#curriculum', label: 'Curriculum' },
        { href: '#features', label: 'Features' },
        { href: '#team', label: 'Team' },
        { href: '#faq', label: 'FAQ' },
        { href: '#contact', label: 'Contact' },
    ];

    return (
        <header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100">
            <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    {/* KEC Logo */}
                    <div className="flex items-center gap-3">
                        <img
                            src="kec.png"
                            alt="KEC Logo"
                            className="h-12 w-auto object-contain"
                            onError={(e) => {
                                e.target.style.display = 'none';
                            }}
                        />
                    </div>

                    <div className="h-10 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent mx-2 hidden sm:block"></div>

                    {/* GUVI Logo */}
                    <div className="flex items-center gap-3">
                        <img
                            src="guvi.png"
                            alt="GUVI Logo"
                            className="h-10 w-auto object-contain"
                            onError={(e) => {
                                e.target.style.display = 'none';
                            }}
                        />
                    </div>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-6 font-medium text-gray-600">
                    {navLinks.map(link => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="hover:text-kongu-blue transition-colors text-sm"
                        >
                            {link.label}
                        </a>
                    ))}
                    <button className="bg-gradient-to-r from-kongu-blue to-blue-600 text-white px-5 py-2.5 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all text-sm">
                        Apply Now
                    </button>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden text-gray-600 p-2"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-lg transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
                    {navLinks.map(link => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="py-3 px-4 hover:bg-gray-50 rounded-lg text-gray-700 font-medium transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {link.label}
                        </a>
                    ))}
                    <button className="mt-2 bg-gradient-to-r from-kongu-blue to-blue-600 text-white py-3 px-4 rounded-xl font-semibold">
                        Apply Now
                    </button>
                </nav>
            </div>
        </header>
    );
};

export default Header;
