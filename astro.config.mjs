// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://yamazato.nuee.nagoya-u.ac.jp/icevlc2018', // サイトのURLを設定
  base: '/icevlc2018', // リポジトリ名に合わせて設定

  integrations: [react()],

  vite: {
    plugins: [tailwindcss()]
  }
  
});