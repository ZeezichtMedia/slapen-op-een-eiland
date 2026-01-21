/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                primary: '#C59D5F', // Sandy Gold - Brand color
                secondary: '#B58D4F', // Slightly darker gold for footer
                accent: '#F4F1EA', // Warm Beige - Backgrounds
                dark: '#2d2d2d', // Soft Black
                light: '#ffffff', // Pure White
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
