import { $n as Output, Ca as ɵɵconditional, Do as ɵɵgetCurrentView, Dr as ViewEncapsulation, En as ElementRef, Fn as Injectable, Gs as ɵɵtextInterpolate, Hs as ɵɵtemplate, In as Input, Lc as NgZone, Ll as ɵɵresetView, Ol as ɵɵdefineInjectable, Rl as ɵɵrestoreView, Sc as EventEmitter, Ss as ɵɵrepeaterCreate, Ta as ɵɵconditionalCreate, Us as ɵɵtemplateRefExtractor, Wi as setClassMetadata, Ws as ɵɵtext, Yo as ɵɵlistener, Zo as ɵɵnextContext, al as forwardRef, an as ChangeDetectionStrategy, ba as ɵɵclassMap, bo as ɵɵelementEnd, bs as ɵɵreference, cn as Component, da as ɵɵadvance, do as ɵɵdomElementEnd, fo as ɵɵdomElementStart, gc as DOCUMENT, go as ɵɵelement, jr as afterEveryRender, kc as Injector, kl as ɵɵdefineInjector, la as ɵɵNgOnChangesFeature, ll as inject, lo as ɵɵdomElementContainerEnd, mo as ɵɵdomProperty, no as ɵɵdefineDirective, os as ɵɵproperty, qn as NgModule, r as ChangeDetectorRef, ro as ɵɵdefineNgModule, to as ɵɵdefineComponent, ua as ɵɵProvidersFeature, uo as ɵɵdomElementContainerStart, us as ɵɵpureFunction3, wn as Directive, ws as ɵɵrepeaterTrackByIndex, xa as ɵɵclassProp, xo as ɵɵelementStart, xs as ɵɵrepeater, ya as ɵɵattribute } from "./core-CpxyNpZz.js";
import { C as switchMap, Dn as Subject, En as BehaviorSubject, _ as tap, ln as map, pn as of } from "./operators-BOtrYIkv.js";
import { M as NG_VALUE_ACCESSOR } from "./forms-Dsvknx6z.js";
import { D as toString, O as fromEvent, T as removeAccents, b as ngbPositioning, g as ngbAutoClose, i as PopupService, o as addPopperOffset, r as Live, u as isDefined, w as regExpEscape } from "./_ngb-ngbootstrap-utilities-NGMx8cil.js";
import { Y as NgTemplateOutlet } from "./common-CILBZQ4R.js";
//#region node_modules/@ng-bootstrap/ng-bootstrap/fesm2022/ng-bootstrap-ng-bootstrap-typeahead.mjs
var _NgbHighlight;
var _NgbTypeaheadConfig;
var _NgbTypeaheadWindow;
var _NgbTypeahead;
var _NgbTypeaheadModule;
/**
* A component that helps with text highlighting.
*
* It splits the `result` text into parts that contain the searched `term` and generates the HTML markup to simplify
* highlighting:
*
* Ex. `result="Alaska"` and `term="as"` will produce `Al<span class="ngb-highlight">as</span>ka`.
*/
function NgbHighlight_For_1_Conditional_0_Template(rf, ctx) {
	if (rf & 1) {
		ɵɵdomElementStart(0, "span");
		ɵɵtext(1);
		ɵɵdomElementEnd();
	}
	if (rf & 2) {
		const part_r1 = ɵɵnextContext().$implicit;
		ɵɵclassMap(ɵɵnextContext().highlightClass);
		ɵɵadvance();
		ɵɵtextInterpolate(part_r1);
	}
}
function NgbHighlight_For_1_Conditional_1_Template(rf, ctx) {
	if (rf & 1) {
		ɵɵdomElementContainerStart(0);
		ɵɵtext(1);
		ɵɵdomElementContainerEnd();
	}
	if (rf & 2) {
		const part_r1 = ɵɵnextContext().$implicit;
		ɵɵadvance();
		ɵɵtextInterpolate(part_r1);
	}
}
function NgbHighlight_For_1_Template(rf, ctx) {
	if (rf & 1) ɵɵconditionalCreate(0, NgbHighlight_For_1_Conditional_0_Template, 2, 3, "span", 0)(1, NgbHighlight_For_1_Conditional_1_Template, 2, 1, "ng-container");
	if (rf & 2) {
		const ɵ$index_1_r3 = ctx.$index;
		ɵɵconditional(ɵ$index_1_r3 % 2 !== 0 ? 0 : 1);
	}
}
var _c0 = (a0, a1, a2) => ({
	result: a0,
	term: a1,
	formatter: a2
});
function NgbTypeaheadWindow_ng_template_0_Template(rf, ctx) {
	if (rf & 1) ɵɵelement(0, "ngb-highlight", 2);
	if (rf & 2) {
		const result_r1 = ctx.result;
		const term_r2 = ctx.term;
		const formatter_r3 = ctx.formatter;
		ɵɵproperty("result", formatter_r3(result_r1))("term", term_r2);
	}
}
function NgbTypeaheadWindow_For_3_ng_template_1_Template(rf, ctx) {}
function NgbTypeaheadWindow_For_3_Template(rf, ctx) {
	if (rf & 1) {
		const _r4 = ɵɵgetCurrentView();
		ɵɵelementStart(0, "button", 3);
		ɵɵlistener("mouseenter", function NgbTypeaheadWindow_For_3_Template_button_mouseenter_0_listener() {
			const $index_r5 = ɵɵrestoreView(_r4).$index;
			return ɵɵresetView(ɵɵnextContext().markActive($index_r5));
		})("click", function NgbTypeaheadWindow_For_3_Template_button_click_0_listener() {
			const result_r7 = ɵɵrestoreView(_r4).$implicit;
			return ɵɵresetView(ɵɵnextContext().select(result_r7));
		});
		ɵɵtemplate(1, NgbTypeaheadWindow_For_3_ng_template_1_Template, 0, 0, "ng-template", 4);
		ɵɵelementEnd();
	}
	if (rf & 2) {
		const result_r7 = ctx.$implicit;
		const $index_r5 = ctx.$index;
		const ctx_r5 = ɵɵnextContext();
		const rt_r8 = ɵɵreference(1);
		ɵɵclassProp("active", $index_r5 === ctx_r5.activeIdx);
		ɵɵproperty("id", ctx_r5.id + "-" + $index_r5);
		ɵɵadvance();
		ɵɵproperty("ngTemplateOutlet", ctx_r5.resultTemplate || rt_r8)("ngTemplateOutletContext", ɵɵpureFunction3(5, _c0, result_r7, ctx_r5.term, ctx_r5.formatter));
	}
}
var NgbHighlight = class {
	constructor() {
		/**
		* The CSS class for `<span>` elements wrapping the `term` inside the `result`.
		*/
		this.highlightClass = "ngb-highlight";
		/**
		* Boolean option to determine if the highlighting should be sensitive to accents or not.
		*
		* This feature is only available for browsers that implement the `String.normalize` function
		* (typically not Internet Explorer).
		* If you want to use this feature in a browser that does not implement `String.normalize`,
		* you will have to include a polyfill in your application (`unorm` for example).
		*
		* @since 9.1.0
		*/
		this.accentSensitive = true;
	}
	ngOnChanges(changes) {
		if (!this.accentSensitive && !String.prototype.normalize) {
			console.warn("The `accentSensitive` input in `ngb-highlight` cannot be set to `false` in a browser that does not implement the `String.normalize` function. You will have to include a polyfill in your application to use this feature in the current browser.");
			this.accentSensitive = true;
		}
		const result = toString(this.result);
		const terms = Array.isArray(this.term) ? this.term : [this.term];
		const prepareTerm = (term) => this.accentSensitive ? term : removeAccents(term);
		const escapedTerms = terms.map((term) => regExpEscape(prepareTerm(toString(term)))).filter((term) => term);
		const toSplit = this.accentSensitive ? result : removeAccents(result);
		const parts = escapedTerms.length ? toSplit.split(new RegExp(`(${escapedTerms.join("|")})`, "gmi")) : [result];
		if (this.accentSensitive) this.parts = parts;
		else {
			let offset = 0;
			this.parts = parts.map((part) => result.substring(offset, offset += part.length));
		}
	}
};
_NgbHighlight = NgbHighlight;
_NgbHighlight.ɵfac = function NgbHighlight_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _NgbHighlight)();
};
_NgbHighlight.ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
	type: _NgbHighlight,
	selectors: [["ngb-highlight"]],
	inputs: {
		highlightClass: "highlightClass",
		result: "result",
		term: "term",
		accentSensitive: "accentSensitive"
	},
	features: [ɵɵNgOnChangesFeature],
	decls: 2,
	vars: 0,
	consts: [[3, "class"]],
	template: function NgbHighlight_Template(rf, ctx) {
		if (rf & 1) ɵɵrepeaterCreate(0, NgbHighlight_For_1_Template, 2, 1, null, null, ɵɵrepeaterTrackByIndex);
		if (rf & 2) ɵɵrepeater(ctx.parts);
	},
	styles: [".ngb-highlight{font-weight:700}\n"],
	encapsulation: 2
});
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbHighlight, [{
		type: Component,
		args: [{
			selector: "ngb-highlight",
			changeDetection: ChangeDetectionStrategy.OnPush,
			encapsulation: ViewEncapsulation.None,
			template: `
		@for (part of parts; track $index) {
			@if ($odd) {
				<span class="{{ highlightClass }}">{{ part }}</span>
			} @else {
				<ng-container>{{ part }}</ng-container>
			}
		}
	`,
			styles: [".ngb-highlight{font-weight:700}\n"]
		}]
	}], null, {
		highlightClass: [{ type: Input }],
		result: [{
			type: Input,
			args: [{ required: true }]
		}],
		term: [{
			type: Input,
			args: [{ required: true }]
		}],
		accentSensitive: [{ type: Input }]
	});
})();
/**
* A configuration service for the [`NgbTypeahead`](#/components/typeahead/api#NgbTypeahead) component.
*
* You can inject this service, typically in your root component, and customize the values of its properties in
* order to provide default values for all the typeaheads used in the application.
*/
var NgbTypeaheadConfig = class {
	constructor() {
		this.editable = true;
		this.focusFirst = true;
		this.selectOnExact = false;
		this.showHint = false;
		this.placement = [
			"bottom-start",
			"bottom-end",
			"top-start",
			"top-end"
		];
		this.popperOptions = (options) => options;
	}
};
_NgbTypeaheadConfig = NgbTypeaheadConfig;
_NgbTypeaheadConfig.ɵfac = function NgbTypeaheadConfig_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _NgbTypeaheadConfig)();
};
_NgbTypeaheadConfig.ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
	token: _NgbTypeaheadConfig,
	factory: _NgbTypeaheadConfig.ɵfac,
	providedIn: "root"
});
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbTypeaheadConfig, [{
		type: Injectable,
		args: [{ providedIn: "root" }]
	}], null, null);
})();
var NgbTypeaheadWindow = class {
	constructor() {
		this.activeIdx = 0;
		/**
		* Flag indicating if the first row should be active initially
		*/
		this.focusFirst = true;
		/**
		* A function used to format a given result before display. This function should return a formatted string without any
		* HTML markup
		*/
		this.formatter = toString;
		/**
		* Event raised when user selects a particular result row
		*/
		this.selectEvent = new EventEmitter();
		this.activeChangeEvent = new EventEmitter();
	}
	hasActive() {
		return this.activeIdx > -1 && this.activeIdx < this.results.length;
	}
	getActive() {
		return this.results[this.activeIdx];
	}
	markActive(activeIdx) {
		this.activeIdx = activeIdx;
		this._activeChanged();
	}
	next() {
		if (this.activeIdx === this.results.length - 1) this.activeIdx = this.focusFirst ? (this.activeIdx + 1) % this.results.length : -1;
		else this.activeIdx++;
		this._activeChanged();
	}
	prev() {
		if (this.activeIdx < 0) this.activeIdx = this.results.length - 1;
		else if (this.activeIdx === 0) this.activeIdx = this.focusFirst ? this.results.length - 1 : -1;
		else this.activeIdx--;
		this._activeChanged();
	}
	resetActive() {
		this.activeIdx = this.focusFirst ? 0 : -1;
		this._activeChanged();
	}
	select(item) {
		this.selectEvent.emit(item);
	}
	ngOnInit() {
		this.resetActive();
	}
	_activeChanged() {
		this.activeChangeEvent.emit(this.activeIdx >= 0 ? this.id + "-" + this.activeIdx : void 0);
	}
};
_NgbTypeaheadWindow = NgbTypeaheadWindow;
_NgbTypeaheadWindow.ɵfac = function NgbTypeaheadWindow_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _NgbTypeaheadWindow)();
};
_NgbTypeaheadWindow.ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
	type: _NgbTypeaheadWindow,
	selectors: [["ngb-typeahead-window"]],
	hostAttrs: ["role", "listbox"],
	hostVars: 3,
	hostBindings: function NgbTypeaheadWindow_HostBindings(rf, ctx) {
		if (rf & 1) ɵɵlistener("mousedown", function NgbTypeaheadWindow_mousedown_HostBindingHandler($event) {
			return $event.preventDefault();
		});
		if (rf & 2) {
			ɵɵdomProperty("id", ctx.id);
			ɵɵclassMap("dropdown-menu show" + (ctx.popupClass ? " " + ctx.popupClass : ""));
		}
	},
	inputs: {
		id: "id",
		focusFirst: "focusFirst",
		results: "results",
		term: "term",
		formatter: "formatter",
		resultTemplate: "resultTemplate",
		popupClass: "popupClass"
	},
	outputs: {
		selectEvent: "select",
		activeChangeEvent: "activeChange"
	},
	exportAs: ["ngbTypeaheadWindow"],
	decls: 4,
	vars: 0,
	consts: [
		["rt", ""],
		[
			"type",
			"button",
			"role",
			"option",
			1,
			"dropdown-item",
			3,
			"id",
			"active"
		],
		[
			3,
			"result",
			"term"
		],
		[
			"type",
			"button",
			"role",
			"option",
			1,
			"dropdown-item",
			3,
			"mouseenter",
			"click",
			"id"
		],
		[
			3,
			"ngTemplateOutlet",
			"ngTemplateOutletContext"
		]
	],
	template: function NgbTypeaheadWindow_Template(rf, ctx) {
		if (rf & 1) {
			ɵɵtemplate(0, NgbTypeaheadWindow_ng_template_0_Template, 1, 2, "ng-template", null, 0, ɵɵtemplateRefExtractor);
			ɵɵrepeaterCreate(2, NgbTypeaheadWindow_For_3_Template, 2, 9, "button", 1, ɵɵrepeaterTrackByIndex);
		}
		if (rf & 2) {
			ɵɵadvance(2);
			ɵɵrepeater(ctx.results);
		}
	},
	dependencies: [NgbHighlight, NgTemplateOutlet],
	encapsulation: 2,
	changeDetection: 1
});
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbTypeaheadWindow, [{
		type: Component,
		args: [{
			selector: "ngb-typeahead-window",
			exportAs: "ngbTypeaheadWindow",
			imports: [NgbHighlight, NgTemplateOutlet],
			encapsulation: ViewEncapsulation.None,
			host: {
				"(mousedown)": "$event.preventDefault()",
				"[class]": "\"dropdown-menu show\" + (popupClass ? \" \" + popupClass : \"\")",
				role: "listbox",
				"[id]": "id"
			},
			template: `
		<ng-template #rt let-result="result" let-term="term" let-formatter="formatter">
			<ngb-highlight [result]="formatter(result)" [term]="term" />
		</ng-template>
		@for (result of results; track $index) {
			<button
				type="button"
				class="dropdown-item"
				role="option"
				[id]="id + '-' + $index"
				[class.active]="$index === activeIdx"
				(mouseenter)="markActive($index)"
				(click)="select(result)"
			>
				<ng-template
					[ngTemplateOutlet]="resultTemplate || rt"
					[ngTemplateOutletContext]="{ result: result, term: term, formatter: formatter }"
				/>
			</button>
		}
	`
		}]
	}], null, {
		id: [{ type: Input }],
		focusFirst: [{ type: Input }],
		results: [{ type: Input }],
		term: [{ type: Input }],
		formatter: [{ type: Input }],
		resultTemplate: [{ type: Input }],
		popupClass: [{ type: Input }],
		selectEvent: [{
			type: Output,
			args: ["select"]
		}],
		activeChangeEvent: [{
			type: Output,
			args: ["activeChange"]
		}]
	});
})();
var nextWindowId = 0;
/**
* A directive providing a simple way of creating powerful typeaheads from any text input.
*/
var NgbTypeahead = class {
	constructor() {
		this._nativeElement = inject(ElementRef).nativeElement;
		this._config = inject(NgbTypeaheadConfig);
		this._live = inject(Live);
		this._document = inject(DOCUMENT);
		this._ngZone = inject(NgZone);
		this._changeDetector = inject(ChangeDetectorRef);
		this._injector = inject(Injector);
		this._popupService = new PopupService(NgbTypeaheadWindow);
		this._positioning = ngbPositioning();
		this._subscription = null;
		this._closed$ = new Subject();
		this._inputValueBackup = null;
		this._inputValueForSelectOnExact = null;
		this._valueChanges$ = fromEvent(this._nativeElement, "input").pipe(map(($event) => $event.target.value));
		this._resubscribeTypeahead$ = new BehaviorSubject(null);
		this._windowRef = null;
		/**
		* The value for the `autocomplete` attribute for the `<input>` element.
		*
		* Defaults to `"off"` to disable the native browser autocomplete, but you can override it if necessary.
		*
		* @since 2.1.0
		*/
		this.autocomplete = "off";
		/**
		* A selector specifying the element the typeahead popup will be appended to.
		*
		* Currently only supports `"body"`.
		*/
		this.container = this._config.container;
		/**
		* If `true`, model values will not be restricted only to items selected from the popup.
		*/
		this.editable = this._config.editable;
		/**
		* If `true`, the first item in the result list will always stay focused while typing.
		*/
		this.focusFirst = this._config.focusFirst;
		/**
		* If `true`, automatically selects the item when it is the only one that exactly matches the user input
		*
		* @since 14.2.0
		*/
		this.selectOnExact = this._config.selectOnExact;
		/**
		* If `true`, will show the hint in the `<input>` when an item in the result list matches.
		*/
		this.showHint = this._config.showHint;
		/**
		* The preferred placement of the typeahead, among the [possible values](#/guides/positioning#api).
		*
		* The default order of preference is `"bottom-start bottom-end top-start top-end"`
		*
		* Please see the [positioning overview](#/positioning) for more details.
		*/
		this.placement = this._config.placement;
		/**
		* Allows to change default Popper options when positioning the typeahead.
		* Receives current popper options and returns modified ones.
		*
		* @since 13.1.0
		*/
		this.popperOptions = this._config.popperOptions;
		/**
		* An event emitted right before an item is selected from the result list.
		*
		* Event payload is of type [`NgbTypeaheadSelectItemEvent`](#/components/typeahead/api#NgbTypeaheadSelectItemEvent).
		*/
		this.selectItem = new EventEmitter();
		this.activeDescendant = null;
		this.popupId = `ngb-typeahead-${nextWindowId++}`;
		this._onTouched = () => {};
		this._onChange = (_) => {};
	}
	ngOnInit() {
		this._subscribeToUserInput();
	}
	ngOnChanges({ ngbTypeahead }) {
		if (ngbTypeahead && !ngbTypeahead.firstChange) {
			this._unsubscribeFromUserInput();
			this._subscribeToUserInput();
		}
	}
	ngOnDestroy() {
		this._closePopup();
		this._unsubscribeFromUserInput();
	}
	registerOnChange(fn) {
		this._onChange = fn;
	}
	registerOnTouched(fn) {
		this._onTouched = fn;
	}
	writeValue(value) {
		this._writeInputValue(this._formatItemForInput(value));
		if (this.showHint) this._inputValueBackup = value;
	}
	setDisabledState(isDisabled) {
		this._nativeElement.disabled = isDisabled;
	}
	/**
	* Dismisses typeahead popup window
	*/
	dismissPopup() {
		if (this.isPopupOpen()) {
			this._resubscribeTypeahead$.next(null);
			this._closePopup();
			if (this.showHint && this._inputValueBackup !== null) this._writeInputValue(this._inputValueBackup);
			this._changeDetector.markForCheck();
		}
	}
	/**
	* Returns true if the typeahead popup window is displayed
	*/
	isPopupOpen() {
		return this._windowRef != null;
	}
	handleBlur() {
		this._resubscribeTypeahead$.next(null);
		this._onTouched();
	}
	handleKeyDown(event) {
		if (!this.isPopupOpen()) return;
		switch (event.key) {
			case "ArrowDown":
				event.preventDefault();
				this._windowRef.instance.next();
				this._showHint();
				break;
			case "ArrowUp":
				event.preventDefault();
				this._windowRef.instance.prev();
				this._showHint();
				break;
			case "Enter":
			case "Tab": {
				const result = this._windowRef.instance.getActive();
				if (isDefined(result)) {
					event.preventDefault();
					event.stopPropagation();
					this._selectResult(result);
				}
				this._closePopup();
				break;
			}
		}
	}
	_openPopup() {
		if (!this.isPopupOpen()) {
			this._inputValueBackup = this._nativeElement.value;
			const { windowRef } = this._popupService.open();
			this._windowRef = windowRef;
			this._windowRef.setInput("id", this.popupId);
			this._windowRef.setInput("popupClass", this.popupClass);
			this._windowRef.instance.selectEvent.subscribe((result) => this._selectResultClosePopup(result));
			this._windowRef.instance.activeChangeEvent.subscribe((activeId) => this.activeDescendant = activeId);
			if (this.container === "body") {
				this._windowRef.location.nativeElement.style.zIndex = "1055";
				this._document.body.appendChild(this._windowRef.location.nativeElement);
			}
			this._changeDetector.markForCheck();
			this._ngZone.runOutsideAngular(() => {
				if (this._windowRef) {
					this._positioning.createPopper({
						hostElement: this._nativeElement,
						targetElement: this._windowRef.location.nativeElement,
						placement: this.placement,
						updatePopperOptions: (options) => this.popperOptions(addPopperOffset([0, 2])(options))
					});
					this._afterRenderRef = afterEveryRender({ mixedReadWrite: () => {
						this._positioning.update();
					} }, { injector: this._injector });
				}
			});
			ngbAutoClose(this._ngZone, this._document, "outside", () => this.dismissPopup(), this._closed$, [this._nativeElement, this._windowRef.location.nativeElement]);
		}
	}
	_closePopup() {
		this._popupService.close().subscribe(() => {
			var _this$_afterRenderRef;
			this._positioning.destroy();
			(_this$_afterRenderRef = this._afterRenderRef) === null || _this$_afterRenderRef === void 0 || _this$_afterRenderRef.destroy();
			this._closed$.next();
			this._windowRef = null;
			this.activeDescendant = null;
		});
	}
	_selectResult(result) {
		let defaultPrevented = false;
		this.selectItem.emit({
			item: result,
			preventDefault: () => {
				defaultPrevented = true;
			}
		});
		this._resubscribeTypeahead$.next(null);
		if (!defaultPrevented) {
			this.writeValue(result);
			this._onChange(result);
		}
	}
	_selectResultClosePopup(result) {
		this._selectResult(result);
		this._closePopup();
	}
	_showHint() {
		var _this$_windowRef;
		if (this.showHint && ((_this$_windowRef = this._windowRef) === null || _this$_windowRef === void 0 ? void 0 : _this$_windowRef.instance.hasActive()) && this._inputValueBackup != null) {
			const userInputLowerCase = this._inputValueBackup.toLowerCase();
			const formattedVal = this._formatItemForInput(this._windowRef.instance.getActive());
			if (userInputLowerCase === formattedVal.substring(0, this._inputValueBackup.length).toLowerCase()) {
				this._writeInputValue(this._inputValueBackup + formattedVal.substring(this._inputValueBackup.length));
				this._nativeElement["setSelectionRange"].apply(this._nativeElement, [this._inputValueBackup.length, formattedVal.length]);
			} else this._writeInputValue(formattedVal);
		}
	}
	_formatItemForInput(item) {
		return item != null && this.inputFormatter ? this.inputFormatter(item) : toString(item);
	}
	_writeInputValue(value) {
		this._nativeElement.value = toString(value);
	}
	_subscribeToUserInput() {
		const results$ = this._valueChanges$.pipe(tap((value) => {
			this._inputValueBackup = this.showHint ? value : null;
			this._inputValueForSelectOnExact = this.selectOnExact ? value : null;
			this._onChange(this.editable ? value : null);
		}), this.ngbTypeahead ? this.ngbTypeahead : () => of([]));
		this._subscription = this._resubscribeTypeahead$.pipe(switchMap(() => results$)).subscribe((results) => {
			if (!results || results.length === 0) this._closePopup();
			else if (this.selectOnExact && results.length === 1 && this._formatItemForInput(results[0]) === this._inputValueForSelectOnExact) {
				this._selectResult(results[0]);
				this._closePopup();
			} else {
				this._openPopup();
				this._windowRef.setInput("focusFirst", this.focusFirst);
				this._windowRef.setInput("results", results);
				this._windowRef.setInput("term", this._nativeElement.value);
				if (this.resultFormatter) this._windowRef.setInput("formatter", this.resultFormatter);
				if (this.resultTemplate) this._windowRef.setInput("resultTemplate", this.resultTemplate);
				this._windowRef.instance.resetActive();
				this._windowRef.changeDetectorRef.detectChanges();
				this._showHint();
			}
			const count = results ? results.length : 0;
			this._live.say(count === 0 ? "No results available" : `${count} result${count === 1 ? "" : "s"} available`);
		});
	}
	_unsubscribeFromUserInput() {
		if (this._subscription) this._subscription.unsubscribe();
		this._subscription = null;
	}
};
_NgbTypeahead = NgbTypeahead;
_NgbTypeahead.ɵfac = function NgbTypeahead_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _NgbTypeahead)();
};
_NgbTypeahead.ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
	type: _NgbTypeahead,
	selectors: [[
		"input",
		"ngbTypeahead",
		""
	]],
	hostAttrs: [
		"autocapitalize",
		"off",
		"autocorrect",
		"off",
		"role",
		"combobox"
	],
	hostVars: 7,
	hostBindings: function NgbTypeahead_HostBindings(rf, ctx) {
		if (rf & 1) ɵɵlistener("blur", function NgbTypeahead_blur_HostBindingHandler() {
			return ctx.handleBlur();
		})("keydown", function NgbTypeahead_keydown_HostBindingHandler($event) {
			return ctx.handleKeyDown($event);
		});
		if (rf & 2) {
			ɵɵdomProperty("autocomplete", ctx.autocomplete);
			ɵɵattribute("aria-autocomplete", ctx.showHint ? "both" : "list")("aria-activedescendant", ctx.activeDescendant)("aria-controls", ctx.isPopupOpen() ? ctx.popupId : null)("aria-expanded", ctx.isPopupOpen());
			ɵɵclassProp("open", ctx.isPopupOpen());
		}
	},
	inputs: {
		autocomplete: "autocomplete",
		container: "container",
		editable: "editable",
		focusFirst: "focusFirst",
		inputFormatter: "inputFormatter",
		ngbTypeahead: "ngbTypeahead",
		resultFormatter: "resultFormatter",
		resultTemplate: "resultTemplate",
		selectOnExact: "selectOnExact",
		showHint: "showHint",
		placement: "placement",
		popperOptions: "popperOptions",
		popupClass: "popupClass"
	},
	outputs: { selectItem: "selectItem" },
	exportAs: ["ngbTypeahead"],
	features: [ɵɵProvidersFeature([{
		provide: NG_VALUE_ACCESSOR,
		useExisting: forwardRef(() => _NgbTypeahead),
		multi: true
	}]), ɵɵNgOnChangesFeature]
});
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbTypeahead, [{
		type: Directive,
		args: [{
			selector: "input[ngbTypeahead]",
			exportAs: "ngbTypeahead",
			host: {
				"(blur)": "handleBlur()",
				"[class.open]": "isPopupOpen()",
				"(keydown)": "handleKeyDown($event)",
				"[autocomplete]": "autocomplete",
				autocapitalize: "off",
				autocorrect: "off",
				role: "combobox",
				"[attr.aria-autocomplete]": "showHint ? \"both\" : \"list\"",
				"[attr.aria-activedescendant]": "activeDescendant",
				"[attr.aria-controls]": "isPopupOpen() ? popupId : null",
				"[attr.aria-expanded]": "isPopupOpen()"
			},
			providers: [{
				provide: NG_VALUE_ACCESSOR,
				useExisting: forwardRef(() => NgbTypeahead),
				multi: true
			}]
		}]
	}], null, {
		autocomplete: [{ type: Input }],
		container: [{ type: Input }],
		editable: [{ type: Input }],
		focusFirst: [{ type: Input }],
		inputFormatter: [{ type: Input }],
		ngbTypeahead: [{ type: Input }],
		resultFormatter: [{ type: Input }],
		resultTemplate: [{ type: Input }],
		selectOnExact: [{ type: Input }],
		showHint: [{ type: Input }],
		placement: [{ type: Input }],
		popperOptions: [{ type: Input }],
		popupClass: [{ type: Input }],
		selectItem: [{ type: Output }]
	});
})();
var NgbTypeaheadModule = class {};
_NgbTypeaheadModule = NgbTypeaheadModule;
_NgbTypeaheadModule.ɵfac = function NgbTypeaheadModule_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _NgbTypeaheadModule)();
};
_NgbTypeaheadModule.ɵmod = /* @__PURE__ */ ɵɵdefineNgModule({
	type: _NgbTypeaheadModule,
	imports: [NgbHighlight, NgbTypeahead],
	exports: [NgbHighlight, NgbTypeahead]
});
_NgbTypeaheadModule.ɵinj = /* @__PURE__ */ ɵɵdefineInjector({});
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbTypeaheadModule, [{
		type: NgModule,
		args: [{
			imports: [NgbHighlight, NgbTypeahead],
			exports: [NgbHighlight, NgbTypeahead]
		}]
	}], null, null);
})();
//#endregion
export { NgbHighlight, NgbTypeahead, NgbTypeaheadConfig, NgbTypeaheadModule };
