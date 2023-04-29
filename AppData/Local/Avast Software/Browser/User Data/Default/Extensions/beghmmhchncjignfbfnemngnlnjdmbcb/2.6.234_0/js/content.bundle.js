/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 586:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BU": () => (/* binding */ StorageKeys),
/* harmony export */   "JL": () => (/* binding */ HookedFunctionsMap),
/* harmony export */   "_B": () => (/* binding */ Resources)
/* harmony export */ });
/* unused harmony exports Brand, Strings */
var Resources = {
  Strings: {},
  Icons: {},
  Animations: {},
  Links: {
    Info: {
      Avast: "https://extension.avastbrowser.com/afp/about/",
      AVG: "https://extension.avgbrowser.com/afp/about/",
      CCleaner: "https://extension.ccleanerbrowser.com/afp/about/"
    }
  },
  PrivacyGuardId: {
    Avast: "onochehmbbbmkaffnheflmfpfjgppblm",
    AVG: "iiapdppbgcanenmhjjoajoiajcapbllj",
    CCleaner: "kkocjjglpnkdgffmmgkfikpbhkhmppca",
    Jedi: "achbgnlchkddjajdjgnfajiheehdjhhl"
  }
};
var StorageKeys = {
  AppSettings: {
    KEY: "settings",
    DISABLED: "disabled",
    WHITELIST: "whitelist",
    NOTIFICATIONS: "notifications",
    IS_ACTIVE: "isActive",
    SOCIAL_MEDIA_DETECTION_PROTECTION: "socialMediaProtection",
    PROFILES: "profiles"
  },
  NOISE: "noise",
  AFPData: {
    KEY: "AFPData",
    FINGERPRINT_ATTEMPTS_DETECTED_COUNTER: "A1"
  }
};
var Brand = {
  AVAST: "Avast",
  AVG: "AVG",
  CCleaner: "CCleaner"
};
var Strings = {
  APP_NAME: chrome.i18n.getMessage("appName"),
  APP_DESCRIPTION: chrome.i18n.getMessage("appDescription"),
  SETTINGS_SOCIAL_MEDIA_LOGIN_DETECTION_PREVENTION: chrome.i18n.getMessage('settingsSocialMediaLoginDetectionPrevention'),
  SETTINGS_ADVANCED: chrome.i18n.getMessage("settingsAdvanced"),
  POPUP_FINGERPRINT_ATTEMPTS_DETECTED: chrome.i18n.getMessage("popupTotalFingerprintsAttemptsDetected"),
  POPUP_STATUS_ENABLED: chrome.i18n.getMessage("popupStatusEnabled"),
  POPUP_STATUS_DISABLED: chrome.i18n.getMessage("popupStatusDisabled")
};
var HookedFunctionsMap = {
  Canvas: 1,
  WebGL: 2,
  AudioBuffer: 3,
  AudioContext: 4,
  Plugins: 5,
  MediaDevices: 6,
  ReadPixels: 7,
  GetShaderPrecisionFormat: 8,
  ClientRects: 9,
  GetParameter: 10,
  BufferData: 11
};


/***/ }),

/***/ 162:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ Browser)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(671);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(144);



var Browser = /*#__PURE__*/function () {
  function Browser() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(this, Browser);
  }
  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(Browser, null, [{
    key: "getResource",
    value: function getResource(file) {
      return chrome.extension.getURL(file);
    }
  }, {
    key: "getStorageSync",
    value: function getStorageSync(key) {
      return new Promise(function (resolve, reject) {
        chrome.storage.sync.get(key, function (result) {
          if ((0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(result) === "object" && result[key]) {
            resolve(result[key]);
          } else {
            resolve(null);
          }
        });
      });
    }
  }, {
    key: "setStorageSync",
    value: function setStorageSync(key, data) {
      var _object;
      var object = (_object = {}, _object[key] = data, _object);
      chrome.storage.sync.set(object);
    }
  }, {
    key: "getStorageLocal",
    value: function getStorageLocal(key) {
      return new Promise(function (resolve, reject) {
        chrome.storage.local.get(key, function (result) {
          if ((0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(result) === "object" && result[key]) {
            resolve(result[key]);
          } else {
            resolve(null);
          }
        });
      });
    }
  }, {
    key: "setStorageLocal",
    value: function setStorageLocal(key, data) {
      var _object2;
      var object = (_object2 = {}, _object2[key] = data, _object2);
      chrome.storage.local.set(object);
    }
  }]);
  return Browser;
}();


/***/ }),

/***/ 98:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ FingerprintAttributes),
/* harmony export */   "x": () => (/* binding */ applyFingerprintAttributes)
/* harmony export */ });
/* harmony import */ var _app_constants_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(586);

