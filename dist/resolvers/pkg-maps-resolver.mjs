import p from"node:fs";import{f}from"../index-74ca7704.mjs";import{resolveImports as a}from"resolve-pkg-maps";import{getConditions as c}from"get-conditions";import"node:process";import"node:fs/promises";import"node:url";import"node:path";const t=Object.freeze({found:!1}),m=(r,s)=>{if(r[0]==="#"){const n=f("package.json",{cwd:s});if(!n)return t;const i=p.readFileSync(n,"utf8"),e=JSON.parse(i);if(!e.imports)return t;const o=a(e.imports,r,c());return!o||o.length===0?t:{found:!0,path:o[0]}}return t},u=2;export{u as interfaceVersion,m as resolve};