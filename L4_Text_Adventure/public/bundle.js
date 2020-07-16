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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/Main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Main.ts":
/*!*********************!*\
  !*** ./src/Main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Ops__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ops */ \"./src/Ops.ts\");\n\r\nwhile (true) {\r\n    let userCommand = prompt(\"Welcome to the Calculator. Start entering calculations!\", \"+\");\r\n    if (userCommand == null)\r\n        userCommand = \"\";\r\n    if (userCommand.toLowerCase() == \"exit\")\r\n        break;\r\n    let left = 0;\r\n    let right = 0;\r\n    let opInx = 0;\r\n    if (userCommand.includes(\"+\") || userCommand.includes(\"-\") || userCommand.includes(\"/\") || userCommand.includes(\"*\") || userCommand.includes(\"^\") || userCommand.includes(\"#\"))\r\n        for (let i = 0; i < userCommand.length; i++)\r\n            if (userCommand[i] == \"+\" || userCommand[i] == \"-\" || userCommand[i] == \"/\" || userCommand[i] == \"*\" || userCommand[i] == \"^\" || userCommand[i] == \"#\")\r\n                opInx = i;\r\n    if (opInx < 0)\r\n        console.log(\"No operator specified\");\r\n    let opSymbol = userCommand[opInx];\r\n    try {\r\n        left = parseInt(userCommand.substring(0, opInx));\r\n        right = parseInt(userCommand.substring(opInx + 1));\r\n    }\r\n    catch (error) {\r\n        console.log(\"Error parsing commmand\");\r\n    }\r\n    console.log(\"Calculating \" + left + \" \" + opSymbol + \" \" + right);\r\n    switch (opSymbol) {\r\n        case \"+\":\r\n            console.log(_Ops__WEBPACK_IMPORTED_MODULE_0__[\"Ops\"].add(left, right));\r\n            break;\r\n        case \"-\":\r\n            console.log(_Ops__WEBPACK_IMPORTED_MODULE_0__[\"Ops\"].subtract(left, right));\r\n            break;\r\n        case \"*\":\r\n            console.log(_Ops__WEBPACK_IMPORTED_MODULE_0__[\"Ops\"].mulitply(left, right));\r\n            break;\r\n        case \"^\":\r\n            console.log(_Ops__WEBPACK_IMPORTED_MODULE_0__[\"Ops\"].power(left, right));\r\n            break;\r\n        case \"#\":\r\n            console.log(_Ops__WEBPACK_IMPORTED_MODULE_0__[\"Ops\"].greatestCommonDenominator(left, right));\r\n            break;\r\n        default:\r\n            console.log(_Ops__WEBPACK_IMPORTED_MODULE_0__[\"Ops\"].divide(left, right));\r\n            break;\r\n    }\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvTWFpbi50cz8zNGNkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBNEI7QUFFNUIsT0FBTyxJQUFJLEVBQUU7SUFFVCxJQUFJLFdBQVcsR0FBa0IsTUFBTSxDQUFDLHlEQUF5RCxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBR3hHLElBQUksV0FBVyxJQUFJLElBQUk7UUFDbkIsV0FBVyxHQUFHLEVBQUUsQ0FBQztJQUVyQixJQUFJLFdBQVcsQ0FBQyxXQUFXLEVBQUUsSUFBSSxNQUFNO1FBQ25DLE1BQU07SUFFVixJQUFJLElBQUksR0FBVyxDQUFDLENBQUM7SUFDckIsSUFBSSxLQUFLLEdBQVcsQ0FBQyxDQUFDO0lBQ3RCLElBQUksS0FBSyxHQUFXLENBQUMsQ0FBQztJQUV0QixJQUFJLFdBQVcsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksV0FBVyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxXQUFXLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksV0FBVyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxXQUFXLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQztRQUMxSyxLQUFLLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUU7WUFDL0MsSUFBSSxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUssV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUc7Z0JBQ3BKLEtBQUssR0FBRyxDQUFDLENBQUM7SUFFdEIsSUFBSSxLQUFLLEdBQUcsQ0FBQztRQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQztJQUV6QyxJQUFJLFFBQVEsR0FBVyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFMUMsSUFBSTtRQUNBLElBQUksR0FBRyxRQUFRLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNqRCxLQUFLLEdBQUcsUUFBUSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDdEQ7SUFBQyxPQUFPLEtBQUssRUFBRTtRQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztLQUN6QztJQUVELE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxHQUFHLElBQUksR0FBRyxHQUFHLEdBQUcsUUFBUSxHQUFHLEdBQUcsR0FBRyxLQUFLLENBQUUsQ0FBQztJQUVuRSxRQUFRLFFBQVEsRUFBRTtRQUNkLEtBQUssR0FBRztZQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0NBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDbEMsTUFBTTtRQUNWLEtBQUssR0FBRztZQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0NBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDdkMsTUFBTTtRQUNWLEtBQUssR0FBRztZQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0NBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDdkMsTUFBTTtRQUNWLEtBQUssR0FBRztZQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0NBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDcEMsTUFBTTtRQUNWLEtBQUssR0FBRztZQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0NBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUN4RCxNQUFNO1FBQ1Y7WUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLHdDQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3JDLE1BQU07S0FDYjtDQUVKIiwiZmlsZSI6Ii4vc3JjL01haW4udHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPcHMgfSBmcm9tIFwiLi9PcHNcIjtcclxuXHJcbndoaWxlICh0cnVlKSB7XHJcblxyXG4gICAgbGV0IHVzZXJDb21tYW5kOiBTdHJpbmcgfCBudWxsID0gcHJvbXB0KFwiV2VsY29tZSB0byB0aGUgQ2FsY3VsYXRvci4gU3RhcnQgZW50ZXJpbmcgY2FsY3VsYXRpb25zIVwiLCBcIitcIik7XHJcblxyXG4gICAgXHJcbiAgICBpZiAodXNlckNvbW1hbmQgPT0gbnVsbClcclxuICAgICAgICB1c2VyQ29tbWFuZCA9IFwiXCI7XHJcblxyXG4gICAgaWYgKHVzZXJDb21tYW5kLnRvTG93ZXJDYXNlKCkgPT0gXCJleGl0XCIpXHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgbGV0IGxlZnQ6IG51bWJlciA9IDA7XHJcbiAgICBsZXQgcmlnaHQ6IG51bWJlciA9IDA7XHJcbiAgICBsZXQgb3BJbng6IG51bWJlciA9IDA7XHJcbiAgICBcclxuICAgIGlmICh1c2VyQ29tbWFuZC5pbmNsdWRlcyhcIitcIikgfHwgdXNlckNvbW1hbmQuaW5jbHVkZXMoXCItXCIpIHx8IHVzZXJDb21tYW5kLmluY2x1ZGVzKFwiL1wiKSB8fCB1c2VyQ29tbWFuZC5pbmNsdWRlcyhcIipcIikgfHwgdXNlckNvbW1hbmQuaW5jbHVkZXMoXCJeXCIpIHx8IHVzZXJDb21tYW5kLmluY2x1ZGVzKFwiI1wiKSlcclxuICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdXNlckNvbW1hbmQubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgICAgIGlmICh1c2VyQ29tbWFuZFtpXSA9PSBcIitcIiB8fCB1c2VyQ29tbWFuZFtpXSA9PSBcIi1cIiAgfHwgdXNlckNvbW1hbmRbaV0gPT0gXCIvXCIgIHx8IHVzZXJDb21tYW5kW2ldID09IFwiKlwiIHx8IHVzZXJDb21tYW5kW2ldID09IFwiXlwiIHx8IHVzZXJDb21tYW5kW2ldID09IFwiI1wiKVxyXG4gICAgICAgICAgICAgICAgb3BJbnggPSBpO1xyXG5cclxuICAgIGlmIChvcElueCA8IDApXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJObyBvcGVyYXRvciBzcGVjaWZpZWRcIik7XHJcbiAgICBcclxuICAgIGxldCBvcFN5bWJvbDogc3RyaW5nID0gdXNlckNvbW1hbmRbb3BJbnhdO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgbGVmdCA9IHBhcnNlSW50KHVzZXJDb21tYW5kLnN1YnN0cmluZygwLCBvcElueCkpO1xyXG4gICAgICAgIHJpZ2h0ID0gcGFyc2VJbnQodXNlckNvbW1hbmQuc3Vic3RyaW5nKG9wSW54ICsgMSkpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIHBhcnNpbmcgY29tbW1hbmRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJDYWxjdWxhdGluZyBcIiArIGxlZnQgKyBcIiBcIiArIG9wU3ltYm9sICsgXCIgXCIgKyByaWdodCApO1xyXG5cclxuICAgIHN3aXRjaCAob3BTeW1ib2wpIHtcclxuICAgICAgICBjYXNlIFwiK1wiOlxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhPcHMuYWRkKGxlZnQsIHJpZ2h0KSk7ICAgIFxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiLVwiOlxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhPcHMuc3VidHJhY3QobGVmdCwgcmlnaHQpKTsgICBcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcIipcIjpcclxuICAgICAgICAgICAgY29uc29sZS5sb2coT3BzLm11bGl0cGx5KGxlZnQsIHJpZ2h0KSk7ICAgXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJeXCI6XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKE9wcy5wb3dlcihsZWZ0LCByaWdodCkpOyBcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcIiNcIjpcclxuICAgICAgICAgICAgY29uc29sZS5sb2coT3BzLmdyZWF0ZXN0Q29tbW9uRGVub21pbmF0b3IobGVmdCwgcmlnaHQpKTsgICBcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgY29uc29sZS5sb2coT3BzLmRpdmlkZShsZWZ0LCByaWdodCkpOyAgIFxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Main.ts\n");

