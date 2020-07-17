/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "public";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/CustomConsole.ts":
/*!******************************!*\
  !*** ./src/CustomConsole.ts ***!
  \******************************/
/*! exports provided: CustomConsole */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CustomConsole\", function() { return CustomConsole; });\nclass CustomConsole {\r\n    constructor() {\r\n        var _a;\r\n        this.siteBody = document.querySelector(\"#body\"); //Musste hier zusätzlich null als Typ mit angeben, weil es auch sein kann, dass kein body existiert\r\n        this.consoleText = document.querySelector(\"#custom\");\r\n        this.consoleInput = document.querySelector(\"#customInput\");\r\n        window.addEventListener(\"click\", this.focusInputField);\r\n        (_a = this.consoleInput) === null || _a === void 0 ? void 0 : _a.addEventListener(\"keydown\", this.handleInput);\r\n    }\r\n    static getInstance() {\r\n        if (CustomConsole.instance == null)\r\n            CustomConsole.instance = new CustomConsole();\r\n        return CustomConsole.instance;\r\n    }\r\n    update(_text) {\r\n        this.focusInputField();\r\n        this.consoleText.innerHTML = _text + \"<p class=\\\"custom__commands\\\">commands(c), look(l), inventory(i), take(t) item, drop(d) item, quit(q)</p>\";\r\n    }\r\n    handleInput(_event) {\r\n        var _a;\r\n        let inputText = \"\";\r\n        if (_event.keyCode == 13) {\r\n            this.consoleInput = document.querySelector(\"#customInput\"); // Muss mir das Input Field immer neu rausziehen, hängt wohl damit zusammen dass eventlisteners asynchron sind\r\n            inputText = (_a = this.consoleInput) === null || _a === void 0 ? void 0 : _a.value;\r\n            if (inputText == undefined)\r\n                inputText = \"\";\r\n        }\r\n        return inputText;\r\n    }\r\n    focusInputField() {\r\n        var _a;\r\n        this.consoleInput = document.querySelector(\"#customInput\"); // Muss mir das Input Field immer neu rausziehen, hängt wohl damit zusammen dass eventlisteners asynchron sind\r\n        (_a = this.consoleInput) === null || _a === void 0 ? void 0 : _a.focus();\r\n    }\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvQ3VzdG9tQ29uc29sZS50cz84NzkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBTyxNQUFNLGFBQWE7SUFNdEI7O1FBSk8sYUFBUSxHQUEyQixRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsbUdBQW1HO1FBQ3ZLLGdCQUFXLEdBQXVCLFFBQVEsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDcEUsaUJBQVksR0FBNEIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUdsRixNQUFNLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUV2RCxVQUFJLENBQUMsWUFBWSwwQ0FBRSxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRTtJQUNyRSxDQUFDO0lBRU0sTUFBTSxDQUFDLFdBQVc7UUFDckIsSUFBSSxhQUFhLENBQUMsUUFBUSxJQUFJLElBQUk7WUFDOUIsYUFBYSxDQUFDLFFBQVEsR0FBRyxJQUFJLGFBQWEsRUFBRSxDQUFDO1FBRWpELE9BQU8sYUFBYSxDQUFDLFFBQVEsQ0FBQztJQUNsQyxDQUFDO0lBRU0sTUFBTSxDQUFDLEtBQWE7UUFDdkIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxXQUFZLENBQUMsU0FBUyxHQUFHLEtBQUssR0FBRywyR0FBMkcsQ0FBQztJQUN0SixDQUFDO0lBRU8sV0FBVyxDQUFDLE1BQXFCOztRQUNyQyxJQUFJLFNBQVMsR0FBdUIsRUFBRSxDQUFDO1FBQ3ZDLElBQUksTUFBTSxDQUFDLE9BQU8sSUFBSSxFQUFFLEVBQUU7WUFDdEIsSUFBSSxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsOEdBQThHO1lBQzFLLFNBQVMsU0FBRyxJQUFJLENBQUMsWUFBWSwwQ0FBRSxLQUFLLENBQUM7WUFDckMsSUFBSSxTQUFTLElBQUksU0FBUztnQkFDdEIsU0FBUyxHQUFHLEVBQUUsQ0FBQztTQUN0QjtRQUNELE9BQU8sU0FBUyxDQUFDO0lBQ3JCLENBQUM7SUFFTyxlQUFlOztRQUNuQixJQUFJLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyw4R0FBOEc7UUFDMUssVUFBSSxDQUFDLFlBQVksMENBQUUsS0FBSyxHQUFHO0lBQy9CLENBQUM7Q0FDSiIsImZpbGUiOiIuL3NyYy9DdXN0b21Db25zb2xlLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEN1c3RvbUNvbnNvbGUge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IEN1c3RvbUNvbnNvbGU7IC8vRWluIFNpbmdsZXRvbiBtYWNodCBoaWVyIFNpbm4sIGRhIGljaCBudXIgZWluZSBJbnN0YW56IGRlciBLbGFzc2UgZXhpc3RpZXJlbiBzb2xsXHJcbiAgICBwdWJsaWMgc2l0ZUJvZHk6IEhUTUxCb2R5RWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JvZHlcIik7IC8vTXVzc3RlIGhpZXIgenVzw6R0emxpY2ggbnVsbCBhbHMgVHlwIG1pdCBhbmdlYmVuLCB3ZWlsIGVzIGF1Y2ggc2VpbiBrYW5uLCBkYXNzIGtlaW4gYm9keSBleGlzdGllcnRcclxuICAgIHB1YmxpYyBjb25zb2xlVGV4dDogSFRNTEVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjdXN0b21cIik7XHJcbiAgICBwdWJsaWMgY29uc29sZUlucHV0OiBIVE1MSW5wdXRFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY3VzdG9tSW5wdXRcIik7XHJcblxyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuZm9jdXNJbnB1dEZpZWxkKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmNvbnNvbGVJbnB1dD8uYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5oYW5kbGVJbnB1dCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBDdXN0b21Db25zb2xlIHtcclxuICAgICAgICBpZiAoQ3VzdG9tQ29uc29sZS5pbnN0YW5jZSA9PSBudWxsKVxyXG4gICAgICAgICAgICBDdXN0b21Db25zb2xlLmluc3RhbmNlID0gbmV3IEN1c3RvbUNvbnNvbGUoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIEN1c3RvbUNvbnNvbGUuaW5zdGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZShfdGV4dDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5mb2N1c0lucHV0RmllbGQoKTtcclxuICAgICAgICB0aGlzLmNvbnNvbGVUZXh0IS5pbm5lckhUTUwgPSBfdGV4dCArIFwiPHAgY2xhc3M9XFxcImN1c3RvbV9fY29tbWFuZHNcXFwiPmNvbW1hbmRzKGMpLCBsb29rKGwpLCBpbnZlbnRvcnkoaSksIHRha2UodCkgaXRlbSwgZHJvcChkKSBpdGVtLCBxdWl0KHEpPC9wPlwiO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlSW5wdXQoX2V2ZW50OiBLZXlib2FyZEV2ZW50KTogc3RyaW5nIHtcclxuICAgICAgICBsZXQgaW5wdXRUZXh0OiBzdHJpbmcgfCB1bmRlZmluZWQgPSBcIlwiO1xyXG4gICAgICAgIGlmIChfZXZlbnQua2V5Q29kZSA9PSAxMykge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnNvbGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY3VzdG9tSW5wdXRcIik7IC8vIE11c3MgbWlyIGRhcyBJbnB1dCBGaWVsZCBpbW1lciBuZXUgcmF1c3ppZWhlbiwgaMOkbmd0IHdvaGwgZGFtaXQgenVzYW1tZW4gZGFzcyBldmVudGxpc3RlbmVycyBhc3luY2hyb24gc2luZFxyXG4gICAgICAgICAgICBpbnB1dFRleHQgPSB0aGlzLmNvbnNvbGVJbnB1dD8udmFsdWU7XHJcbiAgICAgICAgICAgIGlmIChpbnB1dFRleHQgPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgaW5wdXRUZXh0ID0gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGlucHV0VGV4dDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGZvY3VzSW5wdXRGaWVsZCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmNvbnNvbGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY3VzdG9tSW5wdXRcIik7IC8vIE11c3MgbWlyIGRhcyBJbnB1dCBGaWVsZCBpbW1lciBuZXUgcmF1c3ppZWhlbiwgaMOkbmd0IHdvaGwgZGFtaXQgenVzYW1tZW4gZGFzcyBldmVudGxpc3RlbmVycyBhc3luY2hyb24gc2luZFxyXG4gICAgICAgIHRoaXMuY29uc29sZUlucHV0Py5mb2N1cygpO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/CustomConsole.ts\n");

