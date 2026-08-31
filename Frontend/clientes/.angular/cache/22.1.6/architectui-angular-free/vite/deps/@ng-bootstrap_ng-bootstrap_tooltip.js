import { $n as Output, Dr as ViewEncapsulation, En as ElementRef, Fn as Injectable, In as Input, Lc as NgZone, Ol as ɵɵdefineInjectable, Sc as EventEmitter, Wi as setClassMetadata, Yo as ɵɵlistener, an as ChangeDetectionStrategy, as as ɵɵprojectionDef, ba as ɵɵclassMap, cn as Component, do as ɵɵdomElementEnd, fo as ɵɵdomElementStart, gc as DOCUMENT, is as ɵɵprojection, jr as afterEveryRender, kc as Injector, kl as ɵɵdefineInjector, la as ɵɵNgOnChangesFeature, ll as inject, mo as ɵɵdomProperty, no as ɵɵdefineDirective, qn as NgModule, r as ChangeDetectorRef, ro as ɵɵdefineNgModule, so as ɵɵdomElement, to as ɵɵdefineComponent, wn as Directive, xa as ɵɵclassProp } from "./core-CpxyNpZz.js";
import { Dn as Subject } from "./operators-BOtrYIkv.js";
import { b as ngbPositioning, g as ngbAutoClose, h as listenToTriggers, i as PopupService, m as isString, o as addPopperOffset, v as ngbCompleteTransition } from "./_ngb-ngbootstrap-utilities-NGMx8cil.js";
import { t as NgbConfig } from "./ng-bootstrap-ng-bootstrap-config-nmDZCbwt.js";
//#region node_modules/@ng-bootstrap/ng-bootstrap/fesm2022/ng-bootstrap-ng-bootstrap-tooltip.mjs
var _NgbTooltipConfig;
var _NgbTooltipWindow;
var _NgbTooltip;
var _NgbTooltipModule;
/**
* A configuration service for the [`NgbTooltip`](#/components/tooltip/api#NgbTooltip) component.
*
* You can inject this service, typically in your root component, and customize the values of its properties in
* order to provide default values for all the tooltips used in the application.
*/
var _c0 = ["*"];
var NgbTooltipConfig = class {
	constructor() {
		this._ngbConfig = inject(NgbConfig);
		this.autoClose = true;
		this.placement = "auto";
		this.popperOptions = (options) => options;
		this.triggers = "hover focus";
		this.disableTooltip = false;
		this.openDelay = 0;
		this.closeDelay = 0;
	}
	get animation() {
		var _this$_animation;
		return (_this$_animation = this._animation) !== null && _this$_animation !== void 0 ? _this$_animation : this._ngbConfig.animation;
	}
	set animation(animation) {
		this._animation = animation;
	}
};
_NgbTooltipConfig = NgbTooltipConfig;
_NgbTooltipConfig.ɵfac = function NgbTooltipConfig_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _NgbTooltipConfig)();
};
_NgbTooltipConfig.ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
	token: _NgbTooltipConfig,
	factory: _NgbTooltipConfig.ɵfac,
	providedIn: "root"
});
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbTooltipConfig, [{
		type: Injectable,
		args: [{ providedIn: "root" }]
	}], null, null);
})();
var nextId = 0;
var NgbTooltipWindow = class {};
_NgbTooltipWindow = NgbTooltipWindow;
_NgbTooltipWindow.ɵfac = function NgbTooltipWindow_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _NgbTooltipWindow)();
};
_NgbTooltipWindow.ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
	type: _NgbTooltipWindow,
	selectors: [["ngb-tooltip-window"]],
	hostAttrs: ["role", "tooltip"],
	hostVars: 5,
	hostBindings: function NgbTooltipWindow_HostBindings(rf, ctx) {
		if (rf & 1) ɵɵlistener("mouseenter", function NgbTooltipWindow_mouseenter_HostBindingHandler() {
			return ctx.onMouseEnter();
		})("mouseleave", function NgbTooltipWindow_mouseleave_HostBindingHandler() {
			return ctx.onMouseLeave();
		});
		if (rf & 2) {
			ɵɵdomProperty("id", ctx.id);
			ɵɵclassMap("tooltip" + (ctx.tooltipClass ? " " + ctx.tooltipClass : ""));
			ɵɵclassProp("fade", ctx.animation);
		}
	},
	inputs: {
		animation: "animation",
		id: "id",
		tooltipClass: "tooltipClass",
		onMouseEnter: "onMouseEnter",
		onMouseLeave: "onMouseLeave"
	},
	ngContentSelectors: _c0,
	decls: 3,
	vars: 0,
	consts: [[
		"data-popper-arrow",
		"",
		1,
		"tooltip-arrow"
	], [1, "tooltip-inner"]],
	template: function NgbTooltipWindow_Template(rf, ctx) {
		if (rf & 1) {
			ɵɵprojectionDef();
			ɵɵdomElement(0, "div", 0);
			ɵɵdomElementStart(1, "div", 1);
			ɵɵprojection(2);
			ɵɵdomElementEnd();
		}
	},
	styles: ["ngb-tooltip-window{pointer-events:none;position:absolute}ngb-tooltip-window .tooltip-inner{pointer-events:auto}ngb-tooltip-window.bs-tooltip-top,ngb-tooltip-window.bs-tooltip-bottom{padding-left:0;padding-right:0}ngb-tooltip-window.bs-tooltip-start,ngb-tooltip-window.bs-tooltip-end{padding-top:0;padding-bottom:0}\n"],
	encapsulation: 2
});
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbTooltipWindow, [{
		type: Component,
		args: [{
			selector: "ngb-tooltip-window",
			changeDetection: ChangeDetectionStrategy.OnPush,
			encapsulation: ViewEncapsulation.None,
			host: {
				"[class]": "\"tooltip\" + (tooltipClass ? \" \" + tooltipClass : \"\")",
				"[class.fade]": "animation",
				role: "tooltip",
				"[id]": "id",
				"(mouseenter)": "onMouseEnter()",
				"(mouseleave)": "onMouseLeave()"
			},
			template: `
		<div class="tooltip-arrow" data-popper-arrow></div>
		<div class="tooltip-inner">
			<ng-content />
		</div>
	`,
			styles: ["ngb-tooltip-window{pointer-events:none;position:absolute}ngb-tooltip-window .tooltip-inner{pointer-events:auto}ngb-tooltip-window.bs-tooltip-top,ngb-tooltip-window.bs-tooltip-bottom{padding-left:0;padding-right:0}ngb-tooltip-window.bs-tooltip-start,ngb-tooltip-window.bs-tooltip-end{padding-top:0;padding-bottom:0}\n"]
		}]
	}], null, {
		animation: [{ type: Input }],
		id: [{ type: Input }],
		tooltipClass: [{ type: Input }],
		onMouseEnter: [{ type: Input }],
		onMouseLeave: [{ type: Input }]
	});
})();
/**
* A lightweight and extensible directive for fancy tooltip creation.
*/
var NgbTooltip = class {
	constructor() {
		this._config = inject(NgbTooltipConfig);
		/**
		* If `true`, tooltip opening and closing will be animated.
		*
		* @since 8.0.0
		*/
		this.animation = this._config.animation;
		/**
		* Indicates whether the tooltip should be closed on `Escape` key and inside/outside clicks:
		*
		* * `true` - closes on both outside and inside clicks as well as `Escape` presses
		* * `false` - disables the autoClose feature (NB: triggers still apply)
		* * `"inside"` - closes on inside clicks as well as Escape presses
		* * `"outside"` - closes on outside clicks (sometimes also achievable through triggers)
		* as well as `Escape` presses
		*
		* @since 3.0.0
		*/
		this.autoClose = this._config.autoClose;
		/**
		* The preferred placement of the tooltip, among the [possible values](#/guides/positioning#api).
		*
		* The default order of preference is `"auto"`.
		*
		* Please see the [positioning overview](#/positioning) for more details.
		*/
		this.placement = this._config.placement;
		/**
		* Allows to change default Popper options when positioning the tooltip.
		* Receives current popper options and returns modified ones.
		*
		* @since 13.1.0
		*/
		this.popperOptions = this._config.popperOptions;
		/**
		* Specifies events that should trigger the tooltip.
		*
		* Supports a space separated list of event names.
		* For more details see the [triggers demo](#/components/tooltip/examples#triggers).
		*/
		this.triggers = this._config.triggers;
		/**
		* A selector specifying the element the tooltip should be appended to.
		*
		* Currently only supports `"body"`.
		*/
		this.container = this._config.container;
		/**
		* If `true`, tooltip is disabled and won't be displayed.
		*
		* @since 1.1.0
		*/
		this.disableTooltip = this._config.disableTooltip;
		/**
		* An optional class applied to the tooltip window element.
		*
		* @since 3.2.0
		*/
		this.tooltipClass = this._config.tooltipClass;
		/**
		* The opening delay in ms. Works only for "non-manual" opening triggers defined by the `triggers` input.
		*
		* @since 4.1.0
		*/
		this.openDelay = this._config.openDelay;
		/**
		* The closing delay in ms. Works only for "non-manual" opening triggers defined by the `triggers` input.
		*
		* @since 4.1.0
		*/
		this.closeDelay = this._config.closeDelay;
		/**
		* An event emitted when the tooltip opening animation has finished. Contains no payload.
		*/
		this.shown = new EventEmitter();
		/**
		* An event emitted when the tooltip closing animation has finished. Contains no payload.
		*/
		this.hidden = new EventEmitter();
		this._nativeElement = inject(ElementRef).nativeElement;
		this._ngZone = inject(NgZone);
		this._document = inject(DOCUMENT);
		this._changeDetector = inject(ChangeDetectorRef);
		this._injector = inject(Injector);
		this._ngbTooltipWindowId = `ngb-tooltip-${nextId++}`;
		this._popupService = new PopupService(NgbTooltipWindow);
		this._windowRef = null;
		this._positioning = ngbPositioning();
		this._mouseEnterTooltip = new Subject();
		this._mouseLeaveTooltip = new Subject();
		this._opening = true;
		this._transitioning = false;
	}
	/**
	* The string content or a `TemplateRef` for the content to be displayed in the tooltip.
	*
	* If the content if falsy, the tooltip won't open.
	*/
	set ngbTooltip(value) {
		this._ngbTooltip = value;
		if (!value && this._windowRef) this.close();
	}
	get ngbTooltip() {
		return this._ngbTooltip;
	}
	/**
	* Opens the tooltip.
	*
	* This is considered to be a "manual" triggering.
	* The `context` is an optional value to be injected into the tooltip template when it is created.
	*/
	open(context) {
		if (!this._opening && this._transitioning) {
			this._transitioning = false;
			ngbCompleteTransition(this._windowRef.location.nativeElement);
		}
		if (!this._windowRef && this._ngbTooltip && !this.disableTooltip) {
			const { windowRef, transition$ } = this._popupService.open(this._ngbTooltip, context !== null && context !== void 0 ? context : this.tooltipContext, this.animation);
			this._opening = true;
			this._transitioning = true;
			this._windowRef = windowRef;
			this._windowRef.setInput("animation", this.animation);
			this._windowRef.setInput("tooltipClass", this.tooltipClass);
			this._windowRef.setInput("id", this._ngbTooltipWindowId);
			this._windowRef.setInput("onMouseEnter", () => this._mouseEnterTooltip.next());
			this._windowRef.setInput("onMouseLeave", () => this._mouseLeaveTooltip.next());
			this._getPositionTargetElement().setAttribute("aria-describedby", this._ngbTooltipWindowId);
			if (this.container === "body") this._document.body.appendChild(this._windowRef.location.nativeElement);
			this._windowRef.changeDetectorRef.detectChanges();
			this._windowRef.changeDetectorRef.markForCheck();
			this._ngZone.runOutsideAngular(() => {
				this._positioning.createPopper({
					hostElement: this._getPositionTargetElement(),
					targetElement: this._windowRef.location.nativeElement,
					placement: this.placement,
					baseClass: "bs-tooltip",
					updatePopperOptions: (options) => this.popperOptions(addPopperOffset([0, 6])(options))
				});
				Promise.resolve().then(() => {
					this._positioning.update();
				});
				this._afterRenderRef = afterEveryRender({ mixedReadWrite: () => {
					this._positioning.update();
				} }, { injector: this._injector });
			});
			ngbAutoClose(this._ngZone, this._document, this.autoClose, () => this.close(), this.hidden, [this._windowRef.location.nativeElement], [this._nativeElement]);
			transition$.subscribe(() => {
				if (this._transitioning) {
					this._transitioning = false;
					this.shown.emit();
				}
			});
		}
	}
	/**
	* Closes the tooltip.
	*
	* This is considered to be a "manual" triggering of the tooltip.
	*/
	close(animation = this.animation) {
		if (this._opening && this._transitioning) {
			this._transitioning = false;
			ngbCompleteTransition(this._windowRef.location.nativeElement);
		}
		if (this._windowRef != null) {
			this._getPositionTargetElement().removeAttribute("aria-describedby");
			this._opening = false;
			this._transitioning = true;
			this._popupService.close(animation).subscribe(() => {
				var _this$_afterRenderRef;
				this._windowRef = null;
				this._positioning.destroy();
				(_this$_afterRenderRef = this._afterRenderRef) === null || _this$_afterRenderRef === void 0 || _this$_afterRenderRef.destroy();
				if (this._transitioning) {
					this._transitioning = false;
					this.hidden.emit();
				}
				this._changeDetector.markForCheck();
			});
		}
	}
	/**
	* Toggles the tooltip.
	*
	* This is considered to be a "manual" triggering of the tooltip.
	*/
	toggle() {
		if (this._windowRef) this.close();
		else this.open();
	}
	/**
	* Returns `true`, if the tooltip is currently shown.
	*/
	isOpen() {
		return this._windowRef != null;
	}
	ngOnInit() {
		this._unregisterListenersFn = listenToTriggers(this._nativeElement, this.triggers, this.isOpen.bind(this), this.open.bind(this), this.close.bind(this), +this.openDelay, +this.closeDelay, this._mouseEnterTooltip, this._mouseLeaveTooltip);
	}
	ngOnChanges({ tooltipClass }) {
		if (tooltipClass && this.isOpen()) this._windowRef.setInput("tooltipClass", tooltipClass.currentValue);
	}
	ngOnDestroy() {
		var _this$_unregisterList;
		this.close(false);
		(_this$_unregisterList = this._unregisterListenersFn) === null || _this$_unregisterList === void 0 || _this$_unregisterList.call(this);
	}
	_getPositionTargetElement() {
		return (isString(this.positionTarget) ? this._document.querySelector(this.positionTarget) : this.positionTarget) || this._nativeElement;
	}
};
_NgbTooltip = NgbTooltip;
_NgbTooltip.ɵfac = function NgbTooltip_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _NgbTooltip)();
};
_NgbTooltip.ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
	type: _NgbTooltip,
	selectors: [[
		"",
		"ngbTooltip",
		""
	]],
	inputs: {
		animation: "animation",
		autoClose: "autoClose",
		placement: "placement",
		popperOptions: "popperOptions",
		triggers: "triggers",
		positionTarget: "positionTarget",
		container: "container",
		disableTooltip: "disableTooltip",
		tooltipClass: "tooltipClass",
		tooltipContext: "tooltipContext",
		openDelay: "openDelay",
		closeDelay: "closeDelay",
		ngbTooltip: "ngbTooltip"
	},
	outputs: {
		shown: "shown",
		hidden: "hidden"
	},
	exportAs: ["ngbTooltip"],
	features: [ɵɵNgOnChangesFeature]
});
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbTooltip, [{
		type: Directive,
		args: [{
			selector: "[ngbTooltip]",
			exportAs: "ngbTooltip"
		}]
	}], null, {
		animation: [{ type: Input }],
		autoClose: [{ type: Input }],
		placement: [{ type: Input }],
		popperOptions: [{ type: Input }],
		triggers: [{ type: Input }],
		positionTarget: [{ type: Input }],
		container: [{ type: Input }],
		disableTooltip: [{ type: Input }],
		tooltipClass: [{ type: Input }],
		tooltipContext: [{ type: Input }],
		openDelay: [{ type: Input }],
		closeDelay: [{ type: Input }],
		shown: [{ type: Output }],
		hidden: [{ type: Output }],
		ngbTooltip: [{ type: Input }]
	});
})();
var NgbTooltipModule = class {};
_NgbTooltipModule = NgbTooltipModule;
_NgbTooltipModule.ɵfac = function NgbTooltipModule_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _NgbTooltipModule)();
};
_NgbTooltipModule.ɵmod = /* @__PURE__ */ ɵɵdefineNgModule({
	type: _NgbTooltipModule,
	imports: [NgbTooltip],
	exports: [NgbTooltip]
});
_NgbTooltipModule.ɵinj = /* @__PURE__ */ ɵɵdefineInjector({});
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbTooltipModule, [{
		type: NgModule,
		args: [{
			imports: [NgbTooltip],
			exports: [NgbTooltip]
		}]
	}], null, null);
})();
//#endregion
export { NgbTooltip, NgbTooltipConfig, NgbTooltipModule };
