import { createRequire } from 'module';

// Require from the context of the current project
const require = createRequire(`${process.cwd()}/`);

export const isInstalled = (specifier: string) => {
	try {
		require.resolve(specifier);
		console.log('isInstalled', specifier, true);
		return true;
	} catch {}

	console.log('isInstalled', specifier, false);
	return false;
};

export const getExports = (
	moduleName: string,
) => Object.keys(
	// eslint-disable-next-line import-x/no-dynamic-require
	require(moduleName),
);
