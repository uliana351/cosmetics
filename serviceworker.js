const staticCacheName = 's-spp-v1'
const assetUrls = [
  '/',
  '/Salon.html',
  '/my_styles.css',
  '/app.js',
  '/price.html',
  '/kontakti.html',
  '/raboti.html',
  '/feedback.html'
]


self.addEventListener('install', async event =>{
    const cache = await caches.open(staticCacheName)
    await cache.addAll(assetUrls);
});

self.addEventListener('activate',event =>{
    console.log('[SW]:activate');
});

self.addEventListener('fetch',event => {
    console.log('Fetch',event.request.url)
    event.respondWith(cacheFirst(event.request))
})

async function cacheFirst(request) {
    const cached = await caches.match(request)
    return cached ?? await fetch(request)
}

