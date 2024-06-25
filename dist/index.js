/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 838:
/***/ ((module) => {

module.exports = eval("require")("@actions/core");


/***/ }),

/***/ 509:
/***/ ((module) => {

module.exports = eval("require")("@actions/io");


/***/ }),

/***/ 147:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
const core = __nccwpck_require__(838);
const io = __nccwpck_require__(509);
const fs = __nccwpck_require__(147);

function getBoolValue(name) {
  return ["true", "1", "yes", "y"].includes(
    core.getInput(name).trim().toLowerCase()
  );
}

async function main() {
  try {
    const keepGit = getBoolValue("keep-git");
    await fs.readdir(".", async (err, files) => {
      if (err) {
        throw new Error(`Failed to list files: ${err}`);
      }
      for (const file of files) {
        if (keepGit && file === ".git") {
          continue;
        }
        console.log(`Deleting ${file}`);
        await io.rmRF(file);
      }
    });
  } catch (error) {
    core.setFailed(error.message);
  }
}

main()
  .then(() => console.log("Finished"))
  .catch((err) => console.log(`Failed to delete files: ${err}`));

})();

module.exports = __webpack_exports__;
/******/ })()
;