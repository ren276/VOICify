module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Page; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/service */ "./services/service.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "E:\\Signify-master\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



 // We'll limit the processing size to 200px.

const maxVideoSize = 224;
const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '_NOTHING', '_SPACE'];
const THRESHOLD = 5;
const THRESHOLDS = {
  S: 3,
  E: 5,
  A: 5,
  N: 6,
  R: 5
};
/**
 * What we're going to render is:
 *
 * 1. A video component so the user can see what's on the camera.
 *
 * 2. A button to generate an image of the video, load OpenCV and
 * process the image.
 *
 * 3. A canvas to allow us to capture the image of the video and
 * show it to the user.
 */

function Page() {
  const videoElement = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const canvasEl = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const outputCanvasEl = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  let {
    0: letter,
    1: setLetter
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  let {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  let {
    0: fps,
    1: setFps
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  let {
    0: words,
    1: setWords
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  /**
   * In the onClick event we'll capture a frame within
   * the video to pass it to our service.
   */

  async function processImage() {
    if (videoElement !== null && canvasEl !== null && typeof videoElement.current !== 'undefined' && videoElement.current !== null) {
      let frames = 0;
      let start = Date.now();
      let prevLetter = '';
      let count = 0;
      let _words = '';

      const processWord = () => {
        let wordsSplit = _words.split(' ');

        fetch(`/api/autocorrect?word=${wordsSplit[wordsSplit.length - 1]}`).then(res => res.json()).then(json => {
          const correctedWord = json['correctedWord'];
          speechSynthesis.speak(new SpeechSynthesisUtterance(correctedWord));
          wordsSplit.pop();
          _words = wordsSplit.join(' ') + ' ' + correctedWord.toUpperCase() + ' ';
          setWords(wordsSplit.join(' ') + ' ' + correctedWord.toUpperCase() + ' ');
        });
      };

      videoElement.current.addEventListener('ended', () => processWord());

      while (true) {
        const ctx = canvasEl.current.getContext('2d');
        ctx.drawImage(videoElement.current, 0, 0, maxVideoSize, maxVideoSize);
        const image = ctx.getImageData(0, 0, maxVideoSize, maxVideoSize); // Processing image

        const processedImage = await _services_service__WEBPACK_IMPORTED_MODULE_1__["default"].imageProcessing(image); // Render the processed image to the canvas

        const ctxOutput = outputCanvasEl.current.getContext('2d');
        ctxOutput.putImageData(processedImage.data.payload, 0, 0);
        const prediction = await _services_service__WEBPACK_IMPORTED_MODULE_1__["default"].predict(processedImage.data.payload);
        const predictedLetter = prediction.data.payload;
        const letterValue = LETTERS[predictedLetter];
        setLetter(letterValue);

        if (letterValue !== prevLetter) {
          if (!THRESHOLDS[prevLetter] ? count > THRESHOLD : count > THRESHOLDS[prevLetter]) {
            if (prevLetter === '_SPACE') processWord();else {
              _words = _words + (prevLetter === '_NOTHING' ? '' : prevLetter);
              setWords((state, props) => state + (prevLetter === '_NOTHING' ? '' : prevLetter));
            }
          }

          count = 0;
        } else {
          count++;
        }

        prevLetter = letterValue;
        frames++;

        if (frames === 10) {
          setFps(10 / ((Date.now() - start) / 1000));
          frames = 0;
          start = Date.now();
        }
      }
    }
  }
  /**
   * In the useEffect hook we'll load the video
   * element to show what's on camera.
   */


  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    async function initCamera() {
      videoElement.current.width = maxVideoSize;
      videoElement.current.height = maxVideoSize;

      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: false,
          video: {
            facingMode: 'environment',
            width: maxVideoSize,
            height: maxVideoSize
          }
        });
        videoElement.current.srcObject = stream;
        return new Promise(resolve => {
          videoElement.current.onloadedmetadata = () => {
            resolve(videoElement.current);
          };
        });
      }

      const errorMessage = 'This browser does not support video capture, or this device does not have a camera';
      alert(errorMessage);
      return Promise.reject(errorMessage);
    }

    async function load() {
      const videoLoaded = await initCamera();
      await _services_service__WEBPACK_IMPORTED_MODULE_1__["default"].load();
      videoLoaded.play();
      setTimeout(processImage, 0);
      setLoading(false);
      return videoLoaded;
    }

    load();
  }, []);
  return __jsx("div", {
    style: {
      marginTop: '2em'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 5
    }
  }, __jsx("h1", {
    className: "text-center text-heading",
    style: {
      marginBottom: '0.5em'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 7
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faHandPaper"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 9
    }
  }), " VOICify"), loading && __jsx("div", {
    className: "row justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "spinner-border",
    style: {
      width: '8em',
      height: '8em',
      marginBottom: '2em'
    },
    role: "status",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 13
    }
  }))), __jsx("div", {
    style: {
      display: loading ? 'none' : 'block'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "row justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-xs-12 text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 11
    }
  }, __jsx("video", {
    className: "video",
    playsInline: true,
    ref: videoElement,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 13
    }
  })), __jsx("canvas", {
    style: {
      display: 'none'
    },
    ref: canvasEl,
    width: maxVideoSize,
    height: maxVideoSize,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 11
    }
  }), __jsx("canvas", {
    className: "col-xs-12",
    style: {
      display: 'none'
    },
    ref: outputCanvasEl,
    width: maxVideoSize,
    height: maxVideoSize,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "row justify-content-center text-center",
    style: {
      marginTop: '2em'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-xs-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 11
    }
  }, __jsx("h5", {
    className: "text-letter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 13
    }
  }, "Predicted Letter:"), __jsx("h4", {
    className: "text-letter",
    style: {
      borderRadius: 10,
      border: '2px solid #FFFFFF',
      padding: '0.5em'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 13
    }
  }, letter))), __jsx("div", {
    className: "row justify-content-center text-center",
    style: {
      marginTop: '2em'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-xs-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 11
    }
  }, __jsx("h3", {
    className: "text-words",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 13
    }
  }, "Predicted Words:"), __jsx("h2", {
    className: "text-words",
    style: {
      borderRadius: 10,
      border: '2px solid #FFFFFF',
      padding: '1em'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 13
    }
  }, words), __jsx("p", {
    className: "text-fps",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 13
    }
  }, "FPS: ", fps.toFixed(3))))));
}

