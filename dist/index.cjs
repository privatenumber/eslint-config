"use strict";var E=require("module"),S=require("@eslint/js"),c=require("globals"),m=require("confusing-browser-globals"),C=require("@eslint/eslintrc"),O=require("@stylistic/eslint-plugin"),d=require("eslint-plugin-n"),P=require("read-package-up"),q=require("eslint-plugin-markdown"),F=require("eslint-plugin-jsonc"),D=require("get-tsconfig"),g=require("fs");const y=E.createRequire(`${process.cwd()}/`),t=e=>{try{return y.resolve(e),!0}catch{}return!1},A=e=>Object.keys(y(e)),N=["files","ignores","languageOptions","linterOptions","plugins","rules","settings"],b=e=>{for(const o of N){const i=e[o];if(i){if(Object.freeze(i),o==="rules"){const s=i;for(const a in s)if(Object.hasOwn(s,a)){const f=s[a];f&&Object.freeze(f)}}if(o==="languageOptions"){const s=i;s.parserOptions&&Object.freeze(s.parserOptions),s.globals&&Object.freeze(s.globals)}}}return Object.freeze(e)};function r(e){return Array.isArray(e)?e.map(b):b(e)}const p=r({languageOptions:{ecmaVersion:2020,globals:c["shared-node-browser"],parserOptions:{sourceType:"module"}},rules:{"no-mixed-spaces-and-tabs":"off","no-extra-semi":"off","accessor-pairs":"error","array-callback-return":["error",{allowImplicit:!0}],"arrow-body-style":["error","as-needed"],"block-scoped-var":"error",camelcase:["error",{ignoreDestructuring:!1,properties:"never"}],complexity:["warn",10],"consistent-return":"off","constructor-super":"error",curly:"error","default-case":["error",{commentPattern:"^no default$"}],"default-case-last":"error","default-param-last":"error","dot-notation":["error",{allowKeywords:!0}],eqeqeq:["error","always",{null:"ignore"}],"for-direction":"error","func-name-matching":["off","always",{considerPropertyDescriptor:!0,includeCommonJSModuleExports:!1}],"func-names":"warn","func-style":["error","declaration",{allowArrowFunctions:!0}],"getter-return":["error",{allowImplicit:!0}],"grouped-accessor-pairs":["error","getBeforeSet"],"guard-for-in":"error","id-blacklist":"off","id-denylist":"off","id-length":"off","id-match":"off","init-declarations":"off","max-classes-per-file":["error",1],"max-depth":["off",4],"max-lines":["off",{max:300,skipBlankLines:!0,skipComments:!0}],"max-lines-per-function":["off",{IIFEs:!0,max:50,skipBlankLines:!0,skipComments:!0}],"max-nested-callbacks":["warn",4],"max-params":["warn",5],"new-cap":["error",{capIsNew:!1,capIsNewExceptions:["Immutable.Map","Immutable.Set","Immutable.List"],newIsCap:!0,newIsCapExceptions:[]}],"newline-after-var":"off","newline-before-return":"off","no-alert":"warn","no-array-constructor":"error","no-async-promise-executor":"error","no-bitwise":"error","no-caller":"error","no-case-declarations":"error","no-catch-shadow":"off","no-class-assign":"error","no-compare-neg-zero":"error","no-cond-assign":["error","always"],"no-console":"warn","no-const-assign":"error","no-constant-condition":"warn","no-constructor-return":"error","no-control-regex":"error","no-debugger":"error","no-delete-var":"error","no-dupe-args":"error","no-dupe-class-members":"error","no-dupe-else-if":"error","no-dupe-keys":"error","no-duplicate-case":"error","no-duplicate-imports":"off","no-else-return":["error",{allowElseIf:!1}],"no-empty":["error",{allowEmptyCatch:!0}],"no-empty-character-class":"error","no-empty-function":["error",{allow:["arrowFunctions","functions","methods"]}],"no-empty-pattern":"error","no-eq-null":"error","no-eval":"error","no-ex-assign":"error","no-extend-native":"error","no-extra-bind":"error","no-extra-boolean-cast":"error","no-extra-label":"error","no-fallthrough":"error","no-func-assign":"error","no-global-assign":"error","no-implicit-coercion":["off",{allow:[],boolean:!1,number:!0,string:!0}],"no-implicit-globals":"error","no-implied-eval":"error","no-import-assign":"error","no-inline-comments":"off","no-inner-declarations":"off","no-invalid-regexp":"error","no-irregular-whitespace":"error","no-iterator":"error","no-label-var":"error","no-labels":["error",{allowLoop:!0,allowSwitch:!1}],"no-lone-blocks":"error","no-lonely-if":"error","no-loop-func":"error","no-loss-of-precision":"error","no-magic-numbers":["off",{detectObjects:!1,enforceConst:!0,ignore:[],ignoreArrayIndexes:!0}],"no-misleading-character-class":"error","no-multi-assign":["error"],"no-multi-str":"error","no-negated-condition":"off","no-nested-ternary":"error","no-new":"error","no-new-func":"error","no-object-constructor":"error","no-new-symbol":"error","no-new-wrappers":"error","no-nonoctal-decimal-escape":"error","no-obj-calls":"error","no-octal":"error","no-octal-escape":"error","no-plusplus":"error","no-promise-executor-return":"error","no-proto":"error","no-prototype-builtins":"error","no-redeclare":"error","no-regex-spaces":"error","no-restricted-exports":["error",{restrictedNamedExports:["then"]}],"no-restricted-globals":["error",...m],"no-restricted-imports":["off",{paths:[],patterns:[]}],"no-restricted-properties":["error",{message:"arguments.callee is deprecated",object:"arguments",property:"callee"},{message:"Please use Number.isFinite instead",object:"global",property:"isFinite"},{message:"Please use Number.isFinite instead",object:"self",property:"isFinite"},{message:"Please use Number.isFinite instead",object:"window",property:"isFinite"},{message:"Please use Number.isNaN instead",object:"global",property:"isNaN"},{message:"Please use Number.isNaN instead",object:"self",property:"isNaN"},{message:"Please use Number.isNaN instead",object:"window",property:"isNaN"},{message:"Please use Object.defineProperty instead.",property:"__defineGetter__"},{message:"Please use Object.defineProperty instead.",property:"__defineSetter__"},{message:"Use the exponentiation operator (**) instead.",object:"Math",property:"pow"}],"no-return-assign":["error","always"],"no-script-url":"error","no-self-assign":["error",{props:!0}],"no-self-compare":"error","no-sequences":"error","no-setter-return":"error","no-shadow":["error",{allow:[...t("manten")?["test","describe","runTestSuite","onFinish","fixture"]:[],...t("tasuku")?["task","setTitle","setError","setWarning","setStatus","setOutput"]:[]]}],"no-shadow-restricted-names":"error","no-sparse-arrays":"error","no-template-curly-in-string":"error","no-this-before-super":"error","no-throw-literal":"error","no-undef":"error","no-undef-init":"error","no-unexpected-multiline":"error","no-unmodified-loop-condition":"off","no-unneeded-ternary":["error",{defaultAssignment:!1}],"no-unreachable":"error","no-unreachable-loop":"error","no-unsafe-finally":"error","no-unsafe-negation":"error","no-unused-expressions":["error",{allowShortCircuit:!1,allowTaggedTemplates:!1,allowTernary:!1}],"no-unused-labels":"error","no-unused-vars":["error",{args:"after-used",ignoreRestSiblings:!0,vars:"all"}],"no-use-before-define":"off","no-useless-backreference":"error","no-useless-call":"off","no-useless-catch":"error","no-useless-computed-key":"error","no-useless-concat":"error","no-useless-constructor":"error","no-useless-escape":"error","no-useless-rename":["error",{ignoreDestructuring:!1,ignoreExport:!1,ignoreImport:!1}],"no-useless-return":"error","no-var":"error","no-void":"error","no-warning-comments":["off",{location:"start",terms:["todo","fixme","xxx"]}],"no-with":"error","object-shorthand":["error","always",{ignoreConstructors:!1}],"one-var":["error","never"],"operator-assignment":["error","always"],"prefer-arrow-callback":["error",{allowNamedFunctions:!1,allowUnboundThis:!0}],"prefer-const":["error",{destructuring:"any",ignoreReadBeforeAssign:!0}],"prefer-destructuring":["error",{AssignmentExpression:{array:!0,object:!1},VariableDeclarator:{array:!1,object:!0}},{enforceForRenamedProperties:!1}],"prefer-exponentiation-operator":"error","prefer-named-capture-group":"off","prefer-numeric-literals":"error","prefer-object-spread":"error","prefer-promise-reject-errors":["error",{allowEmptyReject:!0}],"prefer-reflect":"off","prefer-regex-literals":["error",{disallowRedundantWrapping:!0}],"prefer-rest-params":"off","prefer-spread":"error","prefer-template":"error",radix:"error","require-atomic-updates":"off","require-await":"off","require-unicode-regexp":"off","require-yield":"error","sort-imports":["off",{ignoreCase:!1,ignoreDeclarationSort:!1,ignoreMemberSort:!1,memberSyntaxSortOrder:["none","all","multiple","single"]}],"sort-keys":["off","asc",{caseSensitive:!1,natural:!0}],"sort-vars":"off","symbol-description":"error","unicode-bom":["error","never"],"use-isnan":"error","valid-typeof":["error",{requireStringLiterals:!0}],"vars-on-top":"error",yoda:"error"}}),I=r({files:["**/*.sw.js"],languageOptions:{globals:c.serviceworker},rules:{"no-restricted-globals":["error",...m.filter(e=>e!=="self")]}}),J=[S.configs.recommended,p,I],w=new C.FlatCompat,n=e=>{const o=typeof e=="string"?w.extends(e):w.config(e);return o.forEach((i,s)=>{s>0&&Object.assign(i,{...o[s-1],...i})}),o},L=[...n("plugin:@eslint-community/eslint-comments/recommended"),r({rules:{"@eslint-community/eslint-comments/no-unused-enable":"off"}})],_=r({plugins:{"@stylistic":O},rules:{"@stylistic/array-bracket-newline":["error","consistent"],"@stylistic/array-bracket-spacing":["error","never"],"@stylistic/array-element-newline":["error","consistent"],"@stylistic/arrow-parens":["error","as-needed",{requireForBlockBody:!0}],"@stylistic/arrow-spacing":["error",{after:!0,before:!0}],"@stylistic/block-spacing":["error","always"],"@stylistic/brace-style":["error","1tbs",{allowSingleLine:!0}],"@stylistic/comma-dangle":["error",{arrays:"always-multiline",exports:"always-multiline",functions:"always-multiline",imports:"always-multiline",objects:"always-multiline"}],"@stylistic/comma-spacing":["error",{after:!0,before:!1}],"@stylistic/comma-style":["error","last",{exceptions:{ArrayExpression:!1,ArrayPattern:!1,ArrowFunctionExpression:!1,CallExpression:!1,FunctionDeclaration:!1,FunctionExpression:!1,ImportDeclaration:!1,NewExpression:!1,ObjectExpression:!1,ObjectPattern:!1,VariableDeclaration:!1}}],"@stylistic/computed-property-spacing":["error","never"],"@stylistic/dot-location":["error","property"],"@stylistic/eol-last":["error","always"],"@stylistic/func-call-spacing":["error","never"],"@stylistic/function-call-argument-newline":["error","consistent"],"@stylistic/function-paren-newline":["error","consistent"],"@stylistic/generator-star-spacing":["error",{after:!0,before:!1}],"@stylistic/implicit-arrow-linebreak":["error","beside"],"@stylistic/indent":["error","tab",{ArrayExpression:1,CallExpression:{arguments:1},flatTernaryExpressions:!1,FunctionDeclaration:{body:1,parameters:1},FunctionExpression:{body:1,parameters:1},ignoreComments:!1,ignoredNodes:["TemplateLiteral > *","JSXElement","JSXElement > *","JSXAttribute","JSXIdentifier","JSXNamespacedName","JSXMemberExpression","JSXSpreadAttribute","JSXExpressionContainer","JSXOpeningElement","JSXClosingElement","JSXFragment","JSXOpeningFragment","JSXClosingFragment","JSXText","JSXEmptyExpression","JSXSpreadChild"],ImportDeclaration:1,ObjectExpression:1,outerIIFEBody:1,SwitchCase:1,VariableDeclarator:1}],"@stylistic/key-spacing":["error",{afterColon:!0,beforeColon:!1}],"@stylistic/keyword-spacing":["error",{after:!0,before:!0,overrides:{case:{after:!0},return:{after:!0},throw:{after:!0}}}],"@stylistic/linebreak-style":["error","unix"],"@stylistic/lines-around-comment":"off","@stylistic/lines-between-class-members":["error","always",{exceptAfterSingleLine:!1}],"@stylistic/max-len":["error",100,2,{ignoreComments:!1,ignoreRegExpLiterals:!0,ignoreStrings:!0,ignoreTemplateLiterals:!0,ignoreUrls:!0}],"@stylistic/max-statements-per-line":["warn",{max:1}],"@stylistic/multiline-ternary":["error","always-multiline"],"@stylistic/new-parens":"error","@stylistic/newline-per-chained-call":["error",{ignoreChainWithDepth:4}],"@stylistic/no-confusing-arrow":["error",{allowParens:!0}],"@stylistic/no-extra-parens":["off","all",{conditionalAssign:!0,enforceForArrowConditionals:!1,ignoreJSX:"all",nestedBinaryExpressions:!1,returnAssign:!1}],"@stylistic/no-extra-semi":"error","@stylistic/no-floating-decimal":"error","@stylistic/no-mixed-operators":["error",{allowSamePrecedence:!1,groups:[["%","**"],["%","+"],["%","-"],["%","*"],["%","/"],["/","*"],["&","|","<<",">>",">>>"],["==","!=","===","!=="],["&&","||"]]}],"@stylistic/no-mixed-spaces-and-tabs":"error","@stylistic/no-multi-spaces":["error",{ignoreEOLComments:!1}],"@stylistic/no-multiple-empty-lines":["error",{max:1,maxBOF:0,maxEOF:0}],"@stylistic/no-trailing-spaces":["error",{ignoreComments:!1,skipBlankLines:!1}],"@stylistic/no-whitespace-before-property":"error","@stylistic/nonblock-statement-body-position":["error","beside",{overrides:{}}],"@stylistic/object-curly-newline":["error",{ExportDeclaration:{consistent:!0,minProperties:4,multiline:!0},ImportDeclaration:{consistent:!0,minProperties:4,multiline:!0},ObjectExpression:{consistent:!0,minProperties:4,multiline:!0},ObjectPattern:{consistent:!0,minProperties:4,multiline:!0}}],"@stylistic/object-curly-spacing":["error","always"],"@stylistic/object-property-newline":["error",{allowAllPropertiesOnSameLine:!0}],"@stylistic/one-var-declaration-per-line":["error","always"],"@stylistic/operator-linebreak":["error","before",{overrides:{"=":"none"}}],"@stylistic/padded-blocks":["error",{blocks:"never",classes:"never",switches:"never"},{allowSingleLineBlocks:!0}],"@stylistic/padding-line-between-statements":["error",{blankLine:"always",next:"*",prev:"directive"}],"@stylistic/quote-props":["error","as-needed",{keywords:!1,numbers:!1,unnecessary:!0}],"@stylistic/quotes":["error","single",{avoidEscape:!0}],"@stylistic/rest-spread-spacing":["error","never"],"@stylistic/semi":["error","always"],"@stylistic/semi-spacing":["error",{after:!0,before:!1}],"@stylistic/semi-style":["error","last"],"@stylistic/space-before-blocks":"error","@stylistic/space-before-function-paren":["error",{anonymous:"always",asyncArrow:"always",named:"never"}],"@stylistic/space-in-parens":["error","never"],"@stylistic/space-infix-ops":"error","@stylistic/space-unary-ops":["error",{nonwords:!1,overrides:{},words:!0}],"@stylistic/spaced-comment":["error","always",{block:{balanced:!0,exceptions:["-","+"],markers:["=","!",":","::"]},line:{exceptions:["-","+"],markers:["=","!","/"]}}],"@stylistic/switch-colon-spacing":["error",{after:!0,before:!1}],"@stylistic/template-curly-spacing":"error","@stylistic/template-tag-spacing":["error","never"],"@stylistic/wrap-iife":["error","inside",{functionPrototypeMethods:!1}],"@stylistic/yield-star-spacing":["error","after"]}}),x=r({rules:{"import/default":"off","import/dynamic-import-chunkname":["off",{importFunctions:[],webpackChunknameFormat:"[0-9a-zA-Z-_/.]+"}],"import/export":"error","import/exports-last":"off","import/extensions":["error","ignorePackages"],"import/first":"error","import/group-exports":"off","import/max-dependencies":["warn",{max:15}],"import/named":"error","import/namespace":"off","import/newline-after-import":"error","import/no-absolute-path":"error","import/no-amd":"error","import/no-anonymous-default-export":["off",{allowAnonymousClass:!1,allowAnonymousFunction:!1,allowArray:!1,allowArrowFunction:!1,allowLiteral:!1,allowObject:!1}],"import/no-commonjs":"off","import/no-cycle":["error",{ignoreExternal:!0,maxDepth:"\u221E"}],"import/no-duplicates":"error","import/no-extraneous-dependencies":["error",{devDependencies:["src/**","build/**","build.{js,ts}","**/scripts/**","{test,tests,test-d}/**","test.js","test-*.js","**/*{.,_}{test,spec}.js","**/__{tests,mocks}__/**","**/*.config.{js,cjs,mjs,ts,cts,mts}","**/.*.js","examples/**","README.md"],optionalDependencies:!1}],"import/no-mutable-exports":"error","import/no-named-as-default":"error","import/no-named-as-default-member":"error","import/no-named-default":"error","import/no-self-import":"error","import/no-unresolved":["error",{caseSensitive:!0,commonjs:!0,ignore:["^https?://"]}],"import/no-useless-path-segments":["error",{commonjs:!0}],"import/no-webpack-loader-syntax":"error","import/order":"error","import/prefer-default-export":"off"}}),X=[...n({extends:"plugin:import/recommended",settings:{"import/ignore":["node_modules","\\.(css|svg|json)$"]}}),x,r({files:["**/src/**/*"],rules:{"import/no-dynamic-require":"error"}})],v=x.rules["import/no-extraneous-dependencies"][1],T=[...n("plugin:@typescript-eslint/recommended"),...n("plugin:import/typescript"),r({files:["**/*.{ts,tsx,mts,cts}"],settings:{"import/resolver":{typescript:{}}},rules:{"@stylistic/member-delimiter-style":"error","@typescript-eslint/no-shadow":p.rules["no-shadow"],"@typescript-eslint/no-unused-vars":["error",{...p.rules["no-unused-vars"][1],argsIgnorePattern:"^_",caughtErrorsIgnorePattern:"^_",varsIgnorePattern:"^_"}],"func-style":"off","no-shadow":"off","prefer-rest-params":"off","import/extensions":["error","ignorePackages",{ts:"never",tsx:"never",cts:"never",mts:"never"}],"import/no-extraneous-dependencies":["error",{...v,devDependencies:v.devDependencies.map(e=>e.replace(".js",".{js,ts}"))}],"unicorn/consistent-destructuring":"off","unicorn/no-array-callback-reference":"off","unicorn/no-useless-undefined":"off"}})],B=n("plugin:regexp/recommended"),j=P.readPackageUpSync(),z=j&&"bin"in j.packageJson,[u,h,l]=d.configs["flat/mixed-esm-and-cjs"],M=r({...l,files:[...l.files,"**/*.cts"]}),R=e=>{const o=[M];return e?.node&&o.push(r({...u,files:[...u.files,"**/*.ts"],languageOptions:{...u.languageOptions,sourceType:"module"}}),r({...h,files:[...h.files,"**/*.mts"]}),r({...l,files:[...l.files,"**/*.cts"]}),r({plugins:{n:d},settings:{node:{version:">=18.16.0"}},rules:{"n/file-extension-in-import":["error","always",{".ts":"never",".tsx":"never"}],"n/global-require":"error","n/no-mixed-requires":["error",{allowCall:!0,grouping:!0}],"n/no-new-require":"error","n/no-path-concat":"error","n/prefer-global/buffer":["error","always"],"n/prefer-global/console":["error","always"],"n/prefer-global/process":["error","always"],"n/prefer-global/text-decoder":["error","always"],"n/prefer-global/text-encoder":["error","always"],"n/prefer-global/url":["error","always"],"n/prefer-global/url-search-params":["error","always"],"n/prefer-promises/dns":"error","n/prefer-promises/fs":"error","n/no-missing-import":"off","n/no-missing-require":"off","n/no-extraneous-import":"off"}})),z&&o.push(r({files:["**/cli.{js,ts}","**/cli/**/*.{js,ts}"],rules:{"n/no-process-exit":"off"}})),o},U=[...n("plugin:promise/recommended"),r({rules:{"promise/always-return":"off","promise/catch-or-return":["error",{allowThen:!0}]}})],$=t("jest")?r({files:["**/{test,tests}/*"],languageOptions:{globals:c.jest}}):void 0,V=e=>[r({files:["**/*.md"],plugins:{markdown:q},processor:"markdown/markdown"}),r({files:["**/*.md/*.{js,jsx,ts,tsx,vue}"],rules:{"import/extensions":"off","import/no-extraneous-dependencies":"off","import/no-unresolved":"off","no-console":"off","no-new":"off","no-undef":"off","n/shebang":"off","no-unused-expressions":"off","unicorn/filename-case":"off","unicorn/no-array-reduce":"off","unicorn/prefer-object-from-entries":"off","@stylistic/indent":["error",4],"@stylistic/semi":["error","never"],"@stylistic/comma-dangle":["error","never"]}}),r({files:["**/*.md/*.{js,jsx,vue}"],rules:{"no-unused-vars":"warn"}}),r({files:["**/*.md/*.{jsx,tsx}"],rules:{"react/jsx-indent-props":["error",4],"react/jsx-no-undef":"off","react/react-in-jsx-scope":"off"}}),...e?.vue?[r({files:["**/*.md/*.vue"],rules:{"vue/html-indent":["error",4],"vue/no-undef-components":"warn","vue/require-v-for-key":"off"}})]:[],r({files:["**/*.md/*.{ts,tsx}"],rules:{"@stylistic/member-delimiter-style":["error",{multiline:{delimiter:"none",requireLast:!1},multilineDetection:"brackets",singleline:{delimiter:"semi",requireLast:!1}}],"@typescript-eslint/no-unused-vars":"warn"}}),r({files:["**/*.md/*.{json,json5}"],rules:{"jsonc/indent":["error",4],"unicorn/filename-case":"off"}})],W=[...n("plugin:jsonc/base"),r({files:["**/*.{json,json5,jsonc}"],rules:{"jsonc/indent":["error","tab"],"jsonc/key-spacing":["error",{afterColon:!0,beforeColon:!1,mode:"strict"}],"jsonc/object-property-newline":"error"}}),r({files:["**/package.json"],rules:{"jsonc/sort-keys":["error",{order:["name","version","private","publishConfig","description","keywords","license","repository","funding","author","type","files","main","module","types","exports","imports","bin","unpkg","scripts","husky","simple-git-hooks","lint-staged","engines","peerDependencies","peerDependenciesMeta","dependencies","optionalDependencies","devDependencies","bundledDependencies","bundleDependencies","overrides","eslintConfig"],pathPattern:"^$"},{order:{type:"asc"},pathPattern:"^(?:dev|peer|optional|bundled)?Dependencies$"}]}}),r({files:["**/tsconfig.json"],rules:{...F.configs["recommended-with-jsonc"].rules}})],G=n("plugin:no-use-extend-native/recommended"),K=[...n("plugin:unicorn/recommended"),r({rules:{"unicorn/better-regex":"off","unicorn/consistent-function-scoping":"off","unicorn/no-array-for-each":"off","unicorn/no-for-loop":"off","unicorn/no-new-buffer":"off","unicorn/no-null":"off","unicorn/no-process-exit":"off","unicorn/prefer-export-from":["off",{ignoreUsedVariables:!0}],"unicorn/prefer-json-parse-buffer":"off","unicorn/prefer-module":"off","unicorn/prefer-node-protocol":"off","unicorn/prefer-spread":"off","unicorn/prefer-ternary":"off","unicorn/prefer-top-level-await":"off","unicorn/prevent-abbreviations":["error",{allowList:{i:!0,j:!0},replacements:{args:!1,dev:!1,dist:!1,env:!1,pkg:!1,prop:!1,props:!1,ref:!1,src:!1}}],"unicorn/template-indent":"off","unicorn/no-abusive-eslint-disable":"off"}})],Z=D.getTsconfig(),k=Z?.config.compilerOptions?.jsx,H=k==="react-jsx"||k==="react-jsxdev",Q=[...n({extends:"plugin:react/recommended",settings:{react:{version:"detect"}}}),...H?n("plugin:react/jsx-runtime"):[],...n("plugin:react-hooks/recommended"),r({files:["**/*.{jsx,tsx}"],rules:{"@stylistic/jsx-quotes":["error","prefer-double"],"react/jsx-indent-props":["error","tab"],"react/jsx-max-props-per-line":["error",{maximum:1}],"unicorn/filename-case":["error",{case:"pascalCase",ignore:["\\.spec\\.tsx$"]}]}})];function Y(){return t("unplugin-auto-import")?Object.fromEntries(["vue","vue-router","@vueuse/core","@vueuse/head"].flatMap(e=>t(e)?A(e).map(o=>[o,"readonly"]):[])):{}}function ee(){const e=[];t("vitepress")&&e.push("content","client-only","outbound-link");const o="./src/components";if(t("unplugin-vue-components")&&g.existsSync(o)){const s=g.readdirSync(o).filter(a=>a.endsWith(".vue")).map(a=>a.replace(".vue",""));e.push(...s)}return t("unplugin-icons")&&e.push("icon-*"),e}const re=[...n({extends:"plugin:vue/vue3-recommended",env:{"vue/setup-compiler-macros":!0}}),r({files:["**/*.vue"],languageOptions:{globals:{...Y()},parserOptions:{parser:{ts:"@typescript-eslint/parser"}}},rules:{"unicorn/filename-case":["error",{case:"pascalCase"}],"vue/html-indent":["error","tab"],"vue/multi-word-component-names":"off","vue/no-undef-components":["error",{ignorePatterns:["router-view","router-link",...ee()]}],"vue/component-tags-order":"off","vue/block-order":["error",{order:["script[setup]",["script","template"],"style"]}]}})],oe=e=>{const o={...e,node:e?.node,vue:e?.vue||t("vue"),react:e?.react||t("react")};return[{linterOptions:{reportUnusedDisableDirectives:!0}},{ignores:["**/package-lock.json","{tmp,temp}/**","**/*.min.js","**/dist/**","**/node_modules/**","**/vendor/**"]},...J,...L,...X,...K,...T,_,...B,...U,...R(o),...G,...W,...o.vue?re:[],...o.react?Q:[],...V(o),$].filter(Boolean)};exports.defineConfig=r,exports.pvtnbr=oe;
