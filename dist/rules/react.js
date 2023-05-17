"use strict";
var import_create_config = require("../utils/create-config");
module.exports = (0, import_create_config.createConfig)({
  overrides: [
    {
      files: "*.{jsx,tsx}",
      extends: [
        // https://github.com/yannickcr/eslint-plugin-react/blob/c8917b0/index.js
        "plugin:react/recommended",
        "plugin:react-hooks/recommended"
      ],
      settings: {
        react: {
          version: "detect"
        }
      },
      rules: {
        // https://eslint.org/docs/rules/jsx-quotes
        "jsx-quotes": ["error", "prefer-double"],
        "react/jsx-indent-props": ["error", "tab"],
        "react/jsx-max-props-per-line": ["error", {
          maximum: 1
        }],
        "unicorn/filename-case": ["error", {
          case: "pascalCase",
          ignore: [
            "\\.spec\\.tsx$"
          ]
        }]
      }
    }
  ]
});
