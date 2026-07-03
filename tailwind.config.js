/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#0a0b0d',
          secondary: '#111215',
          card: '#16181c',
        },
        accent: {
          DEFAULT: '#8ba6cc',
          hover: '#a5bcda',
          dim: 'rgba(139,166,204,0.04)',
        },
        txt: {
          primary: '#e6e8ec',
          secondary: '#b0b5bf',
          muted: '#8a909c',
          dim: '#5f6572',
          vdim: '#4f545e',
        },
        border: {
          DEFAULT: '#17191d',
          tag: '#23262d',
          btn: '#262932',
          'btn-hover': '#3a4150',
        },
        section: {
          number: '#20242b',
        },
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        body: ['Inter', 'sans-serif'],
      },
      maxWidth: {
        'site': '1180px',
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
