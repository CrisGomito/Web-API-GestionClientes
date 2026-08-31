import { Fn as Injectable, Ol as ɵɵdefineInjectable, Wi as setClassMetadata } from "./core-CpxyNpZz.js";
//#region node_modules/@ng-bootstrap/ng-bootstrap/fesm2022/ng-bootstrap-ng-bootstrap-config.mjs
var _NgbConfig;
/**
* Global ng-bootstrap config
*
* @since 8.0.0
*/
var NgbConfig = class {
	constructor() {
		this.animation = true;
	}
};
_NgbConfig = NgbConfig;
_NgbConfig.ɵfac = function NgbConfig_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _NgbConfig)();
};
_NgbConfig.ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
	token: _NgbConfig,
	factory: _NgbConfig.ɵfac,
	providedIn: "root"
});
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbConfig, [{
		type: Injectable,
		args: [{ providedIn: "root" }]
	}], null, null);
})();
//#endregion
export { NgbConfig as t };
