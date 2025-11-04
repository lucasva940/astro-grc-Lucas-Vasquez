import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  vite: {
    plugins: [
      tailwindcss({
        config: {
          content: [
            './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
          ],
          theme: {
            extend: {
              colors: {
                'azul-oscuro': 'var(--color-azul-oscuro)',
                'blanco': 'var(--color-blanco)',
                'verde-neon': 'var(--color-verde-neon)',
                'morado': 'var(--color-morado)',
                'body': 'var(--color-body)',
                'gris-claro': 'var(--color-gris-claro)',
                'gris-oscuro': 'var(--color-gris-oscuro)',
                'rojo': 'var(--color-rojo)',
                'amarillo': 'var(--color-amarillo)',
                'border-card': 'var(--color-border-card)',
                'colorde-fondo': '#D2B48C',
              },
              fontFamily: {
                'sans': ['var(--font-variable)', 'sans-serif'],
                'roboto': ['var(--font-roboto)', 'sans-serif'],
              }
            },
          },
          plugins: [],
        }
      })
    ]
  }
});