/***/ }),

/***/ "./src/Ops.ts":
/*!********************!*\
  !*** ./src/Ops.ts ***!
  \********************/
/*! exports provided: Ops */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Ops\", function() { return Ops; });\nclass Ops {\r\n    static add(a, b) {\r\n        return a + b;\r\n    }\r\n    static subtract(a, b) {\r\n        return a - b;\r\n    }\r\n    static mulitply(a, b) {\r\n        return a * b;\r\n    }\r\n    static divide(a, b) {\r\n        return a / b;\r\n    }\r\n    static power(a, exp) {\r\n        let result = 1;\r\n        for (let i = 0; i < exp; i++)\r\n            result *= a;\r\n        return result;\r\n    }\r\n    static greatestCommonDenominator(a, b) {\r\n        if (a < b) {\r\n            let tmp = a;\r\n            a = b;\r\n            b = tmp;\r\n        }\r\n        while (b > 0) {\r\n            let c = a % b;\r\n            a = b;\r\n            b = c;\r\n        }\r\n        return a;\r\n    }\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvT3BzLnRzPzYxMjkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFPLE1BQU0sR0FBRztJQUNMLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBUyxFQUFFLENBQVM7UUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2pCLENBQUM7SUFFTSxNQUFNLENBQUMsUUFBUSxDQUFDLENBQVMsRUFBRSxDQUFTO1FBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNqQixDQUFDO0lBRU0sTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFTLEVBQUUsQ0FBUztRQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDakIsQ0FBQztJQUVNLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBUyxFQUFFLENBQVM7UUFDckMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2pCLENBQUM7SUFFTSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQVMsRUFBRSxHQUFXO1FBQ3RDLElBQUksTUFBTSxHQUFXLENBQUMsQ0FBQztRQUV2QixLQUFLLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRTtZQUNoQyxNQUFNLElBQUksQ0FBQyxDQUFDO1FBRWhCLE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFFTSxNQUFNLENBQUMseUJBQXlCLENBQUMsQ0FBUyxFQUFFLENBQVM7UUFDeEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ1AsSUFBSSxHQUFHLEdBQVcsQ0FBQyxDQUFDO1lBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7U0FDdkM7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDVixJQUFJLENBQUMsR0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDdkM7UUFDRCxPQUFPLENBQUMsQ0FBQztJQUNiLENBQUM7Q0FDSiIsImZpbGUiOiIuL3NyYy9PcHMudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgT3BzIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgYWRkKGE6IG51bWJlciwgYjogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gYSArIGI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzdWJ0cmFjdChhOiBudW1iZXIsIGI6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIGEgLSBiO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbXVsaXRwbHkoYTogbnVtYmVyLCBiOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBhICogYjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGRpdmlkZShhOiBudW1iZXIsIGI6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIGEgLyBiO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgc3RhdGljIHBvd2VyKGE6IG51bWJlciwgZXhwOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIGxldCByZXN1bHQ6IG51bWJlciA9IDE7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IGV4cDsgaSsrKVxyXG4gICAgICAgICAgICByZXN1bHQgKj0gYTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIHN0YXRpYyBncmVhdGVzdENvbW1vbkRlbm9taW5hdG9yKGE6IG51bWJlciwgYjogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICBpZiAoYSA8IGIpIHtcclxuICAgICAgICAgICAgbGV0IHRtcDogbnVtYmVyID0gYTsgYSA9IGI7IGIgPSB0bXA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdoaWxlIChiID4gMCkge1xyXG4gICAgICAgICAgICBsZXQgYzogbnVtYmVyID0gYSAlIGI7IGEgPSBiOyBiID0gYztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGE7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Ops.ts\n");

/***/ })

/******/ });