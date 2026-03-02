// TravelVibe Service Worker
// Enables offline functionality and PWA features

const CACHE_NAME = 'travelvibe-v1';
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/styles/main.css',
  '/js/app.js',
  '/js/ui.js',
  '/js/destinations.js',
  '/js/destinations-extended.js',
  '/js/destinations-massive.js',
  '/js/destinations-mega.js',
  '/manifest.json',
  // Leaflet CDN will be cached on first load
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  console.log('[SW] Installing TravelVibe Service Worker...');
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[SW] Caching static assets...');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        console.log('[SW] Static assets cached successfully');
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('[SW] Cache failed:', error);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('[SW] Activating TravelVibe Service Worker...');
  
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter((name) => name !== CACHE_NAME)
            .map((name) => {
              console.log('[SW] Deleting old cache:', name);
              return caches.delete(name);
            })
        );
      })
      .then(() => {
        console.log('[SW] Service Worker activated');
        return self.clients.claim();
      })
  );
});

// Fetch event - serve from cache or network
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }
  
  // Strategy 1: Cache First for static assets
  if (isStaticAsset(url)) {
    event.respondWith(
      caches.match(request)
        .then((response) => {
          if (response) {
            // Return cached version
            return response;
          }
          
          // Fetch from network and cache
          return fetch(request)
            .then((networkResponse) => {
              if (!networkResponse || networkResponse.status !== 200) {
                return networkResponse;
              }
              
              // Cache the response
              const responseToCache = networkResponse.clone();
              caches.open(CACHE_NAME)
                .then((cache) => {
                  cache.put(request, responseToCache);
                });
              
              return networkResponse;
            })
            .catch(() => {
              // Offline fallback
              console.log('[SW] Offline - no cached version available');
              return new Response('Offline', { status: 503 });
            });
        })
    );
    return;
  }
  
  // Strategy 2: Network First for API calls (Unsplash images)
  if (url.hostname.includes('unsplash.com') || url.hostname.includes('images.unsplash.com')) {
    event.respondWith(
      fetch(request)
        .then((networkResponse) => {
          if (networkResponse.status === 200) {
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(request, responseToCache);
              });
          }
          return networkResponse;
        })
        .catch(() => {
          // Fallback to cache
          return caches.match(request);
        })
    );
    return;
  }
  
  // Strategy 3: Stale While Revalidate for map tiles
  if (url.hostname.includes('tile.openstreetmap.org')) {
    event.respondWith(
      caches.match(request)
        .then((cachedResponse) => {
          const fetchPromise = fetch(request)
            .then((networkResponse) => {
              if (networkResponse.status === 200) {
                caches.open(CACHE_NAME)
                  .then((cache) => cache.put(request, networkResponse.clone()));
              }
              return networkResponse;
            })
            .catch(() => cachedResponse);
          
          return cachedResponse || fetchPromise;
        })
    );
    return;
  }
  
  // Strategy 4: Default - try network, fallback to cache
  event.respondWith(
    fetch(request)
      .catch(() => caches.match(request))
  );
});

// Helper function to check if URL is a static asset
function isStaticAsset(url) {
  const staticExtensions = ['.html', '.css', '.js', '.json', '.png', '.jpg', '.jpeg', '.svg', '.woff', '.woff2'];
  return staticExtensions.some(ext => url.pathname.endsWith(ext));
}

// Background Sync for offline form submissions (future feature)
self.addEventListener('sync', (event) => {
  if (event.tag === 'submit-destination') {
    event.waitUntil(syncDestinations());
  }
});

async function syncDestinations() {
  // Future: sync user-submitted destinations when back online
  console.log('[SW] Syncing pending destinations...');
}

// Push notifications (future feature)
self.addEventListener('push', (event) => {
  const data = event.data.json();
  
  const options = {
    body: data.body,
    icon: '/icons/icon-192x192.png',
    badge: '/icons/badge-72x72.png',
    image: data.image,
    data: {
      url: data.url
    },
    actions: [
      { action: 'explore', title: 'Explore' },
      { action: 'close', title: 'Close' }
    ]
  };
  
  event.waitUntil(
    self.registration.showNotification(data.title, options)
  );
});

// Notification click handler
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  
  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow(event.notification.data.url)
    );
  }
});

console.log('[SW] TravelVibe Service Worker loaded');
