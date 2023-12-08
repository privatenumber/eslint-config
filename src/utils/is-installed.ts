export const isInstalled = (specifier: string) => {
	try {
		require.resolve(specifier);
		return true;
	} catch {}

	return false;
};