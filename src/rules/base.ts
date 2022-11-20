import confusingBrowserGlobals from 'confusing-browser-globals';
import { createConfig } from '../utils/create-config.js';
import { isInstalled } from '../utils/is-installed.js';

export = createConfig({
	// https://github.com/eslint/eslint/blob/main/conf/eslint-recommended.js
	extends: 'eslint:recommended',

	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
	},

	env: {
		/**
		 * Globals shared across Node.js and Browser
		 * https://github.com/sindresorhus/globals/blob/main/globals.json#LL1710C3-L1710C24
		 */
		 'shared-node-browser': true,
	},

	// parserOptions: {
	// 	ecmaVersion: 6,
	// 	sourceType: 'module',
	// 	ecmaFeatures: {
	// 		generators: false,
	// 		objectLiteralDuplicateProperties: false,
	// 	},
	// },

	rules: {
		'accessor-pairs': 'error',

		// https://eslint.org/docs/rules/array-callback-return
		'array-callback-return': ['error', { allowImplicit: true }],

		// treat var statements as if they were block scoped
		'block-scoped-var': 'error',

		// https://eslint.org/docs/rules/complexity
		complexity: ['warn', 10],

		'consistent-return': 'off',

		curly: 'error',

		// require default case in switch statements
		'default-case': ['error', { commentPattern: '^no default$' }],

		// https://eslint.org/docs/rules/default-case-last
		'default-case-last': 'error',

		// https://eslint.org/docs/rules/default-param-last
		'default-param-last': 'error',

		'dot-notation': ['error', { allowKeywords: true }],

		// https://eslint.org/docs/rules/dot-location
		'dot-location': ['error', 'property'],

		// https://eslint.org/docs/rules/eqeqeq
		eqeqeq: ['error', 'always', { null: 'ignore' }],

		// https://eslint.org/docs/rules/grouped-accessor-pairs
		'grouped-accessor-pairs': ['error', 'getBeforeSet'],

		// make sure for-in loops have an if statement
		'guard-for-in': 'error',

		// enforce a maximum number of classes per file
		// https://eslint.org/docs/rules/max-classes-per-file
		'max-classes-per-file': ['error', 1],

		// disallow the use of alert, confirm, and prompt
		'no-alert': 'warn',

		// disallow use of arguments.caller or arguments.callee
		'no-caller': 'error',

		// disallow lexical declarations in case/default clauses
		// https://eslint.org/docs/rules/no-case-declarations.html
		'no-case-declarations': 'error',

		// https://eslint.org/docs/rules/no-constructor-return
		'no-constructor-return': 'error',

		// disallow else after a return in an if
		// https://eslint.org/docs/rules/no-else-return
		'no-else-return': ['error', { allowElseIf: false }],

		// disallow empty functions, except for standalone funcs/arrows
		// https://eslint.org/docs/rules/no-empty-function
		'no-empty-function': ['error', {
			allow: [
				'arrowFunctions',
				'functions',
				'methods',
			],
		}],

		// disallow empty destructuring patterns
		// https://eslint.org/docs/rules/no-empty-pattern
		'no-empty-pattern': 'error',

		'no-eq-null': 'error',

		'no-eval': 'error',

		'no-extend-native': 'error',

		// disallow unnecessary function binding
		'no-extra-bind': 'error',

		// https://eslint.org/docs/rules/no-extra-label
		'no-extra-label': 'error',

		// disallow fallthrough of case statements
		'no-fallthrough': 'error',

		// disallow the use of leading or trailing decimal points in numeric literals
		'no-floating-decimal': 'error',

		// disallow reassignments of native objects or read-only globals
		// https://eslint.org/docs/rules/no-global-assign
		'no-global-assign': 'error',

		// disallow implicit type conversions
		// https://eslint.org/docs/rules/no-implicit-coercion
		'no-implicit-coercion': ['off', {
			boolean: false,
			number: true,
			string: true,
			allow: [],
		}],

		// disallow var and named functions in global scope
		// https://eslint.org/docs/rules/no-implicit-globals
		'no-implicit-globals': 'error',

		'no-implied-eval': 'error',

		'no-iterator': 'error',

		'no-labels': ['error', {
			// Necessary for breaking multi-level loops
			allowLoop: true,
			allowSwitch: false,
		}],

		// disallow unnecessary nested blocks
		'no-lone-blocks': 'error',

		// disallow creation of functions within loops
		'no-loop-func': 'error',

		// https://eslint.org/docs/rules/no-magic-numbers
		'no-magic-numbers': ['off', {
			ignore: [],
			ignoreArrayIndexes: true,
			enforceConst: true,
			detectObjects: false,
		}],

		// disallow use of multiple spaces
		'no-multi-spaces': ['error', {
			ignoreEOLComments: false,
		}],

		// disallow use of multiline strings
		'no-multi-str': 'error',

		// disallow use of new operator when not part of the assignment or comparison
		'no-new': 'error',

		// disallow use of new operator for Function object
		'no-new-func': 'error',

		// disallows creating new instances of String, Number, and Boolean
		'no-new-wrappers': 'error',

		// https://eslint.org/docs/rules/no-nonoctal-decimal-escape
		'no-nonoctal-decimal-escape': 'error',

		// disallow use of (old style) octal literals
		'no-octal': 'error',

		// disallow use of octal escape sequences in string literals, such as
		// var foo = 'Copyright \251';
		'no-octal-escape': 'error',

		// disallow usage of __proto__ property
		'no-proto': 'error',

		// disallow declaring the same variable more than once
		'no-redeclare': 'error',

		// disallow certain object properties
		// https://eslint.org/docs/rules/no-restricted-properties
		'no-restricted-properties': [
			'error',
			{
				object: 'arguments',
				property: 'callee',
				message: 'arguments.callee is deprecated',
			},
			{
				object: 'global',
				property: 'isFinite',
				message: 'Please use Number.isFinite instead',
			},
			{
				object: 'self',
				property: 'isFinite',
				message: 'Please use Number.isFinite instead',
			},
			{
				object: 'window',
				property: 'isFinite',
				message: 'Please use Number.isFinite instead',
			},
			{
				object: 'global',
				property: 'isNaN',
				message: 'Please use Number.isNaN instead',
			},
			{
				object: 'self',
				property: 'isNaN',
				message: 'Please use Number.isNaN instead',
			},
			{
				object: 'window',
				property: 'isNaN',
				message: 'Please use Number.isNaN instead',
			},
			{
				property: '__defineGetter__',
				message: 'Please use Object.defineProperty instead.',
			},
			{
				property: '__defineSetter__',
				message: 'Please use Object.defineProperty instead.',
			},
			{
				object: 'Math',
				property: 'pow',
				message: 'Use the exponentiation operator (**) instead.',
			},
		],

		// disallow use of assignment in return statement
		'no-return-assign': ['error', 'always'],

		// disallow use of `javascript:` urls.
		'no-script-url': 'error',

		// disallow self assignment
		// https://eslint.org/docs/rules/no-self-assign
		'no-self-assign': ['error', {
			props: true,
		}],

		// disallow comparisons where both sides are exactly the same
		'no-self-compare': 'error',

		// disallow use of comma operator
		'no-sequences': 'error',

		// restrict what can be thrown as an exception
		'no-throw-literal': 'error',

		// disallow unmodified conditions of loops
		// https://eslint.org/docs/rules/no-unmodified-loop-condition
		'no-unmodified-loop-condition': 'off',

		// disallow usage of expressions in statement position
		'no-unused-expressions': ['error', {
			allowShortCircuit: false,
			allowTernary: false,
			allowTaggedTemplates: false,
		}],

		// disallow unused labels
		// https://eslint.org/docs/rules/no-unused-labels
		'no-unused-labels': 'error',

		// disallow unnecessary .call() and .apply()
		'no-useless-call': 'off',

		// Disallow unnecessary catch clauses
		// https://eslint.org/docs/rules/no-useless-catch
		'no-useless-catch': 'error',

		// disallow useless string concatenation
		// https://eslint.org/docs/rules/no-useless-concat
		'no-useless-concat': 'error',

		// disallow unnecessary string escaping
		// https://eslint.org/docs/rules/no-useless-escape
		'no-useless-escape': 'error',

		// disallow redundant return; keywords
		// https://eslint.org/docs/rules/no-useless-return
		'no-useless-return': 'error',

		// disallow use of void operator
		// https://eslint.org/docs/rules/no-void
		'no-void': 'error',

		// disallow usage of configurable warning terms in comments: e.g. todo
		'no-warning-comments': ['off', { terms: ['todo', 'fixme', 'xxx'], location: 'start' }],

		// disallow use of the with statement
		'no-with': 'error',

		// require using Error objects as Promise rejection reasons
		// https://eslint.org/docs/rules/prefer-promise-reject-errors
		'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],

		// Suggest using named capture group in regular expression
		// https://eslint.org/docs/rules/prefer-named-capture-group
		'prefer-named-capture-group': 'off',

		// https://eslint.org/docs/rules/prefer-regex-literals
		'prefer-regex-literals': ['error', {
			disallowRedundantWrapping: true,
		}],

		// require use of the second argument for parseInt()
		radix: 'error',

		// require `await` in `async function` (note: this is a horrible rule that should never be used)
		// https://eslint.org/docs/rules/require-await
		'require-await': 'off',

		// Enforce the use of u flag on RegExp
		// https://eslint.org/docs/rules/require-unicode-regexp
		'require-unicode-regexp': 'off',

		// requires to declare all vars on top of their containing scope
		'vars-on-top': 'error',

		// require immediate function invocation to be wrapped in parentheses
		// https://eslint.org/docs/rules/wrap-iife.html
		'wrap-iife': ['error', 'inside', { functionPrototypeMethods: false }],

		// require or disallow Yoda conditions
		yoda: 'error',

			// Enforce “for” loop update clause moving the counter in the right direction
		// https://eslint.org/docs/rules/for-direction
		'for-direction': 'error',

		// Enforces that a return statement is present in property getters
		// https://eslint.org/docs/rules/getter-return
		'getter-return': ['error', { allowImplicit: true }],

		// disallow using an async function as a Promise executor
		// https://eslint.org/docs/rules/no-async-promise-executor
		'no-async-promise-executor': 'error',

		// Disallow comparisons to negative zero
		// https://eslint.org/docs/rules/no-compare-neg-zero
		'no-compare-neg-zero': 'error',

		// disallow assignment in conditional expressions
		'no-cond-assign': ['error', 'always'],

		// disallow use of console
		'no-console': 'warn',

		// disallow use of constant expressions in conditions
		'no-constant-condition': 'warn',

		// disallow control characters in regular expressions
		'no-control-regex': 'error',

		// disallow use of debugger
		'no-debugger': 'error',

		// disallow duplicate arguments in functions
		'no-dupe-args': 'error',

		// Disallow duplicate conditions in if-else-if chains
		// https://eslint.org/docs/rules/no-dupe-else-if
		'no-dupe-else-if': 'error',

		// disallow duplicate keys when creating object literals
		'no-dupe-keys': 'error',

		// disallow a duplicate case label.
		'no-duplicate-case': 'error',

		// disallow empty statements
		'no-empty': ['error', {
			allowEmptyCatch: true,
		}],

		// disallow the use of empty character classes in regular expressions
		'no-empty-character-class': 'error',

		// disallow assigning to the exception in a catch block
		'no-ex-assign': 'error',

		// disallow double-negation boolean casts in a boolean context
		// https://eslint.org/docs/rules/no-extra-boolean-cast
		'no-extra-boolean-cast': 'error',

		// disallow unnecessary parentheses
		// https://eslint.org/docs/rules/no-extra-parens
		'no-extra-parens': ['off', 'all', {
			conditionalAssign: true,
			nestedBinaryExpressions: false,
			returnAssign: false,
			ignoreJSX: 'all', // delegate to eslint-plugin-react
			enforceForArrowConditionals: false,
		}],

		// disallow unnecessary semicolons
		'no-extra-semi': 'error',

		// disallow overwriting functions written as function declarations
		'no-func-assign': 'error',

		// https://eslint.org/docs/rules/no-import-assign
		'no-import-assign': 'error',

		// https://eslint.org/docs/latest/rules/no-inner-declarations
		// Function declarations were only allowed at the root pre-ES6. Now, it's fine.
		'no-inner-declarations': 'off',

		// disallow invalid regular expression strings in the RegExp constructor
		'no-invalid-regexp': 'error',

		// disallow irregular whitespace outside of strings and comments
		'no-irregular-whitespace': 'error',

		// https://eslint.org/docs/rules/no-loss-of-precision
		'no-loss-of-precision': 'error',

		// Disallow characters which are made with multiple code points in character class syntax
		// https://eslint.org/docs/rules/no-misleading-character-class
		'no-misleading-character-class': 'error',

		// disallow the use of object properties of the global object (Math and JSON) as functions
		'no-obj-calls': 'error',

		// https://eslint.org/docs/rules/no-promise-executor-return
		'no-promise-executor-return': 'error',

		// disallow use of Object.prototypes builtins directly
		// https://eslint.org/docs/rules/no-prototype-builtins
		'no-prototype-builtins': 'error',

		// disallow multiple spaces in a regular expression literal
		'no-regex-spaces': 'error',

		// https://eslint.org/docs/rules/no-setter-return
		'no-setter-return': 'error',

		// disallow sparse arrays
		'no-sparse-arrays': 'error',

		// Disallow template literal placeholder syntax in regular strings
		// https://eslint.org/docs/rules/no-template-curly-in-string
		'no-template-curly-in-string': 'error',

		// Avoid code that looks like two expressions but is actually one
		// https://eslint.org/docs/rules/no-unexpected-multiline
		'no-unexpected-multiline': 'error',

		// disallow unreachable statements after a return, throw, continue, or break statement
		'no-unreachable': 'error',

		// https://eslint.org/docs/rules/no-unreachable-loop
		'no-unreachable-loop': 'error',

		// disallow return/throw/break/continue inside finally blocks
		// https://eslint.org/docs/rules/no-unsafe-finally
		'no-unsafe-finally': 'error',

		// disallow negating the left operand of relational operators
		// https://eslint.org/docs/rules/no-unsafe-negation
		'no-unsafe-negation': 'error',

		// https://eslint.org/docs/rules/no-useless-backreference
		'no-useless-backreference': 'error',

		// Disallow assignments that can lead to race conditions due to usage of await or yield
		// https://eslint.org/docs/rules/require-atomic-updates
		// note: not enabled because it is very buggy
		'require-atomic-updates': 'off',

		// disallow comparisons with the value NaN
		'use-isnan': 'error',

		// ensure that the results of typeof are compared against a valid string
		// https://eslint.org/docs/rules/valid-typeof
		'valid-typeof': ['error', { requireStringLiterals: true }],

		// https://eslint.org/docs/rules/arrow-body-style
		'arrow-body-style': ['error', 'as-needed'],

		// require parens in arrow function arguments
		// https://eslint.org/docs/rules/arrow-parens
		'arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],

		// require space before/after arrow function's arrow
		// https://eslint.org/docs/rules/arrow-spacing
		'arrow-spacing': ['error', { before: true, after: true }],

		// verify super() callings in constructors
		'constructor-super': 'error',

		// enforce the spacing around the * in generator functions
		// https://eslint.org/docs/rules/generator-star-spacing
		'generator-star-spacing': ['error', { before: false, after: true }],

		// disallow modifying variables of class declarations
		// https://eslint.org/docs/rules/no-class-assign
		'no-class-assign': 'error',

		// disallow arrow functions where they could be confused with comparisons
		// https://eslint.org/docs/rules/no-confusing-arrow
		'no-confusing-arrow': ['error', {
			allowParens: true,
		}],

		// disallow modifying variables that are declared using const
		'no-const-assign': 'error',

		// disallow duplicate class members
		// https://eslint.org/docs/rules/no-dupe-class-members
		'no-dupe-class-members': 'error',

		// disallow importing from the same path more than once
		// https://eslint.org/docs/rules/no-duplicate-imports
		// replaced by https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
		'no-duplicate-imports': 'off',

		// https://eslint.org/docs/rules/no-new-symbol
		'no-new-symbol': 'error',

		// https://eslint.org/docs/rules/no-restricted-exports
		'no-restricted-exports': ['error', {
			restrictedNamedExports: [
				// use `export default` to provide a default export
				// For export { default } from './foo';
				// 'default',
				'then', // this will cause tons of confusion when your module is dynamically `import()`ed
			],
		}],

		// disallow specific imports
		// https://eslint.org/docs/rules/no-restricted-imports
		'no-restricted-imports': ['off', {
			paths: [],
			patterns: [],
		}],

		// disallow to use this/super before super() calling in constructors.
		// https://eslint.org/docs/rules/no-this-before-super
		'no-this-before-super': 'error',

		// disallow useless computed property keys
		// https://eslint.org/docs/rules/no-useless-computed-key
		'no-useless-computed-key': 'error',

		// disallow unnecessary constructor
		// https://eslint.org/docs/rules/no-useless-constructor
		'no-useless-constructor': 'error',

		// disallow renaming import, export, and destructured assignments to the same name
		// https://eslint.org/docs/rules/no-useless-rename
		'no-useless-rename': ['error', {
			ignoreDestructuring: false,
			ignoreImport: false,
			ignoreExport: false,
		}],

		// require let or const instead of var
		'no-var': 'error',

		// require method and property shorthand syntax for object literals
		// https://eslint.org/docs/rules/object-shorthand
		'object-shorthand': ['error', 'always', {
			ignoreConstructors: false,
		}],

		// suggest using arrow functions as callbacks
		'prefer-arrow-callback': ['error', {
			allowNamedFunctions: false,
			allowUnboundThis: true,
		}],

		// suggest using of const declaration for variables that are never modified after declared
		'prefer-const': ['error', {
			destructuring: 'any',
			ignoreReadBeforeAssign: true,
		}],

		// Prefer destructuring from arrays and objects
		// https://eslint.org/docs/rules/prefer-destructuring
		'prefer-destructuring': ['error', {
			VariableDeclarator: {
				array: false,
				object: true,
			},
			AssignmentExpression: {
				array: true,
				object: false,
			},
		}, {
			enforceForRenamedProperties: false,
		}],

		// disallow parseInt() in favor of binary, octal, and hexadecimal literals
		// https://eslint.org/docs/rules/prefer-numeric-literals
		'prefer-numeric-literals': 'error',

		// suggest using Reflect methods where applicable
		// https://eslint.org/docs/rules/prefer-reflect
		'prefer-reflect': 'off',

		// https://eslint.org/docs/rules/prefer-rest-params
		'prefer-rest-params': 'off',

		// suggest using the spread operator instead of .apply()
		// https://eslint.org/docs/rules/prefer-spread
		'prefer-spread': 'error',

		// suggest using template literals instead of string concatenation
		// https://eslint.org/docs/rules/prefer-template
		'prefer-template': 'error',

		// disallow generator functions that do not have yield
		// https://eslint.org/docs/rules/require-yield
		'require-yield': 'error',

		// enforce spacing between object rest-spread
		// https://eslint.org/docs/rules/rest-spread-spacing
		'rest-spread-spacing': ['error', 'never'],

		// import sorting
		// https://eslint.org/docs/rules/sort-imports
		'sort-imports': ['off', {
			ignoreCase: false,
			ignoreDeclarationSort: false,
			ignoreMemberSort: false,
			memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
		}],

		// require a Symbol description
		// https://eslint.org/docs/rules/symbol-description
		'symbol-description': 'error',

		// enforce usage of spacing in template strings
		// https://eslint.org/docs/rules/template-curly-spacing
		'template-curly-spacing': 'error',

		// enforce spacing around the * in yield* expressions
		// https://eslint.org/docs/rules/yield-star-spacing
		'yield-star-spacing': ['error', 'after'],
		// https://eslint.org/docs/latest/rules/array-bracket-newline
		'array-bracket-newline': ['error', 'consistent'],

		// https://eslint.org/docs/latest/rules/array-element-newline
		'array-element-newline': ['error', 'consistent'],

		// https://eslint.org/docs/latest/rules/array-bracket-spacing
		'array-bracket-spacing': ['error', 'never'],

		// https://eslint.org/docs/latest/rules/block-spacing
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
		'linebreak-style': ['error', 'unix'],

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

		// enforce or disallow variable initializations at definition
		'init-declarations': 'off',

		// disallow the catch clause parameter name being the same as a variable in the outer scope
		'no-catch-shadow': 'off',

		// disallow deletion of variables
		'no-delete-var': 'error',

		// disallow labels that share a name with a variable
		// https://eslint.org/docs/rules/no-label-var
		'no-label-var': 'error',

		'no-restricted-globals': [
			'error',
			...confusingBrowserGlobals,
		],

		// disallow declaration of variables already declared in the outer scope
		'no-shadow': ['error', {
			allow: [
				...(isInstalled('manten')
					? ['test', 'describe', 'runTestSuite']
					: []
				),
				...(isInstalled('tasuku')
					? ['task', 'setTitle', 'setError', 'setWarning', 'setStatus', 'setOutput']
					: []
				),
			],
		}],

		// disallow shadowing of names such as arguments
		'no-shadow-restricted-names': 'error',

		// disallow use of undeclared variables unless mentioned in a /*global */ block
		'no-undef': 'error',

		// disallow use of undefined when initializing variables
		'no-undef-init': 'error',

		// disallow declaration of variables that are not used in the code
		'no-unused-vars': ['error', {
			vars: 'all',
			args: 'after-used',
			ignoreRestSiblings: true,
		}],

		// not always possible for inter-dependent functions
		'no-use-before-define': 'off',
	},
});
