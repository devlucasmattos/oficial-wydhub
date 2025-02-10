import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/oficial-wydhub/', // Defina isso para o nome do repositório
});
