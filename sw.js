const CACHE='fazilet-v1';
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(fetch(event.request).then(r=>{
    const copy=r.clone(); caches.open(CACHE).then(c=>c.put(event.request,copy));
    return r;
  }).catch(()=>caches.match(event.request)));
});