var FingerprintAttributes = function FingerprintAttributes(profile) {
  return [{
    object: "navigator",
    property: "userAgent",
    value: profile.Headers["User-Agent"] || navigator.userAgent
  }, {
    object: "navigator",
    property: "plugins",
    valueFn: _app_constants_app__WEBPACK_IMPORTED_MODULE_0__/* .HookedFunctionsMap.Plugins */ .JL.Plugins,
    weight: 0.3
  }, {
    object: "screen",
    property: "width",
    value: profile.Screen ? profile.Screen.width : screen.width,
    weight: 0
  }, {
    object: "screen",
    property: "height",
    value: profile.Screen ? profile.Screen.height : screen.height,
    weight: 0
  }, {
    object: "navigator",
    property: "vendor",
    value: "Google Inc."
  }, {
    object: "navigator",
    property: "productSub",
    value: "20100101"
  }, {
    object: "HTMLCanvasElement",
    property: "prototype",
    method: "toDataURL",
    valueFn: _app_constants_app__WEBPACK_IMPORTED_MODULE_0__/* .HookedFunctionsMap.Canvas */ .JL.Canvas,
    weight: 0.5
  }, {
    object: "HTMLCanvasElement",
    property: "prototype",
    method: "getImageData",
    valueFn: _app_constants_app__WEBPACK_IMPORTED_MODULE_0__/* .HookedFunctionsMap.Canvas */ .JL.Canvas,
    weight: 0.5
  }, {
    object: "AudioBuffer",
    property: "prototype",
    method: "getChannelData",
    valueFn: _app_constants_app__WEBPACK_IMPORTED_MODULE_0__/* .HookedFunctionsMap.AudioBuffer */ .JL.AudioBuffer,
    weight: 0.2
  }, {
    object: "AnalyserNode",
    property: "prototype",
    method: "getFloatFrequencyData",
    valueFn: _app_constants_app__WEBPACK_IMPORTED_MODULE_0__/* .HookedFunctionsMap.AudioContext */ .JL.AudioContext,
    weight: 0.2
  }, {
    object: "MediaDevices",
    property: "prototype",
    method: "enumerateDevices",
    valueFn: _app_constants_app__WEBPACK_IMPORTED_MODULE_0__/* .HookedFunctionsMap.MediaDevices */ .JL.MediaDevices,
    weight: 0.2
  }, {
    object: "WebGL2RenderingContext",
    property: "prototype",
    method: "readPixels",
    valueFn: _app_constants_app__WEBPACK_IMPORTED_MODULE_0__/* .HookedFunctionsMap.ReadPixels */ .JL.ReadPixels,
    weight: 0.1
  }, {
    object: "WebGL2RenderingContext",
    property: "prototype",
    method: "getShaderPrecisionFormat",
    valueFn: _app_constants_app__WEBPACK_IMPORTED_MODULE_0__/* .HookedFunctionsMap.GetShaderPrecisionFormat */ .JL.GetShaderPrecisionFormat,
    weight: 0.1
  }, {
    object: "WebGLRenderingContext",
    property: "prototype",
    method: "getParameter",
    valueFn: _app_constants_app__WEBPACK_IMPORTED_MODULE_0__/* .HookedFunctionsMap.GetParameter */ .JL.GetParameter,
    weight: 0.1
  }, {
    object: "WebGL2RenderingContext",
    property: "prototype",
    method: "getParameter",
    valueFn: _app_constants_app__WEBPACK_IMPORTED_MODULE_0__/* .HookedFunctionsMap.GetParameter */ .JL.GetParameter,
    weight: 0.1
  }, {
    object: "WebGL2RenderingContext",
    property: "prototype",
    method: "bufferData",
    valueFn: _app_constants_app__WEBPACK_IMPORTED_MODULE_0__/* .HookedFunctionsMap.BufferData */ .JL.BufferData,
    weight: 0.1
  }, {
    object: "WebGLRenderingContext",
    property: "prototype",
    method: "bufferData",
    valueFn: _app_constants_app__WEBPACK_IMPORTED_MODULE_0__/* .HookedFunctionsMap.BufferData */ .JL.BufferData,
    weight: 0.1
  }, {
    object: "Element",
    property: "prototype",
    method: "getClientRects",
    valueFn: _app_constants_app__WEBPACK_IMPORTED_MODULE_0__/* .HookedFunctionsMap.ClientRects */ .JL.ClientRects,
    weight: 0
  }];
};
var applyFingerprintAttributes = function applyFingerprintAttributes(_ref) {
  var fpAttr = _ref.fpAttr,
    funcPrefix = _ref.funcPrefix,
    debug = _ref.debug,
    t0 = _ref.t0;
  var FINGERPRINT_DETECTION_THRESHOLD = 0.6;
  var alreadyCalculated = [];
  var fingerprintWeight = 0;
  var alreadyDetected = false;
  var notifyFingerprintAttempt = function notifyFingerprintAttempt() {
    if (alreadyDetected) return;
    var event = new CustomEvent("fingerprintAttemptDetected", {
      detail: {
        score: fingerprintWeight
      }
    });
    document.dispatchEvent(event);
    alreadyDetected = true;
  };
  var updateFingerprintWeight = function updateFingerprintWeight(prop, weight) {
    if (!alreadyCalculated.includes(prop)) {
      logFunc("[".concat(window.location.hostname, "] Increasing fingerprint weight by ").concat(weight, ", due to ").concat(prop));
      fingerprintWeight += weight;
      alreadyCalculated.push(prop);
      logFunc("[".concat(window.location.hostname, "] Current fingerprint weight is ").concat(fingerprintWeight));
    }
    if (fingerprintWeight >= FINGERPRINT_DETECTION_THRESHOLD) {
      notifyFingerprintAttempt();
    }
  };
  var logFunc = function logFunc() {};
  if (debug) {
    logFunc = console.log;
  }
  var overrideProp = function overrideProp(obj, prop, value) {
    var weight = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0.1;
    if (!obj || !obj[prop]) return;
    var name = "unknown";
    if (obj && obj.constructor) {
      name = obj.constructor.name;
    }
    logFunc("Hooking ".concat(name, ".").concat(prop, " with value"), value);
    try {
      var descriptor = Object.getOwnPropertyDescriptor(obj, prop);
      if (descriptor !== null && descriptor !== void 0 && descriptor.configurable) {
        Object.defineProperty(obj, "".concat(prop), {
          get: function () {
            updateFingerprintWeight("".concat(name, ".").concat(prop), weight);
            logFunc("".concat(name, ".").concat(prop, " was called, returning value"), value);
            return value;
          }.bind(null)
        });
      } else {
        logFunc("".concat(name, ".").concat(prop, " cannot be reconfigured"));
      }
    } catch (e) {
      logFunc(e);
    }
  };
  var overrideMethod = function overrideMethod(obj, method, value) {
    var weight = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0.1;
    var func = window[funcPrefix][value];
    if (!func) return;
    if (!obj || !obj[method]) return;
    var proto = obj[method];
    var name = "unknown";
    if (obj && obj.constructor) {
      name = obj.constructor.name;
    }
    logFunc("Hooking ".concat(name, ".").concat(method, " with function ").concat(value));
    try {
      var descriptor = Object.getOwnPropertyDescriptor(obj, method);
      if (descriptor !== null && descriptor !== void 0 && descriptor.configurable) {
        Object.defineProperty(obj, "".concat(method), {
          enumerable: false,
          get: function get() {
            updateFingerprintWeight("".concat(name, ".").concat(method), weight);
            logFunc("".concat(name, ".").concat(method, " was called"));
            return func.bind(this, {
              proto: proto
            }, arguments).bind(null); // forces toString to display the overriden function content as native code
          }
        });
      } else {
        logFunc("".concat(name, ".").concat(method, " cannot be reconfigured"));
      }
    } catch (e) {
      logFunc(e);
    }
  };
  fpAttr.forEach(function (i) {
    if (window[i.object] && window[i.object][i.property]) {
      if (i.method) {
        overrideMethod(window[i.object][i.property], i.method, i.valueFn, i.weight);
      } else {
        if (i.value || window[funcPrefix] && window[funcPrefix][i.valueFn]) {
          overrideProp(window[i.object], [i.property], i.value || window[funcPrefix][i.valueFn](), i.weight);
        }
      }
    }
  });

  //Removing traces
  delete window[funcPrefix];
  if (debug) {
    var t1 = performance.now();
    var timeTook = parseFloat(t1 - t0).toFixed(2);
    logFunc("Anti fingerprint module loaded [".concat(timeTook, " milliseconds]"));
  }
};


