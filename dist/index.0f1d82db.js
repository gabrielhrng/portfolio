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
})({"9oeQ7":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "22c4b4ff0f1d82db";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser */ /*::
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
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else if ('reload' in location) location.reload();
            else {
                // Web extension context
                var ext = typeof chrome === 'undefined' ? typeof browser === 'undefined' ? null : browser : chrome;
                if (ext && ext.runtime && ext.runtime.reload) ext.runtime.reload();
            }
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
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
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
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
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
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

},{}],"5l7HQ":[function(require,module,exports) {
/*!
* fullPage 4.0.6
* https://github.com/alvarotrigo/fullPage.js
*
* @license GPLv3 for open source use only
* or Fullpage Commercial License for commercial use
* http://alvarotrigo.com/fullPage/pricing/
*
* Copyright (C) 2018 http://alvarotrigo.com/fullPage - A project by Alvaro Trigo
*/ (function(global, factory) {
    module.exports = factory();
})(this, function() {
    'use strict';
    // https://tc39.github.io/ecma262/#sec-array.prototype.find
    if (!Array.prototype.find) Object.defineProperty(Array.prototype, 'find', {
        value: function value(predicate) {
            // 1. Let O be ? ToObject(this value).
            if (this == null) throw new TypeError('"this" is null or not defined');
            var o = Object(this); // 2. Let len be ? ToLength(? Get(O, "length")).
            var len = o.length >>> 0; // 3. If IsCallable(predicate) is false, throw a TypeError exception.
            if (typeof predicate !== 'function') throw new TypeError('predicate must be a function');
             // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
            var thisArg = arguments[1]; // 5. Let k be 0.
            var k = 0; // 6. Repeat, while k < len
            while(k < len){
                // a. Let Pk be ! ToString(k).
                // b. Let kValue be ? Get(O, Pk).
                // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
                // d. If testResult is true, return kValue.
                var kValue = o[k];
                if (predicate.call(thisArg, kValue, k, o)) return kValue;
                 // e. Increase k by 1.
                k++;
            } // 7. Return undefined.
            return undefined;
        }
    });
    // Production steps of ECMA-262, Edition 6, 22.1.2.1
    if (!Array.from) Array.from = function() {
        var toStr = Object.prototype.toString;
        var isCallable = function isCallable(fn) {
            return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
        };
        var toInteger = function toInteger(value) {
            var number = Number(value);
            if (isNaN(number)) return 0;
            if (number === 0 || !isFinite(number)) return number;
            return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
        };
        var maxSafeInteger = Math.pow(2, 53) - 1;
        var toLength = function toLength(value) {
            var len = toInteger(value);
            return Math.min(Math.max(len, 0), maxSafeInteger);
        }; // The length property of the from method is 1.
        return function from(arrayLike) {
            // 1. Let C be the this value.
            var C = this; // 2. Let items be ToObject(arrayLike).
            var items = Object(arrayLike); // 3. ReturnIfAbrupt(items).
            if (arrayLike == null) throw new TypeError('Array.from requires an array-like object - not null or undefined');
             // 4. If mapfn is undefined, then let mapping be false.
            var mapFn = arguments.length > 1 ? arguments[1] : void 0;
            var T;
            if (typeof mapFn !== 'undefined') {
                // 5. else
                // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
                if (!isCallable(mapFn)) throw new TypeError('Array.from: when provided, the second argument must be a function');
                 // 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.
                if (arguments.length > 2) T = arguments[2];
            } // 10. Let lenValue be Get(items, "length").
            // 11. Let len be ToLength(lenValue).
            var len = toLength(items.length); // 13. If IsConstructor(C) is true, then
            // 13. a. Let A be the result of calling the [[Construct]] internal method
            // of C with an argument list containing the single item len.
            // 14. a. Else, Let A be ArrayCreate(len).
            var A = isCallable(C) ? Object(new C(len)) : new Array(len); // 16. Let k be 0.
            var k = 0; // 17. Repeat, while k < len… (also steps a - h)
            var kValue;
            while(k < len){
                kValue = items[k];
                if (mapFn) A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
                else A[k] = kValue;
                k += 1;
            } // 18. Let putStatus be Put(A, "length", len, true).
            A.length = len; // 20. Return A.
            return A;
        };
    }();
    var win = window;
    var doc = document;
    var isTouchDevice = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/);
    var isMacDevice = /(Mac|iPhone|iPod|iPad)/i.test(win.navigator.userAgent); // @ts-ignore
    var isTouch = 'ontouchstart' in win || navigator.msMaxTouchPoints > 0 || navigator.maxTouchPoints; // taken from https://github.com/udacity/ud891/blob/gh-pages/lesson2-focus/07-modals-and-keyboard-traps/solution/modal.js
    var focusableElementsString = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]'; // cache common elements
    var FP = {
        test: {},
        shared: {}
    };
    var extensions = [
        'parallax',
        'scrollOverflowReset',
        'dragAndMove',
        'offsetSections',
        'fadingEffect',
        'responsiveSlides',
        'continuousHorizontal',
        'interlockedSlides',
        'scrollHorizontally',
        'resetSliders',
        'cards',
        'dropEffect',
        'waterEffect'
    ];
    /**
    * forEach polyfill for IE
    * https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach#Browser_Compatibility
    */ if (win.NodeList && !NodeList.prototype.forEach) NodeList.prototype.forEach = function(callback, thisArg) {
        thisArg = thisArg || window;
        for(var i = 0; i < this.length; i++)callback.call(thisArg, this[i], i, this);
    };
    if (typeof Object.assign != 'function') // Must be writable: true, enumerable: false, configurable: true
    Object.defineProperty(Object, 'assign', {
        value: function assign(target, varArgs) {
            if (target == null) // TypeError if undefined or null
            throw new TypeError('Cannot convert undefined or null to object');
            var to = Object(target);
            for(var index = 1; index < arguments.length; index++){
                var nextSource = arguments[index];
                if (nextSource != null) {
                    // Skip over if undefined or null
                    for(var nextKey in nextSource)// Avoid bugs when hasOwnProperty is shadowed
                    if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) to[nextKey] = nextSource[nextKey];
                }
            }
            return to;
        },
        writable: true,
        configurable: true
    });
    //utils
    /**
    * Shows a message in the console of the given type.
    */ function showError(type, text) {
        win.console && win.console[type] && win.console[type]('fullPage: ' + text);
    }
    function isVisible(el) {
        var style = win.getComputedStyle(el);
        return style.display !== 'none';
    }
    function getVisible(elements) {
        return Array.from(elements).filter(function(e) {
            return isVisible(e);
        });
    }
    /**
    * Equivalent of jQuery function $().
    */ function $1(selector, context) {
        context = arguments.length > 1 ? context : document;
        return context ? context.querySelectorAll(selector) : null;
    }
    /**
    * Extends a given Object properties and its childs.
    */ function deepExtend(out) {
        out = out || {};
        for(var i = 1, len = arguments.length; i < len; ++i){
            var obj = arguments[i];
            if (!obj) continue;
            for(var key in obj){
                if (!obj.hasOwnProperty(key) || key == '__proto__' || key == 'constructor') continue;
                 // based on https://javascriptweblog.wordpress.com/2011/08/08/fixing-the-javascript-typeof-operator/
                if (Object.prototype.toString.call(obj[key]) === '[object Object]') {
                    out[key] = deepExtend(out[key], obj[key]);
                    continue;
                }
                out[key] = obj[key];
            }
        }
        return out;
    }
    /**
    * Checks if the passed element contains the passed class.
    */ function hasClass(el, className) {
        if (el == null) return false;
        return el.classList.contains(className);
    }
    /**
    * Gets the window height. Crossbrowser.
    */ function getWindowHeight() {
        return 'innerHeight' in win ? win.innerHeight : doc.documentElement.offsetHeight;
    }
    /**
    * Gets the window width.
    */ function getWindowWidth() {
        return win.innerWidth;
    }
    /**
    * Set's the CSS properties for the passed item/s.
    * @param {NodeList|HTMLElement|Object} items
    * @param {Object} props css properties and values.
    */ function css(items, props) {
        items = getList(items);
        var key;
        for(key in props)if (props.hasOwnProperty(key)) {
            if (key !== null) for(var i = 0; i < items.length; i++){
                var item = items[i];
                item.style[key] = props[key];
            }
        }
        return items;
    }
    /**
    * Gets the previous element to the passed element.
    */ function prev1(item) {
        return item.previousElementSibling;
    }
    /**
    * Gets the next element to the passed element.
    */ function next1(item) {
        return item.nextElementSibling;
    }
    /**
    * Gets the last element from the passed list of elements.
    */ function last(item) {
        return item[item.length - 1];
    }
    /**
    * Gets index from the passed element.
    * @param {String} selector is optional.
    */ function index1(item, selector) {
        item = isArrayOrList(item) ? item[0] : item;
        var children = selector != null ? $1(selector, item.parentNode) : item.parentNode.childNodes;
        var num = 0;
        for(var i = 0; i < children.length; i++){
            if (children[i] == item) return num;
            if (children[i].nodeType == 1) num++;
        }
        return -1;
    }
    /**
    * Gets an iterable element for the passed element/s
    */ function getList(item) {
        return !isArrayOrList(item) ? [
            item
        ] : item;
    }
    /**
    * Adds the display=none property for the passed element/s
    */ function hide(el) {
        el = getList(el);
        for(var i = 0; i < el.length; i++)el[i].style.display = 'none';
        return el;
    }
    /**
    * Adds the display=block property for the passed element/s
    */ function show(el) {
        el = getList(el);
        for(var i = 0; i < el.length; i++)el[i].style.display = 'block';
        return el;
    }
    /**
    * Checks if the passed element is an iterable element or not
    */ function isArrayOrList(el) {
        return Object.prototype.toString.call(el) === '[object Array]' || Object.prototype.toString.call(el) === '[object NodeList]';
    }
    /**
    * Adds the passed class to the passed element/s
    */ function addClass(el, className) {
        el = getList(el);
        for(var i = 0; i < el.length; i++){
            var item = el[i];
            item.classList.add(className);
        }
        return el;
    }
    /**
    * Removes the passed class to the passed element/s
    * @param {String} `className` can be multiple classnames separated by whitespace
    */ function removeClass(el, className) {
        el = getList(el);
        var classNames = className.split(' ');
        for(var a = 0; a < classNames.length; a++){
            className = classNames[a];
            for(var i = 0; i < el.length; i++){
                var item = el[i];
                item.classList.remove(className);
            }
        }
        return el;
    }
    /**
    * Appends the given element ot the given parent.
    */ function appendTo(el, parent) {
        parent.appendChild(el);
    }
    /**
    Usage:

    var wrapper = document.createElement('div');
    wrapper.className = 'fp-slides';
    wrap($('.slide'), wrapper);

    https://jsfiddle.net/qwzc7oy3/15/ (vanilla)
    https://jsfiddle.net/oya6ndka/1/ (jquery equivalent)
    */ function wrap(toWrap, wrapper, isWrapAll) {
        var newParent;
        wrapper = wrapper || doc.createElement('div');
        for(var i = 0; i < toWrap.length; i++){
            var item = toWrap[i];
            if (isWrapAll && !i || !isWrapAll) {
                newParent = wrapper.cloneNode(true);
                item.parentNode.insertBefore(newParent, item);
            }
            newParent.appendChild(item);
        }
        return toWrap;
    }
    /**
    Usage:
    var wrapper = document.createElement('div');
    wrapper.className = 'fp-slides';
    wrap($('.slide'), wrapper);

    https://jsfiddle.net/qwzc7oy3/27/ (vanilla)
    https://jsfiddle.net/oya6ndka/4/ (jquery equivalent)
    */ function wrapAll(toWrap, wrapper) {
        wrap(toWrap, wrapper, true);
    }
    /**
    * Usage:
    * unwrap(document.querySelector('#pepe'));
    * unwrap(element);
    *
    * https://jsfiddle.net/szjt0hxq/1/
    *
    */ function unwrap(wrapper) {
        var wrapperContent = doc.createDocumentFragment();
        while(wrapper.firstChild)wrapperContent.appendChild(wrapper.firstChild);
        wrapper.parentNode.replaceChild(wrapperContent, wrapper);
    }
    /**
    * http://stackoverflow.com/questions/22100853/dom-pure-javascript-solution-to-jquery-closest-implementation
    * Returns the element or `false` if there's none
    */ function closest(el, selector) {
        if (el && el.nodeType === 1) {
            if (matches(el, selector)) return el;
            return closest(el.parentNode, selector);
        }
        return null;
    }
    /**
    * Places one element (rel) after another one or group of them (reference).
    * @param {HTMLElement} reference
    * @param {HTMLElement|NodeList|String|Array} el
    * https://jsfiddle.net/9s97hhzv/1/
    */ function after(reference, el) {
        insertBefore(reference, reference.nextSibling, el);
    }
    /**
    * Places one element (rel) before another one or group of them (reference).
    * @param {HTMLElement} reference
    * @param {HTMLElement|NodeList|String|Array} el
    * https://jsfiddle.net/9s97hhzv/1/
    */ function before(reference, el) {
        insertBefore(reference, reference, el);
    }
    /**
    * Based in https://stackoverflow.com/a/19316024/1081396
    * and https://stackoverflow.com/a/4793630/1081396
    */ function insertBefore(reference, beforeElement, el) {
        if (!isArrayOrList(el)) {
            if (typeof el == 'string') el = createElementFromHTML(el);
            el = [
                el
            ];
        }
        for(var i = 0; i < el.length; i++)reference.parentNode.insertBefore(el[i], beforeElement);
    } //http://stackoverflow.com/questions/3464876/javascript-get-window-x-y-position-for-scroll
    function getScrollTop(options) {
        if (typeof options !== 'undefined' && options.fitToSection) return doc.body.scrollTop;
        var docElement = doc.documentElement;
        return (win.pageYOffset || docElement.scrollTop) - (docElement.clientTop || 0);
    }
    /**
    * Gets the siblings of the passed element
    */ function siblings1(el) {
        return Array.prototype.filter.call(el.parentNode.children, function(child) {
            return child !== el;
        });
    }
    function preventDefault(event) {
        event.preventDefault();
    }
    function getAttr(el, attr) {
        return el.getAttribute(attr);
    }
    function docAddEvent(event, callback, options) {
        doc.addEventListener(event, callback, options === 'undefined' ? null : options);
    }
    function windowAddEvent(event, callback, options) {
        win.addEventListener(event, callback, options === 'undefined' ? null : options);
    }
    function docRemoveEvent(event, callback, options) {
        doc.removeEventListener(event, callback, options === 'undefined' ? null : options);
    }
    function windowRemoveEvent(event, callback, options) {
        win.removeEventListener(event, callback, options === 'undefined' ? null : options);
    }
    /**
    * Determines whether the passed item is of function type.
    */ function isFunction(item) {
        if (typeof item === 'function') return true;
        var type = Object.prototype.toString.call(item);
        return type === '[object Function]' || type === '[object GeneratorFunction]';
    }
    /**
    * Trigger custom events
    */ function trigger(el, eventName, data) {
        var event;
        data = typeof data === 'undefined' ? {} : data; // Native
        if (typeof win.CustomEvent === "function") event = new CustomEvent(eventName, {
            detail: data
        });
        else {
            event = doc.createEvent('CustomEvent');
            event.initCustomEvent(eventName, true, true, data);
        }
        el.dispatchEvent(event);
    }
    /**
    * Polyfill of .matches()
    */ function matches(el, selector) {
        return (el.matches || el.matchesSelector || el.msMatchesSelector || el.mozMatchesSelector || el.webkitMatchesSelector || el.oMatchesSelector).call(el, selector);
    }
    /**
    * Toggles the visibility of the passed element el.
    */ function toggle(el, value) {
        if (typeof value === "boolean") for(var i = 0; i < el.length; i++)el[i].style.display = value ? 'block' : 'none';
         //we don't use it in other way, so no else :)
        return el;
    }
    /**
    * Creates a HTMLElement from the passed HTML string.
    * https://stackoverflow.com/a/494348/1081396
    */ function createElementFromHTML(htmlString) {
        var div = doc.createElement('div');
        div.innerHTML = htmlString.trim(); // Change this to div.childNodes to support multiple top-level nodes
        return div.firstChild;
    }
    /**
    * Removes the passed item/s from the DOM.
    */ function remove1(items) {
        items = getList(items);
        for(var i = 0; i < items.length; i++){
            var item = items[i];
            if (item && item.parentElement) item.parentNode.removeChild(item);
        }
    } //https://jsfiddle.net/w1rktecz/
    function untilAll(item, selector, fn) {
        var sibling = item[fn];
        var siblings = [];
        while(sibling){
            if (matches(sibling, selector) || selector == null) siblings.push(sibling);
            sibling = sibling[fn];
        }
        return siblings;
    }
    /**
    * Gets all next elements matching the passed selector.
    */ function nextAll(item, selector) {
        return untilAll(item, selector, 'nextElementSibling');
    }
    /**
    * Gets all previous elements matching the passed selector.
    */ function prevAll(item, selector) {
        return untilAll(item, selector, 'previousElementSibling');
    }
    /**
    * Converts an object to an array.
    */ function toArray(objectData) {
        return Object.keys(objectData).map(function(key) {
            return objectData[key];
        });
    }
    function getLast(items) {
        return items[items.length - 1];
    }
    /**
    * Gets the average of the last `number` elements of the given array.
    */ function getAverage(elements, number) {
        var sum = 0; //taking `number` elements from the end to make the average, if there are not enought, 1
        var lastElements = elements.slice(Math.max(elements.length - number, 1));
        for(var i = 0; i < lastElements.length; i++)sum = sum + lastElements[i];
        return Math.ceil(sum / number);
    }
    /**
    * Sets the value for the given attribute from the `data-` attribute with the same suffix
    * ie: data-srcset ==> srcset  |  data-src ==> src
    */ function setSrc(element, attribute) {
        element.setAttribute(attribute, getAttr(element, 'data-' + attribute));
        element.removeAttribute('data-' + attribute);
    }
    function getParentsUntil(item, topParentSelector) {
        var parents = [
            item
        ];
        do {
            item = item.parentNode;
            parents.push(item);
        }while (!matches(item, topParentSelector))
        return parents;
    } //utils are public, so we can use it wherever we want
    // @ts-ignore
    window["fp_utils"] = {
        "$": $1,
        "deepExtend": deepExtend,
        "hasClass": hasClass,
        "getWindowHeight": getWindowHeight,
        "css": css,
        "prev": prev1,
        "next": next1,
        "last": last,
        "index": index1,
        "getList": getList,
        "hide": hide,
        "show": show,
        "isArrayOrList": isArrayOrList,
        "addClass": addClass,
        "removeClass": removeClass,
        "appendTo": appendTo,
        "wrap": wrap,
        "wrapAll": wrapAll,
        "unwrap": unwrap,
        "closest": closest,
        "after": after,
        "before": before,
        "insertBefore": insertBefore,
        "getScrollTop": getScrollTop,
        "siblings": siblings1,
        "preventDefault": preventDefault,
        "isFunction": isFunction,
        "trigger": trigger,
        "matches": matches,
        "toggle": toggle,
        "createElementFromHTML": createElementFromHTML,
        "remove": remove1,
        // "filter": filter,
        "untilAll": untilAll,
        "nextAll": nextAll,
        "prevAll": prevAll,
        "showError": showError
    };
    function _typeof(obj1) {
        if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function(obj) {
            return typeof obj;
        };
        else _typeof = function(obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };
        return _typeof(obj1);
    }
    var EventEmitter = {
        events: {},
        on: function on(event, listener) {
            var _this = this;
            if (_typeof(this.events[event]) !== 'object') this.events[event] = [];
            this.events[event].push(listener);
            return function() {
                return _this.removeListener(event, listener);
            };
        },
        removeListener: function removeListener(event, listener) {
            if (_typeof(this.events[event]) === 'object') {
                var idx = this.events[event].indexOf(listener);
                if (idx > -1) this.events[event].splice(idx, 1);
            }
        },
        emit: function emit(event) {
            var _this2 = this;
            for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)args[_key - 1] = arguments[_key];
            if (_typeof(this.events[event]) === 'object') this.events[event].forEach(function(listener) {
                return listener.apply(_this2, args);
            });
        },
        once: function once(event, listener) {
            var _this3 = this;
            var remove = this.on(event, function() {
                remove();
                for(var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++)args[_key2] = arguments[_key2];
                listener.apply(_this3, args);
            });
        }
    };
    var state = {
        numSections: 0,
        numSlides: 0,
        slides: [],
        sections: [],
        activeSection: null,
        scrollTrigger: null,
        isBeyondFullpage: false,
        aboutToScrollToFullPage: false,
        slideMoving: false,
        isResizing: false,
        isScrolling: false,
        lastScrolledDestiny: undefined,
        lastScrolledSlide: undefined,
        activeAnimation: false,
        canScroll: true,
        touchDirection: 'none',
        wheelDirection: 'none',
        isGrabbing: false,
        isUsingWheel: false,
        isWindowFocused: true,
        previousDestTop: 0,
        windowsHeight: getWindowHeight(),
        isDoingContinousVertical: false,
        timeouts: {},
        scrollY: 0,
        scrollX: 0
    }; // @ts-ignore
    win.state = state;
    function setState(props) {
        Object.assign(state, props);
    }
    function getState() {
        return state;
    }
    EventEmitter.on('bindEvents', bindEvents$d);
    function bindEvents$d() {
        //Scrolls to the section when clicking the navigation bullet
        //simulating the jQuery .on('click') event using delegation
        [
            'click',
            'touchstart'
        ].forEach(function(eventName) {
            docAddEvent(eventName, delegatedEvents);
        });
        windowAddEvent('focus', focusHandler);
        internalEvents();
    }
    function internalEvents() {
        EventEmitter.on('onDestroy', onDestroy$9);
    }
    function delegatedEvents(e) {
        EventEmitter.emit('onClickOrTouch', {
            e: e,
            target: e.target
        });
    }
    function onDestroy$9() {
        [
            'click',
            'touchstart'
        ].forEach(function(eventName) {
            docRemoveEvent(eventName, delegatedEvents);
        });
    } // changing isWindowFocused to true on focus event
    function focusHandler() {
        setState({
            isWindowFocused: true
        });
    }
    // keeping central set of classnames and selectors
    var WRAPPER = 'fullpage-wrapper';
    var WRAPPER_SEL = '.' + WRAPPER; // slimscroll
    var RESPONSIVE = 'fp-responsive';
    var NO_TRANSITION = 'fp-notransition';
    var DESTROYED = 'fp-destroyed';
    var ENABLED = 'fp-enabled';
    var VIEWING_PREFIX = 'fp-viewing';
    var ACTIVE = 'active';
    var ACTIVE_SEL = '.' + ACTIVE;
    var COMPLETELY = 'fp-completely';
    var COMPLETELY_SEL = '.' + COMPLETELY;
    var SNAPS = 'fp-snaps'; // section
    var SECTION_DEFAULT_SEL = '.section';
    var SECTION = 'fp-section';
    var SECTION_SEL = '.' + SECTION;
    var SECTION_ACTIVE_SEL = SECTION_SEL + ACTIVE_SEL;
    var TABLE_CELL = 'fp-tableCell';
    var TABLE_CELL_SEL = '.' + TABLE_CELL;
    var AUTO_HEIGHT = 'fp-auto-height';
    var AUTO_HEIGHT_SEL = '.' + AUTO_HEIGHT;
    var AUTO_HEIGHT_RESPONSIVE = 'fp-auto-height-responsive';
    var AUTO_HEIGHT_RESPONSIVE_SEL = '.' + AUTO_HEIGHT_RESPONSIVE;
    var NORMAL_SCROLL = 'fp-normal-scroll';
    var SECTION_NAV = 'fp-nav';
    var SECTION_NAV_SEL = '#' + SECTION_NAV;
    var SECTION_NAV_TOOLTIP = 'fp-tooltip';
    var SECTION_NAV_TOOLTIP_SEL = '.' + SECTION_NAV_TOOLTIP;
    var SHOW_ACTIVE_TOOLTIP = 'fp-show-active'; // slide
    var SLIDE_DEFAULT_SEL = '.slide';
    var SLIDE = 'fp-slide';
    var SLIDE_SEL = '.' + SLIDE;
    var SLIDE_ACTIVE_SEL = SLIDE_SEL + ACTIVE_SEL;
    var SLIDES_WRAPPER = 'fp-slides';
    var SLIDES_WRAPPER_SEL = '.' + SLIDES_WRAPPER;
    var SLIDES_CONTAINER = 'fp-slidesContainer';
    var SLIDES_CONTAINER_SEL = '.' + SLIDES_CONTAINER;
    var TABLE = 'fp-table';
    var OVERFLOW = 'fp-overflow';
    var OVERFLOW_SEL = '.' + OVERFLOW; // slide nav
    var SLIDES_NAV = 'fp-slidesNav';
    var SLIDES_NAV_SEL = '.' + SLIDES_NAV;
    var SLIDES_NAV_LINK_SEL = SLIDES_NAV_SEL + ' a';
    var SLIDES_STYLED_ARROW = 'fp-arrow';
    var SLIDES_ARROW = 'fp-controlArrow';
    var SLIDES_ARROW_SEL = '.' + SLIDES_ARROW;
    var SLIDES_PREV = 'fp-prev';
    var SLIDES_PREV_SEL = '.' + SLIDES_PREV;
    var SLIDES_ARROW_PREV_SEL = SLIDES_ARROW_SEL + SLIDES_PREV_SEL;
    var SLIDES_NEXT = 'fp-next';
    var SLIDES_NEXT_SEL = '.' + SLIDES_NEXT;
    var SLIDES_ARROW_NEXT_SEL = SLIDES_ARROW_SEL + SLIDES_NEXT_SEL;
    var defaultOptions = {
        //navigation
        menu: false,
        anchors: [],
        lockAnchors: false,
        navigation: false,
        navigationPosition: 'right',
        navigationTooltips: [],
        showActiveTooltip: false,
        slidesNavigation: false,
        slidesNavPosition: 'bottom',
        scrollBar: false,
        hybrid: false,
        licenseKey: '',
        credits: {
            "enabled": true,
            "label": 'Made with fullPage.js',
            "position": 'right'
        },
        //scrolling
        css3: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        fitToSection: true,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        continuousHorizontal: false,
        scrollHorizontally: false,
        interlockedSlides: false,
        dragAndMove: false,
        offsetSections: false,
        resetSliders: false,
        fadingEffect: false,
        normalScrollElements: null,
        scrollOverflow: true,
        scrollOverflowReset: false,
        touchSensitivity: 5,
        touchWrapper: null,
        bigSectionsDestination: null,
        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,
        allowCorrectDirection: false,
        //design
        scrollOverflowMacStyle: true,
        controlArrows: true,
        controlArrowsHTML: [
            '<div class="' + SLIDES_STYLED_ARROW + '"></div>',
            '<div class="' + SLIDES_STYLED_ARROW + '"></div>'
        ],
        controlArrowColor: '#fff',
        verticalCentered: true,
        sectionsColor: [],
        paddingTop: 0,
        paddingBottom: 0,
        fixedElements: null,
        responsive: 0,
        //backwards compabitility with responsiveWiddth
        responsiveWidth: 0,
        responsiveHeight: 0,
        responsiveSlides: false,
        parallax: false,
        parallaxOptions: {
            type: 'reveal',
            percentage: 62,
            property: 'translate'
        },
        cards: false,
        cardsOptions: {
            perspective: 100,
            fadeContent: true,
            fadeBackground: true
        },
        //Custom selectors
        sectionSelector: SECTION_DEFAULT_SEL,
        slideSelector: SLIDE_DEFAULT_SEL,
        //events
        afterLoad: null,
        beforeLeave: null,
        onLeave: null,
        afterRender: null,
        afterResize: null,
        afterReBuild: null,
        afterSlideLoad: null,
        onSlideLeave: null,
        afterResponsive: null,
        onScrollOverflow: null,
        lazyLoading: true,
        observer: true
    };
    var container1 = null;
    var g_initialAnchorsInDom = false;
    var originals = deepExtend({}, defaultOptions); //deep copy
    var g_options = null;
    function getInitialAnchorsInDom() {
        return g_initialAnchorsInDom;
    }
    function setContainer(value) {
        container1 = value;
    }
    function getContainer(value) {
        return container1;
    }
    function getOptions() {
        return g_options || defaultOptions;
    }
    function setOptions(options) {
        g_options = deepExtend({}, defaultOptions, options);
        originals = Object.assign({}, g_options);
    }
    function getOriginals() {
        return originals;
    }
    function setOption(name, value) {
        defaultOptions[name] = value;
    }
    /*
    * Sets the state for a variable with multiple states (original, and temporal)
    * Some variables such as `autoScrolling` or `recordHistory` might change automatically its state when using `responsive` or `autoScrolling:false`.
    * This function is used to keep track of both states, the original and the temporal one.
    * If type is not 'internal', then we assume the user is globally changing the variable.
    */ function setVariableState(variable, value, type) {
        g_options[variable] = value;
        if (type !== 'internal') originals[variable] = value;
    }
    /**
    * Setting options from DOM elements if they are not provided.
    */ function setOptionsFromDOM() {
        //no anchors option? Checking for them in the DOM attributes
        if (!getOptions().anchors.length) {
            var anchorsAttribute = '[data-anchor]';
            var anchors = $1(getOptions().sectionSelector.split(',').join(anchorsAttribute + ',') + anchorsAttribute, container1);
            if (anchors.length && anchors.length === $1(getOptions().sectionSelector, container1).length) {
                g_initialAnchorsInDom = true;
                anchors.forEach(function(item) {
                    getOptions().anchors.push(getAttr(item, 'data-anchor').toString());
                });
            }
        } //no tooltips option? Checking for them in the DOM attributes
        if (!getOptions().navigationTooltips.length) {
            var tooltipsAttribute = '[data-tooltip]';
            var tooltips = $1(getOptions().sectionSelector.split(',').join(tooltipsAttribute + ',') + tooltipsAttribute, container1);
            if (tooltips.length) tooltips.forEach(function(item) {
                getOptions().navigationTooltips.push(getAttr(item, 'data-tooltip').toString());
            });
        }
    }
    var plainItem = function plainItem(panel) {
        this.anchor = panel.anchor;
        this.item = panel.item;
        this.index = panel.index();
        this.isLast = this.index === panel.item.parentElement.querySelectorAll(panel.selector).length - 1;
        this.isFirst = !this.index;
        this.isActive = panel.isActive;
    };
    /**
    * Item. Slide or Section objects share the same properties.
    */ var Item = function Item(el, selector) {
        this.parent = this.parent || null;
        this.selector = selector;
        this.anchor = getAttr(el, 'data-anchor') || getOptions().anchors[index1(el, getOptions().sectionSelector)];
        this.item = el;
        this.isVisible = isVisible(el);
        this.isActive = hasClass(el, ACTIVE);
        this.hasScroll = hasClass(el, OVERFLOW);
        this.isSection = selector === getOptions().sectionSelector;
        this.container = closest(el, SLIDES_CONTAINER_SEL) || closest(el, WRAPPER_SEL);
        this.index = function() {
            return this.siblings().indexOf(this);
        };
    };
    Item.prototype.siblings = function() {
        if (this.isSection) {
            if (this.isVisible) return state.sections;
            else return state.sectionsIncludingHidden;
        }
        return this.parent ? this.parent.slides : 0;
    };
    Item.prototype.prev = function() {
        var siblings = this.siblings();
        var currentIndex = this.isSection ? siblings.indexOf(this) : this.parent.slides.indexOf(this);
        var prevIndex = currentIndex - 1;
        if (prevIndex >= 0) return siblings[prevIndex];
        return null;
    };
    Item.prototype.next = function() {
        var siblings = this.siblings();
        var currentIndex = this.isSection ? siblings.indexOf(this) : this.parent.slides.indexOf(this);
        var nextIndex = currentIndex + 1;
        if (nextIndex < siblings.length) return siblings[nextIndex];
        return null;
    };
    Item.prototype.getSiblings = function() {
        if (this.isSection) return state.sections;
        return state.panels;
    };
    function getNodes(panels) {
        return panels.map(function(panel) {
            return panel.item;
        });
    }
    function getPanelByElement(panels, el) {
        return panels.find(function(panel) {
            return panel.item === el;
        });
    }
    var Section = function Section(el) {
        plainItem.call(this, el);
    };
    var Slide = function Slide(el) {
        plainItem.call(this, el);
    };
    /**
    * Gets the active slide (or section) for the given section
    */ function getSlideOrSection(destiny) {
        var slide = $1(SLIDE_ACTIVE_SEL, destiny);
        if (slide.length) destiny = slide[0];
        return destiny;
    }
    function isFullPageAbove() {
        return getContainer().getBoundingClientRect().bottom >= 0;
    }
    /**
    * Gets the scrolling settings depending on the plugin autoScrolling option
    */ function getScrollSettings(top) {
        var options = getOptions();
        var position;
        var element; //top property animation
        if (options.autoScrolling && !options.scrollBar) {
            position = -top;
            element = $1(WRAPPER_SEL)[0];
        } else if (options.fitToSection) {
            position = top;
            element = doc.body;
        } else {
            position = top;
            element = window;
        }
        return {
            options: position,
            element: element
        };
    }
    /**
    * Scrolls the page / slider the given number of pixels.
    * It will do it one or another way dependiong on the library's config.
    */ function setScrolling(element, val) {
        if (!getOptions().autoScrolling || getOptions().scrollBar || element.self != window && hasClass(element, SLIDES_WRAPPER)) {
            //scrolling horizontally through the slides?
            if (element.self != window && hasClass(element, SLIDES_WRAPPER)) element.scrollLeft = val;
            else element.scrollTo(0, val);
        } else element.style.top = val + 'px';
    }
    /**
    * Adds transition animations for the given element
    */ function addAnimation(element) {
        var transition = 'transform ' + getOptions().scrollingSpeed + 'ms ' + getOptions().easingcss3;
        removeClass(element, NO_TRANSITION);
        return css(element, {
            '-webkit-transition': transition,
            'transition': transition
        });
    }
    /**
    * Retuns `up` or `down` depending on the scrolling movement to reach its destination
    * from the current section.
    */ function getYmovement(activeSection, destiny) {
        var fromIndex = activeSection.index();
        var toIndex = index1(destiny, SECTION_SEL);
        if (fromIndex == toIndex) return 'none';
        if (fromIndex > toIndex) return 'up';
        return 'down';
    }
    /**
    * Remove transition animations for the given element
    */ function removeAnimation(element) {
        return addClass(element, NO_TRANSITION);
    }
    /**
    * Returns the cross-browser transform string.
    */ function getTransforms(translate3d) {
        return {
            '-webkit-transform': translate3d,
            '-moz-transform': translate3d,
            '-ms-transform': translate3d,
            'transform': translate3d
        };
    }
    var silentScrollId;
    /**
    * Adds a css3 transform property to the container class with or without animation depending on the animated param.
    */ function transformContainer(translate3d, animated) {
        if (animated) addAnimation(getContainer());
        else removeAnimation(getContainer());
        clearTimeout(silentScrollId);
        css(getContainer(), getTransforms(translate3d));
        FP.test.translate3d = translate3d; //syncronously removing the class after the animation has been applied.
        silentScrollId = setTimeout(function() {
            removeClass(getContainer(), NO_TRANSITION);
        }, 10);
    }
    /**
    * Scrolls silently (with no animation) the page to the given Y position.
    */ function silentScroll(top) {
        // The first section can have a negative value in iOS 10. Not quite sure why: -0.0142822265625
        // that's why we round it to 0.
        var roundedTop = Math.round(top);
        if (getOptions().css3 && getOptions().autoScrolling && !getOptions().scrollBar) {
            var translate3d = 'translate3d(0px, -' + roundedTop + 'px, 0px)';
            transformContainer(translate3d, false);
        } else if (getOptions().autoScrolling && !getOptions().scrollBar) {
            css(getContainer(), {
                'top': -roundedTop + 'px'
            });
            FP.test.top = -roundedTop + 'px';
        } else {
            var scrollSettings = getScrollSettings(roundedTop);
            setScrolling(scrollSettings.element, scrollSettings.options);
        }
    }
    FP.setScrollingSpeed = setScrollingSpeed;
    /**
    * Defines the scrolling speed
    */ function setScrollingSpeed(value, type) {
        setVariableState('scrollingSpeed', value, type);
    }
    //@ts-check
    var g_animateScrollId;
    EventEmitter.on('bindEvents', bindEvents$c);
    function bindEvents$c() {
        EventEmitter.on('onDestroy', onDestroy$8);
    }
    function onDestroy$8() {
        clearTimeout(g_animateScrollId);
    }
    /**
    * Simulates the animated scrollTop of jQuery. Used when css3:false or scrollBar:true or autoScrolling:false
    * http://stackoverflow.com/a/16136789/1081396
    */ function scrollTo(element, to, duration, callback) {
        var start = getScrolledPosition(element);
        var change = to - start;
        var currentTime = 0;
        var increment = 20;
        setState({
            activeAnimation: true
        });
        var isCallbackFired = false; // Making sure we can trigger a scroll animation
        // when css scroll snap is active. Temporally disabling it.
        if (element === doc.body) css(doc.body, {
            'scroll-snap-type': 'none'
        });
        var animateScroll1 = function animateScroll() {
            if (state.activeAnimation) {
                //in order to stope it from other function whenever we want
                var val = to;
                currentTime += increment;
                if (duration) // @ts-ignore
                val = win.fp_easings[getOptions().easing](currentTime, start, change, duration);
                setScrolling(element, val);
                if (currentTime < duration) {
                    clearTimeout(g_animateScrollId);
                    g_animateScrollId = setTimeout(animateScroll, increment);
                } else if (typeof callback !== 'undefined' && !isCallbackFired) {
                    callback();
                    isCallbackFired = true;
                }
            } else if (currentTime < duration && !isCallbackFired) {
                callback();
                isCallbackFired = true;
            }
        };
        animateScroll1();
    }
    /**
    * Getting the position of the element to scroll when using jQuery animations
    */ function getScrolledPosition(element) {
        var position; //is not the window element and is a slide?
        if (element.self != win && hasClass(element, SLIDES_WRAPPER)) position = element.scrollLeft;
        else if (!getOptions().autoScrolling || getOptions().scrollBar) position = getScrollTop(getOptions());
        else position = element.offsetTop;
         //gets the top property of the wrapper
        return position;
    }
    /**
    * Makes sure to only create a Panel object if the element exist
    */ function nullOrSection(el) {
        if (el && !el.item) return new Section(new SectionPanel(el));
        return el ? new Section(el) : null;
    }
    function nullOrSlide(el) {
        return el ? new Slide(el) : null;
    }
    /**
    * Dispatch events & callbacks
    */ function fireCallback1(eventName, v) {
        var eventData = getEventData(eventName, v);
        trigger(getContainer(), eventName, eventData);
        if (getOptions()[eventName].apply(eventData[Object.keys(eventData)[0]], toArray(eventData)) === false) return false;
        return true;
    }
    /**
    * Gets the event's data for the given event on the right format.
    */ function getEventData(eventName, v) {
        //using functions to run only the necessary bits within the object
        var paramsPerEvent = {
            afterRender: function afterRender() {
                return {
                    section: nullOrSection(getState().activeSection),
                    slide: nullOrSlide(getState().activeSection.activeSlide)
                };
            },
            onLeave: function onLeave() {
                return {
                    origin: nullOrSection(v.items.origin),
                    destination: nullOrSection(v.items.destination),
                    direction: v.direction,
                    trigger: getState().scrollTrigger
                };
            },
            afterLoad: function afterLoad() {
                return paramsPerEvent.onLeave();
            },
            afterSlideLoad: function afterSlideLoad() {
                return {
                    section: nullOrSection(v.items.section),
                    origin: nullOrSection(v.items.origin),
                    destination: nullOrSection(v.items.destination),
                    direction: v.direction,
                    trigger: getState().scrollTrigger
                };
            },
            onSlideLeave: function onSlideLeave() {
                return paramsPerEvent.afterSlideLoad();
            },
            beforeLeave: function beforeLeave() {
                return paramsPerEvent.onLeave();
            },
            onScrollOverflow: function onScrollOverflow() {
                return {
                    section: nullOrSection(getState().activeSection),
                    slide: nullOrSlide(getState().activeSection.activeSlide),
                    position: v.position,
                    direction: v.direction
                };
            }
        };
        return paramsPerEvent[eventName]();
    }
    /**
    * Plays video and audio elements.
    */ function playMedia(destiny) {
        var panel = getSlideOrSection(destiny); //playing HTML5 media elements
        $1('video, audio', panel).forEach(function(element) {
            if (element.hasAttribute('data-autoplay') && typeof element.play === 'function') element.play();
        }); //youtube videos
        $1('iframe[src*="youtube.com/embed/"]', panel).forEach(function(element) {
            if (element.hasAttribute('data-autoplay')) playYoutube(element);
             //in case the URL was not loaded yet. On page load we need time for the new URL (with the API string) to load.
            element.onload = function() {
                if (element.hasAttribute('data-autoplay')) playYoutube(element);
            };
        });
    }
    /**
    * Plays a youtube video
    */ function playYoutube(element) {
        element.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
    }
    /**
    * Stops video and audio elements.
    */ function stopMedia(destiny) {
        var panel = getSlideOrSection(destiny); //stopping HTML5 media elements
        $1('video, audio', panel).forEach(function(element) {
            if (!element.hasAttribute('data-keepplaying') && typeof element.pause === 'function') element.pause();
        }); //youtube videos
        $1('iframe[src*="youtube.com/embed/"]', panel).forEach(function(element) {
            if (/youtube\.com\/embed\//.test(getAttr(element, 'src')) && !element.hasAttribute('data-keepplaying')) element.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
        });
    }
    /*
    * Enables the Youtube videos API so we can control their flow if necessary.
    */ function enableYoutubeAPI() {
        $1('iframe[src*="youtube.com/embed/"]', getContainer()).forEach(function(item) {
            addURLParam(item, 'enablejsapi=1');
        });
    }
    /**
    * Adds a new parameter and its value to the `src` of a given element
    */ function addURLParam(element, newParam) {
        var originalSrc = getAttr(element, 'src');
        element.setAttribute('src', originalSrc + getUrlParamSign(originalSrc) + newParam);
    }
    /*
    * Returns the prefix sign to use for a new parameter in an existen URL.
    *
    * @return {String}  ? | &
    */ function getUrlParamSign(url) {
        return !/\?/.test(url) ? '?' : '&';
    }
    /**
    * Lazy loads image, video and audio elements.
    */ function lazyLoad(destiny) {
        if (!getOptions().lazyLoading) return;
        var panel = getSlideOrSection(destiny);
        $1('img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]', panel).forEach(function(element) {
            [
                'src',
                'srcset'
            ].forEach(function(type) {
                var attribute = getAttr(element, 'data-' + type);
                if (attribute != null && attribute) {
                    setSrc(element, type);
                    element.addEventListener('load', function() {});
                }
            });
            if (matches(element, 'source')) {
                var elementToPlay = closest(element, 'video, audio');
                if (elementToPlay) {
                    elementToPlay.load();
                    elementToPlay.onloadeddata = function() {};
                }
            }
        });
    }
    var $body = null;
    var $html = null;
    var $htmlBody = null; // caching common elements
    function setCache() {
        $body = $1('body')[0];
        $html = $1('html')[0];
        $htmlBody = $1('html, body');
    }
    /**
    * Sets a class for the body of the page depending on the active section / slide
    */ function setBodyClass() {
        var section = getState().activeSection.item;
        var slide = getState().activeSection.activeSlide;
        var sectionAnchor = getAnchor(section);
        var text = String(sectionAnchor);
        if (slide) {
            var slideAnchor = getAnchor(slide.item);
            text = text + '-' + slideAnchor;
        } //changing slash for dash to make it a valid CSS style
        text = text.replace('/', '-').replace('#', ''); //removing previous anchor classes
        var classRe = new RegExp('\\b\\s?' + VIEWING_PREFIX + '-[^\\s]+\\b', "g");
        $body.className = $body.className.replace(classRe, ''); //adding the current anchor
        addClass($body, VIEWING_PREFIX + '-' + text);
    }
    /**
    * Gets the anchor for the given slide / section. Its index will be used if there's none.
    */ function getAnchor(element) {
        if (!element) return null;
        var anchor = getAttr(element, 'data-anchor');
        var elementIndex = index1(element); //Slide without anchor link? We take the index instead.
        if (anchor == null) anchor = elementIndex;
        return anchor;
    }
    /**
    * Sets the state of the website depending on the active section/slide.
    * It changes the URL hash when needed and updates the body class.
    */ function setPageStatus(slideIndex, slideAnchor, anchorLink) {
        var sectionHash = '';
        if (getOptions().anchors.length && !getOptions().lockAnchors) {
            //isn't it the first slide?
            if (slideIndex) {
                if (anchorLink != null) sectionHash = anchorLink;
                 //slide without anchor link? We take the index instead.
                if (slideAnchor == null) slideAnchor = slideIndex;
                setState({
                    lastScrolledSlide: slideAnchor
                });
                setUrlHash(sectionHash + '/' + slideAnchor); //first slide won't have slide anchor, just the section one
            } else if (slideIndex != null) {
                setState({
                    lastScrolledSlide: slideAnchor
                });
                setUrlHash(anchorLink);
            } else setUrlHash(anchorLink);
        }
        setBodyClass();
    }
    /**
    * Sets the URL hash.
    */ function setUrlHash(url) {
        if (getOptions().recordHistory) location.hash = url;
        else //Mobile Chrome doesn't work the normal way, so... lets use HTML5 for phones :)
        if (isTouchDevice || isTouch) win.history.replaceState(undefined, undefined, '#' + url);
        else {
            var baseUrl = win.location.href.split('#')[0];
            win.location.replace(baseUrl + '#' + url);
        }
    }
    /**
    * Gets the name for screen readers for a section/slide navigation bullet.
    */ function getBulletLinkName(i, defaultName, item) {
        var anchor = defaultName === 'Section' ? getOptions().anchors[i] : getAttr(item, 'data-anchor');
        return encodeURI(getOptions().navigationTooltips[i] || anchor || defaultName + ' ' + (i + 1));
    }
    function slideBulletHandler(e) {
        preventDefault(e);
        setState({
            scrollTrigger: 'horizontalNav'
        });
        /*jshint validthis:true */ var sectionElem = closest(this, SECTION_SEL);
        var slides = $1(SLIDES_WRAPPER_SEL, closest(this, SECTION_SEL))[0];
        var section = getPanelByElement(getState().sections, sectionElem);
        var destiny = section.slides[index1(closest(this, 'li'))];
        EventEmitter.emit('landscapeScroll', {
            slides: slides,
            destination: destiny.item
        });
    }
    /**
    * Sets the state for the horizontal bullet navigations.
    */ function activeSlidesNavigation(slidesNav, slideIndex) {
        if (getOptions().slidesNavigation && slidesNav != null) {
            removeClass($1(ACTIVE_SEL, slidesNav), ACTIVE);
            addClass($1('a', $1('li', slidesNav)[slideIndex]), ACTIVE);
        }
    }
    /**
    * Creates a landscape navigation bar with dots for horizontal sliders.
    */ function addSlidesNavigation(section) {
        var sectionElem = section.item;
        var numSlides = section.slides.length;
        appendTo(createElementFromHTML('<div class="' + SLIDES_NAV + '"><ul></ul></div>'), sectionElem);
        var nav = $1(SLIDES_NAV_SEL, sectionElem)[0]; //top or bottom
        addClass(nav, 'fp-' + getOptions().slidesNavPosition);
        for(var i = 0; i < numSlides; i++){
            var slide = $1(SLIDE_SEL, sectionElem)[i];
            appendTo(createElementFromHTML('<li><a href="#"><span class="fp-sr-only">' + getBulletLinkName(i, 'Slide', slide) + '</span><span></span></a></li>'), $1('ul', nav)[0]);
        } //centering it
        css(nav, {
            'margin-left': '-' + nav.innerWidth / 2 + 'px'
        });
        var activeSlideIndex = section.activeSlide ? section.activeSlide.index() : 0;
        addClass($1('a', $1('li', nav)[activeSlideIndex]), ACTIVE);
    }
    var isScrollAllowed = {};
    isScrollAllowed.m = {
        'up': true,
        'down': true,
        'left': true,
        'right': true
    };
    isScrollAllowed.k = deepExtend({}, isScrollAllowed.m);
    /**
    * Allowing or disallowing the mouse/swipe scroll in a given direction. (not for keyboard)
    * @param type m (mouse) or k (keyboard)
    */ function setIsScrollAllowed(value, direction, type) {
        //up, down, left, right
        if (direction !== 'all') isScrollAllowed[type][direction] = value;
        else Object.keys(isScrollAllowed[type]).forEach(function(key) {
            isScrollAllowed[type][key] = value;
        });
    }
    function getIsScrollAllowed() {
        return isScrollAllowed;
    }
    EventEmitter.on('onClickOrTouch', onClickOrTouch$2);
    function onClickOrTouch$2(params) {
        var target = params.target;
        if (matches(target, SLIDES_ARROW_SEL) || closest(target, SLIDES_ARROW_SEL)) slideArrowHandler.call(target, params);
    } //Scrolling horizontally when clicking on the slider controls.
    function slideArrowHandler() {
        /*jshint validthis:true */ var section = closest(this, SECTION_SEL);
        /*jshint validthis:true */ if (hasClass(this, SLIDES_PREV)) {
            if (getIsScrollAllowed().m.left) {
                setState({
                    scrollTrigger: 'slideArrow'
                });
                EventEmitter.emit('moveSlideLeft', {
                    section: section
                });
            }
        } else if (getIsScrollAllowed().m.right) {
            setState({
                scrollTrigger: 'slideArrow'
            });
            EventEmitter.emit('moveSlideRight', {
                section: section
            });
        }
    }
    /**
    * Creates the control arrows for the given section
    */ function createSlideArrows(section) {
        var sectionElem = section.item;
        var arrows = [
            createElementFromHTML(getOptions().controlArrowsHTML[0]),
            createElementFromHTML(getOptions().controlArrowsHTML[1])
        ];
        after($1(SLIDES_WRAPPER_SEL, sectionElem)[0], arrows);
        addClass(arrows, SLIDES_ARROW);
        addClass(arrows[0], SLIDES_PREV);
        addClass(arrows[1], SLIDES_NEXT);
        if (getOptions().controlArrowColor !== '#fff') {
            css($1(SLIDES_ARROW_NEXT_SEL, sectionElem), {
                'border-color': 'transparent transparent transparent ' + getOptions().controlArrowColor
            });
            css($1(SLIDES_ARROW_PREV_SEL, sectionElem), {
                'border-color': 'transparent ' + getOptions().controlArrowColor + ' transparent transparent'
            });
        }
        if (!getOptions().loopHorizontal) hide($1(SLIDES_ARROW_PREV_SEL, sectionElem));
    }
    function toggleControlArrows(v) {
        if (!getOptions().loopHorizontal && getOptions().controlArrows) {
            //hidding it for the fist slide, showing for the rest
            toggle($1(SLIDES_ARROW_PREV_SEL, v.section), v.slideIndex !== 0); //hidding it for the last slide, showing for the rest
            toggle($1(SLIDES_ARROW_NEXT_SEL, v.section), next1(v.destiny) != null);
        }
    }
    var g_afterSlideLoadsId;
    FP.landscapeScroll = landscapeScroll;
    EventEmitter.on('bindEvents', bindEvents$b);
    function bindEvents$b() {
        EventEmitter.on('onPerformMovement', onPerformMovement);
    }
    function onPerformMovement() {
        clearTimeout(g_afterSlideLoadsId);
    }
    /**
    * Scrolls horizontal sliders.
    */ function landscapeScroll(slides, destiny, direction) {
        var sectionElem = closest(slides, SECTION_SEL);
        var section1 = getState().sections.filter(function(section) {
            return section.item == sectionElem;
        })[0];
        var slide1 = section1.slides.filter(function(slide) {
            return slide.item == destiny;
        })[0];
        var v = {
            "slides": slides,
            "destiny": destiny,
            "direction": direction,
            "destinyPos": {
                "left": destiny.offsetLeft
            },
            "slideIndex": slide1.index(),
            "section": sectionElem,
            "sectionIndex": section1.index(),
            "anchorLink": section1.anchor,
            "slidesNav": $1(SLIDES_NAV_SEL, sectionElem)[0],
            "slideAnchor": slide1.anchor,
            "prevSlide": section1.activeSlide.item,
            "prevSlideIndex": section1.activeSlide.index(),
            "items": {
                "section": section1,
                "origin": section1.activeSlide,
                "destination": slide1
            },
            //caching the value of isResizing at the momment the function is called
            //because it will be checked later inside a setTimeout and the value might change
            "localIsResizing": state.isResizing
        };
        v.xMovement = getXmovement(v.prevSlideIndex, v.slideIndex);
        v.direction = v.direction ? v.direction : v.xMovement; //important!! Only do it when not resizing
        if (!v.localIsResizing) //preventing from scrolling to the next/prev section when using scrollHorizontally
        setState({
            canScroll: false
        });
        if (getOptions().onSlideLeave) //if the site is not just resizing and readjusting the slides
        {
            if (!v.localIsResizing && v.xMovement !== 'none') {
                if (isFunction(getOptions().onSlideLeave)) {
                    if (fireCallback1('onSlideLeave', v) === false) {
                        setState({
                            slideMoving: false
                        });
                        return;
                    }
                }
            }
        }
        addClass(destiny, ACTIVE);
        removeClass(siblings1(destiny), ACTIVE);
        updateState();
        if (!v.localIsResizing) {
            stopMedia(v.prevSlide);
            lazyLoad(destiny);
        }
        toggleControlArrows(v); //only changing the URL if the slides are in the current section (not for resize re-adjusting)
        if (section1.isActive && !v.localIsResizing) setPageStatus(v.slideIndex, v.slideAnchor, v.anchorLink);
        performHorizontalMove(slides, v, true);
    }
    /**
    * Performs the horizontal movement. (CSS3 or jQuery)
    *
    * @param fireCallback {Boolean} - determines whether or not to fire the callback
    */ function performHorizontalMove(slides, v, fireCallback) {
        var destinyPos = v.destinyPos;
        activeSlidesNavigation(v.slidesNav, v.slideIndex);
        setState({
            scrollX: Math.round(destinyPos.left)
        });
        if (getOptions().css3) {
            var translate3d = 'translate3d(-' + Math.round(destinyPos.left) + 'px, 0px, 0px)';
            FP.test.translate3dH[v.sectionIndex] = translate3d;
            css(addAnimation($1(SLIDES_CONTAINER_SEL, slides)), getTransforms(translate3d));
            clearTimeout(g_afterSlideLoadsId);
            g_afterSlideLoadsId = setTimeout(function() {
                if (fireCallback) afterSlideLoads(v);
            }, getOptions().scrollingSpeed);
        } else {
            FP.test.left[v.sectionIndex] = Math.round(destinyPos.left);
            scrollTo(slides, Math.round(destinyPos.left), getOptions().scrollingSpeed, function() {
                if (fireCallback) afterSlideLoads(v);
            });
        }
    }
    /**
    * Retuns `right` or `left` depending on the scrolling movement to reach its destination
    * from the current slide.
    */ function getXmovement(fromIndex, toIndex) {
        if (fromIndex == toIndex) return 'none';
        if (fromIndex > toIndex) return 'left';
        return 'right';
    }
    function onDestroy$7() {
        clearTimeout(g_afterSlideLoadsId);
    }
    function afterSlideLoads(v) {
        //if the site is not just resizing and readjusting the slides
        if (!v.localIsResizing) {
            if (isFunction(getOptions().afterSlideLoad)) fireCallback1('afterSlideLoad', v);
             //needs to be inside the condition to prevent problems with continuousVertical and scrollHorizontally
            //and to prevent double scroll right after a windows resize
            setState({
                canScroll: true
            });
            playMedia(v.destiny);
        } //letting them slide again
        setState({
            slideMoving: false
        });
    }
    /**
    * Slides silently (with no animation) the active slider to the given slide.
    * @param noCallback {bool} true or defined -> no callbacks
    */ function silentLandscapeScroll(activeSlide, noCallbacks) {
        setScrollingSpeed(0, 'internal');
        if (typeof noCallbacks !== 'undefined') //preventing firing callbacks afterSlideLoad etc.
        setState({
            isResizing: true
        });
        landscapeScroll(closest(activeSlide, SLIDES_WRAPPER_SEL), activeSlide);
        if (typeof noCallbacks !== 'undefined') setState({
            isResizing: false
        });
        setScrollingSpeed(getOriginals().scrollingSpeed, 'internal');
    }
    var g_prevActiveSectionIndex = null;
    var g_prevActiveSlideIndex = null;
    /** 
     * Updates the state of the app.
     */ function updateState() {
        state.activeSection = null;
        state.sections.map(function(section) {
            var isActive = hasClass(section.item, ACTIVE);
            section.isActive = isActive;
            section.hasScroll = hasClass(section.item, OVERFLOW);
            if (isActive) state.activeSection = section;
            if (section.slides.length) {
                section.activeSlide = null;
                section.slides.map(function(slide) {
                    var isActiveSlide = hasClass(slide.item, ACTIVE);
                    slide.hasScroll = hasClass(slide.item, OVERFLOW);
                    slide.isActive = isActiveSlide;
                    if (isActiveSlide) section.activeSlide = slide;
                });
            }
        });
        scrollToNewActivePanel();
    }
    function updateStructuralState() {
        var allSectionItems = $1(getOptions().sectionSelector, getContainer());
        var sectionsItems = getVisible(allSectionItems);
        var allSections = Array.from(allSectionItems).map(function(item) {
            return new SectionPanel(item);
        });
        var sections = allSections.filter(function(item) {
            return item.isVisible;
        });
        var slides = sections.reduce(function(acc, section) {
            return acc.concat(section.slides);
        }, []); // keeping track of the previously active section
        g_prevActiveSectionIndex = getPrevActivePanelIndex(state.activeSection);
        g_prevActiveSlideIndex = getPrevActivePanelIndex(state.activeSection ? state.activeSection.activeSlide : null);
        state.numSections = sectionsItems.length;
        state.numSlides = sections.reduce(function(acc, section) {
            return acc + section.slides.length;
        }, 0);
        state.sections = sections;
        state.sectionsIncludingHidden = allSections;
        state.slides = slides;
        state.panels = state.sections.concat(state.slides);
    }
    function getPrevActivePanelIndex(activePanel) {
        if (!activePanel) return null;
        var prevActivePanelItem = activePanel ? activePanel.item : null;
        var hiddenPanels = activePanel.isSection ? state.sectionsIncludingHidden : state.activeSection.slidesIncludingHidden;
        if (prevActivePanelItem) {
            var panel = getPanelByElement(hiddenPanels, prevActivePanelItem);
            return panel ? panel.index() : null;
        }
        return null;
    }
    /**
     * When changes in the DOM take place there's a change 
     * the active section is now hidden or removed. 
     * fullPage.js will scroll to the closest section nearby.
     */ function scrollToNewActivePanel() {
        var activeSection = state.activeSection;
        var activeSectionHasSlides = state.activeSection ? state.activeSection.slides.length : false;
        var activeSlide = state.activeSection ? state.activeSection.activeSlide : null; // Hidding / removing the active section ?
        if (!activeSection && state.sections.length && !getState().isBeyondFullpage && g_prevActiveSectionIndex) {
            var newActiveSection = getNewActivePanel(g_prevActiveSectionIndex, state.sections);
            if (newActiveSection) {
                state.activeSection = newActiveSection;
                state.activeSection.isActive = true;
                addClass(state.activeSection.item, ACTIVE);
            }
            if (state.activeSection) silentScroll(state.activeSection.item.offsetTop);
        }
        if (activeSectionHasSlides && !activeSlide && g_prevActiveSlideIndex) {
            var newActiveSlide = getNewActivePanel(g_prevActiveSlideIndex, state.activeSection.slides);
            if (newActiveSlide) {
                state.activeSection.activeSlide = newActiveSlide;
                state.activeSection.activeSlide.isActive = true;
                addClass(state.activeSection.activeSlide.item, ACTIVE);
            }
            if (state.activeSection.activeSlide) silentLandscapeScroll(state.activeSection.activeSlide.item, 'internal');
        }
    }
    function getNewActivePanel(prevActivePanelIndex, siblings) {
        var newActiveSection;
        var prevIndex = prevActivePanelIndex - 1;
        var nextIndex = prevActivePanelIndex;
        do {
            newActiveSection = siblings[prevIndex] || siblings[nextIndex];
            if (newActiveSection) break;
            prevIndex = prevIndex - 1;
            nextIndex = nextIndex + 1;
        }while (prevIndex >= 0 || nextIndex < siblings.length)
        return newActiveSection;
    }
    /**
    * Section object
    */ var SectionPanel = function SectionPanel(el) {
        var _this = this;
        [].push.call(arguments, getOptions().sectionSelector);
        Item.apply(this, arguments);
        this.allSlidesItems = $1(getOptions().slideSelector, el);
        this.slidesIncludingHidden = Array.from(this.allSlidesItems).map(function(item) {
            return new SlidePanel(item, _this);
        });
        this.slides = this.slidesIncludingHidden.filter(function(slidePanel) {
            return slidePanel.isVisible;
        });
        this.activeSlide = this.slides.length ? this.slides.filter(function(slide) {
            return slide.isActive;
        })[0] || this.slides[0] : null;
    };
    SectionPanel.prototype = Item.prototype;
    SectionPanel.prototype.constructor = SectionPanel;
    /**
    * Slide object
    */ var SlidePanel = function SlidePanel(el, section) {
        this.parent = section;
        Item.call(this, el, getOptions().slideSelector);
    };
    SlidePanel.prototype = Item.prototype;
    SlidePanel.prototype.constructor = SectionPanel;
    /**
    * Adds internal classes to be able to provide customizable selectors
    * keeping the link with the style sheet.
    */ function addInternalSelectors() {
        addClass($1(getOptions().sectionSelector, getContainer()), SECTION);
        addClass($1(getOptions().slideSelector, getContainer()), SLIDE);
    }
    function tooltipTextHandler() {
        /*jshint validthis:true */ trigger(prev1(this), 'click');
    }
    /**
    * Activating the vertical navigation bullets according to the given slide name.
    */ function activateNavDots(name, sectionIndex) {
        var nav = $1(SECTION_NAV_SEL)[0];
        if (getOptions().navigation && nav != null && nav.style.display !== 'none') {
            removeClass($1(ACTIVE_SEL, nav), ACTIVE);
            if (name) addClass($1('a[href="#' + name + '"]', nav), ACTIVE);
            else addClass($1('a', $1('li', nav)[sectionIndex]), ACTIVE);
        }
    }
    /**
    * Creates a vertical navigation bar.
    */ function addVerticalNavigation() {
        remove1($1(SECTION_NAV_SEL));
        var navigation = doc.createElement('div');
        navigation.setAttribute('id', SECTION_NAV);
        var divUl = doc.createElement('ul');
        navigation.appendChild(divUl);
        appendTo(navigation, $body);
        var nav = $1(SECTION_NAV_SEL)[0];
        addClass(nav, 'fp-' + getOptions().navigationPosition);
        if (getOptions().showActiveTooltip) addClass(nav, SHOW_ACTIVE_TOOLTIP);
        var li = '';
        for(var i = 0; i < getState().sections.length; i++){
            var section = getState().sections[i];
            var link = '';
            if (getOptions().anchors.length) link = section.anchor;
            li += '<li><a href="#' + encodeURI(link) + '"><span class="fp-sr-only">' + getBulletLinkName(section.index(), 'Section') + '</span><span></span></a>'; // Only add tooltip if needed (defined by user)
            var tooltip = getOptions().navigationTooltips[section.index()];
            if (typeof tooltip !== 'undefined' && tooltip !== '') li += '<div class="' + SECTION_NAV_TOOLTIP + ' fp-' + getOptions().navigationPosition + '">' + tooltip + '</div>';
            li += '</li>';
        }
        $1('ul', nav)[0].innerHTML = li; //activating the current active section
        var bullet = $1('li', $1(SECTION_NAV_SEL)[0])[getState().activeSection.index()];
        addClass($1('a', bullet), ACTIVE);
    } //Scrolls to the section when clicking the navigation bullet
    function sectionBulletHandler(e) {
        if (e.preventDefault) preventDefault(e);
        setState({
            scrollTrigger: 'verticalNav'
        });
        /*jshint validthis:true */ // @ts-ignore
        var indexBullet = index1(closest(this, SECTION_NAV_SEL + ' li'));
        EventEmitter.emit('scrollPage', {
            destination: getState().sections[indexBullet]
        });
    }
    FP.setRecordHistory = setRecordHistory;
    /**
    * Defines wheter to record the history for each hash change in the URL.
    */ function setRecordHistory(value, type) {
        setVariableState('recordHistory', value, type);
    }
    FP.setAutoScrolling = setAutoScrolling;
    FP.test.setAutoScrolling = setAutoScrolling;
    /**
    * Sets the autoScroll option.
    * It changes the scroll bar visibility and the history of the site as a result.
    */ function setAutoScrolling(value, type) {
        //removing the transformation
        if (!value) silentScroll(0);
        setVariableState('autoScrolling', value, type);
        var element = getState().activeSection.item;
        if (getOptions().autoScrolling && !getOptions().scrollBar) {
            css($htmlBody, {
                'overflow': 'hidden',
                'height': '100%'
            });
            removeClass($body, 'fp-scrollable');
            setRecordHistory(getOriginals().recordHistory, 'internal'); //for IE touch devices
            css(getContainer(), {
                '-ms-touch-action': 'none',
                'touch-action': 'none'
            });
            if (element != null) //moving the container up
            silentScroll(element.offsetTop);
        } else {
            css($htmlBody, {
                'overflow': 'visible',
                'height': 'initial'
            });
            addClass($body, 'fp-scrollable');
            var recordHistory = !getOptions().autoScrolling ? false : getOriginals().recordHistory;
            setRecordHistory(recordHistory, 'internal'); //for IE touch devices
            css(getContainer(), {
                '-ms-touch-action': '',
                'touch-action': ''
            }); //scrolling the page to the section with no animation
            if (element != null) {
                css($htmlBody, {
                    'scroll-behavior': 'unset'
                });
                var scrollSettings = getScrollSettings(element.offsetTop);
                scrollSettings.element.scrollTo(0, scrollSettings.options);
            }
        }
    }
    FP.setFitToSection = setFitToSection;
    FP.fitToSection = fitToSection;
    var g_isCssSnapsSupported = function() {
        return isCssSnapsSupported();
    }();
    /**
    * Sets fitToSection
    */ function setFitToSection(value, type) {
        toggleCssSnapsWhenPossible(value);
        setVariableState('fitToSection', value, type);
    }
    /**
    * Adds or removes CSS snaps scrolling behaviour depending on the given value.
    */ function toggleCssSnapsWhenPossible(value) {
        if (g_isCssSnapsSupported) {
            var canAddSnaps = getOptions().fitToSection && (!getOptions().autoScrolling || getOptions().scrollBar) && value;
            var toggleFunction = canAddSnaps ? addClass : removeClass;
            toggleFunction($html, SNAPS);
        }
    }
    /**
    * Checks for CSS scroll snaps support.
    */ function isCssSnapsSupported() {
        var style = doc.documentElement.style;
        return 'scrollSnapAlign' in style || 'webkitScrollSnapAlign' in style || 'msScrollSnapAlign' in style;
    }
    /**
    * Fits the site to the nearest active section
    */ function fitToSection() {
    // if(canScroll){
    //     //allows to scroll to an active section and
    //     //if the section is already active, we prevent firing callbacks
    //     isResizing = true;
    //     scrollPage(state.activeSection);
    //     isResizing = false;
    // }
    }
    FP.setResponsive = setResponsive;
    /**
    * Checks if the site needs to get responsive and disables autoScrolling if so.
    * A class `fp-responsive` is added to the plugin's container in case the user wants to use it for his own responsive CSS.
    */ function responsive() {
        var widthLimit = getOptions().responsive || getOptions().responsiveWidth; //backwards compatiblity
        var heightLimit = getOptions().responsiveHeight; //only calculating what we need. Remember its called on the resize event.
        var isBreakingPointWidth = widthLimit && win.innerWidth < widthLimit;
        var isBreakingPointHeight = heightLimit && win.innerHeight < heightLimit;
        if (widthLimit && heightLimit) setResponsive(isBreakingPointWidth || isBreakingPointHeight);
        else if (widthLimit) setResponsive(isBreakingPointWidth);
        else if (heightLimit) setResponsive(isBreakingPointHeight);
    }
    /**
    * Turns fullPage.js to normal scrolling mode when the viewport `width` or `height`
    * are smaller than the set limit values.
    */ function setResponsive(active) {
        var isResponsive = isResponsiveMode();
        if (active) {
            if (!isResponsive) {
                setAutoScrolling(false, 'internal');
                setFitToSection(false, 'internal');
                hide($1(SECTION_NAV_SEL));
                addClass($body, RESPONSIVE);
                if (isFunction(getOptions().afterResponsive)) getOptions().afterResponsive.call(getContainer(), active);
                 //when on page load, we will remove scrolloverflow if necessary
            // if(getOptions().scrollOverflow){
            //     createScrollBarForAll();
            // }
            }
        } else if (isResponsive) {
            setAutoScrolling(getOriginals().autoScrolling, 'internal');
            setFitToSection(getOriginals().autoScrolling, 'internal');
            show($1(SECTION_NAV_SEL));
            removeClass($body, RESPONSIVE);
            if (isFunction(getOptions().afterResponsive)) getOptions().afterResponsive.call(getContainer(), active);
        }
    }
    /**
    * Determines whether fullpage.js is in responsive mode or not.
    */ function isResponsiveMode() {
        return hasClass($body, RESPONSIVE);
    }
    EventEmitter.on('bindEvents', bindEvents$a);
    function bindEvents$a() {
        //after DOM and images are loaded
        win.addEventListener('load', function() {
            if (getOptions().scrollOverflow && !getOptions().scrollBar) {
                scrollOverflowHandler.makeScrollable();
                scrollOverflowHandler.afterSectionLoads();
            }
        });
        if (getOptions().scrollOverflow) getNodes(getState().panels).forEach(function(el) {
            el.addEventListener('scroll', scrollOverflowHandler.onPanelScroll);
            el.addEventListener('wheel', scrollOverflowHandler.preventScrollWhileMoving);
            el.addEventListener('keydown', scrollOverflowHandler.preventScrollWhileMoving);
            el.addEventListener('keydown', scrollOverflowHandler.blurFocusOnAfterLoad);
        });
    }
    var scrollOverflowHandler = {
        focusedElem: null,
        timeBeforeReachingLimit: null,
        timeLastScroll: null,
        preventScrollWhileMoving: function preventScrollWhileMoving(e) {
            if (!state.canScroll) {
                preventDefault(e);
                return false;
            }
        },
        afterSectionLoads: function afterSectionLoads() {
            // Unfocusing the scrollable element from the orgin section/slide
            if (doc.activeElement === this.focusedElem) // @ts-ignore
            this.focusedElem.blur();
            if ($1(OVERFLOW_SEL, getState().activeSection.item)[0]) {
                this.focusedElem = $1(OVERFLOW_SEL, getState().activeSection.item)[0];
                this.focusedElem.focus();
            }
        },
        makeScrollable: function makeScrollable() {
            if (getOptions().scrollOverflowMacStyle && !isMacDevice) addClass($body, 'fp-scroll-mac');
            getState().panels.forEach(function(el) {
                if (hasClass(el.item, 'fp-noscroll') || hasClass(el.item, AUTO_HEIGHT) || hasClass(el.item, AUTO_HEIGHT_RESPONSIVE) && isResponsiveMode()) return;
                else {
                    var item = scrollOverflowHandler.scrollable(el.item);
                    var shouldBeScrollable = scrollOverflowHandler.shouldBeScrollable(el.item);
                    if (shouldBeScrollable) {
                        addClass(item, OVERFLOW);
                        item.setAttribute('tabindex', '-1');
                    } else {
                        removeClass(item, OVERFLOW);
                        item.removeAttribute('tabindex');
                    } // updating the state now in case 
                    // this is executed on page load (after images load)
                    el.hasScroll = shouldBeScrollable;
                }
            });
        },
        scrollable: function scrollable(sectionItem) {
            return $1(SLIDE_ACTIVE_SEL, sectionItem)[0] || sectionItem;
        },
        isScrollable: function isScrollable(panel) {
            return panel.isSection && panel.activeSlide ? panel.activeSlide.hasScroll : panel.hasScroll;
        },
        shouldBeScrollable: function shouldBeScrollable(item) {
            return item.scrollHeight > win.innerHeight;
        },
        isScrolled: function isScrolled(direction, el) {
            if (!state.canScroll) return false;
            if (!getOptions().scrollOverflow) return true;
            var scrollableItem = scrollOverflowHandler.scrollable(el);
            var positionY = scrollableItem.scrollTop;
            var isTopReached = direction === 'up' && positionY <= 0;
            var isBottomReached = direction === 'down' && scrollableItem.scrollHeight <= scrollableItem.offsetHeight + positionY;
            var isScrolled = isTopReached || isBottomReached;
            if (!isScrolled) this.timeBeforeReachingLimit = new Date().getTime();
            return isScrolled;
        },
        shouldMovePage: function shouldMovePage() {
            this.timeLastScroll = new Date().getTime();
            var timeDiff = this.timeLastScroll - scrollOverflowHandler.timeBeforeReachingLimit;
            var isUsingTouch = isTouchDevice || isTouch;
            var isGrabbing = isUsingTouch && state.isGrabbing;
            var isNotFirstTimeReachingLimit = state.isUsingWheel && timeDiff > 600;
            return isGrabbing && timeDiff > 400 || isNotFirstTimeReachingLimit;
        },
        onPanelScroll: function() {
            var prevPosition = 0;
            return function(e) {
                var currentPosition = e.target.scrollTop;
                var direction = state.touchDirection !== 'none' ? state.touchDirection : prevPosition < currentPosition ? 'down' : 'up';
                prevPosition = currentPosition;
                if (isFunction(getOptions().onScrollOverflow)) fireCallback1('onScrollOverflow', {
                    position: currentPosition,
                    direction: direction
                });
                if (hasClass(e.target, OVERFLOW) && state.canScroll) {
                    if (scrollOverflowHandler.isScrolled(direction, e.target) && scrollOverflowHandler.shouldMovePage()) EventEmitter.emit('onScrollOverflowScrolled', {
                        direction: direction
                    });
                }
            };
        }()
    };
    function addTableClass(element) {
        if (!getOptions().verticalCentered) return;
        if (!scrollOverflowHandler.isScrollable(element)) //In case we are styling for the 2nd time as in with reponsiveSlides
        {
            if (!hasClass(element.item, TABLE)) addClass(element.item, TABLE);
        }
    }
    /**
    * Styles the horizontal slides for a section.
    */ function styleSlides(section) {
        var numSlides = section.slides.length;
        var slidesElems = section.allSlidesItems;
        var slides = section.slides;
        var sliderWidth = numSlides * 100;
        var slideWidth = 100 / numSlides;
        if (!$1(SLIDES_WRAPPER_SEL, section.item)[0]) {
            var slidesWrapper = doc.createElement('div');
            slidesWrapper.className = SLIDES_WRAPPER; //fp-slides
            wrapAll(slidesElems, slidesWrapper);
            var slidesContainer = doc.createElement('div');
            slidesContainer.className = SLIDES_CONTAINER; //fp-slidesContainer
            wrapAll(slidesElems, slidesContainer);
        }
        css($1(SLIDES_CONTAINER_SEL, section.item), {
            'width': sliderWidth + '%'
        });
        if (numSlides > 1) {
            if (getOptions().controlArrows) createSlideArrows(section);
            if (getOptions().slidesNavigation) addSlidesNavigation(section);
        }
        slides.forEach(function(slide) {
            css(slide.item, {
                'width': slideWidth + '%'
            });
            if (getOptions().verticalCentered) addTableClass(slide);
        });
        var startingSlide = section.activeSlide || null; //if the slide won't be an starting point, the default will be the first one
        //the active section isn't the first one? Is not the first slide of the first section? Then we load that section/slide by default.
        if (startingSlide != null && state.activeSection && (state.activeSection.index() !== 0 || state.activeSection.index() === 0 && startingSlide.index() !== 0)) silentLandscapeScroll(startingSlide.item, 'internal');
        else addClass(slidesElems[0], ACTIVE);
    }
    var startingSection = null;
    FP.getActiveSection = getActiveSection;
    function getStartingSection() {
        return startingSection;
    }
    /**
    * Styling vertical sections
    */ function styleSection(section) {
        var sectionElem = section.item;
        var hasSlides = section.allSlidesItems.length;
        var index = section.index(); //if no active section is defined, the 1st one will be the default one
        if (!getState().activeSection && section.isVisible) {
            addClass(sectionElem, ACTIVE);
            updateState();
        }
        startingSection = getState().activeSection.item;
        if (getOptions().paddingTop) css(sectionElem, {
            'padding-top': getOptions().paddingTop
        });
        if (getOptions().paddingBottom) css(sectionElem, {
            'padding-bottom': getOptions().paddingBottom
        });
        if (typeof getOptions().sectionsColor[index] !== 'undefined') css(sectionElem, {
            'background-color': getOptions().sectionsColor[index]
        });
        if (typeof getOptions().anchors[index] !== 'undefined') sectionElem.setAttribute('data-anchor', section.anchor);
        if (!hasSlides) addTableClass(section);
    }
    /**
    * Gets the active section.
    */ function getActiveSection() {
        return getState().activeSection;
    }
    var g_wrapperObserver;
    var g_wrapperObserveConfig = {
        attributes: false,
        subtree: true,
        childList: true,
        characterData: true
    };
    EventEmitter.on('bindEvents', bindEvents$9);
    FP.render = onContentChange;
    function bindEvents$9() {
        if (getOptions().observer && "MutationObserver" in window) g_wrapperObserver = createObserver($1(WRAPPER_SEL)[0], onContentChange, g_wrapperObserveConfig);
        EventEmitter.on('contentChanged', onContentChange);
    }
    /**
     * Creates a Mutation observer.
     */ function createObserver(target, callback, config) {
        var observer = new MutationObserver(callback);
        observer.observe(target, config);
        return observer;
    }
    function didSlidesChange() {
        return getVisible($1(getOptions().slideSelector, getContainer())).length !== getState().numSlides;
    }
    function didSectionsChange() {
        return getVisible($1(getOptions().sectionSelector, getContainer())).length !== getState().numSections;
    }
    function didSectionsOrSlidesChange() {
        return didSlidesChange() || didSectionsChange();
    }
    /**
     * Listen to changes on sections and fires reBuild
     * when those changes affect the section height.
     */ function onContentChange(mutations) {
        var _didSlidesChange = didSlidesChange();
        if (didSectionsOrSlidesChange() && !state.isDoingContinousVertical) {
            if (getOptions().observer && g_wrapperObserver) // Temporally disabling the observer while 
            // we modidy the DOM again
            g_wrapperObserver.disconnect();
            updateStructuralState();
            updateState(); // Removing navs and anchors options
            getOptions().anchors = [];
            remove1($1(SECTION_NAV_SEL));
            addInternalSelectors();
            setOptionsFromDOM();
            if (getOptions().navigation) addVerticalNavigation();
            if (_didSlidesChange) {
                remove1($1(SLIDES_NAV_SEL));
                remove1($1(SLIDES_ARROW_SEL));
            }
            getState().sections.forEach(function(section) {
                if (section.slides.length) {
                    if (_didSlidesChange) styleSlides(section);
                } else styleSection(section);
            });
        }
        if (getOptions().observer && g_wrapperObserver) g_wrapperObserver.observe($1(WRAPPER_SEL)[0], g_wrapperObserveConfig);
    }
    var supportsPassiveEvents = function() {
        //cheks for passive event support
        var g_supportsPassive = false;
        try {
            var opts = Object.defineProperty({}, 'passive', {
                get: function get() {
                    g_supportsPassive = true;
                }
            });
            windowAddEvent("testPassive", null, opts);
            windowRemoveEvent("testPassive", null, opts);
        } catch (e) {}
        return function() {
            return g_supportsPassive;
        };
    }();
    function getPassiveOptionsIfPossible() {
        return supportsPassiveEvents() ? {
            passive: false
        } : false;
    }
    new Date().getTime();
    /**
     * Triggers the callback once per scroll wheel action.
     * Based on scrolling speed delay.
     */ var oncePerScroll = function() {
        var canTriggerEvent = true;
        var prevWheelTime = new Date().getTime();
        var result;
        return function(scrollTrigger, callback) {
            var currentTime = new Date().getTime();
            var timeThreshold = scrollTrigger === 'wheel' ? getOptions().scrollingSpeed : 100;
            canTriggerEvent = currentTime - prevWheelTime >= timeThreshold;
            if (canTriggerEvent) {
                result = callback();
                prevWheelTime = currentTime;
            }
            return typeof result !== 'undefined' ? result : true;
        };
    }();
    var wheelDataHandler = function() {
        var _prevTime = new Date().getTime();
        var _scrollings = [];
        var isScrollingVertically;
        var direction;
        return {
            registerEvent: function registerEvent(e) {
                e = e || win.event;
                var value = e.wheelDelta || -e.deltaY || -e.detail;
                var delta = Math.max(-1, Math.min(1, value));
                var horizontalDetection = typeof e.wheelDeltaX !== 'undefined' || typeof e.deltaX !== 'undefined';
                isScrollingVertically = Math.abs(e.wheelDeltaX) < Math.abs(e.wheelDelta) || Math.abs(e.deltaX) < Math.abs(e.deltaY) || !horizontalDetection;
                var curTime = new Date().getTime();
                direction = delta < 0 ? 'down' : 'up'; //Limiting the array to 150 (lets not waste memory!)
                if (_scrollings.length > 149) _scrollings.shift();
                 //keeping record of the previous scrollings
                _scrollings.push(Math.abs(value)); //time difference between the last scroll and the current one
                var timeDiff = curTime - _prevTime;
                _prevTime = curTime; //haven't they scrolled in a while?
                //(enough to be consider a different scrolling action to scroll another section)
                if (timeDiff > 200) //emptying the array, we dont care about old scrollings for our averages
                _scrollings = [];
            },
            isAccelerating: function isAccelerating() {
                var averageEnd = getAverage(_scrollings, 10);
                var averageMiddle = getAverage(_scrollings, 70);
                var isAccelerating = averageEnd >= averageMiddle;
                return _scrollings.length ? isAccelerating && isScrollingVertically : false;
            },
            getDirection: function getDirection() {
                return direction;
            }
        };
    }();
    function scrollBeyondFullPage() {
        var dtop = getDestinationOffset();
        var scrollSettings = getScrollSettings(dtop);
        FP.test.top = -dtop + 'px';
        css(doc.body, {
            'scroll-snap-type': 'none'
        });
        css($htmlBody, {
            'scroll-behavior': 'unset'
        });
        setState({
            canScroll: false
        });
        scrollTo(scrollSettings.element, scrollSettings.options, getOptions().scrollingSpeed, function() {
            setTimeout(function() {
                setState({
                    isBeyondFullpage: true
                });
                setState({
                    canScroll: true
                });
            }, 30);
        });
    }
    function onKeyDown() {
        if (!isFullPageAbove()) return;
        else scrollUpToFullpage();
    }
    function scrollUpToFullpage() {
        var scrollSettings = getScrollSettings(getLast(getState().sections).item.offsetTop);
        setState({
            canScroll: false
        });
        scrollTo(scrollSettings.element, scrollSettings.options, getOptions().scrollingSpeed, function() {
            setState({
                canScroll: true
            });
            setState({
                isBeyondFullpage: false
            });
            setState({
                isAboutToScrollToFullPage: false
            });
        });
    }
    function getDestinationOffset() {
        if (!getOptions().css3) return getLast(getState().sections).item.offsetTop + getLast(getState().sections).item.offsetHeight;
        return getScrollTop(getOptions()) + getWindowHeight();
    }
    function beyondFullPageHandler(container, e) {
        new Date().getTime();
        var pauseScroll = getState().isBeyondFullpage && container.getBoundingClientRect().bottom >= 0 && wheelDataHandler.getDirection() === 'up';
        var g_isAboutToScrollToFullPage = getState().isAboutToScrollToFullPage;
        if (g_isAboutToScrollToFullPage) {
            preventDefault(e);
            return false;
        }
        if (getState().isBeyondFullpage) {
            if (!pauseScroll) keyframeTime('set', 'beyondFullpage', 1000);
            else {
                var shouldSetFixedPosition = !g_isAboutToScrollToFullPage && (!keyframeTime('isNewKeyframe', 'beyondFullpage') || !wheelDataHandler.isAccelerating());
                var scrollSettings;
                if (shouldSetFixedPosition) {
                    scrollSettings = getScrollSettings(getLast(getState().sections).item.offsetTop + getLast(getState().sections).item.offsetHeight);
                    scrollSettings.element.scrollTo(0, scrollSettings.options);
                    setState({
                        isAboutToScrollToFullPage: false
                    });
                    preventDefault(e);
                    return false;
                } else if (wheelDataHandler.isAccelerating()) {
                    pauseScroll = false;
                    setState({
                        isAboutToScrollToFullPage: true
                    });
                    setState({
                        scrollTrigger: 'wheel'
                    });
                    scrollUpToFullpage();
                    preventDefault(e);
                    return false;
                }
            }
            if (!g_isAboutToScrollToFullPage) {
                // allow normal scrolling, but quitting
                if (!pauseScroll) return true;
            }
        }
    }
    var keyframeTime = function() {
        var isNew = false;
        var frames = {};
        var timeframes = {};
        return function(action, name, timeframe) {
            switch(action){
                case 'set':
                    frames[name] = new Date().getTime();
                    timeframes[name] = timeframe;
                    break;
                case 'isNewKeyframe':
                    var current = new Date().getTime();
                    isNew = current - frames[name] > timeframes[name];
                    break;
            }
            return isNew;
        };
    }();
    //@ts-check
    /**
    * Adds sections before or after the current one to create the infinite effect.
    */ function createInfiniteSections(v) {
        setState({
            isDoingContinousVertical: true
        });
        var activeSectionItem = getState().activeSection.item; // Scrolling down
        if (!v.isMovementUp) // Move all previous sections to after the active section
        after(activeSectionItem, prevAll(activeSectionItem, SECTION_SEL).reverse());
        else // Scrolling up
        // Move all next sections to before the active section
        before(activeSectionItem, nextAll(activeSectionItem, SECTION_SEL));
         // Maintain the displayed position (now that we changed the element order)
        silentScroll(getState().activeSection.item.offsetTop); // Maintain the active slides visible in the viewport
        keepSlidesPosition$1(); // save for later the elements that still need to be reordered
        v.wrapAroundElements = activeSectionItem; // Recalculate animation variables
        v.dtop = v.element.offsetTop;
        v.yMovement = getYmovement(getState().activeSection, v.element);
        return v;
    }
    /**
    * Maintains the active slides in the viewport
    * (Because the `scroll` animation might get lost with some actions, such as when using continuousVertical)
    */ function keepSlidesPosition$1() {
        var activeSlides = $1(SLIDE_ACTIVE_SEL);
        for(var i = 0; i < activeSlides.length; i++)silentLandscapeScroll(activeSlides[i], 'internal');
    }
    //@ts-check
    /**
    * Maintains the active slides in the viewport
    * (Because the `scroll` animation might get lost with some actions, such as when using continuousVertical)
    */ function keepSlidesPosition() {
        var activeSlides = $1(SLIDE_ACTIVE_SEL);
        for(var i = 0; i < activeSlides.length; i++)silentLandscapeScroll(activeSlides[i], 'internal');
    }
    /**
    * Fix section order after continuousVertical changes have been animated
    */ function continuousVerticalFixSectionOrder(v) {
        // If continuousVertical is in effect (and autoScrolling would also be in effect then),
        // finish moving the elements around so the direct navigation will function more simply
        if (v.wrapAroundElements == null) return;
        if (v.isMovementUp) before($1(SECTION_SEL)[0], v.wrapAroundElements);
        else after($1(SECTION_SEL)[getState().sections.length - 1], v.wrapAroundElements);
        silentScroll(getState().activeSection.item.offsetTop); // Maintain the active slides visible in the viewport
        keepSlidesPosition();
        setState({
            isDoingContinousVertical: false
        });
    }
    /**
    * Makes sure lazyload is done for other sections in the viewport that are not the
    * active one. 
    */ function lazyLoadOthers() {
        var hasAutoHeightSections = $1(AUTO_HEIGHT_SEL)[0] || isResponsiveMode() && $1(AUTO_HEIGHT_RESPONSIVE_SEL)[0]; //quitting when it doesn't apply
        if (!getOptions().lazyLoading || !hasAutoHeightSections) return;
         //making sure to lazy load auto-height sections that are in the viewport
        $1(SECTION_SEL + ':not(' + ACTIVE_SEL + ')').forEach(function(section) {
            if (isSectionInViewport(section)) lazyLoad(section);
        });
    }
    /**
    * Determines whether a section is in the viewport or not.
    */ function isSectionInViewport(el) {
        var rect = el.getBoundingClientRect();
        var top = rect.top;
        var bottom = rect.bottom; //sometimes there's a 1px offset on the bottom of the screen even when the 
        //section's height is the window.innerHeight one. I guess because pixels won't allow decimals.
        //using this prevents from lazyLoading the section that is not yet visible 
        //(only 1 pixel offset is)
        var pixelOffset = 2;
        var isTopInView = top + pixelOffset < state.windowsHeight && top > 0;
        var isBottomInView = bottom > pixelOffset && bottom < state.windowsHeight;
        return isTopInView || isBottomInView;
    }
    /**
    * Sets to active the current menu and vertical nav items.
    */ function activateMenuAndNav(anchor, index) {
        activateMenuElement(anchor);
        activateNavDots(anchor, index);
    }
    /**
    * Activating the website main menu elements according to the given slide name.
    */ function activateMenuElement(name) {
        if (getOptions().menu && getOptions().menu.length) $1(getOptions().menu).forEach(function(menu) {
            if (menu != null) {
                removeClass($1(ACTIVE_SEL, menu), ACTIVE);
                addClass($1('[data-menuanchor="' + name + '"]', menu), ACTIVE);
            }
        });
    }
    /**
    * Fires the wheel event once per mouse wheel trigger.
    */ function fireCallbackOncePerScroll(callbackName, params) {
        if (!isFunction(getOptions().beforeLeave)) return;
        var result = oncePerScroll(getState().scrollTrigger, function() {
            return fireCallback1(callbackName, params);
        });
        return result;
    }
    FP.moveTo = moveTo;
    FP.getScrollY = function() {
        return state.scrollY;
    };
    var g_afterSectionLoadsId;
    var g_transitionLapseId;
    EventEmitter.on('onDestroy', onDestroy$6);
    /**
    * Scrolls the site to the given element and scrolls to the slide if a callback is given.
    */ function scrollPage(section, callback, isMovementUp) {
        var element = section.item;
        if (element == null) return;
         //there's no element to scroll, leaving the function
        var dtop = getDestinationPosition(element);
        var slideAnchorLink;
        var slideIndex; //local variables
        var v = {
            "element": element,
            "callback": callback,
            "isMovementUp": isMovementUp,
            "dtop": dtop,
            "yMovement": getYmovement(getState().activeSection, element),
            "anchorLink": section.anchor,
            "sectionIndex": section.index(),
            "activeSlide": section.activeSlide ? section.activeSlide.item : null,
            "leavingSection": getState().activeSection.index() + 1,
            //caching the value of isResizing at the momment the function is called
            //because it will be checked later inside a setTimeout and the value might change
            "localIsResizing": state.isResizing,
            "items": {
                "origin": getState().activeSection,
                "destination": section
            },
            "direction": null
        }; //quiting when destination scroll is the same as the current one
        if (getState().activeSection.item == element && !state.isResizing || getOptions().scrollBar && getScrollTop(getOptions()) === v.dtop && !hasClass(element, AUTO_HEIGHT)) return;
        if (v.activeSlide != null) {
            slideAnchorLink = getAttr(v.activeSlide, 'data-anchor');
            slideIndex = index1(v.activeSlide, null);
        } //callback (onLeave) if the site is not just resizing and readjusting the slides
        if (!v.localIsResizing) {
            var direction = v.yMovement; //required for continousVertical
            if (typeof isMovementUp !== 'undefined') direction = isMovementUp ? 'up' : 'down';
             //for the callback
            v.direction = direction;
            if (isFunction(getOptions().beforeLeave)) {
                if (fireCallbackOncePerScroll('beforeLeave', v) === false) return;
            }
            if (isFunction(getOptions().onLeave)) {
                if (!fireCallback1('onLeave', v)) return;
            }
        } // If continuousVertical && we need to wrap around
        if (getOptions().autoScrolling && getOptions().continuousVertical && typeof v.isMovementUp !== "undefined" && (!v.isMovementUp && v.yMovement == 'up' || v.isMovementUp && v.yMovement == 'down')) // intending to scroll up but about to go down
        v = createInfiniteSections(v);
         //pausing media of the leaving section (if we are not just resizing, as destinatino will be the same one)
        if (!v.localIsResizing) stopMedia(getState().activeSection.item);
        addClass(element, ACTIVE);
        removeClass(siblings1(element), ACTIVE);
        updateState();
        lazyLoad(element); //preventing from activating the MouseWheelHandler event
        //more than once if the page is scrolling
        setState({
            canScroll: FP.test.isTesting
        });
        setPageStatus(slideIndex, slideAnchorLink, v.anchorLink);
        performMovement(v); //flag to avoid callingn `scrollPage()` twice in case of using anchor links
        setState({
            lastScrolledDestiny: v.anchorLink
        }); //avoid firing it twice (as it does also on scroll)
        activateMenuAndNav(v.anchorLink, v.sectionIndex);
    }
    function onDestroy$6() {
        clearTimeout(g_afterSectionLoadsId);
        clearTimeout(g_transitionLapseId);
    }
    /**
    * Returns the destination Y position based on the scrolling direction and
    * the height of the section.
    */ function getDestinationPosition(element) {
        var elementHeight = element.offsetHeight;
        var elementTop = element.offsetTop; //top of the desination will be at the top of the viewport
        var position = elementTop;
        var isScrollingDown = elementTop > state.previousDestTop;
        var sectionBottom = position - getWindowHeight() + elementHeight;
        var bigSectionsDestination = getOptions().bigSectionsDestination; //is the destination element bigger than the viewport?
        if (elementHeight > getWindowHeight()) //scrolling up?
        {
            if (!isScrollingDown && !bigSectionsDestination || bigSectionsDestination === 'bottom') position = sectionBottom;
        } else if (isScrollingDown || state.isResizing && next1(element) == null) //The bottom of the destination will be at the bottom of the viewport
        position = sectionBottom;
        /*
      Keeping record of the last scrolled position to determine the scrolling direction.
      No conventional methods can be used as the scroll bar might not be present
      AND the section might not be active if it is auto-height and didnt reach the middle
      of the viewport.
      */ setState({
            previousDestTop: position
        });
        return position;
    }
    /**
    * Performs the vertical movement (by CSS3 or by jQuery)
    */ function performMovement(v) {
        var isFastSpeed = getOptions().scrollingSpeed < 700;
        var transitionLapse = isFastSpeed ? 700 : getOptions().scrollingSpeed;
        setState({
            touchDirection: 'none',
            scrollY: Math.round(v.dtop)
        });
        EventEmitter.emit('onPerformMovement'); // using CSS3 translate functionality
        if (getOptions().css3 && getOptions().autoScrolling && !getOptions().scrollBar) {
            // The first section can have a negative value in iOS 10. Not quite sure why: -0.0142822265625
            // that's why we round it to 0.
            var translate3d = 'translate3d(0px, -' + Math.round(v.dtop) + 'px, 0px)';
            transformContainer(translate3d, true); //even when the scrollingSpeed is 0 there's a little delay, which might cause the
            //scrollingSpeed to change in case of using silentMoveTo();ç
            if (getOptions().scrollingSpeed) {
                clearTimeout(g_afterSectionLoadsId);
                g_afterSectionLoadsId = setTimeout(function() {
                    afterSectionLoads(v); //disabling canScroll when using fastSpeed
                    setState({
                        canScroll: !isFastSpeed || FP.test.isTesting
                    });
                }, getOptions().scrollingSpeed);
            } else afterSectionLoads(v);
        } else {
            var scrollSettings = getScrollSettings(v.dtop);
            FP.test.top = -v.dtop + 'px';
            css($htmlBody, {
                'scroll-behavior': 'unset'
            });
            clearTimeout(g_afterSectionLoadsId);
            scrollTo(scrollSettings.element, scrollSettings.options, getOptions().scrollingSpeed, function() {
                if (getOptions().scrollBar) /* Hack!
            The timeout prevents setting the most dominant section in the viewport as "active" when the user
            scrolled to a smaller section by using the mousewheel (auto scrolling) rather than draging the scroll bar.
             When using scrollBar:true It seems like the scroll events still getting propagated even after the scrolling animation has finished.
            */ g_afterSectionLoadsId = setTimeout(function() {
                    afterSectionLoads(v);
                }, 30);
                else {
                    afterSectionLoads(v); //disabling canScroll when using fastSpeed
                    setState({
                        canScroll: !isFastSpeed || FP.test.isTesting
                    });
                }
            });
        } // enabling canScroll after the minimum transition laps
        if (isFastSpeed) {
            clearTimeout(g_transitionLapseId);
            g_transitionLapseId = setTimeout(function() {
                setState({
                    canScroll: true
                });
            }, transitionLapse);
        }
    }
    /**
    * Actions to do once the section is loaded.
    */ function afterSectionLoads(v) {
        if (getOptions().fitToSection) css(doc.body, {
            'scroll-snap-type': 'y mandatory'
        });
        setState({
            isBeyondFullpage: false
        });
        continuousVerticalFixSectionOrder(v); //callback (afterLoad) if the site is not just resizing and readjusting the slides
        if (isFunction(getOptions().afterLoad) && !v.localIsResizing) fireCallback1('afterLoad', v);
        updateState();
        if (!v.localIsResizing) playMedia(v.element);
        addClass(v.element, COMPLETELY);
        removeClass(siblings1(v.element), COMPLETELY);
        lazyLoadOthers();
        scrollOverflowHandler.afterSectionLoads();
        setState({
            canScroll: true
        });
        if (isFunction(v.callback)) v.callback();
    }
    FP.moveSectionDown = moveSectionDown;
    /**
    * Moves the page down one section.
    */ function moveSectionDown() {
        var next = getState().activeSection.next(); //looping to the top if there's no more sections below
        if (!next && (getOptions().loopBottom || getOptions().continuousVertical)) next = getState().sections[0];
        if (next != null) scrollPage(next, null, false);
        else if (hasContentBeyondFullPage()) EventEmitter.emit('scrollBeyondFullpage');
    }
    function hasContentBeyondFullPage() {
        return getContainer().scrollHeight < $body.scrollHeight;
    }
    FP.moveSectionUp = moveSectionUp;
    /**
    * Moves the page up one section.
    */ function moveSectionUp() {
        var prev = getState().activeSection.prev(); //looping to the bottom if there's no more sections above
        if (!prev && (getOptions().loopTop || getOptions().continuousVertical)) prev = getLast(getState().sections);
        if (prev != null) scrollPage(prev, null, true);
    }
    var oldPageY = 0;
    /**
    * Detecting the direction of the mouse movement.
    * Used only for the middle button of the mouse.
    */ function mouseMoveHandler(e) {
        if (!getOptions().autoScrolling) return;
        if (state.canScroll) {
            // moving up
            if (e.pageY < oldPageY && getIsScrollAllowed().m.up) moveSectionUp();
            else if (e.pageY > oldPageY && getIsScrollAllowed().m.down) moveSectionDown();
        }
        oldPageY = e.pageY;
    }
    function setOldPageY(value) {
        oldPageY = value;
    }
    /**
    * Determines the way of scrolling up or down:
    * by 'automatically' scrolling a section or by using the default and normal scrolling.
    */ function scrolling(type) {
        if (!getIsScrollAllowed().m[type]) return;
        var scrollSection = type === 'down' ? moveSectionDown : moveSectionUp;
        if (getOptions().scrollOverflow && scrollOverflowHandler.isScrollable(getState().activeSection)) //is the scrollbar at the start/end of the scroll?
        {
            if (scrollOverflowHandler.isScrolled(type, getState().activeSection.item) && scrollOverflowHandler.shouldMovePage()) scrollSection();
        } else scrollSection();
    }
    var touchStartY = 0;
    var touchStartX = 0;
    var touchEndY = 0;
    var touchEndX = 0;
    var MSPointer = getMSPointer();
    var events1 = {
        touchmove: 'ontouchmove' in window ? 'touchmove' : MSPointer.move,
        touchstart: 'ontouchstart' in window ? 'touchstart' : MSPointer.down
    };
    /**
    * Adds the possibility to auto scroll through sections on touch devices.
    */ function addTouchHandler() {
        if (isTouchDevice || isTouch) {
            if (getOptions().autoScrolling) {
                $body.removeEventListener(events1.touchmove, preventBouncing, {
                    passive: false
                });
                $body.addEventListener(events1.touchmove, preventBouncing, {
                    passive: false
                });
            }
            var touchWrapper = getOptions().touchWrapper;
            touchWrapper.removeEventListener(events1.touchstart, touchStartHandler);
            touchWrapper.removeEventListener(events1.touchmove, touchMoveHandler, {
                passive: false
            });
            touchWrapper.addEventListener(events1.touchstart, touchStartHandler);
            touchWrapper.addEventListener(events1.touchmove, touchMoveHandler, {
                passive: false
            });
        }
    }
    /**
    * Removes the auto scrolling for touch devices.
    */ function removeTouchHandler() {
        if (isTouchDevice || isTouch) {
            // normalScrollElements requires it off #2691
            if (getOptions().autoScrolling) {
                $body.removeEventListener(events1.touchmove, touchMoveHandler, {
                    passive: false
                });
                $body.removeEventListener(events1.touchmove, preventBouncing, {
                    passive: false
                });
            }
            var touchWrapper = getOptions().touchWrapper;
            touchWrapper.removeEventListener(events1.touchstart, touchStartHandler);
            touchWrapper.removeEventListener(events1.touchmove, touchMoveHandler, {
                passive: false
            });
        }
    }
    /* Detecting touch events

    * As we are changing the top property of the page on scrolling, we can not use the traditional way to detect it.
    * This way, the touchstart and the touch moves shows an small difference between them which is the
    * used one to determine the direction.
    */ function touchMoveHandler(e) {
        var activeSection = closest(e.target, SECTION_SEL) || getState().activeSection.item;
        var hasActiveSectionOverflow = scrollOverflowHandler.isScrollable(getState().activeSection);
        var isVerticalMovementEnough = Math.abs(touchStartY - touchEndY) > win.innerHeight / 100 * getOptions().touchSensitivity;
        var isHorizontalMovementEnough = Math.abs(touchStartX - touchEndX) > getWindowWidth() / 100 * getOptions().touchSensitivity;
        var isHorizontalPredominantMove = $1(SLIDES_WRAPPER_SEL, activeSection).length && Math.abs(touchStartX - touchEndX) > Math.abs(touchStartY - touchEndY);
        var directionH = touchStartX > touchEndX ? 'right' : 'left';
        var directionV = touchStartY > touchEndY ? 'down' : 'up';
        var direction = isHorizontalPredominantMove ? directionH : directionV;
        if (isReallyTouch(e)) {
            setState({
                isGrabbing: true,
                isUsingWheel: false
            });
            if (getOptions().autoScrolling) {
                if (!hasActiveSectionOverflow || hasActiveSectionOverflow && !state.canScroll) //preventing the easing on iOS devices
                preventDefault(e);
            }
            var touchEvents = getEventsPage(e);
            touchEndY = touchEvents.y;
            touchEndX = touchEvents.x;
            setState({
                touchDirection: direction
            }); //if movement in the X axys is greater than in the Y and the currect section has slides...
            if (isHorizontalPredominantMove) //is the movement greater than the minimum resistance to scroll?
            {
                if (!state.slideMoving && isHorizontalMovementEnough) {
                    if (touchStartX > touchEndX) {
                        if (getIsScrollAllowed().m.right) EventEmitter.emit('moveSlideRight', {
                            section: activeSection
                        });
                    } else if (getIsScrollAllowed().m.left) EventEmitter.emit('moveSlideLeft', {
                        section: activeSection
                    });
                }
            } else if (getOptions().autoScrolling && state.canScroll) //is the movement greater than the minimum resistance to scroll?
            {
                if (isVerticalMovementEnough) scrolling(directionV);
            }
        }
    }
    /**
    * As IE >= 10 fires both touch and mouse events when using a mouse in a touchscreen
    * this way we make sure that is really a touch event what IE is detecting.
    */ function isReallyTouch(e) {
        //if is not IE   ||  IE is detecting `touch` or `pen`
        return typeof e.pointerType === 'undefined' || e.pointerType != 'mouse';
    }
    /**
    * Handler for the touch start event.
    */ function touchStartHandler(e) {
        //stopping the auto scroll to adjust to a section
        if (getOptions().fitToSection) setState({
            activeAnimation: false
        });
        if (isReallyTouch(e)) {
            var touchEvents = getEventsPage(e);
            touchStartY = touchEvents.y;
            touchStartX = touchEvents.x;
        }
        windowAddEvent('touchend', touchEndHandler);
    }
    /**
    * Handler for the touch end event.
    */ function touchEndHandler() {
        windowRemoveEvent('touchend', touchEndHandler);
        setState({
            isGrabbing: false
        });
    }
    /**
    * Gets the pageX and pageY properties depending on the browser.
    * https://github.com/alvarotrigo/fullPage.js/issues/194#issuecomment-34069854
    */ function getEventsPage(e) {
        var events = {};
        events.y = typeof e.pageY !== 'undefined' && (e.pageY || e.pageX) ? e.pageY : e.touches[0].pageY;
        events.x = typeof e.pageX !== 'undefined' && (e.pageY || e.pageX) ? e.pageX : e.touches[0].pageX; //in touch devices with scrollBar:true, e.pageY is detected, but we have to deal with touch events. #1008
        if (isTouch && isReallyTouch(e) && getOptions().scrollBar && typeof e.touches !== 'undefined') {
            events.y = e.touches[0].pageY;
            events.x = e.touches[0].pageX;
        }
        return events;
    }
    /*
    * Returns and object with Microsoft pointers (for IE<11 and for IE >= 11)
    * http://msdn.microsoft.com/en-us/library/ie/dn304886(v=vs.85).aspx
    */ function getMSPointer() {
        var pointer; //IE >= 11 & rest of browsers
        if (win.PointerEvent) pointer = {
            down: 'pointerdown',
            move: 'pointermove'
        };
        return pointer;
    }
    /*
    * Preventing bouncing in iOS #2285
    */ function preventBouncing(e) {
        if (getOptions().autoScrolling && isReallyTouch(e) && getIsScrollAllowed().m.up) //preventing the easing on iOS devices
        {
            if (!state.canScroll) preventDefault(e);
        }
    }
    FP.moveSlideLeft = moveSlideLeft;
    FP.moveSlideRight = moveSlideRight;
    /**
    * Slides a slider to the given direction.
    * Optional `section` param.
    */ function moveSlide(direction, section) {
        var activeSectionItem = section == null ? getState().activeSection.item : section;
        var activeSection = getPanelByElement(state.sections, activeSectionItem);
        var slides = $1(SLIDES_WRAPPER_SEL, activeSectionItem)[0]; // more than one slide needed and nothing should be sliding
        if (slides == null || state.slideMoving || activeSection.slides.length < 2) return;
        var currentSlide = activeSection.activeSlide;
        var destiny = direction === 'left' ? currentSlide.prev() : currentSlide.next(); //isn't there a next slide in the secuence?
        if (!destiny) {
            //respect loopHorizontal setting
            if (!getOptions().loopHorizontal) return;
            destiny = direction === 'left' ? getLast(activeSection.slides) : activeSection.slides[0];
        }
        setState({
            slideMoving: !FP.test.isTesting
        });
        landscapeScroll(slides, destiny.item, direction);
    }
    /**
    * Slides left the slider of the active section.
    * Optional `section` param.
    */ function moveSlideLeft(section) {
        moveSlide('left', section);
    }
    /**
    * Slides right the slider of the active section.
    * Optional `section` param.
    */ function moveSlideRight(section) {
        moveSlide('right', section);
    }
    /**
    * Gets a section by its anchor / index
    */ function getSectionByAnchor(sectionAnchor) {
        var section2 = getState().sections.filter(function(section) {
            return section.anchor === sectionAnchor;
        })[0];
        if (!section2) {
            var sectionIndex = typeof sectionAnchor !== 'undefined' ? sectionAnchor - 1 : 0;
            section2 = getState().sections[sectionIndex];
        }
        return section2;
    }
    /**
    * Scrolls the slider to the given slide destination for the given section
    */ function scrollSlider(slideElem) {
        if (slideElem != null) landscapeScroll(closest(slideElem, SLIDES_WRAPPER_SEL), slideElem);
    }
    /**
    * Scrolls to the given section and slide anchors
    */ function scrollPageAndSlide(sectionAnchor, slideAnchor) {
        var section = getSectionByAnchor(sectionAnchor); //do nothing if there's no section with the given anchor name
        if (section == null) return;
        var slideElem = getSlideByAnchor(slideAnchor, section); //we need to scroll to the section and then to the slide
        if (section.anchor !== state.lastScrolledDestiny && !hasClass(section.item, ACTIVE)) scrollPage(section, function() {
            scrollSlider(slideElem);
        });
        else scrollSlider(slideElem);
    }
    /**
    * Gets a slide inside a given section by its anchor / index
    */ function getSlideByAnchor(slideAnchor, section) {
        var slide2 = section.slides.filter(function(slide) {
            return slide.anchor === slideAnchor;
        })[0];
        if (slide2 == null) {
            slideAnchor = typeof slideAnchor !== 'undefined' ? slideAnchor : 0;
            slide2 = section.slides[slideAnchor];
        }
        return slide2 ? slide2.item : null;
    }
    FP.moveTo = moveTo$1;
    /**
    * Moves the page to the given section and slide.
    * Anchors or index positions can be used as params.
    */ function moveTo$1(sectionAnchor, slideAnchor) {
        var destiny = getSectionByAnchor(sectionAnchor);
        if (typeof slideAnchor !== 'undefined') scrollPageAndSlide(sectionAnchor, slideAnchor);
        else if (destiny != null) scrollPage(destiny);
    }
    //@ts-check
    var g_controlPressed;
    var g_keydownId;
    EventEmitter.on('bindEvents', bindEvents$8);
    function bindEvents$8() {
        //when opening a new tab (ctrl + t), `control` won't be pressed when coming back.
        windowAddEvent('blur', blurHandler); //Sliding with arrow keys, both, vertical and horizontal
        docAddEvent('keydown', keydownHandler); // for fitToSection:true
        $body.addEventListener('keydown', cancelDirectionKeyEvents); //to prevent scrolling while zooming
        docAddEvent('keyup', keyUpHandler);
        EventEmitter.on('onDestroy', onDestroy$5);
    }
    function onDestroy$5() {
        clearTimeout(g_keydownId);
        docRemoveEvent('keydown', keydownHandler);
        docRemoveEvent('keyup', keyUpHandler);
    } //Sliding with arrow keys, both, vertical and horizontal
    function keydownHandler(e) {
        clearTimeout(g_keydownId);
        var activeElement = doc.activeElement;
        var keyCode = e.keyCode;
        var isPressingHorizontalArrows = [
            37,
            39
        ].indexOf(keyCode) > -1;
        var canScrollWithKeyboard = getOptions().autoScrolling || isPressingHorizontalArrows; //tab?
        if (keyCode === 9) onTab(e);
        else if (!matches(activeElement, 'textarea') && !matches(activeElement, 'input') && !matches(activeElement, 'select') && getAttr(activeElement, 'contentEditable') !== "true" && getAttr(activeElement, 'contentEditable') !== '' && getOptions().keyboardScrolling && canScrollWithKeyboard) {
            g_controlPressed = e.ctrlKey;
            g_keydownId = setTimeout(function() {
                onkeydown(e);
            }, 0);
        }
    }
    /**
    * Keydown event
    */ function onkeydown(e) {
        var shiftPressed = e.shiftKey;
        var activeElement = doc.activeElement;
        var isMediaFocused = matches(activeElement, 'video') || matches(activeElement, 'audio');
        var isScrolled = {
            up: scrollOverflowHandler.isScrolled('up', getState().activeSection.item),
            down: scrollOverflowHandler.isScrolled('down', getState().activeSection.item)
        };
        var isUsingHorizontalArrowKeys = [
            37,
            39
        ].indexOf(e.keyCode) > -1;
        cancelDirectionKeyEvents(e); //do nothing if we can not scroll or we are not using horizotnal key arrows.
        if (!state.canScroll && !isUsingHorizontalArrowKeys) return;
        setState({
            scrollTrigger: 'keydown'
        });
        switch(e.keyCode){
            //up
            case 38:
            case 33:
                if (getIsScrollAllowed().k.up && isScrolled.up) {
                    if (state.isBeyondFullpage) EventEmitter.emit('onKeyDown', {
                        e: e
                    });
                    else moveSectionUp();
                }
                break;
            //down
            case 32:
                //spacebar
                if (shiftPressed && getIsScrollAllowed().k.up && !isMediaFocused && isScrolled.up) {
                    moveSectionUp();
                    break;
                }
            /* falls through */ case 40:
            case 34:
                if (getIsScrollAllowed().k.down && isScrolled.down) {
                    if (state.isBeyondFullpage) return;
                     // space bar?
                    if (e.keyCode !== 32 || !isMediaFocused) moveSectionDown();
                }
                break;
            //Home
            case 36:
                if (getIsScrollAllowed().k.up) moveTo$1(1);
                break;
            //End
            case 35:
                if (getIsScrollAllowed().k.down) moveTo$1(getState().sections.length);
                break;
            //left
            case 37:
                if (getIsScrollAllowed().k.left) moveSlideLeft();
                break;
            //right
            case 39:
                if (getIsScrollAllowed().k.right) moveSlideRight();
                break;
            default:
                return;
        }
    } //to prevent scrolling while zooming
    function keyUpHandler(e) {
        if (state.isWindowFocused) //the keyup gets fired on new tab ctrl + t in Firefox
        g_controlPressed = e.ctrlKey;
    } //when opening a new tab (ctrl + t), `control` won't be pressed when coming back.
    function blurHandler() {
        setState({
            isWindowFocused: false
        });
        g_controlPressed = false;
    }
    /**
    * Makes sure the tab key will only focus elements within the current section/slide
    * preventing this way from breaking the page.
    * Based on "Modals and keyboard traps"
    * from https://developers.google.com/web/fundamentals/accessibility/focus/using-tabindex
    */ function onTab(e1) {
        var isShiftPressed = e1.shiftKey;
        var activeElement = doc.activeElement;
        var focusableElements = getFocusables(getSlideOrSection(getState().activeSection.item));
        function preventAndFocusFirst(e) {
            preventDefault(e);
            return focusableElements[0] ? focusableElements[0].focus() : null;
        } //outside any section or slide? Let's not hijack the tab!
        if (isFocusOutside(e1)) return;
         //is there an element with focus?
        if (activeElement) {
            if (closest(activeElement, SECTION_ACTIVE_SEL + ',' + SECTION_ACTIVE_SEL + ' ' + SLIDE_ACTIVE_SEL) == null) activeElement = preventAndFocusFirst(e1);
        } else preventAndFocusFirst(e1);
         //when reached the first or last focusable element of the section/slide
        //we prevent the tab action to keep it in the last focusable element
        if (!isShiftPressed && activeElement == focusableElements[focusableElements.length - 1] || isShiftPressed && activeElement == focusableElements[0]) preventDefault(e1);
    }
    /**
    * Gets all the focusable elements inside the passed element.
    */ function getFocusables(el) {
        return [].slice.call($1(focusableElementsString, el)).filter(function(item) {
            return getAttr(item, 'tabindex') !== '-1' && item.offsetParent !== null;
        });
    }
    /**
    * Determines whether the focus is outside fullpage.js sections/slides or not.
    */ function isFocusOutside(e) {
        var allFocusables = getFocusables(doc);
        var currentFocusIndex = allFocusables.indexOf(doc.activeElement);
        var focusDestinationIndex = e.shiftKey ? currentFocusIndex - 1 : currentFocusIndex + 1;
        var focusDestination = allFocusables[focusDestinationIndex];
        var destinationItemSlide = closest(focusDestination, SLIDE_SEL);
        var destinationItemSection = closest(focusDestination, SECTION_SEL);
        return !destinationItemSlide && !destinationItemSection;
    }
    function shouldCancelKeyboardNavigation(e) {
        var keyControls = [
            40,
            38,
            32,
            33,
            34
        ];
        return keyControls.indexOf(e.keyCode) > -1 && !state.isBeyondFullpage;
    } //preventing the scroll with arrow keys & spacebar & Page Up & Down keys
    function cancelDirectionKeyEvents(e) {
        if (shouldCancelKeyboardNavigation(e) && !closest(e.target, OVERFLOW_SEL)) e.preventDefault();
    }
    function getControlPressed() {
        return g_controlPressed;
    }
    var prevTime = new Date().getTime();
    var scrollings = [];
    FP.setMouseWheelScrolling = setMouseWheelScrolling;
    /**
    * Adds or remove the possibility of scrolling through sections by using the mouse wheel or the trackpad.
    */ function setMouseWheelScrolling(value) {
        if (value) {
            addMouseWheelHandler();
            addMiddleWheelHandler();
        } else {
            removeMouseWheelHandler();
            removeMiddleWheelHandler();
        }
    }
    /**
    * Adds the auto scrolling action for the mouse wheel and trackpad.
    * After this function is called, the mousewheel and trackpad movements will scroll through sections
    * https://developer.mozilla.org/en-US/docs/Web/Events/wheel
    */ function addMouseWheelHandler() {
        var prefix = '';
        var _addEventListener;
        if (win.addEventListener) _addEventListener = "addEventListener";
        else {
            _addEventListener = "attachEvent";
            prefix = 'on';
        } // detect available wheel event
        var support = 'onwheel' in doc.createElement('div') ? 'wheel' : // @ts-ignore
        doc.onmousewheel !== undefined ? 'mousewheel' : 'DOMMouseScroll'; // let's assume that remaining browsers are older Firefox
        var passiveEvent = getPassiveOptionsIfPossible();
        if (support == 'DOMMouseScroll') doc[_addEventListener](prefix + 'MozMousePixelScroll', MouseWheelHandler, passiveEvent);
        else doc[_addEventListener](prefix + support, MouseWheelHandler, passiveEvent);
    }
    /**
    * Binding the mousemove when the mouse's middle button is pressed
    */ function addMiddleWheelHandler() {
        getContainer().addEventListener('mousedown', mouseDownHandler);
        getContainer().addEventListener('mouseup', mouseUpHandler);
    }
    /**
    * Removes the auto scrolling action fired by the mouse wheel and trackpad.
    * After this function is called, the mousewheel and trackpad movements won't scroll through sections.
    */ function removeMouseWheelHandler() {
        if (doc.addEventListener) {
            docRemoveEvent('mousewheel', MouseWheelHandler, false); //IE9, Chrome, Safari, Oper
            docRemoveEvent('wheel', MouseWheelHandler, false); //Firefox
            docRemoveEvent('MozMousePixelScroll', MouseWheelHandler, false); //old Firefox
        } else // @ts-ignore
        doc.detachEvent('onmousewheel', MouseWheelHandler); //IE 6/7/8
    }
    /**
    * Unbinding the mousemove when the mouse's middle button is released
    */ function removeMiddleWheelHandler() {
        getContainer().removeEventListener('mousedown', mouseDownHandler);
        getContainer().removeEventListener('mouseup', mouseUpHandler);
    }
    /**
     * Detecting mousewheel scrolling
     *
     * http://blogs.sitepointstatic.com/examples/tech/mouse-wheel/index.html
     * http://www.sitepoint.com/html5-javascript-mouse-wheel/
     */ function MouseWheelHandler(e) {
        var curTime = new Date().getTime();
        var isNormalScroll = hasClass($1(COMPLETELY_SEL)[0], NORMAL_SCROLL);
        var isScrollAllowedBeyondFullPage = beyondFullPageHandler(getContainer(), e);
        if (!state.isUsingWheel) setState({
            isGrabbing: false,
            isUsingWheel: true,
            touchDirection: 'none'
        });
         //is scroll allowed?
        if (!getIsScrollAllowed().m.down && !getIsScrollAllowed().m.up) {
            preventDefault(e);
            return false;
        }
        if (isScrollAllowedBeyondFullPage) return true;
        else if (isScrollAllowedBeyondFullPage === false) {
            preventDefault(e);
            return false;
        } //autoscrolling and not zooming?
        if (getOptions().autoScrolling && !getControlPressed() && !isNormalScroll) {
            // cross-browser wheel delta
            e = e || win.event;
            var value = e.wheelDelta || -e.deltaY || -e.detail;
            var delta = Math.max(-1, Math.min(1, value));
            var horizontalDetection = typeof e.wheelDeltaX !== 'undefined' || typeof e.deltaX !== 'undefined';
            var isScrollingVertically = Math.abs(e.wheelDeltaX) < Math.abs(e.wheelDelta) || Math.abs(e.deltaX) < Math.abs(e.deltaY) || !horizontalDetection;
            var direction = delta < 0 ? 'down' : delta > 0 ? 'up' : 'none'; //Limiting the array to 150 (lets not waste memory!)
            if (scrollings.length > 149) scrollings.shift();
             //keeping record of the previous scrollings
            scrollings.push(Math.abs(value)); //preventing to scroll the site on mouse wheel when scrollbar is present
            if (getOptions().scrollBar) preventDefault(e);
             //time difference between the last scroll and the current one
            var timeDiff = curTime - prevTime;
            prevTime = curTime; //haven't they scrolled in a while?
            //(enough to be consider a different scrolling action to scroll another section)
            if (timeDiff > 200) //emptying the array, we dont care about old scrollings for our averages
            scrollings = [];
            setState({
                wheelDirection: direction
            });
            if (state.canScroll) {
                var averageEnd = getAverage(scrollings, 10);
                var averageMiddle = getAverage(scrollings, 70);
                var isAccelerating = averageEnd >= averageMiddle; //to avoid double swipes...
                if (isAccelerating && isScrollingVertically) {
                    setState({
                        scrollTrigger: 'wheel'
                    }); //scrolling down?
                    if (delta < 0) scrolling('down');
                    else scrolling('up');
                }
            }
            return false;
        }
        if (getOptions().fitToSection) //stopping the auto scroll to adjust to a section
        setState({
            activeAnimation: false
        });
    } //binding the mousemove when the mouse's middle button is released
    function mouseDownHandler(e) {
        //middle button
        if (e.which == 2) {
            setOldPageY(e.pageY);
            getContainer().addEventListener('mousemove', mouseMoveHandler);
        }
    } //unbinding the mousemove when the mouse's middle button is released
    function mouseUpHandler(e) {
        //middle button
        if (e.which == 2) getContainer().removeEventListener('mousemove', mouseMoveHandler);
    }
    /**
    * Adds or remove the mouse wheel hijacking
    */ function setMouseHijack(value) {
        if (value) {
            setMouseWheelScrolling(true);
            addTouchHandler();
        } else {
            setMouseWheelScrolling(false);
            removeTouchHandler();
        }
    }
    var g_canFireMouseEnterNormalScroll = true;
    EventEmitter.on('bindEvents', bindEvents$7);
    function bindEvents$7() {
        /**
      * Applying normalScroll elements.
      * Ignoring the scrolls over the specified selectors.
      */ if (getOptions().normalScrollElements) {
            [
                'mouseenter',
                'touchstart'
            ].forEach(function(eventName) {
                forMouseLeaveOrTouch(eventName, false);
            });
            [
                'mouseleave',
                'touchend'
            ].forEach(function(eventName) {
                forMouseLeaveOrTouch(eventName, true);
            });
        }
        EventEmitter.on('onDestroy', onDestroy$4);
    }
    function onDestroy$4() {
        [
            'mouseenter',
            'touchstart',
            'mouseleave',
            'touchend'
        ].forEach(function(eventName) {
            docRemoveEvent(eventName, onMouseEnterOrLeave, true); //true is required!
        });
    }
    function forMouseLeaveOrTouch(eventName, allowScrolling) {
        //a way to pass arguments to the onMouseEnterOrLeave function
        document['fp_' + eventName] = allowScrolling;
        docAddEvent(eventName, onMouseEnterOrLeave, true); //capturing phase
    }
    function onMouseEnterOrLeave(e) {
        var type = e.type;
        var isInsideOneNormalScroll = false; //onMouseLeave will use the destination target, not the one we are moving away from
        var target = type === 'mouseleave' ? e.toElement || e.relatedTarget : e.target; //coming from closing a normalScrollElements modal or moving outside viewport?
        if (target == document || !target) {
            setMouseHijack(true);
            return;
        }
        if (type === 'touchend') {
            g_canFireMouseEnterNormalScroll = false;
            setTimeout(function() {
                g_canFireMouseEnterNormalScroll = true;
            }, 800);
        } //preventing mouseenter event to do anything when coming from a touchEnd event
        //fixing issue #3576
        if (type === 'mouseenter' && !g_canFireMouseEnterNormalScroll) return;
        var normalSelectors = getOptions().normalScrollElements.split(',');
        normalSelectors.forEach(function(normalSelector) {
            if (!isInsideOneNormalScroll) {
                var isNormalScrollTarget = matches(target, normalSelector); //leaving a child inside the normalScoll element is not leaving the normalScroll #3661
                var isNormalScrollChildFocused = closest(target, normalSelector);
                if (isNormalScrollTarget || isNormalScrollChildFocused) {
                    if (!FP.shared.isNormalScrollElement) setMouseHijack(false);
                    FP.shared.isNormalScrollElement = true;
                    isInsideOneNormalScroll = true;
                }
            }
        }); //not inside a single normal scroll element anymore?
        if (!isInsideOneNormalScroll && FP.shared.isNormalScrollElement) {
            setMouseHijack(true);
            FP.shared.isNormalScrollElement = false;
        }
    }
    FP.silentMoveTo = silentMoveTo;
    /**
    * Moves the page to the given section and slide with no animation.
    * Anchors or index positions can be used as params.
    */ function silentMoveTo(sectionAnchor, slideAnchor) {
        setScrollingSpeed(0, 'internal');
        moveTo$1(sectionAnchor, slideAnchor);
        setScrollingSpeed(getOriginals().scrollingSpeed, 'internal');
    }
    var previousHeight = getWindowHeight();
    var windowsWidth = getWindowWidth();
    var g_resizeId;
    var g_isConsecutiveResize = false;
    FP.reBuild = reBuild;
    EventEmitter.on('bindEvents', bindEvents$6);
    function bindEvents$6() {
        //when resizing the site, we adjust the heights of the sections, slimScroll...
        windowAddEvent('resize', resizeHandler);
        EventEmitter.on('onDestroy', onDestroy$3);
    }
    function onDestroy$3() {
        clearTimeout(g_resizeId);
        windowRemoveEvent('resize', resizeHandler);
    }
    /*
    * Resize event handler.
    */ function resizeHandler() {
        if (!g_isConsecutiveResize) {
            if (getOptions().autoScrolling && !getOptions().scrollBar || !getOptions().fitToSection) setSectionsHeight(getWindowHeight());
        }
        g_isConsecutiveResize = true; //in order to call the functions only when the resize is finished
        //http://stackoverflow.com/questions/4298612/jquery-how-to-call-resize-event-only-once-its-finished-resizing    
        clearTimeout(g_resizeId);
        g_resizeId = setTimeout(function() {
            //issue #3336 
            //(some apps or browsers, like Chrome/Firefox for Mobile take time to report the real height)
            //so we check it 3 times with intervals in that case
            // for(var i = 0; i< 4; i++){
            resizeActions();
            g_isConsecutiveResize = false; // }
        }, 400);
    }
    /**
    * When resizing the site, we adjust the heights of the sections, slimScroll...
    */ function resizeActions() {
        setState({
            isResizing: true
        });
        setSectionsHeight('');
        if (getOptions().fitToSection && !getOptions().autoScrolling && !state.isBeyondFullpage) setVhUnits();
        EventEmitter.emit('contentChanged');
        updateState(); //checking if it needs to get responsive
        responsive(); // rebuild immediately on touch devices
        if (isTouchDevice) {
            var activeElement = doc.activeElement; //if the keyboard is NOT visible
            if (!matches(activeElement, 'textarea') && !matches(activeElement, 'input') && !matches(activeElement, 'select')) {
                var currentHeight = getWindowHeight(); //making sure the change in the viewport size is enough to force a rebuild. (20 % of the window to avoid problems when hidding scroll bars)
                if (Math.abs(currentHeight - previousHeight) > 20 * Math.max(previousHeight, currentHeight) / 100) {
                    reBuild(true);
                    previousHeight = currentHeight;
                }
            }
        } else adjustToNewViewport();
        setState({
            isResizing: false
        });
    }
    /**
     * When resizing is finished, we adjust the slides sizes and positions
     */ function reBuild(resizing) {
        if (hasClass(getContainer(), DESTROYED)) return;
         //nothing to do if the plugin was destroyed
        //updating global vars
        setState({
            isResizing: true,
            windowsHeight: getWindowHeight(),
            windowsWidth: getWindowWidth()
        });
        var sections = getState().sections;
        for(var i = 0; i < sections.length; ++i){
            var section = sections[i];
            var slidesWrap = $1(SLIDES_WRAPPER_SEL, section.item)[0];
            var slides = section.slides; //adjusting the position fo the FULL WIDTH slides...
            if (slides.length > 1) landscapeScroll(slidesWrap, section.activeSlide.item);
        }
        if (getOptions().scrollOverflow) scrollOverflowHandler.makeScrollable();
        var sectionIndex = getState().activeSection.index();
        if (!state.isBeyondFullpage) //isn't it the first section?
        {
            if (sectionIndex) //adjusting the position for the current section
            silentMoveTo(sectionIndex + 1);
        }
        setState({
            isResizing: false
        });
        if (isFunction(getOptions().afterResize) && resizing) getOptions().afterResize.call(getContainer(), win.innerWidth, win.innerHeight);
        if (isFunction(getOptions().afterReBuild) && !resizing) getOptions().afterReBuild.call(getContainer());
        trigger(getContainer(), 'afterRebuild');
    }
    /**
    * Adjusts a section to the viewport if it has changed.
    */ function adjustToNewViewport() {
        var newWindowHeight = getWindowHeight();
        var newWindowWidth = getWindowWidth();
        if (state.windowsHeight !== newWindowHeight || windowsWidth !== newWindowWidth) {
            setState({
                windowsHeight: newWindowHeight
            });
            windowsWidth = newWindowWidth;
            reBuild(true);
        }
    }
    function setSectionsHeight(value) {
        var propertyValue = value === '' ? '' : value + 'px';
        getState().sections.forEach(function(section) {
            css(section.item, {
                'height': propertyValue
            });
        });
    }
    /**
     * Defining the value in px of a VH unit. (Used for autoScrolling: false)
     * To fix the height issue on mobile devices when using VH units.
     * https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
     */ function setVhUnits() {
        if (!getOptions().autoScrolling || getOptions().scrollBar) {
            // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
            var vh = win.innerHeight * 0.01; // Then we set the value in the --vh custom property to the root of the document
            doc.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
        }
    }
    function getAnchorsURL() {
        var section;
        var slide;
        var hash = win.location.hash;
        if (hash.length) {
            //getting the anchor link in the URL and deleting the `#`
            var anchorsParts = hash.replace('#', '').split('/'); //using / for visual reasons and not as a section/slide separator #2803
            var isFunkyAnchor = hash.indexOf('#/') > -1;
            section = isFunkyAnchor ? '/' + anchorsParts[1] : decodeURIComponent(anchorsParts[0]);
            var slideAnchor = isFunkyAnchor ? anchorsParts[2] : anchorsParts[1];
            if (slideAnchor && slideAnchor.length) slide = decodeURIComponent(slideAnchor);
        }
        return {
            section: section,
            slide: slide
        };
    }
    FP.setLockAnchors = setLockAnchors;
    EventEmitter.on('bindEvents', bindEvents$5);
    function bindEvents$5() {
        //detecting any change on the URL to scroll to the given anchor link
        //(a way to detect back history button as we play with the hashes on the URL)
        windowAddEvent('hashchange', hashChangeHandler);
        EventEmitter.on('onDestroy', onDestroy$2);
    }
    function onDestroy$2() {
        windowRemoveEvent('hashchange', hashChangeHandler);
    }
    /**
    * Sets lockAnchors
    */ function setLockAnchors(value) {
        getOptions().lockAnchors = value;
    }
    /**
    * Detecting any change on the URL to scroll to the given anchor link
    * (a way to detect back history button as we play with the hashes on the URL)
    */ function hashChangeHandler() {
        if (!state.isScrolling && !getOptions().lockAnchors) {
            var anchors = getAnchorsURL();
            var sectionAnchor = anchors.section;
            var slideAnchor = anchors.slide; //when moving to a slide in the first section for the first time (first time to add an anchor to the URL)
            var isFirstSlideMove = typeof state.lastScrolledDestiny === 'undefined';
            var isFirstScrollMove = typeof state.lastScrolledDestiny === 'undefined' && typeof slideAnchor === 'undefined' && !state.slideMoving;
            if (sectionAnchor && sectionAnchor.length) /*in order to call scrollpage() only once for each destination at a time
          It is called twice for each scroll otherwise, as in case of using anchorlinks `hashChange`
          event is fired on every scroll too.*/ {
                if (sectionAnchor && sectionAnchor !== state.lastScrolledDestiny && !isFirstSlideMove || isFirstScrollMove || !state.slideMoving && state.lastScrolledSlide != slideAnchor) EventEmitter.emit('onScrollPageAndSlide', {
                    sectionAnchor: sectionAnchor,
                    slideAnchor: slideAnchor
                });
            }
        }
    }
    EventEmitter.on('bindEvents', bindEvents$4);
    function bindEvents$4() {
        docAddEvent('wheel', wheelDataHandler.registerEvent, getPassiveOptionsIfPossible());
        EventEmitter.on('scrollBeyondFullpage', scrollBeyondFullPage);
        EventEmitter.on('onKeyDown', onKeyDown);
    }
    EventEmitter.on('bindEvents', bindEvents$3);
    function bindEvents$3() {
        EventEmitter.on('onClickOrTouch', onClickOrTouch$1);
    }
    function onClickOrTouch$1(params) {
        var target = params.target;
        if (closest(target, getOptions().menu + ' [data-menuanchor]')) menuItemsHandler.call(target, params);
    } //Menu item handler when not using anchors or using lockAnchors:true
    function menuItemsHandler(e) {
        setState({
            scrollTrigger: 'menu'
        });
        if ($1(getOptions().menu)[0] && (getOptions().lockAnchors || !getOptions().anchors.length)) {
            preventDefault(e);
            /*jshint validthis:true */ EventEmitter.emit('onMenuClick', {
                anchor: getAttr(this, 'data-menuanchor')
            });
        }
    }
    EventEmitter.on('bindEvents', bindEvents$2);
    function bindEvents$2() {
        EventEmitter.on('onClickOrTouch', onClickOrTouch);
    }
    function onClickOrTouch(params) {
        var target = params.target;
        if (target && closest(target, SECTION_NAV_SEL + ' a')) sectionBulletHandler.call(target, params.e);
        else if (matches(target, SECTION_NAV_TOOLTIP_SEL)) tooltipTextHandler.call(target);
        else if (matches(target, SLIDES_NAV_LINK_SEL) || closest(target, SLIDES_NAV_LINK_SEL) != null) slideBulletHandler.call(target, params.e);
    }
    var lastScroll = 0;
    var g_scrollId;
    var g_scrollId2;
    EventEmitter.on('onDestroy', onDestroy$1); //when scrolling...
    function scrollHandler(e) {
        var currentSection;
        var currentSectionElem;
        if (state.isResizing || !getState().activeSection) return;
        getLast(getState().sections);
        if (getState().isBeyondFullpage || getState().isAboutToScrollToFullPage) return;
        if (!getOptions().autoScrolling || getOptions().scrollBar) {
            var currentScroll = getScrollTop(getOptions());
            var scrollDirection = getScrollDirection(currentScroll);
            var visibleSectionIndex = 0;
            var screen_mid = currentScroll + getWindowHeight() / 2.0;
            var isAtBottom = $body.scrollHeight - getWindowHeight() === currentScroll;
            var sections = getState().sections;
            setState({
                scrollY: currentScroll
            }); //when using `auto-height` for a small last section it won't be centered in the viewport
            if (isAtBottom) visibleSectionIndex = sections.length - 1;
            else if (!currentScroll) visibleSectionIndex = 0;
            else for(var i = 0; i < sections.length; ++i){
                var section = sections[i].item; // Pick the the last section which passes the middle line of the screen.
                if (section.offsetTop <= screen_mid) visibleSectionIndex = i;
            }
            if (isCompletelyInViewPort(scrollDirection)) {
                if (!hasClass(getState().activeSection.item, COMPLETELY)) {
                    addClass(getState().activeSection.item, COMPLETELY);
                    removeClass(siblings1(getState().activeSection.item), COMPLETELY);
                }
            } //geting the last one, the current one on the screen
            currentSection = sections[visibleSectionIndex];
            currentSectionElem = currentSection.item; //setting the visible section as active when manually scrolling
            //executing only once the first time we reach the section
            if (!currentSection.isActive) {
                setState({
                    isScrolling: true
                });
                var leavingSection = getState().activeSection.item;
                var leavingSectionIndex = getState().activeSection.index() + 1;
                var yMovement = getYmovement(getState().activeSection, currentSectionElem);
                var anchorLink = currentSection.anchor;
                var sectionIndex = currentSection.index() + 1;
                var activeSlide = currentSection.activeSlide;
                var slideIndex;
                var slideAnchorLink;
                var callbacksParams = {
                    activeSection: leavingSection,
                    sectionIndex: sectionIndex - 1,
                    anchorLink: anchorLink,
                    element: currentSectionElem,
                    leavingSection: leavingSectionIndex,
                    direction: yMovement,
                    items: {
                        origin: getState().activeSection,
                        destination: currentSection
                    }
                };
                if (activeSlide) {
                    slideAnchorLink = activeSlide.anchor;
                    slideIndex = activeSlide.index();
                }
                if (state.canScroll) {
                    addClass(currentSectionElem, ACTIVE);
                    removeClass(siblings1(currentSectionElem), ACTIVE);
                    if (isFunction(getOptions().beforeLeave)) fireCallbackOncePerScroll('beforeLeave', callbacksParams);
                    if (isFunction(getOptions().onLeave)) fireCallback1('onLeave', callbacksParams);
                    if (isFunction(getOptions().afterLoad)) fireCallback1('afterLoad', callbacksParams);
                    stopMedia(leavingSection);
                    lazyLoad(currentSectionElem);
                    playMedia(currentSectionElem);
                    activateMenuAndNav(anchorLink, sectionIndex - 1);
                    if (getOptions().anchors.length) //needed to enter in hashChange event when using the menu with anchor links
                    setState({
                        lastScrolledDestiny: anchorLink
                    });
                    setPageStatus(slideIndex, slideAnchorLink, anchorLink);
                    updateState();
                } //small timeout in order to avoid entering in hashChange event when scrolling is not finished yet
                clearTimeout(g_scrollId);
                g_scrollId = setTimeout(function() {
                    setState({
                        isScrolling: false
                    });
                }, 100);
            }
        }
    }
    function onDestroy$1() {
        clearTimeout(g_scrollId);
        clearTimeout(g_scrollId2);
    }
    /**
    * Gets the directon of the the scrolling fired by the scroll event.
    */ function getScrollDirection(currentScroll) {
        var direction = currentScroll > lastScroll ? 'down' : 'up';
        lastScroll = currentScroll; //needed for auto-height sections to determine if we want to scroll to the top or bottom of the destination
        setState({
            previousDestTop: currentScroll
        });
        return direction;
    }
    /**
    * Determines whether the active section has seen in its whole or not.
    */ function isCompletelyInViewPort(movement) {
        var top = getState().activeSection.item.offsetTop;
        var bottom = top + getWindowHeight();
        if (movement == 'up') return bottom >= getScrollTop(getOptions()) + getWindowHeight();
        return top <= getScrollTop(getOptions());
    }
    EventEmitter.on('bindEvents', bindEvents$1);
    EventEmitter.on('onDestroy', onDestroy);
    function onDestroy() {
        windowRemoveEvent('scroll', scrollHandler);
    }
    function bindEvents$1() {
        windowAddEvent('scroll', scrollHandler);
        doc.body.addEventListener('scroll', scrollHandler);
        EventEmitter.on('onScrollPageAndSlide', function(params) {
            scrollPageAndSlide(params.sectionAnchor, params.slideAnchor);
        });
        EventEmitter.on('onMenuClick', function(params) {
            moveTo$1(params.anchor, undefined);
        });
        EventEmitter.on('onScrollOverflowScrolled', function(params) {
            var scrollSection = params.direction === 'down' ? moveSectionDown : moveSectionUp;
            scrollSection();
        });
        EventEmitter.on('scrollPage', function(params) {
            scrollPage(params.destination);
        });
    }
    FP.getActiveSlide = getActiveSlide;
    FP.getScrollX = function() {
        return state.scrollX;
    };
    EventEmitter.on('bindEvents', bindEvents);
    function bindEvents() {
        EventEmitter.on('onDestroy', onDestroy$7);
        EventEmitter.on('landscapeScroll', function(params) {
            landscapeScroll(params.slides, params.destination);
        });
        EventEmitter.on('moveSlideRight', function(params) {
            moveSlideRight(params.section);
        });
        EventEmitter.on('moveSlideLeft', function(params) {
            moveSlideLeft(params.section);
        });
    }
    /**
    * Gets the active slide.
    */ function getActiveSlide() {
        return nullOrSlide(getState().activeSection.activeSlide);
    }
    EventEmitter.on('bindEvents', init$1);
    function init$1() {
        var position = getOptions().credits.position;
        var positionStyle = [
            'left',
            'right'
        ].indexOf(position) > -1 ? "".concat(position, ": 0;") : '';
        var waterMark = "\n        <div class=\"fp-watermark\" style=\"".concat(positionStyle, "\">\n            <a href=\"https://alvarotrigo.com/fullPage/\" \n                rel=\"nofollow noopener\" \n                target=\"_blank\" \n                style=\"text-decoration:none; color: #000;\">\n                    ").concat(getOptions().credits.label, "\n            </a>\n        </div>\n    ");
        var lastSection = getLast(state.sections);
        var shouldUseWaterMark = getOptions().credits.enabled && !state.isValid;
        if (lastSection && lastSection.item && shouldUseWaterMark) lastSection.item.insertAdjacentHTML('beforeend', waterMark);
    }
    !function() {
        EventEmitter.on("onInitialise", function() {
            var n2, s1;
            setState({
                isValid: (getOptions().licenseKey, n2 = getOptions().licenseKey, s1 = function(n3) {
                    var e3 = parseInt("\x35\x31\x34").toString(16);
                    if (!n3 || n3.length < 29 || 4 === n3.split(t1[0]).length) return null;
                    var i2 = [
                        "\x45\x61\x63\x68",
                        "\x66\x6f\x72"
                    ][r()]().join(""), s2 = n3[[
                        "\x73\x70\x6c\x69\x74"
                    ]]("-"), l = [];
                    s2[i2](function(t2, n4) {
                        if (n4 < 4) {
                            var i = function(t3) {
                                var n = t3[t3.length - 1], e = [
                                    "\x4e\x61\x4e",
                                    "\x69\x73"
                                ][r()]().join("");
                                return window[e](n) ? o(n) : function(t) {
                                    return t - ACTIVE.length;
                                }(n);
                            }(t2);
                            l.push(i);
                            var a = o(t2[i]);
                            if (1 === n4) {
                                var s = [
                                    "\x70\x61",
                                    "\x64\x53",
                                    "\x74",
                                    "\x61\x72\x74"
                                ].join("");
                                a = a.toString()[s](2, "0");
                            }
                            e3 += a, 0 !== n4 && 1 !== n4 || (e3 += "-");
                        }
                    });
                    var p = 0, c = "";
                    return n3.split("-").forEach(function(t, n) {
                        if (n < 4) {
                            var _r = 0;
                            for(var e = 0; e < 4; e++)e !== l[n] && (_r += Math.abs(o(t[e])), isNaN(t[e]) || p++);
                            var i = a1(_r);
                            c += i;
                        }
                    }), c += a1(p), {
                        v: new Date(e3 + "T00:00"),
                        o: e3.split("-")[2] === 8 * (ACTIVE.length - 2) + "",
                        l: c
                    };
                }(n2), s1 && (getOptions().credits && s1 && e2 <= s1.v && s1.l === n2.split(t1[0])[4] || function(t) {
                    var n = i1[r()]().join("");
                    return t && 0 === n.indexOf(t) && t.length === n.length;
                }(n2) || s1.o) || !1)
            });
        });
        var t1 = [
            "-"
        ];
        var n1 = "2022-3-19".split("-"), e2 = new Date(n1[0], n1[1], n1[2]), i1 = [
            "se",
            "licen",
            "-",
            "v3",
            "l",
            "gp"
        ];
        function r() {
            return [
                "\x72\x65",
                "\x76\x65\x72\x73\x65"
            ].join("");
        }
        function o(t) {
            return isNaN(t) ? t.charCodeAt(0) - 72 : t;
        }
        function a1(t) {
            var n = 72 + t;
            return n > 90 && n < 97 && (n += 15), String.fromCharCode(n).toUpperCase();
        }
    }();
    //@ts-check
    FP.setKeyboardScrolling = setKeyboardScrolling;
    /**
    * Adds or remove the possibility of scrolling through sections by using the keyboard arrow keys
    */ function setKeyboardScrolling(value, directions) {
        if (typeof directions !== 'undefined') {
            directions = directions.replace(/ /g, '').split(',');
            directions.forEach(function(direction) {
                setIsScrollAllowed(value, direction, 'k');
            });
        } else {
            setIsScrollAllowed(value, 'all', 'k');
            getOptions().keyboardScrolling = value;
        }
    }
    /**
    * Sets the data-anchor attributes to the menu elements and activates the current one.
    */ function styleMenu(section) {
        var index = section.index();
        if (typeof getOptions().anchors[index] !== 'undefined') //activating the menu / nav element on load
        {
            if (section.isActive) activateMenuAndNav(getOptions().anchors[index], index);
        } //moving the menu outside the main container if it is inside (avoid problems with fixed positions when using CSS3 tranforms)
        if (getOptions().menu && getOptions().css3 && closest($1(getOptions().menu)[0], WRAPPER_SEL) != null) $1(getOptions().menu).forEach(function(menu) {
            $body.appendChild(menu);
        });
    }
    /**
    * Works over the DOM structure to set it up for the current fullpage getOptions().
    */ function prepareDom() {
        css(getParentsUntil(getContainer(), 'body'), {
            'height': '100%',
            'position': 'relative'
        }); //adding a class to recognize the container internally in the code
        addClass(getContainer(), WRAPPER);
        addClass($html, ENABLED); //due to https://github.com/alvarotrigo/fullPage.js/issues/1502
        setState({
            windowsHeight: getWindowHeight()
        });
        removeClass(getContainer(), DESTROYED); //in case it was destroyed before initializing it again
        addInternalSelectors();
        var sections = getState().sectionsIncludingHidden; //styling the sections / slides / menu
        for(var i = 0; i < sections.length; i++){
            var section = sections[i];
            var slides = section.allSlidesItems; //caching the original styles to add them back on destroy('all')
            section.item.setAttribute('data-fp-styles', getAttr(section.item, 'style'));
            styleSection(section);
            styleMenu(section); // if there's any slide
            if (slides.length > 0) styleSlides(section);
        } //fixed elements need to be moved out of the plugin container due to problems with CSS3.
        if (getOptions().fixedElements && getOptions().css3) $1(getOptions().fixedElements).forEach(function(item) {
            $body.appendChild(item);
        });
         //vertical centered of the navigation + active bullet
        if (getOptions().navigation) addVerticalNavigation();
        enableYoutubeAPI();
    }
    FP.shared.afterRenderActions = afterRenderActions;
    /**
    * Actions and callbacks to fire afterRender
    */ function afterRenderActions() {
        var section = getState().activeSection;
        var sectionElem = getState().activeSection.item;
        addClass(sectionElem, COMPLETELY);
        lazyLoad(sectionElem);
        lazyLoadOthers();
        playMedia(sectionElem);
        if (isDestinyTheStartingSection() && isFunction(getOptions().afterLoad)) fireCallback1('afterLoad', {
            activeSection: sectionElem,
            element: sectionElem,
            direction: null,
            //for backwards compatibility callback (to be removed in a future!)
            anchorLink: section.anchor,
            sectionIndex: section.index(),
            items: {
                origin: getState().activeSection,
                destination: getState().activeSection
            }
        });
        if (isFunction(getOptions().afterRender)) fireCallback1('afterRender');
    }
    /**
    * Determines if the URL anchor destiny is the starting section (the one using 'active' class before initialization)
    */ function isDestinyTheStartingSection() {
        var anchor = getAnchorsURL();
        var destinationSection = getSectionByAnchor(anchor.section);
        return !anchor.section || !destinationSection || typeof destinationSection !== 'undefined' && destinationSection.index() === index1(getStartingSection());
    }
    FP.setAllowScrolling = setAllowScrolling;
    /**
    * Adds or remove the possibility of scrolling through sections by using the mouse wheel/trackpad or touch gestures.
    * Optionally a second parameter can be used to specify the direction for which the action will be applied.
    *
    * @param directions string containing the direction or directions separated by comma.
    */ function setAllowScrolling(value, directions) {
        if (typeof directions !== 'undefined') {
            directions = directions.replace(/ /g, '').split(',');
            directions.forEach(function(direction) {
                setIsScrollAllowed(value, direction, 'm');
            });
        } else setIsScrollAllowed(value, 'all', 'm');
    }
    /**
    * Scrolls to the anchor in the URL when loading the site
    */ function scrollToAnchor() {
        var anchors = getAnchorsURL();
        var sectionAnchor = anchors.section;
        var slideAnchor = anchors.slide;
        if (sectionAnchor) {
            //if theres any #
            if (getOptions().animateAnchor) scrollPageAndSlide(sectionAnchor, slideAnchor);
            else silentMoveTo(sectionAnchor, slideAnchor);
        }
    }
    /*
    * Removes inline styles added by fullpage.js
    */ function destroyStructure() {
        //reseting the `top` or `translate` properties to 0
        silentScroll(0); //loading all the lazy load content
        $1('img[data-src], source[data-src], audio[data-src], iframe[data-src]', getContainer()).forEach(function(item) {
            setSrc(item, 'src');
        });
        $1('img[data-srcset]').forEach(function(item) {
            setSrc(item, 'srcset');
        });
        remove1($1(SECTION_NAV_SEL + ', ' + SLIDES_NAV_SEL + ', ' + SLIDES_ARROW_SEL)); //removing inline styles
        css(getNodes(getState().sections), {
            'height': '',
            'background-color': '',
            'padding': ''
        });
        css(getNodes(getState().slides), {
            'width': ''
        });
        css(getContainer(), {
            'height': '',
            'position': '',
            '-ms-touch-action': '',
            'touch-action': ''
        });
        css($htmlBody, {
            'overflow': '',
            'height': ''
        }); // remove .fp-enabled class
        removeClass($html, ENABLED); // remove .fp-responsive class
        removeClass($body, RESPONSIVE); // remove all of the .fp-viewing- classes
        $body.className.split(/\s+/).forEach(function(className) {
            if (className.indexOf(VIEWING_PREFIX) === 0) removeClass($body, className);
        }); //removing added classes
        getNodes(getState().panels).forEach(function(item) {
            if (getOptions().scrollOverflow) removeClass(item, OVERFLOW);
            removeClass(item, TABLE + ' ' + ACTIVE + ' ' + COMPLETELY);
            var previousStyles = getAttr(item, 'data-fp-styles');
            if (previousStyles) item.setAttribute('style', getAttr(item, 'data-fp-styles'));
             //removing anchors if they were not set using the HTML markup
            if (hasClass(item, SECTION) && !getInitialAnchorsInDom()) item.removeAttribute('data-anchor');
        }); //removing the applied transition from the fullpage wrapper
        removeAnimation(getContainer()); //Unwrapping content
        [
            TABLE_CELL_SEL,
            SLIDES_CONTAINER_SEL,
            SLIDES_WRAPPER_SEL
        ].forEach(function(selector) {
            $1(selector, getContainer()).forEach(function(item) {
                //unwrap not being use in case there's no child element inside and its just text
                unwrap(item);
            });
        }); //removing the applied transition from the fullpage wrapper
        css(getContainer(), {
            '-webkit-transition': 'none',
            'transition': 'none'
        }); //scrolling the page to the top with no animation
        win.scrollTo(0, 0); //removing selectors
        var usedSelectors = [
            SECTION,
            SLIDE,
            SLIDES_CONTAINER
        ];
        usedSelectors.forEach(function(item) {
            removeClass($1('.' + item), item);
        });
    }
    FP.destroy = destroy;
    function init() {
        updateStructuralState();
        updateState();
        getOptions().scrollBar = getOptions().scrollBar || getOptions().hybrid;
        setOptionsFromDOM();
        prepareDom();
        toggleCssSnapsWhenPossible(true);
        setAllowScrolling(true);
        setMouseHijack(true);
        setAutoScrolling(getOptions().autoScrolling, 'internal');
        responsive(); //setting the class for the body element
        setBodyClass();
        if (doc.readyState === 'complete') scrollToAnchor();
        windowAddEvent('load', scrollToAnchor);
        afterRenderActions(); // Updating the state again with the new DOM
        updateStructuralState();
        updateState();
    }
    /*
    * Destroys fullpage.js plugin events and optinally its html markup and styles
    */ function destroy(all) {
        setAutoScrolling(false, 'internal');
        setAllowScrolling(true);
        setMouseHijack(false);
        setKeyboardScrolling(false);
        addClass(getContainer(), DESTROYED);
        EventEmitter.emit('onDestroy'); //lets make a mess!
        if (all) destroyStructure();
    }
    var isOK = function isOK() {
        return getOptions() && state.isValid || doc.domain.indexOf("alvarotrigo.com") > -1;
    };
    /**
    * Displays warnings
    */ function displayWarnings() {
        var l = getOptions()["licenseKey"];
        var msgStyle = 'font-size: 15px;background:yellow;';
        if (!isOK()) {
            showError('error', 'Fullpage.js requires a `licenseKey` option. Read about it on the following URL:');
            showError('error', 'https://github.com/alvarotrigo/fullPage.js#options');
        } else if (l && l.length < 20) {
            console.warn('%c This website was made using fullPage.js slider. More info on the following website:', msgStyle);
            console.warn('%c https://alvarotrigo.com/fullPage/', msgStyle);
        }
        if (hasClass($html, ENABLED)) {
            showError('error', 'Fullpage.js can only be initialized once and you are doing it multiple times!');
            return;
        } // Disable mutually exclusive settings
        if (getOptions().continuousVertical && (getOptions().loopTop || getOptions().loopBottom)) {
            getOptions().continuousVertical = false;
            showError('warn', 'Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled');
        }
        if (getOptions().scrollOverflow && (getOptions().scrollBar || !getOptions().autoScrolling)) showError('warn', 'Options scrollBar:true and autoScrolling:false are mutually exclusive with scrollOverflow:true. Sections with scrollOverflow might not work well in Firefox');
        if (getOptions().continuousVertical && (getOptions().scrollBar || !getOptions().autoScrolling)) {
            getOptions().continuousVertical = false;
            showError('warn', 'Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled');
        } //using extensions? Wrong file!
        extensions.forEach(function(extension) {
            //is the option set to true?
            if (getOptions()[extension]) showError('warn', 'fullpage.js extensions require fullpage.extensions.min.js file instead of the usual fullpage.js. Requested: ' + extension);
        }); //anchors can not have the same value as any element ID or NAME
        getOptions().anchors.forEach(function(name) {
            //case insensitive selectors (http://stackoverflow.com/a/19465187/1081396)
            var nameAttr = [].slice.call($1('[name]')).filter(function(item) {
                return getAttr(item, 'name') && getAttr(item, 'name').toLowerCase() == name.toLowerCase();
            });
            var idAttr = [].slice.call($1('[id]')).filter(function(item) {
                return getAttr(item, 'id') && getAttr(item, 'id').toLowerCase() == name.toLowerCase();
            });
            if (idAttr.length || nameAttr.length) {
                showError('error', 'data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).');
                var propertyName = idAttr.length ? 'id' : 'name';
                if (idAttr.length || nameAttr.length) showError('error', '"' + name + '" is is being used by another element `' + propertyName + '` property');
            }
        });
    }
    function fullpage1(containerSelector, options) {
        setCache(); //only once my friend!
        if (hasClass($html, ENABLED)) {
            displayWarnings();
            return;
        }
        setOption('touchWrapper', typeof containerSelector === 'string' ? $1(containerSelector)[0] : containerSelector); // Creating some defaults, extending them with any options that were provided
        setOptions(options);
        setContainer(typeof containerSelector === 'string' ? $1(containerSelector)[0] : containerSelector);
        EventEmitter.emit('onInitialise');
        displayWarnings();
        setAPI();
        if (getContainer()) {
            EventEmitter.emit('beforeInit');
            init();
            EventEmitter.emit('bindEvents');
        } // @ts-ignore
        return win.fullpage_api;
    }
    function setAPI() {
        FP.getFullpageData = function() {
            return {
                options: getOptions()
            };
        }; //public functions
        FP.version = '4.0.6';
        FP.test = Object.assign(FP.test, {
            top: '0px',
            translate3d: 'translate3d(0px, 0px, 0px)',
            translate3dH: function() {
                var a = [];
                for(var i = 0; i < $1(getOptions().sectionSelector, getContainer()).length; i++)a.push('translate3d(0px, 0px, 0px)');
                return a;
            }(),
            left: function() {
                var a = [];
                for(var i = 0; i < $1(getOptions().sectionSelector, getContainer()).length; i++)a.push(0);
                return a;
            }(),
            options: getOptions(),
            setAutoScrolling: null
        }); //functions we want to share across files but which are not
        //mean to be used on their own by developers
        FP.shared = Object.assign(FP.shared, {
            afterRenderActions: null,
            isNormalScrollElement: false
        }); // @ts-ignore
        win.fullpage_api = FP;
    }
    // @ts-ignore
    win.fp_easings = deepExtend(win.fp_easings, {
        easeInOutCubic: function easeInOutCubic(t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
            return c / 2 * ((t -= 2) * t * t + 2) + b;
        }
    });
    /**
     * jQuery adapter for fullPage.js 3.0.0
     */ // @ts-ignore
    if (win.jQuery) (function($, fullpage) {
        if (!$ || !fullpage) {
            showError('error', 'jQuery is required to use the jQuery fullpage adapter!');
            return;
        }
        $.fn.fullpage = function(options) {
            options = $.extend({}, options, {
                '$': $
            });
            new fullpage(this[0], options); // Creating the $.fn.fullpage object
            Object.keys(FP).forEach(function(key) {
                getOptions().$.fn.fullpage[key] = FP[key];
            });
        }; // @ts-ignore
    })(win.jQuery, fullpage1);
    return fullpage1;
});

},{}]},["9oeQ7","5l7HQ"], "5l7HQ", "parcelRequire2041")

//# sourceMappingURL=index.0f1d82db.js.map
