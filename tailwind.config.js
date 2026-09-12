/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    // breakpoints pedidos na sprint: mobile ate 480, tablet 768, desktop 992+
    screens: {
      xs: '480px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    },
    extend: {
      colors: {
        // mesmas cores do style.css antigo
        'azul-escuro': '#0D1B3E',
        azul: '#2D6BE4',
        teal: '#00B4A6',
        fundo: '#F4F7FF',
        texto: '#1a1a2e',
      },
      fontFamily: {
        titulo: ['Poppins', 'sans-serif'],
        corpo: ['Inter', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