/***/ }),

/***/ 61:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = (__webpack_require__(698)["default"]);
function _regeneratorRuntime() {
  "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
    return exports;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  var exports = {},
    Op = Object.prototype,
    hasOwn = Op.hasOwnProperty,
    defineProperty = Object.defineProperty || function (obj, key, desc) {
      obj[key] = desc.value;
    },
    $Symbol = "function" == typeof Symbol ? Symbol : {},
    iteratorSymbol = $Symbol.iterator || "@@iterator",
    asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
    toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }
  try {
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }
  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
      generator = Object.create(protoGenerator.prototype),
      context = new Context(tryLocsList || []);
    return defineProperty(generator, "_invoke", {
      value: makeInvokeMethod(innerFn, self, context)
    }), generator;
  }
  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }
  exports.wrap = wrap;
  var ContinueSentinel = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
    NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }
  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if ("throw" !== record.type) {
        var result = record.arg,
          value = result.value;
        return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }
      reject(record.arg);
    }
    var previousPromise;
    defineProperty(this, "_invoke", {
      value: function value(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }
        return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(innerFn, self, context) {
    var state = "suspendedStart";
    return function (method, arg) {
      if ("executing" === state) throw new Error("Generator is already running");
      if ("completed" === state) {
        if ("throw" === method) throw arg;
        return doneResult();
      }
      for (context.method = method, context.arg = arg;;) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }
        if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
          if ("suspendedStart" === state) throw state = "completed", context.arg;
          context.dispatchException(context.arg);
        } else "return" === context.method && context.abrupt("return", context.arg);
        state = "executing";
        var record = tryCatch(innerFn, self, context);
        if ("normal" === record.type) {
          if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
          return {
            value: record.arg,
            done: context.done
          };
        }
        "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
      }
    };
  }
  function maybeInvokeDelegate(delegate, context) {
    var methodName = context.method,
      method = delegate.iterator[methodName];
    if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }
  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }
  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }
  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;
      if (!isNaN(iterable.length)) {
        var i = -1,
          next = function next() {
            for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
            return next.value = undefined, next.done = !0, next;
          };
        return next.next = next;
      }
    }
    return {
      next: doneResult
    };
  }
  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), defineProperty(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (val) {
    var object = Object(val),
      keys = [];
    for (var key in object) keys.push(key);
    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
    },
    stop: function stop() {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) throw exception;
      var context = this;
      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
          record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");
        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
            hasFinally = hasOwn.call(entry, "finallyLoc");
          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }
      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}
module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 698:
/***/ ((module) => {

function _typeof(obj) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 687:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// TODO(Babel 8): Remove this file.

var runtime = __webpack_require__(61)();
module.exports = runtime;

// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ 671:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ _classCallCheck)
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ 144:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ _createClass)
/* harmony export */ });
/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(142);

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

/***/ }),

/***/ 142:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ _toPropertyKey)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(2);
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toPrimitive.js

