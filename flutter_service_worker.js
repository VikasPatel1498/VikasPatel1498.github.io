'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "091979440f04da6425ab4c8938fa37d6",
"assets/AssetManifest.bin.json": "ed2b44853b470fb97ba92d175e4b1b99",
"assets/AssetManifest.json": "d778e32ee67c61841bd006fdd4a97ec9",
"assets/assets/images/abc.jpeg": "2bd32472323c9d1c65bedbda69f93eb7",
"assets/assets/images/android.png": "994d34b0b904729ede02edc996bfaf59",
"assets/assets/images/apple.png": "cf11ebcc0a874e3ad3830431f7b0ab58",
"assets/assets/images/appstore.png": "d3f0f0c1fdaa010f2f975a7b7e751aba",
"assets/assets/images/blob_ash.png": "f76b87a8dd8bb4ad017b441854541a2b",
"assets/assets/images/blob_bean_ash.png": "bc902ac538eedf1abc48457bbf064fd1",
"assets/assets/images/blob_black.png": "14198d608b7f0980998d329cd353e290",
"assets/assets/images/blob_drumstick_black.png": "381f70d9f8dd4fbbb720214fa02939a2",
"assets/assets/images/blob_femur_ash.png": "b899f92250a0f7220db5c45bea2080c8",
"assets/assets/images/blob_small_bean_ash.png": "411605e065607a48e110cedc91bebd82",
"assets/assets/images/blog_01.jpg": "cd78990246f63c4d64ca5c26bcf31289",
"assets/assets/images/blog_02.jpg": "01c4b84663980a0b4f55f4bd196492bd",
"assets/assets/images/blog_03.jpg": "5f88a99b651c6dbad988d684c6fc41b3",
"assets/assets/images/box_cover_dark.png": "34f90bdba46732221c608605016c40d5",
"assets/assets/images/box_cover_gold.png": "a58f0270c1fd04d7eae1217c7e5645b9",
"assets/assets/images/dart.png": "55fcf3fc1bff0c00ab8463c33ebfbbc0",
"assets/assets/images/dev_aboutme.png": "21ea8f79cfc69b619c767fa9573b5295",
"assets/assets/images/dev_award.png": "9330277f7c4279bb73c0f637f6871af1",
"assets/assets/images/dev_header.png": "6e4b03020cee4b554c35ef65a45b0a05",
"assets/assets/images/django.png": "08fce74c8b55627301622028265fdea6",
"assets/assets/images/dots_globe_grey.png": "bb16bba932c2e98f3dbe3e6b1b6a864b",
"assets/assets/images/dots_globe_yellow.png": "d908b032e1a46382b6e6c2baf92e188c",
"assets/assets/images/dots_globe_yellow2.png": "d1394584431e43b6973ca031de59a284",
"assets/assets/images/figma.png": "a579872f03981f5fafff9f6bab31e935",
"assets/assets/images/firebase.png": "3602dbeac7b595e78e75ceda8f0e9002",
"assets/assets/images/flutter.png": "e417bcfb1a718192ff6e2aa86799460a",
"assets/assets/images/ghana_flag.png": "b0afee866ab3333560a0072c5d53bce2",
"assets/assets/images/git.png": "ab40d02f0aa8bf85de12fd45bda5b0c0",
"assets/assets/images/hi_there.png": "1ac6f5101b6a5511f4ad8f8965a49f89",
"assets/assets/images/icon_box.jpg": "7a18b9b091db5fe0fc16c76a3ffd5db2",
"assets/assets/images/indian_flag.png": "02b3f20849f6559c28713fff386119c2",
"assets/assets/images/logo.png": "dffd4e332b3c3c776f04c9ed61cc8e63",
"assets/assets/images/logo_dark.png": "172c6851a256eb6ca04d9b99cc231ac8",
"assets/assets/images/logo_light.png": "708b0d915b6cededbda03f881683e529",
"assets/assets/images/mazzom.jpeg": "1dbac006e72823115f19a10c9ef68122",
"assets/assets/images/my.png": "7861d1668761622799d918e45f69fec5",
"assets/assets/images/my1.png": "bd92bedc4b5d32f9a615b3ea5fa31f82",
"assets/assets/images/my2.png": "126571e5ccb1dd40268349e6d784e9cf",
"assets/assets/images/my3.jpeg": "07ce1d402d23765f69f688b959416598",
"assets/assets/images/playstore.png": "cb01df7d6cf3e4c74061b2f6db41e744",
"assets/assets/images/portfolio_01.jpg": "43e7af9f9e24c8c4db73ee7d493c04f4",
"assets/assets/images/portfolio_02.jpg": "9beba509a25cfb96362aeb7e98335e58",
"assets/assets/images/portfolio_03.jpg": "45d7db96b72f25b4c76740e5dec2208e",
"assets/assets/images/portfolio_04.jpg": "ff07b0c6397e19d0cf30b03df9f196d2",
"assets/assets/images/portfolio_05.jpg": "9e5fedca2725d59b2692670505c8e7e5",
"assets/assets/images/portfolio_06.jpg": "015d9a88eeaa1a0f5e39b81d32e1bf87",
"assets/assets/images/projects/chat.png": "273c0fe926e73cbe9eb0d72d8f202f4e",
"assets/assets/images/projects/colorex.png": "add9aa2f840678cf359839a47c3da140",
"assets/assets/images/projects/frezka.png": "cee9931414452fadff59234f2dd8156f",
"assets/assets/images/projects/goldenseal.png": "4746f0980d989e2b7452ad8852d189fa",
"assets/assets/images/projects/goodtogo.png": "59412d4894253f3e3cc072aa96b870f6",
"assets/assets/images/projects/grocery.png": "2eae591f79d136fed668e417a55ddfd4",
"assets/assets/images/projects/handyman_provider.png": "4b9e6f750b51c2169be45b2dae8ef73c",
"assets/assets/images/projects/handyman_service_admin_app.png": "f9677e38117582497b6b4233b30a59ae",
"assets/assets/images/projects/handyman_user.png": "36be9ff278287e99c55ae3889b0bc8f2",
"assets/assets/images/projects/happen.png": "4b238fb579ee01131610a9095978b7d9",
"assets/assets/images/projects/helpinghands.png": "43b63028a1654f8caec541e5a454c2e8",
"assets/assets/images/projects/justgozero.png": "6b54e7cdffb7488484827f19b9fbc411",
"assets/assets/images/projects/justgozerocollector.png": "ac712de47bfb61eae2dba9fc18186c07",
"assets/assets/images/projects/kivicare_laravel_patient.png": "72045068fd5e259471daff197ac3bc39",
"assets/assets/images/projects/kivicare_laravel_vendor.png": "cd66a86a633d750e68190646cfb1e915",
"assets/assets/images/projects/kivicare_wordpress.png": "879c717422d9dad8f58c5616385c2598",
"assets/assets/images/projects/mazoom.jpg": "6e8de9e56d3cf7b228958f3a4488d317",
"assets/assets/images/projects/news_app.png": "94938db81ab85aec6f5a96af1ad6f49c",
"assets/assets/images/projects/pawlly_customer.png": "a6be29f45d1c4334951654d8affa81c7",
"assets/assets/images/projects/pawlly_employee.png": "29c28f334b310eaedbb7e25211d7d903",
"assets/assets/images/projects/place.png": "05202c1ae1ef3456746efdca4f3030ee",
"assets/assets/images/projects/prokit.png": "c770cb147286e04e11dd4b1624103b79",
"assets/assets/images/projects/smileboard.png": "b6a16f1d8ed11c1501ca55ef2adbace7",
"assets/assets/images/projects/socialv.png": "b59d54a604409d33226b0c21e4507d0d",
"assets/assets/images/projects/streamit_laravel.png": "e1b4f1e1efc6e76a9373d6d17be05de0",
"assets/assets/images/projects/streamit_laravel_tv.png": "769d704acf00cc643cd59fe74fcd2058",
"assets/assets/images/projects/streamit_wp.png": "229a28b2d7f29cfb260d1866657796a2",
"assets/assets/images/projects/superkids.png": "ada897e929f91b02d86f30f4f7e23618",
"assets/assets/images/projects/tom.png": "8a5aef8f2089a1fd27acbb4114594a24",
"assets/assets/images/projects/vizion_ai.png": "e8b8e9fb421adb5dd6e9ad1cc7c0fad8",
"assets/assets/images/python.png": "be222a704227ee050b73ede42c5b379a",
"assets/assets/profile.jpg": "3ea633c8b0862a854eb7eec6ff0bf945",
"assets/assets/Vikas_CV.pdf": "a626a8d423ff8dca94cfebd81cbd7c81",
"assets/FontManifest.json": "cab905cb3aac16cd8f8b52a8d504c382",
"assets/fonts/MaterialIcons-Regular.otf": "d8c99b936023264b4f50bdcd0089d06f",
"assets/NOTICES": "811f3a4a2d700498e289d73e763fa225",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/feather_icons/fonts/feather.ttf": "0d0d92d310cc68e53796bf15c36838c2",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "30b4db3d880206fb926af6df77c3f047",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "dd955a76d75af23521bb7957d5596117",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9632434a3f0ec44a1975a72404ca7108",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "5987e191ebb08ed8139127fa2b093061",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "163a73387f71dad3bb046ef3b8190e3f",
"/": "163a73387f71dad3bb046ef3b8190e3f",
"main.dart.js": "b3d8c7d420380670d9c6c1e23423bb73",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
