import { $n as Output, Cs as ɵɵrepeaterTrackByIdentity, Do as ɵɵgetCurrentView, Dr as ViewEncapsulation, Ea as ɵɵcontentQuery, Fn as Injectable, Gs as ɵɵtextInterpolate, Hs as ɵɵtemplate, In as Input, Ks as ɵɵtextInterpolate1, Ll as ɵɵresetView, Ol as ɵɵdefineInjectable, Rl as ɵɵrestoreView, Sc as EventEmitter, Ss as ɵɵrepeaterCreate, Us as ɵɵtemplateRefExtractor, Wi as setClassMetadata, Ws as ɵɵtext, Xo as ɵɵloadQuery, Yo as ɵɵlistener, Zo as ɵɵnextContext, al as forwardRef, an as ChangeDetectionStrategy, bo as ɵɵelementEnd, bs as ɵɵreference, cn as Component, da as ɵɵadvance, i as ContentChild, kl as ɵɵdefineInjector, la as ɵɵNgOnChangesFeature, ll as inject, mo as ɵɵdomProperty, os as ɵɵproperty, qn as NgModule, r as ChangeDetectorRef, ro as ɵɵdefineNgModule, to as ɵɵdefineComponent, ua as ɵɵProvidersFeature, vr as TemplateRef, vs as ɵɵqueryRefresh, xo as ɵɵelementStart, xs as ɵɵrepeater, ya as ɵɵattribute, zs as ɵɵstyleProp } from "./core-CpxyNpZz.js";
import { M as NG_VALUE_ACCESSOR } from "./forms-Dsvknx6z.js";
import { l as getValueInRange } from "./_ngb-ngbootstrap-utilities-NGMx8cil.js";
import { Y as NgTemplateOutlet } from "./common-CILBZQ4R.js";
//#region node_modules/@ng-bootstrap/ng-bootstrap/fesm2022/ng-bootstrap-ng-bootstrap-rating.mjs
var _NgbRatingConfig;
var _NgbRating;
var _NgbRatingModule;
/**
* A configuration service for the [`NgbRating`](#/components/rating/api#NgbRating) component.
*
* You can inject this service, typically in your root component, and customize the values of its properties in
* order to provide default values for all the ratings used in the application.
*/
function NgbRating_ng_template_0_Template(rf, ctx) {
	if (rf & 1) ɵɵtext(0);
	if (rf & 2) {
		const fill_r1 = ctx.fill;
		ɵɵtextInterpolate(fill_r1 === 100 ? "★" : "☆");
	}
}
function NgbRating_For_3_ng_template_3_Template(rf, ctx) {}
function NgbRating_For_3_Template(rf, ctx) {
	if (rf & 1) {
		const _r2 = ɵɵgetCurrentView();
		ɵɵelementStart(0, "span", 1);
		ɵɵtext(1);
		ɵɵelementEnd();
		ɵɵelementStart(2, "span", 2);
		ɵɵlistener("mouseenter", function NgbRating_For_3_Template_span_mouseenter_2_listener() {
			const ɵ$index_4_r3 = ɵɵrestoreView(_r2).$index;
			return ɵɵresetView(ɵɵnextContext().enter(ɵ$index_4_r3 + 1));
		})("click", function NgbRating_For_3_Template_span_click_2_listener() {
			const ɵ$index_4_r3 = ɵɵrestoreView(_r2).$index;
			return ɵɵresetView(ɵɵnextContext().handleClick(ɵ$index_4_r3 + 1));
		});
		ɵɵtemplate(3, NgbRating_For_3_ng_template_3_Template, 0, 0, "ng-template", 3);
		ɵɵelementEnd();
	}
	if (rf & 2) {
		const ɵ$index_4_r3 = ctx.$index;
		const ctx_r3 = ɵɵnextContext();
		const t_r5 = ɵɵreference(1);
		ɵɵadvance();
		ɵɵtextInterpolate1("(", ɵ$index_4_r3 < ctx_r3.nextRate ? "*" : " ", ")");
		ɵɵadvance();
		ɵɵstyleProp("cursor", ctx_r3.isInteractive() ? "pointer" : "default");
		ɵɵadvance();
		ɵɵproperty("ngTemplateOutlet", ctx_r3.starTemplate || ctx_r3.starTemplateFromContent || t_r5)("ngTemplateOutletContext", ctx_r3.contexts[ɵ$index_4_r3]);
	}
}
var NgbRatingConfig = class {
	constructor() {
		this.max = 10;
		this.readonly = false;
		this.resettable = false;
		this.tabindex = 0;
	}
};
_NgbRatingConfig = NgbRatingConfig;
_NgbRatingConfig.ɵfac = function NgbRatingConfig_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _NgbRatingConfig)();
};
_NgbRatingConfig.ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
	token: _NgbRatingConfig,
	factory: _NgbRatingConfig.ɵfac,
	providedIn: "root"
});
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbRatingConfig, [{
		type: Injectable,
		args: [{ providedIn: "root" }]
	}], null, null);
})();
/**
* A directive that helps visualising and interacting with a star rating bar.
*/
var NgbRating = class {
	constructor() {
		this.contexts = [];
		this._config = inject(NgbRatingConfig);
		this._changeDetectorRef = inject(ChangeDetectorRef);
		/**
		* If `true`, the rating can't be changed or focused.
		*/
		this.disabled = false;
		/**
		* The maximal rating that can be given.
		*/
		this.max = this._config.max;
		/**
		* If `true`, the rating can't be changed.
		*/
		this.readonly = this._config.readonly;
		/**
		* If `true`, the rating can be reset to `0` by mouse clicking currently set rating.
		*/
		this.resettable = this._config.resettable;
		/**
		* Allows setting a custom rating tabindex.
		* If the component is disabled, `tabindex` will still be set to `-1`.
		*
		* @since 13.1.0
		*/
		this.tabindex = this._config.tabindex;
		/**
		* An event emitted when the user is hovering over a given rating.
		*
		* Event payload equals to the rating being hovered over.
		*/
		this.hover = new EventEmitter();
		/**
		* An event emitted when the user stops hovering over a given rating.
		*
		* Event payload equals to the rating of the last item being hovered over.
		*/
		this.leave = new EventEmitter();
		/**
		* An event emitted when the rating is changed.
		*
		* Event payload equals to the newly selected rating.
		*/
		this.rateChange = new EventEmitter(true);
		this.onChange = (_) => {};
		this.onTouched = () => {};
	}
	/**
	* Allows to provide a function to set a custom aria-valuetext
	*
	* @since 14.1.0
	*/
	ariaValueText(current, max) {
		return `${current} out of ${max}`;
	}
	isInteractive() {
		return !this.readonly && !this.disabled;
	}
	enter(value) {
		if (this.isInteractive()) this._updateState(value);
		this.hover.emit(value);
	}
	handleBlur() {
		this.onTouched();
	}
	handleClick(value) {
		if (this.isInteractive()) this.update(this.resettable && this.rate === value ? 0 : value);
	}
	handleKeyDown(event) {
		switch (event.key) {
			case "ArrowDown":
			case "ArrowLeft":
				this.update(this.rate - 1);
				break;
			case "ArrowUp":
			case "ArrowRight":
				this.update(this.rate + 1);
				break;
			case "Home":
				this.update(0);
				break;
			case "End":
				this.update(this.max);
				break;
			default: return;
		}
		event.preventDefault();
	}
	ngOnChanges(changes) {
		if (changes["rate"]) this.update(this.rate);
		if (changes["max"]) this._updateMax();
	}
	ngOnInit() {
		this._setupContexts();
		this._updateState(this.rate);
	}
	registerOnChange(fn) {
		this.onChange = fn;
	}
	registerOnTouched(fn) {
		this.onTouched = fn;
	}
	reset() {
		this.leave.emit(this.nextRate);
		this._updateState(this.rate);
	}
	setDisabledState(isDisabled) {
		this.disabled = isDisabled;
	}
	update(value, internalChange = true) {
		const newRate = getValueInRange(value, this.max, 0);
		if (this.isInteractive() && this.rate !== newRate) {
			this.rate = newRate;
			this.rateChange.emit(this.rate);
		}
		if (internalChange) {
			this.onChange(this.rate);
			this.onTouched();
		}
		this._updateState(this.rate);
	}
	writeValue(value) {
		this.update(value, false);
		this._changeDetectorRef.markForCheck();
	}
	_updateState(nextValue) {
		this.nextRate = nextValue;
		this.contexts.forEach((context, index) => context.fill = Math.round(getValueInRange(nextValue - index, 1, 0) * 100));
	}
	_updateMax() {
		if (this.max > 0) {
			this._setupContexts();
			this.update(this.rate);
		}
	}
	_setupContexts() {
		this.contexts = Array.from({ length: this.max }, (v, k) => ({
			fill: 0,
			index: k
		}));
	}
};
_NgbRating = NgbRating;
_NgbRating.ɵfac = function NgbRating_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _NgbRating)();
};
_NgbRating.ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
	type: _NgbRating,
	selectors: [["ngb-rating"]],
	contentQueries: function NgbRating_ContentQueries(rf, ctx, dirIndex) {
		if (rf & 1) ɵɵcontentQuery(dirIndex, TemplateRef, 5);
		if (rf & 2) {
			let _t;
			ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.starTemplateFromContent = _t.first);
		}
	},
	hostAttrs: [
		"role",
		"slider",
		"aria-valuemin",
		"0",
		1,
		"d-inline-flex"
	],
	hostVars: 6,
	hostBindings: function NgbRating_HostBindings(rf, ctx) {
		if (rf & 1) ɵɵlistener("blur", function NgbRating_blur_HostBindingHandler() {
			return ctx.handleBlur();
		})("keydown", function NgbRating_keydown_HostBindingHandler($event) {
			return ctx.handleKeyDown($event);
		})("mouseleave", function NgbRating_mouseleave_HostBindingHandler() {
			return ctx.reset();
		});
		if (rf & 2) {
			ɵɵdomProperty("tabIndex", ctx.disabled ? -1 : ctx.tabindex);
			ɵɵattribute("aria-valuemax", ctx.max)("aria-valuenow", ctx.nextRate)("aria-valuetext", ctx.ariaValueText(ctx.nextRate, ctx.max))("aria-readonly", ctx.readonly && !ctx.disabled ? true : null)("aria-disabled", ctx.disabled ? true : null);
		}
	},
	inputs: {
		disabled: "disabled",
		max: "max",
		rate: "rate",
		readonly: "readonly",
		resettable: "resettable",
		starTemplate: "starTemplate",
		tabindex: "tabindex",
		ariaValueText: "ariaValueText"
	},
	outputs: {
		hover: "hover",
		leave: "leave",
		rateChange: "rateChange"
	},
	features: [ɵɵProvidersFeature([{
		provide: NG_VALUE_ACCESSOR,
		useExisting: forwardRef(() => _NgbRating),
		multi: true
	}]), ɵɵNgOnChangesFeature],
	decls: 4,
	vars: 0,
	consts: [
		["t", ""],
		[1, "visually-hidden"],
		[
			3,
			"mouseenter",
			"click"
		],
		[
			3,
			"ngTemplateOutlet",
			"ngTemplateOutletContext"
		]
	],
	template: function NgbRating_Template(rf, ctx) {
		if (rf & 1) {
			ɵɵtemplate(0, NgbRating_ng_template_0_Template, 1, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor);
			ɵɵrepeaterCreate(2, NgbRating_For_3_Template, 4, 5, null, null, ɵɵrepeaterTrackByIdentity);
		}
		if (rf & 2) {
			ɵɵadvance(2);
			ɵɵrepeater(ctx.contexts);
		}
	},
	dependencies: [NgTemplateOutlet],
	encapsulation: 2
});
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbRating, [{
		type: Component,
		args: [{
			selector: "ngb-rating",
			imports: [NgTemplateOutlet],
			changeDetection: ChangeDetectionStrategy.OnPush,
			encapsulation: ViewEncapsulation.None,
			host: {
				class: "d-inline-flex",
				"[tabindex]": "disabled ? -1 : tabindex",
				role: "slider",
				"aria-valuemin": "0",
				"[attr.aria-valuemax]": "max",
				"[attr.aria-valuenow]": "nextRate",
				"[attr.aria-valuetext]": "ariaValueText(nextRate, max)",
				"[attr.aria-readonly]": "readonly && !disabled ? true : null",
				"[attr.aria-disabled]": "disabled ? true : null",
				"(blur)": "handleBlur()",
				"(keydown)": "handleKeyDown($event)",
				"(mouseleave)": "reset()"
			},
			template: `
		<ng-template #t let-fill="fill">{{ fill === 100 ? '&#9733;' : '&#9734;' }}</ng-template>
		@for (_ of contexts; track _; let index = $index) {
			<span class="visually-hidden">({{ index < nextRate ? '*' : ' ' }})</span>
			<span
				(mouseenter)="enter(index + 1)"
				(click)="handleClick(index + 1)"
				[style.cursor]="isInteractive() ? 'pointer' : 'default'"
			>
				<ng-template
					[ngTemplateOutlet]="starTemplate || starTemplateFromContent || t"
					[ngTemplateOutletContext]="contexts[index]"
				/>
			</span>
		}
	`,
			providers: [{
				provide: NG_VALUE_ACCESSOR,
				useExisting: forwardRef(() => NgbRating),
				multi: true
			}]
		}]
	}], null, {
		disabled: [{ type: Input }],
		max: [{ type: Input }],
		rate: [{ type: Input }],
		readonly: [{ type: Input }],
		resettable: [{ type: Input }],
		starTemplate: [{ type: Input }],
		starTemplateFromContent: [{
			type: ContentChild,
			args: [TemplateRef, { static: false }]
		}],
		tabindex: [{ type: Input }],
		ariaValueText: [{ type: Input }],
		hover: [{ type: Output }],
		leave: [{ type: Output }],
		rateChange: [{ type: Output }]
	});
})();
var NgbRatingModule = class {};
_NgbRatingModule = NgbRatingModule;
_NgbRatingModule.ɵfac = function NgbRatingModule_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _NgbRatingModule)();
};
_NgbRatingModule.ɵmod = /* @__PURE__ */ ɵɵdefineNgModule({
	type: _NgbRatingModule,
	imports: [NgbRating],
	exports: [NgbRating]
});
_NgbRatingModule.ɵinj = /* @__PURE__ */ ɵɵdefineInjector({});
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbRatingModule, [{
		type: NgModule,
		args: [{
			imports: [NgbRating],
			exports: [NgbRating]
		}]
	}], null, null);
})();
//#endregion
export { NgbRating, NgbRatingConfig, NgbRatingModule };
