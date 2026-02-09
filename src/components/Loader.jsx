import React from 'react';

const Loader = ({ progress }) => {
    return (
        <div className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center">
            {/* Logo */}
            <div className="mb-8 flex items-center gap-4">
                <div className="text-4xl font-black text-kongu-blue">KEC</div>
                <div className="w-px h-8 bg-gray-300"></div>
                <div className="text-4xl font-black">
                    <span className="text-guvi-green">GUVI</span>
                </div>
            </div>

            {/* Loading animation */}
            <div className="relative w-64 h-1 bg-gray-200 rounded-full overflow-hidden">
                <div
                    className="absolute left-0 top-0 h-full bg-gradient-to-r from-kongu-blue to-guvi-green rounded-full transition-all duration-300 ease-out"
                    style={{ width: `${progress}%` }}
                />
            </div>

            {/* Loading text */}
            <div className="mt-4 text-gray-500 text-sm font-medium">
                Loading DevOps Portal...
            </div>

            {/* Animated dots */}
            <div className="flex gap-1 mt-2">
                <div className="w-2 h-2 bg-guvi-green rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-2 h-2 bg-kongu-blue rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="w-2 h-2 bg-guvi-green rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
            </div>
        </div>
    );
};

export default Loader;
