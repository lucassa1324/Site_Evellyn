// next.config.mjs
import { defineConfig } from 'next';

export default defineConfig({
  reactStrictMode: true,
  async redirects() {
    return [
    
    {
        source: '/cabecalho',
        destination: '/cabecalho.css', 
        permanent: false,  
    },
    {
      source: '/css/:path*',
      destination: '/css/:path*',
    },
    {
        source: '/',
        destination: '/index.html', // Redireciona para o index.html na raiz
        permanent: false,

    },   
    {
        source: '/agendamento', // URL que você deseja acessar
        destination: '/agendamento.html', // URL do arquivo HTML
        permanent: false,
      },
    ];
  },

  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname);
    return config;
  },
});
