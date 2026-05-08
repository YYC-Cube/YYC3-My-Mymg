import path from 'path';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
export default defineConfig({
    plugins: [
        // The React and Tailwind plugins are both required for Make, even if
        // Tailwind is not being actively used – do not remove them
        react(),
        tailwindcss(),
    ],
    resolve: {
        alias: {
            // Alias @ to the src directory
            '@': path.resolve(__dirname, './src'),
        },
    },
    // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
    assetsInclude: ['**/*.svg', '**/*.csv'],
    // Optimization settings to prevent dynamic import issues
    optimizeDeps: {
        include: [
            'react',
            'react-dom',
            'recharts',
            'lucide-react',
            'motion/react',
            '@emotion/is-prop-valid',
            '@emotion/react',
            '@emotion/styled',
            '@emotion/cache',
        ],
    },
    esbuild: {
        drop: ['console', 'debugger'],
    },
    build: {
        target: 'esnext',
        minify: 'esbuild',
        manifest: true,
        rollupOptions: {
            output: {
                manualChunks: function (id) {
                    if (id.includes('node_modules')) {
                        if (id.includes('react-dom') || id.includes('scheduler')) {
                            return 'vendor-react-dom';
                        }
                        if (id.includes('/react/') || id.includes('react@')) {
                            return 'vendor-react';
                        }
                        if (id.includes('recharts') || id.includes('d3-')) {
                            return 'vendor-charts';
                        }
                        if (id.includes('lucide-react')) {
                            return 'vendor-icons';
                        }
                        if (id.includes('motion') || id.includes('framer')) {
                            return 'vendor-motion';
                        }
                        if (id.includes('@radix-ui')) {
                            return 'vendor-radix';
                        }
                        if (id.includes('@mui') || id.includes('@emotion')) {
                            return 'vendor-mui';
                        }
                        if (id.includes('monaco-editor') || id.includes('@monaco-editor')) {
                            return 'vendor-monaco';
                        }
                        if (id.includes('react-dnd')) {
                            return 'vendor-dnd';
                        }
                        if (id.includes('react-router') || id.includes('@remix')) {
                            return 'vendor-router';
                        }
                        if (id.includes('zustand') || id.includes('immer')) {
                            return 'vendor-state';
                        }
                        if (id.includes('recharts') === false && (id.includes('date-fns') || id.includes('dayjs'))) {
                            return 'vendor-date';
                        }
                    }
                },
                // Add hash to filenames for cache busting
                entryFileNames: 'assets/[name].[hash].js',
                chunkFileNames: 'assets/[name].[hash].js',
                assetFileNames: 'assets/[name].[hash].[ext]',
            },
        },
        commonjsOptions: {
            include: [/node_modules/],
        },
    },
    // Development server settings
    server: {
        fs: {
            strict: false,
        },
    },
    preview: {
        headers: {
            'Content-Security-Policy': [
                "default-src 'self'",
                "script-src 'self'",
                "style-src 'self' 'unsafe-inline'",
                "img-src 'self' data: blob:",
                "font-src 'self' data:",
                "connect-src 'self' https://api.openai.com https://api.anthropic.com https://api.deepseek.com https://api.github.com",
                "worker-src 'self' blob:",
                "frame-ancestors 'none'",
                "base-uri 'self'",
                "form-action 'self'",
            ].join('; '),
            'X-Content-Type-Options': 'nosniff',
            'X-Frame-Options': 'DENY',
            'X-XSS-Protection': '1; mode=block',
            'Referrer-Policy': 'strict-origin-when-cross-origin',
            'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
            'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
        },
    },
    // Clear cache on startup
    cacheDir: '.vite',
});
