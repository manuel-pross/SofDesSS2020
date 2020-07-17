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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CustomConsole\", function() { return CustomConsole; });\nclass CustomConsole {\r\n    constructor() {\r\n        this.siteBody = document.querySelector(\"#body\"); //Musste hier zusätzlich null als Typ mit angeben, weil es auch sein kann, dass kein body existiert\r\n    }\r\n    static getInstance() {\r\n        if (CustomConsole.instance == null)\r\n            CustomConsole.instance = new CustomConsole();\r\n        return CustomConsole.instance;\r\n    }\r\n    update(_text) {\r\n        if (this.siteBody === null)\r\n            throw new Error(\"No body found\");\r\n        else {\r\n            this.siteBody.insertAdjacentHTML(\"beforeend\", \"<p>\" + _text + \"</p>\");\r\n            this.siteBody.insertAdjacentHTML(\"beforeend\", \"<input class=\\\"custom__input\\\"></input>\");\r\n        }\r\n    }\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvQ3VzdG9tQ29uc29sZS50cz84NzkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBTyxNQUFNLGFBQWE7SUFJdEI7UUFGTyxhQUFRLEdBQTJCLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxtR0FBbUc7SUFFdkosQ0FBQztJQUVqQixNQUFNLENBQUMsV0FBVztRQUNyQixJQUFJLGFBQWEsQ0FBQyxRQUFRLElBQUksSUFBSTtZQUM5QixhQUFhLENBQUMsUUFBUSxHQUFHLElBQUksYUFBYSxFQUFFLENBQUM7UUFFakQsT0FBTyxhQUFhLENBQUMsUUFBUSxDQUFDO0lBQ2xDLENBQUM7SUFFTSxNQUFNLENBQUMsS0FBYTtRQUN2QixJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssSUFBSTtZQUN0QixNQUFNLElBQUksS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDO2FBQ2hDO1lBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLEVBQUUsS0FBSyxHQUFHLEtBQUssR0FBSSxNQUFNLENBQUMsQ0FBQztZQUN2RSxJQUFJLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsRUFBRSx5Q0FBeUMsQ0FBQyxDQUFDO1NBQzVGO0lBQ0wsQ0FBQztDQUNKIiwiZmlsZSI6Ii4vc3JjL0N1c3RvbUNvbnNvbGUudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQ3VzdG9tQ29uc29sZSB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogQ3VzdG9tQ29uc29sZTsgLy9FaW4gU2luZ2xldG9uIG1hY2h0IGhpZXIgU2lubiwgZGEgaWNoIG51ciBlaW5lIEluc3RhbnogZGVyIEtsYXNzZSBleGlzdGllcmVuIHNvbGxcclxuICAgIHB1YmxpYyBzaXRlQm9keTogSFRNTEJvZHlFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYm9keVwiKTsgLy9NdXNzdGUgaGllciB6dXPDpHR6bGljaCBudWxsIGFscyBUeXAgbWl0IGFuZ2ViZW4sIHdlaWwgZXMgYXVjaCBzZWluIGthbm4sIGRhc3Mga2VpbiBib2R5IGV4aXN0aWVydFxyXG5cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogQ3VzdG9tQ29uc29sZSB7XHJcbiAgICAgICAgaWYgKEN1c3RvbUNvbnNvbGUuaW5zdGFuY2UgPT0gbnVsbClcclxuICAgICAgICAgICAgQ3VzdG9tQ29uc29sZS5pbnN0YW5jZSA9IG5ldyBDdXN0b21Db25zb2xlKCk7XHJcblxyXG4gICAgICAgIHJldHVybiBDdXN0b21Db25zb2xlLmluc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGUoX3RleHQ6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLnNpdGVCb2R5ID09PSBudWxsKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBib2R5IGZvdW5kXCIpO1xyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNpdGVCb2R5Lmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCBcIjxwPlwiICsgX3RleHQgKyAgXCI8L3A+XCIpO1xyXG4gICAgICAgICAgICB0aGlzLnNpdGVCb2R5Lmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCBcIjxpbnB1dCBjbGFzcz1cXFwiY3VzdG9tX19pbnB1dFxcXCI+PC9pbnB1dD5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/CustomConsole.ts\n");

/***/ }),

/***/ "./src/Main.ts":
/*!*********************!*\
  !*** ./src/Main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _CustomConsole__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomConsole */ \"./src/CustomConsole.ts\");\n\r\nvar TextAdventure;\r\n(function (TextAdventure) {\r\n    const customConsole = _CustomConsole__WEBPACK_IMPORTED_MODULE_0__[\"CustomConsole\"].getInstance();\r\n    try {\r\n        customConsole.update(\"hello\");\r\n    }\r\n    catch (error) {\r\n        alert(error.message);\r\n    }\r\n})(TextAdventure || (TextAdventure = {}));\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvTWFpbi50cz8zNGNkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBZ0Q7QUFFaEQsSUFBVSxhQUFhLENBU3RCO0FBVEQsV0FBVSxhQUFhO0lBRW5CLE1BQU0sYUFBYSxHQUFrQiw0REFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBRWpFLElBQUk7UUFDQSxhQUFhLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQ2pDO0lBQUMsT0FBTyxLQUFLLEVBQUU7UUFDWixLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQ3hCO0FBQ0wsQ0FBQyxFQVRTLGFBQWEsS0FBYixhQUFhLFFBU3RCIiwiZmlsZSI6Ii4vc3JjL01haW4udHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDdXN0b21Db25zb2xlIH0gZnJvbSBcIi4vQ3VzdG9tQ29uc29sZVwiO1xyXG5cclxubmFtZXNwYWNlIFRleHRBZHZlbnR1cmUge1xyXG5cclxuICAgIGNvbnN0IGN1c3RvbUNvbnNvbGU6IEN1c3RvbUNvbnNvbGUgPSBDdXN0b21Db25zb2xlLmdldEluc3RhbmNlKCk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjdXN0b21Db25zb2xlLnVwZGF0ZShcImhlbGxvXCIpOyAgXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGFsZXJ0KGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Main.ts\n");

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"css/main.css\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL21haW4uc2Nzcz9hOWE2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQWUsb0ZBQXVCLGlCQUFpQiIsImZpbGUiOiIuL3NyYy9zdHlsZXMvbWFpbi5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImNzcy9tYWluLmNzc1wiOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/styles/main.scss\n");

/***/ }),

/***/ 0:
/*!**************************************************!*\
  !*** multi ./src/Main.ts ./src/styles/main.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/Main.ts */"./src/Main.ts");
module.exports = __webpack_require__(/*! ./src/styles/main.scss */"./src/styles/main.scss");


/***/ })

/******/ });