import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

export default defineConfig({
  plugins: [preact()],
  build: {
    lib: {
      entry: 'src/main.tsx',
      formats: ['es'],
      fileName: 'components'
    }
  }
});