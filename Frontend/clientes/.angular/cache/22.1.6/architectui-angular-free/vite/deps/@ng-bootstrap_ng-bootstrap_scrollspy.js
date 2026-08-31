import { $n as Output, Ea as ɵɵcontentQuery, En as ElementRef, Fn as Injectable, Hl as _objectSpread2, In as Input, Lc as NgZone, Ol as ɵɵdefineInjectable, Wi as setClassMetadata, Xo as ɵɵloadQuery, Yo as ɵɵlistener, _c as DestroyRef, a as ContentChildren, gc as DOCUMENT, kl as ɵɵdefineInjector, ll as inject, mo as ɵɵdomProperty, no as ɵɵdefineDirective, qn as NgModule, r as ChangeDetectorRef, ro as ɵɵdefineNgModule, ua as ɵɵProvidersFeature, vs as ɵɵqueryRefresh, wn as Directive, xa as ɵɵclassProp, zc as PLATFORM_ID } from "./core-CpxyNpZz.js";
import { Dn as Subject, bt as distinctUntilChanged } from "./operators-BOtrYIkv.js";
import { m as isString } from "./_ngb-ngbootstrap-utilities-NGMx8cil.js";
import { u as isPlatformBrowser } from "./common-CILBZQ4R.js";
import { t as takeUntilDestroyed } from "./rxjs-interop-C9YowOKx.js";
//#region node_modules/@ng-bootstrap/ng-bootstrap/fesm2022/ng-bootstrap-ng-bootstrap-scrollspy.mjs
var _NgbScrollSpyConfig;
var _NgbScrollSpyService;
var _NgbScrollSpyItem;
var _NgbScrollSpyMenu;
var _NgbScrollSpy;
var _NgbScrollSpyFragment;
var _NgbScrollSpyModule;
function toFragmentElement(container, id) {
	if (!container || id == null) return null;
	return isString(id) ? container.querySelector(`#${CSS.escape(id)}`) : id;
}
function getOrderedFragments(container, fragments) {
	const selector = [...fragments].map(({ id }) => `#${CSS.escape(id)}`).join(",");
	return Array.from(container.querySelectorAll(selector));
}
var defaultProcessChanges = (state, changeActive, ctx) => {
	const { rootElement, fragments, scrollSpy, options, entries } = state;
	const orderedFragments = getOrderedFragments(rootElement, fragments);
	if (!ctx.initialized) {
		ctx.initialized = true;
		ctx.gapFragment = null;
		ctx.visibleFragments = /* @__PURE__ */ new Set();
		const preSelectedFragment = toFragmentElement(rootElement, options === null || options === void 0 ? void 0 : options.initialFragment);
		if (preSelectedFragment) {
			scrollSpy.scrollTo(preSelectedFragment);
			return;
		}
	}
	for (const entry of entries) {
		const { isIntersecting, target: fragment } = entry;
		if (isIntersecting) {
			if (ctx.gapFragment) {
				ctx.visibleFragments.delete(ctx.gapFragment);
				ctx.gapFragment = null;
			}
			ctx.visibleFragments.add(fragment);
		} else {
			ctx.visibleFragments.delete(fragment);
			if (ctx.visibleFragments.size === 0 && scrollSpy.active !== "") if (entry.boundingClientRect.top < entry.rootBounds.top) {
				ctx.gapFragment = fragment;
				ctx.visibleFragments.add(ctx.gapFragment);
			} else if (fragment === orderedFragments[0]) {
				ctx.gapFragment = null;
				ctx.visibleFragments.clear();
				changeActive("");
				return;
			} else {
				ctx.gapFragment = orderedFragments[orderedFragments.indexOf(fragment) - 1] || null;
				if (ctx.gapFragment) ctx.visibleFragments.add(ctx.gapFragment);
			}
		}
	}
	for (const fragment of orderedFragments) if (ctx.visibleFragments.has(fragment)) {
		changeActive(fragment.id);
		break;
	}
};
/**
* A configuration service for the [`NgbScrollSpyService`](#/components/scrollspy/api#NgbScrollSpyService).
*
* You can inject this service, typically in your root component, and customize the values of its properties in
* order to provide default values for all scrollspies used in the application.
*
* @since 15.1.0
*/
var NgbScrollSpyConfig = class {
	constructor() {
		this.scrollBehavior = "smooth";
		this.processChanges = defaultProcessChanges;
	}
};
_NgbScrollSpyConfig = NgbScrollSpyConfig;
_NgbScrollSpyConfig.ɵfac = function NgbScrollSpyConfig_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _NgbScrollSpyConfig)();
};
_NgbScrollSpyConfig.ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
	token: _NgbScrollSpyConfig,
	factory: _NgbScrollSpyConfig.ɵfac,
	providedIn: "root"
});
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbScrollSpyConfig, [{
		type: Injectable,
		args: [{ providedIn: "root" }]
	}], null, null);
})();
var MATCH_THRESHOLD = 3;
/**
* A scrollspy service that allows tracking of elements scrolling in and out of view.
*
* It can be instantiated manually, or automatically by the `ngbScrollSpy` directive.
*
* @since 15.1.0
*/
var NgbScrollSpyService = class {
	constructor() {
		this._observer = null;
		this._containerElement = null;
		this._fragments = /* @__PURE__ */ new Set();
		this._preRegisteredFragments = /* @__PURE__ */ new Set();
		this._active$ = new Subject();
		this._distinctActive$ = this._active$.pipe(distinctUntilChanged());
		this._active = "";
		this._config = inject(NgbScrollSpyConfig);
		this._document = inject(DOCUMENT);
		this._platformId = inject(PLATFORM_ID);
		this._scrollBehavior = this._config.scrollBehavior;
		this._diChangeDetectorRef = inject(ChangeDetectorRef, { optional: true });
		this._changeDetectorRef = this._diChangeDetectorRef;
		this._zone = inject(NgZone);
		this._distinctActive$.pipe(takeUntilDestroyed()).subscribe((active) => {
			var _this$_changeDetector;
			this._active = active;
			(_this$_changeDetector = this._changeDetectorRef) === null || _this$_changeDetector === void 0 || _this$_changeDetector.markForCheck();
		});
	}
	/**
	* Getter for the currently active fragment id. Returns empty string if none.
	*/
	get active() {
		return this._active;
	}
	/**
	* An observable emitting the currently active fragment. Emits empty string if none.
	*/
	get active$() {
		return this._distinctActive$;
	}
	/**
	* Starts the scrollspy service and observes specified fragments.
	*
	* You can specify a list of options to pass, like the root element, initial fragment, scroll behavior, etc.
	* See the [`NgbScrollSpyOptions`](#/components/scrollspy/api#NgbScrollSpyOptions) interface for more details.
	*/
	start(options) {
		if (isPlatformBrowser(this._platformId)) {
			this._cleanup();
			const { root, rootMargin, scrollBehavior, threshold, fragments, changeDetectorRef, processChanges } = _objectSpread2({}, options);
			this._containerElement = root !== null && root !== void 0 ? root : this._document.documentElement;
			this._changeDetectorRef = changeDetectorRef !== null && changeDetectorRef !== void 0 ? changeDetectorRef : this._diChangeDetectorRef;
			this._scrollBehavior = scrollBehavior !== null && scrollBehavior !== void 0 ? scrollBehavior : this._config.scrollBehavior;
			const processChangesFn = processChanges !== null && processChanges !== void 0 ? processChanges : this._config.processChanges;
			const context = {};
			this._observer = new IntersectionObserver((entries) => processChangesFn({
				entries,
				rootElement: this._containerElement,
				fragments: this._fragments,
				scrollSpy: this,
				options: _objectSpread2({}, options)
			}, (active) => this._active$.next(active), context), _objectSpread2(_objectSpread2({ root: root !== null && root !== void 0 ? root : this._document }, rootMargin && { rootMargin }), threshold && { threshold }));
			for (const element of [...this._preRegisteredFragments, ...fragments !== null && fragments !== void 0 ? fragments : []]) this.observe(element);
			this._preRegisteredFragments.clear();
		}
	}
	/**
	* Stops the service and unobserves all fragments.
	*/
	stop() {
		this._cleanup();
		this._active$.next("");
	}
	/**
	* Scrolls to a fragment, it must be known to the service and contained in the root element.
	* An id or an element reference can be passed.
	*
	* [`NgbScrollToOptions`](#/components/scrollspy/api#NgbScrollToOptions) can be passed.
	*/
	scrollTo(fragment, options) {
		const { behavior } = _objectSpread2({ behavior: this._scrollBehavior }, options);
		if (this._containerElement) {
			const fragmentElement = toFragmentElement(this._containerElement, fragment);
			if (fragmentElement) {
				const heightPx = fragmentElement.offsetTop - this._containerElement.offsetTop;
				this._containerElement.scrollTo({
					top: heightPx,
					behavior
				});
				let lastOffset = this._containerElement.scrollTop;
				let matchCounter = 0;
				const containerElement = this._containerElement;
				this._zone.runOutsideAngular(() => {
					const updateActiveWhenScrollingIsFinished = () => {
						const sameOffsetAsLastTime = lastOffset === containerElement.scrollTop;
						if (sameOffsetAsLastTime) matchCounter++;
						else matchCounter = 0;
						if (!sameOffsetAsLastTime || sameOffsetAsLastTime && matchCounter < MATCH_THRESHOLD) {
							lastOffset = containerElement.scrollTop;
							requestAnimationFrame(updateActiveWhenScrollingIsFinished);
						} else this._zone.run(() => this._active$.next(fragmentElement.id));
					};
					requestAnimationFrame(updateActiveWhenScrollingIsFinished);
				});
			}
		}
	}
	/**
	* Adds a fragment to observe. It must be contained in the root element.
	* An id or an element reference can be passed.
	*/
	observe(fragment) {
		if (!this._observer) {
			this._preRegisteredFragments.add(fragment);
			return;
		}
		const fragmentElement = toFragmentElement(this._containerElement, fragment);
		if (fragmentElement && !this._fragments.has(fragmentElement)) {
			this._fragments.add(fragmentElement);
			this._observer.observe(fragmentElement);
		}
	}
	/**
	* Unobserves a fragment.
	* An id or an element reference can be passed.
	*/
	unobserve(fragment) {
		if (!this._observer) {
			this._preRegisteredFragments.delete(fragment);
			return;
		}
		const fragmentElement = toFragmentElement(this._containerElement, fragment);
		if (fragmentElement) {
			this._fragments.delete(fragmentElement);
			this._observer.disconnect();
			for (const fragment of this._fragments) this._observer.observe(fragment);
		}
	}
	ngOnDestroy() {
		this._cleanup();
	}
	_cleanup() {
		var _this$_observer;
		this._fragments.clear();
		(_this$_observer = this._observer) === null || _this$_observer === void 0 || _this$_observer.disconnect();
		this._changeDetectorRef = this._diChangeDetectorRef;
		this._scrollBehavior = this._config.scrollBehavior;
		this._observer = null;
		this._containerElement = null;
	}
};
_NgbScrollSpyService = NgbScrollSpyService;
_NgbScrollSpyService.ɵfac = function NgbScrollSpyService_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _NgbScrollSpyService)();
};
_NgbScrollSpyService.ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
	token: _NgbScrollSpyService,
	factory: _NgbScrollSpyService.ɵfac,
	providedIn: "root"
});
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbScrollSpyService, [{
		type: Injectable,
		args: [{ providedIn: "root" }]
	}], () => [], null);
})();
/**
* A helper directive to that links menu items and fragments together.
*
* It will automatically add the `.active` class to the menu item when the associated fragment becomes active.
*
* @since 15.1.0
*/
var NgbScrollSpyItem = class {
	constructor() {
		var _this$_scrollSpyMenu;
		this._changeDetector = inject(ChangeDetectorRef);
		this._scrollSpyMenu = inject(NgbScrollSpyMenu, { optional: true });
		this._scrollSpyAPI = (_this$_scrollSpyMenu = this._scrollSpyMenu) !== null && _this$_scrollSpyMenu !== void 0 ? _this$_scrollSpyMenu : inject(NgbScrollSpyService);
		this._destroyRef = inject(DestroyRef);
		this._isActive = false;
	}
	/**
	* References the scroll spy directive, the id of the associated fragment and the parent menu item.
	*
	* Can be used like:
	*  - `ngbScrollSpyItem="fragmentId"`
	*  - `[ngbScrollSpyItem]="scrollSpy" fragment="fragmentId"
	*  - `[ngbScrollSpyItem]="[scrollSpy, 'fragmentId']"` parent="parentId"`
	*  - `[ngbScrollSpyItem]="[scrollSpy, 'fragmentId', 'parentId']"`
	*
	*  As well as together with `[fragment]` and `[parent]` inputs.
	*/
	set data(data) {
		if (Array.isArray(data)) {
			var _this$parent;
			this._scrollSpyAPI = data[0];
			this.fragment = data[1];
			(_this$parent = this.parent) !== null && _this$parent !== void 0 || (this.parent = data[2]);
		} else if (data instanceof NgbScrollSpy) this._scrollSpyAPI = data;
		else if (isString(data)) this.fragment = data;
	}
	ngOnInit() {
		if (!this._scrollSpyMenu) this._scrollSpyAPI.active$.pipe(takeUntilDestroyed(this._destroyRef)).subscribe((active) => {
			if (active === this.fragment) this._activate();
			else this._deactivate();
			this._changeDetector.markForCheck();
		});
	}
	/**
	* @internal
	*/
	_activate() {
		this._isActive = true;
		if (this._scrollSpyMenu) {
			var _this$_scrollSpyMenu$, _this$parent2;
			(_this$_scrollSpyMenu$ = this._scrollSpyMenu.getItem((_this$parent2 = this.parent) !== null && _this$parent2 !== void 0 ? _this$parent2 : "")) === null || _this$_scrollSpyMenu$ === void 0 || _this$_scrollSpyMenu$._activate();
		}
	}
	/**
	* @internal
	*/
	_deactivate() {
		this._isActive = false;
		if (this._scrollSpyMenu) {
			var _this$_scrollSpyMenu$2, _this$parent3;
			(_this$_scrollSpyMenu$2 = this._scrollSpyMenu.getItem((_this$parent3 = this.parent) !== null && _this$parent3 !== void 0 ? _this$parent3 : "")) === null || _this$_scrollSpyMenu$2 === void 0 || _this$_scrollSpyMenu$2._deactivate();
		}
	}
	/**
	* Returns `true`, if the associated fragment is active.
	*/
	isActive() {
		return this._isActive;
	}
	/**
	* Scrolls to the associated fragment.
	*/
	scrollTo(options) {
		this._scrollSpyAPI.scrollTo(this.fragment, options);
	}
};
_NgbScrollSpyItem = NgbScrollSpyItem;
_NgbScrollSpyItem.ɵfac = function NgbScrollSpyItem_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _NgbScrollSpyItem)();
};
_NgbScrollSpyItem.ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
	type: _NgbScrollSpyItem,
	selectors: [[
		"",
		"ngbScrollSpyItem",
		""
	]],
	hostVars: 2,
	hostBindings: function NgbScrollSpyItem_HostBindings(rf, ctx) {
		if (rf & 1) ɵɵlistener("click", function NgbScrollSpyItem_click_HostBindingHandler() {
			return ctx.scrollTo();
		});
		if (rf & 2) ɵɵclassProp("active", ctx.isActive());
	},
	inputs: {
		data: [
			0,
			"ngbScrollSpyItem",
			"data"
		],
		fragment: "fragment",
		parent: "parent"
	},
	exportAs: ["ngbScrollSpyItem"]
});
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbScrollSpyItem, [{
		type: Directive,
		args: [{
			selector: "[ngbScrollSpyItem]",
			exportAs: "ngbScrollSpyItem",
			host: {
				"[class.active]": "isActive()",
				"(click)": "scrollTo();"
			}
		}]
	}], null, {
		data: [{
			type: Input,
			args: ["ngbScrollSpyItem"]
		}],
		fragment: [{ type: Input }],
		parent: [{ type: Input }]
	});
})();
/**
* An optional scroll spy menu directive to build hierarchical menus
* and simplify the [`NgbScrollSpyItem`](#/components/scrollspy/api#NgbScrollSpyItem) configuration.
*
* @since 15.1.0
*/
var NgbScrollSpyMenu = class {
	constructor() {
		this._scrollSpyRef = inject(NgbScrollSpyService);
		this._destroyRef = inject(DestroyRef);
		this._map = /* @__PURE__ */ new Map();
		this._lastActiveItem = null;
	}
	set scrollSpy(scrollSpy) {
		this._scrollSpyRef = scrollSpy;
	}
	get active() {
		return this._scrollSpyRef.active;
	}
	get active$() {
		return this._scrollSpyRef.active$;
	}
	scrollTo(fragment, options) {
		this._scrollSpyRef.scrollTo(fragment, options);
	}
	getItem(id) {
		return this._map.get(id);
	}
	ngAfterViewInit() {
		this._items.changes.pipe(takeUntilDestroyed(this._destroyRef)).subscribe(() => this._rebuildMap());
		this._rebuildMap();
		this._scrollSpyRef.active$.pipe(takeUntilDestroyed(this._destroyRef)).subscribe((activeId) => {
			var _this$_lastActiveItem;
			(_this$_lastActiveItem = this._lastActiveItem) === null || _this$_lastActiveItem === void 0 || _this$_lastActiveItem._deactivate();
			const item = this._map.get(activeId);
			if (item) {
				item._activate();
				this._lastActiveItem = item;
			}
		});
	}
	_rebuildMap() {
		this._map.clear();
		for (let item of this._items) this._map.set(item.fragment, item);
	}
};
_NgbScrollSpyMenu = NgbScrollSpyMenu;
_NgbScrollSpyMenu.ɵfac = function NgbScrollSpyMenu_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _NgbScrollSpyMenu)();
};
_NgbScrollSpyMenu.ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
	type: _NgbScrollSpyMenu,
	selectors: [[
		"",
		"ngbScrollSpyMenu",
		""
	]],
	contentQueries: function NgbScrollSpyMenu_ContentQueries(rf, ctx, dirIndex) {
		if (rf & 1) ɵɵcontentQuery(dirIndex, NgbScrollSpyItem, 5);
		if (rf & 2) {
			let _t;
			ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._items = _t);
		}
	},
	inputs: { scrollSpy: [
		0,
		"ngbScrollSpyMenu",
		"scrollSpy"
	] }
});
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbScrollSpyMenu, [{
		type: Directive,
		args: [{ selector: "[ngbScrollSpyMenu]" }]
	}], null, {
		_items: [{
			type: ContentChildren,
			args: [NgbScrollSpyItem, { descendants: true }]
		}],
		scrollSpy: [{
			type: Input,
			args: ["ngbScrollSpyMenu"]
		}]
	});
})();
/**
* A directive to put on a scrollable container.
*
* It will instantiate a [`NgbScrollSpyService`](#/components/scrollspy/api#NgbScrollSpyService).
*
* @since 15.1.0
*/
var NgbScrollSpy = class {
	constructor() {
		this._initialFragment = null;
		this._service = inject(NgbScrollSpyService);
		this._nativeElement = inject(ElementRef).nativeElement;
		/**
		* An event raised when the active section changes.
		*
		* Payload is the id of the new active section, empty string if none.
		*/
		this.activeChange = this._service.active$;
	}
	set active(fragment) {
		this._initialFragment = fragment;
		this.scrollTo(fragment);
	}
	/**
	* Getter/setter for the currently active fragment id.
	*/
	get active() {
		return this._service.active;
	}
	/**
	* Returns an observable that emits currently active section id.
	*/
	get active$() {
		return this._service.active$;
	}
	ngAfterViewInit() {
		this._service.start(_objectSpread2({
			processChanges: this.processChanges,
			root: this._nativeElement,
			rootMargin: this.rootMargin,
			threshold: this.threshold
		}, this._initialFragment && { initialFragment: this._initialFragment }));
	}
	/**
	* @internal
	*/
	_registerFragment(fragment) {
		this._service.observe(fragment.id);
	}
	/**
	* @internal
	*/
	_unregisterFragment(fragment) {
		this._service.unobserve(fragment.id);
	}
	/**
	* Scrolls to a fragment that is identified by the `ngbScrollSpyFragment` directive.
	* An id or an element reference can be passed.
	*/
	scrollTo(fragment, options) {
		this._service.scrollTo(fragment, _objectSpread2(_objectSpread2({}, this.scrollBehavior && { behavior: this.scrollBehavior }), options));
	}
};
_NgbScrollSpy = NgbScrollSpy;
_NgbScrollSpy.ɵfac = function NgbScrollSpy_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _NgbScrollSpy)();
};
_NgbScrollSpy.ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
	type: _NgbScrollSpy,
	selectors: [[
		"",
		"ngbScrollSpy",
		""
	]],
	hostAttrs: [
		"tabindex",
		"0",
		2,
		"overflow-y",
		"auto"
	],
	inputs: {
		processChanges: "processChanges",
		rootMargin: "rootMargin",
		scrollBehavior: "scrollBehavior",
		threshold: "threshold",
		active: "active"
	},
	outputs: { activeChange: "activeChange" },
	exportAs: ["ngbScrollSpy"],
	features: [ɵɵProvidersFeature([NgbScrollSpyService])]
});
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbScrollSpy, [{
		type: Directive,
		args: [{
			selector: "[ngbScrollSpy]",
			exportAs: "ngbScrollSpy",
			host: {
				tabindex: "0",
				style: "overflow-y: auto"
			},
			providers: [NgbScrollSpyService]
		}]
	}], null, {
		processChanges: [{ type: Input }],
		rootMargin: [{ type: Input }],
		scrollBehavior: [{ type: Input }],
		threshold: [{ type: Input }],
		active: [{ type: Input }],
		activeChange: [{ type: Output }]
	});
})();
/**
* A directive to put on a fragment observed inside a scrollspy container.
*
* @since 15.1.0
*/
var NgbScrollSpyFragment = class {
	constructor() {
		this._destroyRef = inject(DestroyRef);
		this._scrollSpy = inject(NgbScrollSpy);
	}
	ngAfterViewInit() {
		this._scrollSpy._registerFragment(this);
		this._destroyRef.onDestroy(() => this._scrollSpy._unregisterFragment(this));
	}
};
_NgbScrollSpyFragment = NgbScrollSpyFragment;
_NgbScrollSpyFragment.ɵfac = function NgbScrollSpyFragment_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _NgbScrollSpyFragment)();
};
_NgbScrollSpyFragment.ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
	type: _NgbScrollSpyFragment,
	selectors: [[
		"",
		"ngbScrollSpyFragment",
		""
	]],
	hostVars: 1,
	hostBindings: function NgbScrollSpyFragment_HostBindings(rf, ctx) {
		if (rf & 2) ɵɵdomProperty("id", ctx.id);
	},
	inputs: { id: [
		0,
		"ngbScrollSpyFragment",
		"id"
	] }
});
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbScrollSpyFragment, [{
		type: Directive,
		args: [{
			selector: "[ngbScrollSpyFragment]",
			host: { "[id]": "id" }
		}]
	}], null, { id: [{
		type: Input,
		args: ["ngbScrollSpyFragment"]
	}] });
})();
var NgbScrollSpyModule = class {};
_NgbScrollSpyModule = NgbScrollSpyModule;
_NgbScrollSpyModule.ɵfac = function NgbScrollSpyModule_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _NgbScrollSpyModule)();
};
_NgbScrollSpyModule.ɵmod = /* @__PURE__ */ ɵɵdefineNgModule({
	type: _NgbScrollSpyModule,
	imports: [
		NgbScrollSpy,
		NgbScrollSpyItem,
		NgbScrollSpyFragment,
		NgbScrollSpyMenu
	],
	exports: [
		NgbScrollSpy,
		NgbScrollSpyItem,
		NgbScrollSpyFragment,
		NgbScrollSpyMenu
	]
});
_NgbScrollSpyModule.ɵinj = /* @__PURE__ */ ɵɵdefineInjector({});
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbScrollSpyModule, [{
		type: NgModule,
		args: [{
			imports: [
				NgbScrollSpy,
				NgbScrollSpyItem,
				NgbScrollSpyFragment,
				NgbScrollSpyMenu
			],
			exports: [
				NgbScrollSpy,
				NgbScrollSpyItem,
				NgbScrollSpyFragment,
				NgbScrollSpyMenu
			]
		}]
	}], null, null);
})();
//#endregion
export { NgbScrollSpy, NgbScrollSpyConfig, NgbScrollSpyFragment, NgbScrollSpyItem, NgbScrollSpyMenu, NgbScrollSpyModule, NgbScrollSpyService };
