// @ts-check
import { defineFlatConfig } from 'eslint-define-config';
import { pvtnbr } from './src/index.ts';

export default defineFlatConfig([
	{
		ignores: [
			'tests/*/fixtures/**/fail.*',
			'tests/*/fixtures/**/fail/**',
		],
	},
	...pvtnbr(),
]);