function _toPrimitive(input, hint) {
  if ((0,esm_typeof/* default */.Z)(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if ((0,esm_typeof/* default */.Z)(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js


function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return (0,esm_typeof/* default */.Z)(key) === "symbol" ? key : String(key);
}

/***/ }),

/***/ 2:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(671);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(144);
// EXTERNAL MODULE: ./app/utils/Browser.js
var Browser = __webpack_require__(162);
;// CONCATENATED MODULE: ./app/utils/Resource.js



var Resource = /*#__PURE__*/function () {
  function Resource() {
    (0,classCallCheck/* default */.Z)(this, Resource);
  }
  (0,createClass/* default */.Z)(Resource, null, [{
    key: "get",
    value: function get(file) {
      return Browser/* Browser.getResource */.A.getResource(file);
    }
  }, {
    key: "image",
    value: function image(img) {
      return Resource.get("img/".concat(img));
    }
  }]);
  return Resource;
}();

;// CONCATENATED MODULE: ./webpack/customPublicPath.js
/* global __webpack_public_path__ __HOST__ __PORT__ */
/* eslint no-global-assign: 0 camelcase: 0 */


__webpack_require__.p = Resource.get('/js/');
})();

// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

// EXTERNAL MODULE: ./chrome/extension/fingerprint.attributes.js
var fingerprint_attributes = __webpack_require__(98);
// EXTERNAL MODULE: ./app/constants/app.js
var app = __webpack_require__(586);
;// CONCATENATED MODULE: ./app/constants/profiles.js
var _Profiles;
var ProfileType = {
  Default: 0,
  StrippedUserAgent: 1,
  Paranoid: 2
};
var Profiles = (_Profiles = {}, _Profiles[ProfileType.Default] = {
  Headers: {
    // "User-Agent": navigator.userAgent,
    // "Accept": "text/html,*/*;q=0.01",
    "Accept-Encoding": "gzip, deflate, br",
    "Accept-Language": "en,de;q=0.9"
  }
}, _Profiles[ProfileType.StrippedUserAgent] = {
  Headers: {
    "User-Agent": navigator.userAgent.match(/(Mozilla.+Safari\/\d{3}\.\d{2})/)[1] || navigator.userAgent
  }
}, _Profiles[ProfileType.Paranoid] = {
  Headers: {
    "User-Agent": "Mozilla/5.0 (Windows NT 6.1; rv:60.0) Gecko/20100101 Firefox/60.0",
    "Accept": "text/html, */*; q=0.01",
    "Accept-Encoding": "gzip, deflate, br",
    "Accept-Language": "en;q=0.9"
  },
  OmitHeaders: ["DNT"],
  plugins: null,
  Fonts: ["Arial", "Courier", "Geneva", "Georgia", "Helvetica", "Helvetica Neue", "LUCIDA GRANDE", "Monaco", "Tahoma", "Times", "Times New Roman", "Verdana", "Wingdings 2", "Wingdings 3"],
  Screen: {
    height: 900,
    width: 1000
  },
  WebGL: null,
  // "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACWCAYAAABkW7XSAAACA0lEQVR4nO3UMQ0AMAzAsPIn3VLYN0WyEeTKLEDE/A4AeGVYQIZhARmGBWQYFpBhWECGYQEZhgVkGBaQYVhAhmEBGYYFZBgWkGFYQIZhARmGBWQYFpBhWECGYQEZhgVkGBaQYVhAhmEBGYYFZBgWkGFYQIZhARmGBWQYFpBhWECGYQEZhgVkGBaQYVhAhmEBGYYFZBgWkGFYQIZhARmGBWQYFpBhWECGYQEZhgVkGBaQYVhAhmEBGYYFZBgWkGFYQIZhARmGBWQYFpBhWECGYQEZhgVkGBaQYVhAhmEBGYYFZBgWkGFYQIZhARmGBWQYFpBhWECGYQEZhgVkGBaQYVhAhmEBGYYFZBgWkGFYQIZhARmGBWQYFpBhWECGYQEZhgVkGBaQYVhAhmEBGYYFZBgWkGFYQIZhARmGBWQYFpBhWECGYQEZhgVkGBaQYVhAhmEBGYYFZBgWkGFYQIZhARmGBWQYFpBhWECGYQEZhgVkGBaQYVhAhmEBGYYFZBgWkGFYQIZhARmGBWQYFpBhWECGYQEZhgVkGBaQYVhAhmEBGYYFZBgWkGFYQIZhARmGBWQYFpBhWECGYQEZhgVkGBaQYVhAhmEBGYYFZBgWkGFYQIZhARmGBWQYFpBhWECGYQEZhgVkGBaQYVhAhmEBGYYFZBgWkGFYQIZhARmGBWQYFpBxbV+J5YXpHgwAAAAASUVORK5CYII=",
  Canvas: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAB9AAAADICAYAAACwGnoBAAAH6ElEQVR4nO3ZMQEAAAiAMPuXxhh6bAn4mQAAAAAAAACA5joAAAAAAAAAAD4w0AEAAAAAAAAgAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAACoDHQAAAAAAAAAqAx0AAAAAAAAAKgMdAAAAAAAAAKpaV/0C3qz3zKIAAAAASUVORK5CYII="
}, _Profiles);

;// CONCATENATED MODULE: ./app/constants/settings.js
var _DEFAULT_SETTINGS, _DEFAULT_AFP_DATA;


