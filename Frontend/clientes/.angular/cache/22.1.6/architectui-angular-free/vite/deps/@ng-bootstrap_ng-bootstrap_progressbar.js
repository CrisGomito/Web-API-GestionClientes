import { $o as ɵɵpipeBind1, Ao as ɵɵi18n, Bo as ɵɵinterpolate2, Ca as ɵɵconditional, Dr as ViewEncapsulation, Fn as Injectable, In as Input, Ol as ɵɵdefineInjectable, Po as ɵɵi18nExp, Qo as ɵɵpipe, Ta as ɵɵconditionalCreate, Wi as setClassMetadata, Zo as ɵɵnextContext, an as ChangeDetectionStrategy, as as ɵɵprojectionDef, ba as ɵɵclassMap, cn as Component, da as ɵɵadvance, do as ɵɵdomElementEnd, fo as ɵɵdomElementStart, is as ɵɵprojection, jo as ɵɵi18nApply, kl as ɵɵdefineInjector, ll as inject, qn as NgModule, ro as ɵɵdefineNgModule, to as ɵɵdefineComponent, xa as ɵɵclassProp, ya as ɵɵattribute, zs as ɵɵstyleProp } from "./core-CpxyNpZz.js";
import { f as isNumber, l as getValueInRange } from "./_ngb-ngbootstrap-utilities-NGMx8cil.js";
import { Q as PercentPipe } from "./common-CILBZQ4R.js";
//#region node_modules/@ng-bootstrap/ng-bootstrap/fesm2022/ng-bootstrap-ng-bootstrap-progressbar.mjs
var _NgbProgressbarConfig;
var _NgbProgressbar;
var _NgbProgressbarStacked;
var _NgbProgressbarModule;
/**
* A configuration service for the [`NgbProgressbar`](#/components/progressbar/api#NgbProgressbar) component.
*
* You can inject this service, typically in your root component, and customize the values of its properties in
* order to provide default values for all the progress bars used in the application.
*/
var _c0 = ["*"];
function NgbProgressbar_Conditional_1_Template(rf, ctx) {
	if (rf & 1) {
		ɵɵdomElementStart(0, "span");
		ɵɵi18n(1, 0);
		ɵɵpipe(2, "percent");
		ɵɵdomElementEnd();
	}
	if (rf & 2) {
		const ctx_r0 = ɵɵnextContext();
		ɵɵadvance(2);
		ɵɵi18nExp(ɵɵpipeBind1(2, 1, ctx_r0.getValue() / ctx_r0.max));
		ɵɵi18nApply(1);
	}
}
var NgbProgressbarConfig = class {
	constructor() {
		this.max = 100;
		this.animated = false;
		this.ariaLabel = "progress bar";
		this.striped = false;
		this.showValue = false;
	}
};
_NgbProgressbarConfig = NgbProgressbarConfig;
_NgbProgressbarConfig.ɵfac = function NgbProgressbarConfig_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _NgbProgressbarConfig)();
};
_NgbProgressbarConfig.ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
	token: _NgbProgressbarConfig,
	factory: _NgbProgressbarConfig.ɵfac,
	providedIn: "root"
});
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbProgressbarConfig, [{
		type: Injectable,
		args: [{ providedIn: "root" }]
	}], null, null);
})();
/**
* A directive that provides feedback on the progress of a workflow or an action.
*/
var NgbProgressbar = class {
	/**
	* The maximal value to be displayed in the progress bar.
	*
	* Should be a positive number. Will default to 100 otherwise.
	*/
	set max(max) {
		this._max = !isNumber(max) || max <= 0 ? 100 : max;
	}
	get max() {
		return this._max;
	}
	constructor() {
		this._config = inject(NgbProgressbarConfig);
		this.stacked = inject(NgbProgressbarStacked, { optional: true });
		/**
		* If `true`, the stripes on the progress bar are animated.
		*
		* Takes effect only for browsers supporting CSS3 animations, and if `striped` is `true`.
		*/
		this.animated = this._config.animated;
		/**
		* The accessible progress bar name.
		*
		* @since 13.1.0
		*/
		this.ariaLabel = this._config.ariaLabel;
		/**
		* If `true`, the progress bars will be displayed as striped.
		*/
		this.striped = this._config.striped;
		/**
		* If `true`, the current percentage will be shown in the `xx%` format.
		*/
		this.showValue = this._config.showValue;
		/**
		* Optional text variant type of the progress bar.
		*
		* Supports types based on Bootstrap background color variants, like:
		*  `"success"`, `"info"`, `"warning"`, `"danger"`, `"primary"`, `"secondary"`, `"dark"` and so on.
		*
		* @since 5.2.0
		*/
		this.textType = this._config.textType;
		/**
		* The type of the progress bar.
		*
		* Supports types based on Bootstrap background color variants, like:
		*  `"success"`, `"info"`, `"warning"`, `"danger"`, `"primary"`, `"secondary"`, `"dark"` and so on.
		*/
		this.type = this._config.type;
		/**
		* The current value for the progress bar.
		*
		* Should be in the `[0, max]` range.
		*/
		this.value = 0;
		/**
		* The height of the progress bar.
		*
		* Accepts any valid CSS height values, ex. `"2rem"`
		*/
		this.height = this._config.height;
		this.max = this._config.max;
	}
	getValue() {
		return getValueInRange(this.value, this.max);
	}
	getPercentValue() {
		return 100 * this.getValue() / this.max;
	}
};
_NgbProgressbar = NgbProgressbar;
_NgbProgressbar.ɵfac = function NgbProgressbar_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _NgbProgressbar)();
};
_NgbProgressbar.ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
	type: _NgbProgressbar,
	selectors: [["ngb-progressbar"]],
	hostAttrs: [
		"role",
		"progressbar",
		"aria-valuemin",
		"0",
		1,
		"progress"
	],
	hostVars: 7,
	hostBindings: function NgbProgressbar_HostBindings(rf, ctx) {
		if (rf & 2) {
			ɵɵattribute("aria-valuenow", ctx.getValue())("aria-valuemax", ctx.max)("aria-label", ctx.ariaLabel);
			ɵɵstyleProp("width", ctx.stacked ? ctx.getPercentValue() : null, "%")("height", ctx.height);
		}
	},
	inputs: {
		max: "max",
		animated: "animated",
		ariaLabel: "ariaLabel",
		striped: "striped",
		showValue: "showValue",
		textType: "textType",
		type: "type",
		value: "value",
		height: "height"
	},
	ngContentSelectors: _c0,
	decls: 3,
	vars: 11,
	consts: () => {
		let i18n_0;
		if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) i18n_0 = goog.getMsg("{$interpolation}", { "interpolation": "�0�" }, { original_code: { "interpolation": "{{ getValue() / max | percent }}" } });
		else i18n_0 = $localize`:@@ngb.progressbar.value:${"�0�"}:INTERPOLATION:`;
		return [i18n_0];
	},
	template: function NgbProgressbar_Template(rf, ctx) {
		if (rf & 1) {
			ɵɵprojectionDef();
			ɵɵdomElementStart(0, "div");
			ɵɵconditionalCreate(1, NgbProgressbar_Conditional_1_Template, 3, 3, "span");
			ɵɵprojection(2);
			ɵɵdomElementEnd();
		}
		if (rf & 2) {
			ɵɵclassMap(ɵɵinterpolate2("progress-bar", ctx.type ? ctx.textType ? " bg-" + ctx.type : " text-bg-" + ctx.type : "", "", ctx.textType ? " text-" + ctx.textType : ""));
			ɵɵstyleProp("width", !ctx.stacked ? ctx.getPercentValue() : null, "%");
			ɵɵclassProp("progress-bar-animated", ctx.animated)("progress-bar-striped", ctx.striped);
			ɵɵadvance();
			ɵɵconditional(ctx.showValue ? 1 : -1);
		}
	},
	dependencies: [PercentPipe],
	encapsulation: 2
});
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbProgressbar, [{
		type: Component,
		args: [{
			selector: "ngb-progressbar",
			imports: [PercentPipe],
			changeDetection: ChangeDetectionStrategy.OnPush,
			encapsulation: ViewEncapsulation.None,
			host: {
				class: "progress",
				role: "progressbar",
				"[attr.aria-valuenow]": "getValue()",
				"aria-valuemin": "0",
				"[attr.aria-valuemax]": "max",
				"[attr.aria-label]": "ariaLabel",
				"[style.width.%]": "stacked ? getPercentValue() : null",
				"[style.height]": "height"
			},
			template: `
		<div
			class="progress-bar{{ type ? (textType ? ' bg-' + type : ' text-bg-' + type) : '' }}{{
				textType ? ' text-' + textType : ''
			}}"
			[class.progress-bar-animated]="animated"
			[class.progress-bar-striped]="striped"
			[style.width.%]="!stacked ? getPercentValue() : null"
		>
			@if (showValue) {
				<span i18n="@@ngb.progressbar.value">{{ getValue() / max | percent }}</span>
			}
			<ng-content />
		</div>
	`
		}]
	}], () => [], {
		max: [{ type: Input }],
		animated: [{ type: Input }],
		ariaLabel: [{ type: Input }],
		striped: [{ type: Input }],
		showValue: [{ type: Input }],
		textType: [{ type: Input }],
		type: [{ type: Input }],
		value: [{
			type: Input,
			args: [{ required: true }]
		}],
		height: [{ type: Input }]
	});
})();
/**
* A directive that allow to stack progress bars.
*
* @since 16.0.0
*/
var NgbProgressbarStacked = class {};
_NgbProgressbarStacked = NgbProgressbarStacked;
_NgbProgressbarStacked.ɵfac = function NgbProgressbarStacked_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _NgbProgressbarStacked)();
};
_NgbProgressbarStacked.ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
	type: _NgbProgressbarStacked,
	selectors: [["ngb-progressbar-stacked"]],
	hostAttrs: [1, "progress-stacked"],
	ngContentSelectors: _c0,
	decls: 1,
	vars: 0,
	template: function NgbProgressbarStacked_Template(rf, ctx) {
		if (rf & 1) {
			ɵɵprojectionDef();
			ɵɵprojection(0);
		}
	},
	encapsulation: 2
});
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbProgressbarStacked, [{
		type: Component,
		args: [{
			selector: "ngb-progressbar-stacked",
			changeDetection: ChangeDetectionStrategy.OnPush,
			encapsulation: ViewEncapsulation.None,
			host: { class: "progress-stacked" },
			template: `<ng-content></ng-content>`
		}]
	}], null, null);
})();
var NgbProgressbarModule = class {};
_NgbProgressbarModule = NgbProgressbarModule;
_NgbProgressbarModule.ɵfac = function NgbProgressbarModule_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _NgbProgressbarModule)();
};
_NgbProgressbarModule.ɵmod = /* @__PURE__ */ ɵɵdefineNgModule({
	type: _NgbProgressbarModule,
	imports: [NgbProgressbar, NgbProgressbarStacked],
	exports: [NgbProgressbar, NgbProgressbarStacked]
});
_NgbProgressbarModule.ɵinj = /* @__PURE__ */ ɵɵdefineInjector({});
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbProgressbarModule, [{
		type: NgModule,
		args: [{
			imports: [NgbProgressbar, NgbProgressbarStacked],
			exports: [NgbProgressbar, NgbProgressbarStacked]
		}]
	}], null, null);
})();
//#endregion
export { NgbProgressbar, NgbProgressbarConfig, NgbProgressbarModule, NgbProgressbarStacked };
