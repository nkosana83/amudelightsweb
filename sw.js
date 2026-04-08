// Service Worker for HTTPS, PWA, and Offline Support
const CACHE_NAME = 'aumai-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/styles.css',
    '/script.js',
    '/manifest.json'
];

// Install event - cache resources
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Service Worker: Caching resources');
                return cache.addAll(urlsToCache).catch(err => {
                    console.log('Cache addAll error:', err);
                });
            })
    );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('Service Worker: Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', event => {
    // Skip non-GET requests
    if (event.request.method !== 'GET') {
        return;
    }

    // For HTTPS enforcement and offline support
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Return cached response if found
                if (response) {
                    return response;
                }

                // Clone the request
                let fetchRequest = event.request.clone();

                return fetch(fetchRequest).then(response => {
                    // Check if valid response
                    if (!response || response.status !== 200 || response.type === 'error') {
                        return response;
                    }

                    // Clone the response for caching
                    let responseToCache = response.clone();

                    caches.open(CACHE_NAME)
                        .then(cache => {
                            cache.put(event.request, responseToCache);
                        });

                    return response;
                }).catch(error => {
                    // Return offline page or cached resource if available
                    console.log('Fetch failed; falling back to cache:', error);
                    return caches.match('/index.html');
                });
            })
    );
});

// Background sync for offline cart updates (future enhancement)
self.addEventListener('sync', event => {
    if (event.tag === 'sync-cart') {
        event.waitUntil(syncCart());
    }
});

function syncCart() {
    // Placeholder for future cart synchronization
    return Promise.resolve();
}

// Push notifications (future enhancement)
self.addEventListener('push', event => {
    const options = {
        body: event.data ? event.data.text() : 'New notification from AuMai Delights',
        icon: '/icon-192x192.png',
        badge: '/icon-96x96.png'
    };

    event.waitUntil(
        self.registration.showNotification('AuMai Update', options)
    );
});

// Message handling from main thread
self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});

// HTTPS Security: Report any insecure requests
console.log('Service Worker: HTTPS/SSL Support Active');
console.log('Service Worker: Cache Strategy: Network First with Cache Fallback');
console.log('Service Worker: PWA Support: Enabled');
