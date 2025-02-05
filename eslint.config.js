// filepath: /d:/Documents/wwtest/eslint.config.js
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import reactPlugin from 'eslint-plugin-react';

const compat = new FlatCompat({
    baseDirectory: import.meta.url,
});

export default [
    {
        files: ['**/*.js', '**/*.jsx'],
        languageOptions: {
            ecmaVersion: 12,
            sourceType: 'module',
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
            globals: {
                browser: true,
                node: true,
            },
        },
        plugins: {
            react: reactPlugin,
        },
        rules: {
            // Add your custom rules here
        },
    },
];