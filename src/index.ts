import type { Linter } from 'eslint';
import { isInstalled } from './utils/require.js';
import type { Options } from './types.js';
import { defineConfig } from './utils/define-config.js';
import { eslint } from './configs/eslint.js';
import { serviceWorkers } from './configs/service-workers.js';
import { eslintComments } from './configs/eslint-comments.js';
import { stylistic } from './configs/stylistic.js';
import { imports } from './configs/imports.js';
import { typescript } from './configs/typescript.js';
import { regexp } from './configs/regexp.js';
import { node } from './configs/node.js';
import { promise } from './configs/promise.js';
import { jest } from './configs/jest.js';
import { markdown } from './configs/markdown.js';
import { json } from './configs/json.js';
import { yml } from './configs/yml.js';
import { noUseExtendNative } from './configs/no-use-extend-native.js';
import { unicorn } from './configs/unicorn.js';
import { react } from './configs/react.js';
import { vue } from './configs/vue.js';
import { customConfigs } from './configs/custom-configs.js';

export const pvtnbr = (
	options?: Options,
): Linter.FlatConfig[] => {
	const normalizedOptions = {
		...options,
		node: options?.node,
		vue: options?.vue || isInstalled('vue'),
		react: options?.react || isInstalled('react'),
	};

	return [
		defineConfig({
			ignores: [
				'**/package-lock.json',
				'**/pnpm-lock.yaml',
				'{tmp,temp}/**',
				'**/*.min.js',
				'**/dist/**',
				'**/node_modules/**',
				'**/vendor/**',
			],
		}),
		defineConfig({
			linterOptions: {
				reportUnusedDisableDirectives: true,
			},
			languageOptions: {
				ecmaVersion: 'latest',
				sourceType: 'module',
			},
		}),
		eslint,
		serviceWorkers,
		eslintComments,
		...imports,
		...unicorn,
		...typescript,
		stylistic,
		...regexp,
		...promise,
		...node(normalizedOptions),
		...noUseExtendNative,
		...json,
		yml,
		...(normalizedOptions.vue ? vue : []),
		...(normalizedOptions.react ? react : []),
		...markdown(normalizedOptions),

		jest,
		customConfigs,
	].filter(Boolean);
};

export default pvtnbr();
export { defineConfig };
export type { Options };