/***/ }),

/***/ "./src/Main.ts":
/*!*********************!*\
  !*** ./src/Main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _CustomConsole__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomConsole */ \"./src/CustomConsole.ts\");\n\r\nvar TextAdventure;\r\n(function (TextAdventure) {\r\n    const customConsole = _CustomConsole__WEBPACK_IMPORTED_MODULE_0__[\"CustomConsole\"].getInstance();\r\n    customConsole.update(\"Willkommen zum Textadventure in der griechischen Mythologie. Du schlüpfst in die Rolle von Herakles und musst die ihm auferlegten Aufgaben von Eurystheus auferlegen Aufgaben meistern<br>Wir starten mit der Jagd nach auf den nemeischen Löwen in den lernäischen Wäldern.<br>Du stehst am Waldrand was willst du tun?\");\r\n})(TextAdventure || (TextAdventure = {}));\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvTWFpbi50cz8zNGNkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBZ0Q7QUFFaEQsSUFBVSxhQUFhLENBS3RCO0FBTEQsV0FBVSxhQUFhO0lBRW5CLE1BQU0sYUFBYSxHQUFrQiw0REFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBRWpFLGFBQWEsQ0FBQyxNQUFNLENBQUMsMFRBQTBULENBQUMsQ0FBQztBQUNyVixDQUFDLEVBTFMsYUFBYSxLQUFiLGFBQWEsUUFLdEIiLCJmaWxlIjoiLi9zcmMvTWFpbi50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEN1c3RvbUNvbnNvbGUgfSBmcm9tIFwiLi9DdXN0b21Db25zb2xlXCI7XHJcblxyXG5uYW1lc3BhY2UgVGV4dEFkdmVudHVyZSB7XHJcblxyXG4gICAgY29uc3QgY3VzdG9tQ29uc29sZTogQ3VzdG9tQ29uc29sZSA9IEN1c3RvbUNvbnNvbGUuZ2V0SW5zdGFuY2UoKTtcclxuXHJcbiAgICBjdXN0b21Db25zb2xlLnVwZGF0ZShcIldpbGxrb21tZW4genVtIFRleHRhZHZlbnR1cmUgaW4gZGVyIGdyaWVjaGlzY2hlbiBNeXRob2xvZ2llLiBEdSBzY2hsw7xwZnN0IGluIGRpZSBSb2xsZSB2b24gSGVyYWtsZXMgdW5kIG11c3N0IGRpZSBpaG0gYXVmZXJsZWd0ZW4gQXVmZ2FiZW4gdm9uIEV1cnlzdGhldXMgYXVmZXJsZWdlbiBBdWZnYWJlbiBtZWlzdGVybjxicj5XaXIgc3RhcnRlbiBtaXQgZGVyIEphZ2QgbmFjaCBhdWYgZGVuIG5lbWVpc2NoZW4gTMO2d2VuIGluIGRlbiBsZXJuw6Rpc2NoZW4gV8OkbGRlcm4uPGJyPkR1IHN0ZWhzdCBhbSBXYWxkcmFuZCB3YXMgd2lsbHN0IGR1IHR1bj9cIik7ICBcclxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Main.ts\n");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/Main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/Main.ts */"./src/Main.ts");


/***/ })

/******/ });