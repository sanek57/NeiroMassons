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
        globalObject
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
})({"bw3CT":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "42036d7a98ade5a7";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "0e44517fe70e0048";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
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
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && ![
        'localhost',
        '127.0.0.1',
        '0.0.0.0'
    ].includes(hostname) ? 'wss' : 'ws';
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        disposedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === 'reload') fullReload();
        else if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
                await hmrApplyUpdates(assets);
                hmrDisposeQueue();
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                let processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ('reload' in location) location.reload();
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
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
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
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
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
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
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
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
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
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
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
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
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
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"jvaAX":[function(require,module,exports,__globalThis) {
var _cardWelcom = require("./plugins/card-welcom");
var _cardDefine = require("./plugins/card-define");
var _cardTest = require("./plugins/card-test");
var _cardResultJs = require("./plugins/card-result.js");
var _styleCss = require("./css/style.css");
var _questionsJs = require("./questions.js");
const welcom = new (0, _cardWelcom.WelcomCard)('#app', {
    async onStart (options) {
        await loadDefine(options);
    }
});
let define = null;
async function loadDefine(data = {}) {
    const $el = document.querySelector('#app');
    $el.innerHTML = '';
    define = new (0, _cardDefine.DefineCard)('#app', {
        title: "\u041E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u0435 \u0434\u043E\u043C\u0438\u043D\u0438\u0440\u0443\u044E\u0449\u0435\u0433\u043E \u043D\u0435\u0439\u0440\u043E\u043C\u0435\u0434\u0438\u0430\u0442\u043E\u0440\u0430",
        text: "\u041F\u0435\u0440\u0432\u044B\u0439 \u0431\u043B\u043E\u043A \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432. \u041E\u0442\u0432\u0435\u0447\u0430\u0439\u0442\u0435 \u043D\u0430 \u0432\u043E\u043F\u0440\u043E\u0441\u044B, \u043E\u0441\u043D\u043E\u0432\u044B\u0432\u0430\u044F\u0441\u044C \u043D\u0430 \u0432\u0430\u0448\u0435\u043C \u0442\u0435\u043A\u0443\u0449\u0435\u043C \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0438.",
        footerButtons: [
            {
                text: "\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043A\u043E \u0432\u0442\u043E\u0440\u043E\u043C\u0443 \u0431\u043B\u043E\u043A\u0443",
                async handler () {
                    await changeDataBlock({
                        blockNumber: 2,
                        blockQuestions: (0, _questionsJs.questionsList).blockTwo,
                        countQuestions: (0, _questionsJs.questionsList).blockTwo.length
                    });
                }
            },
            {
                text: "\u0414\u0430\u043B\u0435\u0435",
                async handler () {
                    await changeDataBlock({
                        blockNumber: 1,
                        blockQuestions: (0, _questionsJs.questionsList).blockOne,
                        countQuestions: (0, _questionsJs.questionsList).blockOne.length
                    });
                }
            }
        ]
    });
}
let test = null;
async function initTest(data) {
    let result = {};
    test = new (0, _cardTest.TestCard)('#app', {
        blockNumber: data.blockNumber,
        blockQuestions: data.blockQuestions,
        countQuestions: data.countQuestions,
        async onFinishBlockQuestion (blockAnswers) {
            console.log('Finish test block', blockAnswers.blockNumber);
            if (blockAnswers.blockNumber === 1) {
                await changeDataBlock({
                    blockNumber: 2,
                    blockQuestions: (0, _questionsJs.questionsList).blockTwo,
                    countQuestions: (0, _questionsJs.questionsList).blockTwo.length
                });
                result.blockOne = await calculatResult(blockAnswers.answers, 50);
            } else if (blockAnswers.blockNumber === 2) {
                result.blockTwo = await calculatResult(blockAnswers.answers, [
                    25,
                    25,
                    40,
                    25
                ]);
                showResult(result);
            }
        }
    });
}
async function changeDataBlock(options) {
    if (test === null) {
        await initTest(options);
        console.log('test init');
    }
    if (options.blockNumber === 2) define.setContent({
        title: "\u041E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u0435 \u0434\u0435\u0444\u0438\u0446\u0438\u0442\u0430 \u043D\u0435\u0439\u0440\u043E\u043C\u0435\u0434\u0438\u0430\u0442\u043E\u0440\u043E\u0432",
        text: "\u0412\u0442\u043E\u0440\u043E\u0439 \u0431\u043B\u043E\u043A \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432. \u041E\u0442\u0432\u0435\u0447\u0430\u0439\u0442\u0435 \u043D\u0430 \u0432\u043E\u043F\u0440\u043E\u0441\u044B, \u043E\u0441\u043D\u043E\u0432\u044B\u0432\u0430\u044F\u0441\u044C \u043D\u0430 \u0432\u0430\u0448\u0435\u043C \u0442\u0435\u043A\u0443\u0449\u0435\u043C \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0438.",
        footerButtons: [
            {
                text: "\u0414\u0430\u043B\u0435\u0435",
                handler () {
                    test.setDataBLock(options);
                }
            }
        ]
    });
}
async function calculatResult(answers, maxValues) {
    let dopamineCount = 0;
    let acetylcholineCount = 0;
    let gabaCount = 0;
    let serotoninCount = 0;
    answers.forEach((answer, index)=>{
        if (answer) {
            if (index >= 0 && index < (maxValues[0] || 50)) dopamineCount++;
            else if (index >= (maxValues[0] || 50) && index < (maxValues[0] || 50) + (maxValues[1] || 50)) acetylcholineCount++;
            else if (index >= (maxValues[0] || 50) + (maxValues[1] || 50) && index < (maxValues[0] || 50) + (maxValues[1] || 50) + (maxValues[2] || 50)) gabaCount++;
            else if (index >= (maxValues[0] || 50) + (maxValues[1] || 50) + (maxValues[2] || 50) && index < (maxValues[0] || 50) + (maxValues[1] || 50) + (maxValues[2] || 50) + (maxValues[3] || 50)) serotoninCount++;
        }
    });
    return [
        {
            text: "\u0414\u043E\u0444\u0430\u043C\u0438\u043D",
            value: dopamineCount
        },
        {
            text: "\u0410\u0446\u0435\u0442\u0438\u043B\u0445\u043E\u043B\u0438\u043D",
            value: acetylcholineCount
        },
        {
            text: "\u0413\u0410\u041C\u041A",
            value: gabaCount
        },
        {
            text: "\u0421\u0435\u0440\u043E\u0442\u043E\u043D\u0438\u043D",
            value: serotoninCount
        }
    ];
}
function showResult(data) {
    const result = new (0, _cardResultJs.ResultCard)('#app', {
        dataOne: data.blockOne,
        dataTwo: data.blockTwo
    });
} // loadDefine()

},{"./plugins/card-welcom":"68NWj","./plugins/card-define":"T4yBv","./plugins/card-test":"48ETH","./plugins/card-result.js":"9sIPZ","./css/style.css":"04N6h","./questions.js":"kQ3Ps"}],"68NWj":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "WelcomCard", ()=>WelcomCard);
function getTemplate(data) {
    const html = `
    <div class="container pt-1">
        <div class="d-flex">
        <img src="http://127.0.0.1:5500/logo.png" class="logo mt-3" alt="oopps">
        <h5 class="text_logo">\u{41D}\u{435}\u{439}\u{440}\u{43E}\u{43C}\u{430}\u{441}\u{441}\u{43E}\u{43D}\u{44B}</h5>
        </div>
    <h1>\u{414}\u{43E}\u{431}\u{440}\u{43E} \u{43F}\u{43E}\u{436}\u{430}\u{43B}\u{43E}\u{432}\u{430}\u{442}\u{44C} \u{43D}\u{430} \u{442}\u{435}\u{441}\u{442} \u{411}\u{440}\u{430}\u{432}\u{435}\u{440}\u{43C}\u{430}\u{43D}\u{430}</h1>
        <div class="person-info">
            <div class="form-floating mb-3">
                <input type="text" class="form-control ${data.isValid.name || 'is-invalid'}" id="input_name" placeholder="\u{418}\u{432}\u{430}\u{43D}" data-type="input" value="${data.name}">
                <label for="input_name">\u{418}\u{43C}\u{44F}</label>
            </div>
            <div class="form-floating mb-3">
                <select class="form-select" id="select_gender">
                    <option selected="1" value="man">\u{41C}\u{443}\u{436}\u{441}\u{43A}\u{43E}\u{439}</option>
                    <option value="women">\u{416}\u{435}\u{43D}\u{441}\u{43A}\u{438}\u{439}</option>
                </select>
                <label for="select_gender">\u{41F}\u{43E}\u{43B}</label>
            </div>
            <div class="form-floating mb-3">
                <input type="number" class="form-control  ${data.isValid.age || 'is-invalid'}" id="input_age" placeholder="18" data-type="input" value="${data.age}">
                <label for="input_age">\u{412}\u{43E}\u{437}\u{440}\u{430}\u{441}\u{442}</label>
            </div>
            <button class="btn btn-outline-info w-100 mt-2" data-type="start" id="start">
                \u{41D}\u{430}\u{447}\u{430}\u{442}\u{44C} \u{442}\u{435}\u{441}\u{442}
            </button>
        </div>
    </div>
    `;
    return html;
}
function noop() {}
class WelcomCard {
    constructor(selector, options){
        this.$el = document.querySelector(selector);
        this.options = options;
        this.defaultData = {
            isValid: {
                name: true,
                age: true
            },
            name: '',
            age: ''
        };
        this.#render(this.defaultData);
        this.#setup();
    }
    #render(data) {
        this.$el.innerHTML = getTemplate(data);
    }
    #setup() {
        this.$btnStart = document.getElementById('start');
        this.clickHandler = this.clickHandler.bind(this);
        this.$el.addEventListener('click', this.clickHandler);
    }
    clickHandler(event) {
        const { type } = event.target.dataset;
        // console.log(type)
        if (type === 'start') this.startTest();
    }
    startTest() {
        let person = this.isCorrectFields();
        const $inputGender = this.$el.querySelector('#select_gender');
        delete person.isValid;
        this.options.onStart && this.options.onStart(Object.assign(person, {
            gender: $inputGender.value
        }));
    }
    isCorrectFields() {
        const $inputName = this.$el.querySelector('#input_name');
        const $inputAge = this.$el.querySelector('#input_age');
        // стираем стили предыдущего выбора
        this.$el.querySelectorAll('[data-type="input"]').forEach((item)=>{
            item.classList.remove('is-invalid');
        });
        let success = true;
        let person = {
            isValid: {
                name: true,
                age: true
            },
            name: $inputName.value,
            age: $inputAge.value
        };
        if ($inputName.value.length === 0) {
            person.isValid.name = false;
            success = false;
        }
        if (+$inputAge.value <= 0 || $inputAge.value.length === 0) {
            person.isValid.age = false;
            success = false;
        }
        if (!success) {
            this.#render(person);
            return;
        }
        return person;
    }
    destroy() {
        this.$el.removeEventListener('click', this.clickHandler);
        this.$el.innerHTML = '';
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"j7FRh":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
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

},{}],"T4yBv":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DefineCard", ()=>DefineCard);
Element.prototype.appendAfter = function(element) {
    element.parentNode.insertBefore(this, element.nextSibling);
};
function noop() {}
function _createModalFooter(buttons = []) {
    if (buttons.length === 0) return document.createElement('div');
    const wrap = document.createElement('span');
    buttons.forEach((btn)=>{
        const $btn = document.createElement('button');
        $btn.textContent = btn.text;
        $btn.classList.add('btn');
        $btn.classList.add(`btn-outline-info`);
        $btn.classList.add('w-100');
        $btn.classList.add('mt-3');
        $btn.onclick = btn.handler || noop;
        wrap.appendChild($btn);
    });
    return wrap;
}
function getTemplate(data) {
    const html = `
    <div class="container pt-1">
    <h1>${data.title}</h1>
        <div class="person-info">
            <h5>${data.text}</h5>
        </div>
    </div>
    `;
    return html;
}
class DefineCard {
    constructor(selector, options){
        this.$el = document.querySelector(selector);
        this.options = options;
        this.#render();
    }
    #render() {
        this.$el.innerHTML = getTemplate(this.options);
        const footer = _createModalFooter(this.options.footerButtons);
        footer.appendAfter(this.$el.querySelector('.person-info'));
        document.body.appendChild(this.$el);
    }
    clickHandler(event) {
        const { type } = event.target.dataset;
    }
    setContent(options) {
        this.options = options;
        this.#render();
    }
    destroy() {
        this.$el.removeEventListener('click', this.clickHandler);
        this.$el.innerHTML = '';
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"48ETH":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TestCard", ()=>TestCard);
function getTemplate(data) {
    // console.log(data)
    const curQuestion = data.curQ;
    const lastQuestion = data.lastQ;
    const isFirstQuestion = curQuestion === 1 ? 'disabled' : '';
    const percent = curQuestion / lastQuestion * 100;
    const html = `
    <div class="container pt-1">
                <div
                    class="progress position-relative mt-3"
                    role="progressbar"
                    aria-label="Example with label"
                    aria-valuenow="${percent}"
                    aria-valuemin="0"
                    aria-valuemax="100"
                >
                    <div
                        class="progress-bar overflow-visible text-dark"
                        style="width: ${percent}%"
                    ></div>
                    <small
                        class="justify-content-center text-dark d-flex position-absolute w-100"
                        >${`\u{412}\u{43E}\u{43F}\u{440}\u{43E}\u{441} ${curQuestion} \u{438}\u{437} ${lastQuestion}`}</small
                    >
                </div>
                <div class="test-info">
                    <nav aria-label="..." class="mt-2">
                        <span>
                            <button
                                class="btn btn-outline-secondary ${isFirstQuestion}"
                                data-type="btn_prev"
                            >
                            &larr; \u{41D}\u{430}\u{437}\u{430}\u{434}
                            </button>
                        </span>
                    </nav>

                    <span class="d-flex justify-content-center mt-5 mb-5">
                        <small id="question_text">
                           ${data.text}
                        </small>
                    </span>

                    <span class="d-flex justify-content-between">
                        <span>
                            <button
                                class="btn btn-outline-info"
                                data-type="btn_yes" data-answ="true"
                            >
                                \u{414}\u{430}
                            </button>
                        </span>
                        <span>
                            <button
                                class="btn btn-outline-info"
                                data-type="btn_no" data-answ="false"
                            >
                                \u{41D}\u{435}\u{442}
                            </button>
                        </span>
                    </span>
                </div>
            </div>
    `;
    return html;
}
class TestCard {
    constructor(selector, options){
        this.$el = document.querySelector(selector);
        this.options = options;
        this.count = 0;
        this.answersUser = [];
        this.#render();
        this.#setup();
    }
    #render() {
        this.$el.innerHTML = getTemplate(this.#loadQuestion(this.count));
    }
    #setup() {
        this.clickHandler = this.clickHandler.bind(this);
        this.$el.addEventListener('click', this.clickHandler);
    }
    #loadQuestion(index) {
        const curQuestion = this.options.blockQuestions[index];
        return {
            curQ: curQuestion.number,
            lastQ: this.options.countQuestions,
            text: curQuestion.question,
            type: curQuestion.type
        };
    }
    setDataBLock(options) {
        this.options.blockNumber = options.blockNumber;
        this.options.blockQuestions = options.blockQuestions;
        this.options.countQuestions = options.countQuestions;
        this.count = 0;
        this.answersUser = [];
        this.#render();
    }
    clickHandler(event) {
        const { type } = event.target.dataset;
        if (type === 'btn_yes' || type === 'btn_no') {
            const { answ } = event.target.dataset;
            this.answersUser.push(answ === 'true' ? true : false);
            this.count++;
            // заканчиваем блок вопрсов
            if (this.count >= this.options.countQuestions) {
                this.options.onFinishBlockQuestion({
                    blockNumber: this.options.blockNumber,
                    answers: this.answersUser
                });
                return;
            }
            this.#render();
        }
        if (type === 'btn_prev') {
            this.count--;
            this.#render();
        }
    }
    destroy() {
        this.$el.removeEventListener('click', this.clickHandler);
        this.$el.innerHTML = '';
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"9sIPZ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ResultCard", ()=>ResultCard);
const toHTML = (data)=>`
    <div
                    class="progress position-relative mt-3"
                    role="progressbar"
                    aria-label="Example with label"
                    aria-valuenow="${data.value}"
                    aria-valuemin="0"
                    aria-valuemax="100"
                >
                    <div
                        class="progress-bar overflow-visible text-dark  bg-success"
                        style="width: ${data.value}%"
                    ></div>
                    <small
                        class="justify-content-center text-dark d-flex position-absolute w-100"
                        >${`${data.text}`}</small
                    >
                </div>
                `;
