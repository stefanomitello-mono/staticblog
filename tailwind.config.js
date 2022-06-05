module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Jost', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      fontSize: {
        h1: ['1.74em', '134%'],
        h2: ['20px', '30px'],
        body: ['16px', '24px'],
        'md-h1': ['48px', '142%'],
        'md-h2': ['24px', '36px'],
        'body': ['19px', '28px'],
      },
      colors: {
        blue: {
          10: '#111A20',
          20: '#1C2C35',
          30: '#243B4A',
          40: '#416883',
          50: '#5E8CA7',
        },
        glow: {
          10: '#B0FBBC',
          20: '#82F9A1',
        },
        text: {
          10: '#ECF8FF',
          20: '#C9E2F0',
        },
      }
    },
  },
  plugins: [],
}
