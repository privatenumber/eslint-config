"use strict";require("tsx/esm");var u=require("cleye"),l=require("eslint/use-at-your-own-risk"),c=require("url"),f=require("fs/promises"),g=require("../index.cjs");require("module"),require("@eslint/js"),require("globals"),require("confusing-browser-globals"),require("@eslint-community/eslint-plugin-eslint-comments"),require("@stylistic/eslint-plugin"),require("eslint-plugin-import"),require("@typescript-eslint/eslint-plugin"),require("@typescript-eslint/parser"),require("eslint-plugin-regexp"),require("node:fs"),require("eslint-plugin-n"),require("read-package-up"),require("../index-bbbfbf35.cjs"),require("node:process"),require("node:fs/promises"),require("node:url"),require("node:path"),require("eslint-plugin-promise"),require("eslint-plugin-markdown"),require("eslint-plugin-jsonc"),require("eslint-plugin-yml"),require("yaml-eslint-parser"),require("eslint-plugin-no-use-extend-native"),require("eslint-plugin-unicorn"),require("eslint-plugin-react"),require("eslint-plugin-react-hooks"),require("get-tsconfig"),require("fs"),require("eslint-plugin-vue"),require("vue-eslint-parser"),require("eslint-plugin-prefer-arrow-functions");const a=async e=>f.access(e).then(()=>e,()=>{}),q=async e=>{const r=await a("eslint.config.ts")??await a("eslint.config.js");if(r){const t=await import(c.pathToFileURL(r).toString());if(t.default)return console.log("[@pvtnbr/eslint-config]: Using config file:",r),t.default}return g.pvtnbr(e)},p=e=>{let r=0,t=0,n=0;for(const o of e)r+=o.errorCount,t+=o.fatalErrorCount,n+=o.warningCount;return{errorCount:r,fatalErrorCount:t,warningCount:n}},d=e=>e.fatalErrorCount>0?2:e.errorCount>0?1:0,i=u.cli({name:"lint",parameters:["<files...>"],help:{description:"by @pvtnbr/eslint-config"},flags:{fix:{type:Boolean,description:"Automatically fix problems"},quiet:{type:Boolean,description:"Report errors only"},cache:{type:Boolean,description:"Only check changed files"},cacheLocation:{type:String,description:"Path to the cache file or directory"},ignorePattern:{type:[String],description:"Pattern of files to ignore"},node:{type:[String],description:"Enable Node.js rules. Pass in a glob to specify files"}}}),h=e=>{if(e.length===0)return!1;const r=e.filter(t=>t.length>0);return r.length>0?r:!0};(async()=>{const{FlatESLint:e}=l,r=new e({baseConfig:await q({node:h(i.flags.node)}),overrideConfigFile:!0,fix:i.flags.fix,cache:i.flags.cache,cacheLocation:i.flags.cacheLocation,ignorePatterns:i.flags.ignorePattern}),t=await r.lintFiles(i._.files);i.flags.fix&&await e.outputFixes(t);let n=t;i.flags.quiet&&(n=e.getErrorResults(t));const o=p(t),s=await(await r.loadFormatter()).format(n);s&&console.log(s),process.exitCode=d(o)})();
