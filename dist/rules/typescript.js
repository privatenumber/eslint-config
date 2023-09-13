"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var import_recommended_module = __toESM(require("eslint-plugin-n/lib/configs/recommended-module.js"));
var import_recommended_script = __toESM(require("eslint-plugin-n/lib/configs/recommended-script.js"));
var import_create_config = require("../utils/create-config.js");
var import_is_installed = require("../utils/is-installed.js");
var import_base = __toESM(require("./base.js"));
var import_imports = __toESM(require("./imports.js"));
const noExtraneousDependenciesConfig = import_imports.default.rules["import/no-extraneous-dependencies"][1];
module.exports = (0, import_create_config.createConfig)(
  (0, import_is_installed.isInstalled)("typescript") ? {
    overrides: [
      // Setting as an override allows .ts files to be
      // linted without specifying it on the user-end
      {
        files: "*.{ts,tsx,mts,cts,vue}",
        extends: [
          "plugin:@typescript-eslint/recommended",
          // https://github.com/import-js/eslint-plugin-import/blob/6c8981d/config/typescript.js
          "plugin:import/typescript"
        ],
        settings: {
          "import/resolver": {
            typescript: {}
          }
        },
        /**
         * Slow and cant disable for markdown files
         * Was only using for @typescript-eslint/return-await
         *
         * Let's see if:
         *  - We can detect tsconfig.json and only enable this for the files in `include`
         *  - We can generate a fallback tsconfig.json that just has strict mode enabled
         */
        // parserOptions: {
        // 	// Gets closest tsconfig.json
        // 	project: '**/tsconfig.json',
        // },
        rules: {
          /**
           * Suddenly requires parserServices to be generated
           *   Error while loading rule '@typescript-eslint/consistent-type-assertions':
           *     You have used a rule which requires parserServices to be generated.
           *     You must therefore provide a value for the "parserOptions.project" property for @typescript-eslint/parser.
           * https://github.com/typescript-eslint/typescript-eslint/pull/6885#issuecomment-1701892123
           */
          // '@typescript-eslint/consistent-type-assertions': 'error',
          "@typescript-eslint/member-delimiter-style": "error",
          "@typescript-eslint/no-shadow": import_base.default.rules["no-shadow"],
          "@typescript-eslint/no-unused-vars": [
            "error",
            {
              ...import_base.default.rules["no-unused-vars"][1],
              argsIgnorePattern: "^_",
              caughtErrorsIgnorePattern: "^_",
              /**
               * TypeScript ignores any variables that are prefixed with _
               * https://github.com/microsoft/TypeScript/pull/9464
               */
              varsIgnorePattern: "^_"
            }
          ],
          // Function expression can be used to type a function
          "func-style": "off",
          // TS disallows .ts extension
          // https://github.com/Microsoft/TypeScript/issues/27481
          "import/extensions": ["error", "ignorePackages", {
            ts: "never",
            tsx: "never"
          }],
          // Always require await when returning promise
          // https://github.com/goldbergyoni/nodebestpractices/blob/5ba537d/sections/errorhandling/returningpromises.md
          // '@typescript-eslint/return-await': ['error', 'always'],
          "import/no-extraneous-dependencies": ["error", {
            ...noExtraneousDependenciesConfig,
            devDependencies: noExtraneousDependenciesConfig.devDependencies.map(
              (pattern) => pattern.replace(".js", ".{js,ts}")
            )
          }],
          // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-shadow.md
          "no-shadow": "off",
          "prefer-rest-params": "off",
          // Not always possible to destructue at top-level when the variable is ambigious
          "unicorn/consistent-destructuring": "off",
          // Allow functions to be passed in only in TS because it's easy to see their types
          "unicorn/no-array-callback-reference": "off",
          // Could be used to pass in an explicit `undefined` to a required parameter
          "unicorn/no-useless-undefined": "off"
        }
      },
      {
        files: "*.cts",
        globals: import_recommended_script.default.eslintrc.globals,
        parserOptions: import_recommended_script.default.eslintrc.parserOptions
      },
      {
        files: "*.mts",
        globals: import_recommended_module.default.eslintrc.globals,
        parserOptions: import_recommended_module.default.eslintrc.parserOptions
      }
    ]
  } : {}
);
