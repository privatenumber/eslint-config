import { testSuite, expect } from 'manten';
import { eslint } from '../utils/eslint.js';

export default testSuite(({ describe }) => {
	describe('markdown', ({ describe }) => {
		describe('Pass', ({ test }) => {
			test('.js', async ({ onTestFail }) => {
				const [result] = await eslint.lintFiles(
					new URL('fixtures/pass.js.md', import.meta.url).pathname,
				);
				const { messages } = result;

				onTestFail(() => {
					console.log(messages);
				});

				expect(result.usedDeprecatedRules.length).toBe(0);
				expect(messages.length).toBe(0);
			});

			test('.ts', async ({ onTestFail }) => {
				const [result] = await eslint.lintFiles(
					new URL('fixtures/pass.ts.md', import.meta.url).pathname,
				);
				const { messages } = result;

				onTestFail(() => {
					console.log(messages);
				});

				expect(result.usedDeprecatedRules.length).toBe(0);
				expect(messages.length).toBe(1);
				expect(messages).toEqual(
					expect.arrayContaining([
						expect.objectContaining({
							ruleId: '@typescript-eslint/no-unused-vars',
							severity: 1,
						}),
					]),
				);
			});

			test('.vue', async ({ onTestFail }) => {
				const [result] = await eslint.lintFiles(
					new URL('fixtures/pass.vue.md', import.meta.url).pathname,
				);
				const { messages } = result;

				onTestFail(() => {
					console.log(messages);
				});

				expect(result.usedDeprecatedRules.length).toBe(0);
				expect(messages.length).toBe(1);
				expect(messages).toEqual(
					expect.arrayContaining([
						expect.objectContaining({
							ruleId: 'vue/no-undef-components',
							severity: 1,
						}),
					]),
				);
			});
		});

		describe('Fail', ({ test }) => {
			test('.js', async () => {
				const [result] = await eslint.lintFiles(
					new URL('fixtures/fail.js.md', import.meta.url).pathname,
				);
				const { messages } = result;

				expect(messages).toEqual(
					expect.arrayContaining([
						expect.objectContaining({
							ruleId: '@stylistic/semi',
							messageId: 'extraSemi',
							severity: 2,
						}),

						expect.objectContaining({
							ruleId: '@stylistic/comma-dangle',
							messageId: 'unexpected',
							severity: 2,
						}),

						expect.objectContaining({
							ruleId: '@stylistic/indent',
							messageId: 'wrongIndentation',
							severity: 2,
						}),

						expect.objectContaining({
							ruleId: '@stylistic/no-multiple-empty-lines',
							messageId: 'blankEndOfFile',
							severity: 2,
						}),

						expect.objectContaining({
							ruleId: 'no-unused-vars',
							messageId: 'unusedVar',
							severity: 1,
						}),
					]),
				);
			});

			test('.ts', async () => {
				const [result] = await eslint.lintFiles(
					new URL('fixtures/fail.ts.md', import.meta.url).pathname,
				);
				const { messages } = result;

				// console.dir(messages, { colors: true, depth: null, maxArrayLength: null });
				expect(messages).toEqual(
					expect.arrayContaining([
						expect.objectContaining({
							ruleId: '@stylistic/semi',
							messageId: 'extraSemi',
							severity: 2,
						}),

						expect.objectContaining({
							ruleId: '@stylistic/comma-dangle',
							messageId: 'unexpected',
							severity: 2,
						}),

						expect.objectContaining({
							ruleId: '@stylistic/indent',
							messageId: 'wrongIndentation',
							severity: 2,
						}),

						expect.objectContaining({
							ruleId: '@stylistic/no-multiple-empty-lines',
							messageId: 'blankEndOfFile',
							severity: 2,
						}),

						expect.objectContaining({
							ruleId: '@typescript-eslint/no-unused-vars',
							messageId: 'unusedVar',
							severity: 1,
						}),
					]),
				);
			});
		});
	});
});
