!function(){"use strict";const e=["client/client.18b4a3bf.js","client/client.d3c60c24.js","client/index.da6fcc25.js"].concat(["service-worker-index.html","arrow.png","favicon.png","git-white.svg","git.svg","global.css","great-success.png","JGL_CV.pdf","logo-192.png","logo-512.png","manifest.json","moon.png","or.svg","spotify-white.svg","spotify.svg","sun.png"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1588328626043").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1588328626043"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const s=new URL(e.request.url);s.protocol.startsWith("http")&&(s.hostname===self.location.hostname&&s.port!==self.location.port||(s.host===self.location.host&&t.has(s.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1588328626043").then(async t=>{try{const s=await fetch(e.request);return t.put(e.request,s.clone()),s}catch(s){const n=await t.match(e.request);if(n)return n;throw s}}))))})}();