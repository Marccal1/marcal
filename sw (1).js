const CACHE_NAME = "marccalc-v2";
const urlsToCache = [
  "/marccalculator/",
  "/marccalculator/index.html",
  "/marccalculator/manifest.json",
  "/marccalculator/icon-192.png",
  "/marccalculator/icon-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
