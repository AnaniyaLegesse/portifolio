if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let c={};const o=e=>i(e,t),d={module:{uri:t},exports:c,require:o};s[t]=Promise.all(n.map((e=>d[e]||o(e)))).then((e=>(r(...e),c)))}}define(["./workbox-a3cf1d8c"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-DpbJ8LxO.css",revision:null},{url:"assets/index-Dx082EEx.js",revision:null},{url:"index.html",revision:"8f8caac25a229cdbc169df6f8462b906"},{url:"registerSW.js",revision:"8d7ca3b93add519bead60c8f7ab5ed4a"},{url:"logo.png",revision:"81cb75a1fb9a9353c8f406242dd6c00c"},{url:"manifest.webmanifest",revision:"2e82034a4d5f9073bec99cc82c8d3e34"}],{}),e.cleanupOutdatedCaches()}));