function getTemplate(options) {
    const progressDom = options.dataOne ? options.dataOne.map(toHTML).join('') : '';
    const progressDef = options.dataTwo ? options.dataTwo.map(toHTML).join('') : '';
    let titleVisible = options.dataOne ? '' : ' d-none';
    const html = `
  <div class="container pt-1">
                <h1>\u{420}\u{435}\u{437}\u{443}\u{43B}\u{44C}\u{442}\u{430}\u{442} \u{442}\u{435}\u{441}\u{442}\u{430}</h1>
                <div class="dominant ${titleVisible}">
                    <h5 class="text-center">\u{414}\u{43E}\u{43C}\u{438}\u{43D}\u{438}\u{440}\u{443}\u{44E}\u{449}\u{438}\u{439} \u{442}\u{438}\u{43F}</h5>
                    ${progressDom}
                </div>
                <div class="deficyt">
                    <h5 class="text-center">\u{414}\u{435}\u{444}\u{438}\u{446}\u{438}\u{442} \u{43D}\u{435}\u{439}\u{440}\u{43E}\u{43C}\u{435}\u{434}\u{438}\u{430}\u{442}\u{43E}\u{440}\u{43E}\u{432}</h5>
                     ${progressDef}
                </div>
            </div>
                `;
    return html;
}
class ResultCard {
    constructor(selector, options){
        this.$el = document.querySelector(selector);
        this.options = options;
        this.#render();
    }
    #render() {
        this.$el.innerHTML = getTemplate(this.options);
    }
    destroy() {
        this.$el.innerHTML = '';
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"04N6h":[function() {},{}],"kQ3Ps":[function(require,module,exports,__globalThis) {
exports.questionsList = {
    "blockOne": [
        {
            "number": 1,
            "question": "\u041C\u043D\u0435 \u043B\u0435\u0433\u043A\u043E \u0440\u0435\u0448\u0430\u0442\u044C \u0437\u0430\u0434\u0430\u0447\u0438 \u0432 \u0443\u043C\u0435.",
            "type": "\u0414\u043E\u0444\u0430\u043C\u0438\u043D - \u043F\u0430\u043C\u044F\u0442\u044C \u0438 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435"
        },
        {
            "number": 2,
            "question": "\u042F \u043B\u0435\u0433\u043A\u043E \u043A\u043E\u043D\u0446\u0435\u043D\u0442\u0440\u0438\u0440\u0443\u044E\u0441\u044C \u043D\u0430 \u0434\u0435\u043B\u0430\u0445.",
            "type": "\u0414\u043E\u0444\u0430\u043C\u0438\u043D - \u043F\u0430\u043C\u044F\u0442\u044C \u0438 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435"
        },
        {
            "number": 3,
            "question": "\u042F \u043C\u043E\u0433\u0443 \u043C\u044B\u0441\u043B\u0438\u0442\u044C \u0433\u043B\u0443\u0431\u043E\u043A\u043E.",
            "type": "\u0414\u043E\u0444\u0430\u043C\u0438\u043D - \u043F\u0430\u043C\u044F\u0442\u044C \u0438 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435"
        },
        {
            "number": 4,
            "question": "\u042F \u0431\u044B\u0441\u0442\u0440\u043E \u0441\u043E\u043E\u0431\u0440\u0430\u0436\u0430\u044E.",
            "type": "\u0414\u043E\u0444\u0430\u043C\u0438\u043D - \u043F\u0430\u043C\u044F\u0442\u044C \u0438 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435"
        },
        {
            "number": 5,
            "question": "\u042F \u043D\u0435 \u043C\u043E\u0433\u0443 \u0441\u043E\u0441\u0440\u0435\u0434\u043E\u0442\u043E\u0447\u0438\u0442\u044C\u0441\u044F \u0438\u0437-\u0437\u0430 \u0442\u043E\u0433\u043E, \u0447\u0442\u043E \u0434\u0435\u043B\u0430\u044E \u043C\u043D\u043E\u0433\u043E \u0434\u0435\u043B \u043E\u0434\u043D\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E.",
            "type": "\u0414\u043E\u0444\u0430\u043C\u0438\u043D - \u043F\u0430\u043C\u044F\u0442\u044C \u0438 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435"
        },
        {
            "number": 6,
            "question": "\u041C\u043D\u0435 \u043D\u0440\u0430\u0432\u044F\u0442\u0441\u044F \u043D\u0430\u043F\u0440\u044F\u0436\u0435\u043D\u043D\u044B\u0435 \u0434\u0438\u0441\u043A\u0443\u0441\u0441\u0438\u0438.",
            "type": "\u0414\u043E\u0444\u0430\u043C\u0438\u043D - \u043F\u0430\u043C\u044F\u0442\u044C \u0438 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435"
        },
        {
            "number": 7,
            "question": "\u0423 \u043C\u0435\u043D\u044F \u0445\u043E\u0440\u043E\u0448\u0435\u0435 \u0432\u043E\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435.",
            "type": "\u0414\u043E\u0444\u0430\u043C\u0438\u043D - \u043F\u0430\u043C\u044F\u0442\u044C \u0438 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435"
        },
        {
            "number": 8,
            "question": "\u042F \u0441\u043A\u043B\u043E\u043D\u0435\u043D \u043A \u0441\u0430\u043C\u043E\u043A\u0440\u0438\u0442\u0438\u043A\u0435 \u0438 \u0441\u0430\u043C\u043E\u0430\u043D\u0430\u043B\u0438\u0437\u0443",
            "type": "\u0414\u043E\u0444\u0430\u043C\u0438\u043D - \u043F\u0430\u043C\u044F\u0442\u044C \u0438 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435"
        },
        {
            "number": 9,
            "question": "\u0411\u043E\u043B\u044C\u0448\u0443\u044E \u0447\u0430\u0441\u0442\u044C \u0432\u0440\u0435\u043C\u0435\u043D\u0438 \u0443 \u043C\u0435\u043D\u044F \u043C\u043D\u043E\u0433\u043E \u044D\u043D\u0435\u0440\u0433\u0438\u0438.",
            "type": "\u0414\u043E\u0444\u0430\u043C\u0438\u043D - \u0424\u0438\u0437\u0438\u043E\u043B\u043E\u0433\u0438\u044F"
        },
        {
            "number": 10,
            "question": "\u0423 \u043C\u0435\u043D\u044F \u0447\u0430\u0441\u0442\u043E \u0431\u044B\u0432\u0430\u0435\u0442 \u043F\u043E\u0432\u044B\u0448\u0435\u043D\u043D\u043E\u0435 \u0430\u0440\u0442\u0435\u0440\u0438\u0430\u043B\u044C\u043D\u043E\u0435 \u0434\u0430\u0432\u043B\u0435\u043D\u0438\u0435.",
            "type": "\u0414\u043E\u0444\u0430\u043C\u0438\u043D - \u0424\u0438\u0437\u0438\u043E\u043B\u043E\u0433\u0438\u044F"
        },
        {
            "number": 11,
            "question": "\u0418\u043D\u043E\u0433\u0434\u0430 \u0443 \u043C\u0435\u043D\u044F \u0441\u043B\u0443\u0447\u0430\u043B\u0438\u0441\u044C \u044D\u043F\u0438\u0437\u043E\u0434\u044B, \u043A\u043E\u0433\u0434\u0430 \u044D\u043D\u0435\u0440\u0433\u0438\u044F \u0431\u0438\u043B\u0430 \u0447\u0435\u0440\u0435\u0437 \u043A\u0440\u0430\u0439.",
            "type": "\u0414\u043E\u0444\u0430\u043C\u0438\u043D - \u0424\u0438\u0437\u0438\u043E\u043B\u043E\u0433\u0438\u044F"
        },
        {
            "number": 12,
            "question": "\u042F \u0441\u0442\u0440\u0430\u0434\u0430\u044E \u0431\u0435\u0441\u0441\u043E\u043D\u043D\u0438\u0446\u0435\u0439.",
            "type": "\u0414\u043E\u0444\u0430\u043C\u0438\u043D - \u0424\u0438\u0437\u0438\u043E\u043B\u043E\u0433\u0438\u044F"
        },
        {
            "number": 13,
            "question": "\u041C\u0435\u043D\u044F \u0431\u043E\u0434\u0440\u044F\u0442 \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0443\u043F\u0440\u0430\u0436\u043D\u0435\u043D\u0438\u044F.",
            "type": "\u0414\u043E\u0444\u0430\u043C\u0438\u043D - \u0424\u0438\u0437\u0438\u043E\u043B\u043E\u0433\u0438\u044F"
        },
        {
            "number": 14,
            "question": "\u041E\u0431\u044B\u0447\u043D\u043E \u043C\u043D\u0435 \u043D\u0435 \u043D\u0443\u0436\u0435\u043D \u043A\u043E\u0444\u0435, \u0447\u0442\u043E\u0431\u044B \u0432\u0437\u0431\u043E\u0434\u0440\u0438\u0442\u044C\u0441\u044F \u043F\u043E \u0443\u0442\u0440\u0430\u043C.",
            "type": "\u0414\u043E\u0444\u0430\u043C\u0438\u043D - \u0424\u0438\u0437\u0438\u043E\u043B\u043E\u0433\u0438\u044F"
        },
        {
            "number": 15,
            "question": "\u041C\u043E\u0438 \u0432\u0435\u043D\u044B \u0437\u0430\u043C\u0435\u0442\u043D\u044B \u0438, \u043A\u0430\u043A \u043F\u0440\u0430\u0432\u0438\u043B\u043E, \u0432\u044B\u0433\u043B\u044F\u0434\u044F\u0442 \u0442\u0430\u043A, \u0431\u0443\u0434\u0442\u043E \u043C\u043E\u0433\u0443\u0442 \u0432\u044B\u0441\u043A\u043E\u0447\u0438\u0442\u044C \u0438\u0437 \u043A\u043E\u0436\u0438.",
            "type": "\u0414\u043E\u0444\u0430\u043C\u0438\u043D - \u0424\u0438\u0437\u0438\u043E\u043B\u043E\u0433\u0438\u044F"
        },
        {
            "number": 16,
            "question": "\u041E\u0431\u044B\u0447\u043D\u043E \u0443 \u043C\u0435\u043D\u044F \u043F\u043E\u0432\u044B\u0448\u0435\u043D\u043D\u0430\u044F \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430 \u0442\u0435\u043B\u0430.",
            "type": "\u0414\u043E\u0444\u0430\u043C\u0438\u043D - \u0424\u0438\u0437\u0438\u043E\u043B\u043E\u0433\u0438\u044F"
        },
        {
            "number": 17,
            "question": "\u042F \u043E\u0431\u0435\u0434\u0430\u044E, \u043D\u0435 \u043E\u0442\u0440\u044B\u0432\u0430\u044F\u0441\u044C \u043E\u0442 \u0440\u0430\u0431\u043E\u0442\u044B.",
            "type": "\u0414\u043E\u0444\u0430\u043C\u0438\u043D - \u0424\u0438\u0437\u0438\u043E\u043B\u043E\u0433\u0438\u044F"
        },
        {
            "number": 18,
            "question": "\u042F \u0437\u0430\u043D\u0438\u043C\u0430\u044E\u0441\u044C \u0441\u0435\u043A\u0441\u043E\u043C \u043F\u0440\u0438 \u043B\u044E\u0431\u043E\u0439 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438.",
            "type": "\u0414\u043E\u0444\u0430\u043C\u0438\u043D - \u0424\u0438\u0437\u0438\u043E\u043B\u043E\u0433\u0438\u044F"
        },
        {
            "number": 19,
            "question": "\u0423 \u043C\u0435\u043D\u044F \u0432\u0441\u043F\u044B\u043B\u044C\u0447\u0438\u0432\u044B\u0439 \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440.",
            "type": "\u0414\u043E\u0444\u0430\u043C\u0438\u043D - \u0424\u0438\u0437\u0438\u043E\u043B\u043E\u0433\u0438\u044F"
        },
        {
            "number": 20,
            "question": "\u042F \u0435\u043C \u0442\u043E\u043B\u044C\u043A\u043E \u0434\u043B\u044F \u0442\u043E\u0433\u043E, \u0447\u0442\u043E\u0431\u044B \u0437\u0430\u0440\u044F\u0434\u0438\u0442\u044C \u0441\u0432\u043E\u0435 \u0442\u0435\u043B\u043E \u044D\u043D\u0435\u0440\u0433\u0438\u0435\u0439.",
            "type": "\u0414\u043E\u0444\u0430\u043C\u0438\u043D - \u0424\u0438\u0437\u0438\u043E\u043B\u043E\u0433\u0438\u044F"
        },
        {
            "number": 21,
            "question": "\u0412 \u043A\u0438\u043D\u043E \u043C\u043D\u0435 \u043D\u0440\u0430\u0432\u044F\u0442\u0441\u044F \u0431\u043E\u0435\u0432\u0438\u043A\u0438.",
            "type": "\u0414\u043E\u0444\u0430\u043C\u0438\u043D - \u0424\u0438\u0437\u0438\u043E\u043B\u043E\u0433\u0438\u044F"
        },
        {
            "number": 22,
            "question": "\u0424\u0438\u0437\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0443\u043F\u0440\u0430\u0436\u043D\u0435\u043D\u0438\u044F \u0434\u0430\u044E\u0442 \u043C\u043D\u0435 \u043E\u0449\u0443\u0449\u0435\u043D\u0438\u0435 \u0441\u0438\u043B\u044B.",
            "type": "\u0414\u043E\u0444\u0430\u043C\u0438\u043D - \u0424\u0438\u0437\u0438\u043E\u043B\u043E\u0433\u0438\u044F"
        },
        {
            "number": 23,
            "question": "\u042F \u043E\u0447\u0435\u043D\u044C \u0432\u043B\u0430\u0441\u0442\u043D\u044B\u0439 \u0447\u0435\u043B\u043E\u0432\u0435\u043A.",
            "type": "\u0414\u043E\u0444\u0430\u043C\u0438\u043D - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 24,
            "question": "\u0418\u043D\u043E\u0433\u0434\u0430 \u044F \u043D\u0435 \u0437\u0430\u043C\u0435\u0447\u0430\u044E \u0441\u0432\u043E\u0438\u0445 \u0447\u0443\u0432\u0441\u0442\u0432.",
            "type": "\u0414\u043E\u0444\u0430\u043C\u0438\u043D - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 25,
            "question": "\u041C\u043D\u0435 \u0447\u0430\u0441\u0442\u043E \u0442\u0440\u0443\u0434\u043D\u043E \u0441\u043B\u0443\u0448\u0430\u0442\u044C \u0434\u0440\u0443\u0433\u0438\u0445, \u0438\u0437 \u0437\u0430 \u0441\u0432\u043E\u0435\u0433\u043E \u043C\u043D\u0435\u043D\u0438\u044F.",
            "type": "\u0414\u043E\u0444\u0430\u043C\u0438\u043D - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 26,
            "question": "\u042F \u043C\u043D\u043E\u0433\u043E \u0440\u0430\u0437 \u0434\u0440\u0430\u043B\u0441\u044F.",
            "type": "\u0414\u043E\u0444\u0430\u043C\u0438\u043D - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 27,
            "question": "\u041E\u0431\u044B\u0447\u043D\u043E \u044F \u043E\u0440\u0438\u0435\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u043D \u043D\u0430 \u0431\u0443\u0434\u0443\u0449\u0435\u0435.",
            "type": "\u0414\u043E\u0444\u0430\u043C\u0438\u043D - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 28,
            "question": "\u042F \u0440\u0430\u0441\u0447\u0435\u0442\u043B\u0438\u0432.",
            "type": "\u0414\u043E\u0444\u0430\u043C\u0438\u043D - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 29,
            "question": "\u0411\u043E\u043B\u044C\u0448\u0438\u043D\u0441\u0442\u0432\u043E \u043B\u044E\u0434\u0435\u0439 \u0441\u0447\u0438\u0442\u0430\u044E\u0442 \u043C\u0435\u043D\u044F \u0434\u0443\u043C\u0430\u044E\u0449\u0438\u043C \u043D\u0430 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0448\u0430\u0433\u043E\u0432 \u0432\u043F\u0435\u0440\u0435\u0434.",
            "type": "\u0414\u043E\u0444\u0430\u043C\u0438\u043D - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 30,
            "question": "\u042F \u0447\u0430\u0441\u0442\u043E \u0444\u0430\u043D\u0442\u0430\u0437\u0438\u0440\u0443\u044E \u0438 \u043F\u043E\u0433\u0440\u0443\u0436\u0430\u044E\u0441\u044C \u0432 \u043C\u0435\u0447\u0442\u044B.",
            "type": "\u0414\u043E\u0444\u0430\u043C\u0438\u043D - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 31,
            "question": "\u041C\u043D\u0435 \u043D\u0440\u0430\u0432\u0438\u0442\u0441\u044F \u0447\u0438\u0442\u0430\u0442\u044C \u043A\u043D\u0438\u0433\u0438 \u043F\u043E \u0438\u0441\u0442\u043E\u0440\u0438\u0438 \u0438 \u0434\u0440\u0443\u0433\u0443\u044E \u043D\u0435\u0445\u0443\u0434\u043E\u0436\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u0443\u044E \u043B\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u0443.",
            "type": "\u0414\u043E\u0444\u0430\u043C\u0438\u043D - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 32,
            "question": "\u042F \u0432\u043E\u0441\u0445\u0438\u0449\u0430\u044E\u0441\u044C \u0438\u0437\u043E\u0431\u0440\u0435\u0442\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C\u044E.",
            "type": "\u0414\u043E\u0444\u0430\u043C\u0438\u043D - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 33,
            "question": "\u041F\u043E\u0440\u043E\u0439 \u044F \u0441\u043B\u0438\u0448\u043A\u043E\u043C \u043F\u043E\u0437\u0434\u043D\u043E \u0440\u0430\u0441\u043F\u043E\u0437\u043D\u0430\u044E \u043B\u044E\u0434\u0435\u0439, \u0441\u043F\u043E\u0441\u043E\u0431\u043D\u044B\u0445 \u0441\u043E\u0437\u0434\u0430\u0442\u044C \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u044B.",
            "type": "\u0414\u043E\u0444\u0430\u043C\u0438\u043D - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 34,
            "question": "\u042F \u043E\u0431\u044B\u0447\u043D\u043E \u043D\u0435 \u043F\u043E\u0434\u0434\u0430\u044E\u0441\u044C \u043D\u0430 \u0443\u043B\u043E\u0432\u043A\u0438 \u043B\u044E\u0434\u0435\u0439, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u044F\u043A\u043E\u0431\u044B \u043D\u0443\u0436\u0434\u0430\u044E\u0442\u0441\u044F \u0432 \u043C\u043E\u0435\u0439 \u043F\u043E\u043C\u043E\u0449\u0438.",
            "type": "\u0414\u043E\u0444\u0430\u043C\u0438\u043D - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 35,
            "question": "\u0411\u043E\u043B\u044C\u0448\u0438\u043D\u0441\u0442\u0432\u043E \u043B\u044E\u0434\u0435\u0439 \u0441\u0447\u0438\u0442\u0430\u044E\u0442 \u043C\u0435\u043D\u044F \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u043C.",
            "type": "\u0414\u043E\u0444\u0430\u043C\u0438\u043D - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 36,
            "question": "\u041B\u044E\u0434\u0438 \u0441\u0447\u0438\u0442\u0430\u044E\u0442 \u043C\u043E\u0438 \u0438\u0434\u0435\u0438 \u0441\u0442\u0440\u0430\u043D\u043D\u044B\u043C\u0438, \u043D\u043E \u044F \u0432\u0441\u0435\u0433\u0434\u0430 \u043C\u043E\u0433\u0443 \u0440\u0430\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E \u0438\u0445 \u043E\u0431\u043E\u0441\u043D\u043E\u0432\u0430\u0442\u044C.",
            "type": "\u0414\u043E\u0444\u0430\u043C\u0438\u043D - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 37,
            "question": "\u042F \u0447\u0430\u0441\u0442\u043E \u0431\u044B\u0432\u0430\u044E \u0432\u0437\u0432\u043E\u043B\u043D\u043E\u0432\u0430\u043D \u0438\u043B\u0438 \u0440\u0430\u0437\u0434\u0440\u0430\u0436\u0435\u043D.",
            "type": "\u0414\u043E\u0444\u0430\u043C\u0438\u043D - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 38,
            "question": "\u042F \u0431\u0435\u0441\u043F\u043E\u043A\u043E\u044E\u0441\u044C \u0438\u043B\u0438 \u0440\u0430\u0441\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u044E\u0441\u044C \u0438\u0437-\u0437\u0430 \u043C\u0435\u043B\u043E\u0447\u0435\u0439.",
            "type": "\u0414\u043E\u0444\u0430\u043C\u0438\u043D - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 39,
            "question": "\u042F \u0444\u0430\u043D\u0442\u0430\u0437\u0438\u0440\u0443\u044E \u043E \u043D\u0435\u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u043D\u043E\u0439 \u0432\u043B\u0430\u0441\u0442\u0438.",
            "type": "\u0414\u043E\u0444\u0430\u043C\u0438\u043D - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 40,
            "question": "\u041C\u043D\u0435 \u043D\u0440\u0430\u0432\u0438\u0442\u0441\u044F \u0442\u0440\u0430\u0442\u0438\u0442\u044C \u0434\u0435\u043D\u044C\u0433\u0438.",
            "type": "\u0414\u043E\u0444\u0430\u043C\u0438\u043D - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 41,
            "question": "\u042F \u0434\u043E\u043C\u0438\u043D\u0438\u0440\u0443\u044E \u0432 \u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u044F\u0445.",
            "type": "\u0414\u043E\u0444\u0430\u043C\u0438\u043D - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 42,
            "question": "\u042F \u043E\u0447\u0435\u043D\u044C \u0441\u0442\u0440\u043E\u0433 \u043A \u0441\u0435\u0431\u0435.",
            "type": "\u0414\u043E\u0444\u0430\u043C\u0438\u043D - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 43,
            "question": "\u042F \u0430\u0433\u0440\u0435\u0441\u0441\u0438\u0432\u043D\u043E \u0440\u0435\u0430\u0433\u0438\u0440\u0443\u044E \u043D\u0430 \u043A\u0440\u0438\u0442\u0438\u043A\u0443, \u0447\u0430\u0441\u0442\u043E \u0437\u0430\u043D\u0438\u043C\u0430\u044E \u043E\u0431\u043E\u0440\u043E\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u0443\u044E \u043F\u043E\u0437\u0438\u0446\u0438\u044E \u0432 \u043F\u0440\u0438\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u0438 \u0434\u0440\u0443\u0433\u0438\u0445 \u043B\u044E\u0434\u0435\u0439.",
            "type": "\u0414\u043E\u0444\u0430\u043C\u0438\u043D - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 44,
            "question": "\u041D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043B\u044E\u0434\u0438 \u0441\u0447\u0438\u0442\u0430\u044E\u0442 \u043C\u0435\u043D\u044F \u0443\u043F\u0440\u044F\u043C\u0446\u0435\u043C.",
            "type": "\u0414\u043E\u0444\u0430\u043C\u0438\u043D - \u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440"
        },
        {
            "number": 45,
            "question": "\u0411\u043E\u043B\u044C\u0448\u0438\u043D\u0441\u0442\u0432\u043E \u043B\u044E\u0434\u0435\u0439 \u0441\u0447\u0438\u0442\u0430\u044E\u0442 \u043C\u0435\u043D\u044F \u043E\u0440\u0438\u0435\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u043C \u043D\u0430 \u0434\u043E\u0441\u0442\u0438\u0436\u0435\u043D\u0438\u044F.",
            "type": "\u0414\u043E\u0444\u0430\u043C\u0438\u043D - \u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440"
        },
        {
            "number": 46,
            "question": "\u0418\u043D\u043E\u0433\u0434\u0430 \u043B\u044E\u0434\u0438 \u0433\u043E\u0432\u043E\u0440\u044F\u0442, \u0447\u0442\u043E \u044F \u043D\u0435\u043B\u043E\u0433\u0438\u0447\u0435\u043D \u0438\u043B\u0438 \u043D\u0435\u043F\u043E\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u043D.",
            "type": "\u0414\u043E\u0444\u0430\u043C\u0438\u043D - \u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440"
        },
        {
            "number": 47,
            "question": "\u042F \u0433\u043E\u0442\u043E\u0432 \u043D\u0430 \u0432\u0441\u0451 \u0440\u0430\u0434\u0438 \u0434\u043E\u0441\u0442\u0438\u0436\u0435\u043D\u0438\u044F \u0446\u0435\u043B\u0438.",
            "type": "\u0414\u043E\u0444\u0430\u043C\u0438\u043D - \u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440"
        },
        {
            "number": 48,
            "question": "\u042F \u0446\u0435\u043D\u044E \u0440\u0435\u043B\u0438\u0433\u0438\u043E\u0437\u043D\u0443\u044E \u0444\u0438\u043B\u043E\u0441\u043E\u0444\u0438\u044E.",
            "type": "\u0414\u043E\u0444\u0430\u043C\u0438\u043D - \u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440"
        },
        {
            "number": 49,
            "question": "\u041C\u0435\u043D\u044F \u0437\u043B\u0438\u0442 \u043D\u0435\u043A\u043E\u043C\u043F\u0435\u0442\u0435\u043D\u0442\u043D\u043E\u0441\u0442\u044C.",
            "type": "\u0414\u043E\u0444\u0430\u043C\u0438\u043D - \u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440"
        },
        {
            "number": 50,
            "question": "\u042F \u043F\u0440\u0435\u0434\u044A\u044F\u0432\u043B\u044F\u044E \u0432\u044B\u0441\u043E\u043A\u0438\u0435 \u0442\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u044F \u043A \u0441\u0435\u0431\u0435 \u0438 \u0434\u0440\u0443\u0433\u0438\u043C.",
            "type": "\u0414\u043E\u0444\u0430\u043C\u0438\u043D - \u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440"
        },
        {
            "number": 51,
            "question": "\u0423 \u043C\u0435\u043D\u044F \u043E\u0447\u0435\u043D\u044C \u0445\u043E\u0440\u043E\u0448\u0430\u044F \u043F\u0430\u043C\u044F\u0442\u044C.",
            "type": "\u0410\u0446\u0435\u0442\u0438\u043B\u0445\u043E\u043B\u0438\u043D - \u043F\u0430\u043C\u044F\u0442\u044C \u0438 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435"
        },
        {
            "number": 52,
            "question": "\u042F \u043E\u0442\u043B\u0438\u0447\u043D\u044B\u0439 \u0441\u043B\u0443\u0448\u0430\u0442\u0435\u043B\u044C.",
            "type": "\u0410\u0446\u0435\u0442\u0438\u043B\u0445\u043E\u043B\u0438\u043D - \u043F\u0430\u043C\u044F\u0442\u044C \u0438 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435"
        },
        {
            "number": 53,
            "question": "\u042F \u0445\u043E\u0440\u043E\u0448\u043E \u0437\u0430\u043F\u043E\u043C\u0438\u043D\u0430\u044E \u0438\u0441\u0442\u043E\u0440\u0438\u0438.",
            "type": "\u0410\u0446\u0435\u0442\u0438\u043B\u0445\u043E\u043B\u0438\u043D - \u043F\u0430\u043C\u044F\u0442\u044C \u0438 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435"
        },
        {
            "number": 54,
            "question": "\u041E\u0431\u044B\u0447\u043D\u043E \u044F \u043D\u0435 \u0437\u0430\u0431\u044B\u0432\u0430\u044E \u043B\u0438\u0446\u0430.",
            "type": "\u0410\u0446\u0435\u0442\u0438\u043B\u0445\u043E\u043B\u0438\u043D - \u043F\u0430\u043C\u044F\u0442\u044C \u0438 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435"
        },
        {
            "number": 55,
            "question": "\u042F \u043E\u0447\u0435\u043D\u044C \u043A\u0440\u0435\u0430\u0442\u0438\u0432\u0435\u043D.",
            "type": "\u0410\u0446\u0435\u0442\u0438\u043B\u0445\u043E\u043B\u0438\u043D - \u043F\u0430\u043C\u044F\u0442\u044C \u0438 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435"
        },
        {
            "number": 56,
            "question": "\u0423 \u043C\u0435\u043D\u044F \u043E\u0442\u043B\u0438\u0447\u043D\u0430\u044F \u043A\u043E\u043D\u0446\u0435\u043D\u0442\u0440\u0430\u0446\u0438\u044F \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u044F, \u044F \u0440\u0435\u0434\u043A\u043E \u0447\u0442\u043E-\u0442\u043E \u0443\u043F\u0443\u0441\u043A\u0430\u044E.",
            "type": "\u0410\u0446\u0435\u0442\u0438\u043B\u0445\u043E\u043B\u0438\u043D - \u043F\u0430\u043C\u044F\u0442\u044C \u0438 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435"
        },
        {
            "number": 57,
            "question": "\u0423 \u043C\u0435\u043D\u044F \u0445\u043E\u0440\u043E\u0448\u0430\u044F \u0438\u043D\u0442\u0443\u0438\u0446\u0438\u044F.",
            "type": "\u0410\u0446\u0435\u0442\u0438\u043B\u0445\u043E\u043B\u0438\u043D - \u043F\u0430\u043C\u044F\u0442\u044C \u0438 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435"
        },
        {
            "number": 58,
            "question": "\u042F \u0437\u0430\u043C\u0435\u0447\u0430\u044E \u0432\u0441\u0451, \u0447\u0442\u043E \u043F\u0440\u043E\u0438\u0441\u0445\u043E\u0434\u0438\u0442 \u0432\u043E\u043A\u0440\u0443\u0433 \u043C\u0435\u043D\u044F.",
            "type": "\u0410\u0446\u0435\u0442\u0438\u043B\u0445\u043E\u043B\u0438\u043D - \u043F\u0430\u043C\u044F\u0442\u044C \u0438 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435"
        },
        {
            "number": 59,
            "question": "\u0423 \u043C\u0435\u043D\u044F \u0445\u043E\u0440\u043E\u0448\u0435\u0435 \u0432\u043E\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435.",
            "type": "\u0410\u0446\u0435\u0442\u0438\u043B\u0445\u043E\u043B\u0438\u043D - \u043F\u0430\u043C\u044F\u0442\u044C \u0438 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435"
        },
        {
            "number": 60,
            "question": "\u0423 \u043C\u0435\u043D\u044F \u043E\u0431\u044B\u0447\u043D\u043E \u0437\u0430\u043C\u0435\u0434\u043B\u0435\u043D\u043D\u044B\u0439 \u043F\u0443\u043B\u044C\u0441.",
            "type": "\u0410\u0446\u0435\u0442\u0438\u043B\u0445\u043E\u043B\u0438\u043D - \u0424\u0438\u0437\u0438\u043E\u043B\u043E\u0433\u0438\u044F"
        },
        {
            "number": 61,
            "question": "\u041C\u043E\u0451 \u0442\u0435\u043B\u043E \u0432 \u043E\u0442\u043B\u0438\u0447\u043D\u043E\u043C \u0442\u043E\u043D\u0443\u0441\u0435.",
            "type": "\u0410\u0446\u0435\u0442\u0438\u043B\u0445\u043E\u043B\u0438\u043D - \u0424\u0438\u0437\u0438\u043E\u043B\u043E\u0433\u0438\u044F"
        },
        {
            "number": 62,
            "question": "\u0423 \u043C\u0435\u043D\u044F \u043F\u0440\u0435\u043A\u0440\u0430\u0441\u043D\u043E\u0435 \u0442\u0435\u043B\u043E\u0441\u043B\u043E\u0436\u0435\u043D\u0438\u0435.",
            "type": "\u0410\u0446\u0435\u0442\u0438\u043B\u0445\u043E\u043B\u0438\u043D - \u0424\u0438\u0437\u0438\u043E\u043B\u043E\u0433\u0438\u044F"
        },
        {
            "number": 63,
            "question": "\u0423 \u043C\u0435\u043D\u044F \u043D\u0438\u0437\u043A\u0438\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C \u0445\u043E\u043B\u0435\u0441\u0442\u0435\u0440\u0438\u043D\u0430.",
            "type": "\u0410\u0446\u0435\u0442\u0438\u043B\u0445\u043E\u043B\u0438\u043D - \u0424\u0438\u0437\u0438\u043E\u043B\u043E\u0433\u0438\u044F"
        },
        {
            "number": 64,
            "question": "\u0412\u043E \u0432\u0440\u0435\u043C\u044F \u0435\u0434\u044B \u044F \u043B\u044E\u0431\u043B\u044E \u043D\u0430\u0441\u043B\u0430\u0436\u0434\u0430\u0442\u044C\u0441\u044F \u0430\u0440\u043E\u043C\u0430\u0442\u0430\u043C\u0438 \u0438 \u043A\u0440\u0430\u0441\u043E\u0442\u043E\u0439 \u0431\u043B\u044E\u0434.",
            "type": "\u0410\u0446\u0435\u0442\u0438\u043B\u0445\u043E\u043B\u0438\u043D - \u0424\u0438\u0437\u0438\u043E\u043B\u043E\u0433\u0438\u044F"
        },
        {
            "number": 65,
            "question": "\u041C\u043D\u0435 \u043D\u0440\u0430\u0432\u0438\u0442\u0441\u044F \u0437\u0430\u043D\u0438\u043C\u0430\u0442\u044C\u0441\u044F \u0439\u043E\u0433\u043E\u0439 \u0438 \u0440\u0430\u0441\u0442\u044F\u0436\u043A\u043E\u0439.",
            "type": "\u0410\u0446\u0435\u0442\u0438\u043B\u0445\u043E\u043B\u0438\u043D - \u0424\u0438\u0437\u0438\u043E\u043B\u043E\u0433\u0438\u044F"
        },
        {
            "number": 66,
            "question": "\u0412\u043E \u0432\u0440\u0435\u043C\u044F \u0441\u0435\u043A\u0441\u0430 \u044F \u043E\u0447\u0435\u043D\u044C \u0447\u0443\u0432\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u0435\u043D.",
            "type": "\u0410\u0446\u0435\u0442\u0438\u043B\u0445\u043E\u043B\u0438\u043D - \u0424\u0438\u0437\u0438\u043E\u043B\u043E\u0433\u0438\u044F"
        },
        {
            "number": 67,
            "question": "\u0412 \u043A\u0430\u043A\u043E\u0439-\u0442\u043E \u043C\u043E\u043C\u0435\u043D\u0442 \u0436\u0438\u0437\u043D\u0438 \u0443 \u043C\u0435\u043D\u044F \u0431\u044B\u043B\u043E \u0440\u0430\u0441\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E \u043F\u0438\u0449\u0435\u0432\u043E\u0433\u043E \u043F\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u044F.",
            "type": "\u0410\u0446\u0435\u0442\u0438\u043B\u0445\u043E\u043B\u0438\u043D - \u0424\u0438\u0437\u0438\u043E\u043B\u043E\u0433\u0438\u044F"
        },
        {
            "number": 68,
            "question": "\u042F \u043F\u0435\u0440\u0435\u043F\u0440\u043E\u0431\u043E\u0432\u0430\u043B \u043C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u043E \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u043D\u0435\u0442\u0440\u0430\u0434\u0438\u0446\u0438\u043E\u043D\u043D\u043E\u0439 \u043C\u0435\u0434\u0438\u0446\u0438\u043D\u044B.",
            "type": "\u0410\u0446\u0435\u0442\u0438\u043B\u0445\u043E\u043B\u0438\u043D - \u0424\u0438\u0437\u0438\u043E\u043B\u043E\u0433\u0438\u044F"
        },
        {
            "number": 69,
            "question": "\u042F \u0441\u043A\u043B\u043E\u043D\u0435\u043D \u043A \u0440\u043E\u043C\u0430\u043D\u0442\u0438\u043A\u0435.",
            "type": "\u0410\u0446\u0435\u0442\u0438\u043B\u0445\u043E\u043B\u0438\u043D - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 70,
            "question": "\u042F \u043E\u0441\u043E\u0437\u043D\u0430\u044E \u0441\u0432\u043E\u0438 \u0447\u0443\u0432\u0441\u0442\u0432\u0430.",
            "type": "\u0410\u0446\u0435\u0442\u0438\u043B\u0445\u043E\u043B\u0438\u043D - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 71,
            "question": "\u042F \u0441\u043A\u043B\u043E\u043D\u0435\u043D \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0442\u044C \u0440\u0435\u0448\u0435\u043D\u0438\u044F, \u043E\u0441\u043D\u043E\u0432\u044B\u0432\u0430\u044F\u0441\u044C \u043D\u0430 \u043F\u0440\u0435\u0434\u0447\u0443\u0432\u0441\u0442\u0432\u0438\u044F\u0445.",
            "type": "\u0410\u0446\u0435\u0442\u0438\u043B\u0445\u043E\u043B\u0438\u043D - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 72,
            "question": "\u042F \u043B\u044E\u0431\u043B\u044E \u043F\u043E\u0440\u0430\u0441\u0441\u0443\u0436\u0434\u0430\u0442\u044C.",
            "type": "\u0410\u0446\u0435\u0442\u0438\u043B\u0445\u043E\u043B\u0438\u043D - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 73,
            "question": "\u041D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043B\u044E\u0434\u0438 \u0433\u043E\u0432\u043E\u0440\u044F\u0442, \u0447\u0442\u043E \u044F \u0432\u0438\u0442\u0430\u044E \u0432 \u043E\u0431\u043B\u0430\u043A\u0430\u0445.",
            "type": "\u0410\u0446\u0435\u0442\u0438\u043B\u0445\u043E\u043B\u0438\u043D - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 74,
            "question": "\u042F \u043B\u044E\u0431\u043B\u044E \u0447\u0438\u0442\u0430\u0442\u044C \u0445\u0443\u0434\u043E\u0436\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u0443\u044E \u043B\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u0443.",
            "type": "\u0410\u0446\u0435\u0442\u0438\u043B\u0445\u043E\u043B\u0438\u043D - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 75,
            "question": "\u0423 \u043C\u0435\u043D\u044F \u043E\u0447\u0435\u043D\u044C \u0431\u043E\u0433\u0430\u0442\u0430\u044F \u0444\u0430\u043D\u0442\u0430\u0437\u0438\u044F.",
            "type": "\u0410\u0446\u0435\u0442\u0438\u043B\u0445\u043E\u043B\u0438\u043D - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 76,
            "question": "\u042F \u0442\u0432\u043E\u0440\u0447\u0435\u0441\u043A\u0438 \u043F\u043E\u0434\u0445\u043E\u0436\u0443 \u043A \u0440\u0435\u0448\u0435\u043D\u0438\u044E \u043C\u0435\u0436\u043B\u0438\u0447\u043D\u043E\u0441\u0442\u043D\u044B\u0445 \u043F\u0440\u043E\u0431\u043B\u0435\u043C.",
            "type": "\u0410\u0446\u0435\u0442\u0438\u043B\u0445\u043E\u043B\u0438\u043D - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 77,
            "question": "\u042F \u043E\u0447\u0435\u043D\u044C \u044D\u043A\u0441\u043F\u0440\u0435\u0441\u0441\u0438\u0432\u0435\u043D; \u043C\u043D\u0435 \u043D\u0440\u0430\u0432\u0438\u0442\u0441\u044F \u0433\u043E\u0432\u043E\u0440\u0438\u0442\u044C \u043E \u0442\u043E\u043C, \u0447\u0442\u043E \u043C\u0435\u043D\u044F \u0432\u043E\u043B\u043D\u0443\u0435\u0442.",
            "type": "\u0410\u0446\u0435\u0442\u0438\u043B\u0445\u043E\u043B\u0438\u043D - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 78,
            "question": "\u042F \u0436\u0438\u0437\u043D\u0435\u0440\u0430\u0434\u043E\u0441\u0442\u043D\u044B\u0439.",
            "type": "\u0410\u0446\u0435\u0442\u0438\u043B\u0445\u043E\u043B\u0438\u043D - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 79,
            "question": "\u042F \u0432\u0435\u0440\u044E \u0432 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u043C\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u043E\u043F\u044B\u0442\u0430.",
            "type": "\u0410\u0446\u0435\u0442\u0438\u043B\u0445\u043E\u043B\u0438\u043D - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 80,
            "question": "\u042F \u0432\u0435\u0440\u044E \u0432 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043E\u0432\u0430\u043D\u0438\u0435 \u0440\u043E\u0434\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0445 \u0434\u0443\u0448.",
            "type": "\u0410\u0446\u0435\u0442\u0438\u043B\u0445\u043E\u043B\u0438\u043D - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 81,
            "question": "\u0418\u043D\u043E\u0433\u0434\u0430 \u043C\u0435\u043D\u044F \u043C\u043E\u0436\u0435\u0442 \u0432\u0437\u0432\u043E\u043B\u043D\u043E\u0432\u0430\u0442\u044C \u0447\u0442\u043E-\u0442\u043E \u043C\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0435.",
            "type": "\u0410\u0446\u0435\u0442\u0438\u043B\u0445\u043E\u043B\u0438\u043D - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 82,
            "question": "\u042F \u0441\u043B\u0438\u0448\u043A\u043E\u043C \u043E\u0441\u0442\u0440\u043E \u0440\u0435\u0430\u0433\u0438\u0440\u0443\u044E \u043D\u0430 \u0432\u0441\u0451, \u0447\u0442\u043E \u0441\u0432\u044F\u0437\u0430\u043D\u043E \u0441 \u043C\u043E\u0438\u043C \u0442\u0435\u043B\u043E\u043C.",
            "type": "\u0410\u0446\u0435\u0442\u0438\u043B\u0445\u043E\u043B\u0438\u043D - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 83,
            "question": "\u042F \u0441 \u043B\u0435\u0433\u043A\u043E\u0441\u0442\u044C\u044E \u0432\u043E\u0441\u043F\u0440\u0438\u043D\u0438\u043C\u0430\u044E \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u044B, \u043D\u0435 \u0437\u0430\u0446\u0438\u043A\u043B\u0438\u0432\u0430\u044E\u0441\u044C \u043D\u0430 \u0440\u0430\u043D\u0435\u0435 \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u043E\u043C \u043F\u0443\u0442\u0438.",
            "type": "\u0410\u0446\u0435\u0442\u0438\u043B\u0445\u043E\u043B\u0438\u043D - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 84,
            "question": "\u042F \u043D\u0430\u0445\u043E\u0436\u0443\u0441\u044C \u0432 \u0433\u043B\u0443\u0431\u043E\u043A\u043E\u043C \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u0435 \u0441\u043E \u0441\u0432\u043E\u0438\u043C\u0438 \u044D\u043C\u043E\u0446\u0438\u044F\u043C\u0438.",
            "type": "\u0410\u0446\u0435\u0442\u0438\u043B\u0445\u043E\u043B\u0438\u043D - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 85,
            "question": "\u0414\u043B\u044F \u043C\u0435\u043D\u044F \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u043D\u043E \u0432 \u043E\u0434\u0438\u043D \u043C\u043E\u043C\u0435\u043D\u0442 \u043B\u044E\u0431\u0438\u0442\u044C \u043A\u043E\u0433\u043E-\u0442\u043E, \u0430 \u0432 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u043C\u043E\u043C\u0435\u043D\u0442 \u0443\u0436\u0435 \u0435\u0433\u043E \u043D\u0435\u043D\u0430\u0432\u0438\u0434\u0435\u0442\u044C.",
            "type": "\u0410\u0446\u0435\u0442\u0438\u043B\u0445\u043E\u043B\u0438\u043D - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 86,
            "question": "\u042F \u043B\u044E\u0431\u043B\u044E \u043F\u043E\u0444\u043B\u0438\u0440\u0442\u043E\u0432\u0430\u0442\u044C.",
            "type": "\u0410\u0446\u0435\u0442\u0438\u043B\u0445\u043E\u043B\u0438\u043D - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 87,
            "question": "\u042F \u043D\u0435 \u043F\u0440\u043E\u0442\u0438\u0432 \u043F\u043E\u0442\u0440\u0430\u0442\u0438\u0442\u044C \u0434\u0435\u043D\u044C\u0433\u0438, \u0435\u0441\u043B\u0438 \u044D\u0442\u043E \u043F\u043E\u0439\u0434\u0435\u0442 \u043D\u0430 \u043F\u043E\u043B\u044C\u0437\u0443 \u043C\u043E\u0438\u043C \u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u044F\u043C.",
            "type": "\u0410\u0446\u0435\u0442\u0438\u043B\u0445\u043E\u043B\u0438\u043D - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 88,
            "question": "\u0412\u043E \u0432\u0440\u0435\u043C\u044F \u0441\u0435\u043A\u0441\u0430 \u044F \u043B\u044E\u0431\u043B\u044E \u0444\u0430\u043D\u0442\u0430\u0437\u0438\u0440\u043E\u0432\u0430\u0442\u044C.",
            "type": "\u0410\u0446\u0435\u0442\u0438\u043B\u0445\u043E\u043B\u0438\u043D - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 89,
            "question": "\u041C\u043E\u0438 \u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u044F \u043E\u0431\u044B\u0447\u043D\u043E \u043D\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u044B \u0440\u043E\u043C\u0430\u043D\u0442\u0438\u043A\u043E\u0439.",
            "type": "\u0410\u0446\u0435\u0442\u0438\u043B\u0445\u043E\u043B\u0438\u043D - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 90,
            "question": "\u042F \u043B\u044E\u0431\u043B\u044E \u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0444\u0438\u043B\u044C\u043C\u044B \u043E \u043B\u044E\u0431\u0432\u0438.",
            "type": "\u0410\u0446\u0435\u0442\u0438\u043B\u0445\u043E\u043B\u0438\u043D - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 91,
            "question": "\u0412 \u043B\u044E\u0431\u043E\u0432\u043D\u043E\u0439 \u0436\u0438\u0437\u043D\u0438 \u044F \u0441\u043A\u043B\u043E\u043D\u0435\u043D \u0440\u0438\u0441\u043A\u043E\u0432\u0430\u0442\u044C.",
            "type": "\u0410\u0446\u0435\u0442\u0438\u043B\u0445\u043E\u043B\u0438\u043D - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 92,
            "question": "\u042F \u043E\u043F\u0442\u0438\u043C\u0438\u0441\u0442.",
            "type": "\u0410\u0446\u0435\u0442\u0438\u043B\u0445\u043E\u043B\u0438\u043D - \u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440"
        },
        {
            "number": 93,
            "question": "\u041C\u043D\u0435 \u043D\u0440\u0430\u0432\u0438\u0442\u0441\u044F \u043F\u043E\u043C\u043E\u0433\u0430\u0442\u044C \u0434\u0440\u0443\u0433\u0438\u043C \u043B\u044E\u0434\u044F\u043C.",
            "type": "\u0410\u0446\u0435\u0442\u0438\u043B\u0445\u043E\u043B\u0438\u043D - \u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440"
        },
        {
            "number": 94,
            "question": "\u042F \u0432\u0435\u0440\u044E, \u0447\u0442\u043E \u0432\u0441\u0435 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E, \u0435\u0441\u043B\u0438 \u043F\u0440\u0435\u0434\u0430\u043D \u0441\u0432\u043E\u0435\u0439 \u0446\u0435\u043B\u0438.",
            "type": "\u0410\u0446\u0435\u0442\u0438\u043B\u0445\u043E\u043B\u0438\u043D - \u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440"
        },
        {
            "number": 95,
            "question": "\u0423 \u043C\u0435\u043D\u044F \u0445\u043E\u0440\u043E\u0448\u043E \u043F\u043E\u043B\u0443\u0447\u0430\u0435\u0442\u0441\u044F \u043D\u0430\u043B\u0430\u0436\u0438\u0432\u0430\u0442\u044C \u0433\u0430\u0440\u043C\u043E\u043D\u0438\u0447\u043D\u044B\u0435 \u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u044F \u043C\u0435\u0436\u0434\u0443 \u043B\u044E\u0434\u044C\u043C\u0438.",
            "type": "\u0410\u0446\u0435\u0442\u0438\u043B\u0445\u043E\u043B\u0438\u043D - \u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440"
        },
        {
            "number": 96,
            "question": "\u0411\u043B\u0430\u0433\u043E\u0442\u0432\u043E\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C \u0438 \u0430\u043B\u044C\u0442\u0440\u0443\u0438\u0437\u043C - \u044D\u0442\u043E \u0442\u043E, \u0447\u0442\u043E \u0432\u0441\u0435\u0433\u0434\u0430 \u0441\u043E \u043C\u043D\u043E\u0439.",
            "type": "\u0410\u0446\u0435\u0442\u0438\u043B\u0445\u043E\u043B\u0438\u043D - \u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440"
        },
        {
            "number": 97,
            "question": "\u0414\u0440\u0443\u0433\u0438\u0435 \u0434\u0443\u043C\u0430\u044E\u0442, \u0447\u0442\u043E \u044F \u043C\u043E\u0433\u0443 \u0430\u043D\u0430\u043B\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0438 \u0432\u0438\u0434\u0435\u0442\u044C \u0431\u0443\u0434\u0443\u0449\u0435\u0435.",
            "type": "\u0410\u0446\u0435\u0442\u0438\u043B\u0445\u043E\u043B\u0438\u043D - \u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440"
        },
        {
            "number": 98,
            "question": "\u041C\u043E\u0438 \u0432\u0437\u0433\u043B\u044F\u0434\u044B \u043D\u0430 \u0440\u0435\u043B\u0438\u0433\u0438\u044E \u0447\u0430\u0441\u0442\u043E \u043C\u0435\u043D\u044F\u044E\u0442\u0441\u044F.",
            "type": "\u0410\u0446\u0435\u0442\u0438\u043B\u0445\u043E\u043B\u0438\u043D - \u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440"
        },
        {
            "number": 99,
            "question": "\u042F \u0438\u0434\u0435\u0430\u043B\u0438\u0441\u0442, \u043D\u043E \u043D\u0435 \u043F\u0435\u0440\u0444\u0435\u043A\u0446\u0438\u043E\u043D\u0438\u0441\u0442.",
            "type": "\u0410\u0446\u0435\u0442\u0438\u043B\u0445\u043E\u043B\u0438\u043D - \u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440"
        },
        {
            "number": 100,
            "question": "\u042F \u0441\u0447\u0430\u0441\u0442\u043B\u0438\u0432 \u0441 \u0442\u0435\u043C, \u043A\u0442\u043E \u043E\u0442\u043D\u043E\u0441\u0438\u0442\u0441\u044F \u043A\u043E \u043C\u043D\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E.",
            "type": "\u0410\u0446\u0435\u0442\u0438\u043B\u0445\u043E\u043B\u0438\u043D - \u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440"
        },
        {
            "number": 101,
            "question": "\u0423 \u043C\u0435\u043D\u044F \u043E\u0442\u043B\u0438\u0447\u043D\u0430\u044F \u043A\u043E\u043D\u0446\u0435\u043D\u0442\u0440\u0430\u0446\u0438\u044F, \u0438 \u044F \u043C\u043E\u0433\u0443 \u043B\u0435\u0433\u043A\u043E \u0438\u0441\u043A\u0430\u0442\u044C \u043B\u043E\u0433\u0438\u043A\u0443 \u0434\u0440\u0443\u0433\u0438\u0445 \u043B\u044E\u0434\u0435\u0439.",
            "type": "\u0413\u0410\u041C\u041A - \u043F\u0430\u043C\u044F\u0442\u044C \u0438 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435"
        },
        {
            "number": 102,
            "question": "\u0421\u043B\u0443\u0448\u0430\u0442\u044C \u0438\u0441\u0442\u043E\u0440\u0438\u0438 \u043B\u044E\u0434\u0435\u0439 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u0435\u0435, \u0447\u0435\u043C \u0447\u0438\u0442\u0430\u0442\u044C \u043A\u043D\u0438\u0433\u0438.",
            "type": "\u0413\u0410\u041C\u041A - \u043F\u0430\u043C\u044F\u0442\u044C \u0438 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435"
        },
        {
            "number": 103,
            "question": "\u042F \u0437\u0430\u043F\u043E\u043C\u0438\u043D\u0430\u044E \u0431\u043E\u043B\u044C\u0448\u0443\u044E \u0447\u0430\u0441\u0442\u044C \u0438\u0437 \u0442\u043E\u0433\u043E, \u0447\u0442\u043E \u0441\u043B\u044B\u0448\u0443.",
            "type": "\u0413\u0410\u041C\u041A - \u043F\u0430\u043C\u044F\u0442\u044C \u0438 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435"
        },
        {
            "number": 104,
            "question": "\u042F \u0441\u043F\u043E\u0441\u043E\u0431\u0435\u043D \u0437\u0430\u043F\u043E\u043C\u0438\u043D\u0430\u0442\u044C \u0440\u0430\u0441\u0441\u043A\u0430\u0437\u0430\u043D\u043D\u044B\u0435 \u043C\u043D\u0435 \u0444\u0430\u043A\u0442\u044B.",
            "type": "\u0413\u0410\u041C\u041A - \u043F\u0430\u043C\u044F\u0442\u044C \u0438 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435"
        },
        {
            "number": 105,
            "question": "\u042F \u0443\u0447\u0443\u0441\u044C \u043D\u0430 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u043C \u043E\u043F\u044B\u0442\u0435.",
            "type": "\u0413\u0410\u041C\u041A - \u043F\u0430\u043C\u044F\u0442\u044C \u0438 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435"
        },
        {
            "number": 106,
            "question": "\u042F \u0445\u043E\u0440\u043E\u0448\u043E \u0437\u0430\u043F\u043E\u043C\u0438\u043D\u0430\u044E \u0438\u043C\u0435\u043D\u0430.",
            "type": "\u0413\u0410\u041C\u041A - \u043F\u0430\u043C\u044F\u0442\u044C \u0438 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435"
        },
        {
            "number": 107,
            "question": "\u042F \u0445\u043E\u0440\u043E\u0448\u043E \u0443\u043C\u0435\u044E \u0444\u043E\u043A\u0443\u0441\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u043D\u0430 \u0437\u0430\u0434\u0430\u0447\u0430\u0445 \u0438 \u043D\u0430 \u0440\u0430\u0437\u0433\u043E\u0432\u043E\u0440\u0430\u0445 \u0441 \u043B\u044E\u0434\u044C\u043C\u0438.",
            "type": "\u0413\u0410\u041C\u041A - \u043F\u0430\u043C\u044F\u0442\u044C \u0438 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435"
        },
        {
            "number": 108,
            "question": "\u041C\u043D\u0435 \u043B\u0435\u0433\u043A\u043E \u0440\u0430\u0441\u0441\u043B\u0430\u0431\u0438\u0442\u044C\u0441\u044F.",
            "type": "\u0413\u0410\u041C\u041A - \u0424\u0438\u0437\u0438\u043E\u043B\u043E\u0433\u0438\u044F"
        },
        {
            "number": 109,
            "question": "\u042F \u0441\u043F\u043E\u043A\u043E\u0439\u043D\u044B\u0439 \u0447\u0435\u043B\u043E\u0432\u0435\u043A.",
            "type": "\u0413\u0410\u041C\u041A - \u0424\u0438\u0437\u0438\u043E\u043B\u043E\u0433\u0438\u044F"
        },
        {
            "number": 110,
            "question": "\u042F \u043B\u0435\u0433\u043A\u043E \u0437\u0430\u0441\u044B\u043F\u0430\u044E \u043F\u043E \u043D\u043E\u0447\u0430\u043C.",
            "type": "\u0413\u0410\u041C\u041A - \u0424\u0438\u0437\u0438\u043E\u043B\u043E\u0433\u0438\u044F"
        },
        {
            "number": 111,
            "question": "\u042F \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043A\u0438 \u0432\u044B\u043D\u043E\u0441\u043B\u0438\u0432.",
            "type": "\u0413\u0410\u041C\u041A - \u0424\u0438\u0437\u0438\u043E\u043B\u043E\u0433\u0438\u044F"
        },
        {
            "number": 112,
            "question": "\u0423 \u043C\u0435\u043D\u044F \u043D\u0438\u0437\u043A\u043E\u0435 \u0430\u0440\u0442\u0435\u0440\u0438\u0430\u043B\u044C\u043D\u043E\u0435 \u0434\u0430\u0432\u043B\u0435\u043D\u0438\u0435.",
            "type": "\u0413\u0410\u041C\u041A - \u0424\u0438\u0437\u0438\u043E\u043B\u043E\u0433\u0438\u044F"
        },
        {
            "number": 113,
            "question": "\u0412 \u043C\u043E\u0435\u0439 \u0441\u0435\u043C\u044C\u0435 \u043D\u0435 \u0431\u044B\u043B\u043E \u0438\u043D\u0441\u0443\u043B\u044C\u0442\u043E\u0432.",
            "type": "\u0413\u0410\u041C\u041A - \u0424\u0438\u0437\u0438\u043E\u043B\u043E\u0433\u0438\u044F"
        },
        {
            "number": 114,
            "question": "\u041A\u043E\u0433\u0434\u0430 \u0434\u0435\u043B\u043E \u0434\u043E\u0445\u043E\u0434\u0438\u0442 \u0434\u043E \u0441\u0435\u043A\u0441\u0430, \u044F \u043D\u0435 \u043B\u044E\u0431\u0438\u0442\u0435\u043B\u044C \u044D\u043A\u0441\u043F\u0435\u0440\u0438\u043C\u0435\u043D\u0442\u043E\u0432.",
            "type": "\u0413\u0410\u041C\u041A - \u0424\u0438\u0437\u0438\u043E\u043B\u043E\u0433\u0438\u044F"
        },
        {
            "number": 115,
            "question": "\u041C\u044B\u0448\u0435\u0447\u043D\u043E\u0435 \u043D\u0430\u043F\u0440\u044F\u0436\u0435\u043D\u0438\u0435 \u0434\u043B\u044F \u043C\u0435\u043D\u044F \u0440\u0435\u0434\u043A\u043E\u0441\u0442\u044C.",
            "type": "\u0413\u0410\u041C\u041A - \u0424\u0438\u0437\u0438\u043E\u043B\u043E\u0433\u0438\u044F"
        },
        {
            "number": 116,
            "question": "\u041A\u043E\u0444\u0435\u0438\u043D \u043D\u0435 \u0441\u0438\u043B\u044C\u043D\u043E \u043D\u0430 \u043C\u0435\u043D\u044F \u0432\u043B\u0438\u044F\u0435\u0442.",
            "type": "\u0413\u0410\u041C\u041A - \u0424\u0438\u0437\u0438\u043E\u043B\u043E\u0433\u0438\u044F"
        },
        {
            "number": 117,
            "question": "\u042F \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u044E \u043F\u0438\u0449\u0443 \u0431\u0435\u0437 \u0441\u043F\u0435\u0448\u043A\u0438.",
            "type": "\u0413\u0410\u041C\u041A - \u0424\u0438\u0437\u0438\u043E\u043B\u043E\u0433\u0438\u044F"
        },
        {
            "number": 118,
            "question": "\u042F \u0445\u043E\u0440\u043E\u0448\u043E \u0441\u043F\u043B\u044E.",
            "type": "\u0413\u0410\u041C\u041A - \u0424\u0438\u0437\u0438\u043E\u043B\u043E\u0433\u0438\u044F"
        },
        {
            "number": 119,
            "question": "\u0423 \u043C\u0435\u043D\u044F \u043D\u0435\u0442 \u043F\u0440\u0438\u0441\u0442\u0440\u0430\u0441\u0442\u0438\u044F \u043A \u0432\u0440\u0435\u0434\u043D\u044B\u043C \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0430\u043C, \u0442\u0430\u043A\u0438\u043C \u043A\u0430\u043A \u0441\u0430\u0445\u0430\u0440.",
            "type": "\u0413\u0410\u041C\u041A - \u0424\u0438\u0437\u0438\u043E\u043B\u043E\u0433\u0438\u044F"
        },
        {
            "number": 120,
            "question": "\u0424\u0438\u0437\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0443\u043F\u0440\u0430\u0436\u043D\u0435\u043D\u0438\u044F \u0434\u043B\u044F \u043C\u0435\u043D\u044F \u2013 \u044D\u0442\u043E \u0435\u0436\u0435\u0434\u043D\u0435\u0432\u043D\u0430\u044F \u043F\u0440\u0438\u0432\u044B\u0447\u043A\u0430.",
            "type": "\u0413\u0410\u041C\u041A - \u0424\u0438\u0437\u0438\u043E\u043B\u043E\u0433\u0438\u044F"
        },
        {
            "number": 121,
            "question": "\u042F \u043D\u0435 \u0430\u0432\u0430\u043D\u0442\u044E\u0440\u0438\u0441\u0442.",
            "type": "\u0413\u0410\u041C\u041A - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 122,
            "question": "\u042F \u043D\u0435 \u0432\u0441\u043F\u044B\u043B\u044C\u0447\u0438\u0432\u044B\u0439.",
            "type": "\u0413\u0410\u041C\u041A - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 123,
            "question": "\u042F \u043E\u0447\u0435\u043D\u044C \u0442\u0435\u0440\u043F\u0435\u043B\u0438\u0432\u044B\u0439.",
            "type": "\u0413\u0410\u041C\u041A - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 124,
            "question": "\u042F \u043D\u0435 \u0443\u0432\u043B\u0435\u043A\u0430\u044E\u0441\u044C \u0444\u0438\u043B\u043E\u0441\u043E\u0444\u0438\u0435\u0439.",
            "type": "\u0413\u0410\u041C\u041A - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 125,
            "question": "\u042F \u043B\u044E\u0431\u043B\u044E \u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u043A\u0438\u043D\u043E \u0438 \u0441\u0435\u0440\u0438\u0430\u043B\u044B \u043F\u0440\u043E \u0441\u0435\u043C\u0435\u0439\u043D\u044B\u0435 \u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u044F.",
            "type": "\u0413\u0410\u041C\u041A - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 126,
            "question": "\u042F \u043D\u0435 \u043B\u044E\u0431\u043B\u044E \u0444\u0438\u043B\u044C\u043C\u044B \u043E \u0434\u0440\u0443\u0433\u0438\u0445 \u043C\u0438\u0440\u0430\u0445 \u0438\u043B\u0438 \u0432\u0441\u0435\u043B\u0435\u043D\u043D\u044B\u0445.",
            "type": "\u0413\u0410\u041C\u041A - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 127,
            "question": "\u042F \u043D\u0435 \u0440\u0438\u0441\u043A\u043E\u0432\u044B\u0439 \u0447\u0435\u043B\u043E\u0432\u0435\u043A.",
            "type": "\u0413\u0410\u041C\u041A - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 128,
            "question": "\u042F \u0443\u0447\u0438\u0442\u044B\u0432\u0430\u044E \u043F\u0440\u043E\u0448\u043B\u044B\u0439 \u043E\u043F\u044B\u0442, \u043F\u0440\u0435\u0436\u0434\u0435 \u0447\u0435\u043C \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0442\u044C \u0440\u0435\u0448\u0435\u043D\u0438\u044F.",
            "type": "\u0413\u0410\u041C\u041A - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 129,
            "question": "\u042F \u2013 \u0440\u0435\u0430\u043B\u0438\u0441\u0442.",
            "type": "\u0413\u0410\u041C\u041A - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 130,
            "question": "\u042F \u0441\u0447\u0438\u0442\u0430\u044E, \u0447\u0442\u043E \u0432\u0441\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B \u043C\u043E\u0433\u0443\u0442 \u0431\u044B\u0442\u044C \u0437\u0430\u043A\u0440\u044B\u0442\u044B.",
            "type": "\u0413\u0410\u041C\u041A - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 131,
            "question": "\u041C\u043D\u0435 \u043D\u0440\u0430\u0432\u0438\u0442\u0441\u044F \u0440\u0430\u0437\u0431\u0438\u0440\u0430\u0442\u044C\u0441\u044F \u0432 \u0444\u0430\u043A\u0442\u0430\u0445 \u0438 \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u043E\u0441\u0442\u044F\u0445.",
            "type": "\u0413\u0410\u041C\u041A - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 132,
            "question": "\u0415\u0441\u043B\u0438 \u044F \u0447\u0442\u043E-\u0442\u043E \u0440\u0435\u0448\u0438\u043B, \u0442\u043E \u044D\u0442\u043E \u043E\u043A\u043E\u043D\u0447\u0430\u0442\u0435\u043B\u044C\u043D\u043E.",
            "type": "\u0413\u0410\u041C\u041A - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 133,
            "question": "\u041C\u043D\u0435 \u043D\u0440\u0430\u0432\u0438\u0442\u0441\u044F \u043F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u0432\u043E\u0439 \u0434\u0435\u043D\u044C, \u043D\u0435\u0434\u0435\u043B\u044E, \u043C\u0435\u0441\u044F\u0446 \u0438 \u0442. \u0434.",
            "type": "\u0413\u0410\u041C\u041A - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 134,
            "question": "\u041C\u043D\u0435 \u043D\u0440\u0430\u0432\u0438\u0442\u0441\u044F \u043A\u043E\u043B\u043B\u0435\u043A\u0446\u0438\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u0442\u044C.",
            "type": "\u0413\u0410\u041C\u041A - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 135,
            "question": "\u041C\u043D\u0435 \u043E\u0431\u044B\u0447\u043D\u043E \u043D\u0435\u043C\u043D\u043E\u0433\u043E \u0433\u0440\u0443\u0441\u0442\u043D\u043E.",
            "type": "\u0413\u0410\u041C\u041A - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 136,
            "question": "\u042F \u0431\u043E\u044E\u0441\u044C \u043A\u043E\u043D\u0444\u043B\u0438\u043A\u0442\u043E\u0432 \u0438 \u0441\u0441\u043E\u0440.",
            "type": "\u0413\u0410\u041C\u041A - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 137,
            "question": "\u042F \u043A\u043E\u043F\u043B\u044E \u0434\u0435\u043D\u044C\u0433\u0438 \u043D\u0430 \u0441\u043B\u0443\u0447\u0430\u0439 \u043A\u0440\u0438\u0437\u0438\u0441\u0430.",
            "type": "\u0413\u0410\u041C\u041A - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 138,
            "question": "\u042F \u043E\u0431\u044B\u0447\u043D\u043E \u0441\u043E\u0437\u0434\u0430\u044E \u043F\u0440\u043E\u0447\u043D\u044B\u0435, \u0434\u043B\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0441\u0432\u044F\u0437\u0438 \u0441 \u0434\u0440\u0443\u0433\u0438\u043C\u0438 \u043B\u044E\u0434\u044C\u043C\u0438.",
            "type": "\u0413\u0410\u041C\u041A - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 139,
            "question": "\u0412 \u0436\u0438\u0437\u043D\u0438 \u0434\u0440\u0443\u0433\u0438\u0445 \u043B\u044E\u0434\u0435\u0439 \u044F \u2013 \u0441\u0442\u0430\u0431\u0438\u043B\u044C\u043D\u0430\u044F \u043E\u043F\u043E\u0440\u0430.",
            "type": "\u0413\u0410\u041C\u041A - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 140,
            "question": "\u042F \u0432\u0435\u0440\u044E \u0432 \u043F\u043E\u0433\u043E\u0432\u043E\u0440\u043A\u0443: \xab\u041A\u0442\u043E \u0440\u0430\u043D\u043E \u0432\u0441\u0442\u0430\u0451\u0442, \u0442\u043E\u043C\u0443 \u0411\u043E\u0433 \u043F\u043E\u0434\u0430\u0451\u0442\xbb.",
            "type": "\u0413\u0410\u041C\u041A - \u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440"
        },
        {
            "number": 141,
            "question": "\u042F \u0443\u0432\u0435\u0440\u0435\u043D, \u0447\u0442\u043E \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044B\u0435 \u0441\u0440\u043E\u043A\u0438 \u0434\u043E\u043B\u0436\u043D\u044B \u0441\u043E\u0431\u043B\u044E\u0434\u0430\u0442\u044C\u0441\u044F.",
            "type": "\u0413\u0410\u041C\u041A - \u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440"
        },
        {
            "number": 142,
            "question": "\u042F \u0441\u0442\u0430\u0440\u0430\u044E\u0441\u044C \u0443\u0433\u043E\u0434\u0438\u0442\u044C \u0434\u0440\u0443\u0433\u0438\u043C, \u043D\u0430\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u043C\u043E\u0433\u0443.",
            "type": "\u0413\u0410\u041C\u041A - \u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440"
        },
        {
            "number": 143,
            "question": "\u042F \u043F\u0435\u0440\u0444\u0435\u043A\u0446\u0438\u043E\u043D\u0438\u0441\u0442.",
            "type": "\u0413\u0410\u041C\u041A - \u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440"
        },
        {
            "number": 144,
            "question": "\u042F \u0443\u043C\u0435\u044E \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0442\u044C \u0434\u043E\u043B\u0433\u043E\u0441\u0440\u043E\u0447\u043D\u044B\u0435 \u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u044F.",
            "type": "\u0413\u0410\u041C\u041A - \u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440"
        },
        {
            "number": 145,
            "question": "\u042F \u0432\u043D\u0438\u043C\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u043E\u0442\u043D\u043E\u0448\u0443\u0441\u044C \u043A \u0442\u043E\u043C\u0443, \u043A\u0443\u0434\u0430 \u0443\u0445\u043E\u0434\u044F\u0442 \u043C\u043E\u0438 \u0434\u0435\u043D\u044C\u0433\u0438.",
            "type": "\u0413\u0410\u041C\u041A - \u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440"
        },
        {
            "number": 146,
            "question": "\u042F \u0441\u0447\u0438\u0442\u0430\u044E, \u0447\u0442\u043E \u0432 \u043C\u0438\u0440\u0435 \u0431\u044B\u043B\u043E \u0431\u044B \u043C\u0435\u043D\u044C\u0448\u0435 \u0432\u0440\u0430\u0436\u0434\u044B, \u0435\u0441\u043B\u0438 \u0431\u044B \u043B\u044E\u0434\u0438 \u043F\u043E\u0432\u044B\u0448\u0430\u043B\u0438 \u0441\u0432\u043E\u0439 \u043D\u0440\u0430\u0432\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C.",
            "type": "\u0413\u0410\u041C\u041A - \u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440"
        },
        {
            "number": 147,
            "question": "\u042F \u043E\u0447\u0435\u043D\u044C \u0432\u0435\u0440\u0435\u043D \u0438 \u043F\u0440\u0435\u0434\u0430\u043D \u0441\u0432\u043E\u0438\u043C \u0431\u043B\u0438\u0437\u043A\u0438\u043C.",
            "type": "\u0413\u0410\u041C\u041A - \u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440"
        },
        {
            "number": 148,
            "question": "\u042F \u0436\u0438\u0432\u0443 \u0432 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441\u043E \u0441\u0432\u043E\u0438\u043C\u0438 \u0432\u044B\u0441\u043E\u043A\u0438\u043C\u0438 \u044D\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u043C\u0438 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u0430\u043C\u0438.",
            "type": "\u0413\u0410\u041C\u041A - \u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440"
        },
        {
            "number": 149,
            "question": "\u042F \u0443\u0434\u0435\u043B\u044F\u044E \u043F\u0440\u0438\u0441\u0442\u0430\u043B\u044C\u043D\u043E\u0435 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435 \u0437\u0430\u043A\u043E\u043D\u0430\u043C, \u043F\u0440\u0430\u0432\u0438\u043B\u0430\u043C \u0438 \u043F\u043E\u043B\u0438\u0442\u0438\u043A\u0435.",
            "type": "\u0413\u0410\u041C\u041A - \u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440"
        },
        {
            "number": 150,
            "question": "\u042F \u0432\u0435\u0440\u044E \u0432 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E\u0441\u0442\u044C \u0441\u043B\u0443\u0436\u0438\u0442\u044C \u043E\u0431\u0449\u0435\u0441\u0442\u0432\u0443.",
            "type": "\u0413\u0410\u041C\u041A - \u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440"
        },
        {
            "number": 151,
            "question": "\u042F \u043B\u0435\u0433\u043A\u043E \u043C\u043E\u0433\u0443 \u0441\u043E\u0441\u0440\u0435\u0434\u043E\u0442\u043E\u0447\u0438\u0442\u044C\u0441\u044F \u043D\u0430 \u0440\u0443\u0447\u043D\u043E\u043C \u0442\u0440\u0443\u0434\u0435.",
            "type": "\u0421\u0435\u0440\u043E\u0442\u043E\u043D\u0438\u043D - \u043F\u0430\u043C\u044F\u0442\u044C \u0438 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435"
        },
        {
            "number": 152,
            "question": "\u0423 \u043C\u0435\u043D\u044F \u0445\u043E\u0440\u043E\u0448\u0430\u044F \u0432\u0438\u0437\u0443\u0430\u043B\u044C\u043D\u0430\u044F \u043F\u0430\u043C\u044F\u0442\u044C.",
            "type": "\u0421\u0435\u0440\u043E\u0442\u043E\u043D\u0438\u043D - \u043F\u0430\u043C\u044F\u0442\u044C \u0438 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435"
        },
        {
            "number": 153,
            "question": "\u042F \u043E\u0447\u0435\u043D\u044C \u043F\u0440\u043E\u043D\u0438\u0446\u0430\u0442\u0435\u043B\u0435\u043D.",
            "type": "\u0421\u0435\u0440\u043E\u0442\u043E\u043D\u0438\u043D - \u043F\u0430\u043C\u044F\u0442\u044C \u0438 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435"
        },
        {
            "number": 154,
            "question": "\u042F \u043C\u044B\u0441\u043B\u044E \u0438\u043C\u043F\u0443\u043B\u044C\u0441\u0438\u0432\u043D\u043E.",
            "type": "\u0421\u0435\u0440\u043E\u0442\u043E\u043D\u0438\u043D - \u043F\u0430\u043C\u044F\u0442\u044C \u0438 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435"
        },
        {
            "number": 155,
            "question": "\u042F \u0436\u0438\u0432\u0443 \u0437\u0434\u0435\u0441\u044C \u0438 \u0441\u0435\u0439\u0447\u0430\u0441.",
            "type": "\u0421\u0435\u0440\u043E\u0442\u043E\u043D\u0438\u043D - \u043F\u0430\u043C\u044F\u0442\u044C \u0438 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435"
        },
        {
            "number": 156,
            "question": "\u041E\u0431\u044B\u0447\u043D\u043E \u043F\u0440\u043E\u0448\u0443: \xab\u0434\u0430\u0432\u0430\u0439\u0442\u0435 \u043A\u0440\u0430\u0442\u043A\u043E, \u0441\u0430\u043C\u0443\u044E \u0441\u0443\u0442\u044C\xbb.",
            "type": "\u0421\u0435\u0440\u043E\u0442\u043E\u043D\u0438\u043D - \u043F\u0430\u043C\u044F\u0442\u044C \u0438 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435"
        },
        {
            "number": 157,
            "question": "\u042F \u0442\u044F\u0436\u0435\u043B\u043E \u0443\u0441\u0432\u0430\u0438\u0432\u0430\u044E \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E \u0438\u0437 \u043A\u043D\u0438\u0433, \u043D\u043E \u043B\u0435\u0433\u043A\u043E \u0443\u0447\u0443\u0441\u044C \u043D\u0430 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u043C \u043E\u043F\u044B\u0442\u0435.",
            "type": "\u0421\u0435\u0440\u043E\u0442\u043E\u043D\u0438\u043D - \u043F\u0430\u043C\u044F\u0442\u044C \u0438 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435"
        },
        {
            "number": 158,
            "question": "\u0427\u0442\u043E\u0431\u044B \u0447\u0442\u043E-\u0442\u043E \u043F\u043E\u043D\u044F\u0442\u044C, \u043C\u043D\u0435 \u043D\u0443\u0436\u043D\u043E \u0441\u0430\u043C\u043E\u043C\u0443 \u044D\u0442\u043E \u0438\u0441\u043F\u044B\u0442\u0430\u0442\u044C \u0438\u043B\u0438 \u0438\u0441\u043F\u0440\u043E\u0431\u043E\u0432\u0430\u0442\u044C \u043D\u0430 \u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0435.",
            "type": "\u0421\u0435\u0440\u043E\u0442\u043E\u043D\u0438\u043D - \u043F\u0430\u043C\u044F\u0442\u044C \u0438 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435"
        },
        {
            "number": 159,
            "question": "\u042F \u0441\u043B\u0438\u0448\u043A\u043E\u043C \u043C\u043D\u043E\u0433\u043E \u0441\u043F\u043B\u044E.",
            "type": "\u0421\u0435\u0440\u043E\u0442\u043E\u043D\u0438\u043D - \u0424\u0438\u0437\u0438\u043E\u043B\u043E\u0433\u0438\u044F"
        },
        {
            "number": 160,
            "question": "\u041A\u043E\u0433\u0434\u0430 \u0434\u0435\u043B\u043E \u0434\u043E\u0445\u043E\u0434\u0438\u0442 \u0434\u043E \u0441\u0435\u043A\u0441\u0430, \u044F \u043B\u044E\u0431\u043B\u044E \u044D\u043A\u0441\u043F\u0435\u0440\u0438\u043C\u0435\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C.",
            "type": "\u0421\u0435\u0440\u043E\u0442\u043E\u043D\u0438\u043D - \u0424\u0438\u0437\u0438\u043E\u043B\u043E\u0433\u0438\u044F"
        },
        {
            "number": 161,
            "question": "\u0423 \u043C\u0435\u043D\u044F \u043D\u0438\u0437\u043A\u043E\u0435 \u0430\u0440\u0442\u0435\u0440\u0438\u0430\u043B\u044C\u043D\u043E\u0435 \u0434\u0430\u0432\u043B\u0435\u043D\u0438\u0435.",
            "type": "\u0421\u0435\u0440\u043E\u0442\u043E\u043D\u0438\u043D - \u0424\u0438\u0437\u0438\u043E\u043B\u043E\u0433\u0438\u044F"
        },
        {
            "number": 162,
            "question": "\u042F \u043E\u0440\u0438\u0435\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u043D \u043D\u0430 \u043A\u043E\u043D\u043A\u0440\u0435\u0442\u043D\u044B\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F.",
            "type": "\u0421\u0435\u0440\u043E\u0442\u043E\u043D\u0438\u043D - \u0424\u0438\u0437\u0438\u043E\u043B\u043E\u0433\u0438\u044F"
        },
        {
            "number": 163,
            "question": "\u042F \u0443\u043C\u0435\u043B\u044B\u0439 \u0445\u043E\u0437\u044F\u0438\u043D \u0432 \u0434\u043E\u043C\u0435.",
            "type": "\u0421\u0435\u0440\u043E\u0442\u043E\u043D\u0438\u043D - \u0424\u0438\u0437\u0438\u043E\u043B\u043E\u0433\u0438\u044F"
        },
        {
            "number": 164,
            "question": "\u042F \u043B\u044E\u0431\u043B\u044E \u0430\u043A\u0442\u0438\u0432\u043D\u043E \u043F\u0440\u043E\u0432\u043E\u0434\u0438\u0442\u044C \u0432\u0440\u0435\u043C\u044F \u043D\u0430 \u0441\u0432\u0435\u0436\u0435\u043C \u0432\u043E\u0437\u0434\u0443\u0445\u0435.",
            "type": "\u0421\u0435\u0440\u043E\u0442\u043E\u043D\u0438\u043D - \u0424\u0438\u0437\u0438\u043E\u043B\u043E\u0433\u0438\u044F"
        },
        {
            "number": 165,
            "question": "\u042F \u043F\u043E\u043B\u0443\u0447\u0430\u044E \u0443\u0434\u043E\u0432\u043E\u043B\u044C\u0441\u0442\u0432\u0438\u0435 \u043E\u0442 \u043E\u043F\u0430\u0441\u043D\u044B\u0445 \u0443\u0432\u043B\u0435\u0447\u0435\u043D\u0438\u0439, \u0442\u0430\u043A\u0438\u0445 \u043A\u0430\u043A \u043F\u0440\u044B\u0436\u043A\u0438 \u0441 \u043F\u0430\u0440\u0430\u0448\u044E\u0442\u043E\u043C \u0438\u043B\u0438 \u0435\u0437\u0434\u0430 \u043D\u0430 \u043C\u043E\u0442\u043E\u0446\u0438\u043A\u043B\u0435.",
            "type": "\u0421\u0435\u0440\u043E\u0442\u043E\u043D\u0438\u043D - \u0424\u0438\u0437\u0438\u043E\u043B\u043E\u0433\u0438\u044F"
        },
        {
            "number": 166,
            "question": "\u042F \u0443\u043C\u0435\u044E \u0440\u0435\u0448\u0430\u0442\u044C \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u044B \u0441\u043F\u043E\u043D\u0442\u0430\u043D\u043D\u043E.",
            "type": "\u0421\u0435\u0440\u043E\u0442\u043E\u043D\u0438\u043D - \u0424\u0438\u0437\u0438\u043E\u043B\u043E\u0433\u0438\u044F"
        },
        {
            "number": 167,
            "question": "\u041C\u0435\u043D\u044F \u0440\u0435\u0434\u043A\u043E \u0442\u044F\u043D\u0435\u0442 \u043D\u0430 \u0441\u043B\u0430\u0434\u043A\u043E\u0435.",
            "type": "\u0421\u0435\u0440\u043E\u0442\u043E\u043D\u0438\u043D - \u0424\u0438\u0437\u0438\u043E\u043B\u043E\u0433\u0438\u044F"
        },
        {
            "number": 168,
            "question": "\u042F \u043E\u0431\u044B\u0447\u043D\u043E \u043F\u0435\u0440\u0435\u043A\u0443\u0441\u044B\u0432\u0430\u044E \u043D\u0430 \u0431\u0435\u0433\u0443.",
            "type": "\u0421\u0435\u0440\u043E\u0442\u043E\u043D\u0438\u043D - \u0424\u0438\u0437\u0438\u043E\u043B\u043E\u0433\u0438\u044F"
        },
        {
            "number": 169,
            "question": "\u042F \u043E\u0431\u044B\u0447\u043D\u043E \u043D\u0435 \u043F\u0440\u0438\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044E\u0441\u044C \u0433\u0440\u0430\u0444\u0438\u043A\u0430 \u0432 \u0442\u0440\u0435\u043D\u0438\u0440\u043E\u0432\u043A\u0430\u0445; \u043C\u043E\u0433\u0443 \u0442\u0440\u0438 \u043D\u0435\u0434\u0435\u043B\u0438 \u0437\u0430\u043D\u0438\u043C\u0430\u0442\u044C\u0441\u044F \u043A\u0430\u0436\u0434\u044B\u0439 \u0434\u0435\u043D\u044C, \u0430 \u043F\u043E\u0442\u043E\u043C \u043F\u0440\u0435\u0440\u0432\u0430\u0442\u044C\u0441\u044F \u043D\u0430 \u043C\u0435\u0441\u044F\u0446.",
            "type": "\u0421\u0435\u0440\u043E\u0442\u043E\u043D\u0438\u043D - \u0424\u0438\u0437\u0438\u043E\u043B\u043E\u0433\u0438\u044F"
        },
        {
            "number": 170,
            "question": "\u042F \u0436\u0438\u0432\u0443 \u0437\u0434\u0435\u0441\u044C \u0438 \u0441\u0435\u0439\u0447\u0430\u0441.",
            "type": "\u0421\u0435\u0440\u043E\u0442\u043E\u043D\u0438\u043D - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 171,
            "question": "\u041C\u043D\u0435 \u043D\u0440\u0430\u0432\u0438\u0442\u0441\u044F \u0432\u044B\u0441\u0442\u0443\u043F\u0430\u0442\u044C/\u0440\u0430\u0437\u0432\u043B\u0435\u043A\u0430\u0442\u044C \u043F\u0443\u0431\u043B\u0438\u043A\u0443.",
            "type": "\u0421\u0435\u0440\u043E\u0442\u043E\u043D\u0438\u043D - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 172,
            "question": "\u042F \u0441\u043E\u0431\u0438\u0440\u0430\u044E \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E \u0431\u0435\u0441\u043F\u043E\u0440\u044F\u0434\u043E\u0447\u043D\u044B\u043C \u043E\u0431\u0440\u0430\u0437\u043E\u043C.",
            "type": "\u0421\u0435\u0440\u043E\u0442\u043E\u043D\u0438\u043D - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 173,
            "question": "\u042F \u043E\u0447\u0435\u043D\u044C \u0433\u0438\u0431\u043A\u0438\u0439, \u0438\u0437\u0432\u043E\u0440\u043E\u0442\u043B\u0438\u0432\u044B\u0439.",
            "type": "\u0421\u0435\u0440\u043E\u0442\u043E\u043D\u0438\u043D - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 174,
            "question": "\u042F \u043F\u0440\u0435\u043A\u0440\u0430\u0441\u043D\u043E \u0432\u0435\u0434\u0443 \u043F\u0435\u0440\u0435\u0433\u043E\u0432\u043E\u0440\u044B.",
            "type": "\u0421\u0435\u0440\u043E\u0442\u043E\u043D\u0438\u043D - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 175,
            "question": "\u0427\u0430\u0441\u0442\u043E \u044F \u043F\u0440\u043E\u0441\u0442\u043E \u0445\u043E\u0447\u0443 \xab\u0435\u0441\u0442\u044C, \u043F\u0438\u0442\u044C \u0438 \u0432\u0435\u0441\u0435\u043B\u0438\u0442\u044C\u0441\u044F\xbb.",
            "type": "\u0421\u0435\u0440\u043E\u0442\u043E\u043D\u0438\u043D - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 176,
            "question": "\u042F \u0441\u043A\u043B\u043E\u043D\u0435\u043D \u0434\u0440\u0430\u043C\u0430\u0442\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u0442\u044C.",
            "type": "\u0421\u0435\u0440\u043E\u0442\u043E\u043D\u0438\u043D - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 177,
            "question": "\u042F \u043E\u0447\u0435\u043D\u044C \u0442\u0432\u043E\u0440\u0447\u0435\u0441\u043A\u0438\u0439 \u0447\u0435\u043B\u043E\u0432\u0435\u043A.",
            "type": "\u0421\u0435\u0440\u043E\u0442\u043E\u043D\u0438\u043D - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 178,
            "question": "\u042F \u043C\u0430\u0441\u0442\u0435\u0440 \u043D\u0430 \u0432\u0441\u0435 \u0440\u0443\u043A\u0438.",
            "type": "\u0421\u0435\u0440\u043E\u0442\u043E\u043D\u0438\u043D - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 179,
            "question": "\u042F \u0438\u0434\u0443 \u043D\u0430 \u0440\u0438\u0441\u043A, \u043A\u043E\u0433\u0434\u0430 \u0434\u0435\u043B\u043E \u043A\u0430\u0441\u0430\u0435\u0442\u0441\u044F \u0441\u043F\u043E\u0440\u0442\u0430.",
            "type": "\u0421\u0435\u0440\u043E\u0442\u043E\u043D\u0438\u043D - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 180,
            "question": "\u042F \u0432\u0435\u0440\u044E \u0432 \u044D\u043A\u0441\u0442\u0440\u0430\u0441\u0435\u043D\u0441\u043E\u0432.",
            "type": "\u0421\u0435\u0440\u043E\u0442\u043E\u043D\u0438\u043D - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 181,
            "question": "\u042F \u043B\u0435\u0433\u043A\u043E \u043C\u043E\u0433\u0443 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0434\u0440\u0443\u0433\u0438\u0445 \u043B\u044E\u0434\u0435\u0439.",
            "type": "\u0421\u0435\u0440\u043E\u0442\u043E\u043D\u0438\u043D - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 182,
            "question": "\u042F \u0446\u0438\u043D\u0438\u0447\u043D\u043E \u043E\u0442\u043D\u043E\u0448\u0443\u0441\u044C \u043A \u0447\u0443\u0436\u043E\u0439 \u0444\u0438\u043B\u043E\u0441\u043E\u0444\u0438\u0438.",
            "type": "\u0421\u0435\u0440\u043E\u0442\u043E\u043D\u0438\u043D - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 183,
            "question": "\u041C\u043D\u0435 \u043D\u0440\u0430\u0432\u0438\u0442\u0441\u044F \u0440\u0430\u0437\u0432\u043B\u0435\u043A\u0430\u0442\u044C\u0441\u044F.",
            "type": "\u0421\u0435\u0440\u043E\u0442\u043E\u043D\u0438\u043D - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 184,
            "question": "\u0418\u0437 \u0444\u0438\u043B\u044C\u043C\u043E\u0432 \u043C\u043D\u0435 \u0431\u043E\u043B\u044C\u0448\u0435 \u0432\u0441\u0435\u0433\u043E \u043D\u0440\u0430\u0432\u044F\u0442\u0441\u044F \u0443\u0436\u0430\u0441\u0442\u0438\u043A\u0438.",
            "type": "\u0421\u0435\u0440\u043E\u0442\u043E\u043D\u0438\u043D - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 185,
            "question": "\u041C\u0435\u043D\u044F \u0437\u0430\u0432\u043E\u0440\u0430\u0436\u0438\u0432\u0430\u0435\u0442 \u043E\u0440\u0443\u0436\u0438\u0435.",
            "type": "\u0421\u0435\u0440\u043E\u0442\u043E\u043D\u0438\u043D - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 186,
            "question": "\u042F \u0440\u0435\u0434\u043A\u043E \u043F\u0440\u0438\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044E\u0441\u044C \u043F\u043B\u0430\u043D\u0430 \u0438\u043B\u0438 \u0440\u0430\u0441\u043F\u0438\u0441\u0430\u043D\u0438\u044F.",
            "type": "\u0421\u0435\u0440\u043E\u0442\u043E\u043D\u0438\u043D - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 187,
            "question": "\u041C\u043D\u0435 \u0442\u0440\u0443\u0434\u043D\u043E \u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0432\u0435\u0440\u043D\u043E\u0441\u0442\u044C.",
            "type": "\u0421\u0435\u0440\u043E\u0442\u043E\u043D\u0438\u043D - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 188,
            "question": "\u041A\u043E\u0433\u0434\u0430 \u0431\u043B\u0438\u0437\u043A\u0438\u0435 \u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u044F \u0437\u0430\u043A\u0430\u043D\u0447\u0438\u0432\u0430\u044E\u0442\u0441\u044F, \u044F \u043B\u0435\u0433\u043A\u043E \u0438\u0445 \u043E\u0442\u043F\u0443\u0441\u043A\u0430\u044E \u0438 \u0436\u0438\u0432\u0443 \u0434\u0430\u043B\u044C\u0448\u0435.",
            "type": "\u0421\u0435\u0440\u043E\u0442\u043E\u043D\u0438\u043D - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 189,
            "question": "\u042F \u043D\u0435 \u043E\u0441\u043E\u0431\u043E \u0437\u0430\u0434\u0443\u043C\u044B\u0432\u0430\u044E\u0441\u044C, \u043A\u0430\u043A \u0442\u0440\u0430\u0442\u0438\u0442\u044C \u0441\u0432\u043E\u0438 \u0434\u0435\u043D\u044C\u0433\u0438.",
            "type": "\u0421\u0435\u0440\u043E\u0442\u043E\u043D\u0438\u043D - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 190,
            "question": "\u0423 \u043C\u0435\u043D\u044F \u043C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u043E \u043D\u0435\u0441\u0435\u0440\u044C\u0435\u0437\u043D\u044B\u0445 \u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u0439.",
            "type": "\u0421\u0435\u0440\u043E\u0442\u043E\u043D\u0438\u043D - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 191,
            "question": "\u042F \u043D\u0438\u043A\u043E\u0433\u0434\u0430 \u043D\u0435 \u0442\u043E\u0440\u043E\u043F\u043B\u044E\u0441\u044C \u0441 \u043E\u043A\u043E\u043D\u0447\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u043C \u0440\u0435\u0448\u0435\u043D\u0438\u0435\u043C \u2013 \u0432\u0434\u0440\u0443\u0433 \u043F\u043E\u0434\u0432\u0435\u0440\u043D\u0435\u0442\u0441\u044F \u0447\u0442\u043E-\u0442\u043E \u043B\u0443\u0447\u0448\u0435.",
            "type": "\u0421\u0435\u0440\u043E\u0442\u043E\u043D\u0438\u043D - \u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440"
        },
        {
            "number": 192,
            "question": "\u042F \u043D\u0435 \u043B\u044E\u0431\u043B\u044E \u0443\u043F\u043E\u0440\u043D\u043E \u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 \u0434\u043B\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u043F\u0435\u0440\u0438\u043E\u0434\u0430 \u0432\u0440\u0435\u043C\u0435\u043D\u0438.",
            "type": "\u0421\u0435\u0440\u043E\u0442\u043E\u043D\u0438\u043D - \u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440"
        },
        {
            "number": 193,
            "question": "\u042F \u0441\u0447\u0438\u0442\u0430\u044E, \u0447\u0442\u043E \u0443 \u0432\u0441\u0435\u0433\u043E \u0434\u043E\u043B\u0436\u043D\u0430 \u0431\u044B\u0442\u044C \u0446\u0435\u043B\u044C \u0438 \u043F\u0440\u0435\u0434\u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435.",
            "type": "\u0421\u0435\u0440\u043E\u0442\u043E\u043D\u0438\u043D - \u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440"
        },
        {
            "number": 194,
            "question": "\u042F \u043E\u043F\u0442\u0438\u043C\u0438\u0441\u0442.",
            "type": "\u0421\u0435\u0440\u043E\u0442\u043E\u043D\u0438\u043D - \u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440"
        },
        {
            "number": 195,
            "question": "\u042F \u0436\u0438\u0432\u0443 \u0432 \u043C\u043E\u043C\u0435\u043D\u0442\u0435.",
            "type": "\u0421\u0435\u0440\u043E\u0442\u043E\u043D\u0438\u043D - \u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440"
        },
        {
            "number": 196,
            "question": "\u042F \u043C\u043E\u043B\u044E\u0441\u044C, \u0442\u043E\u043B\u044C\u043A\u043E \u043A\u043E\u0433\u0434\u0430 \u043D\u0443\u0436\u0434\u0430\u044E\u0441\u044C \u0432 \u0434\u0443\u0445\u043E\u0432\u043D\u043E\u0439 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0435.",
            "type": "\u0421\u0435\u0440\u043E\u0442\u043E\u043D\u0438\u043D - \u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440"
        },
        {
            "number": 197,
            "question": "\u0423 \u043C\u0435\u043D\u044F \u043D\u0435\u0442 \u043E\u0441\u043E\u0431\u043E \u0432\u044B\u0441\u043E\u043A\u0438\u0445 \u043C\u043E\u0440\u0430\u043B\u044C\u043D\u044B\u0445 \u0438 \u044D\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0446\u0435\u043D\u043D\u043E\u0441\u0442\u0435\u0439.",
            "type": "\u0421\u0435\u0440\u043E\u0442\u043E\u043D\u0438\u043D - \u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440"
        },
        {
            "number": 198,
            "question": "\u042F \u0434\u0435\u043B\u0430\u044E \u0447\u0442\u043E \u0445\u043E\u0447\u0443 \u0438 \u043A\u043E\u0433\u0434\u0430 \u0445\u043E\u0447\u0443.",
            "type": "\u0421\u0435\u0440\u043E\u0442\u043E\u043D\u0438\u043D - \u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440"
        },
        {
            "number": 199,
            "question": "\u042F \u043D\u0435 \u0431\u0435\u0441\u043F\u043E\u043A\u043E\u044E\u0441\u044C \u043E \u0442\u043E\u043C, \u0447\u0442\u043E\u0431\u044B \u0431\u044B\u0442\u044C \u0438\u0434\u0435\u0430\u043B\u044C\u043D\u044B\u043C; \u044F \u043F\u0440\u043E\u0441\u0442\u043E \u0436\u0438\u0432\u0443 \u0441\u0432\u043E\u0435\u0439 \u0436\u0438\u0437\u043D\u044C\u044E.",
            "type": "\u0421\u0435\u0440\u043E\u0442\u043E\u043D\u0438\u043D - \u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440"
        },
        {
            "number": 200,
            "question": "\u042D\u043A\u043E\u043D\u043E\u043C\u0438\u044F \u0434\u043B\u044F \u043B\u043E\u0445\u043E\u0432.",
            "type": "\u0421\u0435\u0440\u043E\u0442\u043E\u043D\u0438\u043D - \u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440"
        }
    ],
    "blockTwo": [
        {
            "number": 1,
            "question": "\u0423 \u043C\u0435\u043D\u044F \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u044B \u0441 \u0444\u043E\u043A\u0443\u0441\u0438\u0440\u043E\u0432\u043A\u043E\u0439 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u044F \u0438 \u043A\u043E\u043D\u0446\u0435\u043D\u0442\u0440\u0430\u0446\u0438\u0435\u0439 \u043D\u0430 \u0437\u0430\u0434\u0430\u0447\u0435.",
            "type": "\u0414\u043E\u0444\u0430\u043C\u0438\u043D - \u043F\u0430\u043C\u044F\u0442\u044C \u0438 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435"
        },
        {
            "number": 2,
            "question": "\u041C\u043D\u0435 \u043D\u0443\u0436\u0435\u043D \u043A\u043E\u0444\u0435\u0438\u043D, \u0447\u0442\u043E\u0431\u044B \u043F\u0440\u043E\u0441\u043D\u0443\u0442\u044C\u0441\u044F.",
            "type": "\u0414\u043E\u0444\u0430\u043C\u0438\u043D - \u043F\u0430\u043C\u044F\u0442\u044C \u0438 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435"
        },
        {
            "number": 3,
            "question": "\u042F \u0434\u0443\u043C\u0430\u044E \u043D\u0435\u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u043E \u0431\u044B\u0441\u0442\u0440\u043E.",
            "type": "\u0414\u043E\u0444\u0430\u043C\u0438\u043D - \u043F\u0430\u043C\u044F\u0442\u044C \u0438 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435"
        },
        {
            "number": 4,
            "question": "\u0423 \u043C\u0435\u043D\u044F \u0442\u0440\u0443\u0434\u043D\u043E\u0441\u0442\u0438 \u0441\u043E \u0441\u043F\u043E\u0441\u043E\u0431\u043D\u043E\u0441\u0442\u044C\u044E \u0443\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0442\u044C \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435.",
            "type": "\u0414\u043E\u0444\u0430\u043C\u0438\u043D - \u043F\u0430\u043C\u044F\u0442\u044C \u0438 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435"
        },
        {
            "number": 5,
            "question": "\u041C\u043D\u0435 \u0442\u0440\u0443\u0434\u043D\u043E \u0441\u043F\u0440\u0430\u0432\u0438\u0442\u044C\u0441\u044F \u0441 \u0437\u0430\u0434\u0430\u043D\u0438\u0435\u043C, \u0434\u0430\u0436\u0435 \u0435\u0441\u043B\u0438 \u043E\u043D\u043E \u043C\u043D\u0435 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u043E.",
            "type": "\u0414\u043E\u0444\u0430\u043C\u0438\u043D - \u043F\u0430\u043C\u044F\u0442\u044C \u0438 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435"
        },
        {
            "number": 6,
            "question": "\u042F \u043C\u0435\u0434\u043B\u0435\u043D\u043D\u043E \u0443\u0441\u0432\u0430\u0438\u0432\u0430\u044E \u043D\u043E\u0432\u044B\u0435 \u0438\u0434\u0435\u0438.",
            "type": "\u0414\u043E\u0444\u0430\u043C\u0438\u043D - \u0424\u0438\u0437\u0438\u043E\u043B\u043E\u0433\u0438\u044F"
        },
        {
            "number": 7,
            "question": "\u041C\u0435\u043D\u044F \u0442\u044F\u043D\u0435\u0442 \u043D\u0430 \u0441\u043B\u0430\u0434\u043A\u043E\u0435.",
            "type": "\u0414\u043E\u0444\u0430\u043C\u0438\u043D - \u0424\u0438\u0437\u0438\u043E\u043B\u043E\u0433\u0438\u044F"
        },
        {
            "number": 8,
            "question": "\u0423 \u043C\u0435\u043D\u044F \u043F\u043E\u043D\u0438\u0436\u0435\u043D\u043D\u043E\u0435 \u043B\u0438\u0431\u0438\u0434\u043E.",
            "type": "\u0414\u043E\u0444\u0430\u043C\u0438\u043D - \u0424\u0438\u0437\u0438\u043E\u043B\u043E\u0433\u0438\u044F"
        },
        {
            "number": 9,
            "question": "\u042F \u0441\u043B\u0438\u0448\u043A\u043E\u043C \u043C\u043D\u043E\u0433\u043E \u0441\u043F\u043B\u044E.",
            "type": "\u0414\u043E\u0444\u0430\u043C\u0438\u043D - \u0424\u0438\u0437\u0438\u043E\u043B\u043E\u0433\u0438\u044F"
        },
        {
            "number": 10,
            "question": "\u0423 \u043C\u0435\u043D\u044F \u0431\u044B\u043B\u0438 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u044B \u0441 \u0430\u043B\u043A\u043E\u0433\u043E\u043B\u0435\u043C \u0438\u043B\u0438 \u0434\u0440\u0443\u0433\u0438\u043C\u0438 \u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E\u0441\u0442\u044F\u043C\u0438.",
            "type": "\u0414\u043E\u0444\u0430\u043C\u0438\u043D - \u0424\u0438\u0437\u0438\u043E\u043B\u043E\u0433\u0438\u044F"
        },
        {
            "number": 11,
            "question": "\u0412 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u0435 \u0432\u0440\u0435\u043C\u044F \u044F \u0447\u0443\u0432\u0441\u0442\u0432\u043E\u0432\u0430\u043B \u0441\u0435\u0431\u044F \u0438\u0437\u043C\u043E\u0442\u0430\u043D\u043D\u044B\u043C \u0431\u0435\u0437 \u0432\u0438\u0434\u0438\u043C\u043E\u0439 \u043F\u0440\u0438\u0447\u0438\u043D\u044B.",
            "type": "\u0414\u043E\u0444\u0430\u043C\u0438\u043D - \u0424\u0438\u0437\u0438\u043E\u043B\u043E\u0433\u0438\u044F"
        },
        {
            "number": 12,
            "question": "\u0418\u043D\u043E\u0433\u0434\u0430 \u044F \u0447\u0443\u0432\u0441\u0442\u0432\u0443\u044E \u0441\u0435\u0431\u044F \u0438\u0437\u043C\u043E\u0436\u0434\u0435\u043D\u043D\u044B\u043C, \u043F\u0440\u0438 \u044D\u0442\u043E\u043C \u0434\u0430\u0436\u0435 \u043D\u0435 \u043D\u0430\u0433\u0440\u0443\u0436\u0430\u044F \u0441\u0435\u0431\u044F.",
            "type": "\u0414\u043E\u0444\u0430\u043C\u0438\u043D - \u0424\u0438\u0437\u0438\u043E\u043B\u043E\u0433\u0438\u044F"
        },
        {
            "number": 13,
            "question": "\u042F \u0432\u0441\u0435\u0433\u0434\u0430 \u0431\u043E\u0440\u043E\u043B\u0441\u044F \u0441 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u043E\u0439 \u0438\u0437\u0431\u044B\u0442\u043E\u0447\u043D\u043E\u0433\u043E \u0432\u0435\u0441\u0430.",
            "type": "\u0414\u043E\u0444\u0430\u043C\u0438\u043D - \u0424\u0438\u0437\u0438\u043E\u043B\u043E\u0433\u0438\u044F"
        },
        {
            "number": 14,
            "question": "\u0423 \u043C\u0435\u043D\u044F \u043D\u0435\u0442 \u043C\u043E\u0442\u0438\u0432\u0430\u0446\u0438\u0438 \u043A \u0441\u0435\u043A\u0441\u0443\u0430\u043B\u044C\u043D\u044B\u043C \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u0430\u043C.",
            "type": "\u0414\u043E\u0444\u0430\u043C\u0438\u043D - \u0424\u0438\u0437\u0438\u043E\u043B\u043E\u0433\u0438\u044F"
        },
        {
            "number": 15,
            "question": "\u041C\u043D\u0435 \u043D\u0435\u043C\u043D\u043E\u0433\u043E \u0442\u0440\u0443\u0434\u043D\u043E \u0432\u0441\u0442\u0430\u0432\u0430\u0442\u044C \u0441 \u043A\u0440\u043E\u0432\u0430\u0442\u0438 \u043F\u043E \u0443\u0442\u0440\u0430\u043C.",
            "type": "\u0414\u043E\u0444\u0430\u043C\u0438\u043D - \u0424\u0438\u0437\u0438\u043E\u043B\u043E\u0433\u0438\u044F"
        },
        {
            "number": 16,
            "question": "\u0423 \u043C\u0435\u043D\u044F \u0431\u044B\u043B\u0430 \u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E\u0441\u0442\u044C \u043E\u0442 \u043A\u043E\u043A\u0430\u0438\u043D\u0430 \u0438\u043B\u0438 \u0434\u0440\u0443\u0433\u0438\u0445 \u0441\u0442\u0438\u043C\u0443\u043B\u044F\u0442\u043E\u0440\u043E\u0432.",
            "type": "\u0414\u043E\u0444\u0430\u043C\u0438\u043D - \u0424\u0438\u0437\u0438\u043E\u043B\u043E\u0433\u0438\u044F"
        },
        {
            "number": 17,
            "question": "\u042F \u043F\u0440\u0435\u043A\u0440\u0430\u0441\u043D\u043E \u0441\u0435\u0431\u044F \u0447\u0443\u0432\u0441\u0442\u0432\u0443\u044E, \u043F\u0440\u043E\u0441\u0442\u043E \u0441\u043B\u0435\u0434\u0443\u044F \u0437\u0430 \u0434\u0440\u0443\u0433\u0438\u043C\u0438.",
            "type": "\u0414\u043E\u0444\u0430\u043C\u0438\u043D - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 18,
            "question": "\u041A\u0430\u0436\u0435\u0442\u0441\u044F, \u043B\u044E\u0434\u0438 \u043C\u0435\u043D\u044F \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044E\u0442.",
            "type": "\u0414\u043E\u0444\u0430\u043C\u0438\u043D - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 19,
            "question": "\u042F \u0447\u0443\u0432\u0441\u0442\u0432\u0443\u044E \u0441\u0435\u0431\u044F \u043E\u0447\u0435\u043D\u044C \u043F\u043E\u0434\u0430\u0432\u043B\u0435\u043D\u043D\u043E.",
            "type": "\u0414\u043E\u0444\u0430\u043C\u0438\u043D - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 20,
            "question": "\u041C\u043D\u0435 \u0433\u043E\u0432\u043E\u0440\u0438\u043B\u0438, \u0447\u0442\u043E \u044F \u0441\u043B\u0438\u0448\u043A\u043E\u043C \u043C\u044F\u0433\u043A\u0438\u0439.",
            "type": "\u0414\u043E\u0444\u0430\u043C\u0438\u043D - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 21,
            "question": "\u042F \u043D\u0435 \u043D\u0430\u0441\u0442\u043E\u0439\u0447\u0438\u0432.",
            "type": "\u0414\u043E\u0444\u0430\u043C\u0438\u043D - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 22,
            "question": "\u042F \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u044E \u043B\u044E\u0434\u044F\u043C \u043A\u0440\u0438\u0442\u0438\u043A\u043E\u0432\u0430\u0442\u044C \u043C\u0435\u043D\u044F.",
            "type": "\u0414\u043E\u0444\u0430\u043C\u0438\u043D - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 23,
            "question": "\u042F \u0432\u0441\u0435\u0433\u0434\u0430 \u0440\u0430\u0441\u0441\u0447\u0438\u0442\u044B\u0432\u0430\u044E, \u0447\u0442\u043E \u0434\u0440\u0443\u0433\u0438\u0435 \u043F\u043E\u0432\u0435\u0434\u0443\u0442 \u043C\u0435\u043D\u044F \u0437\u0430 \u0441\u043E\u0431\u043E\u0439.",
            "type": "\u0414\u043E\u0444\u0430\u043C\u0438\u043D - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 24,
            "question": "\u042F \u0443\u0442\u0440\u0430\u0442\u0438\u043B \u0441\u043F\u043E\u0441\u043E\u0431\u043D\u043E\u0441\u0442\u044C \u0437\u0434\u0440\u0430\u0432\u043E \u0440\u0430\u0441\u0441\u0443\u0436\u0434\u0430\u0442\u044C.",
            "type": "\u0414\u043E\u0444\u0430\u043C\u0438\u043D - \u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440"
        },
        {
            "number": 25,
            "question": "\u042F \u043D\u0435 \u043C\u043E\u0433\u0443 \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0442\u044C \u0445\u043E\u0440\u043E\u0448\u0438\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u044F.",
            "type": "\u0414\u043E\u0444\u0430\u043C\u0438\u043D - \u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440"
        },
        {
            "number": 26,
            "question": "\u041C\u043D\u0435 \u043D\u0435 \u0445\u0432\u0430\u0442\u0430\u0435\u0442 \u0432\u043E\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F.",
            "type": "\u0410\u0446\u0435\u0442\u0438\u043B\u0445\u043E\u043B\u0438\u043D - \u043F\u0430\u043C\u044F\u0442\u044C \u0438 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435"
        },
        {
            "number": 27,
            "question": "\u041C\u043D\u0435 \u0441\u043B\u043E\u0436\u043D\u043E \u0437\u0430\u043F\u043E\u043C\u0438\u043D\u0430\u0442\u044C \u0438\u043C\u0435\u043D\u0430 \u043F\u0440\u0438 \u043F\u0435\u0440\u0432\u043E\u0439 \u0432\u0441\u0442\u0440\u0435\u0447\u0435.",
            "type": "\u0410\u0446\u0435\u0442\u0438\u043B\u0445\u043E\u043B\u0438\u043D - \u043F\u0430\u043C\u044F\u0442\u044C \u0438 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435"
        },
        {
            "number": 28,
            "question": "\u042F \u0437\u0430\u043C\u0435\u0442\u0438\u043B, \u0447\u0442\u043E \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438 \u043C\u043E\u0435\u0439 \u043F\u0430\u043C\u044F\u0442\u0438 \u0441\u043D\u0438\u0436\u0430\u044E\u0442\u0441\u044F.",
            "type": "\u0410\u0446\u0435\u0442\u0438\u043B\u0445\u043E\u043B\u0438\u043D - \u043F\u0430\u043C\u044F\u0442\u044C \u0438 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435"
        },
        {
            "number": 29,
            "question": "\u041C\u043E\u044F \u0432\u0442\u043E\u0440\u0430\u044F \u043F\u043E\u043B\u043E\u0432\u0438\u043D\u043A\u0430 \u0433\u043E\u0432\u043E\u0440\u0438\u0442 \u043C\u043D\u0435, \u0447\u0442\u043E \u0432\u043E \u043C\u043D\u0435 \u043D\u0435\u0442 \u0440\u043E\u043C\u0430\u043D\u0442\u0438\u043A\u0438.",
            "type": "\u0410\u0446\u0435\u0442\u0438\u043B\u0445\u043E\u043B\u0438\u043D - \u043F\u0430\u043C\u044F\u0442\u044C \u0438 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435"
        },
        {
            "number": 30,
            "question": "\u042F \u043D\u0435 \u043C\u043E\u0433\u0443 \u0432\u0441\u043F\u043E\u043C\u043D\u0438\u0442\u044C \u0434\u043D\u0438 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F \u0434\u0440\u0443\u0437\u0435\u0439.",
            "type": "\u0410\u0446\u0435\u0442\u0438\u043B\u0445\u043E\u043B\u0438\u043D - \u043F\u0430\u043C\u044F\u0442\u044C \u0438 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435"
        },
        {
            "number": 31,
            "question": "\u042F \u0443\u0442\u0440\u0430\u0442\u0438\u043B \u0447\u0430\u0441\u0442\u044C \u0441\u0432\u043E\u0435\u0433\u043E \u0442\u0432\u043E\u0440\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B\u0430.",
            "type": "\u0410\u0446\u0435\u0442\u0438\u043B\u0445\u043E\u043B\u0438\u043D - \u043F\u0430\u043C\u044F\u0442\u044C \u0438 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435"
        },
        {
            "number": 32,
            "question": "\u042F \u0441\u0442\u0440\u0430\u0434\u0430\u044E \u043E\u0442 \u0431\u0435\u0441\u0441\u043E\u043D\u043D\u0438\u0446\u044B.",
            "type": "\u0410\u0446\u0435\u0442\u0438\u043B\u0445\u043E\u043B\u0438\u043D - \u0424\u0438\u0437\u0438\u043E\u043B\u043E\u0433\u0438\u044F"
        },
        {
            "number": 33,
            "question": "\u042F \u043F\u043E\u0442\u0435\u0440\u044F\u043B \u043C\u044B\u0448\u0435\u0447\u043D\u044B\u0439 \u0442\u043E\u043D\u0443\u0441.",
            "type": "\u0410\u0446\u0435\u0442\u0438\u043B\u0445\u043E\u043B\u0438\u043D - \u0424\u0438\u0437\u0438\u043E\u043B\u043E\u0433\u0438\u044F"
        },
        {
            "number": 34,
            "question": "\u042F \u0431\u043E\u043B\u044C\u0448\u0435 \u043D\u0435 \u0437\u0430\u043D\u0438\u043C\u0430\u044E\u0441\u044C \u0444\u0438\u0437\u043A\u0443\u043B\u044C\u0442\u0443\u0440\u043E\u0439.",
            "type": "\u0410\u0446\u0435\u0442\u0438\u043B\u0445\u043E\u043B\u0438\u043D - \u0424\u0438\u0437\u0438\u043E\u043B\u043E\u0433\u0438\u044F"
        },
        {
            "number": 35,
            "question": "\u041C\u0435\u043D\u044F \u0442\u044F\u043D\u0435\u0442 \u043D\u0430 \u0436\u0438\u0440\u043D\u0443\u044E \u0435\u0434\u0443.",
            "type": "\u0410\u0446\u0435\u0442\u0438\u043B\u0445\u043E\u043B\u0438\u043D - \u0424\u0438\u0437\u0438\u043E\u043B\u043E\u0433\u0438\u044F"
        },
        {
            "number": 36,
            "question": "\u042F \u044D\u043A\u0441\u043F\u0435\u0440\u0438\u043C\u0435\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u043B \u0441 \u0433\u0430\u043B\u043B\u044E\u0446\u0438\u043D\u043E\u0433\u0435\u043D\u0430\u043C\u0438 \u0438\u043B\u0438 \u0434\u0440\u0443\u0433\u0438\u043C\u0438 \u0437\u0430\u043F\u0440\u0435\u0449\u0435\u043D\u043D\u044B\u043C\u0438 \u0432\u0435\u0449\u0435\u0441\u0442\u0432\u0430\u043C\u0438.",
            "type": "\u0410\u0446\u0435\u0442\u0438\u043B\u0445\u043E\u043B\u0438\u043D - \u0424\u0438\u0437\u0438\u043E\u043B\u043E\u0433\u0438\u044F"
        },
        {
            "number": 37,
            "question": "\u042F \u0447\u0443\u0432\u0441\u0442\u0432\u0443\u044E, \u0431\u0443\u0434\u0442\u043E \u043C\u043E\u0435 \u0442\u0435\u043B\u043E \u0440\u0430\u0437\u0432\u0430\u043B\u0438\u0432\u0430\u0435\u0442\u0441\u044F.",
            "type": "\u0410\u0446\u0435\u0442\u0438\u043B\u0445\u043E\u043B\u0438\u043D - \u0424\u0438\u0437\u0438\u043E\u043B\u043E\u0433\u0438\u044F"
        },
        {
            "number": 38,
            "question": "\u0423 \u043C\u0435\u043D\u044F \u0437\u0430\u0442\u0440\u0443\u0434\u043D\u0435\u043D\u043D\u043E\u0435 \u0434\u044B\u0445\u0430\u043D\u0438\u0435.",
            "type": "\u0410\u0446\u0435\u0442\u0438\u043B\u0445\u043E\u043B\u0438\u043D - \u0424\u0438\u0437\u0438\u043E\u043B\u043E\u0433\u0438\u044F"
        },
        {
            "number": 39,
            "question": "\u042F \u043D\u0435 \u0447\u0430\u0441\u0442\u043E \u0438\u0441\u043F\u044B\u0442\u044B\u0432\u0430\u044E \u0440\u0430\u0434\u043E\u0441\u0442\u044C.",
            "type": "\u0410\u0446\u0435\u0442\u0438\u043B\u0445\u043E\u043B\u0438\u043D - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 40,
            "question": "\u042F \u0447\u0443\u0432\u0441\u0442\u0432\u0443\u044E \u043E\u0442\u0447\u0430\u044F\u043D\u0438\u0435.",
            "type": "\u0410\u0446\u0435\u0442\u0438\u043B\u0445\u043E\u043B\u0438\u043D - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 41,
            "question": "\u042F \u043D\u0438\u043A\u043E\u0433\u0434\u0430 \u043D\u0435 \u0440\u0430\u0441\u0441\u043A\u0430\u0437\u044B\u0432\u0430\u044E \u043C\u043D\u043E\u0433\u043E \u043E \u0441\u0435\u0431\u0435, \u0447\u0442\u043E\u0431\u044B \u0434\u0440\u0443\u0433\u0438\u0435 \u043B\u044E\u0434\u0438 \u043D\u0435 \u043C\u043E\u0433\u043B\u0438 \u043F\u0440\u0438\u0447\u0438\u043D\u0438\u0442\u044C \u043C\u043D\u0435 \u0432\u0440\u0435\u0434.",
            "type": "\u0410\u0446\u0435\u0442\u0438\u043B\u0445\u043E\u043B\u0438\u043D - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 42,
            "question": "\u041C\u043D\u0435 \u043A\u043E\u043C\u0444\u043E\u0440\u0442\u043D\u0435\u0435 \u0434\u0435\u043B\u0430\u0442\u044C \u0434\u0435\u043B\u0430 \u0432 \u043E\u0434\u0438\u043D\u043E\u0447\u0435\u0441\u0442\u0432\u0435, \u0447\u0435\u043C \u0432 \u0431\u043E\u043B\u044C\u0448\u043E\u0439 \u0433\u0440\u0443\u043F\u043F\u0435.",
            "type": "\u0410\u0446\u0435\u0442\u0438\u043B\u0445\u043E\u043B\u0438\u043D - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 43,
            "question": "\u0414\u0440\u0443\u0433\u0438\u0435 \u043B\u044E\u0434\u0438 \u0437\u043B\u044F\u0442\u0441\u044F \u0438\u0437-\u0437\u0430 \u0440\u0430\u0437\u0434\u0440\u0430\u0436\u0430\u044E\u0449\u0438\u0445 \u0432\u0435\u0449\u0435\u0439 \u0431\u043E\u043B\u044C\u0448\u0435, \u0447\u0435\u043C \u044F.",
            "type": "\u0410\u0446\u0435\u0442\u0438\u043B\u0445\u043E\u043B\u0438\u043D - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 44,
            "question": "\u042F \u043B\u0435\u0433\u043A\u043E \u0441\u0434\u0430\u044E\u0441\u044C \u0438 \u0441\u043A\u043B\u043E\u043D\u0435\u043D \u0431\u044B\u0442\u044C \u043F\u043E\u043A\u043E\u0440\u043D\u044B\u043C.",
            "type": "\u0410\u0446\u0435\u0442\u0438\u043B\u0445\u043E\u043B\u0438\u043D - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 45,
            "question": "\u042F \u0440\u0435\u0434\u043A\u043E \u0438\u0441\u043F\u044B\u0442\u044B\u0432\u0430\u044E \u0441\u0442\u0440\u0430\u0441\u0442\u044C \u043A \u0447\u0435\u043C\u0443-\u043B\u0438\u0431\u043E.",
            "type": "\u0410\u0446\u0435\u0442\u0438\u043B\u0445\u043E\u043B\u0438\u043D - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 46,
            "question": "\u041C\u043D\u0435 \u043D\u0440\u0430\u0432\u0438\u0442\u0441\u044F \u0440\u0443\u0442\u0438\u043D\u0430.",
            "type": "\u0410\u0446\u0435\u0442\u0438\u043B\u0445\u043E\u043B\u0438\u043D - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 47,
            "question": "\u041C\u0435\u043D\u044F \u043D\u0435 \u0432\u043E\u043B\u043D\u0443\u044E\u0442 \u043D\u0438\u0447\u044C\u0438 \u0438\u0441\u0442\u043E\u0440\u0438\u0438, \u043A\u0440\u043E\u043C\u0435 \u0441\u0432\u043E\u0438\u0445 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0445.",
            "type": "\u0410\u0446\u0435\u0442\u0438\u043B\u0445\u043E\u043B\u0438\u043D - \u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440"
        },
        {
            "number": 48,
            "question": "\u042F \u043D\u0435 \u043E\u0431\u0440\u0430\u0449\u0430\u044E \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u044F \u043D\u0430 \u0447\u0443\u0432\u0441\u0442\u0432\u0430 \u0434\u0440\u0443\u0433\u0438\u0445 \u043B\u044E\u0434\u0435\u0439.",
            "type": "\u0410\u0446\u0435\u0442\u0438\u043B\u0445\u043E\u043B\u0438\u043D - \u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440"
        },
        {
            "number": 49,
            "question": "\u042F \u043D\u0435 \u0447\u0443\u0432\u0441\u0442\u0432\u0443\u044E \u0431\u043E\u0434\u0440\u043E\u0441\u0442\u0438.",
            "type": "\u0410\u0446\u0435\u0442\u0438\u043B\u0445\u043E\u043B\u0438\u043D - \u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440"
        },
        {
            "number": 50,
            "question": "\u042F \u0437\u0430\u0446\u0438\u043A\u043B\u0435\u043D \u043D\u0430 \u0441\u0432\u043E\u0438\u0445 \u043D\u0435\u0434\u043E\u0441\u0442\u0430\u0442\u043A\u0430\u0445.",
            "type": "\u0410\u0446\u0435\u0442\u0438\u043B\u0445\u043E\u043B\u0438\u043D - \u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440"
        },
        {
            "number": 51,
            "question": "\u041C\u043D\u0435 \u0441\u043B\u043E\u0436\u043D\u043E \u0441\u043A\u043E\u043D\u0446\u0435\u043D\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u0438\u0437-\u0437\u0430 \u0432\u043E\u043B\u043D\u0435\u043D\u0438\u044F \u0438 \u043D\u0435\u0440\u0432\u043E\u0437\u043D\u043E\u0441\u0442\u0438.",
            "type": "\u0413\u0410\u041C\u041A - \u043F\u0430\u043C\u044F\u0442\u044C \u0438 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435"
        },
        {
            "number": 52,
            "question": "\u042F \u043D\u0435 \u043C\u043E\u0433\u0443 \u0437\u0430\u043F\u043E\u043C\u043D\u0438\u0442\u044C \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u043D\u044B\u0435 \u043D\u043E\u043C\u0435\u0440\u0430.",
            "type": "\u0413\u0410\u041C\u041A - \u043F\u0430\u043C\u044F\u0442\u044C \u0438 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435"
        },
        {
            "number": 53,
            "question": "\u041C\u043D\u0435 \u0442\u0440\u0443\u0434\u043D\u043E \u043F\u043E\u0434\u043E\u0431\u0440\u0430\u0442\u044C \u043D\u0443\u0436\u043D\u043E\u0435 \u0441\u043B\u043E\u0432\u043E.",
            "type": "\u0413\u0410\u041C\u041A - \u043F\u0430\u043C\u044F\u0442\u044C \u0438 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435"
        },
        {
            "number": 54,
            "question": "\u041C\u043D\u0435 \u0442\u0440\u0443\u0434\u043D\u043E \u0432\u0441\u043F\u043E\u043C\u0438\u043D\u0430\u0442\u044C \u0432\u0435\u0449\u0438, \u043A\u043E\u0433\u0434\u0430 \u043D\u0443\u0436\u043D\u043E \u0434\u0435\u0439\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C \u043D\u0435\u0437\u0430\u043C\u0435\u0434\u043B\u0438\u0442\u0435\u043B\u044C\u043D\u043E.",
            "type": "\u0413\u0410\u041C\u041A - \u043F\u0430\u043C\u044F\u0442\u044C \u0438 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435"
        },
        {
            "number": 55,
            "question": "\u042F \u0437\u043D\u0430\u044E, \u0447\u0442\u043E \u044F \u0443\u043C\u043D\u044B\u0439, \u043D\u043E \u0442\u0440\u0443\u0434\u043D\u043E \u044D\u0442\u043E \u043F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0434\u0440\u0443\u0433\u0438\u043C.",
            "type": "\u0413\u0410\u041C\u041A - \u043F\u0430\u043C\u044F\u0442\u044C \u0438 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435"
        },
        {
            "number": 56,
            "question": "\u041C\u043E\u044F \u0441\u043F\u043E\u0441\u043E\u0431\u043D\u043E\u0441\u0442\u044C \u0441\u043E\u0441\u0440\u0435\u0434\u043E\u0442\u0430\u0447\u0438\u0432\u0430\u0442\u044C\u0441\u044F \u0442\u043E \u043F\u0440\u0438\u0445\u043E\u0434\u0438\u0442, \u0442\u043E \u0443\u0445\u043E\u0434\u0438\u0442.",
            "type": "\u0413\u0410\u041C\u041A - \u043F\u0430\u043C\u044F\u0442\u044C \u0438 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435"
        },
        {
            "number": 57,
            "question": "\u0412\u043E \u0432\u0440\u0435\u043C\u044F \u0447\u0442\u0435\u043D\u0438\u044F \u043C\u043D\u0435 \u043F\u0440\u0438\u0445\u043E\u0434\u0438\u0442\u0441\u044F \u043F\u043E \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0440\u0430\u0437 \u043F\u0435\u0440\u0435\u0447\u0438\u0442\u044B\u0432\u0430\u0442\u044C \u043E\u0434\u0438\u043D \u0438 \u0442\u043E\u0442 \u0436\u0435 \u043F\u0430\u0440\u0430\u0433\u0440\u0430\u0444, \u0447\u0442\u043E\u0431\u044B \u0443\u0441\u0432\u043E\u0438\u0442\u044C \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E.",
            "type": "\u0413\u0410\u041C\u041A - \u043F\u0430\u043C\u044F\u0442\u044C \u0438 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435"
        },
        {
            "number": 58,
            "question": "\u042F \u0431\u044B\u0441\u0442\u0440\u043E \u0441\u043E\u043E\u0431\u0440\u0430\u0436\u0430\u044E, \u043D\u043E \u043D\u0435 \u0432\u0441\u0435\u0433\u0434\u0430 \u043C\u043E\u0433\u0443 \u043E\u0431\u044A\u044F\u0441\u043D\u0438\u0442\u044C \u0434\u0440\u0443\u0433\u0438\u043C \u0441\u0432\u043E\u0438 \u043C\u044B\u0441\u043B\u0438.",
            "type": "\u0413\u0410\u041C\u041A - \u043F\u0430\u043C\u044F\u0442\u044C \u0438 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435"
        },
        {
            "number": 59,
            "question": "\u0423 \u043C\u0435\u043D\u044F \u0431\u044B\u0432\u0430\u0435\u0442 \u0447\u0443\u0432\u0441\u0442\u0432\u043E \u0441\u043B\u0430\u0431\u043E\u0441\u0442\u0438.",
            "type": "\u0413\u0410\u041C\u041A - \u0424\u0438\u0437\u0438\u043E\u043B\u043E\u0433\u0438\u044F"
        },
        {
            "number": 60,
            "question": "\u0418\u043D\u043E\u0433\u0434\u0430 \u044F \u0434\u0440\u043E\u0436\u0443.",
            "type": "\u0413\u0410\u041C\u041A - \u0424\u0438\u0437\u0438\u043E\u043B\u043E\u0433\u0438\u044F"
        },
        {
            "number": 61,
            "question": "\u0423 \u043C\u0435\u043D\u044F \u0447\u0430\u0441\u0442\u043E \u0431\u043E\u043B\u0438\u0442 \u0441\u043F\u0438\u043D\u0430 \u0438/\u0438\u043B\u0438 \u0433\u043E\u043B\u043E\u0432\u0430.",
            "type": "\u0413\u0410\u041C\u041A - \u0424\u0438\u0437\u0438\u043E\u043B\u043E\u0433\u0438\u044F"
        },
        {
            "number": 62,
            "question": "\u0423 \u043C\u0435\u043D\u044F \u0435\u0441\u0442\u044C \u0441\u043A\u043B\u043E\u043D\u043D\u043E\u0441\u0442\u044C \u043A \u043E\u0434\u044B\u0448\u043A\u0435.",
            "type": "\u0413\u0410\u041C\u041A - \u0424\u0438\u0437\u0438\u043E\u043B\u043E\u0433\u0438\u044F"
        },
        {
            "number": 63,
            "question": "\u0423 \u043C\u0435\u043D\u044F \u0435\u0441\u0442\u044C \u0441\u043A\u043B\u043E\u043D\u043D\u043E\u0441\u0442\u044C \u043A \u0443\u0447\u0430\u0449\u0435\u043D\u043D\u043E\u043C\u0443 \u0441\u0435\u0440\u0434\u0446\u0435\u0431\u0438\u0435\u043D\u0438\u044E.",
            "type": "\u0413\u0410\u041C\u041A - \u0424\u0438\u0437\u0438\u043E\u043B\u043E\u0433\u0438\u044F"
        },
        {
            "number": 64,
            "question": "\u041C\u043E\u0438 \u0440\u0443\u043A\u0438 \u043E\u0431\u044B\u0447\u043D\u043E \u0445\u043E\u043B\u043E\u0434\u043D\u044B\u0435.",
            "type": "\u0413\u0410\u041C\u041A - \u0424\u0438\u0437\u0438\u043E\u043B\u043E\u0433\u0438\u044F"
        },
        {
            "number": 65,
            "question": "\u0418\u043D\u043E\u0433\u0434\u0430 \u044F \u0441\u043B\u0438\u0448\u043A\u043E\u043C \u0441\u0438\u043B\u044C\u043D\u043E \u043F\u043E\u0442\u0435\u044E.",
            "type": "\u0413\u0410\u041C\u041A - \u0424\u0438\u0437\u0438\u043E\u043B\u043E\u0433\u0438\u044F"
        },
        {
            "number": 66,
            "question": "\u0418\u043D\u043E\u0433\u0434\u0430 \u0443 \u043C\u0435\u043D\u044F \u043A\u0440\u0443\u0436\u0438\u0442\u0441\u044F \u0433\u043E\u043B\u043E\u0432\u0430.",
            "type": "\u0413\u0410\u041C\u041A - \u0424\u0438\u0437\u0438\u043E\u043B\u043E\u0433\u0438\u044F"
        },
        {
            "number": 67,
            "question": "\u0423 \u043C\u0435\u043D\u044F \u0447\u0430\u0441\u0442\u043E \u0431\u044B\u0432\u0430\u0435\u0442 \u043C\u044B\u0448\u0435\u0447\u043D\u043E\u0435 \u043D\u0430\u043F\u0440\u044F\u0436\u0435\u043D\u0438\u0435.",
            "type": "\u0413\u0410\u041C\u041A - \u0424\u0438\u0437\u0438\u043E\u043B\u043E\u0433\u0438\u044F"
        },
        {
            "number": 68,
            "question": "\u0423 \u043C\u0435\u043D\u044F \u0431\u044B\u0432\u0430\u0435\u0442 \u043E\u0449\u0443\u0449\u0435\u043D\u0438\u0435 \xab\u0431\u0430\u0431\u043E\u0447\u0435\u043A \u0432 \u0436\u0438\u0432\u043E\u0442\u0435\xbb.",
            "type": "\u0413\u0410\u041C\u041A - \u0424\u0438\u0437\u0438\u043E\u043B\u043E\u0433\u0438\u044F"
        },
        {
            "number": 69,
            "question": "\u041C\u0435\u043D\u044F \u0442\u044F\u043D\u0435\u0442 \u043D\u0430 \u0433\u043E\u0440\u044C\u043A\u0443\u044E \u043F\u0438\u0449\u0443.",
            "type": "\u0413\u0410\u041C\u041A - \u0424\u0438\u0437\u0438\u043E\u043B\u043E\u0433\u0438\u044F"
        },
        {
            "number": 70,
            "question": "\u042F \u0447\u0430\u0441\u0442\u043E \u043D\u0435\u0440\u0432\u043D\u0438\u0447\u0430\u044E.",
            "type": "\u0413\u0410\u041C\u041A - \u0424\u0438\u0437\u0438\u043E\u043B\u043E\u0433\u0438\u044F"
        },
        {
            "number": 71,
            "question": "\u041C\u043D\u0435 \u043D\u0440\u0430\u0432\u0438\u0442\u0441\u044F \u0439\u043E\u0433\u0430, \u043F\u043E\u0442\u043E\u043C\u0443 \u0447\u0442\u043E \u043E\u043D\u0430 \u043F\u043E\u043C\u043E\u0433\u0430\u0435\u0442 \u043C\u043D\u0435 \u0440\u0430\u0441\u0441\u043B\u0430\u0431\u0438\u0442\u044C\u0441\u044F.",
            "type": "\u0413\u0410\u041C\u041A - \u0424\u0438\u0437\u0438\u043E\u043B\u043E\u0433\u0438\u044F"
        },
        {
            "number": 72,
            "question": "\u042F \u0447\u0430\u0441\u0442\u043E \u0447\u0443\u0432\u0441\u0442\u0432\u0443\u044E \u0443\u0441\u0442\u0430\u043B\u043E\u0441\u0442\u044C, \u0434\u0430\u0436\u0435 \u0435\u0441\u043B\u0438 \u0445\u043E\u0440\u043E\u0448\u043E \u0432\u044B\u0441\u043F\u0430\u043B\u0441\u044F \u043D\u043E\u0447\u044C\u044E.",
            "type": "\u0413\u0410\u041C\u041A - \u0424\u0438\u0437\u0438\u043E\u043B\u043E\u0433\u0438\u044F"
        },
        {
            "number": 73,
            "question": "\u042F \u043F\u0435\u0440\u0435\u0435\u0434\u0430\u044E.",
            "type": "\u0413\u0410\u041C\u041A - \u0424\u0438\u0437\u0438\u043E\u043B\u043E\u0433\u0438\u044F"
        },
        {
            "number": 74,
            "question": "\u0423 \u043C\u0435\u043D\u044F \u0431\u044B\u0432\u0430\u044E\u0442 \u0440\u0435\u0437\u043A\u0438\u0435 \u043F\u0435\u0440\u0435\u043F\u0430\u0434\u044B \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043D\u0438\u044F.",
            "type": "\u0413\u0410\u041C\u041A - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 75,
            "question": "\u041C\u043D\u0435 \u043D\u0440\u0430\u0432\u0438\u0442\u0441\u044F \u0437\u0430\u043D\u0438\u043C\u0430\u0442\u044C\u0441\u044F \u043C\u043D\u043E\u0433\u0438\u043C\u0438 \u0437\u0430\u043D\u044F\u0442\u0438\u044F\u043C\u0438 \u043E\u0434\u043D\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E, \u043D\u043E \u043C\u043D\u0435 \u0442\u0440\u0443\u0434\u043D\u043E \u0440\u0435\u0448\u0438\u0442\u044C, \u0447\u0442\u043E \u0434\u0435\u043B\u0430\u0442\u044C \u0432 \u043F\u0435\u0440\u0432\u0443\u044E \u043E\u0447\u0435\u0440\u0435\u0434\u044C.",
            "type": "\u0413\u0410\u041C\u041A - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 76,
            "question": "\u042F \u0441\u043A\u043B\u043E\u043D\u0435\u043D \u0434\u0435\u043B\u0430\u0442\u044C \u0447\u0442\u043E-\u043B\u0438\u0431\u043E \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u043E\u0442\u043E\u043C\u0443, \u0447\u0442\u043E \u044F \u0434\u0443\u043C\u0430\u044E, \u0447\u0442\u043E \u044D\u0442\u043E \u0431\u0443\u0434\u0435\u0442 \u0432\u0435\u0441\u0435\u043B\u043E.",
            "type": "\u0413\u0410\u041C\u041A - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 77,
            "question": "\u041A\u043E\u0433\u0434\u0430 \u0432\u0441\u0451 \u0443\u043D\u044B\u043B\u043E, \u044F \u0432\u0441\u0435\u0433\u0434\u0430 \u0441\u0442\u0430\u0440\u0430\u044E\u0441\u044C \u043F\u0440\u0438\u0432\u043D\u0435\u0441\u0442\u0438 \u043D\u0435\u043C\u043D\u043E\u0433\u043E \u043E\u0436\u0438\u0432\u043B\u0435\u043D\u0438\u044F.",
            "type": "\u0413\u0410\u041C\u041A - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 78,
            "question": "\u042F \u0441\u043A\u043B\u043E\u043D\u0435\u043D \u043A \u043D\u0435\u043F\u043E\u0441\u0442\u043E\u044F\u043D\u0441\u0442\u0432\u0443, \u043C\u043E\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043D\u0438\u0435 \u0438 \u043C\u044B\u0441\u043B\u0438 \u0447\u0430\u0441\u0442\u043E \u043C\u0435\u043D\u044F\u044E\u0442\u0441\u044F.",
            "type": "\u0413\u0410\u041C\u041A - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 79,
            "question": "\u042F \u0441\u043A\u043B\u043E\u043D\u0435\u043D \u0447\u0440\u0435\u0437\u043C\u0435\u0440\u043D\u043E \u0432\u043E\u043B\u043D\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u0438\u0437-\u0437\u0430 \u043F\u0440\u043E\u0438\u0441\u0445\u043E\u0434\u044F\u0449\u0435\u0433\u043E.",
            "type": "\u0413\u0410\u041C\u041A - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 80,
            "question": "\u041C\u043E\u044F \u0438\u043C\u043F\u0443\u043B\u044C\u0441\u0438\u0432\u043D\u043E\u0441\u0442\u044C \u043E\u0431\u044B\u0447\u043D\u043E \u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u043C\u043D\u0435 \u043C\u043D\u043E\u0433\u043E \u043D\u0435\u043F\u0440\u0438\u044F\u0442\u043D\u043E\u0441\u0442\u0435\u0439.",
            "type": "\u0413\u0410\u041C\u041A - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 81,
            "question": "\u042F \u0441\u043A\u043B\u043E\u043D\u0435\u043D \u043A \u0442\u0435\u0430\u0442\u0440\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u0438 \u043F\u0440\u0438\u0432\u043B\u0435\u043A\u0430\u044E \u043A \u0441\u0435\u0431\u0435 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435.",
            "type": "\u0413\u0410\u041C\u041A - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 82,
            "question": "\u042F \u0432\u044B\u0441\u043A\u0430\u0437\u044B\u0432\u0430\u044E \u0441\u0432\u043E\u0435 \u043C\u043D\u0435\u043D\u0438\u0435 \u043D\u0435\u0432\u0437\u0438\u0440\u0430\u044F \u043D\u0430 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u0443\u044E \u0440\u0435\u0430\u043A\u0446\u0438\u044E \u0434\u0440\u0443\u0433\u0438\u0445 \u043B\u044E\u0434\u0435\u0439.",
            "type": "\u0413\u0410\u041C\u041A - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 83,
            "question": "\u0418\u043D\u043E\u0433\u0434\u0430 \u0443 \u043C\u0435\u043D\u044F \u0441\u043B\u0443\u0447\u0430\u044E\u0442\u0441\u044F \u043F\u0440\u0438\u0441\u0442\u0443\u043F\u044B \u044F\u0440\u043E\u0441\u0442\u0438, \u0430 \u043F\u043E\u0442\u043E\u043C \u044F \u0447\u0443\u0432\u0441\u0442\u0432\u0443\u044E \u0441\u0435\u0431\u044F \u0443\u0436\u0430\u0441\u043D\u043E \u0432\u0438\u043D\u043E\u0432\u0430\u0442\u044B\u043C.",
            "type": "\u0413\u0410\u041C\u041A - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 84,
            "question": "\u042F \u0447\u0430\u0441\u0442\u043E \u0432\u0440\u0443, \u0447\u0442\u043E\u0431\u044B \u0438\u0437\u0431\u0435\u0436\u0430\u0442\u044C \u043D\u0435\u043F\u0440\u0438\u044F\u0442\u043D\u043E\u0441\u0442\u0435\u0439.",
            "type": "\u0413\u0410\u041C\u041A - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 85,
            "question": "\u041C\u043E\u0439 \u0438\u043D\u0442\u0435\u0440\u0435\u0441 \u043A \u0441\u0435\u043A\u0441\u0443 \u0432\u0441\u0435\u0433\u0434\u0430 \u0431\u044B\u043B \u043D\u0438\u0436\u0435 \u0441\u0440\u0435\u0434\u043D\u0435\u0433\u043E.",
            "type": "\u0413\u0410\u041C\u041A - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 86,
            "question": "\u042F \u043D\u0435 \u0438\u0433\u0440\u0430\u044E \u043F\u043E \u043F\u0440\u0430\u0432\u0438\u043B\u0430\u043C.",
            "type": "\u0413\u0410\u041C\u041A - \u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440"
        },
        {
            "number": 87,
            "question": "\u042F \u043F\u043E\u0442\u0435\u0440\u044F\u043B \u0441\u0432\u043E\u0438\u0445 \u0434\u0440\u0443\u0437\u0435\u0439.",
            "type": "\u0413\u0410\u041C\u041A - \u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440"
        },
        {
            "number": 88,
            "question": "\u042F \u043D\u0435 \u043C\u043E\u0433\u0443 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0442\u044C \u0440\u043E\u043C\u0430\u043D\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u044F.",
            "type": "\u0413\u0410\u041C\u041A - \u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440"
        },
        {
            "number": 89,
            "question": "\u042F \u0441\u0447\u0438\u0442\u0430\u044E \u0437\u0430\u043A\u043E\u043D\u044B \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u043B\u044C\u043D\u044B\u043C\u0438 \u0438 \u043D\u0435\u043E\u0431\u043E\u0441\u043D\u043E\u0432\u0430\u043D\u043D\u044B\u043C\u0438.",
            "type": "\u0413\u0410\u041C\u041A - \u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440"
        },
        {
            "number": 90,
            "question": "\u041F\u0440\u0430\u0432\u0438\u043B\u0430, \u043A\u043E\u0442\u043E\u0440\u044B\u043C \u044F \u0440\u0430\u043D\u044C\u0448\u0435 \u0441\u043B\u0435\u0434\u043E\u0432\u0430\u043B, \u0442\u0435\u043F\u0435\u0440\u044C \u043A\u0430\u0436\u0443\u0442\u0441\u044F \u043C\u043D\u0435 \u043D\u0435\u043B\u0435\u043F\u044B\u043C\u0438.",
            "type": "\u0413\u0410\u041C\u041A - \u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440"
        },
        {
            "number": 91,
            "question": "\u042F \u043D\u0435 \u043E\u0447\u0435\u043D\u044C \u043F\u0440\u043E\u043D\u0438\u0446\u0430\u0442\u0435\u043B\u0435\u043D.",
            "type": "\u0421\u0435\u0440\u043E\u0442\u043E\u043D\u0438\u043D - \u043F\u0430\u043C\u044F\u0442\u044C \u0438 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435"
        },
        {
            "number": 92,
            "question": "\u0423 \u043C\u0435\u043D\u044F \u043F\u043B\u043E\u0445\u0430\u044F \u0437\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u043F\u0430\u043C\u044F\u0442\u044C.",
            "type": "\u0421\u0435\u0440\u043E\u0442\u043E\u043D\u0438\u043D - \u043F\u0430\u043C\u044F\u0442\u044C \u0438 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435"
        },
        {
            "number": 93,
            "question": "\u0423 \u043C\u0435\u043D\u044F \u0437\u0430\u043C\u0435\u0434\u043B\u0435\u043D\u043D\u0430\u044F \u0440\u0435\u0430\u043A\u0446\u0438\u044F.",
            "type": "\u0421\u0435\u0440\u043E\u0442\u043E\u043D\u0438\u043D - \u043F\u0430\u043C\u044F\u0442\u044C \u0438 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435"
        },
        {
            "number": 94,
            "question": "\u042F \u043F\u043B\u043E\u0445\u043E \u043E\u0440\u0438\u0435\u043D\u0442\u0438\u0440\u0443\u044E\u0441\u044C \u043D\u0430 \u043C\u0435\u0441\u0442\u043D\u043E\u0441\u0442\u0438.",
            "type": "\u0421\u0435\u0440\u043E\u0442\u043E\u043D\u0438\u043D - \u043F\u0430\u043C\u044F\u0442\u044C \u0438 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435"
        },
        {
            "number": 95,
            "question": "\u042F \u043F\u043E\u0442\u0435\u044E \u043F\u043E \u043D\u043E\u0447\u0430\u043C.",
            "type": "\u0421\u0435\u0440\u043E\u0442\u043E\u043D\u0438\u043D - \u0424\u0438\u0437\u0438\u043E\u043B\u043E\u0433\u0438\u044F"
        },
        {
            "number": 96,
            "question": "\u0423 \u043C\u0435\u043D\u044F \u0431\u0435\u0441\u0441\u043E\u043D\u043D\u0438\u0446\u0430.",
            "type": "\u0421\u0435\u0440\u043E\u0442\u043E\u043D\u0438\u043D - \u0424\u0438\u0437\u0438\u043E\u043B\u043E\u0433\u0438\u044F"
        },
        {
            "number": 97,
            "question": "\u041C\u043D\u0435 \u043F\u0440\u0438\u0445\u043E\u0434\u0438\u0442\u0441\u044F \u043F\u0435\u0440\u0435\u043F\u0440\u043E\u0431\u043E\u0432\u0430\u0442\u044C \u043C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u043E \u0440\u0430\u0437\u043D\u044B\u0445 \u043F\u043E\u0437, \u0447\u0442\u043E\u0431\u044B \u0437\u0430\u0441\u043D\u0443\u0442\u044C \u0441 \u043A\u043E\u043C\u0444\u043E\u0440\u0442\u043E\u043C.",
            "type": "\u0421\u0435\u0440\u043E\u0442\u043E\u043D\u0438\u043D - \u0424\u0438\u0437\u0438\u043E\u043B\u043E\u0433\u0438\u044F"
        },
        {
            "number": 98,
            "question": "\u042F \u0432\u0441\u0435\u0433\u0434\u0430 \u043F\u0440\u043E\u0441\u044B\u043F\u0430\u044E\u0441\u044C \u0440\u0430\u043D\u043D\u0438\u043C \u0443\u0442\u0440\u043E\u043C.",
            "type": "\u0421\u0435\u0440\u043E\u0442\u043E\u043D\u0438\u043D - \u0424\u0438\u0437\u0438\u043E\u043B\u043E\u0433\u0438\u044F"
        },
        {
            "number": 99,
            "question": "\u042F \u043D\u0435 \u043C\u043E\u0433\u0443 \u0440\u0430\u0441\u0441\u043B\u0430\u0431\u0438\u0442\u044C\u0441\u044F.",
            "type": "\u0421\u0435\u0440\u043E\u0442\u043E\u043D\u0438\u043D - \u0424\u0438\u0437\u0438\u043E\u043B\u043E\u0433\u0438\u044F"
        },
        {
            "number": 100,
            "question": "\u042F \u043F\u0440\u043E\u0441\u044B\u043F\u0430\u044E\u0441\u044C \u043D\u0435 \u043C\u0435\u043D\u044C\u0448\u0435 \u0434\u0432\u0443\u0445 \u0440\u0430\u0437 \u0437\u0430 \u043D\u043E\u0447\u044C.",
            "type": "\u0421\u0435\u0440\u043E\u0442\u043E\u043D\u0438\u043D - \u0424\u0438\u0437\u0438\u043E\u043B\u043E\u0433\u0438\u044F"
        },
        {
            "number": 101,
            "question": "\u041C\u043D\u0435 \u0442\u0440\u0443\u0434\u043D\u043E \u0441\u043D\u043E\u0432\u0430 \u0437\u0430\u0441\u043D\u0443\u0442\u044C \u043F\u043E\u0441\u043B\u0435 \u043F\u0440\u043E\u0431\u0443\u0436\u0434\u0435\u043D\u0438\u044F.",
            "type": "\u0421\u0435\u0440\u043E\u0442\u043E\u043D\u0438\u043D - \u0424\u0438\u0437\u0438\u043E\u043B\u043E\u0433\u0438\u044F"
        },
        {
            "number": 102,
            "question": "\u041C\u0435\u043D\u044F \u0442\u044F\u043D\u0435\u0442 \u043D\u0430 \u0441\u043E\u043B\u0435\u043D\u0443\u044E \u043F\u0438\u0449\u0443.",
            "type": "\u0421\u0435\u0440\u043E\u0442\u043E\u043D\u0438\u043D - \u0424\u0438\u0437\u0438\u043E\u043B\u043E\u0433\u0438\u044F"
        },
        {
            "number": 103,
            "question": "\u0423 \u043C\u0435\u043D\u044F \u043C\u0430\u043B\u043E \u044D\u043D\u0435\u0440\u0433\u0438\u0438 \u0434\u043B\u044F \u0442\u0440\u0435\u043D\u0438\u0440\u043E\u0432\u043E\u043A.",
            "type": "\u0421\u0435\u0440\u043E\u0442\u043E\u043D\u0438\u043D - \u0424\u0438\u0437\u0438\u043E\u043B\u043E\u0433\u0438\u044F"
        },
        {
            "number": 104,
            "question": "\u042F \u0433\u0440\u0443\u0449\u0443.",
            "type": "\u0421\u0435\u0440\u043E\u0442\u043E\u043D\u0438\u043D - \u0424\u0438\u0437\u0438\u043E\u043B\u043E\u0433\u0438\u044F"
        },
        {
            "number": 105,
            "question": "\u0423 \u043C\u0435\u043D\u044F \u0445\u0440\u043E\u043D\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0442\u0440\u0435\u0432\u043E\u0436\u043D\u043E\u0441\u0442\u044C.",
            "type": "\u0421\u0435\u0440\u043E\u0442\u043E\u043D\u0438\u043D - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 106,
            "question": "\u042F \u043B\u0435\u0433\u043A\u043E \u0440\u0430\u0437\u0434\u0440\u0430\u0436\u0430\u044E\u0441\u044C.",
            "type": "\u0421\u0435\u0440\u043E\u0442\u043E\u043D\u0438\u043D - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 107,
            "question": "\u0423 \u043C\u0435\u043D\u044F \u0435\u0441\u0442\u044C \u0441\u0430\u043C\u043E\u0440\u0430\u0437\u0440\u0443\u0448\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043C\u044B\u0441\u043B\u0438.",
            "type": "\u0421\u0435\u0440\u043E\u0442\u043E\u043D\u0438\u043D - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 108,
            "question": "\u0423 \u043C\u0435\u043D\u044F \u0431\u044B\u043B\u0438 \u0441\u0443\u0438\u0446\u0438\u0434\u0430\u043B\u044C\u043D\u044B\u0435 \u043C\u044B\u0441\u043B\u0438.",
            "type": "\u0421\u0435\u0440\u043E\u0442\u043E\u043D\u0438\u043D - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 109,
            "question": "\u042F \u0441\u043A\u043B\u043E\u043D\u0435\u043D \u0441\u043B\u0438\u0448\u043A\u043E\u043C \u0437\u0430\u0446\u0438\u043A\u043B\u0438\u0432\u0430\u0442\u044C\u0441\u044F \u043D\u0430 \u0438\u0434\u0435\u044F\u0445.",
            "type": "\u0421\u0435\u0440\u043E\u0442\u043E\u043D\u0438\u043D - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 110,
            "question": "\u0418\u043D\u043E\u0433\u0434\u0430 \u044F \u043D\u0430\u0441\u0442\u043E\u043B\u044C\u043A\u043E \u0441\u0430\u043C\u043E\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0443\u044E\u0441\u044C, \u0447\u0442\u043E \u0441\u0442\u0430\u043D\u043E\u0432\u043B\u044E\u0441\u044C \u043D\u0435\u0433\u0438\u0431\u043A\u0438\u043C.",
            "type": "\u0421\u0435\u0440\u043E\u0442\u043E\u043D\u0438\u043D - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 111,
            "question": "\u041C\u043E\u0435 \u0432\u043E\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0437\u0430\u0445\u0432\u0430\u0442\u044B\u0432\u0430\u0435\u0442 \u043C\u0435\u043D\u044F.",
            "type": "\u0421\u0435\u0440\u043E\u0442\u043E\u043D\u0438\u043D - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 112,
            "question": "\u0421\u0442\u0440\u0430\u0445 \u043C\u0435\u043D\u044F \u0441\u043A\u043E\u0432\u044B\u0432\u0430\u0435\u0442.",
            "type": "\u0421\u0435\u0440\u043E\u0442\u043E\u043D\u0438\u043D - \u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C"
        },
        {
            "number": 113,
            "question": "\u042F \u043D\u0435 \u043C\u043E\u0433\u0443 \u043F\u0435\u0440\u0435\u0441\u0442\u0430\u0442\u044C \u0434\u0443\u043C\u0430\u0442\u044C \u043E \u0441\u043C\u044B\u0441\u043B\u0435 \u0436\u0438\u0437\u043D\u0438.",
            "type": "\u0421\u0435\u0440\u043E\u0442\u043E\u043D\u0438\u043D - \u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440"
        },
        {
            "number": 114,
            "question": "\u042F \u0431\u043E\u043B\u044C\u0448\u0435 \u043D\u0435 \u0445\u043E\u0447\u0443 \u0440\u0438\u0441\u043A\u043E\u0432\u0430\u0442\u044C.",
            "type": "\u0421\u0435\u0440\u043E\u0442\u043E\u043D\u0438\u043D - \u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440"
        },
        {
            "number": 115,
            "question": "\u041E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u0435 \u0441\u043C\u044B\u0441\u043B\u0430 \u0432 \u043C\u043E\u0435\u0439 \u0436\u0438\u0437\u043D\u0438 \u043F\u0440\u0438\u0447\u0438\u043D\u044F\u0435\u0442 \u043C\u043D\u0435 \u0431\u043E\u043B\u044C.",
            "type": "\u0421\u0435\u0440\u043E\u0442\u043E\u043D\u0438\u043D - \u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440"
        }
    ]
};

},{}]},["bw3CT","jvaAX"], "jvaAX", "parcelRequire94c2")

