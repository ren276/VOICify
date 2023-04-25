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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/about.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "E:\\Signify-master\\pages\\about.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Page = () => {
  return __jsx("div", {
    style: {
      marginTop: '2em'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jumbotron text-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 7
    }
  }, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, "Voicify - ASL Translator"), __jsx("h4", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, "Voicify uses machine learning to transform webcam input into readable sign language using a variety of different techniques. The series of texts below detail the steps taken for signify to translate an image into a final word.")), __jsx("div", {
    className: "bg-secondary jumbotron",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, __jsx("h3", {
    className: "text-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, "1. OpenCV Pipeline"), __jsx("div", {
    className: "row justify-content-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "opencv.png",
    alt: "OpenCV Pipeline Demo",
    className: "img-responsive col-xs-12 col-md-6",
    style: {
      height: '100%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "col-xs-12 col-md-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, "The first step of the process to transform an image to a letter output is our OpenCV pipeline. This pipeline is written as the following:", __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 15
    }
  }), __jsx("code", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 15
    }
  }, "cv.cvtColor(img, result, cv.COLOR_BGR2GRAY);", __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }), "cv.adaptiveThreshold( result, result, 255, cv.ADAPTIVE_THRESH_GAUSSIAN_C, cv.THRESH_BINARY, 21, 2 );", __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  }), "cv.cvtColor(result, result, cv.COLOR_GRAY2RGB);"), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 15
    }
  }), "The above pipeline simply performs an adaptive threshold on a grayscaled version on the image, highlighting its edges which make the image easier to process through the next step, the tensorflow model.")))), __jsx("div", {
    className: "bg-secondary jumbotron",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }, __jsx("h3", {
    className: "text-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, "2. Tensorflow CNN"), __jsx("div", {
    className: "row justify-content-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "model-architecture.png",
    alt: "OpenCV Pipeline Demo",
    className: "img-responsive col-xs-12 col-md-6",
    style: {
      height: '100%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "col-xs-12 col-md-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }, "After experimenting with various different model architectures, transfer learning from various different base convolutional neural network including vgg19, alexnet, and more, we settled on the architecture shown here, which both allowed the model to be run in real time as well as be fairly accurate. We took the output of a pre-trained convolutional neural network (mobile net) and added three dense layers to alter the output to classify hand signs.")))), __jsx("div", {
    className: "bg-secondary jumbotron",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }
  }, __jsx("h3", {
    className: "text-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }, "3. Interpreting The Results"), __jsx("div", {
    className: "row justify-content-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "interpretation.png",
    alt: "OpenCV Pipeline Demo",
    className: "img-responsive col-xs-12 col-md-6",
    style: {
      height: '100%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "col-xs-12 col-md-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 11
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }
  }, "The Tensorflow CNN mentioned above only gave us a stream of outputs, which had to be translated into a readable english word / set of letters, as shown in the image. To accomplish this, we developed a small algorithm like the following: If the previous detected letter is different from the current detector letter, and the previous detected letter has been repeated at least x number of times, then add the previous letter to the running predicted word. However, the threshold x may change from letter to letter, and we had to experiment with different values of x: smaller values for letters which the model had trouble with, and larger values for letters which the model was more confident with. Then, when a space character is detected, we run autocorrection and text to speech as mentioned in the text below.")))), __jsx("div", {
    className: "bg-secondary jumbotron",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 7
    }
  }, __jsx("h3", {
    className: "text-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 9
    }
  }, "4. Autocorrection And Text To Speech"), __jsx("div", {
    className: "row justify-content-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "tts.jpeg",
    alt: "OpenCV Pipeline Demo",
    className: "img-responsive col-xs-12 col-md-6",
    style: {
      height: '100%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "col-xs-12 col-md-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 11
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 13
    }
  }, "However, the letters output by the previous step were not always 100% perfect, which is why we included autocorrection. For the select times where the previous steps are not able to accurately translate a word, we use simple autocorrection to change it to the nearest english word. Additionally, we used the browser text to speech API to speak out loud the predicted word, allowing for even more use cases.")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Page);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiJdLCJuYW1lcyI6WyJQYWdlIiwibWFyZ2luVG9wIiwiaGVpZ2h0Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQSxNQUFNQSxJQUFJLEdBQUcsTUFBTTtBQUNqQixTQUNFO0FBQUssU0FBSyxFQUFFO0FBQUVDLGVBQVMsRUFBRTtBQUFiLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLHVCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFB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QUFBQSw0Q0FERixFQUVFO0FBQUssYUFBUyxFQUFDLDRCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLE9BQUcsRUFBQyxVQUROO0FBRUUsT0FBRyxFQUFDLHNCQUZOO0FBR0UsYUFBUyxFQUFDLG1DQUhaO0FBSUUsU0FBSyxFQUFFO0FBQUVBLFlBQU0sRUFBRTtBQUFWLEtBSlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBT0U7QUFBSyxhQUFTLEVBQUMsb0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOFpBREYsQ0FQRixDQUZGLENBNUZGLENBREY7QUFxSEQsQ0F0SEQ7O0FBd0hlRixtRUFBZixFOzs7Ozs7Ozs7OztBQ3hIQSxrQyIsImZpbGUiOiJwYWdlcy9hYm91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvYWJvdXQuanNcIik7XG4iLCJjb25zdCBQYWdlID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiAnMmVtJyB9fT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwianVtYm90cm9uIHRleHQtY2VudGVyXCI+XG4gICAgICAgIDxoMT5Wb2ljaWZ5IC0gQVNMIFRyYW5zbGF0b3I8L2gxPlxuICAgICAgICA8aDQ+XG4gICAgICAgICAgVm9pY2lmeSB1c2VzIG1hY2hpbmUgbGVhcm5pbmcgdG8gdHJhbnNmb3JtIHdlYmNhbSBpbnB1dCBpbnRvIHJlYWRhYmxlXG4gICAgICAgICAgc2lnbiBsYW5ndWFnZSB1c2luZyBhIHZhcmlldHkgb2YgZGlmZmVyZW50IHRlY2huaXF1ZXMuIFRoZSBzZXJpZXMgb2ZcbiAgICAgICAgICB0ZXh0cyBiZWxvdyBkZXRhaWwgdGhlIHN0ZXBzIHRha2VuIGZvciBzaWduaWZ5IHRvIHRyYW5zbGF0ZSBhbiBpbWFnZVxuICAgICAgICAgIGludG8gYSBmaW5hbCB3b3JkLlxuICAgICAgICA8L2g0PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXNlY29uZGFyeSBqdW1ib3Ryb25cIj5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+MS4gT3BlbkNWIFBpcGVsaW5lPC9oMz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz1cIm9wZW5jdi5wbmdcIlxuICAgICAgICAgICAgYWx0PVwiT3BlbkNWIFBpcGVsaW5lIERlbW9cIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLXJlc3BvbnNpdmUgY29sLXhzLTEyIGNvbC1tZC02XCJcbiAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogJzEwMCUnIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy0xMiBjb2wtbWQtNlwiPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIFRoZSBmaXJzdCBzdGVwIG9mIHRoZSBwcm9jZXNzIHRvIHRyYW5zZm9ybSBhbiBpbWFnZSB0byBhIGxldHRlclxuICAgICAgICAgICAgICBvdXRwdXQgaXMgb3VyIE9wZW5DViBwaXBlbGluZS4gVGhpcyBwaXBlbGluZSBpcyB3cml0dGVuIGFzIHRoZVxuICAgICAgICAgICAgICBmb2xsb3dpbmc6XG4gICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICA8Y29kZT5cbiAgICAgICAgICAgICAgICBjdi5jdnRDb2xvcihpbWcsIHJlc3VsdCwgY3YuQ09MT1JfQkdSMkdSQVkpO1xuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgIGN2LmFkYXB0aXZlVGhyZXNob2xkKCByZXN1bHQsIHJlc3VsdCwgMjU1LFxuICAgICAgICAgICAgICAgIGN2LkFEQVBUSVZFX1RIUkVTSF9HQVVTU0lBTl9DLCBjdi5USFJFU0hfQklOQVJZLCAyMSwgMiApO1xuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgIGN2LmN2dENvbG9yKHJlc3VsdCwgcmVzdWx0LCBjdi5DT0xPUl9HUkFZMlJHQik7XG4gICAgICAgICAgICAgIDwvY29kZT5cbiAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgIFRoZSBhYm92ZSBwaXBlbGluZSBzaW1wbHkgcGVyZm9ybXMgYW4gYWRhcHRpdmUgdGhyZXNob2xkIG9uIGFcbiAgICAgICAgICAgICAgZ3JheXNjYWxlZCB2ZXJzaW9uIG9uIHRoZSBpbWFnZSwgaGlnaGxpZ2h0aW5nIGl0cyBlZGdlcyB3aGljaCBtYWtlXG4gICAgICAgICAgICAgIHRoZSBpbWFnZSBlYXNpZXIgdG8gcHJvY2VzcyB0aHJvdWdoIHRoZSBuZXh0IHN0ZXAsIHRoZSB0ZW5zb3JmbG93XG4gICAgICAgICAgICAgIG1vZGVsLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1zZWNvbmRhcnkganVtYm90cm9uXCI+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPjIuIFRlbnNvcmZsb3cgQ05OPC9oMz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz1cIm1vZGVsLWFyY2hpdGVjdHVyZS5wbmdcIlxuICAgICAgICAgICAgYWx0PVwiT3BlbkNWIFBpcGVsaW5lIERlbW9cIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLXJlc3BvbnNpdmUgY29sLXhzLTEyIGNvbC1tZC02XCJcbiAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogJzEwMCUnIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy0xMiBjb2wtbWQtNlwiPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIEFmdGVyIGV4cGVyaW1lbnRpbmcgd2l0aCB2YXJpb3VzIGRpZmZlcmVudCBtb2RlbCBhcmNoaXRlY3R1cmVzLFxuICAgICAgICAgICAgICB0cmFuc2ZlciBsZWFybmluZyBmcm9tIHZhcmlvdXMgZGlmZmVyZW50IGJhc2UgY29udm9sdXRpb25hbCBuZXVyYWxcbiAgICAgICAgICAgICAgbmV0d29yayBpbmNsdWRpbmcgdmdnMTksIGFsZXhuZXQsIGFuZCBtb3JlLCB3ZSBzZXR0bGVkIG9uIHRoZVxuICAgICAgICAgICAgICBhcmNoaXRlY3R1cmUgc2hvd24gaGVyZSwgd2hpY2ggYm90aCBhbGxvd2VkIHRoZSBtb2RlbCB0byBiZSBydW4gaW5cbiAgICAgICAgICAgICAgcmVhbCB0aW1lIGFzIHdlbGwgYXMgYmUgZmFpcmx5IGFjY3VyYXRlLiBXZSB0b29rIHRoZSBvdXRwdXQgb2YgYVxuICAgICAgICAgICAgICBwcmUtdHJhaW5lZCBjb252b2x1dGlvbmFsIG5ldXJhbCBuZXR3b3JrIChtb2JpbGUgbmV0KSBhbmQgYWRkZWRcbiAgICAgICAgICAgICAgdGhyZWUgZGVuc2UgbGF5ZXJzIHRvIGFsdGVyIHRoZSBvdXRwdXQgdG8gY2xhc3NpZnkgaGFuZCBzaWducy5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctc2Vjb25kYXJ5IGp1bWJvdHJvblwiPlxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj4zLiBJbnRlcnByZXRpbmcgVGhlIFJlc3VsdHM8L2gzPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgc3JjPVwiaW50ZXJwcmV0YXRpb24ucG5nXCJcbiAgICAgICAgICAgIGFsdD1cIk9wZW5DViBQaXBlbGluZSBEZW1vXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1yZXNwb25zaXZlIGNvbC14cy0xMiBjb2wtbWQtNlwiXG4gICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6ICcxMDAlJyB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtMTIgY29sLW1kLTZcIj5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBUaGUgVGVuc29yZmxvdyBDTk4gbWVudGlvbmVkIGFib3ZlIG9ubHkgZ2F2ZSB1cyBhIHN0cmVhbSBvZlxuICAgICAgICAgICAgICBvdXRwdXRzLCB3aGljaCBoYWQgdG8gYmUgdHJhbnNsYXRlZCBpbnRvIGEgcmVhZGFibGUgZW5nbGlzaCB3b3JkIC9cbiAgICAgICAgICAgICAgc2V0IG9mIGxldHRlcnMsIGFzIHNob3duIGluIHRoZSBpbWFnZS4gVG8gYWNjb21wbGlzaCB0aGlzLCB3ZVxuICAgICAgICAgICAgICBkZXZlbG9wZWQgYSBzbWFsbCBhbGdvcml0aG0gbGlrZSB0aGUgZm9sbG93aW5nOiBJZiB0aGUgcHJldmlvdXNcbiAgICAgICAgICAgICAgZGV0ZWN0ZWQgbGV0dGVyIGlzIGRpZmZlcmVudCBmcm9tIHRoZSBjdXJyZW50IGRldGVjdG9yIGxldHRlciwgYW5kXG4gICAgICAgICAgICAgIHRoZSBwcmV2aW91cyBkZXRlY3RlZCBsZXR0ZXIgaGFzIGJlZW4gcmVwZWF0ZWQgYXQgbGVhc3QgeCBudW1iZXJcbiAgICAgICAgICAgICAgb2YgdGltZXMsIHRoZW4gYWRkIHRoZSBwcmV2aW91cyBsZXR0ZXIgdG8gdGhlIHJ1bm5pbmcgcHJlZGljdGVkXG4gICAgICAgICAgICAgIHdvcmQuIEhvd2V2ZXIsIHRoZSB0aHJlc2hvbGQgeCBtYXkgY2hhbmdlIGZyb20gbGV0dGVyIHRvIGxldHRlcixcbiAgICAgICAgICAgICAgYW5kIHdlIGhhZCB0byBleHBlcmltZW50IHdpdGggZGlmZmVyZW50IHZhbHVlcyBvZiB4OiBzbWFsbGVyXG4gICAgICAgICAgICAgIHZhbHVlcyBmb3IgbGV0dGVycyB3aGljaCB0aGUgbW9kZWwgaGFkIHRyb3VibGUgd2l0aCwgYW5kIGxhcmdlclxuICAgICAgICAgICAgICB2YWx1ZXMgZm9yIGxldHRlcnMgd2hpY2ggdGhlIG1vZGVsIHdhcyBtb3JlIGNvbmZpZGVudCB3aXRoLiBUaGVuLFxuICAgICAgICAgICAgICB3aGVuIGEgc3BhY2UgY2hhcmFjdGVyIGlzIGRldGVjdGVkLCB3ZSBydW4gYXV0b2NvcnJlY3Rpb24gYW5kIHRleHRcbiAgICAgICAgICAgICAgdG8gc3BlZWNoIGFzIG1lbnRpb25lZCBpbiB0aGUgdGV4dCBiZWxvdy5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctc2Vjb25kYXJ5IGp1bWJvdHJvblwiPlxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj40LiBBdXRvY29ycmVjdGlvbiBBbmQgVGV4dCBUbyBTcGVlY2g8L2gzPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgc3JjPVwidHRzLmpwZWdcIlxuICAgICAgICAgICAgYWx0PVwiT3BlbkNWIFBpcGVsaW5lIERlbW9cIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLXJlc3BvbnNpdmUgY29sLXhzLTEyIGNvbC1tZC02XCJcbiAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogJzEwMCUnIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy0xMiBjb2wtbWQtNlwiPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIEhvd2V2ZXIsIHRoZSBsZXR0ZXJzIG91dHB1dCBieSB0aGUgcHJldmlvdXMgc3RlcCB3ZXJlIG5vdCBhbHdheXNcbiAgICAgICAgICAgICAgMTAwJSBwZXJmZWN0LCB3aGljaCBpcyB3aHkgd2UgaW5jbHVkZWQgYXV0b2NvcnJlY3Rpb24uIEZvciB0aGVcbiAgICAgICAgICAgICAgc2VsZWN0IHRpbWVzIHdoZXJlIHRoZSBwcmV2aW91cyBzdGVwcyBhcmUgbm90IGFibGUgdG8gYWNjdXJhdGVseVxuICAgICAgICAgICAgICB0cmFuc2xhdGUgYSB3b3JkLCB3ZSB1c2Ugc2ltcGxlIGF1dG9jb3JyZWN0aW9uIHRvIGNoYW5nZSBpdCB0byB0aGVcbiAgICAgICAgICAgICAgbmVhcmVzdCBlbmdsaXNoIHdvcmQuIEFkZGl0aW9uYWxseSwgd2UgdXNlZCB0aGUgYnJvd3NlciB0ZXh0IHRvXG4gICAgICAgICAgICAgIHNwZWVjaCBBUEkgdG8gc3BlYWsgb3V0IGxvdWQgdGhlIHByZWRpY3RlZCB3b3JkLCBhbGxvd2luZyBmb3IgZXZlblxuICAgICAgICAgICAgICBtb3JlIHVzZSBjYXNlcy5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2U7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9