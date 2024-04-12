import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';
import { resolve } from 'path';
import { mergeConfig } from 'vite';
import { defineConfig } from 'vitest/config';

export default mergeConfig(
  defineConfig({
    plugins: [
      react(),
      tsconfigPaths(),
      svgr({
        exportAsDefault: true,
        include: '**/**/*.svg',
        svgrOptions: {
          icon: true,
          plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'],
        },
      }),
    ],
    optimizeDeps: {
      include: ['src/**/components/**/*.tsx', 'src/components/**/*.tsx'],
    },
    test: {
      css: false,
      globals: true,
      fakeTimers: true,
      exclude: ['**/node_modules/**', 'automation'],
      environment: 'happy-dom',
      coverage: {
        reporter: ['text', 'json', 'html'],
        lines: 100,
        functions: 100,
        branches: 100,
        statements: 100,
        exclude: [
          '.next',
          'out',
          '**.config.**'
        ],
      },
    },
    resolve: {
      alias: [
        {
          find: 'src',
          replacement: resolve(__dirname, './src'),
        },
        {
          find: 'icons',
          replacement: resolve(__dirname, './icons')
        },
        {
          find: 'info',
          replacement: resolve(__dirname, './info')
        },
        {
          find: 'types',
          replacement: resolve(__dirname, './src/app/api/types.ts')
        },
      ],
    },
  }),
);