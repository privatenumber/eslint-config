/**
 * References:
 * - https://github.com/import-js/eslint-plugin-import/blob/master/config/typescript.js
 * - https://github.com/xojs/eslint-config-xo-typescript/blob/master/index.js
 */
import type { FlatESLintConfig } from 'eslint-define-config';
import globals from 'globals';
import { isInstalled } from '../utils/is-installed.js';

export const jest = (
	isInstalled('jest')
		? {
			files: ['**/{test,tests}/*'],
			languageOptions: {
				globals: globals.jest,
			},
		} satisfies FlatESLintConfig
		: undefined
);