/***/ }),

/***/ "./services/service.js":
/*!*****************************!*\
  !*** ./services/service.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class CV {
  /**
   * We will use this method privately to communicate with the worker and
   * return a promise with the result of the event. This way we can call
   * the worker asynchronously.
   */
  _dispatch(event) {
    const {
      msg
    } = event;
    this._status[msg] = ['loading'];
    this.worker.postMessage(event);
    return new Promise((res, rej) => {
      let interval = setInterval(() => {
        const status = this._status[msg]; // if (!status || status == undefined) res(true);

        if (status[0] === 'done') {
          res(status[1]);
        } else if (status[0] === 'error') rej(status[1]);else if (status[0] !== 'loading') {
          delete this._status[msg];
          clearInterval(interval);
        }
      }, 0);
    });
  }
  /**
   * First, we will load the worker and we will capture the onmessage
   * and onerror events to know at all times the status of the event
   * we have triggered.
   *
   * Then, we are going to call the 'load' event, as we've just
   * implemented it so that the worker can capture it.
   */


  load() {
    this._status = {};
    this.worker = new Worker('/js/worker.js'); // load worker
    // Capture events and save [status, event] inside the _status object

    this.worker.onmessage = e => this._status[e.data.msg] = ['done', e];

    this.worker.onerror = e => this._status[e.data.msg] = ['error', e];

    return this._dispatch({
      msg: 'load'
    });
  }
  /**
   * We are going to use the _dispatch event that we created before to
   * call the postMessage with the msg and the image as payload.
   *
   * Thanks to what we have implemented in the _dispatch, this will
   * return a promise with the processed image.
   */


  imageProcessing(payload) {
    return this._dispatch({
      msg: 'imageProcessing',
      payload
    });
  }

  predict(payload) {
    return this._dispatch({
      msg: 'predict',
      payload
    });
  }

} // Export the same instant everywhere


/* harmony default export */ __webpack_exports__["default"] = (new CV());

/***/ }),

