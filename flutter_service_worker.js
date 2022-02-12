'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "766a99d39fe89f3a0bb91a801d77c7fc",
".git/config": "6a418e604168691a45da609352834f2c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "544422f430a0f8701ad24b8723fa05b8",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "c819ffee61ac0994773376287fddc2de",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "849c31bf927eca2a9990a5e2cda09f84",
".git/logs/refs/heads/main": "0149ee209e40d8fd732d071aa962367f",
".git/logs/refs/remotes/origin/main": "236004f6ba7b2515c4de808a25de5c2a",
".git/objects/00/5ae8a029012eac12a17ec8aa91eb920ec1d8a2": "f0df17d22ca1d61550e63c7da5096480",
".git/objects/01/6776eea84cf10a693a208de9a2d2ccc78f3bef": "567a96ab4e72cc11fe5159879f2b2c24",
".git/objects/01/cb0c924c6e9019fd6261c0cb7b6819b704c4fc": "799916c0fa2b2f319d1165958c63a058",
".git/objects/10/4e37047fcff27cdc0773eb6af2b15b767619fa": "65196fa302b5a39d2c737c7d52eca571",
".git/objects/18/248dd09b628637d2e132170c1e091c16ebbb1b": "801049a7ae543f6c4ced3dcaf44dc921",
".git/objects/25/0f0c6fe994958e9a64f975c41eb2fa07b375e6": "ab8b765e3f4d6763110459f970370da8",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/35/05cad1e490c3c505441985a01dca6430537649": "622b9a33547282c63500df3eab4c51c2",
".git/objects/3c/1e9fbbd1bbf58e4866e573ddced8d68755a0ae": "387dcc46d78aa25901db95be208cf6b0",
".git/objects/3e/432a152179956cfe12e2950b8ff174b71cc83e": "826b5cc9c80202498cefa215496978b0",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4a/e27432efbf386e54405db2bc53199ffb019d14": "258dcc56a76ffbb8efe6de769a1f1271",
".git/objects/4b/e03ae8af65738ea1615f54b0640fa207f4141c": "bf5b0ef2063a09256303802df0fbcfdf",
".git/objects/53/e9c1486e73de69f445bb4e7ca17c83eb1c5e93": "de7e67b33e0141a99efe734304f53c2e",
".git/objects/5f/e1ea2ef411c303383f326e454df451535c0c56": "4c4cf2753f525ab6bfa5452a838da1af",
".git/objects/65/647fb5bcca55e208cb176be85c26cdd9315dc2": "1d19117857b7683440941fd0eeede76f",
".git/objects/75/6672e3f20c465a259e726620a9245179249450": "38794d3c51328390d6f4ba6606b8a2c9",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/82/771c2b2b1c83bd2bcd3a84ea6831581eba0f94": "ea3afcab35bf630594d8c84ddc36fac2",
".git/objects/84/cd3f63f1601610cc78042a6ff7977fc329b40a": "6efc3ba52893bcadc04d8918db876368",
".git/objects/87/748811d9bdbffffa46bb959351dcefc851eef9": "f6ae000509c1c6189205c1dffee84fb3",
".git/objects/87/f054e04ed114946a8053f1e1af75ae02515ad8": "5564957db507df4c078a0fee4df56451",
".git/objects/88/16bd958966e30fba9cf4b6db7f34a1ef05c277": "be0028d262f66afdfadfe2d188eabcea",
".git/objects/8b/94bd1cfce25eb2c7cdc4124e40775829cbfad7": "af88dabfe6208c7898a3aed04c2d2614",
".git/objects/8d/5af0a0790785795ff37e207b7d2535b248556e": "44f5e0e9963119eaf24d5387c9af6486",
".git/objects/8f/bb48bac9e50a5bae888fc57cf12b01e9d245f9": "d10ca6091f2d4f92a1ffcd765392dc8f",
".git/objects/93/7f9b5639c64ed4687467c3753a66081e4c8875": "a367203fb0db3f5b184ee953b862aa39",
".git/objects/97/2e2c07fa67239c99e968fb33a6a6f6dbf8bd12": "dfe19c25e64b54d6e19dbbfe69557549",
".git/objects/9a/41f2a82c4269051d5e74eda8b270629c0be152": "985a8cb77677de3455e51ee24f8c642d",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/07de2c7492c4eaae793c7c9591f8f8760579ca": "8b591602f30ee0297342715899ba2c95",
".git/objects/a7/7ec6b20709b37d9192e84f464b095a1fc699dd": "e6f5a1b2b525d786ca435bfb60f455fb",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ae/1cccc7ca6ebf26b1e4104baba791f1ee278785": "d6c9a4268f64077e9f6637d2afce5d73",
".git/objects/b7/cd81c4cb73b2be578703005d20d10607dbb33a": "c909bd6f4349cd2351cad5a06a2985ed",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c1/eb51c21195f734bf9d08b279f9e47be60525de": "8449f243f8f3957882f50da3b031c13d",
".git/objects/d4/b046ba56292ec627bbe49808c2af75453b6340": "c1d0331183ddf6a3f34f426bce8a23f6",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/d862cefb9a67fe1fb088efaf38ccde9eea120f": "41fd2184498da28d36cbb64ea20d75b0",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f3/0669f84e560e9cad8f1b9c3143ec2a9787e0ea": "5d9b13e009cf380f5fbfe26072336dad",
".git/objects/f3/c75fe0204201939c52fe18835e8eebb0fe83b4": "3d99c389f1bb8ce1fcde7baabf9871b3",
".git/objects/pack/pack-0157c6701bdd7ebd08e75a79f194d3098e175f3a.idx": "ace4afcc04d721856120e7b56aba7c96",
".git/objects/pack/pack-0157c6701bdd7ebd08e75a79f194d3098e175f3a.pack": "b0adcf5cad25e60a93d37752d1a6cb63",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/refs/heads/main": "b4068dcf17f360a2284fd8e1a0e327a7",
".git/refs/remotes/origin/main": "db541ce56fa0b9107c600013739ae32f",
"assets/AssetManifest.json": "1d3a12322a47c8a6ecd353a33e8e75a8",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/image/discord-o.png": "284e854827a9a6fa00d6216a03a3e4f9",
"assets/image/facebook-o.png": "35e3e52eec849cd746d0ad5e7fb53444",
"assets/image/favicon.ico": "83e77d0d89353a9dce4f36303156f2be",
"assets/image/github-o.png": "97d0f8e1d309ec96b1ff0e990e313937",
"assets/image/instagram-o.png": "3b67f414cabf0b3b30c532757a51dcb5",
"assets/image/jk.png": "c3b8bc952b9534425891c819bcfa26ca",
"assets/image/linkedin-o.png": "2eaf4ab59fa4e14b52383172066c5854",
"assets/image/logo.png": "2d7d26033b3826dfbda8f1b705fc7eb2",
"assets/image/telegram-o.png": "ed535d9be99f50ac6432830396d7012b",
"assets/image/twitter-o.png": "5fc0854b1417115b9b74877b43dea0b7",
"assets/image/whatsapp-o.png": "2029d0c1a892bc395aae8282fe732a72",
"assets/NOTICES": "2ceedb153a9ddf191c47e7cb8b46fda6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "62b9906717d7215a6ff4cc24efbd1b5c",
"canvaskit/canvaskit.wasm": "b179ba02b7a9f61ebc108f82c5a1ecdb",
"canvaskit/profiling/canvaskit.js": "3783918f48ef691e230156c251169480",
"canvaskit/profiling/canvaskit.wasm": "6d1b0fc1ec88c3110db88caa3393c580",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ae2d6582e41a4e1b9248abc632706575",
"/": "ae2d6582e41a4e1b9248abc632706575",
"main.dart.js": "294a71993dd659888ec0ca03dbf84290",
"manifest.json": "4ef4859312a0ab4aedf23bc8579e38a9",
"README.md": "8935772679a763a397cf44e44add54ab",
"version.json": "b3b87f9153d4406c14bc11865bbe1089"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
