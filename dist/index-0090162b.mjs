import process from 'node:process';
import fsPromises from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import fs from 'node:fs';
import path from 'node:path';

const toPath = urlOrPath => urlOrPath instanceof URL ? fileURLToPath(urlOrPath) : urlOrPath;

async function findUp(name, {
	cwd = process.cwd(),
	type = 'file',
	stopAt,
} = {}) {
	let directory = path.resolve(toPath(cwd) ?? '');
	const {root} = path.parse(directory);
	stopAt = path.resolve(directory, toPath(stopAt ?? root));

	while (directory && directory !== stopAt && directory !== root) {
		const filePath = path.isAbsolute(name) ? name : path.join(directory, name);

		try {
			const stats = await fsPromises.stat(filePath); // eslint-disable-line no-await-in-loop
			if ((type === 'file' && stats.isFile()) || (type === 'directory' && stats.isDirectory())) {
				return filePath;
			}
		} catch {}

		directory = path.dirname(directory);
	}
}

function findUpSync(name, {
	cwd = process.cwd(),
	type = 'file',
	stopAt,
} = {}) {
	let directory = path.resolve(toPath(cwd) ?? '');
	const {root} = path.parse(directory);
	stopAt = path.resolve(directory, toPath(stopAt) ?? root);

	while (directory && directory !== stopAt && directory !== root) {
		const filePath = path.isAbsolute(name) ? name : path.join(directory, name);

		try {
			const stats = fs.statSync(filePath, {throwIfNoEntry: false});
			if ((type === 'file' && stats?.isFile()) || (type === 'directory' && stats?.isDirectory())) {
				return filePath;
			}
		} catch {}

		directory = path.dirname(directory);
	}
}

export { findUpSync as a, findUp as f };