/***/ "@fortawesome/free-solid-svg-icons":
/*!****************************************************!*\
  !*** external "@fortawesome/free-solid-svg-icons" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZXMvc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIl0sIm5hbWVzIjpbIm1heFZpZGVvU2l6ZSIsIkxFVFRFUlMiLCJUSFJFU0hPTEQiLCJUSFJFU0hPTERTIiwiUyIsIkUiLCJBIiwiTiIsIlIiLCJQYWdlIiwidmlkZW9FbGVtZW50IiwidXNlUmVmIiwiY2FudmFzRWwiLCJvdXRwdXRDYW52YXNFbCIsImxldHRlciIsInNldExldHRlciIsInVzZVN0YXRlIiwibG9hZGluZyIsInNldExvYWRpbmciLCJmcHMiLCJzZXRGcHMiLCJ3b3JkcyIsInNldFdvcmRzIiwicHJvY2Vzc0ltYWdlIiwiY3VycmVudCIsImZyYW1lcyIsInN0YXJ0IiwiRGF0ZSIsIm5vdyIsInByZXZMZXR0ZXIiLCJjb3VudCIsIl93b3JkcyIsInByb2Nlc3NXb3JkIiwid29yZHNTcGxpdCIsInNwbGl0IiwiZmV0Y2giLCJsZW5ndGgiLCJ0aGVuIiwicmVzIiwianNvbiIsImNvcnJlY3RlZFdvcmQiLCJzcGVlY2hTeW50aGVzaXMiLCJzcGVhayIsIlNwZWVjaFN5bnRoZXNpc1V0dGVyYW5jZSIsInBvcCIsImpvaW4iLCJ0b1VwcGVyQ2FzZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJjdHgiLCJnZXRDb250ZXh0IiwiZHJhd0ltYWdlIiwiaW1hZ2UiLCJnZXRJbWFnZURhdGEiLCJwcm9jZXNzZWRJbWFnZSIsInNlcnZpY2UiLCJpbWFnZVByb2Nlc3NpbmciLCJjdHhPdXRwdXQiLCJwdXRJbWFnZURhdGEiLCJkYXRhIiwicGF5bG9hZCIsInByZWRpY3Rpb24iLCJwcmVkaWN0IiwicHJlZGljdGVkTGV0dGVyIiwibGV0dGVyVmFsdWUiLCJzdGF0ZSIsInByb3BzIiwidXNlRWZmZWN0IiwiaW5pdENhbWVyYSIsIndpZHRoIiwiaGVpZ2h0IiwibmF2aWdhdG9yIiwibWVkaWFEZXZpY2VzIiwiZ2V0VXNlck1lZGlhIiwic3RyZWFtIiwiYXVkaW8iLCJ2aWRlbyIsImZhY2luZ01vZGUiLCJzcmNPYmplY3QiLCJQcm9taXNlIiwicmVzb2x2ZSIsIm9ubG9hZGVkbWV0YWRhdGEiLCJlcnJvck1lc3NhZ2UiLCJhbGVydCIsInJlamVjdCIsImxvYWQiLCJ2aWRlb0xvYWRlZCIsInBsYXkiLCJzZXRUaW1lb3V0IiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwiZmFIYW5kUGFwZXIiLCJkaXNwbGF5IiwiYm9yZGVyUmFkaXVzIiwiYm9yZGVyIiwicGFkZGluZyIsInRvRml4ZWQiLCJDViIsIl9kaXNwYXRjaCIsImV2ZW50IiwibXNnIiwiX3N0YXR1cyIsIndvcmtlciIsInBvc3RNZXNzYWdlIiwicmVqIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInN0YXR1cyIsImNsZWFySW50ZXJ2YWwiLCJXb3JrZXIiLCJvbm1lc3NhZ2UiLCJlIiwib25lcnJvciJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FB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ZSxDQUFDSSxPQUFELEVBQVU7QUFDdkIsV0FBTyxLQUFLc0MsU0FBTCxDQUFlO0FBQUVFLFNBQUcsRUFBRSxpQkFBUDtBQUEwQnhDO0FBQTFCLEtBQWYsQ0FBUDtBQUNEOztBQUVERSxTQUFPLENBQUNGLE9BQUQsRUFBVTtBQUNmLFdBQU8sS0FBS3NDLFNBQUwsQ0FBZTtBQUFFRSxTQUFHLEVBQUUsU0FBUDtBQUFrQnhDO0FBQWxCLEtBQWYsQ0FBUDtBQUNEOztBQXhETSxDLENBMkRUOzs7QUFDZSxtRUFBSXFDLEVBQUosRUFBZixFOzs7Ozs7Ozs7OztBQzVEQSw4RDs7Ozs7Ozs7Ozs7QUNBQSwyRDs7Ozs7Ozs7Ozs7QUNBQSxrQyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc2VydmljZSBmcm9tICcuLi9zZXJ2aWNlcy9zZXJ2aWNlJztcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XG5pbXBvcnQgeyBmYUhhbmRQYXBlciB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XG5cbi8vIFdlJ2xsIGxpbWl0IHRoZSBwcm9jZXNzaW5nIHNpemUgdG8gMjAwcHguXG5jb25zdCBtYXhWaWRlb1NpemUgPSAyMjQ7XG5jb25zdCBMRVRURVJTID0gW1xuICAnQScsXG4gICdCJyxcbiAgJ0MnLFxuICAnRCcsXG4gICdFJyxcbiAgJ0YnLFxuICAnRycsXG4gICdIJyxcbiAgJ0knLFxuICAnSicsXG4gICdLJyxcbiAgJ0wnLFxuICAnTScsXG4gICdOJyxcbiAgJ08nLFxuICAnUCcsXG4gICdRJyxcbiAgJ1InLFxuICAnUycsXG4gICdUJyxcbiAgJ1UnLFxuICAnVicsXG4gICdXJyxcbiAgJ1gnLFxuICAnWScsXG4gICdaJyxcbiAgJ19OT1RISU5HJyxcbiAgJ19TUEFDRScsXG5dO1xuY29uc3QgVEhSRVNIT0xEID0gNTtcblxuY29uc3QgVEhSRVNIT0xEUyA9IHtcbiAgUzogMyxcbiAgRTogNSxcbiAgQTogNSxcbiAgTjogNixcbiAgUjogNSxcbn07XG4vKipcbiAqIFdoYXQgd2UncmUgZ29pbmcgdG8gcmVuZGVyIGlzOlxuICpcbiAqIDEuIEEgdmlkZW8gY29tcG9uZW50IHNvIHRoZSB1c2VyIGNhbiBzZWUgd2hhdCdzIG9uIHRoZSBjYW1lcmEuXG4gKlxuICogMi4gQSBidXR0b24gdG8gZ2VuZXJhdGUgYW4gaW1hZ2Ugb2YgdGhlIHZpZGVvLCBsb2FkIE9wZW5DViBhbmRcbiAqIHByb2Nlc3MgdGhlIGltYWdlLlxuICpcbiAqIDMuIEEgY2FudmFzIHRvIGFsbG93IHVzIHRvIGNhcHR1cmUgdGhlIGltYWdlIG9mIHRoZSB2aWRlbyBhbmRcbiAqIHNob3cgaXQgdG8gdGhlIHVzZXIuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2UoKSB7XG4gIGNvbnN0IHZpZGVvRWxlbWVudCA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgY2FudmFzRWwgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IG91dHB1dENhbnZhc0VsID0gdXNlUmVmKG51bGwpO1xuICBsZXQgW2xldHRlciwgc2V0TGV0dGVyXSA9IHVzZVN0YXRlKG51bGwpO1xuICBsZXQgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGxldCBbZnBzLCBzZXRGcHNdID0gdXNlU3RhdGUoMCk7XG4gIGxldCBbd29yZHMsIHNldFdvcmRzXSA9IHVzZVN0YXRlKCcnKTtcblxuICAvKipcbiAgICogSW4gdGhlIG9uQ2xpY2sgZXZlbnQgd2UnbGwgY2FwdHVyZSBhIGZyYW1lIHdpdGhpblxuICAgKiB0aGUgdmlkZW8gdG8gcGFzcyBpdCB0byBvdXIgc2VydmljZS5cbiAgICovXG4gIGFzeW5jIGZ1bmN0aW9uIHByb2Nlc3NJbWFnZSgpIHtcbiAgICBpZiAoXG4gICAgICB2aWRlb0VsZW1lbnQgIT09IG51bGwgJiZcbiAgICAgIGNhbnZhc0VsICE9PSBudWxsICYmXG4gICAgICB0eXBlb2YgdmlkZW9FbGVtZW50LmN1cnJlbnQgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICB2aWRlb0VsZW1lbnQuY3VycmVudCAhPT0gbnVsbFxuICAgICkge1xuICAgICAgbGV0IGZyYW1lcyA9IDA7XG4gICAgICBsZXQgc3RhcnQgPSBEYXRlLm5vdygpO1xuICAgICAgbGV0IHByZXZMZXR0ZXIgPSAnJztcbiAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICBsZXQgX3dvcmRzID0gJyc7XG5cbiAgICAgIGNvbnN0IHByb2Nlc3NXb3JkID0gKCkgPT4ge1xuICAgICAgICBsZXQgd29yZHNTcGxpdCA9IF93b3Jkcy5zcGxpdCgnICcpO1xuICAgICAgICBmZXRjaChgL2FwaS9hdXRvY29ycmVjdD93b3JkPSR7d29yZHNTcGxpdFt3b3Jkc1NwbGl0Lmxlbmd0aCAtIDFdfWApXG4gICAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAudGhlbigoanNvbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29ycmVjdGVkV29yZCA9IGpzb25bJ2NvcnJlY3RlZFdvcmQnXTtcbiAgICAgICAgICAgIHNwZWVjaFN5bnRoZXNpcy5zcGVhayhuZXcgU3BlZWNoU3ludGhlc2lzVXR0ZXJhbmNlKGNvcnJlY3RlZFdvcmQpKTtcbiAgICAgICAgICAgIHdvcmRzU3BsaXQucG9wKCk7XG4gICAgICAgICAgICBfd29yZHMgPVxuICAgICAgICAgICAgICB3b3Jkc1NwbGl0LmpvaW4oJyAnKSArICcgJyArIGNvcnJlY3RlZFdvcmQudG9VcHBlckNhc2UoKSArICcgJztcbiAgICAgICAgICAgIHNldFdvcmRzKFxuICAgICAgICAgICAgICB3b3Jkc1NwbGl0LmpvaW4oJyAnKSArICcgJyArIGNvcnJlY3RlZFdvcmQudG9VcHBlckNhc2UoKSArICcgJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIHZpZGVvRWxlbWVudC5jdXJyZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2VuZGVkJywgKCkgPT4gcHJvY2Vzc1dvcmQoKSk7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIGNvbnN0IGN0eCA9IGNhbnZhc0VsLmN1cnJlbnQuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh2aWRlb0VsZW1lbnQuY3VycmVudCwgMCwgMCwgbWF4VmlkZW9TaXplLCBtYXhWaWRlb1NpemUpO1xuICAgICAgICBjb25zdCBpbWFnZSA9IGN0eC5nZXRJbWFnZURhdGEoMCwgMCwgbWF4VmlkZW9TaXplLCBtYXhWaWRlb1NpemUpO1xuICAgICAgICAvLyBQcm9jZXNzaW5nIGltYWdlXG4gICAgICAgIGNvbnN0IHByb2Nlc3NlZEltYWdlID0gYXdhaXQgc2VydmljZS5pbWFnZVByb2Nlc3NpbmcoaW1hZ2UpO1xuICAgICAgICAvLyBSZW5kZXIgdGhlIHByb2Nlc3NlZCBpbWFnZSB0byB0aGUgY2FudmFzXG4gICAgICAgIGNvbnN0IGN0eE91dHB1dCA9IG91dHB1dENhbnZhc0VsLmN1cnJlbnQuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgY3R4T3V0cHV0LnB1dEltYWdlRGF0YShwcm9jZXNzZWRJbWFnZS5kYXRhLnBheWxvYWQsIDAsIDApO1xuXG4gICAgICAgIGNvbnN0IHByZWRpY3Rpb24gPSBhd2FpdCBzZXJ2aWNlLnByZWRpY3QocHJvY2Vzc2VkSW1hZ2UuZGF0YS5wYXlsb2FkKTtcblxuICAgICAgICBjb25zdCBwcmVkaWN0ZWRMZXR0ZXIgPSBwcmVkaWN0aW9uLmRhdGEucGF5bG9hZDtcbiAgICAgICAgY29uc3QgbGV0dGVyVmFsdWUgPSBMRVRURVJTW3ByZWRpY3RlZExldHRlcl07XG5cbiAgICAgICAgc2V0TGV0dGVyKGxldHRlclZhbHVlKTtcbiAgICAgICAgaWYgKGxldHRlclZhbHVlICE9PSBwcmV2TGV0dGVyKSB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgIVRIUkVTSE9MRFNbcHJldkxldHRlcl1cbiAgICAgICAgICAgICAgPyBjb3VudCA+IFRIUkVTSE9MRFxuICAgICAgICAgICAgICA6IGNvdW50ID4gVEhSRVNIT0xEU1twcmV2TGV0dGVyXVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgaWYgKHByZXZMZXR0ZXIgPT09ICdfU1BBQ0UnKSBwcm9jZXNzV29yZCgpO1xuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgIF93b3JkcyA9IF93b3JkcyArIChwcmV2TGV0dGVyID09PSAnX05PVEhJTkcnID8gJycgOiBwcmV2TGV0dGVyKTtcbiAgICAgICAgICAgICAgc2V0V29yZHMoXG4gICAgICAgICAgICAgICAgKHN0YXRlLCBwcm9wcykgPT5cbiAgICAgICAgICAgICAgICAgIHN0YXRlICsgKHByZXZMZXR0ZXIgPT09ICdfTk9USElORycgPyAnJyA6IHByZXZMZXR0ZXIpXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvdW50ID0gMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb3VudCsrO1xuICAgICAgICB9XG4gICAgICAgIHByZXZMZXR0ZXIgPSBsZXR0ZXJWYWx1ZTtcbiAgICAgICAgZnJhbWVzKys7XG4gICAgICAgIGlmIChmcmFtZXMgPT09IDEwKSB7XG4gICAgICAgICAgc2V0RnBzKDEwIC8gKChEYXRlLm5vdygpIC0gc3RhcnQpIC8gMTAwMCkpO1xuICAgICAgICAgIGZyYW1lcyA9IDA7XG4gICAgICAgICAgc3RhcnQgPSBEYXRlLm5vdygpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEluIHRoZSB1c2VFZmZlY3QgaG9vayB3ZSdsbCBsb2FkIHRoZSB2aWRlb1xuICAgKiBlbGVtZW50IHRvIHNob3cgd2hhdCdzIG9uIGNhbWVyYS5cbiAgICovXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXN5bmMgZnVuY3Rpb24gaW5pdENhbWVyYSgpIHtcbiAgICAgIHZpZGVvRWxlbWVudC5jdXJyZW50LndpZHRoID0gbWF4VmlkZW9TaXplO1xuICAgICAgdmlkZW9FbGVtZW50LmN1cnJlbnQuaGVpZ2h0ID0gbWF4VmlkZW9TaXplO1xuXG4gICAgICBpZiAobmF2aWdhdG9yLm1lZGlhRGV2aWNlcyAmJiBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYSkge1xuICAgICAgICBjb25zdCBzdHJlYW0gPSBhd2FpdCBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYSh7XG4gICAgICAgICAgYXVkaW86IGZhbHNlLFxuICAgICAgICAgIHZpZGVvOiB7XG4gICAgICAgICAgICBmYWNpbmdNb2RlOiAnZW52aXJvbm1lbnQnLFxuICAgICAgICAgICAgd2lkdGg6IG1heFZpZGVvU2l6ZSxcbiAgICAgICAgICAgIGhlaWdodDogbWF4VmlkZW9TaXplLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICB2aWRlb0VsZW1lbnQuY3VycmVudC5zcmNPYmplY3QgPSBzdHJlYW07XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgdmlkZW9FbGVtZW50LmN1cnJlbnQub25sb2FkZWRtZXRhZGF0YSA9ICgpID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUodmlkZW9FbGVtZW50LmN1cnJlbnQpO1xuICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID1cbiAgICAgICAgJ1RoaXMgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IHZpZGVvIGNhcHR1cmUsIG9yIHRoaXMgZGV2aWNlIGRvZXMgbm90IGhhdmUgYSBjYW1lcmEnO1xuICAgICAgYWxlcnQoZXJyb3JNZXNzYWdlKTtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvck1lc3NhZ2UpO1xuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGxvYWQoKSB7XG4gICAgICBjb25zdCB2aWRlb0xvYWRlZCA9IGF3YWl0IGluaXRDYW1lcmEoKTtcbiAgICAgIGF3YWl0IHNlcnZpY2UubG9hZCgpO1xuICAgICAgdmlkZW9Mb2FkZWQucGxheSgpO1xuICAgICAgc2V0VGltZW91dChwcm9jZXNzSW1hZ2UsIDApO1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICByZXR1cm4gdmlkZW9Mb2FkZWQ7XG4gICAgfVxuXG4gICAgbG9hZCgpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogJzJlbScgfX0+XG4gICAgICA8aDFcbiAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1oZWFkaW5nXCJcbiAgICAgICAgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAnMC41ZW0nIH19XG4gICAgICA+XG4gICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFIYW5kUGFwZXJ9IC8+IFZPSUNpZnlcbiAgICAgIDwvaDE+XG4gICAgICB7bG9hZGluZyAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzcGlubmVyLWJvcmRlclwiXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnOGVtJywgaGVpZ2h0OiAnOGVtJywgbWFyZ2luQm90dG9tOiAnMmVtJyB9fVxuICAgICAgICAgICAgICByb2xlPVwic3RhdHVzXCJcbiAgICAgICAgICAgID48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBsb2FkaW5nID8gJ25vbmUnIDogJ2Jsb2NrJyB9fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTEyIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICA8dmlkZW8gY2xhc3NOYW1lPVwidmlkZW9cIiBwbGF5c0lubGluZSByZWY9e3ZpZGVvRWxlbWVudH0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8Y2FudmFzXG4gICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiAnbm9uZScgfX1cbiAgICAgICAgICAgIHJlZj17Y2FudmFzRWx9XG4gICAgICAgICAgICB3aWR0aD17bWF4VmlkZW9TaXplfVxuICAgICAgICAgICAgaGVpZ2h0PXttYXhWaWRlb1NpemV9XG4gICAgICAgICAgPjwvY2FudmFzPlxuICAgICAgICAgIDxjYW52YXNcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbC14cy0xMlwiXG4gICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiAnbm9uZScgfX1cbiAgICAgICAgICAgIHJlZj17b3V0cHV0Q2FudmFzRWx9XG4gICAgICAgICAgICB3aWR0aD17bWF4VmlkZW9TaXplfVxuICAgICAgICAgICAgaGVpZ2h0PXttYXhWaWRlb1NpemV9XG4gICAgICAgICAgPjwvY2FudmFzPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgdGV4dC1jZW50ZXJcIlxuICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogJzJlbScgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTEyXCI+XG4gICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwidGV4dC1sZXR0ZXJcIj5QcmVkaWN0ZWQgTGV0dGVyOjwvaDU+XG4gICAgICAgICAgICA8aDRcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1sZXR0ZXJcIlxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogMTAsXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAnMnB4IHNvbGlkICNGRkZGRkYnLFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6ICcwLjVlbScsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtsZXR0ZXJ9XG4gICAgICAgICAgICA8L2g0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHRleHQtY2VudGVyXCJcbiAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6ICcyZW0nIH19XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy0xMlwiPlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtd29yZHNcIj5QcmVkaWN0ZWQgV29yZHM6PC9oMz5cbiAgICAgICAgICAgIDxoMlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXdvcmRzXCJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDEwLFxuICAgICAgICAgICAgICAgIGJvcmRlcjogJzJweCBzb2xpZCAjRkZGRkZGJyxcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAnMWVtJyxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3dvcmRzfVxuICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZnBzXCI+RlBTOiB7ZnBzLnRvRml4ZWQoMyl9PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwiY2xhc3MgQ1Yge1xuICAvKipcbiAgICogV2Ugd2lsbCB1c2UgdGhpcyBtZXRob2QgcHJpdmF0ZWx5IHRvIGNvbW11bmljYXRlIHdpdGggdGhlIHdvcmtlciBhbmRcbiAgICogcmV0dXJuIGEgcHJvbWlzZSB3aXRoIHRoZSByZXN1bHQgb2YgdGhlIGV2ZW50LiBUaGlzIHdheSB3ZSBjYW4gY2FsbFxuICAgKiB0aGUgd29ya2VyIGFzeW5jaHJvbm91c2x5LlxuICAgKi9cbiAgX2Rpc3BhdGNoKGV2ZW50KSB7XG4gICAgY29uc3QgeyBtc2cgfSA9IGV2ZW50O1xuICAgIHRoaXMuX3N0YXR1c1ttc2ddID0gWydsb2FkaW5nJ107XG4gICAgdGhpcy53b3JrZXIucG9zdE1lc3NhZ2UoZXZlbnQpO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzLCByZWopID0+IHtcbiAgICAgIGxldCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgY29uc3Qgc3RhdHVzID0gdGhpcy5fc3RhdHVzW21zZ107XG4gICAgICAgIC8vIGlmICghc3RhdHVzIHx8IHN0YXR1cyA9PSB1bmRlZmluZWQpIHJlcyh0cnVlKTtcbiAgICAgICAgaWYgKHN0YXR1c1swXSA9PT0gJ2RvbmUnKSB7XG4gICAgICAgICAgcmVzKHN0YXR1c1sxXSk7XG4gICAgICAgIH0gZWxzZSBpZiAoc3RhdHVzWzBdID09PSAnZXJyb3InKSByZWooc3RhdHVzWzFdKTtcbiAgICAgICAgZWxzZSBpZiAoc3RhdHVzWzBdICE9PSAnbG9hZGluZycpIHtcbiAgICAgICAgICBkZWxldGUgdGhpcy5fc3RhdHVzW21zZ107XG4gICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgIH1cbiAgICAgIH0sIDApO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpcnN0LCB3ZSB3aWxsIGxvYWQgdGhlIHdvcmtlciBhbmQgd2Ugd2lsbCBjYXB0dXJlIHRoZSBvbm1lc3NhZ2VcbiAgICogYW5kIG9uZXJyb3IgZXZlbnRzIHRvIGtub3cgYXQgYWxsIHRpbWVzIHRoZSBzdGF0dXMgb2YgdGhlIGV2ZW50XG4gICAqIHdlIGhhdmUgdHJpZ2dlcmVkLlxuICAgKlxuICAgKiBUaGVuLCB3ZSBhcmUgZ29pbmcgdG8gY2FsbCB0aGUgJ2xvYWQnIGV2ZW50LCBhcyB3ZSd2ZSBqdXN0XG4gICAqIGltcGxlbWVudGVkIGl0IHNvIHRoYXQgdGhlIHdvcmtlciBjYW4gY2FwdHVyZSBpdC5cbiAgICovXG4gIGxvYWQoKSB7XG4gICAgdGhpcy5fc3RhdHVzID0ge307XG4gICAgdGhpcy53b3JrZXIgPSBuZXcgV29ya2VyKCcvanMvd29ya2VyLmpzJyk7IC8vIGxvYWQgd29ya2VyXG5cbiAgICAvLyBDYXB0dXJlIGV2ZW50cyBhbmQgc2F2ZSBbc3RhdHVzLCBldmVudF0gaW5zaWRlIHRoZSBfc3RhdHVzIG9iamVjdFxuICAgIHRoaXMud29ya2VyLm9ubWVzc2FnZSA9IChlKSA9PiAodGhpcy5fc3RhdHVzW2UuZGF0YS5tc2ddID0gWydkb25lJywgZV0pO1xuICAgIHRoaXMud29ya2VyLm9uZXJyb3IgPSAoZSkgPT4gKHRoaXMuX3N0YXR1c1tlLmRhdGEubXNnXSA9IFsnZXJyb3InLCBlXSk7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc3BhdGNoKHsgbXNnOiAnbG9hZCcgfSk7XG4gIH1cblxuICAvKipcbiAgICogV2UgYXJlIGdvaW5nIHRvIHVzZSB0aGUgX2Rpc3BhdGNoIGV2ZW50IHRoYXQgd2UgY3JlYXRlZCBiZWZvcmUgdG9cbiAgICogY2FsbCB0aGUgcG9zdE1lc3NhZ2Ugd2l0aCB0aGUgbXNnIGFuZCB0aGUgaW1hZ2UgYXMgcGF5bG9hZC5cbiAgICpcbiAgICogVGhhbmtzIHRvIHdoYXQgd2UgaGF2ZSBpbXBsZW1lbnRlZCBpbiB0aGUgX2Rpc3BhdGNoLCB0aGlzIHdpbGxcbiAgICogcmV0dXJuIGEgcHJvbWlzZSB3aXRoIHRoZSBwcm9jZXNzZWQgaW1hZ2UuXG4gICAqL1xuICBpbWFnZVByb2Nlc3NpbmcocGF5bG9hZCkge1xuICAgIHJldHVybiB0aGlzLl9kaXNwYXRjaCh7IG1zZzogJ2ltYWdlUHJvY2Vzc2luZycsIHBheWxvYWQgfSk7XG4gIH1cblxuICBwcmVkaWN0KHBheWxvYWQpIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzcGF0Y2goeyBtc2c6ICdwcmVkaWN0JywgcGF5bG9hZCB9KTtcbiAgfVxufVxuXG4vLyBFeHBvcnQgdGhlIHNhbWUgaW5zdGFudCBldmVyeXdoZXJlXG5leHBvcnQgZGVmYXVsdCBuZXcgQ1YoKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==