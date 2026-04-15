// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // siteはドメイン名のみを指定します（末尾のスラッシュは無しが推奨）
  site: 'https://yamazato.nuee.nagoya-u.ac.jp', 
  
  // baseでサブディレクトリを指定します（最初と最後にスラッシュを入れるのが最も安全です）
  base: '/icevlc2018/', 

  integrations: [react()],

  vite: {
    plugins: [tailwindcss()]
  }
});