import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true, // Ensure globals are available for testing
    setupFiles: ['./vitest.setup.js'], // Add a setup file if needed
  },
});
