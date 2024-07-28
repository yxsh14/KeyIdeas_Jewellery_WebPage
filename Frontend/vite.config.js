import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Split large modules into separate chunks
          'react-vendor': ['react', 'react-dom'],
          'other-vendor': ['some-other-large-library'],
        },
      },
    },
    // Optionally adjust the chunk size warning limit
    chunkSizeWarningLimit: 1000,
  },
});
