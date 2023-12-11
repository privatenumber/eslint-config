import { testSuite, expect } from 'manten';
import { eslint } from '../utils/eslint.js';

export default testSuite(({ describe }) => {
	describe('eslint-comments', ({ test }) => {
		test('Fail cases', async ({ onTestFail }) => {
			const [result] = await eslint.lintFiles(
				new URL('fixtures/src/fail.js', import.meta.url).pathname,
			);

			onTestFail(() => {
				console.log(result);
			});

			expect(result.messages).toEqual(
				expect.arrayContaining([
					expect.objectContaining({
						ruleId: 'some-rule',
						message: "Definition for rule 'some-rule' was not found.",
						severity: 2,
					}),
					expect.objectContaining({
						ruleId: null,
						message: "Unused eslint-disable directive (no problems were reported from 'eqeqeq').",
						severity: 1,
					}),
					expect.objectContaining({
						ruleId: '@eslint-community/eslint-comments/no-unlimited-disable',
						messageId: 'unexpected',
						severity: 2,
					}),
				]),
			);
		});
	});
});
