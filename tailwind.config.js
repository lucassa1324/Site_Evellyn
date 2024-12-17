module.exports = {
  content: [
    './index.html',          // Se o index.html estiver na raiz
    './public/**/*.html',    // Para outros HTML na pasta public
    './src/**/*.{js,ts}',    // Para arquivos JavaScript ou TypeScript no src
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};