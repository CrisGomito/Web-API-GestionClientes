import { $n as Output, En as ElementRef, Fn as Injectable, In as Input, Lc as NgZone, Ol as ɵɵdefineInjectable, Sc as EventEmitter, Wi as setClassMetadata, kl as ɵɵdefineInjector, ll as inject, no as ɵɵdefineDirective, qn as NgModule, ro as ɵɵdefineNgModule, wn as Directive, xa as ɵɵclassProp } from "./core-CpxyNpZz.js";
import { _ as ngbCollapsingTransition, x as ngbRunTransition } from "./_ngb-ngbootstrap-utilities-NGMx8cil.js";
import { t as NgbConfig } from "./ng-bootstrap-ng-bootstrap-config-nmDZCbwt.js";
//#region node_modules/@ng-bootstrap/ng-bootstrap/fesm2022/ng-bootstrap-ng-bootstrap-collapse.mjs
var _NgbCollapseConfig;
var _NgbCollapse;
var _NgbCollapseModule;
/**
* A configuration service for the [NgbCollapse](#/components/collapse/api#NgbCollapse) component.
*
* You can inject this service, typically in your root component, and customize its properties
* to provide default values for all collapses used in the application.
*/
var NgbCollapseConfig = class {
	constructor() {
		this._ngbConfig = inject(NgbConfig);
		this.horizontal = false;
	}
	get animation() {
		var _this$_animation;
		return (_this$_animation = this._animation) !== null && _this$_animation !== void 0 ? _this$_animation : this._ngbConfig.animation;
	}
	set animation(animation) {
		this._animation = animation;
	}
};
_NgbCollapseConfig = NgbCollapseConfig;
_NgbCollapseConfig.ɵfac = function NgbCollapseConfig_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _NgbCollapseConfig)();
};
_NgbCollapseConfig.ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
	token: _NgbCollapseConfig,
	factory: _NgbCollapseConfig.ɵfac,
	providedIn: "root"
});
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbCollapseConfig, [{
		type: Injectable,
		args: [{ providedIn: "root" }]
	}], null, null);
})();
/**
* A directive to provide a simple way of hiding and showing elements on the
* page.
*/
var NgbCollapse = class {
	constructor() {
		this._config = inject(NgbCollapseConfig);
		this._element = inject(ElementRef);
		this._zone = inject(NgZone);
		/**
		* If `true`, collapse will be animated.
		*
		* Animation is triggered only when clicked on triggering element
		* or via the `.toggle()` function
		*
		* @since 8.0.0
		*/
		this.animation = this._config.animation;
		/**
		* Flag used to track if the collapse setter is invoked during initialization
		* or not. This distinction is made in order to avoid running the transition during initialization.
		*/
		this._afterInit = false;
		this._isCollapsed = false;
		this.ngbCollapseChange = new EventEmitter();
		/**
		* If `true`, will collapse horizontally.
		*
		* @since 13.1.0
		*/
		this.horizontal = this._config.horizontal;
		/**
		* An event emitted when the collapse element is shown, after the transition.
		* It has no payload.
		*
		* @since 8.0.0
		*/
		this.shown = new EventEmitter();
		/**
		* An event emitted when the collapse element is hidden, after the transition.
		* It has no payload.
		*
		* @since 8.0.0
		*/
		this.hidden = new EventEmitter();
	}
	/**
	* If `true`, will collapse the element or show it otherwise.
	*/
	set collapsed(isCollapsed) {
		if (this._isCollapsed !== isCollapsed) {
			this._isCollapsed = isCollapsed;
			if (this._afterInit) this._runTransitionWithEvents(isCollapsed, this.animation);
		}
	}
	ngOnInit() {
		this._runTransition(this._isCollapsed, false);
		this._afterInit = true;
	}
	/**
	* Triggers collapsing programmatically.
	*
	* If there is a collapsing transition running already, it will be reversed.
	* If the animations are turned off this happens synchronously.
	*
	* @since 8.0.0
	*/
	toggle(open = this._isCollapsed) {
		this.collapsed = !open;
		this.ngbCollapseChange.next(this._isCollapsed);
	}
	_runTransition(collapsed, animation) {
		return ngbRunTransition(this._zone, this._element.nativeElement, ngbCollapsingTransition, {
			animation,
			runningTransition: "stop",
			context: {
				direction: collapsed ? "hide" : "show",
				dimension: this.horizontal ? "width" : "height"
			}
		});
	}
	_runTransitionWithEvents(collapsed, animation) {
		this._runTransition(collapsed, animation).subscribe(() => {
			if (collapsed) this.hidden.emit();
			else this.shown.emit();
		});
	}
};
_NgbCollapse = NgbCollapse;
_NgbCollapse.ɵfac = function NgbCollapse_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _NgbCollapse)();
};
_NgbCollapse.ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
	type: _NgbCollapse,
	selectors: [[
		"",
		"ngbCollapse",
		""
	]],
	hostVars: 2,
	hostBindings: function NgbCollapse_HostBindings(rf, ctx) {
		if (rf & 2) ɵɵclassProp("collapse-horizontal", ctx.horizontal);
	},
	inputs: {
		animation: "animation",
		collapsed: [
			0,
			"ngbCollapse",
			"collapsed"
		],
		horizontal: "horizontal"
	},
	outputs: {
		ngbCollapseChange: "ngbCollapseChange",
		shown: "shown",
		hidden: "hidden"
	},
	exportAs: ["ngbCollapse"]
});
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbCollapse, [{
		type: Directive,
		args: [{
			selector: "[ngbCollapse]",
			exportAs: "ngbCollapse",
			host: { "[class.collapse-horizontal]": "horizontal" }
		}]
	}], null, {
		animation: [{ type: Input }],
		collapsed: [{
			type: Input,
			args: ["ngbCollapse"]
		}],
		ngbCollapseChange: [{ type: Output }],
		horizontal: [{ type: Input }],
		shown: [{ type: Output }],
		hidden: [{ type: Output }]
	});
})();
var NgbCollapseModule = class {};
_NgbCollapseModule = NgbCollapseModule;
_NgbCollapseModule.ɵfac = function NgbCollapseModule_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _NgbCollapseModule)();
};
_NgbCollapseModule.ɵmod = /* @__PURE__ */ ɵɵdefineNgModule({
	type: _NgbCollapseModule,
	imports: [NgbCollapse],
	exports: [NgbCollapse]
});
_NgbCollapseModule.ɵinj = /* @__PURE__ */ ɵɵdefineInjector({});
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbCollapseModule, [{
		type: NgModule,
		args: [{
			imports: [NgbCollapse],
			exports: [NgbCollapse]
		}]
	}], null, null);
})();
//#endregion
export { NgbCollapse, NgbCollapseConfig, NgbCollapseModule };
