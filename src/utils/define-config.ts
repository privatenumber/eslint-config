import type { Linter } from 'eslint';

const properties = [
	'files',
	'ignores',
	'languageOptions',
	'linterOptions',
	'plugins',
	'rules',
	'settings',
] as const;

const deepFreeze = <T extends Linter.FlatConfig>(config: T) => {
	for (const property of properties) {
		const value = config[property];
		if (!value) {
			continue;
		}

		Object.freeze(value);

		if (property === 'rules') {
			const rules = value as Linter.FlatConfig['rules'];
			for (const ruleName in rules) {
				if (Object.hasOwn(rules, ruleName)) {
					const rule = rules[ruleName];
					if (rule) {
						Object.freeze(rule);
					}
				}
			}
		}

		if (property === 'languageOptions') {
			const languageOptions = value as NonNullable<Linter.FlatConfig['languageOptions']>;
			if (languageOptions.parserOptions) {
				Object.freeze(languageOptions.parserOptions);
			}
			if (languageOptions.globals) {
				Object.freeze(languageOptions.globals);
			}
		}
	}

	return Object.freeze(config);
};

interface DefineConfig {
	<Config extends Linter.FlatConfig>(config: Config): Config;
	<Configs extends Linter.FlatConfig[]>(config: Configs): Configs;
}

export const defineConfig: DefineConfig = (
	config: Linter.FlatConfig | Linter.FlatConfig[],
): Linter.FlatConfig | Linter.FlatConfig[] => (
	Array.isArray(config)
		? config.map(deepFreeze)
		: deepFreeze(config)
);
