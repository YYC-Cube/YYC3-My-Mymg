/**
 * Service Worker Clear Script
 * Run this to clear service worker cache
 */

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.getRegistrations().then((registrations) => {
    for (const registration of registrations) {
      registration.unregister();
      console.log("Service Worker unregistered:", registration);
    }
  });
}

if ("caches" in window) {
  caches.keys().then((names) => {
    for (const name of names) {
      caches.delete(name);
      console.log("Cache deleted:", name);
    }
  });
}

console.log("Cache cleared! Please reload the page.");
