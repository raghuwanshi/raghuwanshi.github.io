// sw_encrypt.js

self.addEventListener('install', function(e) {
e.waitUntil(
caches.open('aaryaamath').then(function(cache) {
return cache.addAll([
'/math/index.html',
'/math/math.png',
'/math/manifest_math.json',
]);
})
);
});

self.addEventListener('activate',  event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request, {ignoreSearch:true}).then(response => {
      return response || fetch(event.request);
    })
  );
});
