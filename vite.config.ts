/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'
import path, { resolve } from 'path'
import WindiCSS from 'vite-plugin-windicss'
import * as packageJson from './package.json'
import plugin from '@vitejs/plugin-react'

// https://vitejs.dev/config https://vitest.dev/config
export default defineConfig({
  plugins: [
    plugin({
      jsxRuntime: 'classic'
    }),
    react(),
    tsconfigPaths(),
    WindiCSS()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@icons': path.resolve(__dirname, 'src/icons'),
      '@utils': path.resolve(__dirname, 'src/utils')
    }
  },
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: '.vitest/setup',
    include: ['**/test.{ts,tsx}']
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src', 'index.ts'),
      name: 'I9DesignSystem',
      formats: ['es', 'cjs'],
      fileName: (ext) => `index.${ext}.js`
    },
    rollupOptions: {
      external: [
        'react/jsx-runtime',
        ...Object.keys(packageJson.peerDependencies),
        ...Object.keys(packageJson.dependencies)
      ]
    },
    target: 'esnext',
    sourcemap: true
  }
})