var Settings = {
  DEBUG: "production" !== 'production',
  APP_VERSION: chrome.runtime.getManifest().version,
  DEFAULT_NOISE: {
    r: 0,
    g: 0,
    b: 0,
    a: 0
  },
  DEFAULT_SETTINGS: (_DEFAULT_SETTINGS = {}, _DEFAULT_SETTINGS[app/* StorageKeys.AppSettings.DISABLED */.BU.AppSettings.DISABLED] = [], _DEFAULT_SETTINGS[app/* StorageKeys.AppSettings.WHITELIST */.BU.AppSettings.WHITELIST] = [], _DEFAULT_SETTINGS[app/* StorageKeys.AppSettings.PROFILES */.BU.AppSettings.PROFILES] = [], _DEFAULT_SETTINGS[app/* StorageKeys.AppSettings.NOTIFICATIONS */.BU.AppSettings.NOTIFICATIONS] = false, _DEFAULT_SETTINGS[app/* StorageKeys.AppSettings.IS_ACTIVE */.BU.AppSettings.IS_ACTIVE] = false, _DEFAULT_SETTINGS[app/* StorageKeys.AppSettings.SOCIAL_MEDIA_DETECTION_PROTECTION */.BU.AppSettings.SOCIAL_MEDIA_DETECTION_PROTECTION] = false, _DEFAULT_SETTINGS),
  DEFAULT_AFP_DATA: (_DEFAULT_AFP_DATA = {}, _DEFAULT_AFP_DATA[app/* StorageKeys.AFPData.FINGERPRINT_ATTEMPTS_DETECTED_COUNTER */.BU.AFPData.FINGERPRINT_ATTEMPTS_DETECTED_COUNTER] = 0, _DEFAULT_AFP_DATA),
  MORE_INFO_LINK: app/* Resources.Links.Info */._B.Links.Info["Avast" || 0],
  SHEPHERD_URL: 'https://shepherd.ff.avast.com/?p_pro=150',
  PRIVACY_GUARD_ID: app/* Resources.PrivacyGuardId */._B.PrivacyGuardId["Avast" || 0]
};
/* harmony default export */ const settings = (Settings);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(2);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(671);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(144);
;// CONCATENATED MODULE: ./app/utils/Logger.js




var MessageType = {
  INFO: "Info",
  WARNING: "Warning",
  ERROR: "Error",
  DEBUG: "Debug"
};
var SYMBOL = "AFP";
var SEPARATOR = '-';
var SEPARATOR_COUNT = 260;
var Logger = /*#__PURE__*/function () {
  function Logger() {
    (0,classCallCheck/* default */.Z)(this, Logger);
  }
  (0,createClass/* default */.Z)(Logger, null, [{
    key: "log",
    value: function log(msg) {
      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : MessageType.INFO;
      var title = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
      if ((0,esm_typeof/* default */.Z)(msg) === 'object') {
        msg = JSON.stringify(msg);
      }
      var date = new Date().toDateString();
      if (title.length > 0) {
        console.log("%c".concat(title, " START %c").concat(SEPARATOR.repeat(SEPARATOR_COUNT - title.length - 2)), 'background: #000; color: #fff', 'background: #000; color: #000');
      }
      console.log("".concat(SYMBOL, " :: ").concat(date, " :: %c").concat(type, "%c ::  %c").concat(msg), Logger.getMessageColor(type), this.getMessageColor(null), "color: #e5e5e5");
      if (title) {
        console.log("%c".concat(title, " END %c").concat(SEPARATOR.repeat(SEPARATOR_COUNT - title.length)), 'background: #000; color: #fff', 'background: #000; color: #000');
      }
    }
  }, {
    key: "debug",
    value: function debug(msg) {
      var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
      if (!settings.DEBUG) {
        return;
      }
      this.log(msg, MessageType.DEBUG, title);
    }
  }, {
    key: "info",
    value: function info(msg) {
      this.log(msg, MessageType.INFO);
    }
  }, {
    key: "warn",
    value: function warn(msg) {
      this.log(msg, MessageType.WARNING);
    }
  }, {
    key: "error",
    value: function error(msg) {
      this.log(msg, MessageType.ERROR);
    }
  }, {
    key: "getMessageColor",
    value: function getMessageColor(type) {
      switch (type) {
        case MessageType.INFO:
          return 'color: yellow';
        case MessageType.ERROR:
          return 'color: red';
        case MessageType.WARNING:
          return 'color: #ffad36';
        case MessageType.DEBUG:
          return 'color: green';
        default:
          return 'color: black';
      }
    }
  }]);
  return Logger;
}();
Logger.MessageType = MessageType;

