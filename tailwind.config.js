/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                kongu: {
                    blue: '#002147',
                    gold: '#FFD700',
                },
                guvi: {
                    green: '#0EB981', // emerald-500
                    dark: '#111827', // gray-900
                }
            }
        },
    },
    plugins: [],
}
