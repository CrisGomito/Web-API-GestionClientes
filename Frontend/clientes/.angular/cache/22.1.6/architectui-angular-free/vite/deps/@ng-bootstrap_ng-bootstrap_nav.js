import { $n as Output, C as ViewChildren, Ca as ɵɵconditional, Cs as ɵɵrepeaterTrackByIdentity, Dr as ViewEncapsulation, Ea as ɵɵcontentQuery, En as ElementRef, Fn as Injectable, Hs as ɵɵtemplate, In as Input, Lc as NgZone, Lo as ɵɵinjectAttribute, Ol as ɵɵdefineInjectable, Oo as ɵɵgetInheritedFactory, Sc as EventEmitter, Ss as ɵɵrepeaterCreate, Ta as ɵɵconditionalCreate, Wi as setClassMetadata, Xo as ɵɵloadQuery, Yo as ɵɵlistener, Zo as ɵɵnextContext, _c as DestroyRef, a as ContentChildren, al as forwardRef, an as ChangeDetectionStrategy, bo as ɵɵelementEnd, ca as ɵɵInheritDefinitionFeature, cn as Component, cs as ɵɵpureFunction1, da as ɵɵadvance, gc as DOCUMENT, i as ContentChild, kl as ɵɵdefineInjector, la as ɵɵNgOnChangesFeature, ll as inject, mo as ɵɵdomProperty, nn as Attribute, no as ɵɵdefineDirective, os as ɵɵproperty, qn as NgModule, r as ChangeDetectorRef, ro as ɵɵdefineNgModule, sc as ɵɵviewQuery, to as ɵɵdefineComponent, vr as TemplateRef, vs as ɵɵqueryRefresh, wn as Directive, xa as ɵɵclassProp, xo as ɵɵelementStart, xs as ɵɵrepeater, ya as ɵɵattribute } from "./core-CpxyNpZz.js";
import { Dn as Subject, O as skip, bt as distinctUntilChanged, w as startWith } from "./operators-BOtrYIkv.js";
import { C as reflow, u as isDefined, x as ngbRunTransition } from "./_ngb-ngbootstrap-utilities-NGMx8cil.js";
import { Y as NgTemplateOutlet } from "./common-CILBZQ4R.js";
import { t as takeUntilDestroyed } from "./rxjs-interop-C9YowOKx.js";
import { t as NgbConfig } from "./ng-bootstrap-ng-bootstrap-config-nmDZCbwt.js";
//#region node_modules/@ng-bootstrap/ng-bootstrap/fesm2022/ng-bootstrap-ng-bootstrap-nav.mjs
var _NgbNavConfig;
var _NgbNavContent;
var _NgbNavItemRole;
var _NgbNavItem;
var _NgbNav;
var _NgbNavLinkBase;
var _NgbNavLinkButton;
var _NgbNavLink;
var _NgbNavPane;
var _NgbNavOutlet;
var _NgbNavModule;
/**
* A configuration service for the [`NgbNav`](#/components/nav/api#NgbNav) component.
*
* You can inject this service, typically in your root component, and customize the values of its properties in
* order to provide default values for all the navs used in the application.
*
* @since 5.2.0
*/
var _c0 = (a0) => ({ $implicit: a0 });
function NgbNavOutlet_For_1_Conditional_0_ng_template_1_Template(rf, ctx) {}
function NgbNavOutlet_For_1_Conditional_0_Template(rf, ctx) {
	if (rf & 1) {
		ɵɵelementStart(0, "div", 0);
		ɵɵtemplate(1, NgbNavOutlet_For_1_Conditional_0_ng_template_1_Template, 0, 0, "ng-template", 1);
		ɵɵelementEnd();
	}
	if (rf & 2) {
		const item_r1 = ɵɵnextContext().$implicit;
		const ctx_r1 = ɵɵnextContext();
		ɵɵproperty("item", item_r1)("nav", ctx_r1.nav)("role", ctx_r1.paneRole);
		ɵɵadvance();
		ɵɵproperty("ngTemplateOutlet", (item_r1.contentTpl == null ? null : item_r1.contentTpl.templateRef) || null)("ngTemplateOutletContext", ɵɵpureFunction1(5, _c0, item_r1.active || ctx_r1.isPanelTransitioning(item_r1)));
	}
}
function NgbNavOutlet_For_1_Template(rf, ctx) {
	if (rf & 1) ɵɵconditionalCreate(0, NgbNavOutlet_For_1_Conditional_0_Template, 2, 7, "div", 0);
	if (rf & 2) {
		const item_r1 = ctx.$implicit;
		const ctx_r1 = ɵɵnextContext();
		ɵɵconditional(item_r1.isPanelInDom() || ctx_r1.isPanelTransitioning(item_r1) ? 0 : -1);
	}
}
var NgbNavConfig = class {
	constructor() {
		this._ngbConfig = inject(NgbConfig);
		this.destroyOnHide = true;
		this.orientation = "horizontal";
		this.roles = "tablist";
		this.keyboard = true;
	}
	get animation() {
		var _this$_animation;
		return (_this$_animation = this._animation) !== null && _this$_animation !== void 0 ? _this$_animation : this._ngbConfig.animation;
	}
	set animation(animation) {
		this._animation = animation;
	}
};
_NgbNavConfig = NgbNavConfig;
_NgbNavConfig.ɵfac = function NgbNavConfig_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _NgbNavConfig)();
};
_NgbNavConfig.ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
	token: _NgbNavConfig,
	factory: _NgbNavConfig.ɵfac,
	providedIn: "root"
});
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbNavConfig, [{
		type: Injectable,
		args: [{ providedIn: "root" }]
	}], null, null);
})();
var isValidNavId = (id) => isDefined(id) && id !== "";
var navCounter = 0;
/**
* This directive must be used to wrap content to be displayed in the nav.
*
* @since 5.2.0
*/
var NgbNavContent = class {
	constructor() {
		this.templateRef = inject(TemplateRef);
	}
};
_NgbNavContent = NgbNavContent;
_NgbNavContent.ɵfac = function NgbNavContent_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _NgbNavContent)();
};
_NgbNavContent.ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
	type: _NgbNavContent,
	selectors: [[
		"ng-template",
		"ngbNavContent",
		""
	]]
});
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbNavContent, [{
		type: Directive,
		args: [{ selector: "ng-template[ngbNavContent]" }]
	}], null, null);
})();
/**
* This directive applies a specific role on a non-container based ngbNavItem.
*
* @since 14.1.0
*/
var NgbNavItemRole = class {
	constructor(role) {
		this.role = role;
		this.nav = inject(NgbNav);
	}
};
_NgbNavItemRole = NgbNavItemRole;
_NgbNavItemRole.ɵfac = function NgbNavItemRole_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _NgbNavItemRole)(ɵɵinjectAttribute("role"));
};
_NgbNavItemRole.ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
	type: _NgbNavItemRole,
	selectors: [[
		"",
		"ngbNavItem",
		"",
		5,
		"ng-container"
	]],
	hostVars: 1,
	hostBindings: function NgbNavItemRole_HostBindings(rf, ctx) {
		if (rf & 2) ɵɵattribute("role", ctx.role ? ctx.role : ctx.nav.roles ? "presentation" : void 0);
	}
});
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbNavItemRole, [{
		type: Directive,
		args: [{
			selector: "[ngbNavItem]:not(ng-container)",
			host: { "[attr.role]": `role ? role : nav.roles ? 'presentation' : undefined` }
		}]
	}], () => [{
		type: void 0,
		decorators: [{
			type: Attribute,
			args: ["role"]
		}]
	}], null);
})();
/**
* The directive used to group nav link and related nav content. As well as set nav identifier and some options.
*
* @since 5.2.0
*/
var NgbNavItem = class {
	constructor() {
		this._nav = inject(NgbNav);
		this._nativeElement = inject(ElementRef).nativeElement;
		/**
		* If `true`, the current nav item is disabled and can't be toggled by user.
		*
		* Nevertheless disabled nav can be selected programmatically via the `.select()` method and the `[activeId]` binding.
		*/
		this.disabled = false;
		/**
		* An event emitted when the fade in transition is finished on the related nav content
		*
		* @since 8.0.0
		*/
		this.shown = new EventEmitter();
		/**
		* An event emitted when the fade out transition is finished on the related nav content
		*
		* @since 8.0.0
		*/
		this.hidden = new EventEmitter();
	}
	ngOnInit() {
		if (!isDefined(this.domId)) this.domId = `ngb-nav-${navCounter++}`;
	}
	get active() {
		return this._nav.activeId === this.id;
	}
	get id() {
		return isValidNavId(this._id) ? this._id : this.domId;
	}
	get panelDomId() {
		return `${this.domId}-panel`;
	}
	isPanelInDom() {
		return (isDefined(this.destroyOnHide) ? !this.destroyOnHide : !this._nav.destroyOnHide) || this.active;
	}
	/**
	* @internal
	*/
	isNgContainer() {
		return this._nativeElement.nodeType === Node.COMMENT_NODE;
	}
};
_NgbNavItem = NgbNavItem;
_NgbNavItem.ɵfac = function NgbNavItem_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _NgbNavItem)();
};
_NgbNavItem.ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
	type: _NgbNavItem,
	selectors: [[
		"",
		"ngbNavItem",
		""
	]],
	contentQueries: function NgbNavItem_ContentQueries(rf, ctx, dirIndex) {
		if (rf & 1) ɵɵcontentQuery(dirIndex, NgbNavContent, 4);
		if (rf & 2) {
			let _t;
			ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.contentTpl = _t.first);
		}
	},
	hostAttrs: [1, "nav-item"],
	inputs: {
		destroyOnHide: "destroyOnHide",
		disabled: "disabled",
		domId: "domId",
		_id: [
			0,
			"ngbNavItem",
			"_id"
		]
	},
	outputs: {
		shown: "shown",
		hidden: "hidden"
	},
	exportAs: ["ngbNavItem"]
});
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbNavItem, [{
		type: Directive,
		args: [{
			selector: "[ngbNavItem]",
			exportAs: "ngbNavItem",
			host: { class: "nav-item" }
		}]
	}], null, {
		destroyOnHide: [{ type: Input }],
		disabled: [{ type: Input }],
		domId: [{ type: Input }],
		_id: [{
			type: Input,
			args: ["ngbNavItem"]
		}],
		shown: [{ type: Output }],
		hidden: [{ type: Output }],
		contentTpl: [{
			type: ContentChild,
			args: [NgbNavContent, { descendants: false }]
		}]
	});
})();
/**
* A nav directive that helps with implementing tabbed navigation components.
*
* @since 5.2.0
*/
var NgbNav = class {
	constructor(role) {
		this.role = role;
		this._config = inject(NgbNavConfig);
		this._cd = inject(ChangeDetectorRef);
		this._document = inject(DOCUMENT);
		this._nativeElement = inject(ElementRef).nativeElement;
		this.destroyRef = inject(DestroyRef);
		this._navigatingWithKeyboard = false;
		/**
		* The event emitted after the active nav changes
		* The payload of the event is the newly active nav id
		*
		* If you want to prevent nav change, you should use `(navChange)` event
		*/
		this.activeIdChange = new EventEmitter();
		/**
		* If `true`, nav change will be animated.
		*
		* @since 8.0.0
		*/
		this.animation = this._config.animation;
		/**
		* If `true`, non-active nav content will be removed from DOM
		* Otherwise it will just be hidden
		*/
		this.destroyOnHide = this._config.destroyOnHide;
		/**
		* The orientation of navs.
		*
		* Using `vertical` will also add the `aria-orientation` attribute
		*/
		this.orientation = this._config.orientation;
		/**
		* Role attribute generating strategy:
		* - `false` - no role attributes will be generated
		* - `'tablist'` - 'tablist', 'tab' and 'tabpanel' will be generated (default)
		*/
		this.roles = this._config.roles;
		/**
		* Keyboard support for nav focus/selection using arrow keys.
		*
		* * `true` - navs will be focused using keyboard arrow keys
		* * `false` - no keyboard support
		* * `'changeWithArrows'` -  nav will be selected using keyboard arrow keys
		*
		* See the [list of available keyboard shortcuts](#/components/nav/overview#keyboard-shortcuts).
		*
		* @since 6.1.0
		*/
		this.keyboard = this._config.keyboard;
		/**
		* An event emitted when the fade in transition is finished for one of the items.
		*
		* Payload of the event is the nav id that was just shown.
		*
		* @since 8.0.0
		*/
		this.shown = new EventEmitter();
		/**
		* An event emitted when the fade out transition is finished for one of the items.
		*
		* Payload of the event is the nav id that was just hidden.
		*
		* @since 8.0.0
		*/
		this.hidden = new EventEmitter();
		this.navItemChange$ = new Subject();
		/**
		* The nav change event emitted right before the nav change happens on user click.
		*
		* This event won't be emitted if nav is changed programmatically via `[activeId]` or `.select()`.
		*
		* See [`NgbNavChangeEvent`](#/components/nav/api#NgbNavChangeEvent) for payload details.
		*/
		this.navChange = new EventEmitter();
	}
	click(item) {
		if (!item.disabled) this._updateActiveId(item.id);
	}
	onFocusout({ relatedTarget }) {
		if (!this._nativeElement.contains(relatedTarget)) this._navigatingWithKeyboard = false;
	}
	onKeyDown(event) {
		if (this.roles !== "tablist" || !this.keyboard) return;
		const enabledLinks = this.links.filter((link) => !link.navItem.disabled);
		const { length } = enabledLinks;
		let position = -1;
		enabledLinks.forEach((link, index) => {
			if (link.nativeElement === this._document.activeElement) position = index;
		});
		if (length) {
			switch (event.key) {
				case "ArrowUp":
				case "ArrowLeft":
					position = (position - 1 + length) % length;
					break;
				case "ArrowRight":
				case "ArrowDown":
					position = (position + 1) % length;
					break;
				case "Home":
					position = 0;
					break;
				case "End":
					position = length - 1;
					break;
			}
			if (this.keyboard === "changeWithArrows") this.select(enabledLinks[position].navItem.id);
			enabledLinks[position].nativeElement.focus();
			this._navigatingWithKeyboard = true;
			event.preventDefault();
		}
	}
	/**
	* Selects the nav with the given id and shows its associated pane.
	* Any other nav that was previously selected becomes unselected and its associated pane is hidden.
	*/
	select(id) {
		this._updateActiveId(id, false);
	}
	ngAfterContentInit() {
		if (!isDefined(this.activeId)) {
			const nextId = this.items.first ? this.items.first.id : null;
			if (isValidNavId(nextId)) {
				this._updateActiveId(nextId, false);
				this._cd.detectChanges();
			}
		}
		this.items.changes.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => this._notifyItemChanged(this.activeId));
	}
	ngOnChanges({ activeId }) {
		if (activeId && !activeId.firstChange) this._notifyItemChanged(activeId.currentValue);
	}
	_updateActiveId(nextId, emitNavChange = true) {
		if (this.activeId !== nextId) {
			let defaultPrevented = false;
			if (emitNavChange) this.navChange.emit({
				activeId: this.activeId,
				nextId,
				preventDefault: () => {
					defaultPrevented = true;
				}
			});
			if (!defaultPrevented) {
				this.activeId = nextId;
				this.activeIdChange.emit(nextId);
				this._notifyItemChanged(nextId);
			}
		}
	}
	_notifyItemChanged(nextItemId) {
		this.navItemChange$.next(this._getItemById(nextItemId));
	}
	_getItemById(itemId) {
		return this.items && this.items.find((item) => item.id === itemId) || null;
	}
};
_NgbNav = NgbNav;
_NgbNav.ɵfac = function NgbNav_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _NgbNav)(ɵɵinjectAttribute("role"));
};
_NgbNav.ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
	type: _NgbNav,
	selectors: [[
		"",
		"ngbNav",
		""
	]],
	contentQueries: function NgbNav_ContentQueries(rf, ctx, dirIndex) {
		if (rf & 1) ɵɵcontentQuery(dirIndex, NgbNavItem, 4)(dirIndex, NgbNavLinkBase, 5);
		if (rf & 2) {
			let _t;
			ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.items = _t);
			ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.links = _t);
		}
	},
	hostAttrs: [1, "nav"],
	hostVars: 4,
	hostBindings: function NgbNav_HostBindings(rf, ctx) {
		if (rf & 1) ɵɵlistener("keydown.arrowLeft", function NgbNav_keydown_arrowLeft_HostBindingHandler($event) {
			return ctx.onKeyDown($event);
		})("keydown.arrowRight", function NgbNav_keydown_arrowRight_HostBindingHandler($event) {
			return ctx.onKeyDown($event);
		})("keydown.arrowDown", function NgbNav_keydown_arrowDown_HostBindingHandler($event) {
			return ctx.onKeyDown($event);
		})("keydown.arrowUp", function NgbNav_keydown_arrowUp_HostBindingHandler($event) {
			return ctx.onKeyDown($event);
		})("keydown.Home", function NgbNav_keydown_Home_HostBindingHandler($event) {
			return ctx.onKeyDown($event);
		})("keydown.End", function NgbNav_keydown_End_HostBindingHandler($event) {
			return ctx.onKeyDown($event);
		})("focusout", function NgbNav_focusout_HostBindingHandler($event) {
			return ctx.onFocusout($event);
		});
		if (rf & 2) {
			ɵɵattribute("aria-orientation", ctx.orientation === "vertical" && ctx.roles === "tablist" ? "vertical" : void 0)("role", ctx.role ? ctx.role : ctx.roles ? "tablist" : void 0);
			ɵɵclassProp("flex-column", ctx.orientation === "vertical");
		}
	},
	inputs: {
		activeId: "activeId",
		animation: "animation",
		destroyOnHide: "destroyOnHide",
		orientation: "orientation",
		roles: "roles",
		keyboard: "keyboard"
	},
	outputs: {
		activeIdChange: "activeIdChange",
		shown: "shown",
		hidden: "hidden",
		navChange: "navChange"
	},
	exportAs: ["ngbNav"],
	features: [ɵɵNgOnChangesFeature]
});
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbNav, [{
		type: Directive,
		args: [{
			selector: "[ngbNav]",
			exportAs: "ngbNav",
			host: {
				class: "nav",
				"[class.flex-column]": `orientation === 'vertical'`,
				"[attr.aria-orientation]": `orientation === 'vertical' && roles === 'tablist' ? 'vertical' : undefined`,
				"[attr.role]": `role ? role : roles ? 'tablist' : undefined`,
				"(keydown.arrowLeft)": "onKeyDown($any($event))",
				"(keydown.arrowRight)": "onKeyDown($any($event))",
				"(keydown.arrowDown)": "onKeyDown($any($event))",
				"(keydown.arrowUp)": "onKeyDown($any($event))",
				"(keydown.Home)": "onKeyDown($any($event))",
				"(keydown.End)": "onKeyDown($any($event))",
				"(focusout)": "onFocusout($any($event))"
			}
		}]
	}], () => [{
		type: void 0,
		decorators: [{
			type: Attribute,
			args: ["role"]
		}]
	}], {
		activeId: [{ type: Input }],
		activeIdChange: [{ type: Output }],
		animation: [{ type: Input }],
		destroyOnHide: [{ type: Input }],
		orientation: [{ type: Input }],
		roles: [{ type: Input }],
		keyboard: [{ type: Input }],
		shown: [{ type: Output }],
		hidden: [{ type: Output }],
		items: [{
			type: ContentChildren,
			args: [NgbNavItem]
		}],
		links: [{
			type: ContentChildren,
			args: [forwardRef(() => NgbNavLinkBase), { descendants: true }]
		}],
		navChange: [{ type: Output }]
	});
})();
var NgbNavLinkBase = class {
	constructor(role) {
		this.role = role;
		this.navItem = inject(NgbNavItem);
		this.nav = inject(NgbNav);
		this.nativeElement = inject(ElementRef).nativeElement;
	}
	get tabindex() {
		if (this.nav.keyboard === false) return this.navItem.disabled ? -1 : void 0;
		if (this.nav._navigatingWithKeyboard) return -1;
		return this.navItem.disabled || !this.navItem.active ? -1 : void 0;
	}
};
_NgbNavLinkBase = NgbNavLinkBase;
_NgbNavLinkBase.ɵfac = function NgbNavLinkBase_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _NgbNavLinkBase)(ɵɵinjectAttribute("role"));
};
_NgbNavLinkBase.ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
	type: _NgbNavLinkBase,
	selectors: [[
		"",
		"ngbNavLink",
		""
	]],
	hostAttrs: [1, "nav-link"],
	hostVars: 12,
	hostBindings: function NgbNavLinkBase_HostBindings(rf, ctx) {
		if (rf & 2) {
			ɵɵdomProperty("id", ctx.navItem.domId);
			ɵɵattribute("role", ctx.role ? ctx.role : ctx.nav.roles ? "tab" : void 0)("tabindex", ctx.tabindex)("aria-controls", ctx.navItem.isPanelInDom() ? ctx.navItem.panelDomId : null)("aria-selected", ctx.navItem.active)("aria-disabled", ctx.navItem.disabled);
			ɵɵclassProp("nav-item", ctx.navItem.isNgContainer())("active", ctx.navItem.active)("disabled", ctx.navItem.disabled);
		}
	}
});
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbNavLinkBase, [{
		type: Directive,
		args: [{
			selector: "[ngbNavLink]",
			host: {
				"[id]": "navItem.domId",
				class: "nav-link",
				"[class.nav-item]": "navItem.isNgContainer()",
				"[attr.role]": `role ? role : nav.roles ? 'tab' : undefined`,
				"[class.active]": "navItem.active",
				"[class.disabled]": "navItem.disabled",
				"[attr.tabindex]": "tabindex",
				"[attr.aria-controls]": "navItem.isPanelInDom() ? navItem.panelDomId : null",
				"[attr.aria-selected]": "navItem.active",
				"[attr.aria-disabled]": "navItem.disabled"
			}
		}]
	}], () => [{
		type: void 0,
		decorators: [{
			type: Attribute,
			args: ["role"]
		}]
	}], null);
})();
/**
* A directive to mark the nav link when used on a button element.
*/
var NgbNavLinkButton = class extends NgbNavLinkBase {};
_NgbNavLinkButton = NgbNavLinkButton;
_NgbNavLinkButton.ɵfac = /* @__PURE__ */ (() => {
	let ɵNgbNavLinkButton_BaseFactory;
	return function NgbNavLinkButton_Factory(__ngFactoryType__) {
		return (ɵNgbNavLinkButton_BaseFactory || (ɵNgbNavLinkButton_BaseFactory = ɵɵgetInheritedFactory(_NgbNavLinkButton)))(__ngFactoryType__ || _NgbNavLinkButton);
	};
})();
_NgbNavLinkButton.ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
	type: _NgbNavLinkButton,
	selectors: [[
		"button",
		"ngbNavLink",
		""
	]],
	hostAttrs: ["type", "button"],
	hostVars: 1,
	hostBindings: function NgbNavLinkButton_HostBindings(rf, ctx) {
		if (rf & 1) ɵɵlistener("click", function NgbNavLinkButton_click_HostBindingHandler() {
			return ctx.nav.click(ctx.navItem);
		});
		if (rf & 2) ɵɵdomProperty("disabled", ctx.navItem.disabled);
	},
	features: [ɵɵInheritDefinitionFeature]
});
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbNavLinkButton, [{
		type: Directive,
		args: [{
			selector: "button[ngbNavLink]",
			host: {
				type: "button",
				"[disabled]": "navItem.disabled",
				"(click)": "nav.click(navItem)"
			}
		}]
	}], null, null);
})();
/**
* A directive to mark the nav link when used on a link element.
*
* @since 5.2.0
*/
var NgbNavLink = class extends NgbNavLinkBase {};
_NgbNavLink = NgbNavLink;
_NgbNavLink.ɵfac = /* @__PURE__ */ (() => {
	let ɵNgbNavLink_BaseFactory;
	return function NgbNavLink_Factory(__ngFactoryType__) {
		return (ɵNgbNavLink_BaseFactory || (ɵNgbNavLink_BaseFactory = ɵɵgetInheritedFactory(_NgbNavLink)))(__ngFactoryType__ || _NgbNavLink);
	};
})();
_NgbNavLink.ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
	type: _NgbNavLink,
	selectors: [[
		"a",
		"ngbNavLink",
		""
	]],
	hostAttrs: ["href", ""],
	hostBindings: function NgbNavLink_HostBindings(rf, ctx) {
		if (rf & 1) ɵɵlistener("click", function NgbNavLink_click_HostBindingHandler($event) {
			ctx.nav.click(ctx.navItem);
			return $event.preventDefault();
		});
	},
	features: [ɵɵInheritDefinitionFeature]
});
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbNavLink, [{
		type: Directive,
		args: [{
			selector: "a[ngbNavLink]",
			host: {
				href: "",
				"(click)": "nav.click(navItem); $event.preventDefault()"
			}
		}]
	}], null, null);
})();
var ngbNavFadeOutTransition = ({ classList }) => {
	classList.remove("show");
	return () => classList.remove("active");
};
var ngbNavFadeInTransition = (element, animation) => {
	if (animation) reflow(element);
	element.classList.add("show");
};
var NgbNavPane = class {
	constructor() {
		this.nativeElement = inject(ElementRef).nativeElement;
	}
};
_NgbNavPane = NgbNavPane;
_NgbNavPane.ɵfac = function NgbNavPane_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _NgbNavPane)();
};
_NgbNavPane.ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
	type: _NgbNavPane,
	selectors: [[
		"",
		"ngbNavPane",
		""
	]],
	hostAttrs: [1, "tab-pane"],
	hostVars: 5,
	hostBindings: function NgbNavPane_HostBindings(rf, ctx) {
		if (rf & 2) {
			ɵɵdomProperty("id", ctx.item.panelDomId);
			ɵɵattribute("role", ctx.role ? ctx.role : ctx.nav.roles ? "tabpanel" : void 0)("aria-labelledby", ctx.item.domId);
			ɵɵclassProp("fade", ctx.nav.animation);
		}
	},
	inputs: {
		item: "item",
		nav: "nav",
		role: "role"
	}
});
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbNavPane, [{
		type: Directive,
		args: [{
			selector: "[ngbNavPane]",
			host: {
				"[id]": "item.panelDomId",
				class: "tab-pane",
				"[class.fade]": "nav.animation",
				"[attr.role]": "role ? role : nav.roles ? \"tabpanel\" : undefined",
				"[attr.aria-labelledby]": "item.domId"
			}
		}]
	}], null, {
		item: [{ type: Input }],
		nav: [{ type: Input }],
		role: [{ type: Input }]
	});
})();
/**
* The outlet where currently active nav content will be displayed.
*
* @since 5.2.0
*/
var NgbNavOutlet = class {
	constructor() {
		this._cd = inject(ChangeDetectorRef);
		this._ngZone = inject(NgZone);
		this._activePane = null;
	}
	isPanelTransitioning(item) {
		var _this$_activePane;
		return ((_this$_activePane = this._activePane) === null || _this$_activePane === void 0 ? void 0 : _this$_activePane.item) === item;
	}
	ngAfterViewInit() {
		var _this$_activePane2;
		this._updateActivePane();
		this.nav.navItemChange$.pipe(takeUntilDestroyed(this.nav.destroyRef), startWith(((_this$_activePane2 = this._activePane) === null || _this$_activePane2 === void 0 ? void 0 : _this$_activePane2.item) || null), distinctUntilChanged(), skip(1)).subscribe((nextItem) => {
			const options = {
				animation: this.nav.animation,
				runningTransition: "stop"
			};
			this._cd.detectChanges();
			if (this._activePane) ngbRunTransition(this._ngZone, this._activePane.nativeElement, ngbNavFadeOutTransition, options).subscribe(() => {
				var _this$_activePane3;
				const activeItem = (_this$_activePane3 = this._activePane) === null || _this$_activePane3 === void 0 ? void 0 : _this$_activePane3.item;
				this._activePane = this._getPaneForItem(nextItem);
				this._cd.markForCheck();
				if (this._activePane) {
					this._activePane.nativeElement.classList.add("active");
					ngbRunTransition(this._ngZone, this._activePane.nativeElement, ngbNavFadeInTransition, options).subscribe(() => {
						if (nextItem) {
							nextItem.shown.emit();
							this.nav.shown.emit(nextItem.id);
						}
					});
				}
				if (activeItem) {
					activeItem.hidden.emit();
					this.nav.hidden.emit(activeItem.id);
				}
			});
			else this._updateActivePane();
		});
	}
	_updateActivePane() {
		var _this$_activePane4;
		this._activePane = this._getActivePane();
		(_this$_activePane4 = this._activePane) === null || _this$_activePane4 === void 0 || _this$_activePane4.nativeElement.classList.add("show", "active");
	}
	_getPaneForItem(item) {
		return this._panes && this._panes.find((pane) => pane.item === item) || null;
	}
	_getActivePane() {
		return this._panes && this._panes.find((pane) => pane.item.active) || null;
	}
};
_NgbNavOutlet = NgbNavOutlet;
_NgbNavOutlet.ɵfac = function NgbNavOutlet_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _NgbNavOutlet)();
};
_NgbNavOutlet.ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
	type: _NgbNavOutlet,
	selectors: [[
		"",
		"ngbNavOutlet",
		""
	]],
	viewQuery: function NgbNavOutlet_Query(rf, ctx) {
		if (rf & 1) ɵɵviewQuery(NgbNavPane, 5);
		if (rf & 2) {
			let _t;
			ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._panes = _t);
		}
	},
	hostAttrs: [1, "tab-content"],
	inputs: {
		paneRole: "paneRole",
		nav: [
			0,
			"ngbNavOutlet",
			"nav"
		]
	},
	decls: 2,
	vars: 0,
	consts: [[
		"ngbNavPane",
		"",
		3,
		"item",
		"nav",
		"role"
	], [
		3,
		"ngTemplateOutlet",
		"ngTemplateOutletContext"
	]],
	template: function NgbNavOutlet_Template(rf, ctx) {
		if (rf & 1) ɵɵrepeaterCreate(0, NgbNavOutlet_For_1_Template, 1, 1, null, null, ɵɵrepeaterTrackByIdentity);
		if (rf & 2) ɵɵrepeater(ctx.nav.items);
	},
	dependencies: [NgbNavPane, NgTemplateOutlet],
	encapsulation: 2
});
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbNavOutlet, [{
		type: Component,
		args: [{
			selector: "[ngbNavOutlet]",
			imports: [NgbNavPane, NgTemplateOutlet],
			host: { class: "tab-content" },
			encapsulation: ViewEncapsulation.None,
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: `
		@for (item of nav.items; track item) {
			@if (item.isPanelInDom() || isPanelTransitioning(item)) {
				<div ngbNavPane [item]="item" [nav]="nav" [role]="paneRole">
					<ng-template
						[ngTemplateOutlet]="item.contentTpl?.templateRef || null"
						[ngTemplateOutletContext]="{ $implicit: item.active || isPanelTransitioning(item) }"
					/>
				</div>
			}
		}
	`
		}]
	}], null, {
		_panes: [{
			type: ViewChildren,
			args: [NgbNavPane]
		}],
		paneRole: [{ type: Input }],
		nav: [{
			type: Input,
			args: ["ngbNavOutlet"]
		}]
	});
})();
var NGB_NAV_DIRECTIVES = [
	NgbNavContent,
	NgbNav,
	NgbNavItem,
	NgbNavItemRole,
	NgbNavLink,
	NgbNavLinkButton,
	NgbNavLinkBase,
	NgbNavOutlet,
	NgbNavPane
];
var NgbNavModule = class {};
_NgbNavModule = NgbNavModule;
_NgbNavModule.ɵfac = function NgbNavModule_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _NgbNavModule)();
};
_NgbNavModule.ɵmod = /* @__PURE__ */ ɵɵdefineNgModule({
	type: _NgbNavModule,
	imports: [
		NgbNavContent,
		NgbNav,
		NgbNavItem,
		NgbNavItemRole,
		NgbNavLink,
		NgbNavLinkButton,
		NgbNavLinkBase,
		NgbNavOutlet,
		NgbNavPane
	],
	exports: [
		NgbNavContent,
		NgbNav,
		NgbNavItem,
		NgbNavItemRole,
		NgbNavLink,
		NgbNavLinkButton,
		NgbNavLinkBase,
		NgbNavOutlet,
		NgbNavPane
	]
});
_NgbNavModule.ɵinj = /* @__PURE__ */ ɵɵdefineInjector({});
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbNavModule, [{
		type: NgModule,
		args: [{
			imports: NGB_NAV_DIRECTIVES,
			exports: NGB_NAV_DIRECTIVES
		}]
	}], null, null);
})();
//#endregion
export { NgbNav, NgbNavConfig, NgbNavContent, NgbNavItem, NgbNavItemRole, NgbNavLink, NgbNavLinkBase, NgbNavLinkButton, NgbNavModule, NgbNavOutlet, NgbNavPane };
