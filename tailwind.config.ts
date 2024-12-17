import type { Config } from 'tailwindcss';
import tailwindScrollbar from 'tailwind-scrollbar';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'landing-page': "url('/landingPage.webp')",
      },
      colors: {
        success: {
          50: '#ECFDF3',
          700: '#027A48',
        },
        orange: {
          900: '#E45F01',
          800: '#FE791B',
          700: '#FE974D',
          400: '#FFD2B3',
          50: '#FFF0E6',
        },
        purple: {
          50: '#D4DBF7',
          100: '#F2F4FD',
          300: '#A9B7EF',
          600: '#605EED',
          700: '#4F4DCB',
        },
        gray: {
          50: '#F9FAFB',
          100: '#F2F4F7',
          200: '#eaecf0',
          300: '#E8E8E8',
          500: '#3A3A3A',
          700: '#344054',
          900: '#101828',
        },
        red: {
          50: '#FEF3F2',
          100: '#FEE4E2',
          300: '#FDA29B',
          400: '#FE736E',
          500: '#F04438',
          700: '#B42318',
        },
      },
      fontSize: {
        h1: ['50px', { fontWeight: '700', lineHeight: '64px' }],
        h2: ['36px', { fontWeight: '700', lineHeight: '44px' }],
        h3: ['36px', { fontWeight: '500', lineHeight: '44px' }],
        h4: ['24px', { fontWeight: '700', lineHeight: '44px' }],
        h5: ['14px', { fontWeight: '600', lineHeight: '20px' }],
        h6: ['12px', { fontWeight: '500', lineHeight: '18px' }],
        h7: ['12px', { fontWeight: '600', lineHeight: '18px' }],
        p1: ['14px', { fontWeight: '400', lineHeight: '24px' }],
        p2: ['15px', { fontWeight: '500', lineHeight: '24px' }],
        p3: ['18px', { fontWeight: '400', lineHeight: '24px' }],
      },
    },
    variants: {
      extend: {
        borderColor: ['focus'], // Enable borderColor on focus state
      },
    },
    plugins: [tailwindScrollbar],
  },
};
export default config;
