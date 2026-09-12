const CACHE='ost-andorf-falleditor-v3-0-9-hotfix';
const ASSETS=['./','./index.html','./style.css','./manifest.webmanifest'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil((async()=>{
  const keys=await caches.keys();
  await Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)));
  await self.clients.claim();
  const clients=await self.clients.matchAll({type:'window',includeUncontrolled:true});
  await Promise.all(clients.map(c=>c.navigate(c.url).catch(()=>null)));
})()));
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  const isNavigation=e.request.mode==='navigate'||e.request.destination==='document';
  if(isNavigation){
    e.respondWith(fetch(e.request,{cache:'no-store'}).then(resp=>{
      const copy=resp.clone();caches.open(CACHE).then(c=>c.put('./index.html',copy));return resp;
    }).catch(()=>caches.match('./index.html')));
    return;
  }
  e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(resp=>{const copy=resp.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));return resp;})));
});
