"use strict";var l=require("node:process");require("node:fs/promises");var u=require("node:url"),d=require("node:fs"),i=require("node:path");const f=r=>r instanceof URL?u.fileURLToPath(r):r;function y(r,{cwd:a=l.cwd(),type:o="file",stopAt:t}={}){let e=i.resolve(f(a)??"");const{root:s}=i.parse(e);for(t=i.resolve(e,f(t)??s);e&&e!==t&&e!==s;){const c=i.isAbsolute(r)?r:i.join(e,r);try{const n=d.statSync(c,{throwIfNoEntry:!1});if(o==="file"&&n?.isFile()||o==="directory"&&n?.isDirectory())return c}catch{}e=i.dirname(e)}}exports.findUpSync=y;