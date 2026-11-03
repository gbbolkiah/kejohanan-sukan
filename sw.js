/* Service worker — simpan cangkerang aplikasi (ikon, splash) supaya dibuka pantas dan boleh dipasang.
   Data sistem sentiasa diambil terus daripada Google Apps Script (tidak disimpan di sini). */
var CACHE = 'kejohanan-sukan-v1';
var ASET = ['./', 'index.html', 'config.js', 'manifest.webmanifest', 'favicon.ico',
  'logo.png', 'icon-192.png', 'icon-512.png', 'maskable-192.png', 'maskable-512.png', 'apple-touch-icon.png', 'favicon-32.png'];

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(ASET); }).then(function () { return self.skipWaiting(); }));
});
self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (ks) {
    return Promise.all(ks.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});
self.addEventListener('fetch', function (e) {
  var u = new URL(e.request.url);
  if (u.origin !== location.origin || e.request.method !== 'GET') return; // Apps Script: terus ke rangkaian
  // index.html & config.js: rangkaian dahulu (supaya pautan baharu terus berkesan), cache sebagai sandaran
  if (e.request.mode === 'navigate' || /config\.js$/.test(u.pathname)) {
    e.respondWith(fetch(e.request).then(function (r) {
      var cp = r.clone(); caches.open(CACHE).then(function (c) { c.put(e.request, cp); }); return r;
    }).catch(function () { return caches.match(e.request).then(function (m) { return m || caches.match('index.html'); }); }));
    return;
  }
  e.respondWith(caches.match(e.request).then(function (m) { return m || fetch(e.request); }));
});
