import type { Config } from 'tailwindcss';

export default {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
                primary: {
                    DEFAULT: '#1c9d9a',
                    dark: '#0f5757',
                    light: '#2dbbb7',
                },
                secondary: {
                    DEFAULT: '#f7f8fa',
                    dark: '#e5e7eb',
                },
                accent: {
                    teal: '#1c9d9a',
                    navy: '#0a3a4a',
                },
            },
        },
    },
    plugins: [],
} satisfies Config;