;// CONCATENATED MODULE: ./chrome/extension/hooks.js
var functionsHooks = function functionsHooks(_ref) {
  var _window$funcPrefix;
  var funcPrefix = _ref.funcPrefix,
    HookedFunctionsMap = _ref.HookedFunctionsMap,
    disabledFeatures = _ref.disabledFeatures,
    _ref$canvasFp = _ref.canvasFp,
    canvasFp = _ref$canvasFp === void 0 ? false : _ref$canvasFp,
    _ref$webglFp = _ref.webglFp,
    webglFp = _ref$webglFp === void 0 ? false : _ref$webglFp,
    _ref$plugins = _ref.plugins,
    plugins = _ref$plugins === void 0 ? false : _ref$plugins;
  var randoms = {
    randomArrValue: function randomArrValue(arr) {
      return arr[Math.floor(Math.random() * arr.length)];
    },
    "float": function float(arr) {
      var tmp = [];
      for (var i = 0; i < arr.length; i++) {
        var n = Math.pow(2, arr[i]);
        tmp.push(new Float32Array([1, n]));
      }
      return randoms.randomArrValue(tmp);
    },
    "int": function int(arr) {
      var tmp = [];
      for (var i = 0; i < arr.length; i++) {
        var n = Math.pow(2, arr[i]);
        tmp.push(new Int32Array([1, n]));
      }
      return randoms.randomArrValue(tmp);
    },
    number: function number(arr) {
      var tmp = [];
      for (var i = 0; i < arr.length; i++) {
        tmp.push(Math.pow(2, arr[i]));
      }
      return randoms.randomArrValue(tmp);
    }
  };
  window[funcPrefix] = (_window$funcPrefix = {}, _window$funcPrefix[HookedFunctionsMap.Canvas] = function (_ref2, originalArgs) {
    var proto = _ref2.proto;
    if (webglFp && (this.getContext('webgl') || this.getContext('experimental-webgl2') || this.getContext('webgl2') || this.getContext('experimental-webgl'))) {
      // Webgl hash faker. A hash is generated by websites from this returned value
      return webglFp;
    }
    if (canvasFp) {
      return canvasFp;
    }
    var width = this.width;
    var height = this.height;
    var context = this.getContext("2d");
    if (context && context.getImageData) {
      var imageData = context.getImageData(0, 0, width, height);
      for (var i = 0; i < height; i++) {
        for (var j = 0; j < width; j++) {
          var index = i * (width * 4) + j * 4;
          imageData.data[index] = imageData.data[index] + Math.ceil(Math.random() * 10);
          imageData.data[index + 1] = imageData.data[index + 1] + Math.ceil(Math.random() * 10);
          imageData.data[index + 2] = imageData.data[index + 2] + Math.ceil(Math.random() * 10);
          imageData.data[index + 3] = imageData.data[index + 3] + Math.ceil(Math.random() * 10);
        }
      }
      context.putImageData(imageData, 0, 0);
      return proto.apply(this, arguments);
    }
  }, _window$funcPrefix[HookedFunctionsMap.WebGL] = function (_ref3, originalArgs, type) {
    var proto = _ref3.proto;
    var newArgs = [type];
    // const unsupportedContexts = ["experimental-webgl", "webgl", "experimental-webgl2", "webgl2"];
    // Blocks webgl completely, resulting in hash of zeroes
    // if (!webglFp && unsupportedContexts.includes((type))) {
    //     notify(name, weight);
    //     console.log("Inside original webgl null");
    //     return null;
    // }

    return proto.call(this, newArgs);
  }, _window$funcPrefix[HookedFunctionsMap.AudioBuffer] = function (_ref4) {
    var proto = _ref4.proto;
    var results = proto.apply(this, arguments);
    for (var i = 0; i < results.length; i += 100) {
      var index = Math.floor(Math.abs(Math.ceil(Math.random() * 10)) * i);
      results[index] += Math.abs(Math.ceil(Math.random() * 10)) * 0.0000001;
    }
    return results;
  }, _window$funcPrefix[HookedFunctionsMap.AudioContext] = function (_ref5, originalArgs, arr) {
    var weight = _ref5.weight,
      name = _ref5.name,
      proto = _ref5.proto,
      notify = _ref5.notify;
    var results = proto.apply(this, [arr]);
    for (var i = 0; i < arr.length; i += 100) {
      var index = Math.floor(Math.abs(Math.ceil(Math.random() * 10)) * i);
      arr[index] = arr[index] + Math.abs(Math.ceil(Math.random() * 10)) * 0.1;
    }
    return results;
  }, _window$funcPrefix[HookedFunctionsMap.Plugins] = function () {
    var allowedPlugins = ["internal-pdf-viewer", "mhjfbmdgcfjbbpaeojofohoefgiehjai", "internal-nacl-plugin", "PepperFlashPlayer.plugin", "pepflashplayer.dll"];
    var privacyPluginArray = {};
    var originalPluginsData = navigator.plugins;
    var pluginsCounter = 0;
    if (plugins !== null) {
      for (var i = 0; i < originalPluginsData.length; i++) {
        if (allowedPlugins.includes(originalPluginsData[i].filename)) {
          privacyPluginArray[pluginsCounter] = originalPluginsData[i];
          privacyPluginArray[originalPluginsData[i].name] = originalPluginsData[i];
          Object.defineProperty(privacyPluginArray, "".concat(pluginsCounter), {
            writable: false,
            enumerable: true,
            configurable: true
          });
          Object.defineProperty(privacyPluginArray, "".concat(originalPluginsData[i].name), {
            writable: false,
            enumerable: false,
            configurable: true
          });
          pluginsCounter++;
        }
      }
    }
    privacyPluginArray.length = pluginsCounter;
    privacyPluginArray.__proto__ = PluginArray.prototype;
    privacyPluginArray.namedItem = function (i) {
      return privacyPluginArray[i];
    };
    return privacyPluginArray;
  }, _window$funcPrefix[HookedFunctionsMap.MediaDevices] = function (_ref6, originalArgs) {
    var proto = _ref6.proto;
    return proto.apply(this, originalArgs).then(function (origDevices) {
      var modifiedDevices = [];
      origDevices.forEach(function (d) {
        var newDevice = {
          deviceId: d.deviceId.toLowerCase() === 'default' ? d.deviceId : d.deviceId.replace(/.$/, Math.abs(Math.ceil(Math.random() * 10))),
          kind: d.kind,
          label: d.label,
          groupId: d.groupId.replace(/.$/, Math.abs(Math.ceil(Math.random() * 10))) + ""
        };
        newDevice.__proto__ = d.__proto__;
        modifiedDevices.push(newDevice);
      });
      return modifiedDevices;
    });
  }, _window$funcPrefix[HookedFunctionsMap.ReadPixels] = function (_ref7, originalArgs) {
    var proto = _ref7.proto;
    var BUFFER_IDX = 6;
    for (var _len = arguments.length, arr = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      arr[_key - 2] = arguments[_key];
    }
    proto.call.apply(proto, [this].concat(arr));
    // Altering the first pixel value within the image pixels buffer
    arr[BUFFER_IDX][0] = Math.ceil(Math.random() * 10);
  }, _window$funcPrefix[HookedFunctionsMap.GetShaderPrecisionFormat] = function (_ref8, originalArgs) {
    var proto = _ref8.proto;
    for (var _len2 = arguments.length, arr = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
      arr[_key2 - 2] = arguments[_key2];
    }
    var result = proto.call.apply(proto, [this].concat(arr));
    var modifiedResults = {
      rangeMin: Math.ceil(Math.random() * 127),
      rangeMax: Math.ceil(Math.random() * 127),
      precision: result.precision
    };
    modifiedResults.__proto__ = WebGLShaderPrecisionFormat.prototype;
    return modifiedResults;
  }, _window$funcPrefix[HookedFunctionsMap.ClientRects] = function (_ref9, originalArgs) {
    var proto = _ref9.proto;
    var originalRects = proto.apply(this, originalArgs);
    if (!originalRects.length) {
      return originalRects;
    }
    var rects = JSON.parse(JSON.stringify(originalRects[0]));
    var modifiedRects = new DOMRect();
    Object.keys(rects).forEach(function (key) {
      return modifiedRects[key] = rects[key] + Math.random();
    });
    var result = {
      0: modifiedRects,
      length: 1
    };
    result.__proto__ = DOMRectList.prototype;
    return result;
  }, _window$funcPrefix[HookedFunctionsMap.GetParameter] = function (_ref10, originalArgs, arr) {
    var proto = _ref10.proto;
    // proto.call has to be initiated to overcome bot detection
    var value = proto.call(this, arr);
    if (arr === 3415) value = 0;else if (arr === 3414) value = 24;else if (arr === 36348) value = 30;else if (arr === 7936) value = "WebKit";else if (arr === 37445) value = "Google Inc."; // UNMASKED_VENDOR
    else if (arr === 7937) value = "WebKit WebGL";else if (arr === 3379) value = randoms.number([12, 13, 14]);else if (arr === 36347) value = randoms.number([12, 13]);else if (arr === 34076) value = randoms.number([14, 15]);else if (arr === 34024) value = randoms.number([14, 15]);else if (arr === 3386) value = randoms["int"]([13, 14, 15]);else if (arr === 3413) value = randoms.number([1, 2, 3, 4]);else if (arr === 3412) value = randoms.number([1, 2, 3, 4]);else if (arr === 3411) value = randoms.number([1, 2, 3, 4]);else if (arr === 3410) value = randoms.number([1, 2, 3, 4]);else if (arr === 34047) value = randoms.number([1, 2, 3, 4]);else if (arr === 34930) value = randoms.number([1, 2, 3, 4]);else if (arr === 34921) value = randoms.number([1, 2, 3, 4]);else if (arr === 35660) value = randoms.number([1, 2, 3, 4]);else if (arr === 35661) value = randoms.number([4, 5, 6, 7, 8]);else if (arr === 36349) value = randoms.number([10, 11, 12, 13]);else if (arr === 33902) value = randoms["float"]([0, 10, 11, 12, 13]);else if (arr === 33901) value = randoms["float"]([0, 10, 11, 12, 13]);else if (arr === 37446) value = randoms.randomArrValue(["Graphics", "HD Graphics", "Intel(R) HD Graphics"]); // UNMASKED_RENDERER
    else if (arr === 7938) value = randoms.randomArrValue(["WebGL 1.0", "WebGL 1.0 (OpenGL)", "WebGL 1.0 (OpenGL Chromium)"]); // GL_VERSION
    else if (arr === 35724) value = randoms.randomArrValue(["WebGL", "WebGL GLSL", "WebGL GLSL ES", "WebGL GLSL ES (OpenGL Chromium"]); // SHADING_LANGUAGE_VERSION

    return value;
  }, _window$funcPrefix[HookedFunctionsMap.BufferData] = function (_ref11, originalArgs) {
    var proto = _ref11.proto;
    var noise = 0.0001 * Math.random();
    for (var _len3 = arguments.length, arr = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
      arr[_key3 - 2] = arguments[_key3];
    }
    arr[1][0] += noise;
    return proto.call.apply(proto, [this].concat(arr));
  }, _window$funcPrefix);
  if (disabledFeatures.includes('*')) {
    delete window[funcPrefix];
  } else {
    disabledFeatures.map(function (feature) {
      return delete window[funcPrefix][feature];
    });
  }
};

