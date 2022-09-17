// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"4Nbni":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "8f78820c94085ce0";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"hfCYj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "render", ()=>render);
parcelHelpers.export(exports, "j", ()=>j);
parcelHelpers.export(exports, "vratiNazadCB", ()=>vratiNazadCB);
parcelHelpers.export(exports, "uzimanjeDrzava", ()=>uzimanjeDrzava);
parcelHelpers.export(exports, "lijevoDugmeView", ()=>lijevoDugmeView);
parcelHelpers.export(exports, "desnoDugmeView", ()=>desnoDugmeView);
parcelHelpers.export(exports, "resetIgre", ()=>resetIgre);
parcelHelpers.export(exports, "brisanjePolja", ()=>brisanjePolja);
parcelHelpers.export(exports, "lijevoZastaveCB", ()=>lijevoZastaveCB);
parcelHelpers.export(exports, "desnoZastaveCB", ()=>desnoZastaveCB);
parcelHelpers.export(exports, "renderZastave", ()=>renderZastave);
parcelHelpers.export(exports, "uzimanjeZastava", ()=>uzimanjeZastava);
var _pocetniEkranJs = require("./views/pocetniEkran.js");
var _pogodiGradoveJs = require("./views/pogodiGradove.js");
var _modelJs = require("./model.js");
var _pogodiDrzaveJs = require("./views/pogodiDrzave.js");
var _zavrsniJs = require("./views/zavrsni.js");
var _defaultViewJs = require("./views/defaultView.js");
const naslov = document.querySelector("h1");
const easterEgg = [
    "ŽNP",
    "KREATOR: POK3",
    "BAĆEVIĆI",
    "RG16",
    "ELEKTRO GAS"
];
let counter = 0;
(0, _pocetniEkranJs.pocniIgru).addEventListener("click", function() {
    if (counter > 5) naslov.textContent = easterEgg[(0, _modelJs.napraviRandomBroj)(5)];
    counter++;
});
function skloniUcitavanje() {
    (0, _pocetniEkranJs.tijelo).removeChild((0, _pocetniEkranJs.tijelo).childNodes[0]);
}
function prikaziKanvasIgreGradova() {
    document.querySelector(".pogodiGlavniGrad").style.display = "grid";
}
function skloniPocetni() {
    (0, _pocetniEkranJs.pocetniEkran).style.display = "none";
}
const pocniIgruCB = function() {
    (0, _pocetniEkranJs.pocetakIgre).textContent = "IZABERI MOD IGRE";
    (0, _pocetniEkranJs.pocetakIgreDiv).style.height = "13.25rem";
    (0, _pocetniEkranJs.countryGeek).style.height = "10rem";
};
const nazadCB = function() {
    (0, _pocetniEkranJs.pocetakIgre).textContent = "ZAPOČNI IGRU";
    (0, _pocetniEkranJs.pocetakIgreDiv).style.height = "3rem";
    (0, _pocetniEkranJs.countryGeek).style.height = "3rem";
};
const mainUpdate = function(drzava, trenutno, zastava) {
    drzava.textContent = `${(0, _modelJs.nizDrzava)[0, _modelJs.i].ime}`;
    trenutno.textContent = `${(0, _modelJs.i) + 1}/10`;
    zastava.src = `${(0, _modelJs.nizDrzava)[0, _modelJs.i].zastava}`;
};
const zavrsiIgruCB = function() {
    (0, _modelJs.zavrsniEkran)();
};
const zavrsiIgru = function() {
    (0, _defaultViewJs.zavrsiDugmeEv)(zavrsiIgruCB);
};
const render = function() {
    if ((0, _modelJs.nizDrzava)[0, _modelJs.i]) mainUpdate((0, _pogodiGradoveJs.imeDrzave), (0, _pogodiGradoveJs.trenutnaDrzava), (0, _pogodiGradoveJs.zastavaSlika));
    if ((0, _modelJs.nizDrzava)[0, _modelJs.i]) (0, _modelJs.odredjivanjeGlGrada)((0, _modelJs.opcije));
    (0, _modelJs.pogadjanjeGrada)();
};
let j = 0;
const oneTapSliciceCB = function(e) {
    gradoviIgraCB;
    j = Number(e.target.classList[1] - 1);
    (0, _modelJs.updateIndex)();
    render();
    if ((0, _modelJs.nizDrzava)[j].evList) (0, _pogodiGradoveJs.skloniEvListener)((0, _modelJs.opcije), (0, _modelJs.callBack));
};
const oneTapSlicice = function(item) {
    item.forEach((item, j)=>{
        (0, _pogodiGradoveJs.oneTapSliciceEvListener)(item, oneTapSliciceCB.bind(Event));
        item.style.backgroundImage = `url(${(0, _modelJs.nizDrzava)[j].zastava})`;
    });
};
(0, _pocetniEkranJs.pocniIgruEvListener)(pocniIgruCB);
(0, _pocetniEkranJs.nazadPocetniEvListener)(nazadCB);
const gradoviIgraCB = function() {
    document.querySelector(".pogodiZastavu").style.display = "none";
    uzimanjeDrzava();
    (0, _modelJs.isprazniDrzave)();
    (0, _pocetniEkranJs.pocetniEkran).style.display = "none";
    (0, _zavrsniJs.zavrsni).style.display = "none";
    (0, _defaultViewJs.igrajPonovoXListener)(gradoviIgraCB);
};
const vratiNazadCB = function() {
    (0, _zavrsniJs.zavrsni).style.display = "none";
    document.querySelector(".pogodiGlavniGrad").style.display = "none";
    document.querySelector(".pogodiZastavu").style.display = "none";
    (0, _pocetniEkranJs.pocetniEkran).style.display = "grid";
};
(0, _defaultViewJs.vratiNazadEvListener)(vratiNazadCB, nazadCB);
let vrijemeZastave = false;
let vrijemeGradovi = false;
const updateVremena = function() {
    if ((0, _modelJs.mod) === 1) {
        if (vrijemeZastave) return;
        setInterval(()=>(0, _defaultViewJs.vrijemeEl).textContent = (0, _modelJs.produzenFormat), 1000);
        vrijemeZastave = true;
    } else if ((0, _modelJs.mod) === 2) {
        if (vrijemeGradovi) return;
        setInterval(()=>(0, _pogodiDrzaveJs.vrijemeZastaveEl).textContent = (0, _modelJs.produzenFormat), 1000);
        vrijemeGradovi = true;
    }
};
async function uzimanjeDrzava() {
    (0, _modelJs.modIgre)(1);
    (0, _modelJs.isprazniDrzave)();
    skloniPocetni();
    (0, _pocetniEkranJs.postaviUcitavanje)();
    await (0, _modelJs.uzmiDrzave)();
    skloniUcitavanje();
    prikaziKanvasIgreGradova();
    (0, _modelJs.odabirDrzava)((0, _modelJs.sveDrzave), (0, _modelJs.num), true);
    oneTapSlicice((0, _modelJs.drzaveH));
    (0, _pogodiGradoveJs.ubacivanjeEvListenera)();
    (0, _modelJs.funkcijaVremena)();
    updateVremena();
    render();
    (0, _modelJs.pogadjanjeGrada)();
    zavrsiIgru();
}
const lijevoDugmeView = function() {
    (0, _modelJs.dugmeLijevoCB)();
    render();
    if ((0, _modelJs.nizDrzava)[0, _modelJs.i].evList) (0, _pogodiGradoveJs.skloniEvListener)((0, _modelJs.opcije), (0, _modelJs.callBack));
};
const desnoDugmeView = function() {
    (0, _modelJs.dugmeDesnoCB)();
    render();
};
//Zastave
function prikaziKanvasZastave() {
    document.querySelector(".pogodiZastavu").style.display = "grid";
}
const zastaveIgraCB = function() {
    document.querySelector(".pogodiGlavniGrad").style.display = "none";
    uzimanjeZastava();
    (0, _modelJs.isprazniDrzave)();
    (0, _pocetniEkranJs.pocetniEkran).style.display = "none";
    (0, _zavrsniJs.zavrsni).style.display = "none";
    (0, _defaultViewJs.igrajPonovoXListener)(zastaveIgraCB);
};
(0, _pogodiDrzaveJs.pocniZastaveEvListener)(zastaveIgraCB);
const resetIgre = function() {
    console.log();
    if ((0, _modelJs.mod) === 1) (0, _defaultViewJs.igrajPonovoEvListener)(gradoviIgraCB);
    if ((0, _modelJs.mod) === 2) (0, _defaultViewJs.igrajPonovoEvListener)(zastaveIgraCB);
};
const potvrdiImeCB = function() {
    (0, _modelJs.provjera)((0, _pogodiDrzaveJs.unesenaDrzava));
};
const obrisiImeCB = function() {
    (0, _pogodiDrzaveJs.unesenaDrzava).value = "";
    (0, _pogodiDrzaveJs.unesenaDrzava).placeholder = "";
};
const unesenaDrzavaCB = function(Event1) {
    if (Event1.key !== "Enter") return;
    (0, _modelJs.provjera)((0, _pogodiDrzaveJs.unesenaDrzava));
};
const brisanjePolja = function() {
    (0, _pogodiDrzaveJs.unesenaDrzava).disabled = false;
    (0, _pogodiDrzaveJs.unesenaDrzava).focus();
    (0, _pogodiDrzaveJs.unesenaDrzava).value = "";
    (0, _pogodiDrzaveJs.unesenaDrzava).textContent = "";
};
const dodajEv = function() {
    (0, _pogodiDrzaveJs.potvrdiImeEvListener)(potvrdiImeCB);
    (0, _pogodiDrzaveJs.obrisiImeEvListener)(obrisiImeCB);
};
const ukloniEv = function() {
    (0, _pogodiDrzaveJs.potvrdiImeEvSklanjanje)(potvrdiImeCB);
    (0, _pogodiDrzaveJs.obrisiImeEvSklanjanje)(obrisiImeCB);
};
const lijevoZastaveCB = function() {
    (0, _modelJs.dugmeLijevoCB)();
    (0, _modelJs.vecOdgovoreno)(dodajEv, ukloniEv);
    brisanjePolja();
    renderZastave();
};
const desnoZastaveCB = function() {
    (0, _modelJs.dugmeDesnoCB)();
    (0, _modelJs.vecOdgovoreno)(dodajEv, ukloniEv);
    brisanjePolja();
    renderZastave();
};
(0, _pogodiDrzaveJs.potvrdiImeEvListener)(potvrdiImeCB);
(0, _pogodiDrzaveJs.obrisiImeEvListener)(obrisiImeCB);
(0, _pogodiDrzaveJs.unesenaDrzavaEvListener)(unesenaDrzavaCB.bind(Event));
(0, _pocetniEkranJs.zastaveIgraEvListener)(gradoviIgraCB);
(0, _pogodiDrzaveJs.lijevoZastaveEvListener)(lijevoZastaveCB);
(0, _pogodiDrzaveJs.desnoZastaveEvListener)(desnoZastaveCB);
const renderZastave = function() {
    if ((0, _modelJs.nizDrzava)[0, _modelJs.i]) mainUpdate((0, _pogodiGradoveJs.imeDrzave), (0, _pogodiDrzaveJs.trenutnaDrzavaZastave), (0, _pogodiDrzaveJs.zastava));
};
const oneTapSliciceZastaveCB = function(e) {
    j = Number(e.target.classList[1] - 1);
    (0, _modelJs.updateIndex)();
    (0, _modelJs.vecOdgovoreno)(dodajEv, ukloniEv);
    renderZastave();
};
const oneTapSliciceZastave = function(item) {
    item.forEach((item, j)=>{
        (0, _pogodiDrzaveJs.oneTapSliciceZastaveEvListener)(item, oneTapSliciceZastaveCB.bind(Event));
        item.style.backgroundImage = `url(${(0, _modelJs.nizDrzava)[j].zastava})`;
    });
};
function resetIgreZastave() {
    (0, _modelJs.resetPolja)();
    ukloniEv();
    dodajEv();
    brisanjePolja();
    (0, _pogodiDrzaveJs.unesenaDrzava).placeholder = "Unesi ime drzave";
}
async function uzimanjeZastava() {
    (0, _modelJs.modIgre)(2);
    (0, _modelJs.isprazniDrzave)();
    skloniPocetni();
    (0, _pocetniEkranJs.postaviUcitavanje)();
    await (0, _modelJs.uzmiDrzave)();
    skloniUcitavanje();
    prikaziKanvasZastave();
    resetIgreZastave();
    (0, _modelJs.odabirDrzava)((0, _modelJs.sveDrzave), (0, _modelJs.num), false);
    oneTapSliciceZastave((0, _pogodiDrzaveJs.sliciceH));
    (0, _pogodiGradoveJs.ubacivanjeEvListenera)();
    (0, _modelJs.funkcijaVremena)();
    updateVremena();
    renderZastave();
    zavrsiIgru();
}

},{"./views/pocetniEkran.js":"ghbpt","./views/pogodiGradove.js":"75HlI","./model.js":"Py0LO","./views/pogodiDrzave.js":"gFs8w","./views/zavrsni.js":"7W0s5","./views/defaultView.js":"4DUDt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ghbpt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "countryGeek", ()=>countryGeek);
parcelHelpers.export(exports, "pocetakIgre", ()=>pocetakIgre);
parcelHelpers.export(exports, "pocetakIgreDiv", ()=>pocetakIgreDiv);
parcelHelpers.export(exports, "tijelo", ()=>tijelo);
parcelHelpers.export(exports, "pocniIgru", ()=>pocniIgru);
parcelHelpers.export(exports, "gradoviIgra", ()=>gradoviIgra);
parcelHelpers.export(exports, "zastaveIgra", ()=>zastaveIgra);
parcelHelpers.export(exports, "zatvoriIgre", ()=>zatvoriIgre);
parcelHelpers.export(exports, "pocetniEkran", ()=>pocetniEkran);
parcelHelpers.export(exports, "nazadDiv", ()=>nazadDiv);
parcelHelpers.export(exports, "pocniIgruEvListener", ()=>pocniIgruEvListener);
parcelHelpers.export(exports, "nazadPocetniEvListener", ()=>nazadPocetniEvListener);
parcelHelpers.export(exports, "zastaveIgraEvListener", ()=>zastaveIgraEvListener);
parcelHelpers.export(exports, "postaviUcitavanje", ()=>postaviUcitavanje);
const countryGeek = document.querySelector("h1");
const pocetakIgre = document.querySelector(".pocetak--igre");
const pocetakIgreDiv = document.querySelector(".kutija--pocetak--igre");
const tijelo = document.querySelector("body");
const pocniIgru = document.querySelector(".pocni-igru-div");
const gradoviIgra = document.querySelector("pogodiZastavu");
const zastaveIgra = document.querySelector(".glgrad-igra-div");
const zatvoriIgre = document.querySelector(".izadji-div");
const pocetniEkran = document.querySelector(".pocetniEkran");
const nazadDiv = document.querySelector(".izadji-div");
//Prikaz pocetnog ekrana
pocetniEkran.style.display = "grid";
const pocniIgruEvListener = function(pocniIgruCB) {
    pocniIgru.addEventListener("click", pocniIgruCB);
};
const nazadPocetniEvListener = function(nazadCB) {
    nazadDiv.addEventListener("click", nazadCB);
};
const zastaveIgraEvListener = function(zastaveIgraCB) {
    zastaveIgra.addEventListener("click", zastaveIgraCB);
};
const postaviUcitavanje = function() {
    tijelo.insertAdjacentHTML("afterbegin", `<h1 class="ucitavanje">Ucitavanje...</h1>`);
}; //Izdrzavanje odabira igre
 // pocetniEkran.pocniIgru.addEventListener("click", () => {
 //   pocetniEkran.pocetakIgre.textContent = "IZABERI MOD IGRE";
 //   pocetniEkran.pocetakIgreDiv.style.height = "12rem";
 //   pocetniEkran.pocetakIgreDiv.style.paddingBottom = "9rem";
 //   pocetniEkran.countryGeek.style.height = "12rem";
 // });
 // pocetniEkran.zastaveIgra.addEventListener("click", () => {
 //   uzmiDrzave();
 //   pocetniEkran.pocniIgruCanvas.style.display = "none";
 //   gradoviIgraCanvas.style.display = "none";
 // });
 // gradoviIgra.addEventListener("click", () => {});
 // zatvoriIgre.addEventListener("click", () => {});

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"75HlI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "zastaveCanvas", ()=>zastaveCanvas);
parcelHelpers.export(exports, "gradoviIgraCanvas", ()=>gradoviIgraCanvas);
parcelHelpers.export(exports, "trenutnaDrzava", ()=>trenutnaDrzava);
parcelHelpers.export(exports, "ponudjeniOdgovori", ()=>ponudjeniOdgovori);
parcelHelpers.export(exports, "imeDrzave", ()=>imeDrzave);
parcelHelpers.export(exports, "zastavaSlika", ()=>zastavaSlika);
parcelHelpers.export(exports, "ubacivanjeEvListenera", ()=>ubacivanjeEvListenera);
parcelHelpers.export(exports, "sklanjanjeEvListenera", ()=>sklanjanjeEvListenera);
parcelHelpers.export(exports, "oneTapSliciceEvListener", ()=>oneTapSliciceEvListener);
parcelHelpers.export(exports, "pogadjanjeEvListener", ()=>pogadjanjeEvListener);
parcelHelpers.export(exports, "skloniEvListener", ()=>skloniEvListener);
var _controlerJs = require("../controler.js");
var _modelJs = require("../model.js");
"use strict";
const zastaveCanvas = document.querySelector(".pogodiZastavu");
zastaveCanvas.style.display = "none";
const gradoviIgraCanvas = document.querySelector(".pogodiGlavniGrad");
gradoviIgraCanvas.style.display = "none";
const trenutnaDrzava = document.querySelector(".trenutnaDrzavaPoRedu");
const ponudjeniOdgovori = document.querySelector(".ponudjeniOdgovori");
const imeDrzave = document.querySelector(".nazivTrenutneDrzave");
const zastavaSlika = document.querySelector(".zastava");
const lijevoDugme = document.querySelector(".lijevo");
const desnoDugme = document.querySelector(".desno");
const ubacivanjeEvListenera = function() {
    lijevoDugme.addEventListener("click", (0, _controlerJs.lijevoDugmeView));
    desnoDugme.addEventListener("click", (0, _controlerJs.desnoDugmeView));
};
const sklanjanjeEvListenera = function(callBack) {
    (0, _modelJs.opcije).forEach((item, j)=>{
        if (j < 3) item.removeEventListener("click", callBack, false);
    });
};
const oneTapSliciceEvListener = function(item, callBack) {
    item.addEventListener("click", callBack);
};
const pogadjanjeEvListener = function(opcije, callBack) {
    opcije.forEach((item)=>item.addEventListener("click", callBack));
};
const skloniEvListener = function(opcije, callBack) {
    let count = 0;
    opcije.forEach((item)=>{
        if (count < 3) item.removeEventListener("click", callBack);
        count++;
    });
};

},{"../controler.js":"hfCYj","../model.js":"Py0LO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"Py0LO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "opcije", ()=>opcije);
parcelHelpers.export(exports, "nizDrzava", ()=>nizDrzava);
parcelHelpers.export(exports, "i", ()=>i);
parcelHelpers.export(exports, "sveDrzave", ()=>sveDrzave);
parcelHelpers.export(exports, "num", ()=>num);
parcelHelpers.export(exports, "izvor", ()=>izvor);
parcelHelpers.export(exports, "skracenFormat", ()=>skracenFormat);
parcelHelpers.export(exports, "produzenFormat", ()=>produzenFormat);
parcelHelpers.export(exports, "sec", ()=>sec);
parcelHelpers.export(exports, "min", ()=>min);
parcelHelpers.export(exports, "drzaveH", ()=>drzaveH);
parcelHelpers.export(exports, "callBack", ()=>callBack);
parcelHelpers.export(exports, "zavrseno", ()=>zavrseno);
parcelHelpers.export(exports, "mod", ()=>mod);
parcelHelpers.export(exports, "modIgre", ()=>modIgre);
parcelHelpers.export(exports, "updateIndex", ()=>updateIndex);
parcelHelpers.export(exports, "odredjivanjeGlGrada", ()=>odredjivanjeGlGrada);
parcelHelpers.export(exports, "dugmeLijevoCB", ()=>dugmeLijevoCB);
parcelHelpers.export(exports, "dugmeDesnoCB", ()=>dugmeDesnoCB);
parcelHelpers.export(exports, "tajmer", ()=>tajmer);
parcelHelpers.export(exports, "napraviRandomBroj", ()=>napraviRandomBroj);
parcelHelpers.export(exports, "skloniLaznuDrzavu", ()=>skloniLaznuDrzavu);
parcelHelpers.export(exports, "odabirDrzava", ()=>odabirDrzava);
// export const odabirZastave = function (sveDrzave, num, zastavaSlika, render) {
//   for (let j = 0; j < 10; j++) {
//     const random = napraviRandomBroj(num);
//     izvor = sveDrzave[random].flags.png;
//     nizDrzava.push({});
//     nizDrzava[j].ime = sveDrzave[random].name.common;
//     nizDrzava[j].zastava = sveDrzave[random].flags.png;
//     nizDrzava[j].glGrad = sveDrzave[random].capital[0];
//     nizDrzava[j].ispunjen = false;
//     nizDrzava[j].opcije = [];
//     nizDrzava[j].evList = false;
//     const iskoristeneDrzave = [];
//     while (iskoristeneDrzave.length < 3) {
//       const random2 = napraviRandomBroj(num);
//       if (
//         !iskoristeneDrzave.some((item) => item === random2) &&
//         random2 !== random
//       ) {
//         iskoristeneDrzave.push(random2);
//         nizDrzava[j].opcije.push(sveDrzave[random2].capital[0]);
//       }
//     }
//     sveDrzave.splice(random, 1);
//     zastavaSlika.src = izvor;
//     const randomBroj = napraviRandomBroj(3);
//     nizDrzava[j].opcije.push(randomBroj);
//     nizDrzava[j].opcije[randomBroj] = nizDrzava[j].glGrad;
//     num--;
//   }
// };
parcelHelpers.export(exports, "uzmiDrzave", ()=>uzmiDrzave);
parcelHelpers.export(exports, "funkcijaVremena", ()=>funkcijaVremena);
parcelHelpers.export(exports, "resetVremena", ()=>resetVremena);
parcelHelpers.export(exports, "isprazniDrzave", ()=>isprazniDrzave);
parcelHelpers.export(exports, "zavrsniEkran", ()=>zavrsniEkran);
parcelHelpers.export(exports, "pogadjanjeGrada", ()=>pogadjanjeGrada);
parcelHelpers.export(exports, "tajmerZastave", ()=>tajmerZastave);
parcelHelpers.export(exports, "resetPolja", ()=>resetPolja);
parcelHelpers.export(exports, "provjera", ()=>provjera);
parcelHelpers.export(exports, "manipulacijaIkonama", ()=>manipulacijaIkonama);
parcelHelpers.export(exports, "vecOdgovoreno", ()=>vecOdgovoreno);
var _controlerJs = require("./controler.js");
var _pocetniEkranJs = require("./views/pocetniEkran.js");
var _pogodiDrzaveJs = require("./views/pogodiDrzave.js");
var _pogodiGradoveJs = require("./views/pogodiGradove.js");
var _zavrsniJs = require("./views/zavrsni.js");
const opcije = document.querySelectorAll(".opcija");
let nizDrzava = [];
let i = 0;
let sveDrzave;
let num;
let izvor;
let skracenFormat = `0min`;
let produzenFormat = `00:00`;
let sec = 0;
let min = 0;
const drzaveH = document.querySelectorAll(".slicica-h");
const callBack = cb.bind(Event);
let zavrseno = false;
let mod = 0;
const modIgre = function(vrijednost) {
    mod = vrijednost;
};
const updateIndex = function() {
    i = (0, _controlerJs.j);
};
const odredjivanjeGlGrada = function(opcije) {
    opcije.forEach((item, j)=>{
        item.classList.remove("glavniGrad");
        item.textContent = nizDrzava[i].opcije[j];
    });
    const glGradIndex = nizDrzava[i].opcije[3];
    opcije[glGradIndex].classList.add("glavniGrad");
};
const dugmeLijevoCB = function() {
    if (i === 0) {
        i = 9;
        return;
    }
    i--;
    if (i === 9) return;
};
const dugmeDesnoCB = function() {
    if (i === 9) {
        i = 0;
        return;
    }
    // skloniEvListener(opcije, callBack);
    i++;
};
const tajmer = function(vrijeme) {
    return setTimeout(()=>{
        if (i === 9) i = 0;
        while(nizDrzava[i].opcije.length > 4)i++;
        (0, _controlerJs.render)();
    }, vrijeme);
};
const napraviRandomBroj = function(max) {
    return Math.trunc(Math.random() * max);
};
const skloniLaznuDrzavu = function(drzave) {
    sveDrzave = drzave.filter((item)=>item.name.common != "Kosovo");
};
const odabirDrzava = function(sveDrzave, num, zastava) {
    for(let j = 0; j < 10; j++){
        const random = napraviRandomBroj(num);
        izvor = sveDrzave[random].flags.png;
        nizDrzava.push({});
        nizDrzava[j].ime = sveDrzave[random].name.common;
        nizDrzava[j].zastava = sveDrzave[random].flags.png;
        if (zastava) {
            nizDrzava[j].glGrad = sveDrzave[random].capital[0];
            nizDrzava[j].ispunjen = false;
            nizDrzava[j].opcije = [];
            nizDrzava[j].evList = false;
        }
        const iskoristeneDrzave = [];
        while(iskoristeneDrzave.length < 3){
            const random2 = napraviRandomBroj(num);
            if (!iskoristeneDrzave.some((item)=>item === random2) && random2 !== random) {
                iskoristeneDrzave.push(random2);
                nizDrzava[j].opcije?.push(sveDrzave[random2].capital[0]);
            }
        }
        sveDrzave.splice(random, 1);
        const randomBroj = napraviRandomBroj(3);
        nizDrzava[j].opcije?.push(randomBroj);
        if (nizDrzava[j].opcije) nizDrzava[j].opcije[randomBroj] = nizDrzava[j].glGrad;
        num--;
    }
};
async function uzmiDrzave() {
    //Asinhrono uzimanje podataka...
    const api = await fetch("https://restcountries.com/v3.1/region/europe");
    sveDrzave = await api.json();
    skloniLaznuDrzavu(sveDrzave);
    num = sveDrzave.length;
}
let interval;
const funkcijaVremena = function() {
    interval = setInterval(()=>{
        sec++;
        if (sec === 60) {
            sec = 0;
            min++;
        }
        skracenFormat = `${min}min`;
        produzenFormat = `${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
    }, 1000);
};
const resetVremena = function() {
    produzenFormat = "00:00";
    clearInterval(interval);
    sec = 0;
    min = 0;
};
const isprazniDrzave = function() {
    nizDrzava = [];
    i = 0;
    sveDrzave;
    num;
    izvor;
    resetVremena();
};
const tacnaSlicica = function(odgovor, slika) {
    odgovor.style.backgroundColor = "green";
    drzaveH[i].style.backgroundImage = `linear-gradient(
    rgba(0, 255, 0, 0.5),
    rgba(0, 255, 0, 0.5)
    ), url(${slika})`;
};
const netacnaSlicica = function(odgovor, slika) {
    odgovor.style.backgroundColor = "red";
    drzaveH[i].style.backgroundImage = `linear-gradient(
      rgba(255, 0, 0, 0.5),
      rgba(255, 0, 0, 0.5)
      ), url(${slika})`;
};
const brojTacnih = function() {
    let counter = 0;
    if (nizDrzava[0]?.opcije) nizDrzava.forEach((item)=>{
        if (item.opcije[3] === item.opcije[4]) counter++;
    });
    else nizDrzava.forEach((item)=>{
        if (item.ime === "tacno") counter++;
    });
    return counter;
};
const provjeraOdgovorenihDrzava = function() {
    return nizDrzava.every((item)=>item.opcije.length === 5);
};
const zavrsniEkran = function() {
    (0, _pogodiGradoveJs.gradoviIgraCanvas).style.display = "none";
    console.log((0, _pogodiGradoveJs.gradoviIgraCanvas));
    isprazniDrzave();
    document.querySelector(".pogodiZastavu").style.display = "none";
    (0, _zavrsniJs.zavrsni).style.display = "grid";
    const tacniiSat = document.querySelectorAll("h4");
    tacniiSat[0].textContent = `${brojTacnih()}/10`;
    tacniiSat[1].textContent = produzenFormat.split("").splice(1, 4).join("");
    (0, _controlerJs.resetIgre)();
    return;
};
function cb(e) {
    if (!nizDrzava[0]) return;
    nizDrzava[i].evList = true;
    if (e.target.classList[1] === "glavniGrad") tacnaSlicica(e.target, nizDrzava[i].zastava);
    else netacnaSlicica(e.target, nizDrzava[i].zastava);
    pronadjiOdgovor(e.target.textContent);
    if (provjeraOdgovorenihDrzava()) zavrsniEkran();
    (0, _pogodiGradoveJs.skloniEvListener)(opcije, callBack);
    tajmer(500);
}
const pronadjiOdgovor = function(input) {
    nizDrzava[i].opcije.find((item, j)=>{
        if (item === input) nizDrzava[i].opcije.push(j);
    });
};
const pogadjanjeGrada = function() {
    if (!nizDrzava[0]) return;
    opcije.forEach((item)=>{
        item.style.backgroundColor = "#FA5252";
    });
    (0, _pogodiGradoveJs.pogadjanjeEvListener)(opcije, callBack);
    const tacanOdgovor = nizDrzava[i].opcije[3];
    const unijetOdgovor = nizDrzava[i].opcije[4];
    if (nizDrzava[i].opcije.length > 4) {
        if (tacanOdgovor === unijetOdgovor) tacnaSlicica(opcije[unijetOdgovor], nizDrzava[i].zastava);
        else netacnaSlicica(opcije[unijetOdgovor], nizDrzava[i].zastava);
    }
};
//Zastave
const bojaOdgovoraZastave = function(input, boja) {
    input.blur();
    input.parentNode.childNodes[1].childNodes[1].style.backgroundColor = boja;
    input.parentNode.childNodes[5].childNodes[1].style.backgroundColor = boja;
    document.querySelectorAll(".zavjesa").forEach((item)=>{
        item.style.backgroundColor = boja;
    });
    input.parentNode.childNodes[3].style.backgroundColor = boja;
};
let poljeUnesi = document.querySelector("input");
const tajmerZastave = function(vrijeme) {
    return setTimeout(()=>{
        if (nizDrzava.every((item)=>item.ime === "tacno" || item.ime === "netacno")) zavrsniEkran();
        else {
            if (i === 9) i = 0;
            while(nizDrzava[i].ime === "tacno" || nizDrzava[i].ime === "netacno")i++;
            bojaOdgovoraZastave(poljeUnesi, "#fa5252");
            (0, _controlerJs.brisanjePolja)();
            poljeUnesi.focus();
            (0, _controlerJs.renderZastave)();
        }
    }, vrijeme);
};
const resetPolja = function() {
    bojaOdgovoraZastave(poljeUnesi, "#fa5252");
    (0, _controlerJs.brisanjePolja)();
    poljeUnesi.focus();
    manipulacijaIkonama(1);
};
const provjera = function(input) {
    poljeUnesi ??= input;
    const odgovor = poljeUnesi.value.toString().toLowerCase().replaceAll(" ", "");
    const trenutna = nizDrzava[i].ime.toString().toLowerCase().replaceAll(" ", "");
    if (odgovor === trenutna) {
        nizDrzava[i].ime = "tacno";
        bojaOdgovoraZastave(poljeUnesi, "green");
    } else {
        nizDrzava[i].ime = "netacno";
        bojaOdgovoraZastave(poljeUnesi, "red");
    }
    nizDrzava[i].odgovor = poljeUnesi.value;
    tajmerZastave(500);
};
const manipulacijaIkonama = function(vrijednost) {
    document.querySelector(".potvrdi-tekst").style.opacity = vrijednost;
    document.querySelector(".obrisi-tekst").style.opacity = vrijednost;
    document.querySelector(".zavjesa").style.opacity = vrijednost;
    document.querySelector(".x-ikona").style.opacity = vrijednost;
    document.querySelector(".strihir-ikona").style.opacity = vrijednost;
};
const vecOdgovoreno = function(dodaj, ukloni) {
    ukloni();
    if (nizDrzava[i].ime !== "tacno" && nizDrzava[i].ime !== "netacno") dodaj();
    poljeUnesi.placeholder = "Unesi ime drzave";
    poljeUnesi.disabled = false;
    manipulacijaIkonama(1);
    bojaOdgovoraZastave(poljeUnesi, "#fa5252");
    if (nizDrzava[i].ime !== "tacno" && nizDrzava[i].ime !== "netacno") return;
    manipulacijaIkonama(0);
    if (nizDrzava[i].ime === "tacno") bojaOdgovoraZastave(poljeUnesi, "green");
    if (nizDrzava[i].ime === "netacno") bojaOdgovoraZastave(poljeUnesi, "red");
    poljeUnesi.placeholder = nizDrzava[i].odgovor;
    poljeUnesi.disabled = true;
    document.querySelector(".potvrdi").disabled = true;
    document.querySelector(".obrisi").disabled = true;
};

},{"./controler.js":"hfCYj","./views/pocetniEkran.js":"ghbpt","./views/pogodiDrzave.js":"gFs8w","./views/pogodiGradove.js":"75HlI","./views/zavrsni.js":"7W0s5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gFs8w":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "zastava", ()=>zastava);
parcelHelpers.export(exports, "zastaveIgra", ()=>zastaveIgra);
parcelHelpers.export(exports, "potvrdiIme", ()=>potvrdiIme);
parcelHelpers.export(exports, "obrisiIme", ()=>obrisiIme);
parcelHelpers.export(exports, "unesenaDrzava", ()=>unesenaDrzava);
parcelHelpers.export(exports, "sliciceH", ()=>sliciceH);
parcelHelpers.export(exports, "lijevoZastave", ()=>lijevoZastave);
parcelHelpers.export(exports, "desnoZastave", ()=>desnoZastave);
parcelHelpers.export(exports, "vrijemeZastaveEl", ()=>vrijemeZastaveEl);
parcelHelpers.export(exports, "trenutnaDrzavaZastave", ()=>trenutnaDrzavaZastave);
parcelHelpers.export(exports, "lijevoZastaveEvListener", ()=>lijevoZastaveEvListener);
parcelHelpers.export(exports, "desnoZastaveEvListener", ()=>desnoZastaveEvListener);
parcelHelpers.export(exports, "potvrdiImeEvListener", ()=>potvrdiImeEvListener);
parcelHelpers.export(exports, "potvrdiImeEvSklanjanje", ()=>potvrdiImeEvSklanjanje);
parcelHelpers.export(exports, "obrisiImeEvListener", ()=>obrisiImeEvListener);
parcelHelpers.export(exports, "obrisiImeEvSklanjanje", ()=>obrisiImeEvSklanjanje);
parcelHelpers.export(exports, "oneTapSliciceZastaveEvListener", ()=>oneTapSliciceZastaveEvListener);
parcelHelpers.export(exports, "unesenaDrzavaEvListener", ()=>unesenaDrzavaEvListener);
parcelHelpers.export(exports, "pocniZastaveEvListener", ()=>pocniZastaveEvListener);
var _pogodiGradoveJs = require("./pogodiGradove.js");
const zastava = document.querySelector(".zastava2");
const zastaveIgra = document.querySelector(".zastave-igra-div");
const potvrdiIme = document.querySelector(".potvrdi");
const obrisiIme = document.querySelector(".obrisi");
const unesenaDrzava = document.querySelector(".unesena-drzava");
const sliciceH = document.querySelectorAll(".slicica");
const lijevoZastave = document.querySelector(".lijevoZastave");
const desnoZastave = document.querySelector(".desnoZastave");
const vrijemeZastaveEl = document.querySelector(".minuteZastave");
const trenutnaDrzavaZastave = document.querySelector(".trenutnaDrzavaPoReduZastave").firstChild;
const lijevoZastaveEvListener = function(callBack) {
    lijevoZastave.addEventListener("click", callBack);
};
const desnoZastaveEvListener = function(callBack) {
    desnoZastave.addEventListener("click", callBack);
};
const potvrdiImeEvListener = function(callBack) {
    potvrdiIme.addEventListener("click", callBack);
};
const potvrdiImeEvSklanjanje = function(callBack) {
    potvrdiIme.removeEventListener("click", callBack);
};
const obrisiImeEvListener = function(callBack) {
    obrisiIme.addEventListener("click", callBack);
};
const obrisiImeEvSklanjanje = function(callBack) {
    obrisiIme.removeEventListener("click", callBack);
};
const oneTapSliciceZastaveEvListener = function(item, callBack) {
    item.addEventListener("click", callBack);
};
const unesenaDrzavaEvListener = function(callBack) {
    unesenaDrzava.addEventListener("keyup", callBack);
};
const pocniZastaveEvListener = function(callBack) {
    zastaveIgra.addEventListener("click", callBack);
};

},{"./pogodiGradove.js":"75HlI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7W0s5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "zavrsni", ()=>zavrsni);
const zavrsni = document.querySelector(".zavrsni-ekran");

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4DUDt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "vrijemeEl", ()=>vrijemeEl);
parcelHelpers.export(exports, "zavrsiDugme", ()=>zavrsiDugme);
parcelHelpers.export(exports, "vratiSeNazadZavrsni", ()=>vratiSeNazadZavrsni);
parcelHelpers.export(exports, "vratiSeNazadIgra", ()=>vratiSeNazadIgra);
parcelHelpers.export(exports, "igrajPonovo", ()=>igrajPonovo);
parcelHelpers.export(exports, "igrajPonovoEvListener", ()=>igrajPonovoEvListener);
parcelHelpers.export(exports, "igrajPonovoXListener", ()=>igrajPonovoXListener);
parcelHelpers.export(exports, "vratiNazadEvListener", ()=>vratiNazadEvListener);
parcelHelpers.export(exports, "zavrsiDugmeEv", ()=>zavrsiDugmeEv);
const vrijemeEl = document.querySelector(".vrijeme");
const zavrsiDugme = document.querySelectorAll(".zavrsiSve");
const vratiSeNazadZavrsni = document.querySelectorAll(".nazad-na-pocetni");
const vratiSeNazadIgra = document.querySelectorAll(".vracanje-nazad");
const igrajPonovo = document.querySelectorAll(".ponovi-igru");
const igrajPonovoEvListener = function(callBack) {
    igrajPonovo.forEach((item)=>item.addEventListener("click", callBack));
};
const igrajPonovoXListener = function(callBack) {
    igrajPonovo.forEach((item)=>item.removeEventListener("click", callBack));
};
const vratiNazadEvListener = function(callBack, callBack2) {
    vratiSeNazadZavrsni.forEach((item)=>{
        item.addEventListener("click", callBack);
        item.addEventListener("click", callBack2);
    });
    vratiSeNazadIgra.forEach((item)=>{
        item.addEventListener("click", callBack);
        item.addEventListener("click", callBack2);
    });
};
const zavrsiDugmeEv = function(callBack) {
    zavrsiDugme.forEach((item)=>item.addEventListener("click", callBack));
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["4Nbni","hfCYj"], "hfCYj", "parcelRequire94c2")

//# sourceMappingURL=index.94085ce0.js.map
