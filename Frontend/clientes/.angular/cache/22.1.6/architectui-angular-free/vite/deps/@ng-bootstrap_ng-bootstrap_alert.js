import { $n as Output, Ca as ɵɵconditional, Do as ɵɵgetCurrentView, Dr as ViewEncapsulation, En as ElementRef, Fn as Injectable, In as Input, Lc as NgZone, Ll as ɵɵresetView, Ol as ɵɵdefineInjectable, Rl as ɵɵrestoreView, Sc as EventEmitter, Ta as ɵɵconditionalCreate, Wi as setClassMetadata, Zo as ɵɵnextContext, an as ChangeDetectionStrategy, as as ɵɵprojectionDef, ba as ɵɵclassMap, cn as Component, da as ɵɵadvance, do as ɵɵdomElementEnd, fo as ɵɵdomElementStart, is as ɵɵprojection, kl as ɵɵdefineInjector, ll as inject, po as ɵɵdomListener, qn as NgModule, ro as ɵɵdefineNgModule, to as ɵɵdefineComponent, xa as ɵɵclassProp } from "./core-CpxyNpZz.js";
import { x as ngbRunTransition } from "./_ngb-ngbootstrap-utilities-NGMx8cil.js";
import { t as NgbConfig } from "./ng-bootstrap-ng-bootstrap-config-nmDZCbwt.js";
//#region node_modules/@ng-bootstrap/ng-bootstrap/fesm2022/ng-bootstrap-ng-bootstrap-alert.mjs
var _NgbAlertConfig;
var _NgbAlert;
var _NgbAlertModule;
/**
* A configuration service for the [NgbAlert](#/components/alert/api#NgbAlert) component.
*
* You can inject this service, typically in your root component, and customize its properties
* to provide default values for all alerts used in the application.
*/
var _c0 = ["*"];
function NgbAlert_Conditional_1_Template(rf, ctx) {
	if (rf & 1) {
		const _r1 = ɵɵgetCurrentView();
		ɵɵdomElementStart(0, "button", 1);
		ɵɵdomListener("click", function NgbAlert_Conditional_1_Template_button_click_0_listener() {
			ɵɵrestoreView(_r1);
			return ɵɵresetView(ɵɵnextContext().close());
		});
		ɵɵdomElementEnd();
	}
}
var NgbAlertConfig = class {
	constructor() {
		this._ngbConfig = inject(NgbConfig);
		this.dismissible = true;
		this.type = "warning";
	}
	get animation() {
		var _this$_animation;
		return (_this$_animation = this._animation) !== null && _this$_animation !== void 0 ? _this$_animation : this._ngbConfig.animation;
	}
	set animation(animation) {
		this._animation = animation;
	}
};
_NgbAlertConfig = NgbAlertConfig;
_NgbAlertConfig.ɵfac = function NgbAlertConfig_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _NgbAlertConfig)();
};
_NgbAlertConfig.ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
	token: _NgbAlertConfig,
	factory: _NgbAlertConfig.ɵfac,
	providedIn: "root"
});
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbAlertConfig, [{
		type: Injectable,
		args: [{ providedIn: "root" }]
	}], null, null);
})();
var ngbAlertFadingTransition = ({ classList }) => {
	classList.remove("show");
};
/**
* Alert is a component to provide contextual feedback messages for user.
*
* It supports several alert types and can be dismissed.
*/
var NgbAlert = class {
	constructor() {
		this._config = inject(NgbAlertConfig);
		this._elementRef = inject(ElementRef);
		this._zone = inject(NgZone);
		/**
		* If `true`, alert closing will be animated.
		*
		* Animation is triggered only when clicked on the close button (×)
		* or via the `.close()` function
		*
		* @since 8.0.0
		*/
		this.animation = this._config.animation;
		/**
		* If `true`, alert can be dismissed by the user.
		*
		* The close button (×) will be displayed and you can be notified
		* of the event with the `(closed)` output.
		*/
		this.dismissible = this._config.dismissible;
		/**
		* Type of the alert.
		*
		* Bootstrap provides styles for the following types: `'success'`, `'info'`, `'warning'`, `'danger'`, `'primary'`,
		* `'secondary'`, `'light'` and `'dark'`.
		*/
		this.type = this._config.type;
		/**
		* An event emitted when the close button is clicked. It has no payload and only relevant for dismissible alerts.
		*
		* @since 8.0.0
		*/
		this.closed = new EventEmitter();
	}
	/**
	* Triggers alert closing programmatically (same as clicking on the close button (×)).
	*
	* The returned observable will emit and be completed once the closing transition has finished.
	* If the animations are turned off this happens synchronously.
	*
	* Alternatively you could listen or subscribe to the `(closed)` output
	*
	* @since 8.0.0
	*/
	close() {
		const transition = ngbRunTransition(this._zone, this._elementRef.nativeElement, ngbAlertFadingTransition, {
			animation: this.animation,
			runningTransition: "continue"
		});
		transition.subscribe(() => this.closed.emit());
		return transition;
	}
};
_NgbAlert = NgbAlert;
_NgbAlert.ɵfac = function NgbAlert_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _NgbAlert)();
};
_NgbAlert.ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
	type: _NgbAlert,
	selectors: [["ngb-alert"]],
	hostAttrs: ["role", "alert"],
	hostVars: 6,
	hostBindings: function NgbAlert_HostBindings(rf, ctx) {
		if (rf & 2) {
			ɵɵclassMap("alert show" + (ctx.type ? " alert-" + ctx.type : ""));
			ɵɵclassProp("fade", ctx.animation)("alert-dismissible", ctx.dismissible);
		}
	},
	inputs: {
		animation: "animation",
		dismissible: "dismissible",
		type: "type"
	},
	outputs: { closed: "closed" },
	exportAs: ["ngbAlert"],
	ngContentSelectors: _c0,
	decls: 2,
	vars: 1,
	consts: () => {
		let i18n_0;
		if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) i18n_0 = goog.getMsg("Close");
		else i18n_0 = $localize`:@@ngb.alert.close:Close`;
		return [[
			"type",
			"button",
			"aria-label",
			i18n_0,
			1,
			"btn-close"
		], [
			"type",
			"button",
			"aria-label",
			i18n_0,
			1,
			"btn-close",
			3,
			"click"
		]];
	},
	template: function NgbAlert_Template(rf, ctx) {
		if (rf & 1) {
			ɵɵprojectionDef();
			ɵɵprojection(0);
			ɵɵconditionalCreate(1, NgbAlert_Conditional_1_Template, 1, 0, "button", 0);
		}
		if (rf & 2) {
			ɵɵadvance();
			ɵɵconditional(ctx.dismissible ? 1 : -1);
		}
	},
	styles: ["ngb-alert{display:block}\n"],
	encapsulation: 2
});
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbAlert, [{
		type: Component,
		args: [{
			selector: "ngb-alert",
			exportAs: "ngbAlert",
			changeDetection: ChangeDetectionStrategy.OnPush,
			encapsulation: ViewEncapsulation.None,
			host: {
				role: "alert",
				"[class]": "\"alert show\" + (type ? \" alert-\" + type : \"\")",
				"[class.fade]": "animation",
				"[class.alert-dismissible]": "dismissible"
			},
			template: `
		<ng-content />
		@if (dismissible) {
			<button
				type="button"
				class="btn-close"
				aria-label="Close"
				i18n-aria-label="@@ngb.alert.close"
				(click)="close()"
			></button>
		}
	`,
			styles: ["ngb-alert{display:block}\n"]
		}]
	}], null, {
		animation: [{ type: Input }],
		dismissible: [{ type: Input }],
		type: [{ type: Input }],
		closed: [{ type: Output }]
	});
})();
var NgbAlertModule = class {};
_NgbAlertModule = NgbAlertModule;
_NgbAlertModule.ɵfac = function NgbAlertModule_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _NgbAlertModule)();
};
_NgbAlertModule.ɵmod = /* @__PURE__ */ ɵɵdefineNgModule({
	type: _NgbAlertModule,
	imports: [NgbAlert],
	exports: [NgbAlert]
});
_NgbAlertModule.ɵinj = /* @__PURE__ */ ɵɵdefineInjector({});
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbAlertModule, [{
		type: NgModule,
		args: [{
			imports: [NgbAlert],
			exports: [NgbAlert]
		}]
	}], null, null);
})();
//#endregion
export { NgbAlert, NgbAlertConfig, NgbAlertModule };
