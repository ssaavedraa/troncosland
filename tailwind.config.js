/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        light: ['Breymont Light', 'system-ui'],
        bold: ['Breymont Bold', 'system-ui']
      },
      colors: {
        'orange': '#F4A261'
      }
    },
  },
  plugins: [],
}
