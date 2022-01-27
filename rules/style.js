module.exports = {
	rules: {
		// https://eslint.org/docs/rules/array-bracket-newline
		'array-bracket-newline': ['error', 'consistent'],

		// enforce line breaks between array elements
		// https://eslint.org/docs/rules/array-element-newline
		'array-element-newline': ['error', 'consistent'],

		// enforce spacing inside array brackets
		'array-bracket-spacing': ['error', 'never'],

		// enforce spacing inside single-line blocks
		// https://eslint.org/docs/rules/block-spacing
		'block-spacing': ['error', 'always'],

		// enforce one true brace style
		'brace-style': ['error', '1tbs', { allowSingleLine: true }],

		// require camel case names
		camelcase: ['error', { properties: 'never', ignoreDestructuring: false }],

		// require trailing commas in multiline object literals
		'comma-dangle': ['error', {
			arrays: 'always-multiline',
			objects: 'always-multiline',
			imports: 'always-multiline',
			exports: 'always-multiline',
			functions: 'always-multiline',
		}],

		// enforce spacing before and after comma
		'comma-spacing': ['error', { before: false, after: true }],

		// enforce one true comma style
		'comma-style': ['error', 'last', {
			exceptions: {
				ArrayExpression: false,
				ArrayPattern: false,
				ArrowFunctionExpression: false,
				CallExpression: false,
				FunctionDeclaration: false,
				FunctionExpression: false,
				ImportDeclaration: false,
				ObjectExpression: false,
				ObjectPattern: false,
				VariableDeclaration: false,
				NewExpression: false,
			},
		}],

		// disallow padding inside computed properties
		'computed-property-spacing': ['error', 'never'],

		// enforce newline at the end of file, with no multiple empty lines
		'eol-last': ['error', 'always'],

		// https://eslint.org/docs/rules/function-call-argument-newline
		'function-call-argument-newline': ['error', 'consistent'],

		// enforce spacing between functions and their invocations
		// https://eslint.org/docs/rules/func-call-spacing
		'func-call-spacing': ['error', 'never'],

		// requires function names to match the name of the variable or property to which they are
		// assigned
		// https://eslint.org/docs/rules/func-name-matching
		'func-name-matching': ['off', 'always', {
			includeCommonJSModuleExports: false,
			considerPropertyDescriptor: true,
		}],

		// require function expressions to have a name
		// https://eslint.org/docs/rules/func-names
		'func-names': 'warn',

		// https://eslint.org/docs/rules/func-style
		'func-style': ['error', 'declaration', { allowArrowFunctions: true }],

		// enforce consistent line breaks inside function parentheses
		// https://eslint.org/docs/rules/function-paren-newline
		'function-paren-newline': ['error', 'consistent'],

		// https://eslint.org/docs/rules/id-blacklist
		'id-blacklist': 'off',

		// disallow specified identifiers
		// https://eslint.org/docs/rules/id-denylist
		'id-denylist': 'off',

		// this option enforces minimum and maximum identifier lengths
		// (variable names, property names etc.)
		'id-length': 'off',

		// require identifiers to match the provided regular expression
		'id-match': 'off',

		// Enforce the location of arrow function bodies with implicit returns
		// https://eslint.org/docs/rules/implicit-arrow-linebreak
		'implicit-arrow-linebreak': ['error', 'beside'],

		// this option sets a specific tab width for your code
		// https://eslint.org/docs/rules/indent
		indent: ['error', 'tab', {
			SwitchCase: 1,
			VariableDeclarator: 1,
			outerIIFEBody: 1,
			// MemberExpression: null,
			FunctionDeclaration: {
				parameters: 1,
				body: 1,
			},
			FunctionExpression: {
				parameters: 1,
				body: 1,
			},
			CallExpression: {
				arguments: 1,
			},
			ArrayExpression: 1,
			ObjectExpression: 1,
			ImportDeclaration: 1,
			flatTernaryExpressions: false,
			ignoredNodes: [
				// Don't fix indentations in template literals
				'TemplateLiteral > *',

				// From https://github.com/benjamn/ast-types/blob/HEAD/def/jsx.js
				'JSXElement',
				'JSXElement > *',
				'JSXAttribute',
				'JSXIdentifier',
				'JSXNamespacedName',
				'JSXMemberExpression',
				'JSXSpreadAttribute',
				'JSXExpressionContainer',
				'JSXOpeningElement',
				'JSXClosingElement',
				'JSXFragment',
				'JSXOpeningFragment',
				'JSXClosingFragment',
				'JSXText',
				'JSXEmptyExpression',
				'JSXSpreadChild',
			],
			ignoreComments: false,
		}],

		// enforces spacing between keys and values in object literal properties
		'key-spacing': ['error', { beforeColon: false, afterColon: true }],

		// require a space before & after certain keywords
		'keyword-spacing': ['error', {
			before: true,
			after: true,
			overrides: {
				return: { after: true },
				throw: { after: true },
				case: { after: true },
			},
		}],

		// enforce consistent 'LF' or 'CRLF' as linebreaks
		// https://eslint.org/docs/rules/linebreak-style
		'linebreak-style': ['error', process.platform === 'win32' ? 'windows' : 'unix'],

		// require or disallow an empty line between class members
		// https://eslint.org/docs/rules/lines-between-class-members
		'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: false }],

		// enforces empty lines around comments
		'lines-around-comment': 'off',

		// specify the maximum depth that blocks can be nested
		'max-depth': ['off', 4],

		// specify the maximum length of a line in your program
		// https://eslint.org/docs/rules/max-len
		'max-len': ['error', 100, 2, {
			ignoreUrls: true,
			ignoreComments: false,
			ignoreRegExpLiterals: true,
			ignoreStrings: true,
			ignoreTemplateLiterals: true,
		}],

		// specify the max number of lines in a file
		// https://eslint.org/docs/rules/max-lines
		'max-lines': ['off', {
			max: 300,
			skipBlankLines: true,
			skipComments: true,
		}],

		// enforce a maximum function length
		// https://eslint.org/docs/rules/max-lines-per-function
		'max-lines-per-function': ['off', {
			max: 50,
			skipBlankLines: true,
			skipComments: true,
			IIFEs: true,
		}],

		// https://eslint.org/docs/rules/max-nested-callbacks
		'max-nested-callbacks': ['warn', 4],

		// https://eslint.org/docs/rules/max-params
		'max-params': ['warn', 5],

		// https://eslint.org/docs/rules/max-statements
		// Consider test "describe()" containing many tests
		// 'max-statements': ['warn', 10],

		// https://eslint.org/docs/rules/max-statements-per-line
		'max-statements-per-line': ['warn', { max: 1 }],

		// https://eslint.org/docs/rules/multiline-ternary
		'multiline-ternary': ['error', 'always-multiline'],

		// require a capital letter for constructors
		'new-cap': ['error', {
			newIsCap: true,
			newIsCapExceptions: [],
			capIsNew: false,
			capIsNewExceptions: ['Immutable.Map', 'Immutable.Set', 'Immutable.List'],
		}],

		// disallow the omission of parentheses when invoking a constructor with no arguments
		// https://eslint.org/docs/rules/new-parens
		'new-parens': 'error',

		// allow/disallow an empty newline after var statement
		'newline-after-var': 'off',

		// https://eslint.org/docs/rules/newline-before-return
		'newline-before-return': 'off',

		// enforces new line after each method call in the chain to make it
		// more readable and easy to maintain
		// https://eslint.org/docs/rules/newline-per-chained-call
		'newline-per-chained-call': ['error', { ignoreChainWithDepth: 4 }],

		// disallow use of the Array constructor
		'no-array-constructor': 'error',

		// disallow use of bitwise operators
		// https://eslint.org/docs/rules/no-bitwise
		'no-bitwise': 'error',

		// disallow comments inline after code
		'no-inline-comments': 'off',

		// disallow if as the only statement in an else block
		// https://eslint.org/docs/rules/no-lonely-if
		'no-lonely-if': 'error',

		// disallow un-paren'd mixes of different operators
		// https://eslint.org/docs/rules/no-mixed-operators
		'no-mixed-operators': ['error', {
			// the list of arithmetic groups disallows mixing `%` and `**`
			// with other arithmetic operators.
			groups: [
				['%', '**'],
				['%', '+'],
				['%', '-'],
				['%', '*'],
				['%', '/'],
				['/', '*'],
				['&', '|', '<<', '>>', '>>>'],
				['==', '!=', '===', '!=='],
				['&&', '||'],
			],
			allowSamePrecedence: false,
		}],

		// disallow mixed spaces and tabs for indentation
		'no-mixed-spaces-and-tabs': 'error',

		// disallow use of chained assignment expressions
		// https://eslint.org/docs/rules/no-multi-assign
		'no-multi-assign': ['error'],

		// disallow multiple empty lines, only one newline at the end, and no new lines at the beginning
		// https://eslint.org/docs/rules/no-multiple-empty-lines
		'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 0 }],

		// disallow negated conditions
		// https://eslint.org/docs/rules/no-negated-condition
		'no-negated-condition': 'off',

		// disallow nested ternary expressions
		'no-nested-ternary': 'error',

		// disallow use of the Object constructor
		'no-new-object': 'error',

		// disallow use of unary operators, ++ and --
		// https://eslint.org/docs/rules/no-plusplus
		'no-plusplus': 'error',

		// disallow certain syntax forms
		// https://eslint.org/docs/rules/no-restricted-syntax
		'no-restricted-syntax': [
			'error',
			{
				selector: 'LabeledStatement',
				message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
			},
			{
				selector: 'WithStatement',
				message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
			},
		],

		// disallow trailing whitespace at the end of lines
		'no-trailing-spaces': ['error', {
			skipBlankLines: false,
			ignoreComments: false,
		}],

		// disallow the use of Boolean literals in conditional expressions
		// also, prefer `a || b` over `a ? a : b`
		// https://eslint.org/docs/rules/no-unneeded-ternary
		'no-unneeded-ternary': ['error', {
			defaultAssignment: false,
		}],

		// disallow whitespace before properties
		// https://eslint.org/docs/rules/no-whitespace-before-property
		'no-whitespace-before-property': 'error',

		// enforce the location of single-line statements
		// https://eslint.org/docs/rules/nonblock-statement-body-position
		'nonblock-statement-body-position': ['error', 'beside', {
			overrides: {},
		}],

		// require padding inside curly braces
		'object-curly-spacing': ['error', 'always'],

		// enforce line breaks between braces
		// https://eslint.org/docs/rules/object-curly-newline
		'object-curly-newline': ['error', {
			ObjectExpression: { minProperties: 4, multiline: true, consistent: true },
			ObjectPattern: { minProperties: 4, multiline: true, consistent: true },
			ImportDeclaration: { minProperties: 4, multiline: true, consistent: true },
			ExportDeclaration: { minProperties: 4, multiline: true, consistent: true },
		}],

		// enforce "same line" or "multiple line" on object properties.
		// https://eslint.org/docs/rules/object-property-newline
		'object-property-newline': ['error', {
			allowAllPropertiesOnSameLine: true,
		}],

		// allow just one var statement per function
		'one-var': ['error', 'never'],

		// require a newline around variable declaration
		// https://eslint.org/docs/rules/one-var-declaration-per-line
		'one-var-declaration-per-line': ['error', 'always'],

		// require assignment operator shorthand where possible or prohibit it entirely
		// https://eslint.org/docs/rules/operator-assignment
		'operator-assignment': ['error', 'always'],

		// Requires operator at the beginning of the line in multiline statements
		// https://eslint.org/docs/rules/operator-linebreak
		'operator-linebreak': ['error', 'before', {
			overrides: {
				'=': 'none',
			},
		}],

		// disallow padding within blocks
		'padded-blocks': ['error', {
			blocks: 'never',
			classes: 'never',
			switches: 'never',
		}, {
			allowSingleLineBlocks: true,
		}],

		// Require or disallow padding lines between statements
		// https://eslint.org/docs/rules/padding-line-between-statements
		'padding-line-between-statements': [
			'error',
			{
				blankLine: 'always',
				prev: 'directive',
				next: '*',
			},
		],

		// https://eslint.org/docs/rules/prefer-exponentiation-operator
		'prefer-exponentiation-operator': 'error',

		// Prefer use of an object spread over Object.assign
		// https://eslint.org/docs/rules/prefer-object-spread
		'prefer-object-spread': 'error',

		// require quotes around object literal property names
		// https://eslint.org/docs/rules/quote-props.html
		'quote-props': ['error', 'as-needed', { keywords: false, unnecessary: true, numbers: false }],

		// specify whether double or single quotes should be used
		quotes: ['error', 'single', { avoidEscape: true }],

		// require or disallow use of semicolons instead of ASI
		semi: ['error', 'always'],

		// enforce spacing before and after semicolons
		'semi-spacing': ['error', { before: false, after: true }],

		// Enforce location of semicolons
		// https://eslint.org/docs/rules/semi-style
		'semi-style': ['error', 'last'],

		// requires object keys to be sorted
		'sort-keys': ['off', 'asc', { caseSensitive: false, natural: true }],

		// sort variables within the same declaration block
		'sort-vars': 'off',

		// require or disallow space before blocks
		'space-before-blocks': 'error',

		// require or disallow space before function opening parenthesis
		// https://eslint.org/docs/rules/space-before-function-paren
		'space-before-function-paren': ['error', {
			anonymous: 'always',
			named: 'never',
			asyncArrow: 'always',
		}],

		// require or disallow spaces inside parentheses
		'space-in-parens': ['error', 'never'],

		// require spaces around operators
		'space-infix-ops': 'error',

		// Require or disallow spaces before/after unary operators
		// https://eslint.org/docs/rules/space-unary-ops
		'space-unary-ops': ['error', {
			words: true,
			nonwords: false,
			overrides: {},
		}],

		// require or disallow a space immediately following the // or /* in a comment
		// https://eslint.org/docs/rules/spaced-comment
		'spaced-comment': ['error', 'always', {
			line: {
				exceptions: ['-', '+'],
				markers: ['=', '!', '/'], // space here to support sprockets directives, slash for TS /// comments
			},
			block: {
				exceptions: ['-', '+'],
				markers: ['=', '!', ':', '::'], // space here to support sprockets directives and flow comment types
				balanced: true,
			},
		}],

		// Enforce spacing around colons of switch statements
		// https://eslint.org/docs/rules/switch-colon-spacing
		'switch-colon-spacing': ['error', { after: true, before: false }],

		// Require or disallow spacing between template tags and their literals
		// https://eslint.org/docs/rules/template-tag-spacing
		'template-tag-spacing': ['error', 'never'],

		// require or disallow the Unicode Byte Order Mark
		// https://eslint.org/docs/rules/unicode-bom
		'unicode-bom': ['error', 'never'],
	},
};