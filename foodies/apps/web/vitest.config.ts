import { defineConfig } from 'vitest/config';

/**
 * Vitest config keeps tests lightweight. For now we only run utility tests,
 * but structure is ready for component testing with jsdom.
 */
export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom'
  }
});
