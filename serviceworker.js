const staticCacheName = 's-spp-v2'; // Измените версию при обновлении файлов
const assetUrls = [
  '/',
  '/Salon.html',
  '/my_styles.css',
  '/app.js',
  '/price.html',
  '/kontakti.html',
  '/raboti.html',
  '/feedback.html'
];

self.addEventListener('install', async event => {
  event.waitUntil(
    caches.open(staticCacheName)
      .then(cache => cache.addAll(assetUrls))
      .catch(err => console.log('Cache add error:', err))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== staticCacheName)
          .map(key => caches.delete(key))
      );
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(cached => cached || fetch(event.request))
      .catch(() => caches.match('/offline.html')) // Добавьте fallback
  );
});