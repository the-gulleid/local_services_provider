/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    light: '#4ADE80',
                    DEFAULT: '#22C55E',
                    dark: '#16A34A',
                },
                secondary: {
                    light: '#3B82F6',
                    DEFAULT: '#2563EB',
                    dark: '#1D4ED8',
                }
            }
        },
    },
    plugins: [],
}
