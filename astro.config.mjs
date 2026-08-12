// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://gianmariaurbinati.github.io',
  base: '/ledeuxiemearret',
  vite: {
    server: {
      // consente l'accesso dal tunnel pubblico (loca.lt / trycloudflare.com)
      // usato per far vedere il sito in anteprima ad altre persone
      allowedHosts: true,
    },
  },
});
