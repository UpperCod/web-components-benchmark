/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/YYPcyY
 */

importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/3.0.0-alpha.6/workbox-sw.js"
);

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "assets/icon/favicon.ico",
    "revision": "d2f619d796fbe8bed6200da2691aa5b6"
  },
  {
    "url": "assets/icon/icon.png",
    "revision": "b96ad6e1e0b755c8cd45e6aec40bca25"
  },
  {
    "url": "build/app.js",
    "revision": "b5f78a3f4d03dfa3492b108f9c3ab5de"
  },
  {
    "url": "build/app/1g1binlm.es5.js",
    "revision": "ce1ecd14c7ae3f6974c7d47fe9b2b8a6"
  },
  {
    "url": "build/app/1g1binlm.js",
    "revision": "8a7c1eac51ba750f2233d94575b07159"
  },
  {
    "url": "build/app/app.fj7nbdcn.js",
    "revision": "60baafb722a2b5a4591b3ee95cd975e2"
  },
  {
    "url": "build/app/app.registry.json",
    "revision": "11e0e568c35c0b3f41b4fabd567511ed"
  },
  {
    "url": "build/app/app.vpx3p7va.js",
    "revision": "bb6f53bffce00389e2d15788e6ab936e"
  },
  {
    "url": "host.config.json",
    "revision": "6e7c7612812611dad68f6102568b3d1d"
  },
  {
    "url": "index.html",
    "revision": "c4f621f40bbccb1712af36f40c6ed454"
  },
  {
    "url": "manifest.json",
    "revision": "0c129721ede7cd25304ebdd238d774ad"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