;// CONCATENATED MODULE: ./app/utils/Injector.js



var Injector = /*#__PURE__*/function () {
  function Injector(debug) {
    (0,classCallCheck/* default */.Z)(this, Injector);
    this.debug = debug;
  }
  (0,createClass/* default */.Z)(Injector, [{
    key: "compile",
    value: function compile(func, args) {
      var argsStr = '';
      Object.keys(args).map(function (key) {
        argsStr += "".concat(key, ":").concat(args[key], ",");
      });
      this.compiledFunc = "\n        try{\n            (".concat(func, ")\n                ({\n                    ").concat(argsStr, "\n                })\n        }catch(e) { console.log(e); }");
      return this;
    }
  }, {
    key: "inject",
    value: function inject() {
      if (!this.compiledFunc) {
        throw Error('No compiled function to inject');
      }
      var script = document.createElement('script');
      script.type = "text/javascript";

      // if (!this.debug) {
      //     Logger.debug("Obfuscating code");
      //     const JavaScriptObfuscator = require('javascript-obfuscator');
      //     this.compiledFunc = JavaScriptObfuscator.obfuscate(this.compiledFunc).obfuscatedCode;
      // }

      var newChild = document.createTextNode(this.compiledFunc);
      script.appendChild(newChild);
      var node = document.documentElement || document.head || document.body;
      node.insertBefore(script, node.firstChild);
      node.removeChild(script);
    }
  }]);
  return Injector;
}();

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(687);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: ./app/utils/Browser.js
var Browser = __webpack_require__(162);
;// CONCATENATED MODULE: ./app/utils/ExtensionStorage.js






