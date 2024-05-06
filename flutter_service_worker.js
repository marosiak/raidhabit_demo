'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "d3fde268a7e2a990f80ec23279dd14ee",
"assets/AssetManifest.bin.json": "79acf8b16c3b27bf12b6b676d6faa2b0",
"assets/AssetManifest.json": "a71afab2c6d33e78135a50b009e5a10e",
"assets/assets/icon.png": "8ee365bcbd06d0f437d5c30cf20fd445",
"assets/assets/items/item_analgin_loot.webp": "4535b0f119cfd5aa5382497b0c6118ba",
"assets/assets/items/item_automedkit_loot.webp": "87823a06505c684738cf1f4ed78e4f10",
"assets/assets/items/item_bandage_army_loot.webp": "fcdf365c0c89b03813ec7ff7f5620e98",
"assets/assets/items/item_bandage_med_loot.webp": "e8aec37c506ade82abd8b1c9ee70cfb1",
"assets/assets/items/item_barter_electr_drill.webp": "2f4797aed00c826e678209171227228e",
"assets/assets/items/item_barter_energy_greenbat.webp": "5dcb855909340380e5ab7486e957d6e9",
"assets/assets/items/item_barter_energy_powerbank.webp": "d01e8af2988b3ad1e32b323b948bacbc",
"assets/assets/items/item_barter_household_alkali.webp": "a7099852357c5f035d86e109e0ccf8f4",
"assets/assets/items/item_barter_household_antiinsect.webp": "9efea5929838cc234f3f58af2546149b",
"assets/assets/items/item_barter_household_bleach.webp": "a00e8e6a90c2f16c7e8f077317932d8d",
"assets/assets/items/item_barter_household_pipecleaner.webp": "e3836b47b308f16dc42bc0c4cbb51c51",
"assets/assets/items/item_barter_household_repellent.webp": "0963b151913838b22de833f8e5bef3b2",
"assets/assets/items/item_barter_household_shampoo.webp": "4ea2b9b4558d3ec651340adad9829efe",
"assets/assets/items/item_barter_household_soap.webp": "f2807de9f812361aaefcb428b3e40607",
"assets/assets/items/item_barter_household_soda.webp": "9b0f6ecd4f45a51d32049d45a6a0d02d",
"assets/assets/items/item_barter_household_toiletpaper.webp": "bb56f0506dd8788fd7baabe11fefb04a",
"assets/assets/items/item_barter_household_toothpaste2.webp": "c126c0b5ff21f07250d82a9e484826ce",
"assets/assets/items/item_barter_household_wd40_100ml.webp": "ceade261c04cef108af5a20b32157a82",
"assets/assets/items/item_barter_medical_nacl.webp": "85c76713cdf9344f403855eb4de95019",
"assets/assets/items/item_barter_medical_pile.webp": "d7c47fbe1882936a054f126695539f95",
"assets/assets/items/item_barter_valuable_1gphone.webp": "4c70950ccb94825ea0b734aa72cc8289",
"assets/assets/items/item_barter_valuable_bitcoin.webp": "c5607fad78ce841de2ed02e382b40804",
"assets/assets/items/item_chain.webp": "f549cd7c65b9648e22fa9e82e902266f",
"assets/assets/items/item_chain_gold.webp": "cc20b1c31561c88ad1f0c4461617f065",
"assets/assets/items/item_crickent.webp": "f74d6bf5ab3d863feef2e61e0cce2821",
"assets/assets/items/item_equipment_armor_6b34.webp": "ff988e7b9b989d65a70af72174879333",
"assets/assets/items/item_equipment_backpack_betav2.webp": "29ee483d82a9be96ccff2b610e404bec",
"assets/assets/items/item_equipment_backpack_daypack.webp": "a9d24758ef86ed15c01f7f97d8a990f1",
"assets/assets/items/item_equipment_backpack_mech.webp": "172ee9b6f89a88b8d3173ee201cd2d18",
"assets/assets/items/item_equipment_backpack_sportbag.webp": "2624bac1abaff44b858213f431b82290",
"assets/assets/items/item_equipment_backpack_vkbo.webp": "e09c61d26296b05f6e53d6eb1d731727",
"assets/assets/items/item_equipment_helmet_achhc_green.webp": "674fa59026eb27287f00ccf0e955521b",
"assets/assets/items/item_equipment_helmet_opscore_fast_tan.webp": "2d532cef8c9bf0a9875ac3410a48107e",
"assets/assets/items/item_equipment_helmet_ssh-68.webp": "148497eda2aa68cc950db23f91ebf40f",
"assets/assets/items/item_equipment_helmet_ulach_black.webp": "ba36a36f973e6c7b67ab9edac9f7cf36",
"assets/assets/items/item_equipment_rig_vestwild.webp": "6d6d58296f164933029fe53b736b7e94",
"assets/assets/items/item_flash_card_ironkey.webp": "a4519b19433a86bce8f97fa65c3874de",
"assets/assets/items/item_food_condensed_milk_loot.webp": "3c0459c55ecb383503def6f09a34c680",
"assets/assets/items/item_grizzly_loot.webp": "3b37ef11e0114fc5bd1af366a9e0b1e8",
"assets/assets/items/item_ifak_loot.webp": "dab4fa6eca5f1d04bcab93cd100670da",
"assets/assets/items/item_matches.webp": "19fce749dcc6bb8dc6b4c495b9c80c45",
"assets/assets/items/item_maxenergy_loot.webp": "d77e513bc5b082846ce3738de1cf2b37",
"assets/assets/items/item_meds_alusplint.webp": "4d73ff6a31da56fbc5c1fb1aeafe8be0",
"assets/assets/items/item_other_powder_green.webp": "0a3f9e05abbb243434ed5f7e8994c7a1",
"assets/assets/items/item_other_powder_red.webp": "7074813bfcadd1aec63fb6355f057e30",
"assets/assets/items/item_phone.webp": "b5e1e614990c058b1619fefac1cce0fb",
"assets/assets/items/item_ram_module.webp": "95f517ae8712e0cbe945302ab6daa4f3",
"assets/assets/items/item_screw_bolts.webp": "a73482c426dcadfdbfa45d8bc009c8be",
"assets/assets/items/item_screw_nuts.webp": "387313cd85b278fdd6c9942d0dd5b55a",
"assets/assets/items/item_spec_multitul.webp": "349e07f1dd8938771b3f1e93d9383b98",
"assets/assets/items/item_tarcola_loot.webp": "671e8a5800f7c3f6de6e53f35905c876",
"assets/assets/items/item_thick_diary.webp": "284b1db874e87c999f63a7407c9e083c",
"assets/assets/items/item_tools_pliers.webp": "e90547ed799398588c47799826f844a0",
"assets/assets/items/item_tools_roulette.webp": "0ef423c8656334689ef50cad9efb1e76",
"assets/assets/items/item_tools_screwdriver.webp": "60e69f224aa240cc8c368841bb48a664",
"assets/assets/items/item_tools_toolset.webp": "ae77c771aa4f920c2e3f71e60a505899",
"assets/assets/items/item_tools_wrench.webp": "ae89c88f194e941d756d6bf091594200",
"assets/assets/items/item_toothpaste.webp": "cc0b09a2b8c44ef8f714d44153a667f9",
"assets/assets/items/item_tplug.webp": "7a5f28f8d0d1f01fe5a0f15584b9b5f1",
"assets/assets/items/item_video_card.webp": "6fd4c73b0efcd181cd7e7505f1d780c8",
"assets/assets/items/item_water_bottle_loot.webp": "d1555cc1301ff8c1fda8604cb2e81632",
"assets/assets/items/item_zibbo.webp": "28e970250f2ae1afeb0759320e6d5f21",
"assets/assets/items/item_zibbo_gold.webp": "eb18b360af266b7c217f5e143ad9b019",
"assets/assets/items/patron_12x70.webp": "802f6675314b8fea9650f567f6772cbd",
"assets/assets/items/patron_762x39.webp": "c150b694ed9d684a11cfc8ffc975c1c2",
"assets/assets/items/patron_762x54r_7bt1.webp": "708dea88857e838626a4cfebb74f3a5e",
"assets/assets/items/patron_9x19.webp": "91af1c34490c05510fa80e4e00bfa4cf",
"assets/assets/items/weapon_grenade_chattabka_vog17_container.webp": "47e1883f0bf78283e607e7c0c8b70f7d",
"assets/assets/items/weapon_grenade_f1_container.webp": "8c55ae0e07e51e981b1be1e80b528953",
"assets/assets/items/weapon_grenade_rgd5_container.webp": "1f89af5ba1afc1bb7e45425918d1bdd4",
"assets/assets/items/weapon_hatchet.webp": "2e9415bf979a9ba9fb1bb29557da98ac",
"assets/assets/items/weapon_knife.webp": "d43e101a43eec07b1e98b7ff45aaf8e1",
"assets/assets/items/weapon_mosin.webp": "a3c81dd6b3ac78c72b8377b9f8c25341",
"assets/assets/items/weapon_mp5.webp": "3c229209c6ec6049f994018ff48f59f7",
"assets/assets/raid_in_progress.riv": "72c1ac4cdc84b477f8ade1f40664b17a",
"assets/FontManifest.json": "a412260f3dc8f2eb30814c92d6e9fb0f",
"assets/fonts/Fredoka-Bold.ttf": "0ca2ea96737ff1b488509e1c766d1048",
"assets/fonts/Fredoka-Light.ttf": "dbb6cf04c0bd3bc9752b4b281adb45b1",
"assets/fonts/Fredoka-Medium.ttf": "d57371b0bc158473e8327aee67e48803",
"assets/fonts/Fredoka-Regular.ttf": "a2ba9e379f519df036ce179afecfc17a",
"assets/fonts/Fredoka-SemiBold.ttf": "9c03f93cafd2c5e3933b29c020eeaec6",
"assets/fonts/Fredoka_Condensed-Bold.ttf": "d328835ad7709df376d75c0ea4ce571e",
"assets/fonts/Fredoka_Condensed-Light.ttf": "156763b185e1d0d2efc51ec7af6281ac",
"assets/fonts/Fredoka_Condensed-Medium.ttf": "07769e86b6fe444467d375668133aee4",
"assets/fonts/Fredoka_Condensed-Regular.ttf": "ba5526cb99ffb6ea65793a3647ed58fd",
"assets/fonts/Fredoka_Condensed-SemiBold.ttf": "b241164a6298835126af584819a1865f",
"assets/fonts/Fredoka_Expanded-Bold.ttf": "2756c6066742ac49c010a7847df8dba1",
"assets/fonts/Fredoka_Expanded-Light.ttf": "c1f1bb3546ce4501873822e6a904a3f1",
"assets/fonts/Fredoka_Expanded-Medium.ttf": "16e994d2147223c74867a9b65174c9f3",
"assets/fonts/Fredoka_Expanded-Regular.ttf": "272b058af9f1c0f79cd3099988c7f422",
"assets/fonts/Fredoka_Expanded-SemiBold.ttf": "1b17c3c3a67e9b2f6a04b1bfc2af138b",
"assets/fonts/Fredoka_SemiCondensed-Bold.ttf": "19fff08b6b39a508c8aef4a1845fe552",
"assets/fonts/Fredoka_SemiCondensed-Light.ttf": "bcf6cb0161853639f4b49cd759c85cac",
"assets/fonts/Fredoka_SemiCondensed-Medium.ttf": "f8a09b0c9681674ede5da243fb74e3f9",
"assets/fonts/Fredoka_SemiCondensed-Regular.ttf": "2a72021d54a8492895c0f778723dd69d",
"assets/fonts/Fredoka_SemiCondensed-SemiBold.ttf": "84c4b0c7ae07d2664708349f15c8b0a7",
"assets/fonts/MaterialIcons-Regular.otf": "eec457da1989c2a76943cda00bb06f49",
"assets/NOTICES": "184c2712f760bc9cb3628207969bb26a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "b9609cc11f74b661eb989ed3427df8cb",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "8062a09af2624c1c801c836e7b00cec7",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "2791026001051647866e9e91dd9d86af",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "03bc4df18e428c2ad87241a8b1d7f64c",
"icons/Icon-512.png": "f23c03572508b2ff091d64d96d83d8e2",
"icons/Icon-maskable-192.png": "03bc4df18e428c2ad87241a8b1d7f64c",
"icons/Icon-maskable-512.png": "f23c03572508b2ff091d64d96d83d8e2",
"index.html": "180e2fc935bdae7739ab6c7277b32fbc",
"/": "180e2fc935bdae7739ab6c7277b32fbc",
"main.dart.js": "d993b98bd398657ca148a1fad86c9188",
"manifest.json": "6d347119e6e597f977607b13cb24d2bb",
"version.json": "1fc63e5bb66f2fadd41fde5fdcd1fd03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
