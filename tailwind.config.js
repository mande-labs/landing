/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        sora: ['"Sora"', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#04154D', // This is the default shade
        },
        secondary: {
          DEFAULT: '#B3C0DE',
        },
        textAccent: '#274CBF',
        textPrimary: '#F7F9FF',
      },
      backgroundImage: {
        'text-gradient': 'linear-gradient(180deg, #FFF 65.5%, #B3C1DE 89.5%)',
        'card-bg-radial':
          'radial-gradient(62.81% 62.81% at 50% 69.82%, rgba(197, 199, 205, 0.05) 0%, rgba(102, 102, 102, 0) 100%)',
        'card-bg-radial-blue':
          'radial-gradient(68.97% 67.39% at 24.75% 69.49%, rgba(39, 76, 191, 0.20) 0%, rgba(102, 102, 102, 0.00) 100%)',
        'card-bold-text-radial':
          'radial-gradient(4399.18% 92.62% at 0% 50%, #FFF 65.5%, rgba(179, 193, 222, 0.80) 89.5%)',
      },
      backgroundClip: {
        text: 'text',
      },
      textFillColor: {
        transparent: 'transparent',
      },
    },
  },
  plugins: [],
};
