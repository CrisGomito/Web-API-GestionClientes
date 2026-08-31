import { $n as Output, Ca as ɵɵconditional, Dr as ViewEncapsulation, En as ElementRef, Fn as Injectable, Gs as ɵɵtextInterpolate, Hs as ɵɵtemplate, In as Input, Lc as NgZone, Ol as ɵɵdefineInjectable, Sc as EventEmitter, Ta as ɵɵconditionalCreate, Us as ɵɵtemplateRefExtractor, Wi as setClassMetadata, Ws as ɵɵtext, Yo as ɵɵlistener, Zo as ɵɵnextContext, an as ChangeDetectionStrategy, as as ɵɵprojectionDef, ba as ɵɵclassMap, bo as ɵɵelementEnd, bs as ɵɵreference, cn as Component, da as ɵɵadvance, gc as DOCUMENT, go as ɵɵelement, is as ɵɵprojection, jr as afterEveryRender, kc as Injector, kl as ɵɵdefineInjector, la as ɵɵNgOnChangesFeature, ll as inject, mo as ɵɵdomProperty, no as ɵɵdefineDirective, os as ɵɵproperty, qn as NgModule, r as ChangeDetectorRef, ro as ɵɵdefineNgModule, to as ɵɵdefineComponent, vr as TemplateRef, wn as Directive, xa as ɵɵclassProp, xo as ɵɵelementStart } from "./core-CpxyNpZz.js";
import { Dn as Subject } from "./operators-BOtrYIkv.js";
import { b as ngbPositioning, g as ngbAutoClose, h as listenToTriggers, i as PopupService, m as isString, o as addPopperOffset, v as ngbCompleteTransition } from "./_ngb-ngbootstrap-utilities-NGMx8cil.js";
import { Y as NgTemplateOutlet } from "./common-CILBZQ4R.js";
import { t as NgbConfig } from "./ng-bootstrap-ng-bootstrap-config-nmDZCbwt.js";
//#region node_modules/@ng-bootstrap/ng-bootstrap/fesm2022/ng-bootstrap-ng-bootstrap-popover.mjs
var _NgbPopoverConfig;
var _NgbPopoverWindow;
var _NgbPopover;
var _NgbPopoverModule;
/**
* A configuration service for the [`NgbPopover`](#/components/popover/api#NgbPopover) component.
*
* You can inject this service, typically in your root component, and customize the values of its properties in
* order to provide default values for all the popovers used in the application.
*/
var _c0 = ["*"];
function NgbPopoverWindow_Conditional_1_ng_template_1_Template(rf, ctx) {
	if (rf & 1) ɵɵtext(0);
	if (rf & 2) ɵɵtextInterpolate(ɵɵnextContext(2).title);
}
function NgbPopoverWindow_Conditional_1_ng_template_3_Template(rf, ctx) {}
function NgbPopoverWindow_Conditional_1_Template(rf, ctx) {
	if (rf & 1) {
		ɵɵelementStart(0, "h3", 2);
		ɵɵtemplate(1, NgbPopoverWindow_Conditional_1_ng_template_1_Template, 1, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor)(3, NgbPopoverWindow_Conditional_1_ng_template_3_Template, 0, 0, "ng-template", 4);
		ɵɵelementEnd();
	}
	if (rf & 2) {
		const simpleTitle_r2 = ɵɵreference(2);
		const ctx_r0 = ɵɵnextContext();
		ɵɵadvance(3);
		ɵɵproperty("ngTemplateOutlet", ctx_r0.isTitleTemplate() ? ctx_r0.title : simpleTitle_r2)("ngTemplateOutletContext", ctx_r0.context);
	}
}
var NgbPopoverConfig = class {
	constructor() {
		this._ngbConfig = inject(NgbConfig);
		this.autoClose = true;
		this.placement = "auto";
		this.popperOptions = (options) => options;
		this.triggers = "click";
		this.disablePopover = false;
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
_NgbPopoverConfig = NgbPopoverConfig;
_NgbPopoverConfig.ɵfac = function NgbPopoverConfig_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _NgbPopoverConfig)();
};
_NgbPopoverConfig.ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
	token: _NgbPopoverConfig,
	factory: _NgbPopoverConfig.ɵfac,
	providedIn: "root"
});
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbPopoverConfig, [{
		type: Injectable,
		args: [{ providedIn: "root" }]
	}], null, null);
})();
var nextId = 0;
var NgbPopoverWindow = class {
	isTitleTemplate() {
		return this.title instanceof TemplateRef;
	}
};
_NgbPopoverWindow = NgbPopoverWindow;
_NgbPopoverWindow.ɵfac = function NgbPopoverWindow_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _NgbPopoverWindow)();
};
_NgbPopoverWindow.ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
	type: _NgbPopoverWindow,
	selectors: [["ngb-popover-window"]],
	hostAttrs: [
		"role",
		"tooltip",
		2,
		"position",
		"absolute"
	],
	hostVars: 5,
	hostBindings: function NgbPopoverWindow_HostBindings(rf, ctx) {
		if (rf & 1) ɵɵlistener("mouseenter", function NgbPopoverWindow_mouseenter_HostBindingHandler() {
			return ctx.onMouseEnter();
		})("mouseleave", function NgbPopoverWindow_mouseleave_HostBindingHandler() {
			return ctx.onMouseLeave();
		});
		if (rf & 2) {
			ɵɵdomProperty("id", ctx.id);
			ɵɵclassMap("popover" + (ctx.popoverClass ? " " + ctx.popoverClass : ""));
			ɵɵclassProp("fade", ctx.animation);
		}
	},
	inputs: {
		animation: "animation",
		title: "title",
		id: "id",
		popoverClass: "popoverClass",
		context: "context",
		onMouseEnter: "onMouseEnter",
		onMouseLeave: "onMouseLeave"
	},
	ngContentSelectors: _c0,
	decls: 4,
	vars: 1,
	consts: [
		["simpleTitle", ""],
		[
			"data-popper-arrow",
			"",
			1,
			"popover-arrow"
		],
		[1, "popover-header"],
		[1, "popover-body"],
		[
			3,
			"ngTemplateOutlet",
			"ngTemplateOutletContext"
		]
	],
	template: function NgbPopoverWindow_Template(rf, ctx) {
		if (rf & 1) {
			ɵɵprojectionDef();
			ɵɵelement(0, "div", 1);
			ɵɵconditionalCreate(1, NgbPopoverWindow_Conditional_1_Template, 4, 2, "h3", 2);
			ɵɵelementStart(2, "div", 3);
			ɵɵprojection(3);
			ɵɵelementEnd();
		}
		if (rf & 2) {
			ɵɵadvance();
			ɵɵconditional(ctx.title ? 1 : -1);
		}
	},
	dependencies: [NgTemplateOutlet],
	encapsulation: 2
});
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbPopoverWindow, [{
		type: Component,
		args: [{
			selector: "ngb-popover-window",
			imports: [NgTemplateOutlet],
			changeDetection: ChangeDetectionStrategy.OnPush,
			encapsulation: ViewEncapsulation.None,
			host: {
				"[class]": "\"popover\" + (popoverClass ? \" \" + popoverClass : \"\")",
				"[class.fade]": "animation",
				role: "tooltip",
				"[id]": "id",
				style: "position: absolute;",
				"(mouseenter)": "onMouseEnter()",
				"(mouseleave)": "onMouseLeave()"
			},
			template: `
		<div class="popover-arrow" data-popper-arrow></div>
		@if (title) {
			<h3 class="popover-header">
				<ng-template #simpleTitle>{{ title }}</ng-template>
				<ng-template
					[ngTemplateOutlet]="isTitleTemplate() ? $any(title) : simpleTitle"
					[ngTemplateOutletContext]="context"
				/>
			</h3>
		}
		<div class="popover-body">
			<ng-content />
		</div>
	`
		}]
	}], null, {
		animation: [{ type: Input }],
		title: [{ type: Input }],
		id: [{ type: Input }],
		popoverClass: [{ type: Input }],
		context: [{ type: Input }],
		onMouseEnter: [{ type: Input }],
		onMouseLeave: [{ type: Input }]
	});
})();
/**
* A lightweight and extensible directive for fancy popover creation.
*/
var NgbPopover = class {
	constructor() {
		this._config = inject(NgbPopoverConfig);
		/**
		* If `true`, popover opening and closing will be animated.
		*
		* @since 8.0.0
		*/
		this.animation = this._config.animation;
		/**
		* Indicates whether the popover should be closed on `Escape` key and inside/outside clicks:
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
		* The preferred placement of the popover, among the [possible values](#/guides/positioning#api).
		*
		* The default order of preference is `"auto"`.
		*
		* Please see the [positioning overview](#/positioning) for more details.
		*/
		this.placement = this._config.placement;
		/**
		* Allows to change default Popper options when positioning the popover.
		* Receives current popper options and returns modified ones.
		*
		* @since 13.1.0
		*/
		this.popperOptions = this._config.popperOptions;
		/**
		* Specifies events that should trigger the tooltip.
		*
		* Supports a space separated list of event names.
		* For more details see the [triggers demo](#/components/popover/examples#triggers).
		*/
		this.triggers = this._config.triggers;
		/**
		* A selector specifying the element the popover should be appended to.
		*
		* Currently only supports `body`.
		*/
		this.container = this._config.container;
		/**
		* If `true`, popover is disabled and won't be displayed.
		*
		* @since 1.1.0
		*/
		this.disablePopover = this._config.disablePopover;
		/**
		* An optional class applied to the popover window element.
		*
		* @since 2.2.0
		*/
		this.popoverClass = this._config.popoverClass;
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
		* An event emitted when the popover opening animation has finished. Contains no payload.
		*/
		this.shown = new EventEmitter();
		/**
		* An event emitted when the popover closing animation has finished. Contains no payload.
		*
		* At this point popover is not in the DOM anymore.
		*/
		this.hidden = new EventEmitter();
		this._nativeElement = inject(ElementRef).nativeElement;
		this._ngZone = inject(NgZone);
		this._document = inject(DOCUMENT);
		this._changeDetector = inject(ChangeDetectorRef);
		this._injector = inject(Injector);
		this._ngbPopoverWindowId = `ngb-popover-${nextId++}`;
		this._popupService = new PopupService(NgbPopoverWindow);
		this._windowRef = null;
		this._positioning = ngbPositioning();
		this._mouseEnterPopover = new Subject();
		this._mouseLeavePopover = new Subject();
		this._opening = true;
		this._transitioning = false;
	}
	/**
	* Opens the popover.
	*
	* This is considered to be a "manual" triggering.
	* The `context` is an optional value to be injected into the popover template when it is created.
	*/
	open(context) {
		if (!this._opening && this._transitioning) {
			this._transitioning = false;
			ngbCompleteTransition(this._windowRef.location.nativeElement);
		}
		if (!this._windowRef && !this._isDisabled()) {
			const { windowRef, transition$ } = this._popupService.open(this.ngbPopover, context !== null && context !== void 0 ? context : this.popoverContext, this.animation);
			this._opening = true;
			this._transitioning = true;
			this._windowRef = windowRef;
			this._windowRef.setInput("animation", this.animation);
			this._windowRef.setInput("title", this.popoverTitle);
			this._windowRef.setInput("context", context !== null && context !== void 0 ? context : this.popoverContext);
			this._windowRef.setInput("popoverClass", this.popoverClass);
			this._windowRef.setInput("id", this._ngbPopoverWindowId);
			this._windowRef.setInput("onMouseEnter", () => this._mouseEnterPopover.next());
			this._windowRef.setInput("onMouseLeave", () => this._mouseLeavePopover.next());
			this._getPositionTargetElement().setAttribute("aria-describedby", this._ngbPopoverWindowId);
			if (this.container === "body") this._document.body.appendChild(this._windowRef.location.nativeElement);
			this._windowRef.changeDetectorRef.detectChanges();
			this._windowRef.changeDetectorRef.markForCheck();
			this._ngZone.runOutsideAngular(() => {
				this._positioning.createPopper({
					hostElement: this._getPositionTargetElement(),
					targetElement: this._windowRef.location.nativeElement,
					placement: this.placement,
					baseClass: "bs-popover",
					updatePopperOptions: (options) => this.popperOptions(addPopperOffset([0, 8])(options))
				});
				Promise.resolve().then(() => {
					this._positioning.update();
				});
				this._afterRenderRef = afterEveryRender({ mixedReadWrite: () => {
					this._positioning.update();
				} }, { injector: this._injector });
			});
			ngbAutoClose(this._ngZone, this._document, this.autoClose, () => this.close(), this.hidden, [this._windowRef.location.nativeElement]);
			transition$.subscribe(() => {
				if (this._transitioning) {
					this._transitioning = false;
					this.shown.emit();
				}
			});
		}
	}
	/**
	* Closes the popover.
	*
	* This is considered to be a "manual" triggering of the popover.
	*/
	close(animation = this.animation) {
		if (this._opening && this._transitioning) {
			this._transitioning = false;
			ngbCompleteTransition(this._windowRef.location.nativeElement);
		}
		if (this._windowRef) {
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
	* Toggles the popover.
	*
	* This is considered to be a "manual" triggering of the popover.
	*/
	toggle() {
		if (this._windowRef) this.close();
		else this.open();
	}
	/**
	* Returns `true`, if the popover is currently shown.
	*/
	isOpen() {
		return this._windowRef != null;
	}
	ngOnInit() {
		this._unregisterListenersFn = listenToTriggers(this._nativeElement, this.triggers, this.isOpen.bind(this), this.open.bind(this), this.close.bind(this), +this.openDelay, +this.closeDelay, this._mouseEnterPopover, this._mouseLeavePopover);
	}
	ngOnChanges({ ngbPopover, popoverTitle, disablePopover, popoverClass }) {
		if (popoverClass && this.isOpen()) this._windowRef.setInput("popoverClass", popoverClass.currentValue);
		if ((ngbPopover || popoverTitle || disablePopover) && this._isDisabled()) this.close();
	}
	ngOnDestroy() {
		var _this$_unregisterList;
		this.close(false);
		(_this$_unregisterList = this._unregisterListenersFn) === null || _this$_unregisterList === void 0 || _this$_unregisterList.call(this);
	}
	_isDisabled() {
		return this.disablePopover ? true : !this.ngbPopover && !this.popoverTitle;
	}
	_getPositionTargetElement() {
		return (isString(this.positionTarget) ? this._document.querySelector(this.positionTarget) : this.positionTarget) || this._nativeElement;
	}
};
_NgbPopover = NgbPopover;
_NgbPopover.ɵfac = function NgbPopover_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _NgbPopover)();
};
_NgbPopover.ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
	type: _NgbPopover,
	selectors: [[
		"",
		"ngbPopover",
		""
	]],
	inputs: {
		animation: "animation",
		autoClose: "autoClose",
		ngbPopover: "ngbPopover",
		popoverTitle: "popoverTitle",
		placement: "placement",
		popperOptions: "popperOptions",
		triggers: "triggers",
		positionTarget: "positionTarget",
		container: "container",
		disablePopover: "disablePopover",
		popoverClass: "popoverClass",
		popoverContext: "popoverContext",
		openDelay: "openDelay",
		closeDelay: "closeDelay"
	},
	outputs: {
		shown: "shown",
		hidden: "hidden"
	},
	exportAs: ["ngbPopover"],
	features: [ɵɵNgOnChangesFeature]
});
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbPopover, [{
		type: Directive,
		args: [{
			selector: "[ngbPopover]",
			exportAs: "ngbPopover"
		}]
	}], null, {
		animation: [{ type: Input }],
		autoClose: [{ type: Input }],
		ngbPopover: [{ type: Input }],
		popoverTitle: [{ type: Input }],
		placement: [{ type: Input }],
		popperOptions: [{ type: Input }],
		triggers: [{ type: Input }],
		positionTarget: [{ type: Input }],
		container: [{ type: Input }],
		disablePopover: [{ type: Input }],
		popoverClass: [{ type: Input }],
		popoverContext: [{ type: Input }],
		openDelay: [{ type: Input }],
		closeDelay: [{ type: Input }],
		shown: [{ type: Output }],
		hidden: [{ type: Output }]
	});
})();
var NgbPopoverModule = class {};
_NgbPopoverModule = NgbPopoverModule;
_NgbPopoverModule.ɵfac = function NgbPopoverModule_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _NgbPopoverModule)();
};
_NgbPopoverModule.ɵmod = /* @__PURE__ */ ɵɵdefineNgModule({
	type: _NgbPopoverModule,
	imports: [NgbPopover],
	exports: [NgbPopover]
});
_NgbPopoverModule.ɵinj = /* @__PURE__ */ ɵɵdefineInjector({});
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbPopoverModule, [{
		type: NgModule,
		args: [{
			imports: [NgbPopover],
			exports: [NgbPopover]
		}]
	}], null, null);
})();
//#endregion
export { NgbPopover, NgbPopoverConfig, NgbPopoverModule };