var ExtensionStorage = /*#__PURE__*/function () {
  function ExtensionStorage() {
    (0,classCallCheck/* default */.Z)(this, ExtensionStorage);
  }
  (0,createClass/* default */.Z)(ExtensionStorage, null, [{
    key: "setSync",
    value: function setSync(key, value) {
      Browser/* Browser.setStorageSync */.A.setStorageSync(key, value);
      Logger.debug("".concat(JSON.stringify(value), " was saved to storage key ").concat(key));
    }
  }, {
    key: "getSync",
    value: function () {
      var _getSync = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee(key) {
        return regenerator_default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Browser/* Browser.getStorageSync */.A.getStorageSync(key);
            case 2:
              return _context.abrupt("return", _context.sent);
            case 3:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function getSync(_x) {
        return _getSync.apply(this, arguments);
      }
      return getSync;
    }()
  }, {
    key: "set",
    value: function set(key, value) {
      Browser/* Browser.setStorageLocal */.A.setStorageLocal(key, value);
      Logger.debug("".concat(JSON.stringify(value), " was saved to storage key ").concat(key));
    }
  }, {
    key: "get",
    value: function get(key) {
      return Browser/* Browser.getStorageLocal */.A.getStorageLocal(key);
    }
  }]);
  return ExtensionStorage;
}();

;// CONCATENATED MODULE: ./chrome/extension/content.js









var t0 = performance.now();
ExtensionStorage.getSync(app/* StorageKeys.AppSettings.KEY */.BU.AppSettings.KEY).then(function (config) {
  var url = window.location.hostname;
  if (inIframe()) {
    url = new URL(document.location.ancestorOrigins[document.location.ancestorOrigins.length - 1]).host;
  }
  var isDisabled = config.disabled.includes(url) || config.whitelist.includes(url) || !config.isActive;
  var debugMode = typeof config.debug !== 'undefined' ? config.debug : settings.DEBUG;
  var domainProfile = config.profiles.find(function (p) {
    return p.domain === url;
  });
  var profileNumber = domainProfile ? domainProfile.profile : ProfileType.Default;
  var currentProfile = Profiles[profileNumber];
  var disabledDomainsFeatures = config.disabledDomainFeatures.find(function (p) {
    return url.match(p.domain);
  });
  var disabledFeatures = disabledDomainsFeatures ? disabledDomainsFeatures.features : [];
  Logger.debug("Running AFP version ".concat(settings.APP_VERSION));
  Logger.debug("Using profile: ".concat(profileNumber));
  Logger.debug("Disabled features for domain detected: ".concat(JSON.stringify(disabledFeatures)));
  var canvasFp = currentProfile.Canvas;
  var webglFP = currentProfile.WebGL;
  var pluginsFp = currentProfile.plugins;
  if (currentProfile.Fonts) {
    sendMessage("setFontFilter", currentProfile.Fonts);
  }
  if (!isDisabled) {
    var FUNC_PREFIX = '__AFP__.HOOKS';
    var injector = new Injector(debugMode);
    injector.compile(functionsHooks, {
      funcPrefix: JSON.stringify(FUNC_PREFIX),
      HookedFunctionsMap: JSON.stringify(app/* HookedFunctionsMap */.JL),
      disabledFeatures: JSON.stringify(disabledFeatures),
      canvasFp: JSON.stringify(canvasFp),
      webglFp: JSON.stringify(webglFP),
      plugins: JSON.stringify(pluginsFp)
    }).inject();
    injector.compile(fingerprint_attributes/* applyFingerprintAttributes */.x, {
      fpAttr: JSON.stringify((0,fingerprint_attributes/* FingerprintAttributes */.u)(currentProfile)),
      funcPrefix: JSON.stringify(FUNC_PREFIX),
      debug: debugMode,
      t0: t0
    }).inject();
  } else {
    Logger.debug("Domain is disabled, not hooking");
  }
});
document.addEventListener("fingerprintAttemptDetected", function (data) {
  sendMessage("fingerprintAttemptDetected", {
    type: "basic",
    iconUrl: "img/icon-16.png",
    title: "Fingerprint attempt Detected",
    message: "The website ".concat(document.location.href.substring(0, 102), " has attempted to fingerprint your browser"),
    priority: 2
  });
});
function sendMessage(type, data) {
  if (chrome && chrome.runtime) {
    chrome.runtime.sendMessage({
      type: type,
      payload: data
    });
  } else {
    Logger.debug("Chrome runtime is not available");
  }
}
function inIframe() {
  try {
    return parent !== window;
  } catch (e) {
    return true;
  }
}
})();

/******/ })()
;