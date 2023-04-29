/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 586:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony exports Resources, StorageKeys, Brand, Strings, HookedFunctionsMap */
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

/***/ 671:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

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
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {

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

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/* unused harmony exports FingerprintAttributes, applyFingerprintAttributes */
/* harmony import */ var _app_constants_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(586);

var FingerprintAttributes = function FingerprintAttributes(profile) {
  return [{
    object: "navigator",
    property: "userAgent",
    value: profile.Headers["User-Agent"] || navigator.userAgent
  }, {
    object: "navigator",
    property: "plugins",
    valueFn: HookedFunctionsMap.Plugins,
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
    valueFn: HookedFunctionsMap.Canvas,
    weight: 0.5
  }, {
    object: "HTMLCanvasElement",
    property: "prototype",
    method: "getImageData",
    valueFn: HookedFunctionsMap.Canvas,
    weight: 0.5
  }, {
    object: "AudioBuffer",
    property: "prototype",
    method: "getChannelData",
    valueFn: HookedFunctionsMap.AudioBuffer,
    weight: 0.2
  }, {
    object: "AnalyserNode",
    property: "prototype",
    method: "getFloatFrequencyData",
    valueFn: HookedFunctionsMap.AudioContext,
    weight: 0.2
  }, {
    object: "MediaDevices",
    property: "prototype",
    method: "enumerateDevices",
    valueFn: HookedFunctionsMap.MediaDevices,
    weight: 0.2
  }, {
    object: "WebGL2RenderingContext",
    property: "prototype",
    method: "readPixels",
    valueFn: HookedFunctionsMap.ReadPixels,
    weight: 0.1
  }, {
    object: "WebGL2RenderingContext",
    property: "prototype",
    method: "getShaderPrecisionFormat",
    valueFn: HookedFunctionsMap.GetShaderPrecisionFormat,
    weight: 0.1
  }, {
    object: "WebGLRenderingContext",
    property: "prototype",
    method: "getParameter",
    valueFn: HookedFunctionsMap.GetParameter,
    weight: 0.1
  }, {
    object: "WebGL2RenderingContext",
    property: "prototype",
    method: "getParameter",
    valueFn: HookedFunctionsMap.GetParameter,
    weight: 0.1
  }, {
    object: "WebGL2RenderingContext",
    property: "prototype",
    method: "bufferData",
    valueFn: HookedFunctionsMap.BufferData,
    weight: 0.1
  }, {
    object: "WebGLRenderingContext",
    property: "prototype",
    method: "bufferData",
    valueFn: HookedFunctionsMap.BufferData,
    weight: 0.1
  }, {
    object: "Element",
    property: "prototype",
    method: "getClientRects",
    valueFn: HookedFunctionsMap.ClientRects,
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

})();

/******/ })()
;