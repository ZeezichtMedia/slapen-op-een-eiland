/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                primary: '#222222', // Charcoal Black - Luxury & Text
                secondary: '#2A9D8F', // Ocean Teal - Cheerful Vacation Vibe
                accent: '#EBE5CE', // Warm Stone - Subtle background accents
                dark: '#1a1a1a', // Deepest Black
                light: '#FEFEFA', // Off-White (Baby Powder) - Clean backgrounds
            },
            fontFamily: {
                sans: ['Outfit', 'sans-serif'],
                serif: ['Playfair Display', 'serif'],
                luxury: ['Cormorant Garamond', 'serif'],
            },
        },
    },
    plugins: [],
}
