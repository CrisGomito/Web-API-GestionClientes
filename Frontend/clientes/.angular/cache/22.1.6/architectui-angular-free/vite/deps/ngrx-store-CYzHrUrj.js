import { $ as isDevMode, Bt as computed, Fn as Injectable, Hl as _objectSpread2, Lc as NgZone, Ml as ɵɵinject, Oc as InjectionToken, Ol as ɵɵdefineInjectable, Oo as ɵɵgetInheritedFactory, Pn as Inject, Qn as Optional, Wi as setClassMetadata, hl as makeEnvironmentProviders, kc as Injector, kl as ɵɵdefineInjector, ll as inject, qn as NgModule, qt as untracked, rl as effect, ro as ɵɵdefineNgModule, yl as provideEnvironmentInitializer } from "./core-CpxyNpZz.js";
import { An as Observable, Cn as AsyncScheduler, Dn as Subject, En as BehaviorSubject, Fn as __extends, G as pluck, N as scan, bt as distinctUntilChanged, gn as observeOn, ln as map, o as withLatestFrom, wn as AsyncAction } from "./operators-BOtrYIkv.js";
import { n as toSignal } from "./rxjs-interop-C9YowOKx.js";
//#region node_modules/rxjs/dist/esm5/internal/scheduler/QueueAction.js
var QueueAction = function(_super) {
	__extends(QueueAction, _super);
	function QueueAction(scheduler, work) {
		var _this = _super.call(this, scheduler, work) || this;
		_this.scheduler = scheduler;
		_this.work = work;
		return _this;
	}
	QueueAction.prototype.schedule = function(state, delay) {
		if (delay === void 0) delay = 0;
		if (delay > 0) return _super.prototype.schedule.call(this, state, delay);
		this.delay = delay;
		this.state = state;
		this.scheduler.flush(this);
		return this;
	};
	QueueAction.prototype.execute = function(state, delay) {
		return delay > 0 || this.closed ? _super.prototype.execute.call(this, state, delay) : this._execute(state, delay);
	};
	QueueAction.prototype.requestAsyncId = function(scheduler, id, delay) {
		if (delay === void 0) delay = 0;
		if (delay != null && delay > 0 || delay == null && this.delay > 0) return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
		scheduler.flush(this);
		return 0;
	};
	return QueueAction;
}(AsyncAction);
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/scheduler/queue.js
var queueScheduler = new (function(_super) {
	__extends(QueueScheduler, _super);
	function QueueScheduler() {
		return _super !== null && _super.apply(this, arguments) || this;
	}
	return QueueScheduler;
}(AsyncScheduler))(QueueAction);
//#endregion
//#region node_modules/@ngrx/store/fesm2022/ngrx-store.mjs
var _ActionsSubject;
var _ReducerManager;
var _ScannedActionsSubject;
var _State;
var _Store;
var _StoreRootModule;
var _StoreFeatureModule;
var _StoreModule;
var REGISTERED_ACTION_TYPES = {};
/**
* @description
* Creates a configured `Creator` function that, when called, returns an object in the shape of the `Action` interface.
*
* Action creators reduce the explicitness of class-based action creators.
*
* @param type Describes the action that will be dispatched
* @param config Additional metadata needed for the handling of the action.  See {@link createAction#usage-notes Usage Notes}.
*
* @usageNotes
*
* **Declaring an action creator**
*
* Without additional metadata:
* ```ts
* export const increment = createAction('[Counter] Increment');
* ```
* With additional metadata:
* ```ts
* export const loginSuccess = createAction(
*   '[Auth/API] Login Success',
*   props<{ user: User }>()
* );
* ```
* With a function:
* ```ts
* export const loginSuccess = createAction(
*   '[Auth/API] Login Success',
*   (response: Response) => response.user
* );
* ```
*
* **Dispatching an action**
*
* Without additional metadata:
* ```ts
* store.dispatch(increment());
* ```
* With additional metadata:
* ```ts
* store.dispatch(loginSuccess({ user: newUser }));
* ```
*
* **Referencing an action in a reducer**
*
* Using a switch statement:
* ```ts
* switch (action.type) {
*   // ...
*   case AuthApiActions.loginSuccess.type: {
*     return {
*       ...state,
*       user: action.user
*     };
*   }
* }
* ```
* Using a reducer creator:
* ```ts
* on(AuthApiActions.loginSuccess, (state, { user }) => ({ ...state, user }))
* ```
*
*  **Referencing an action in an effect**
* ```ts
* effectName$ = createEffect(
*   () => this.actions$.pipe(
*     ofType(AuthApiActions.loginSuccess),
*     // ...
*   )
* );
* ```
*/
function createAction(type, config) {
	REGISTERED_ACTION_TYPES[type] = (REGISTERED_ACTION_TYPES[type] || 0) + 1;
	if (typeof config === "function") return defineType(type, (...args) => _objectSpread2(_objectSpread2({}, config(...args)), {}, { type }));
	switch (config ? config._as : "empty") {
		case "empty": return defineType(type, () => ({ type }));
		case "props": return defineType(type, (props) => _objectSpread2(_objectSpread2({}, props), {}, { type }));
		default: throw new Error("Unexpected config.");
	}
}
function props() {
	return {
		_as: "props",
		_p: void 0
	};
}
function union(creators) {}
function defineType(type, creator) {
	return Object.defineProperty(creator, "type", {
		value: type,
		writable: false
	});
}
function capitalize(text) {
	return text.charAt(0).toUpperCase() + text.substring(1);
}
function uncapitalize(text) {
	return text.charAt(0).toLowerCase() + text.substring(1);
}
function assertDefined(value, name) {
	if (value === null || value === void 0) throw new Error(`${name} must be defined.`);
}
/**
* @description
* A function that creates a group of action creators with the same source.
*
* @param config An object that contains a source and dictionary of events.
* An event is a key-value pair of an event name and event props.
* @returns A dictionary of action creators.
* The name of each action creator is created by camel casing the event name.
* The type of each action is created using the "[Source] Event Name" pattern.
*
* @usageNotes
*
* ```ts
* const authApiActions = createActionGroup({
*   source: 'Auth API',
*   events: {
*     // defining events with payload using the `props` function
*     'Login Success': props<{ userId: number; token: string }>(),
*     'Login Failure': props<{ error: string }>(),
*
*     // defining an event without payload using the `emptyProps` function
*     'Logout Success': emptyProps(),
*
*     // defining an event with payload using the props factory
*     'Logout Failure': (error: Error) => ({ error }),
*   },
* });
*
* // action type: "[Auth API] Login Success"
* authApiActions.loginSuccess({ userId: 10, token: 'ngrx' });
*
* // action type: "[Auth API] Login Failure"
* authApiActions.loginFailure({ error: 'Login Failure!' });
*
* // action type: "[Auth API] Logout Success"
* authApiActions.logoutSuccess();
*
* // action type: "[Auth API] Logout Failure";
* authApiActions.logoutFailure(new Error('Logout Failure!'));
* ```
*/
function createActionGroup(config) {
	const { source, events } = config;
	return Object.keys(events).reduce((actionGroup, eventName) => _objectSpread2(_objectSpread2({}, actionGroup), {}, { [toActionName(eventName)]: createAction(toActionType(source, eventName), events[eventName]) }), {});
}
function emptyProps() {
	return props();
}
function toActionName(eventName) {
	return eventName.trim().split(" ").map((word, i) => i === 0 ? uncapitalize(word) : capitalize(word)).join("");
}
function toActionType(source, eventName) {
	return `[${source}] ${eventName}`;
}
var INIT = "@ngrx/store/init";
var ActionsSubject = class extends BehaviorSubject {
	constructor() {
		super({ type: INIT });
	}
	next(action) {
		if (typeof action === "function") throw new TypeError(`
        Dispatch expected an object, instead it received a function.
        If you're using the createAction function, make sure to invoke the function
        before dispatching the action. For example, someAction should be someAction().`);
		else if (typeof action === "undefined") throw new TypeError(`Actions must be objects`);
		else if (typeof action.type === "undefined") throw new TypeError(`Actions must have a type property`);
		super.next(action);
	}
	complete() {}
	ngOnDestroy() {
		super.complete();
	}
};
_ActionsSubject = ActionsSubject;
_ActionsSubject.ɵfac = function ActionsSubject_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _ActionsSubject)();
};
_ActionsSubject.ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
	token: _ActionsSubject,
	factory: _ActionsSubject.ɵfac
});
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ActionsSubject, [{ type: Injectable }], () => [], null);
})();
var ACTIONS_SUBJECT_PROVIDERS = [ActionsSubject];
var _ROOT_STORE_GUARD = new InjectionToken("@ngrx/store Internal Root Guard");
var _INITIAL_STATE = new InjectionToken("@ngrx/store Internal Initial State");
var INITIAL_STATE = new InjectionToken("@ngrx/store Initial State");
var REDUCER_FACTORY = new InjectionToken("@ngrx/store Reducer Factory");
var _REDUCER_FACTORY = new InjectionToken("@ngrx/store Internal Reducer Factory Provider");
var INITIAL_REDUCERS = new InjectionToken("@ngrx/store Initial Reducers");
var _INITIAL_REDUCERS = new InjectionToken("@ngrx/store Internal Initial Reducers");
var STORE_FEATURES = new InjectionToken("@ngrx/store Store Features");
var _STORE_REDUCERS = new InjectionToken("@ngrx/store Internal Store Reducers");
var _FEATURE_REDUCERS = new InjectionToken("@ngrx/store Internal Feature Reducers");
var _FEATURE_CONFIGS = new InjectionToken("@ngrx/store Internal Feature Configs");
var _STORE_FEATURES = new InjectionToken("@ngrx/store Internal Store Features");
var _FEATURE_REDUCERS_TOKEN = new InjectionToken("@ngrx/store Internal Feature Reducers Token");
var FEATURE_REDUCERS = new InjectionToken("@ngrx/store Feature Reducers");
/**
* User-defined meta reducers from StoreModule.forRoot()
*/
var USER_PROVIDED_META_REDUCERS = new InjectionToken("@ngrx/store User Provided Meta Reducers");
/**
* Meta reducers defined either internally by @ngrx/store or by library authors
*/
var META_REDUCERS = new InjectionToken("@ngrx/store Meta Reducers");
/**
* Concats the user provided meta reducers and the meta reducers provided on the multi
* injection token
*/
var _RESOLVED_META_REDUCERS = new InjectionToken("@ngrx/store Internal Resolved Meta Reducers");
/**
* Runtime checks defined by the user via an InjectionToken
* Defaults to `_USER_RUNTIME_CHECKS`
*/
var USER_RUNTIME_CHECKS = new InjectionToken("@ngrx/store User Runtime Checks Config");
/**
* Runtime checks defined by the user via forRoot()
*/
var _USER_RUNTIME_CHECKS = new InjectionToken("@ngrx/store Internal User Runtime Checks Config");
/**
* Runtime checks currently in use
*/
var ACTIVE_RUNTIME_CHECKS = new InjectionToken("@ngrx/store Internal Runtime Checks");
var _ACTION_TYPE_UNIQUENESS_CHECK = new InjectionToken("@ngrx/store Check if Action types are unique");
/**
* InjectionToken that registers the global Store.
* Mainly used to provide a hook that can be injected
* to ensure the root state is loaded before something
* that depends on it.
*/
var ROOT_STORE_PROVIDER = new InjectionToken("@ngrx/store Root Store Provider");
/**
* InjectionToken that registers feature states.
* Mainly used to provide a hook that can be injected
* to ensure feature state is loaded before something
* that depends on it.
*/
var FEATURE_STATE_PROVIDER = new InjectionToken("@ngrx/store Feature State Provider");
/**
* @description
* Combines reducers for individual features into a single reducer.
*
* You can use this function to delegate handling of state transitions to multiple reducers, each acting on their
* own sub-state within the root state.
*
* @param reducers An object mapping keys of the root state to their corresponding feature reducer.
* @param initialState Provides a state value if the current state is `undefined`, as it is initially.
* @returns A reducer function.
*
* @usageNotes
*
* **Example combining two feature reducers into one "root" reducer**
*
* ```ts
* export const reducer = combineReducers({
*   featureA: featureAReducer,
*   featureB: featureBReducer
* });
* ```
*
* You can also override the initial states of the sub-features:
* ```ts
* export const reducer = combineReducers({
*   featureA: featureAReducer,
*   featureB: featureBReducer
* }, {
*   featureA: { counterA: 13 },
*   featureB: { counterB: 37 }
* });
* ```
*/
function combineReducers(reducers, initialState = {}) {
	const reducerKeys = Object.keys(reducers);
	const finalReducers = {};
	for (let i = 0; i < reducerKeys.length; i++) {
		const key = reducerKeys[i];
		if (typeof reducers[key] === "function") finalReducers[key] = reducers[key];
	}
	const finalReducerKeys = Object.keys(finalReducers);
	return function combination(state, action) {
		state = state === void 0 ? initialState : state;
		let hasChanged = false;
		const nextState = {};
		for (let i = 0; i < finalReducerKeys.length; i++) {
			const key = finalReducerKeys[i];
			const reducer = finalReducers[key];
			const previousStateForKey = state[key];
			const nextStateForKey = reducer(previousStateForKey, action);
			nextState[key] = nextStateForKey;
			hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
		}
		return hasChanged ? nextState : state;
	};
}
function omit(object, keyToRemove) {
	return Object.keys(object).filter((key) => key !== keyToRemove).reduce((result, key) => Object.assign(result, { [key]: object[key] }), {});
}
function compose(...functions) {
	return function(arg) {
		if (functions.length === 0) return arg;
		const last = functions[functions.length - 1];
		return functions.slice(0, -1).reduceRight((composed, fn) => fn(composed), last(arg));
	};
}
function createReducerFactory(reducerFactory, metaReducers) {
	if (Array.isArray(metaReducers) && metaReducers.length > 0) reducerFactory = compose.apply(null, [...metaReducers, reducerFactory]);
	return (reducers, initialState) => {
		const reducer = reducerFactory(reducers);
		return (state, action) => {
			state = state === void 0 ? initialState : state;
			return reducer(state, action);
		};
	};
}
function createFeatureReducerFactory(metaReducers) {
	const reducerFactory = Array.isArray(metaReducers) && metaReducers.length > 0 ? compose(...metaReducers) : (r) => r;
	return (reducer, initialState) => {
		reducer = reducerFactory(reducer);
		return (state, action) => {
			state = state === void 0 ? initialState : state;
			return reducer(state, action);
		};
	};
}
var ReducerObservable = class extends Observable {};
var ReducerManagerDispatcher = class extends ActionsSubject {};
var UPDATE = "@ngrx/store/update-reducers";
var ReducerManager = class extends BehaviorSubject {
	get currentReducers() {
		return this.reducers;
	}
	constructor(dispatcher, initialState, reducers, reducerFactory) {
		super(reducerFactory(reducers, initialState));
		this.dispatcher = dispatcher;
		this.initialState = initialState;
		this.reducers = reducers;
		this.reducerFactory = reducerFactory;
	}
	addFeature(feature) {
		this.addFeatures([feature]);
	}
	addFeatures(features) {
		const reducers = features.reduce((reducerDict, { reducers, reducerFactory, metaReducers, initialState, key }) => {
			reducerDict[key] = typeof reducers === "function" ? createFeatureReducerFactory(metaReducers)(reducers, initialState) : createReducerFactory(reducerFactory, metaReducers)(reducers, initialState);
			return reducerDict;
		}, {});
		this.addReducers(reducers);
	}
	removeFeature(feature) {
		this.removeFeatures([feature]);
	}
	removeFeatures(features) {
		this.removeReducers(features.map((p) => p.key));
	}
	addReducer(key, reducer) {
		this.addReducers({ [key]: reducer });
	}
	addReducers(reducers) {
		this.reducers = _objectSpread2(_objectSpread2({}, this.reducers), reducers);
		this.updateReducers(Object.keys(reducers));
	}
	removeReducer(featureKey) {
		this.removeReducers([featureKey]);
	}
	removeReducers(featureKeys) {
		featureKeys.forEach((key) => {
			this.reducers = omit(this.reducers, key);
		});
		this.updateReducers(featureKeys);
	}
	updateReducers(featureKeys) {
		this.next(this.reducerFactory(this.reducers, this.initialState));
		this.dispatcher.next({
			type: UPDATE,
			features: featureKeys
		});
	}
	ngOnDestroy() {
		this.complete();
	}
};
_ReducerManager = ReducerManager;
_ReducerManager.ɵfac = function ReducerManager_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _ReducerManager)(ɵɵinject(ReducerManagerDispatcher), ɵɵinject(INITIAL_STATE), ɵɵinject(INITIAL_REDUCERS), ɵɵinject(REDUCER_FACTORY));
};
_ReducerManager.ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
	token: _ReducerManager,
	factory: _ReducerManager.ɵfac
});
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReducerManager, [{ type: Injectable }], () => [
		{ type: ReducerManagerDispatcher },
		{
			type: void 0,
			decorators: [{
				type: Inject,
				args: [INITIAL_STATE]
			}]
		},
		{
			type: void 0,
			decorators: [{
				type: Inject,
				args: [INITIAL_REDUCERS]
			}]
		},
		{
			type: void 0,
			decorators: [{
				type: Inject,
				args: [REDUCER_FACTORY]
			}]
		}
	], null);
})();
var REDUCER_MANAGER_PROVIDERS = [
	ReducerManager,
	{
		provide: ReducerObservable,
		useExisting: ReducerManager
	},
	{
		provide: ReducerManagerDispatcher,
		useExisting: ActionsSubject
	}
];
var ScannedActionsSubject = class extends Subject {
	ngOnDestroy() {
		this.complete();
	}
};
_ScannedActionsSubject = ScannedActionsSubject;
_ScannedActionsSubject.ɵfac = /* @__PURE__ */ (() => {
	let ɵScannedActionsSubject_BaseFactory;
	return function ScannedActionsSubject_Factory(__ngFactoryType__) {
		return (ɵScannedActionsSubject_BaseFactory || (ɵScannedActionsSubject_BaseFactory = ɵɵgetInheritedFactory(_ScannedActionsSubject)))(__ngFactoryType__ || _ScannedActionsSubject);
	};
})();
_ScannedActionsSubject.ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
	token: _ScannedActionsSubject,
	factory: _ScannedActionsSubject.ɵfac
});
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScannedActionsSubject, [{ type: Injectable }], null, null);
})();
var SCANNED_ACTIONS_SUBJECT_PROVIDERS = [ScannedActionsSubject];
var StateObservable = class extends Observable {};
var State = class extends BehaviorSubject {
	constructor(actions$, reducer$, scannedActions, initialState) {
		super(initialState);
		const withLatestReducer$ = actions$.pipe(observeOn(queueScheduler)).pipe(withLatestFrom(reducer$));
		const seed = { state: initialState };
		const stateAndAction$ = withLatestReducer$.pipe(scan(reduceState, seed));
		this.stateSubscription = stateAndAction$.subscribe(({ state, action }) => {
			this.next(state);
			scannedActions.next(action);
		});
		this.state = toSignal(this, {
			manualCleanup: true,
			requireSync: true
		});
	}
	ngOnDestroy() {
		this.stateSubscription.unsubscribe();
		this.complete();
	}
};
_State = State;
_State.INIT = INIT;
_State.ɵfac = function State_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _State)(ɵɵinject(ActionsSubject), ɵɵinject(ReducerObservable), ɵɵinject(ScannedActionsSubject), ɵɵinject(INITIAL_STATE));
};
_State.ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
	token: _State,
	factory: _State.ɵfac
});
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(State, [{ type: Injectable }], () => [
		{ type: ActionsSubject },
		{ type: ReducerObservable },
		{ type: ScannedActionsSubject },
		{
			type: void 0,
			decorators: [{
				type: Inject,
				args: [INITIAL_STATE]
			}]
		}
	], null);
})();
function reduceState(stateActionPair = { state: void 0 }, [action, reducer]) {
	const { state } = stateActionPair;
	return {
		state: reducer(state, action),
		action
	};
}
var STATE_PROVIDERS = [State, {
	provide: StateObservable,
	useExisting: State
}];
/**
* @description
* Store is an injectable service that provides reactive state management and a public API for dispatching actions.
*
* @usageNotes
*
* In a component:
*
* ```ts
* import { Component, inject } from '@angular/core';
* import { Store } from '@ngrx/store';
*
* @Component({
*  selector: 'app-my-component',
*  template: `
*    <div>{{ count() }}</div>
*    <button (click)="increment()">Increment</button>
*  `
* })
* export class MyComponent {
*   private store = inject(Store);
*
*   count = this.store.selectSignal(state => state.count);
*
*   increment() {
*     this.store.dispatch({ type: 'INCREMENT' });
*   }
* }
* ```
*
*/
var Store = class Store extends Observable {
	constructor(state$, actionsObserver, reducerManager, injector) {
		super();
		this.actionsObserver = actionsObserver;
		this.reducerManager = reducerManager;
		this.injector = injector;
		this.source = state$;
		this.state = state$.state;
	}
	/**
	* @deprecated Selectors with props are deprecated, for more info see {@link https://github.com/ngrx/platform/issues/2980 Github Issue}
	*/
	select(pathOrMapFn, ...paths) {
		return select.call(null, pathOrMapFn, ...paths)(this);
	}
	/**
	* Returns a signal of the provided selector.
	*
	* @param selector selector function
	* @param options select signal options
	* @returns Signal of the state selected by the provided selector
	* @usageNotes
	*
	* ```ts
	* const count = this.store.selectSignal(state => state.count);
	* ```
	*
	* Or with a selector created by @ngrx/store!createSelector:function
	*
	* ```ts
	* const selectCount = createSelector(
	*  (state: State) => state.count,
	* );
	*
	* const count = this.store.selectSignal(selectCount);
	* ```
	*/
	selectSignal(selector, options) {
		return computed(() => selector(this.state()), options);
	}
	lift(operator) {
		const store = new Store(this, this.actionsObserver, this.reducerManager);
		store.operator = operator;
		return store;
	}
	dispatch(actionOrDispatchFn, config) {
		if (typeof actionOrDispatchFn === "function") return this.processDispatchFn(actionOrDispatchFn, config);
		this.actionsObserver.next(actionOrDispatchFn);
	}
	next(action) {
		this.actionsObserver.next(action);
	}
	error(err) {
		this.actionsObserver.error(err);
	}
	complete() {
		this.actionsObserver.complete();
	}
	addReducer(key, reducer) {
		this.reducerManager.addReducer(key, reducer);
	}
	removeReducer(key) {
		this.reducerManager.removeReducer(key);
	}
	processDispatchFn(dispatchFn, config) {
		var _ref, _config$injector;
		assertDefined(this.injector, "Store Injector");
		return effect(() => {
			const action = dispatchFn();
			untracked(() => this.dispatch(action));
		}, { injector: (_ref = (_config$injector = config === null || config === void 0 ? void 0 : config.injector) !== null && _config$injector !== void 0 ? _config$injector : getCallerInjector()) !== null && _ref !== void 0 ? _ref : this.injector });
	}
};
_Store = Store;
_Store.ɵfac = function Store_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _Store)(ɵɵinject(StateObservable), ɵɵinject(ActionsSubject), ɵɵinject(ReducerManager), ɵɵinject(Injector));
};
_Store.ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
	token: _Store,
	factory: _Store.ɵfac
});
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Store, [{ type: Injectable }], () => [
		{ type: StateObservable },
		{ type: ActionsSubject },
		{ type: ReducerManager },
		{ type: Injector }
	], null);
})();
var STORE_PROVIDERS = [Store];
function select(pathOrMapFn, propsOrPath, ...paths) {
	return function selectOperator(source$) {
		let mapped$;
		if (typeof pathOrMapFn === "string") {
			const pathSlices = [propsOrPath, ...paths].filter(Boolean);
			mapped$ = source$.pipe(pluck(pathOrMapFn, ...pathSlices));
		} else if (typeof pathOrMapFn === "function") mapped$ = source$.pipe(map((source) => pathOrMapFn(source, propsOrPath)));
		else throw new TypeError(`Unexpected type '${typeof pathOrMapFn}' in select operator, expected 'string' or 'function'`);
		return mapped$.pipe(distinctUntilChanged());
	};
}
function getCallerInjector() {
	try {
		return inject(Injector);
	} catch (_) {
		return;
	}
}
var RUNTIME_CHECK_URL = "https://ngrx.io/guide/store/configuration/runtime-checks";
function isUndefined(target) {
	return target === void 0;
}
function isNull(target) {
	return target === null;
}
function isArray(target) {
	return Array.isArray(target);
}
function isString(target) {
	return typeof target === "string";
}
function isBoolean(target) {
	return typeof target === "boolean";
}
function isNumber(target) {
	return typeof target === "number";
}
function isObjectLike(target) {
	return typeof target === "object" && target !== null;
}
function isObject(target) {
	return isObjectLike(target) && !isArray(target);
}
function isPlainObject(target) {
	if (!isObject(target)) return false;
	const targetPrototype = Object.getPrototypeOf(target);
	return targetPrototype === Object.prototype || targetPrototype === null;
}
function isFunction(target) {
	return typeof target === "function";
}
function isComponent(target) {
	return isFunction(target) && target.hasOwnProperty("ɵcmp");
}
function hasOwnProperty(target, propertyName) {
	return Object.prototype.hasOwnProperty.call(target, propertyName);
}
var _ngrxMockEnvironment = false;
function setNgrxMockEnvironment(value) {
	_ngrxMockEnvironment = value;
}
function isNgrxMockEnvironment() {
	return _ngrxMockEnvironment;
}
function isEqualCheck(a, b) {
	return a === b;
}
function isArgumentsChanged(args, lastArguments, comparator) {
	for (let i = 0; i < args.length; i++) if (!comparator(args[i], lastArguments[i])) return true;
	return false;
}
function resultMemoize(projectionFn, isResultEqual) {
	return defaultMemoize(projectionFn, isEqualCheck, isResultEqual);
}
function defaultMemoize(projectionFn, isArgumentsEqual = isEqualCheck, isResultEqual = isEqualCheck) {
	let lastArguments = null;
	let lastResult = null;
	let overrideResult;
	function reset() {
		lastArguments = null;
		lastResult = null;
	}
	function setResult(result = void 0) {
		overrideResult = { result };
	}
	function clearResult() {
		overrideResult = void 0;
	}
	function memoized() {
		if (overrideResult !== void 0) return overrideResult.result;
		if (!lastArguments) {
			lastResult = projectionFn.apply(null, arguments);
			lastArguments = arguments;
			return lastResult;
		}
		if (!isArgumentsChanged(arguments, lastArguments, isArgumentsEqual)) return lastResult;
		const newResult = projectionFn.apply(null, arguments);
		lastArguments = arguments;
		if (isResultEqual(lastResult, newResult)) return lastResult;
		lastResult = newResult;
		return newResult;
	}
	return {
		memoized,
		reset,
		setResult,
		clearResult
	};
}
function createSelector(...input) {
	return createSelectorFactory(defaultMemoize)(...input);
}
function defaultStateFn(state, selectors, props, memoizedProjector) {
	if (props === void 0) {
		const args = selectors.map((fn) => fn(state));
		return memoizedProjector.memoized.apply(null, args);
	}
	const args = selectors.map((fn) => fn(state, props));
	return memoizedProjector.memoized.apply(null, [...args, props]);
}
/**
*
* @param memoize The function used to memoize selectors
* @param options Config Object that may include a `stateFn` function defining how to return the selector's value, given the entire `Store`'s state, parent `Selector`s, `Props`, and a `MemoizedProjection`
*
* @usageNotes
*
* **Creating a Selector Factory Where Array Order Does Not Matter**
*
* ```ts
* function removeMatch(arr: string[], target: string): string[] {
*   const matchIndex = arr.indexOf(target);
*   return [...arr.slice(0, matchIndex), ...arr.slice(matchIndex + 1)];
* }
*
* function orderDoesNotMatterComparer(a: any, b: any): boolean {
*   if (!Array.isArray(a) || !Array.isArray(b)) {
*     return a === b;
*   }
*   if (a.length !== b.length) {
*     return false;
*   }
*   let tempB = [...b];
*   function reduceToDetermineIfArraysContainSameContents(
*     previousCallResult: boolean,
*     arrayMember: any
*   ): boolean {
*     if (previousCallResult === false) {
*       return false;
*     }
*     if (tempB.includes(arrayMember)) {
*       tempB = removeMatch(tempB, arrayMember);
*       return true;
*     }
*     return false;
*   }
*   return a.reduce(reduceToDetermineIfArraysContainSameContents, true);
* }
*
* export const createOrderDoesNotMatterSelector = createSelectorFactory(
*   (projectionFun) => defaultMemoize(
*     projectionFun,
*     orderDoesNotMatterComparer,
*     orderDoesNotMatterComparer
*   )
* );
* ```
*
* **Creating an Alternative Memoization Strategy**
*
* ```ts
* function serialize(x: any): string {
*   return JSON.stringify(x);
* }
*
* export const createFullHistorySelector = createSelectorFactory(
*  (projectionFunction) => {
*    const cache = {};
*
*    function memoized() {
*      const serializedArguments = serialize(...arguments);
*       if (cache[serializedArguments] != null) {
*         cache[serializedArguments] = projectionFunction.apply(null, arguments);
*       }
*       return cache[serializedArguments];
*     }
*     return {
*       memoized,
*       reset: () => {},
*       setResult: () => {},
*       clearResult: () => {},
*     };
*   }
* );
* ```
*/
function createSelectorFactory(memoize, options = { stateFn: defaultStateFn }) {
	return function(...input) {
		let args = input;
		if (Array.isArray(args[0])) {
			const [head, ...tail] = args;
			args = [...head, ...tail];
		} else if (args.length === 1 && isSelectorsDictionary(args[0])) args = extractArgsFromSelectorsDictionary(args[0]);
		const selectors = args.slice(0, args.length - 1);
		const projector = args[args.length - 1];
		const memoizedSelectors = selectors.filter((selector) => selector.release && typeof selector.release === "function");
		const memoizedProjector = memoize(function(...selectors) {
			return projector.apply(null, selectors);
		});
		const memoizedState = defaultMemoize(function(state, props) {
			return options.stateFn.apply(null, [
				state,
				selectors,
				props,
				memoizedProjector
			]);
		});
		function release() {
			memoizedState.reset();
			memoizedProjector.reset();
			memoizedSelectors.forEach((selector) => selector.release());
		}
		return Object.assign(memoizedState.memoized, {
			release,
			projector: memoizedProjector.memoized,
			setResult: memoizedState.setResult,
			clearResult: memoizedState.clearResult
		});
	};
}
function createFeatureSelector(featureName) {
	return createSelector((state) => {
		const featureState = state[featureName];
		if (!isNgrxMockEnvironment() && isDevMode() && !(featureName in state)) console.warn(`@ngrx/store: The feature name "${featureName}" does not exist in the state, therefore createFeatureSelector cannot access it.  Be sure it is imported in a loaded module using StoreModule.forRoot('${featureName}', ...) or StoreModule.forFeature('${featureName}', ...).  If the default state is intended to be undefined, as is the case with router state, this development-only warning message can be ignored.`);
		return featureState;
	}, (featureState) => featureState);
}
function isSelectorsDictionary(selectors) {
	return !!selectors && typeof selectors === "object" && Object.values(selectors).every((selector) => typeof selector === "function");
}
function extractArgsFromSelectorsDictionary(selectorsDictionary) {
	const selectors = Object.values(selectorsDictionary);
	const resultKeys = Object.keys(selectorsDictionary);
	const projector = (...selectorResults) => resultKeys.reduce((result, key, index) => _objectSpread2(_objectSpread2({}, result), {}, { [key]: selectorResults[index] }), {});
	return [...selectors, projector];
}
/**
* @description
* A function that accepts a feature name and a feature reducer, and creates
* a feature selector and a selector for each feature state property.
* This function also provides the ability to add extra selectors to
* the feature object.
*
* @param featureConfig An object that contains a feature name and a feature
* reducer as required, and extra selectors factory as an optional argument.
* @returns An object that contains a feature name, a feature reducer,
* a feature selector, a selector for each feature state property, and extra
* selectors.
*
* @usageNotes
*
* ```ts
* interface ProductsState {
*   products: Product[];
*   selectedId: string | null;
* }
*
* const initialState: ProductsState = {
*   products: [],
*   selectedId: null,
* };
*
* const productsFeature = createFeature({
*   name: 'products',
*   reducer: createReducer(
*     initialState,
*     on(ProductsApiActions.loadSuccess, (state, { products }) => ({
*       ...state,
*       products,
*     })),
*   ),
* });
*
* const {
*   name,
*   reducer,
*   // feature selector
*   selectProductsState, // type: MemoizedSelector<Record<string, any>, ProductsState>
*   // feature state properties selectors
*   selectProducts, // type: MemoizedSelector<Record<string, any>, Product[]>
*   selectSelectedId, // type: MemoizedSelector<Record<string, any>, string | null>
* } = productsFeature;
* ```
*
* **Creating Feature with Extra Selectors**
*
* ```ts
* type CallState = 'init' | 'loading' | 'loaded' | { error: string };
*
* interface State extends EntityState<Product> {
*   callState: CallState;
* }
*
* const adapter = createEntityAdapter<Product>();
* const initialState: State = adapter.getInitialState({
*   callState: 'init',
* });
*
* export const productsFeature = createFeature({
*   name: 'products',
*   reducer: createReducer(initialState),
*   extraSelectors: ({ selectProductsState, selectCallState }) => ({
*     ...adapter.getSelectors(selectProductsState),
*     ...getCallStateSelectors(selectCallState)
*   }),
* });
*
* const {
*   name,
*   reducer,
*   // feature selector
*   selectProductsState,
*   // feature state properties selectors
*   selectIds,
*   selectEntities,
*   selectCallState,
*   // selectors returned by `adapter.getSelectors`
*   selectAll,
*   selectTotal,
*   // selectors returned by `getCallStateSelectors`
*   selectIsLoading,
*   selectIsLoaded,
*   selectError,
* } = productsFeature;
* ```
*/
function createFeature(featureConfig) {
	const { name, reducer, extraSelectors: extraSelectorsFactory } = featureConfig;
	const featureSelector = createFeatureSelector(name);
	const nestedSelectors = createNestedSelectors(featureSelector, reducer);
	const baseSelectors = _objectSpread2({ [`select${capitalize(name)}State`]: featureSelector }, nestedSelectors);
	const extraSelectors = extraSelectorsFactory ? extraSelectorsFactory(baseSelectors) : {};
	return _objectSpread2(_objectSpread2({
		name,
		reducer
	}, baseSelectors), extraSelectors);
}
function createNestedSelectors(featureSelector, reducer) {
	const initialState = getInitialState(reducer);
	return (isPlainObject(initialState) ? Object.keys(initialState) : []).reduce((nestedSelectors, nestedKey) => _objectSpread2(_objectSpread2({}, nestedSelectors), {}, { [`select${capitalize(nestedKey)}`]: createSelector(featureSelector, (parentState) => parentState === null || parentState === void 0 ? void 0 : parentState[nestedKey]) }), {});
}
function getInitialState(reducer) {
	return reducer(void 0, { type: "@ngrx/feature/init" });
}
function _createStoreReducers(reducers) {
	return reducers instanceof InjectionToken ? inject(reducers) : reducers;
}
function _createFeatureStore(configs, featureStores) {
	return featureStores.map((feat, index) => {
		if (configs[index] instanceof InjectionToken) {
			const conf = inject(configs[index]);
			return {
				key: feat.key,
				reducerFactory: conf.reducerFactory ? conf.reducerFactory : combineReducers,
				metaReducers: conf.metaReducers ? conf.metaReducers : [],
				initialState: conf.initialState
			};
		}
		return feat;
	});
}
function _createFeatureReducers(reducerCollection) {
	return reducerCollection.map((reducer) => {
		return reducer instanceof InjectionToken ? inject(reducer) : reducer;
	});
}
function _initialStateFactory(initialState) {
	if (typeof initialState === "function") return initialState();
	return initialState;
}
function _concatMetaReducers(metaReducers, userProvidedMetaReducers) {
	return metaReducers.concat(userProvidedMetaReducers);
}
function _provideForRootGuard() {
	if (inject(Store, {
		optional: true,
		skipSelf: true
	})) throw new TypeError(`The root Store has been provided more than once. Feature modules should provide feature states instead.`);
	return "guarded";
}
function immutabilityCheckMetaReducer(reducer, checks) {
	return function(state, action) {
		const nextState = reducer(state, checks.action(action) ? freeze(action) : action);
		return checks.state() ? freeze(nextState) : nextState;
	};
}
function freeze(target) {
	Object.freeze(target);
	const targetIsFunction = isFunction(target);
	Object.getOwnPropertyNames(target).forEach((prop) => {
		if (prop.startsWith("ɵ")) return;
		if (hasOwnProperty(target, prop) && (targetIsFunction ? prop !== "caller" && prop !== "callee" && prop !== "arguments" : true)) {
			const propValue = target[prop];
			if ((isObjectLike(propValue) || isFunction(propValue)) && !Object.isFrozen(propValue)) freeze(propValue);
		}
	});
	return target;
}
function serializationCheckMetaReducer(reducer, checks) {
	return function(state, action) {
		if (checks.action(action)) throwIfUnserializable(getUnserializable(action), "action");
		const nextState = reducer(state, action);
		if (checks.state()) throwIfUnserializable(getUnserializable(nextState), "state");
		return nextState;
	};
}
function getUnserializable(target, path = []) {
	if ((isUndefined(target) || isNull(target)) && path.length === 0) return {
		path: ["root"],
		value: target
	};
	return Object.keys(target).reduce((result, key) => {
		if (result) return result;
		const value = target[key];
		if (isComponent(value)) return result;
		if (isUndefined(value) || isNull(value) || isNumber(value) || isBoolean(value) || isString(value) || isArray(value)) return false;
		if (isPlainObject(value)) return getUnserializable(value, [...path, key]);
		return {
			path: [...path, key],
			value
		};
	}, false);
}
function throwIfUnserializable(unserializable, context) {
	if (unserializable === false) return;
	const unserializablePath = unserializable.path.join(".");
	const error = /* @__PURE__ */ new Error(`Detected unserializable ${context} at "${unserializablePath}". ${RUNTIME_CHECK_URL}#strict${context}serializability`);
	error.value = unserializable.value;
	error.unserializablePath = unserializablePath;
	throw error;
}
function inNgZoneAssertMetaReducer(reducer, checks) {
	return function(state, action) {
		if (checks.action(action) && !NgZone.isInAngularZone()) throw new Error(`Action '${action.type}' running outside NgZone. ${RUNTIME_CHECK_URL}#strictactionwithinngzone`);
		return reducer(state, action);
	};
}
function createActiveRuntimeChecks(runtimeChecks) {
	if (isDevMode()) return _objectSpread2({
		strictStateSerializability: false,
		strictActionSerializability: false,
		strictStateImmutability: true,
		strictActionImmutability: true,
		strictActionWithinNgZone: false,
		strictActionTypeUniqueness: false
	}, runtimeChecks);
	return {
		strictStateSerializability: false,
		strictActionSerializability: false,
		strictStateImmutability: false,
		strictActionImmutability: false,
		strictActionWithinNgZone: false,
		strictActionTypeUniqueness: false
	};
}
function createSerializationCheckMetaReducer({ strictActionSerializability, strictStateSerializability }) {
	return (reducer) => strictActionSerializability || strictStateSerializability ? serializationCheckMetaReducer(reducer, {
		action: (action) => strictActionSerializability && !ignoreNgrxAction(action),
		state: () => strictStateSerializability
	}) : reducer;
}
function createImmutabilityCheckMetaReducer({ strictActionImmutability, strictStateImmutability }) {
	return (reducer) => strictActionImmutability || strictStateImmutability ? immutabilityCheckMetaReducer(reducer, {
		action: (action) => strictActionImmutability && !ignoreNgrxAction(action),
		state: () => strictStateImmutability
	}) : reducer;
}
function ignoreNgrxAction(action) {
	return action.type.startsWith("@ngrx");
}
function createInNgZoneCheckMetaReducer({ strictActionWithinNgZone }) {
	return (reducer) => strictActionWithinNgZone ? inNgZoneAssertMetaReducer(reducer, { action: (action) => strictActionWithinNgZone && !ignoreNgrxAction(action) }) : reducer;
}
function provideRuntimeChecks(runtimeChecks) {
	return [
		{
			provide: _USER_RUNTIME_CHECKS,
			useValue: runtimeChecks
		},
		{
			provide: USER_RUNTIME_CHECKS,
			useFactory: _runtimeChecksFactory,
			deps: [_USER_RUNTIME_CHECKS]
		},
		{
			provide: ACTIVE_RUNTIME_CHECKS,
			deps: [USER_RUNTIME_CHECKS],
			useFactory: createActiveRuntimeChecks
		},
		{
			provide: META_REDUCERS,
			multi: true,
			deps: [ACTIVE_RUNTIME_CHECKS],
			useFactory: createImmutabilityCheckMetaReducer
		},
		{
			provide: META_REDUCERS,
			multi: true,
			deps: [ACTIVE_RUNTIME_CHECKS],
			useFactory: createSerializationCheckMetaReducer
		},
		{
			provide: META_REDUCERS,
			multi: true,
			deps: [ACTIVE_RUNTIME_CHECKS],
			useFactory: createInNgZoneCheckMetaReducer
		}
	];
}
function checkForActionTypeUniqueness() {
	return [{
		provide: _ACTION_TYPE_UNIQUENESS_CHECK,
		multi: true,
		deps: [ACTIVE_RUNTIME_CHECKS],
		useFactory: _actionTypeUniquenessCheck
	}];
}
function _runtimeChecksFactory(runtimeChecks) {
	return runtimeChecks;
}
function _actionTypeUniquenessCheck(config) {
	if (!config.strictActionTypeUniqueness) return;
	const duplicates = Object.entries(REGISTERED_ACTION_TYPES).filter(([, registrations]) => registrations > 1).map(([type]) => type);
	if (duplicates.length) throw new Error(`Action types are registered more than once, ${duplicates.map((type) => `"${type}"`).join(", ")}. ${RUNTIME_CHECK_URL}#strictactiontypeuniqueness`);
}
/**
* Provides additional slices of state in the Store.
* These providers cannot be used at the component level.
*
* @usageNotes
*
* ### Providing Store Features
*
* ```ts
* const booksRoutes: Route[] = [
*   {
*     path: '',
*     providers: [provideState('books', booksReducer)],
*     children: [
*       { path: '', component: BookListComponent },
*       { path: ':id', component: BookDetailsComponent },
*     ],
*   },
* ];
* ```
*/
function provideState(featureNameOrSlice, reducers, config = {}) {
	return makeEnvironmentProviders([..._provideState(featureNameOrSlice, reducers, config), ENVIRONMENT_STATE_PROVIDER]);
}
function _provideStore(reducers = {}, config = {}) {
	return [
		{
			provide: _ROOT_STORE_GUARD,
			useFactory: _provideForRootGuard
		},
		{
			provide: _INITIAL_STATE,
			useValue: config.initialState
		},
		{
			provide: INITIAL_STATE,
			useFactory: _initialStateFactory,
			deps: [_INITIAL_STATE]
		},
		{
			provide: _INITIAL_REDUCERS,
			useValue: reducers
		},
		{
			provide: _STORE_REDUCERS,
			useExisting: reducers instanceof InjectionToken ? reducers : _INITIAL_REDUCERS
		},
		{
			provide: INITIAL_REDUCERS,
			deps: [_INITIAL_REDUCERS, [new Inject(_STORE_REDUCERS)]],
			useFactory: _createStoreReducers
		},
		{
			provide: USER_PROVIDED_META_REDUCERS,
			useValue: config.metaReducers ? config.metaReducers : []
		},
		{
			provide: _RESOLVED_META_REDUCERS,
			deps: [META_REDUCERS, USER_PROVIDED_META_REDUCERS],
			useFactory: _concatMetaReducers
		},
		{
			provide: _REDUCER_FACTORY,
			useValue: config.reducerFactory ? config.reducerFactory : combineReducers
		},
		{
			provide: REDUCER_FACTORY,
			deps: [_REDUCER_FACTORY, _RESOLVED_META_REDUCERS],
			useFactory: createReducerFactory
		},
		ACTIONS_SUBJECT_PROVIDERS,
		REDUCER_MANAGER_PROVIDERS,
		SCANNED_ACTIONS_SUBJECT_PROVIDERS,
		STATE_PROVIDERS,
		STORE_PROVIDERS,
		provideRuntimeChecks(config.runtimeChecks),
		checkForActionTypeUniqueness()
	];
}
function rootStoreProviderFactory() {
	inject(ActionsSubject);
	inject(ReducerObservable);
	inject(ScannedActionsSubject);
	inject(Store);
	inject(_ROOT_STORE_GUARD, { optional: true });
	inject(_ACTION_TYPE_UNIQUENESS_CHECK, { optional: true });
}
/**
* Environment Initializer used in the root
* providers to initialize the Store
*/
var ENVIRONMENT_STORE_PROVIDER = [{
	provide: ROOT_STORE_PROVIDER,
	useFactory: rootStoreProviderFactory
}, provideEnvironmentInitializer(() => inject(ROOT_STORE_PROVIDER))];
/**
* Provides the global Store providers and initializes
* the Store.
* These providers cannot be used at the component level.
*
* @usageNotes
*
* ### Providing the Global Store
*
* ```ts
* bootstrapApplication(AppComponent, {
*   providers: [provideStore()],
* });
* ```
*/
function provideStore(reducers, config) {
	return makeEnvironmentProviders([..._provideStore(reducers, config), ENVIRONMENT_STORE_PROVIDER]);
}
function featureStateProviderFactory() {
	inject(ROOT_STORE_PROVIDER);
	const features = inject(_STORE_FEATURES);
	const featureReducers = inject(FEATURE_REDUCERS);
	const reducerManager = inject(ReducerManager);
	inject(_ACTION_TYPE_UNIQUENESS_CHECK, { optional: true });
	const feats = features.map((feature, index) => {
		const reducers = featureReducers.shift()[index];
		return _objectSpread2(_objectSpread2({}, feature), {}, {
			reducers,
			initialState: _initialStateFactory(feature.initialState)
		});
	});
	reducerManager.addFeatures(feats);
}
/**
* Environment Initializer used in the feature
* providers to register state features
*/
var ENVIRONMENT_STATE_PROVIDER = [{
	provide: FEATURE_STATE_PROVIDER,
	useFactory: featureStateProviderFactory
}, provideEnvironmentInitializer(() => inject(FEATURE_STATE_PROVIDER))];
function _provideState(featureNameOrSlice, reducers, config = {}) {
	return [
		{
			provide: _FEATURE_CONFIGS,
			multi: true,
			useValue: featureNameOrSlice instanceof Object ? {} : config
		},
		{
			provide: STORE_FEATURES,
			multi: true,
			useValue: {
				key: featureNameOrSlice instanceof Object ? featureNameOrSlice.name : featureNameOrSlice,
				reducerFactory: !(config instanceof InjectionToken) && config.reducerFactory ? config.reducerFactory : combineReducers,
				metaReducers: !(config instanceof InjectionToken) && config.metaReducers ? config.metaReducers : [],
				initialState: !(config instanceof InjectionToken) && config.initialState ? config.initialState : void 0
			}
		},
		{
			provide: _STORE_FEATURES,
			deps: [_FEATURE_CONFIGS, STORE_FEATURES],
			useFactory: _createFeatureStore
		},
		{
			provide: _FEATURE_REDUCERS,
			multi: true,
			useValue: featureNameOrSlice instanceof Object ? featureNameOrSlice.reducer : reducers
		},
		{
			provide: _FEATURE_REDUCERS_TOKEN,
			multi: true,
			useExisting: reducers instanceof InjectionToken ? reducers : _FEATURE_REDUCERS
		},
		{
			provide: FEATURE_REDUCERS,
			multi: true,
			deps: [_FEATURE_REDUCERS, [new Inject(_FEATURE_REDUCERS_TOKEN)]],
			useFactory: _createFeatureReducers
		},
		checkForActionTypeUniqueness()
	];
}
var StoreRootModule = class {
	constructor(actions$, reducer$, scannedActions$, store, guard, actionCheck) {}
};
_StoreRootModule = StoreRootModule;
_StoreRootModule.ɵfac = function StoreRootModule_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _StoreRootModule)(ɵɵinject(ActionsSubject), ɵɵinject(ReducerObservable), ɵɵinject(ScannedActionsSubject), ɵɵinject(Store), ɵɵinject(_ROOT_STORE_GUARD, 8), ɵɵinject(_ACTION_TYPE_UNIQUENESS_CHECK, 8));
};
_StoreRootModule.ɵmod = /* @__PURE__ */ ɵɵdefineNgModule({ type: _StoreRootModule });
_StoreRootModule.ɵinj = /* @__PURE__ */ ɵɵdefineInjector({});
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StoreRootModule, [{
		type: NgModule,
		args: [{}]
	}], () => [
		{ type: ActionsSubject },
		{ type: ReducerObservable },
		{ type: ScannedActionsSubject },
		{ type: Store },
		{
			type: void 0,
			decorators: [{ type: Optional }, {
				type: Inject,
				args: [_ROOT_STORE_GUARD]
			}]
		},
		{
			type: void 0,
			decorators: [{ type: Optional }, {
				type: Inject,
				args: [_ACTION_TYPE_UNIQUENESS_CHECK]
			}]
		}
	], null);
})();
var StoreFeatureModule = class {
	constructor(features, featureReducers, reducerManager, root, actionCheck) {
		this.features = features;
		this.featureReducers = featureReducers;
		this.reducerManager = reducerManager;
		const feats = features.map((feature, index) => {
			const reducers = featureReducers.shift()[index];
			return _objectSpread2(_objectSpread2({}, feature), {}, {
				reducers,
				initialState: _initialStateFactory(feature.initialState)
			});
		});
		reducerManager.addFeatures(feats);
	}
	ngOnDestroy() {
		this.reducerManager.removeFeatures(this.features);
	}
};
_StoreFeatureModule = StoreFeatureModule;
_StoreFeatureModule.ɵfac = function StoreFeatureModule_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _StoreFeatureModule)(ɵɵinject(_STORE_FEATURES), ɵɵinject(FEATURE_REDUCERS), ɵɵinject(ReducerManager), ɵɵinject(StoreRootModule), ɵɵinject(_ACTION_TYPE_UNIQUENESS_CHECK, 8));
};
_StoreFeatureModule.ɵmod = /* @__PURE__ */ ɵɵdefineNgModule({ type: _StoreFeatureModule });
_StoreFeatureModule.ɵinj = /* @__PURE__ */ ɵɵdefineInjector({});
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StoreFeatureModule, [{
		type: NgModule,
		args: [{}]
	}], () => [
		{
			type: void 0,
			decorators: [{
				type: Inject,
				args: [_STORE_FEATURES]
			}]
		},
		{
			type: void 0,
			decorators: [{
				type: Inject,
				args: [FEATURE_REDUCERS]
			}]
		},
		{ type: ReducerManager },
		{ type: StoreRootModule },
		{
			type: void 0,
			decorators: [{ type: Optional }, {
				type: Inject,
				args: [_ACTION_TYPE_UNIQUENESS_CHECK]
			}]
		}
	], null);
})();
var StoreModule = class {
	static forRoot(reducers, config) {
		return {
			ngModule: StoreRootModule,
			providers: [..._provideStore(reducers, config)]
		};
	}
	static forFeature(featureNameOrSlice, reducers, config = {}) {
		return {
			ngModule: StoreFeatureModule,
			providers: [..._provideState(featureNameOrSlice, reducers, config)]
		};
	}
};
_StoreModule = StoreModule;
_StoreModule.ɵfac = function StoreModule_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _StoreModule)();
};
_StoreModule.ɵmod = /* @__PURE__ */ ɵɵdefineNgModule({ type: _StoreModule });
_StoreModule.ɵinj = /* @__PURE__ */ ɵɵdefineInjector({});
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StoreModule, [{
		type: NgModule,
		args: [{}]
	}], null, null);
})();
/**
* @description
* Associates actions with a given state change function.
* A state change function must be provided as the last parameter.
*
* @param args `ActionCreator`'s followed by a state change function.
*
* @returns an association of action types with a state change function.
*
* @usageNotes
* ```ts
* on(AuthApiActions.loginSuccess, (state, { user }) => ({ ...state, user }))
* ```
*/
function on(...args) {
	return {
		reducer: args.pop(),
		types: args.map((creator) => creator.type)
	};
}
/**
* @description
* Creates a reducer function to handle state transitions.
*
* Reducer creators reduce the explicitness of reducer functions with switch statements.
*
* @param initialState Provides a state value if the current state is `undefined`, as it is initially.
* @param ons Associations between actions and state changes.
* @returns A reducer function.
*
* @usageNotes
*
* - Must be used with `ActionCreator`'s (returned by `createAction`). Cannot be used with class-based action creators.
* - The returned `ActionReducer` does not require being wrapped with another function.
*
* **Declaring a reducer creator**
*
* ```ts
* export const reducer = createReducer(
*   initialState,
*   on(
*     featureActions.actionOne,
*     featureActions.actionTwo,
*     (state, { updatedValue }) => ({ ...state, prop: updatedValue })
*   ),
*   on(featureActions.actionThree, () => initialState);
* );
* ```
*/
function createReducer(initialState, ...ons) {
	const map = /* @__PURE__ */ new Map();
	for (const on of ons) for (const type of on.types) {
		const existingReducer = map.get(type);
		if (existingReducer) {
			const newReducer = (state, action) => on.reducer(existingReducer(state, action), action);
			map.set(type, newReducer);
		} else map.set(type, on.reducer);
	}
	return function(state = initialState, action) {
		const reducer = map.get(action.type);
		return reducer ? reducer(state, action) : state;
	};
}
//#endregion
export { createFeatureSelector as A, props as B, USER_PROVIDED_META_REDUCERS as C, createAction as D, compose as E, defaultMemoize as F, select as G, provideStore as H, defaultStateFn as I, queueScheduler as J, setNgrxMockEnvironment as K, emptyProps as L, createReducerFactory as M, createSelector as N, createActionGroup as O, createSelectorFactory as P, isNgrxMockEnvironment as R, UPDATE as S, combineReducers as T, reduceState as U, provideState as V, resultMemoize as W, StateObservable as _, INIT as a, StoreModule as b, META_REDUCERS as c, ReducerManager as d, ReducerManagerDispatcher as f, State as g, ScannedActionsSubject as h, FEATURE_STATE_PROVIDER as i, createReducer as j, createFeature as k, REDUCER_FACTORY as l, STORE_FEATURES as m, ActionsSubject as n, INITIAL_REDUCERS as o, ReducerObservable as p, union as q, FEATURE_REDUCERS as r, INITIAL_STATE as s, ACTIVE_RUNTIME_CHECKS as t, ROOT_STORE_PROVIDER as u, Store as v, USER_RUNTIME_CHECKS as w, StoreRootModule as x, StoreFeatureModule as y, on as z };
