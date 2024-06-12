/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['.//**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        sora: ['"Sora"', 'sans-serif'],
        visby: ['"Visby"', 'Sora', 'sans-serif'],
        visbyMedium: ['"Visby-medium"', 'Sora', 'sans-serif'],
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
        'primary-btn':
          'radial-gradient(50% 39.66% at 50% 100%, #B3C1DE 0%, rgba(179, 193, 222, 0.50) 100%), var(--text-accent, #274CBF)',

        'card-bg-radial':
          'radial-gradient(62.81% 62.81% at 50% 69.82%, rgba(197, 199, 205, 0.05) 0%, rgba(102, 102, 102, 0) 100%)',
        'card-bg-radial-blue':
          'radial-gradient(68.97% 67.39% at 24.75% 69.49%, rgba(39, 76, 191, 0.20) 0%, rgba(102, 102, 102, 0.00) 100%)',
        'card-bold-text-radial':
          'radial-gradient(4399.18% 92.62% at 0% 50%, #FFF 65.5%, rgba(179, 193, 222, 0.80) 89.5%)',
        'community-card-gradient': `
          linear-gradient(to bottom right, rgba(179, 192, 222, 0.01) 0%, rgba(179, 192, 222, 0.00) 50%) bottom right / 50% 50% no-repeat,
          linear-gradient(to bottom left, rgba(179, 192, 222, 0.01) 0%, rgba(179, 192, 222, 0.00) 50%) bottom left / 50% 50% no-repeat,
          linear-gradient(to top left, rgba(179, 192, 222, 0.01) 0%, rgba(179, 192, 222, 0.00) 50%) top left / 50% 50% no-repeat,
          linear-gradient(to top right, rgba(179, 192, 222, 0.01) 0%, rgba(179, 192, 222, 0.00) 50%) top right / 50% 50% no-repeat,
          linear-gradient(to bottom right, rgba(179, 193, 222, 0.08) 0%, rgba(179, 193, 222, 0.06) 50%) bottom right / 50% 50% no-repeat,
          linear-gradient(to bottom left, rgba(179, 193, 222, 0.08) 0%, rgba(179, 193, 222, 0.06) 50%) bottom left / 50% 50% no-repeat,
          linear-gradient(to top left, rgba(179, 193, 222, 0.08) 0%, rgba(179, 193, 222, 0.06) 50%) top left / 50% 50% no-repeat,
          linear-gradient(to top right, rgba(179, 193, 222, 0.08) 0%, rgba(179, 193, 222, 0.06) 50%) top right / 50% 50% no-repeat
        
        `,
      },
      borderImageSource: {
        'primary-border-gradient':
          'radial-gradient(129.25% 1120.52% at 11.08% 100%, #B3C1DE 0%, rgba(179, 193, 222, 0) 100%)',
      },
      backdropFilter: {
        'blur-35': 'blur(35px)',
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
