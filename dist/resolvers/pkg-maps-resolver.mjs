import m from"node:path";import a from"node:fs";import{f as l}from"../index-DW7ozoHd.mjs";import{resolveImports as d}from"resolve-pkg-maps";import{getConditions as g}from"get-conditions";import"node:process";import"node:fs/promises";import"node:url";const e=Object.freeze({found:!1}),p=t=>t?typeof t=="string"?[t]:Object.values(t).flatMap(p):[],u=(t,s,r)=>{const o=p(t[s]).filter(n=>n!==r&&!n.endsWith(".d.ts")&&a.existsSync(n));return o.length===0?e:{found:!0,path:o[0]}},h=(t,s)=>{if(t[0]!=="#")return e;const r=l("package.json",{cwd:s});if(!r)return e;const o=a.readFileSync(r,"utf8"),{imports:n}=JSON.parse(o);if(!n||!(t in n))return e;const i=d(n,t,g());if(!i||i.length===0)return u(n,t);const f=i[0],c=m.resolve(r,"..",f);return a.existsSync(c)?{found:!0,path:f}:u(n,t,f)},y=2;export{y as interfaceVersion,h as resolve};
