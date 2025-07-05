self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("miapp-v1").then((cache) =>
      cache.addAll([
        "/",
        "/index.html",
        "/script.js"
      ])
    )
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});
