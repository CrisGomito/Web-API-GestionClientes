import { $n as Output, Ca as ɵɵconditional, Do as ɵɵgetCurrentView, Dr as ViewEncapsulation, Ea as ɵɵcontentQuery, En as ElementRef, Fn as Injectable, Gs as ɵɵtextInterpolate, Hs as ɵɵtemplate, In as Input, Lc as NgZone, Ll as ɵɵresetView, Lo as ɵɵinjectAttribute, Mr as afterNextRender, Ol as ɵɵdefineInjectable, Rl as ɵɵrestoreView, Sc as EventEmitter, Ta as ɵɵconditionalCreate, Us as ɵɵtemplateRefExtractor, Wi as setClassMetadata, Ws as ɵɵtext, Xo as ɵɵloadQuery, Yo as ɵɵlistener, Zo as ɵɵnextContext, as as ɵɵprojectionDef, bo as ɵɵelementEnd, bs as ɵɵreference, cn as Component, da as ɵɵadvance, i as ContentChild, is as ɵɵprojection, kc as Injector, kl as ɵɵdefineInjector, la as ɵɵNgOnChangesFeature, ll as inject, nn as Attribute, no as ɵɵdefineDirective, os as ɵɵproperty, qn as NgModule, ro as ɵɵdefineNgModule, to as ɵɵdefineComponent, vr as TemplateRef, vs as ɵɵqueryRefresh, wn as Directive, xa as ɵɵclassProp, xo as ɵɵelementStart, ya as ɵɵattribute } from "./core-CpxyNpZz.js";
import { C as reflow, x as ngbRunTransition } from "./_ngb-ngbootstrap-utilities-NGMx8cil.js";
import { Y as NgTemplateOutlet } from "./common-CILBZQ4R.js";
import { t as NgbConfig } from "./ng-bootstrap-ng-bootstrap-config-nmDZCbwt.js";
//#region node_modules/@ng-bootstrap/ng-bootstrap/fesm2022/ng-bootstrap-ng-bootstrap-toast.mjs
var _NgbToastConfig;
var _NgbToastHeader;
var _NgbToast;
var _NgbToastModule;
/**
* Configuration service for the NgbToast component. You can inject this service, typically in your root component,
* and customize the values of its properties in order to provide default values for all the toasts used in the
* application.
*
* @since 5.0.0
*/
var _c0 = ["*"];
function NgbToast_ng_template_0_Template(rf, ctx) {
	if (rf & 1) {
		ɵɵelementStart(0, "strong", 3);
		ɵɵtext(1);
		ɵɵelementEnd();
	}
	if (rf & 2) {
		const ctx_r0 = ɵɵnextContext();
		ɵɵadvance();
		ɵɵtextInterpolate(ctx_r0.header);
	}
}
function NgbToast_Conditional_2_ng_template_1_Template(rf, ctx) {}
function NgbToast_Conditional_2_Template(rf, ctx) {
	if (rf & 1) {
		const _r2 = ɵɵgetCurrentView();
		ɵɵelementStart(0, "div", 1);
		ɵɵtemplate(1, NgbToast_Conditional_2_ng_template_1_Template, 0, 0, "ng-template", 4);
		ɵɵelementStart(2, "button", 5);
		ɵɵlistener("click", function NgbToast_Conditional_2_Template_button_click_2_listener() {
			ɵɵrestoreView(_r2);
			return ɵɵresetView(ɵɵnextContext().hide());
		});
		ɵɵelementEnd()();
	}
	if (rf & 2) {
		const ctx_r0 = ɵɵnextContext();
		const headerTpl_r3 = ɵɵreference(1);
		ɵɵadvance();
		ɵɵproperty("ngTemplateOutlet", ctx_r0.contentHeaderTpl || headerTpl_r3);
	}
}
var NgbToastConfig = class {
	constructor() {
		this._ngbConfig = inject(NgbConfig);
		this.autohide = true;
		this.delay = 5e3;
		this.ariaLive = "polite";
	}
	get animation() {
		var _this$_animation;
		return (_this$_animation = this._animation) !== null && _this$_animation !== void 0 ? _this$_animation : this._ngbConfig.animation;
	}
	set animation(animation) {
		this._animation = animation;
	}
};
_NgbToastConfig = NgbToastConfig;
_NgbToastConfig.ɵfac = function NgbToastConfig_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _NgbToastConfig)();
};
_NgbToastConfig.ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
	token: _NgbToastConfig,
	factory: _NgbToastConfig.ɵfac,
	providedIn: "root"
});
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbToastConfig, [{
		type: Injectable,
		args: [{ providedIn: "root" }]
	}], null, null);
})();
var ngbToastFadeInTransition = (element, animation) => {
	const { classList } = element;
	if (animation) classList.add("fade");
	else {
		classList.add("show");
		return;
	}
	reflow(element);
	classList.add("show", "showing");
	return () => {
		classList.remove("showing");
	};
};
var ngbToastFadeOutTransition = ({ classList }) => {
	classList.add("showing");
	return () => {
		classList.remove("show", "showing");
	};
};
/**
* This directive allows the usage of HTML markup or other directives
* inside of the toast's header.
*
* @since 5.0.0
*/
var NgbToastHeader = class {};
_NgbToastHeader = NgbToastHeader;
_NgbToastHeader.ɵfac = function NgbToastHeader_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _NgbToastHeader)();
};
_NgbToastHeader.ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
	type: _NgbToastHeader,
	selectors: [[
		"",
		"ngbToastHeader",
		""
	]]
});
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbToastHeader, [{
		type: Directive,
		args: [{ selector: "[ngbToastHeader]" }]
	}], null, null);
})();
/**
* Toasts provide feedback messages as notifications to the user.
* Goal is to mimic the push notifications available both on mobile and desktop operating systems.
*
* @since 5.0.0
*/
var NgbToast = class {
	constructor(ariaLive) {
		var _this$ariaLive;
		this.ariaLive = ariaLive;
		this._config = inject(NgbToastConfig);
		this._zone = inject(NgZone);
		this._injector = inject(Injector);
		this._element = inject(ElementRef);
		/**
		* If `true`, toast opening and closing will be animated.
		*
		* Animation is triggered only when the `.hide()` or `.show()` functions are called
		*
		* @since 8.0.0
		*/
		this.animation = this._config.animation;
		/**
		* Delay after which the toast will hide (ms).
		* default: `500` (ms) (inherited from NgbToastConfig)
		*/
		this.delay = this._config.delay;
		/**
		* Auto hide the toast after a delay in ms.
		* default: `true` (inherited from NgbToastConfig)
		*/
		this.autohide = this._config.autohide;
		/**
		* A template like `<ng-template ngbToastHeader></ng-template>` can be
		* used in the projected content to allow markup usage.
		*/
		this.contentHeaderTpl = null;
		/**
		* An event fired after the animation triggered by calling `.show()` method has finished.
		*
		* @since 8.0.0
		*/
		this.shown = new EventEmitter();
		/**
		* An event fired after the animation triggered by calling `.hide()` method has finished.
		*
		* It can only occur in 2 different scenarios:
		* - `autohide` timeout fires
		* - user clicks on a closing cross
		*
		* Additionally this output is purely informative. The toast won't be removed from DOM automatically, it's up
		* to the user to take care of that.
		*
		* @since 8.0.0
		*/
		this.hidden = new EventEmitter();
		(_this$ariaLive = this.ariaLive) !== null && _this$ariaLive !== void 0 || (this.ariaLive = this._config.ariaLive);
	}
	ngAfterContentInit() {
		afterNextRender({ mixedReadWrite: () => {
			this._init();
			this.show();
		} }, { injector: this._injector });
	}
	ngOnChanges(changes) {
		if ("autohide" in changes) {
			this._clearTimeout();
			this._init();
		}
	}
	/**
	* Triggers toast closing programmatically.
	*
	* The returned observable will emit and be completed once the closing transition has finished.
	* If the animations are turned off this happens synchronously.
	*
	* Alternatively you could listen or subscribe to the `(hidden)` output
	*
	* @since 8.0.0
	*/
	hide() {
		this._clearTimeout();
		const transition = ngbRunTransition(this._zone, this._element.nativeElement, ngbToastFadeOutTransition, {
			animation: this.animation,
			runningTransition: "stop"
		});
		transition.subscribe(() => {
			this.hidden.emit();
		});
		return transition;
	}
	/**
	* Triggers toast opening programmatically.
	*
	* The returned observable will emit and be completed once the opening transition has finished.
	* If the animations are turned off this happens synchronously.
	*
	* Alternatively you could listen or subscribe to the `(shown)` output
	*
	* @since 8.0.0
	*/
	show() {
		const transition = ngbRunTransition(this._zone, this._element.nativeElement, ngbToastFadeInTransition, {
			animation: this.animation,
			runningTransition: "continue"
		});
		transition.subscribe(() => {
			this.shown.emit();
		});
		return transition;
	}
	_init() {
		if (this.autohide && !this._timeoutID) this._timeoutID = setTimeout(() => this.hide(), this.delay);
	}
	_clearTimeout() {
		if (this._timeoutID) {
			clearTimeout(this._timeoutID);
			this._timeoutID = null;
		}
	}
};
_NgbToast = NgbToast;
_NgbToast.ɵfac = function NgbToast_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _NgbToast)(ɵɵinjectAttribute("aria-live"));
};
_NgbToast.ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
	type: _NgbToast,
	selectors: [["ngb-toast"]],
	contentQueries: function NgbToast_ContentQueries(rf, ctx, dirIndex) {
		if (rf & 1) ɵɵcontentQuery(dirIndex, NgbToastHeader, 7, TemplateRef);
		if (rf & 2) {
			let _t;
			ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.contentHeaderTpl = _t.first);
		}
	},
	hostAttrs: [
		"role",
		"alert",
		"aria-atomic",
		"true",
		1,
		"toast"
	],
	hostVars: 3,
	hostBindings: function NgbToast_HostBindings(rf, ctx) {
		if (rf & 2) {
			ɵɵattribute("aria-live", ctx.ariaLive);
			ɵɵclassProp("fade", ctx.animation);
		}
	},
	inputs: {
		animation: "animation",
		delay: "delay",
		autohide: "autohide",
		header: "header"
	},
	outputs: {
		shown: "shown",
		hidden: "hidden"
	},
	exportAs: ["ngbToast"],
	features: [ɵɵNgOnChangesFeature],
	ngContentSelectors: _c0,
	decls: 5,
	vars: 1,
	consts: () => {
		let i18n_0;
		if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) i18n_0 = goog.getMsg("Close");
		else i18n_0 = $localize`:@@ngb.toast.close-aria:Close`;
		return [
			["headerTpl", ""],
			[1, "toast-header"],
			[1, "toast-body"],
			[1, "me-auto"],
			[3, "ngTemplateOutlet"],
			[
				"type",
				"button",
				"aria-label",
				i18n_0,
				1,
				"btn-close",
				3,
				"click"
			]
		];
	},
	template: function NgbToast_Template(rf, ctx) {
		if (rf & 1) {
			ɵɵprojectionDef();
			ɵɵtemplate(0, NgbToast_ng_template_0_Template, 2, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor);
			ɵɵconditionalCreate(2, NgbToast_Conditional_2_Template, 3, 1, "div", 1);
			ɵɵelementStart(3, "div", 2);
			ɵɵprojection(4);
			ɵɵelementEnd();
		}
		if (rf & 2) {
			ɵɵadvance(2);
			ɵɵconditional(ctx.contentHeaderTpl || ctx.header ? 2 : -1);
		}
	},
	dependencies: [NgTemplateOutlet],
	styles: ["ngb-toast{display:block}ngb-toast .toast-header .close{margin-left:auto;margin-bottom:.25rem}\n"],
	encapsulation: 2,
	changeDetection: 1
});
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbToast, [{
		type: Component,
		args: [{
			selector: "ngb-toast",
			exportAs: "ngbToast",
			imports: [NgTemplateOutlet],
			encapsulation: ViewEncapsulation.None,
			host: {
				role: "alert",
				"[attr.aria-live]": "ariaLive",
				"aria-atomic": "true",
				class: "toast",
				"[class.fade]": "animation"
			},
			template: `
		<ng-template #headerTpl>
			<strong class="me-auto">{{ header }}</strong>
		</ng-template>
		@if (contentHeaderTpl || header) {
			<div class="toast-header">
				<ng-template [ngTemplateOutlet]="contentHeaderTpl || headerTpl" />
				<button
					type="button"
					class="btn-close"
					aria-label="Close"
					i18n-aria-label="@@ngb.toast.close-aria"
					(click)="hide()"
				>
				</button>
			</div>
		}
		<div class="toast-body">
			<ng-content />
		</div>
	`,
			styles: ["ngb-toast{display:block}ngb-toast .toast-header .close{margin-left:auto;margin-bottom:.25rem}\n"]
		}]
	}], () => [{
		type: void 0,
		decorators: [{
			type: Attribute,
			args: ["aria-live"]
		}]
	}], {
		animation: [{ type: Input }],
		delay: [{ type: Input }],
		autohide: [{ type: Input }],
		header: [{ type: Input }],
		contentHeaderTpl: [{
			type: ContentChild,
			args: [NgbToastHeader, {
				read: TemplateRef,
				static: true
			}]
		}],
		shown: [{ type: Output }],
		hidden: [{ type: Output }]
	});
})();
var NgbToastModule = class {};
_NgbToastModule = NgbToastModule;
_NgbToastModule.ɵfac = function NgbToastModule_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _NgbToastModule)();
};
_NgbToastModule.ɵmod = /* @__PURE__ */ ɵɵdefineNgModule({
	type: _NgbToastModule,
	imports: [NgbToast, NgbToastHeader],
	exports: [NgbToast, NgbToastHeader]
});
_NgbToastModule.ɵinj = /* @__PURE__ */ ɵɵdefineInjector({});
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbToastModule, [{
		type: NgModule,
		args: [{
			imports: [NgbToast, NgbToastHeader],
			exports: [NgbToast, NgbToastHeader]
		}]
	}], null, null);
})();
//#endregion
export { NgbToast, NgbToastConfig, NgbToastHeader, NgbToastModule };
