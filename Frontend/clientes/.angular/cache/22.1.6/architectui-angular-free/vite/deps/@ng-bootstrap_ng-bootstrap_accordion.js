import { $n as Output, Ea as ɵɵcontentQuery, En as ElementRef, Er as ViewContainerRef, Fn as Injectable, In as Input, Ol as ɵɵdefineInjectable, S as ViewChild, Sc as EventEmitter, Wi as setClassMetadata, Xo as ɵɵloadQuery, Yo as ɵɵlistener, _c as DestroyRef, a as ContentChildren, as as ɵɵprojectionDef, cn as Component, co as ɵɵdomElementContainer, i as ContentChild, is as ɵɵprojection, kl as ɵɵdefineInjector, ll as inject, mo as ɵɵdomProperty, no as ɵɵdefineDirective, qn as NgModule, r as ChangeDetectorRef, ro as ɵɵdefineNgModule, sa as ɵɵHostDirectivesFeature, sc as ɵɵviewQuery, to as ɵɵdefineComponent, vr as TemplateRef, vs as ɵɵqueryRefresh, wn as Directive, xa as ɵɵclassProp, ya as ɵɵattribute } from "./core-CpxyNpZz.js";
import { m as isString } from "./_ngb-ngbootstrap-utilities-NGMx8cil.js";
import { t as takeUntilDestroyed } from "./rxjs-interop-C9YowOKx.js";
import { t as NgbConfig } from "./ng-bootstrap-ng-bootstrap-config-nmDZCbwt.js";
import { NgbCollapse } from "./@ng-bootstrap_ng-bootstrap_collapse.js";
//#region node_modules/@ng-bootstrap/ng-bootstrap/fesm2022/ng-bootstrap-ng-bootstrap-accordion.mjs
var _NgbAccordionConfig;
var _NgbAccordionBody;
var _NgbAccordionCollapse;
var _NgbAccordionToggle;
var _NgbAccordionButton;
var _NgbAccordionHeader;
var _NgbAccordionItem;
var _NgbAccordionDirective;
var _NgbAccordionModule;
/**
* A configuration service for the [`NgbAccordionDirective`](#/components/accordion/api#NgbAccordionDirective).
*
* You can inject this service, typically in your root component, and customize its properties
* to provide default values for all accordions used in the application.
*/
var _c0 = ["container"];
var _c1 = ["*"];
var NgbAccordionConfig = class {
	constructor() {
		this._ngbConfig = inject(NgbConfig);
		this.closeOthers = false;
		this.destroyOnHide = true;
	}
	get animation() {
		var _this$_animation;
		return (_this$_animation = this._animation) !== null && _this$_animation !== void 0 ? _this$_animation : this._ngbConfig.animation;
	}
	set animation(animation) {
		this._animation = animation;
	}
};
_NgbAccordionConfig = NgbAccordionConfig;
_NgbAccordionConfig.ɵfac = function NgbAccordionConfig_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _NgbAccordionConfig)();
};
_NgbAccordionConfig.ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
	token: _NgbAccordionConfig,
	factory: _NgbAccordionConfig.ɵfac,
	providedIn: "root"
});
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbAccordionConfig, [{
		type: Injectable,
		args: [{ providedIn: "root" }]
	}], null, null);
})();
var nextId = 0;
/**
* A directive that wraps the content of an accordion item's collapsible body.
*
* The actual content is provided in a child `ng-template` element.
* Depending on the state of the accordion, the template will be either inserted or removed from the DOM.
*
* @since 14.1.0
*/
var NgbAccordionBody = class {
	constructor() {
		this._item = inject(NgbAccordionItem);
		this._viewRef = null;
		/**
		* the `ElementRef` of the component
		*
		* @since 18.0.0
		*/
		this.elementRef = inject(ElementRef);
	}
	ngAfterContentChecked() {
		if (this._bodyTpl) if (this._item._shouldBeInDOM) this._createViewIfNotExists();
		else this._destroyViewIfExists();
	}
	ngOnDestroy() {
		this._destroyViewIfExists();
	}
	_destroyViewIfExists() {
		var _this$_viewRef;
		(_this$_viewRef = this._viewRef) === null || _this$_viewRef === void 0 || _this$_viewRef.destroy();
		this._viewRef = null;
	}
	_createViewIfNotExists() {
		if (!this._viewRef) {
			this._viewRef = this._vcr.createEmbeddedView(this._bodyTpl);
			this._viewRef.detectChanges();
		}
	}
};
_NgbAccordionBody = NgbAccordionBody;
_NgbAccordionBody.ɵfac = function NgbAccordionBody_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _NgbAccordionBody)();
};
_NgbAccordionBody.ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
	type: _NgbAccordionBody,
	selectors: [[
		"",
		"ngbAccordionBody",
		""
	]],
	contentQueries: function NgbAccordionBody_ContentQueries(rf, ctx, dirIndex) {
		if (rf & 1) ɵɵcontentQuery(dirIndex, TemplateRef, 7);
		if (rf & 2) {
			let _t;
			ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._bodyTpl = _t.first);
		}
	},
	viewQuery: function NgbAccordionBody_Query(rf, ctx) {
		if (rf & 1) ɵɵviewQuery(_c0, 7, ViewContainerRef);
		if (rf & 2) {
			let _t;
			ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._vcr = _t.first);
		}
	},
	hostAttrs: [1, "accordion-body"],
	ngContentSelectors: _c1,
	decls: 3,
	vars: 0,
	consts: [["container", ""]],
	template: function NgbAccordionBody_Template(rf, ctx) {
		if (rf & 1) {
			ɵɵprojectionDef();
			ɵɵdomElementContainer(0, null, 0);
			ɵɵprojection(2);
		}
	},
	encapsulation: 2,
	changeDetection: 1
});
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbAccordionBody, [{
		type: Component,
		args: [{
			selector: "[ngbAccordionBody]",
			template: `
		<ng-container #container />
		<ng-content />
	`,
			host: { class: "accordion-body" }
		}]
	}], null, {
		_vcr: [{
			type: ViewChild,
			args: ["container", {
				read: ViewContainerRef,
				static: true
			}]
		}],
		_bodyTpl: [{
			type: ContentChild,
			args: [TemplateRef, { static: true }]
		}]
	});
})();
/**
* A directive that wraps the collapsible item's content of the accordion.
*
* Internally it reuses the [`NgbCollapse` directive](#/components/collapse)
*
* @since 14.1.0
*/
var NgbAccordionCollapse = class {
	constructor() {
		this.item = inject(NgbAccordionItem);
		this.ngbCollapse = inject(NgbCollapse);
	}
};
_NgbAccordionCollapse = NgbAccordionCollapse;
_NgbAccordionCollapse.ɵfac = function NgbAccordionCollapse_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _NgbAccordionCollapse)();
};
_NgbAccordionCollapse.ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
	type: _NgbAccordionCollapse,
	selectors: [[
		"",
		"ngbAccordionCollapse",
		""
	]],
	hostAttrs: [
		"role",
		"region",
		1,
		"accordion-collapse"
	],
	hostVars: 2,
	hostBindings: function NgbAccordionCollapse_HostBindings(rf, ctx) {
		if (rf & 2) {
			ɵɵdomProperty("id", ctx.item.collapseId);
			ɵɵattribute("aria-labelledby", ctx.item.toggleId);
		}
	},
	exportAs: ["ngbAccordionCollapse"],
	features: [ɵɵHostDirectivesFeature([NgbCollapse])]
});
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbAccordionCollapse, [{
		type: Directive,
		args: [{
			exportAs: "ngbAccordionCollapse",
			selector: "[ngbAccordionCollapse]",
			host: {
				role: "region",
				class: "accordion-collapse",
				"[id]": "item.collapseId",
				"[attr.aria-labelledby]": "item.toggleId"
			},
			hostDirectives: [NgbCollapse]
		}]
	}], null, null);
})();
/**
* A directive to put on a toggling element inside the accordion item's header.
* It will register click handlers that toggle the associated panel and will handle accessibility attributes.
*
* This directive is used internally by the [`NgbAccordionButton` directive](#/components/accordion/api#NgbAccordionButton).
*
* @since 14.1.0
*/
var NgbAccordionToggle = class {
	constructor() {
		this.item = inject(NgbAccordionItem);
		this.accordion = inject(NgbAccordionDirective);
	}
};
_NgbAccordionToggle = NgbAccordionToggle;
_NgbAccordionToggle.ɵfac = function NgbAccordionToggle_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _NgbAccordionToggle)();
};
_NgbAccordionToggle.ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
	type: _NgbAccordionToggle,
	selectors: [[
		"",
		"ngbAccordionToggle",
		""
	]],
	hostVars: 5,
	hostBindings: function NgbAccordionToggle_HostBindings(rf, ctx) {
		if (rf & 1) ɵɵlistener("click", function NgbAccordionToggle_click_HostBindingHandler() {
			return !ctx.item.disabled && ctx.accordion.toggle(ctx.item.id);
		});
		if (rf & 2) {
			ɵɵdomProperty("id", ctx.item.toggleId);
			ɵɵattribute("aria-controls", ctx.item.collapseId)("aria-expanded", !ctx.item.collapsed);
			ɵɵclassProp("collapsed", ctx.item.collapsed);
		}
	}
});
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbAccordionToggle, [{
		type: Directive,
		args: [{
			selector: "[ngbAccordionToggle]",
			host: {
				"[id]": "item.toggleId",
				"[class.collapsed]": "item.collapsed",
				"[attr.aria-controls]": "item.collapseId",
				"[attr.aria-expanded]": "!item.collapsed",
				"(click)": "!item.disabled && accordion.toggle(item.id)"
			}
		}]
	}], null, null);
})();
/**
* A directive to put on a button element inside an accordion item's header.
*
* If you want a custom markup for the header, you can also use the [`NgbAccordionToggle` directive](#/components/accordion/api#NgbAccordionToggle).
*
* @since 14.1.0
*/
var NgbAccordionButton = class {
	constructor() {
		this.item = inject(NgbAccordionItem);
	}
};
_NgbAccordionButton = NgbAccordionButton;
_NgbAccordionButton.ɵfac = function NgbAccordionButton_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _NgbAccordionButton)();
};
_NgbAccordionButton.ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
	type: _NgbAccordionButton,
	selectors: [[
		"button",
		"ngbAccordionButton",
		""
	]],
	hostAttrs: [
		"type",
		"button",
		1,
		"accordion-button"
	],
	hostVars: 1,
	hostBindings: function NgbAccordionButton_HostBindings(rf, ctx) {
		if (rf & 2) ɵɵdomProperty("disabled", ctx.item.disabled);
	},
	features: [ɵɵHostDirectivesFeature([NgbAccordionToggle])]
});
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbAccordionButton, [{
		type: Directive,
		args: [{
			selector: "button[ngbAccordionButton]",
			host: {
				"[disabled]": "item.disabled",
				class: "accordion-button",
				type: "button"
			},
			hostDirectives: [NgbAccordionToggle]
		}]
	}], null, null);
})();
/**
* A directive that wraps an accordion item's header.
*
* @since 14.1.0
*/
var NgbAccordionHeader = class {
	constructor() {
		this.item = inject(NgbAccordionItem);
	}
};
_NgbAccordionHeader = NgbAccordionHeader;
_NgbAccordionHeader.ɵfac = function NgbAccordionHeader_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _NgbAccordionHeader)();
};
_NgbAccordionHeader.ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
	type: _NgbAccordionHeader,
	selectors: [[
		"",
		"ngbAccordionHeader",
		""
	]],
	hostAttrs: [
		"role",
		"heading",
		1,
		"accordion-header"
	],
	hostVars: 2,
	hostBindings: function NgbAccordionHeader_HostBindings(rf, ctx) {
		if (rf & 2) ɵɵclassProp("collapsed", ctx.item.collapsed);
	}
});
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbAccordionHeader, [{
		type: Directive,
		args: [{
			selector: "[ngbAccordionHeader]",
			host: {
				role: "heading",
				class: "accordion-header",
				"[class.collapsed]": "item.collapsed"
			}
		}]
	}], null, null);
})();
/**
* A directive that wraps an accordion item: a toggleable header + body that collapses.
*
* You can get hold of the `NgbAccordionItem` instance in the template with `#item="ngbAccordionItem"`.
* It allows to check if the item is collapsed or not, toggle the collapse state, etc.
*
* Every accordion item has a string ID that is automatically generated in the `ngb-accordion-item-XX` format, unless provided explicitly.
*
* @since 14.1.0
*/
var NgbAccordionItem = class {
	constructor() {
		this._accordion = inject(NgbAccordionDirective);
		this._cd = inject(ChangeDetectorRef);
		this._destroyRef = inject(DestroyRef);
		this._collapsed = true;
		this._id = `ngb-accordion-item-${nextId++}`;
		this._collapseAnimationRunning = false;
		/**
		* If `true`, the accordion item will be disabled.
		* It won't react to user's clicks, but still will be toggelable programmatically.
		*/
		this.disabled = false;
		/**
		* Event emitted before the expanding animation starts. It has no payload.
		*
		* @since 15.1.0
		*/
		this.show = new EventEmitter();
		/**
		* Event emitted when the expanding animation is finished. It has no payload.
		*/
		this.shown = new EventEmitter();
		/**
		* Event emitted before the collapsing animation starts. It has no payload.
		*
		* @since 15.1.0
		*/
		this.hide = new EventEmitter();
		/**
		* Event emitted when the collapsing animation is finished and before the content is removed from DOM.
		* It has no payload.
		*/
		this.hidden = new EventEmitter();
	}
	/**
	* Sets the custom ID of the accordion item. It must be unique for the document.
	*
	* @param id The ID of the accordion item, must be a non-empty string
	*/
	set id(id) {
		if (isString(id) && id !== "") this._id = id;
	}
	/**
	* If `true`, the content of the accordion item's body will be removed from the DOM. It will be just hidden otherwise.
	*
	* This property can also be set up on the parent [`NgbAccordion` directive](#/components/accordion/api#NgbAccordionDirective).
	*/
	set destroyOnHide(destroyOnHide) {
		this._destroyOnHide = destroyOnHide;
	}
	get destroyOnHide() {
		return this._destroyOnHide === void 0 ? this._accordion.destroyOnHide : this._destroyOnHide;
	}
	/**
	*	If `true`, the accordion item will be collapsed. Otherwise, it will be expanded.
	*
	* @param collapsed New state of the accordion item.
	*/
	set collapsed(collapsed) {
		if (collapsed) this.collapse();
		else this.expand();
	}
	get collapsed() {
		return this._collapsed;
	}
	get id() {
		return `${this._id}`;
	}
	get toggleId() {
		return `${this.id}-toggle`;
	}
	get collapseId() {
		return `${this.id}-collapse`;
	}
	get _shouldBeInDOM() {
		return !this.collapsed || this._collapseAnimationRunning || !this.destroyOnHide;
	}
	ngAfterContentInit() {
		const { ngbCollapse } = this._collapse;
		ngbCollapse.animation = false;
		ngbCollapse.collapsed = this.collapsed;
		ngbCollapse.animation = this._accordion.animation;
		ngbCollapse.hidden.pipe(takeUntilDestroyed(this._destroyRef)).subscribe(() => {
			this._collapseAnimationRunning = false;
			this.hidden.emit();
			this._accordion.hidden.emit(this.id);
			this._cd.markForCheck();
		});
		ngbCollapse.shown.pipe(takeUntilDestroyed(this._destroyRef)).subscribe(() => {
			this.shown.emit();
			this._accordion.shown.emit(this.id);
			this._cd.markForCheck();
		});
	}
	/**
	* Toggles an accordion item.
	*/
	toggle() {
		this.collapsed = !this.collapsed;
	}
	/**
	* Expands an accordion item.
	*/
	expand() {
		if (this.collapsed) {
			if (!this._accordion._ensureCanExpand(this)) return;
			this._collapsed = false;
			this._cd.markForCheck();
			this._cd.detectChanges();
			this.show.emit();
			this._accordion.show.emit(this.id);
			this._collapse.ngbCollapse.animation = this._accordion.animation;
			this._collapse.ngbCollapse.collapsed = false;
		}
	}
	/**
	* Collapses an accordion item.
	*/
	collapse() {
		if (!this.collapsed) {
			this._collapsed = true;
			this._collapseAnimationRunning = true;
			this._cd.markForCheck();
			this.hide.emit();
			this._accordion.hide.emit(this.id);
			this._collapse.ngbCollapse.animation = this._accordion.animation;
			this._collapse.ngbCollapse.collapsed = true;
		}
	}
};
_NgbAccordionItem = NgbAccordionItem;
_NgbAccordionItem.ɵfac = function NgbAccordionItem_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _NgbAccordionItem)();
};
_NgbAccordionItem.ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
	type: _NgbAccordionItem,
	selectors: [[
		"",
		"ngbAccordionItem",
		""
	]],
	contentQueries: function NgbAccordionItem_ContentQueries(rf, ctx, dirIndex) {
		if (rf & 1) ɵɵcontentQuery(dirIndex, NgbAccordionCollapse, 7);
		if (rf & 2) {
			let _t;
			ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._collapse = _t.first);
		}
	},
	hostAttrs: [1, "accordion-item"],
	hostVars: 1,
	hostBindings: function NgbAccordionItem_HostBindings(rf, ctx) {
		if (rf & 2) ɵɵdomProperty("id", ctx.id);
	},
	inputs: {
		id: [
			0,
			"ngbAccordionItem",
			"id"
		],
		destroyOnHide: "destroyOnHide",
		disabled: "disabled",
		collapsed: "collapsed"
	},
	outputs: {
		show: "show",
		shown: "shown",
		hide: "hide",
		hidden: "hidden"
	},
	exportAs: ["ngbAccordionItem"]
});
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbAccordionItem, [{
		type: Directive,
		args: [{
			selector: "[ngbAccordionItem]",
			exportAs: "ngbAccordionItem",
			host: {
				"[id]": "id",
				class: "accordion-item"
			}
		}]
	}], null, {
		_collapse: [{
			type: ContentChild,
			args: [NgbAccordionCollapse, { static: true }]
		}],
		id: [{
			type: Input,
			args: ["ngbAccordionItem"]
		}],
		destroyOnHide: [{ type: Input }],
		disabled: [{ type: Input }],
		collapsed: [{ type: Input }],
		show: [{ type: Output }],
		shown: [{ type: Output }],
		hide: [{ type: Output }],
		hidden: [{ type: Output }]
	});
})();
/**
* Accordion is a stack of cards that have a header and collapsible body.
*
* This directive is a container for these items and provides an API to handle them.
*
* @since 14.1.0
*/
var NgbAccordionDirective = class {
	constructor() {
		this._config = inject(NgbAccordionConfig);
		this._anItemWasAlreadyExpandedDuringInitialisation = false;
		/**
		* If `true`, accordion will be animated.
		*/
		this.animation = this._config.animation;
		/**
		* If `true`, only one item at the time can stay open.
		*/
		this.closeOthers = this._config.closeOthers;
		/**
		* If `true`, the content of the accordion items body will be removed from the DOM. It will be just hidden otherwise.
		*
		* This property can be overwritten at the [`NgbAccordionItem`](#/components/accordion/api#NgbAccordionItem) level
		*/
		this.destroyOnHide = this._config.destroyOnHide;
		/**
		* Event emitted before expanding animation starts. The payload is the id of shown accordion item.
		*
		* @since 15.1.0
		*/
		this.show = new EventEmitter();
		/**
		* Event emitted when the expanding animation is finished. The payload is the id of shown accordion item.
		*/
		this.shown = new EventEmitter();
		/**
		* Event emitted before the collapsing animation starts. The payload is the id of hidden accordion item.
		*
		* @since 15.1.0
		*/
		this.hide = new EventEmitter();
		/**
		* Event emitted when the collapsing animation is finished and before the content is removed from DOM.
		* The payload is the id of hidden accordion item.
		*/
		this.hidden = new EventEmitter();
	}
	/**
	* Toggles an item with the given id.
	*
	* It will toggle an item, even if it is disabled.
	*
	* @param itemId The id of the item to toggle.
	*/
	toggle(itemId) {
		var _this$_getItem;
		(_this$_getItem = this._getItem(itemId)) === null || _this$_getItem === void 0 || _this$_getItem.toggle();
	}
	/**
	* Expands an item with the given id.
	*
	* If `closeOthers` is `true`, it will collapse other panels.
	*
	* @param itemId The id of the item to expand.
	*/
	expand(itemId) {
		var _this$_getItem2;
		(_this$_getItem2 = this._getItem(itemId)) === null || _this$_getItem2 === void 0 || _this$_getItem2.expand();
	}
	/**
	* Expands all items.
	*
	* If `closeOthers` is `true` and all items are closed, it will open the first one. Otherwise, it will keep the opened one.
	*/
	expandAll() {
		if (this._items) if (this.closeOthers) {
			if (!this._items.find((item) => !item.collapsed)) this._items.first.expand();
		} else this._items.forEach((item) => item.expand());
	}
	/**
	* Collapses an item with the given id.
	*
	* Has no effect if the `itemId` does not correspond to any item.
	*
	* @param itemId The id of the item to collapse.
	*/
	collapse(itemId) {
		var _this$_getItem3;
		(_this$_getItem3 = this._getItem(itemId)) === null || _this$_getItem3 === void 0 || _this$_getItem3.collapse();
	}
	/**
	* Collapses all items.
	*/
	collapseAll() {
		var _this$_items;
		(_this$_items = this._items) === null || _this$_items === void 0 || _this$_items.forEach((item) => item.collapse());
	}
	/**
	* Checks if an item with the given id is expanded.
	*
	* If the `itemId` does not correspond to any item, it returns `false`.
	*
	* @param itemId The id of the item to check.
	*/
	isExpanded(itemId) {
		const item = this._getItem(itemId);
		return item ? !item.collapsed : false;
	}
	/**
	* It checks, if the item can be expanded in the current state of the accordion.
	* With `closeOthers` there can be only one expanded item at a time.
	*
	* @internal
	*/
	_ensureCanExpand(toExpand) {
		var _this$_items$find;
		if (!this.closeOthers) return true;
		if (!this._items) {
			if (!this._anItemWasAlreadyExpandedDuringInitialisation) {
				this._anItemWasAlreadyExpandedDuringInitialisation = true;
				return true;
			}
			return false;
		}
		(_this$_items$find = this._items.find((item) => !item.collapsed && toExpand !== item)) === null || _this$_items$find === void 0 || _this$_items$find.collapse();
		return true;
	}
	_getItem(itemId) {
		var _this$_items2;
		return (_this$_items2 = this._items) === null || _this$_items2 === void 0 ? void 0 : _this$_items2.find((item) => item.id === itemId);
	}
};
_NgbAccordionDirective = NgbAccordionDirective;
_NgbAccordionDirective.ɵfac = function NgbAccordionDirective_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _NgbAccordionDirective)();
};
_NgbAccordionDirective.ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
	type: _NgbAccordionDirective,
	selectors: [[
		"",
		"ngbAccordion",
		""
	]],
	contentQueries: function NgbAccordionDirective_ContentQueries(rf, ctx, dirIndex) {
		if (rf & 1) ɵɵcontentQuery(dirIndex, NgbAccordionItem, 4);
		if (rf & 2) {
			let _t;
			ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._items = _t);
		}
	},
	hostAttrs: [1, "accordion"],
	inputs: {
		animation: "animation",
		closeOthers: "closeOthers",
		destroyOnHide: "destroyOnHide"
	},
	outputs: {
		show: "show",
		shown: "shown",
		hide: "hide",
		hidden: "hidden"
	},
	exportAs: ["ngbAccordion"]
});
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbAccordionDirective, [{
		type: Directive,
		args: [{
			selector: "[ngbAccordion]",
			exportAs: "ngbAccordion",
			host: { class: "accordion" }
		}]
	}], null, {
		_items: [{
			type: ContentChildren,
			args: [NgbAccordionItem, { descendants: false }]
		}],
		animation: [{ type: Input }],
		closeOthers: [{ type: Input }],
		destroyOnHide: [{ type: Input }],
		show: [{ type: Output }],
		shown: [{ type: Output }],
		hide: [{ type: Output }],
		hidden: [{ type: Output }]
	});
})();
var NGB_ACCORDION_DIRECTIVES = [
	NgbAccordionButton,
	NgbAccordionDirective,
	NgbAccordionItem,
	NgbAccordionHeader,
	NgbAccordionToggle,
	NgbAccordionBody,
	NgbAccordionCollapse
];
var NgbAccordionModule = class {};
_NgbAccordionModule = NgbAccordionModule;
_NgbAccordionModule.ɵfac = function NgbAccordionModule_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _NgbAccordionModule)();
};
_NgbAccordionModule.ɵmod = /* @__PURE__ */ ɵɵdefineNgModule({
	type: _NgbAccordionModule,
	imports: [
		NgbAccordionButton,
		NgbAccordionDirective,
		NgbAccordionItem,
		NgbAccordionHeader,
		NgbAccordionToggle,
		NgbAccordionBody,
		NgbAccordionCollapse
	],
	exports: [
		NgbAccordionButton,
		NgbAccordionDirective,
		NgbAccordionItem,
		NgbAccordionHeader,
		NgbAccordionToggle,
		NgbAccordionBody,
		NgbAccordionCollapse
	]
});
_NgbAccordionModule.ɵinj = /* @__PURE__ */ ɵɵdefineInjector({});
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbAccordionModule, [{
		type: NgModule,
		args: [{
			imports: NGB_ACCORDION_DIRECTIVES,
			exports: NGB_ACCORDION_DIRECTIVES
		}]
	}], null, null);
})();
//#endregion
export { NgbAccordionBody, NgbAccordionButton, NgbAccordionCollapse, NgbAccordionConfig, NgbAccordionDirective, NgbAccordionHeader, NgbAccordionItem, NgbAccordionModule, NgbAccordionToggle };
