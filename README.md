
<p align="center">
	<img src="./.github/logo.webp" width="240">
</p>
<h2 align="center">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ESLint config <sub><em>by pvtnbr</em></sub>
</h2>

This ESLint configuration was originally forked from Airbnb's ESLint config, taking inspiration from their comprehensive [JavaScript style guide](https://github.com/airbnb/javascript).

It's been enhanced with plugins, cutting edge tooling, and offers a comprehensive linting solution for a wide range of JavaScript ecosystems, including TypeScript, React, Vue.js, and Markdown code blocks.

### Features

- **Streamlined syntax**: Single quotes, semicolons, tabs, and [arrow functions](./src/custom-rules/prefer-arrow-functions/) for a clear & intentional coding style.

- **Versatile language support**: Tailored for TypeScript, React, Vue.js, and even Markdown code blocks, ensuring a wide range of applications.

- **Handy CLI command** Comes with a quick and easy-to-use CLI command, which even supports `eslint.config.ts`.

- **Extended plugin support**: A rich set of plugins to lint ESlint comments, imports, JSON, YAML and more.

### What does the linted code look like?
Checkout the code fixtures from the passing tests [here](https://github.com/search?q=repo%3Aprivatenumber%2Feslint-config+path%3Atests%2F**%2Ffixtures%2Fpass*&type=code).

## Install

```sh
pnpm i -D @pvtnbr/eslint-config
```

## `lint` Command

This package includes a `lint` CLI command as a direct alternative to `eslint`, allowing you to lint your code with this config without any configuration or setup.

#### Lint files in the current directory

```sh
pnpm lint .
```

#### Apply auto fix

```sh
pnpm lint . --fix
```

#### Lint with caching enabled
```sh
pnpm lint --cache .
```

#### Lint only staged files
```sh
pnpm lint --staged .
```

#### Specify Node.js files
```sh
pnpm lint --node ./build .
```

### Optional `package.json` script

Adding it to `package.json#scripts` gives you the convenience of not needing to pass in the current directory (`.`) every time so you can simply run `pnpm lint` instead. Also follows the best practice of documenting available commands in a central place.

```diff
  "scripts": {
+   "lint": "lint .",
    "build": "..."
    "dev": "..."
  }
```
### Configuration

If you'd like to customize the linting rules further, you can add one of these ESLint config files to your project root and `lint` will detect them automatically:

- `eslint.config.ts`: The typed version of the configuration file, ideal if you are working with TypeScript.

- `eslint.config.js`: A standard JavaScript file for ESLint configuration, suitable for projects not using TypeScript.

> [!NOTE]
> When creating your own ESLint config file, you must manually add the `pvtnbr` config. Read the section below to learn how.

### `--help`
```
lint

by @pvtnbr/eslint-config

Usage:
  lint [flags...] <files...>

Flags:
      --cache                          Only check changed files
      --cache-location <string>        Path to the cache file or directory
      --fix                            Automatically fix problems
  -h, --help                           Show help
      --ignore-pattern <string>        Pattern of files to ignore
      --node <string>                  Enable Node.js rules. Pass in a glob to specify files
      --quiet                          Report errors only
      --staged                         Only lint staged files within the files passed in
```

## ESLint setup

To use the `eslint` command, create a [flat configuration](https://eslint.org/docs/latest/use/configure/configuration-files-new) file `eslint.config.js` at your project root.

> [!TIP]
> If you'd like to use TypeScript for your config file (`eslint.config.ts`), use the `lint` command from the previous section. The `eslint` command only supports `eslint.config.js`.

### Simple config
If you want a simple setup with no customization, create the following `eslint.config.js`:

Module:
```js
export { default } from '@pvtnbr/eslint-config'
```

CommonJS:
```js
module.exports = require('@pvtnbr/eslint-config')
```

### Extended config

In `eslint.config.js`:

Module:
```js
// @ts-check

import { defineConfig, pvtnbr } from '@pvtnbr/eslint-config'

export default defineConfig([
    {
        // Don't lint these files
        ignores: [
            'tests/fixtures/**/*'
        ]
    },

    // Configure the pvtnbr config
    ...pvtnbr({

        // Indicate Node.js project
        node: true,

        // Indicate Vue.js project (auto-detected by default)
        vue: true
    })

    // Other configs...
])
```

CommonJS:
```js
// @ts-check

const { defineConfig, pvtnbr } = require('@pvtnbr/eslint-config')

module.exports = defineConfig([
    {
        // Don't lint these files
        ignores: [
            'tests/fixtures/**/*'
        ]
    },

    // Configure the pvtnbr config
    ...pvtnbr({

        // Indicate Node.js project or pass in file paths
        node: true
    })

    // Other configs...
])
```

> [!TIP]
> If you'd like to type check your `eslint.config.js` file, you can add [`// @ts-check`](https://www.typescriptlang.org/docs/handbook/intro-to-js-ts.html#ts-check) to the top.


## Linting coverage

This ESLint config comprehensively supports a variety of languages and file types, ensuring coding standards and best practices across your project.

| Language/File Type | Extensions |
| ------------------ | -------------------- |
| JavaScript | `.js`, `.cjs`, `.mjs` |
| Node.js | `.cjs`, `.mjs` |
| Service Workers | `.sw.js`, `.sw.ts` |
| TypeScript | `.ts`, `.cts`, `.mts`, `.d.ts` |
| Vue.js | `.vue` |
| React | `.jsx`, `.tsx` |
| JSON | `.json`, `.json5`, `.jsonc` |
| YML | `.yml`, `.yaml` |
| Markdown | `.md` |


### Integrated plugins

Each plugin in this ESLint configuration targets specific aspects of your code, ensuring quality and consistency.

| Plugin | Focus area |
| ------ | ---------- |
| [eslint-comments](https://www.npmjs.com/package/@eslint-community/eslint-plugin-eslint-comments) | ESLint directive comments |
| [node](https://www.npmjs.com/package/eslint-plugin-node) | Node.js coding practices |
| [@typescript-eslint](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin) | TypeScript coding Practices |
| [@stylistic](https://www.npmjs.com/package/@stylistic/eslint-plugin) | JavaScript & TypeScript code style |
| [promise](https://www.npmjs.com/package/eslint-plugin-promise) | Promises best practices |
| [regexp](https://www.npmjs.com/package/eslint-plugin-regexp) | Regular Expressions best practices |
| [import](https://www.npmjs.com/package/eslint-plugin-import) | ES6+ Import/Export |
| [jsonc](https://www.npmjs.com/package/eslint-plugin-jsonc) | JSON, JSON5, and JSONC style |
| [yml](https://www.npmjs.com/package/eslint-plugin-yml) | YAML style |
| [vue](https://www.npmjs.com/package/eslint-plugin-vue) | Vue.js Templates & Scripts |
| [react](https://www.npmjs.com/package/eslint-plugin-react) <!--& [react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)--> | React best practices<!--& React Hooks--> |
| [markdown](https://www.npmjs.com/package/eslint-plugin-markdown) | Markdown embedded code blocks |
| [no-use-extend-native](https://www.npmjs.com/package/eslint-plugin-no-use-extend-native) | Native prototype extensions |
| [unicorn](https://www.npmjs.com/package/eslint-plugin-unicorn) | Miscellaneous code quality rules |
| [Custom](https://github.com/privatenumber/eslint-config/tree/develop/src/custom-rules) | Custom rules made for this config |

## API

### pvtbr(options)

The main config factory. It takes an object of options and returns a config object.

#### options.node

Type: `boolean | string[]`

Default: `false`

Whether to lint Node.js code. When `true`, it will treat all files as Node.js files. You can also pass in an array of glob patterns to specify which files are Node.js files.

### defineConfig(configs)

An identity function to enforce type checking on the config.

#### configs

Type: `FlatConfig | FlatConfig[]`

## Other ESLint configs

Make sure you also check out these awesome ESLint configs. They are a constant source of inspiration for me, and are great alternatives to consider.

- [antfu/eslint-config](https://github.com/antfu/eslint-config) by [@antfu](https://github.com/antfu)
- [sxzz/eslint-config](https://github.com/sxzz/eslint-config) by [@sxzz](https://github.com/sxzz)
- [@ota-meshi/eslint-plugin](https://github.com/ota-meshi/eslint-plugin) by [@ota-meshi](https://github.com/ota-meshi)
- [standard config](https://github.com/standard/eslint-config-standard) by [@feross](https://github.com/feross)
