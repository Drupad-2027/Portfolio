const CACHE_NAME = "drupad-portfolio-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/assets/profile.jpg",
  "/assets/DrupadDhamdhere.pdf",
  "/assets/icon-192.png",
  "/assets/icon-512.png",
  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css",
  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js",
  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css",
  "https://unpkg.com/aos@2.3.1/dist/aos.css",
  "https://unpkg.com/aos@2.3.1/dist/aos.js",
  "https://cdn.jsdelivr.net/npm/typed.js@2.0.12"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
