import { Fn as Injectable, Hl as _objectSpread2, Lc as NgZone, Ml as ɵɵinject, Oc as InjectionToken, Ol as ɵɵdefineInjectable, Oo as ɵɵgetInheritedFactory, Pn as Inject, Wi as setClassMetadata, hl as makeEnvironmentProviders, kl as ɵɵdefineInjector, ll as inject, qn as NgModule, ro as ɵɵdefineNgModule, xc as ErrorHandler } from "./core-CpxyNpZz.js";
import { $t as filter, An as Observable, C as switchMap, Dt as take, It as concatMap, N as scan, O as skip, Sn as EMPTY, Tn as ReplaySubject, Ut as catchError, gn as observeOn, j as share, kt as debounceTime, ln as map, o as withLatestFrom, pn as of, un as timeout, y as takeUntil } from "./operators-BOtrYIkv.js";
import { J as queueScheduler, S as UPDATE, _ as StateObservable, a as INIT, f as ReducerManagerDispatcher, h as ScannedActionsSubject, n as ActionsSubject, p as ReducerObservable, s as INITIAL_STATE } from "./ngrx-store-CYzHrUrj.js";
import { t as merge } from "./merge-CG-b08X5.js";
import { n as toSignal } from "./rxjs-interop-C9YowOKx.js";
//#region node_modules/@ngrx/store-devtools/fesm2022/ngrx-store-devtools.mjs
var _DevtoolsDispatcher;
var _DevtoolsExtension;
var _StoreDevtools;
var _StoreDevtoolsModule;
var PERFORM_ACTION = "PERFORM_ACTION";
var REFRESH = "REFRESH";
var RESET = "RESET";
var ROLLBACK = "ROLLBACK";
var COMMIT = "COMMIT";
var SWEEP = "SWEEP";
var TOGGLE_ACTION = "TOGGLE_ACTION";
var SET_ACTIONS_ACTIVE = "SET_ACTIONS_ACTIVE";
var JUMP_TO_STATE = "JUMP_TO_STATE";
var JUMP_TO_ACTION = "JUMP_TO_ACTION";
var IMPORT_STATE = "IMPORT_STATE";
var LOCK_CHANGES = "LOCK_CHANGES";
var PAUSE_RECORDING = "PAUSE_RECORDING";
var PerformAction = class {
	constructor(action, timestamp) {
		this.action = action;
		this.timestamp = timestamp;
		this.type = PERFORM_ACTION;
		if (typeof action.type === "undefined") throw new Error("Actions may not have an undefined \"type\" property. Have you misspelled a constant?");
	}
};
var Refresh = class {
	constructor() {
		this.type = REFRESH;
	}
};
var Reset = class {
	constructor(timestamp) {
		this.timestamp = timestamp;
		this.type = RESET;
	}
};
var Rollback = class {
	constructor(timestamp) {
		this.timestamp = timestamp;
		this.type = ROLLBACK;
	}
};
var Commit = class {
	constructor(timestamp) {
		this.timestamp = timestamp;
		this.type = COMMIT;
	}
};
var Sweep = class {
	constructor() {
		this.type = SWEEP;
	}
};
var ToggleAction = class {
	constructor(id) {
		this.id = id;
		this.type = TOGGLE_ACTION;
	}
};
var JumpToState = class {
	constructor(index) {
		this.index = index;
		this.type = JUMP_TO_STATE;
	}
};
var JumpToAction = class {
	constructor(actionId) {
		this.actionId = actionId;
		this.type = JUMP_TO_ACTION;
	}
};
var ImportState = class {
	constructor(nextLiftedState) {
		this.nextLiftedState = nextLiftedState;
		this.type = IMPORT_STATE;
	}
};
var LockChanges = class {
	constructor(status) {
		this.status = status;
		this.type = LOCK_CHANGES;
	}
};
var PauseRecording = class {
	constructor(status) {
		this.status = status;
		this.type = PAUSE_RECORDING;
	}
};
/**
* Chrome extension documentation
* @see https://github.com/reduxjs/redux-devtools/blob/main/extension/docs/API/Arguments.md
* Firefox extension documentation
* @see https://github.com/zalmoxisus/redux-devtools-extension/blob/master/docs/API/Arguments.md
*/
var StoreDevtoolsConfig = class {
	constructor() {
		/**
		* Maximum allowed actions to be stored in the history tree (default: `false`)
		*/
		this.maxAge = false;
	}
};
var STORE_DEVTOOLS_CONFIG = new InjectionToken("@ngrx/store-devtools Options");
/**
* Used to provide a `StoreDevtoolsConfig` for the store-devtools.
*/
var INITIAL_OPTIONS = new InjectionToken("@ngrx/store-devtools Initial Config");
function noMonitor() {
	return null;
}
var DEFAULT_NAME = "NgRx Store DevTools";
function createConfig(optionsInput) {
	const DEFAULT_OPTIONS = {
		maxAge: false,
		monitor: noMonitor,
		actionSanitizer: void 0,
		stateSanitizer: void 0,
		name: DEFAULT_NAME,
		serialize: false,
		logOnly: false,
		autoPause: false,
		trace: false,
		traceLimit: 75,
		features: {
			pause: true,
			lock: true,
			persist: true,
			export: true,
			import: "custom",
			jump: true,
			skip: true,
			reorder: true,
			dispatch: true,
			test: true
		},
		connectInZone: false
	};
	const options = typeof optionsInput === "function" ? optionsInput() : optionsInput;
	const logOnly = options.logOnly ? {
		pause: true,
		export: true,
		test: true
	} : false;
	const features = options.features || logOnly || DEFAULT_OPTIONS.features;
	if (features.import === true) features.import = "custom";
	const config = Object.assign({}, DEFAULT_OPTIONS, { features }, options);
	if (config.maxAge && config.maxAge < 2) throw new Error(`Devtools 'maxAge' cannot be less than 2, got ${config.maxAge}`);
	return config;
}
function difference(first, second) {
	return first.filter((item) => second.indexOf(item) < 0);
}
/**
* Provides an app's view into the state of the lifted store.
*/
function unliftState(liftedState) {
	const { computedStates, currentStateIndex } = liftedState;
	if (currentStateIndex >= computedStates.length) {
		const { state } = computedStates[computedStates.length - 1];
		return state;
	}
	const { state } = computedStates[currentStateIndex];
	return state;
}
/**
* Lifts an app's action into an action on the lifted store.
*/
function liftAction(action) {
	return new PerformAction(action, +Date.now());
}
/**
* Sanitizes given actions with given function.
*/
function sanitizeActions(actionSanitizer, actions) {
	return Object.keys(actions).reduce((sanitizedActions, actionIdx) => {
		const idx = Number(actionIdx);
		sanitizedActions[idx] = sanitizeAction(actionSanitizer, actions[idx], idx);
		return sanitizedActions;
	}, {});
}
/**
* Sanitizes given action with given function.
*/
function sanitizeAction(actionSanitizer, action, actionIdx) {
	return _objectSpread2(_objectSpread2({}, action), {}, { action: actionSanitizer(action.action, actionIdx) });
}
/**
* Sanitizes given states with given function.
*/
function sanitizeStates(stateSanitizer, states) {
	return states.map((computedState, idx) => ({
		state: sanitizeState(stateSanitizer, computedState.state, idx),
		error: computedState.error
	}));
}
/**
* Sanitizes given state with given function.
*/
function sanitizeState(stateSanitizer, state, stateIdx) {
	return stateSanitizer(state, stateIdx);
}
/**
* Read the config and tell if actions should be filtered
*/
function shouldFilterActions(config) {
	return config.predicate || config.actionsSafelist || config.actionsBlocklist;
}
/**
* Return a full filtered lifted state
*/
function filterLiftedState(liftedState, predicate, safelist, blocklist) {
	const filteredStagedActionIds = [];
	const filteredActionsById = {};
	const filteredComputedStates = [];
	liftedState.stagedActionIds.forEach((id, idx) => {
		const liftedAction = liftedState.actionsById[id];
		if (!liftedAction) return;
		if (idx && isActionFiltered(liftedState.computedStates[idx], liftedAction, predicate, safelist, blocklist)) return;
		filteredActionsById[id] = liftedAction;
		filteredStagedActionIds.push(id);
		filteredComputedStates.push(liftedState.computedStates[idx]);
	});
	return _objectSpread2(_objectSpread2({}, liftedState), {}, {
		stagedActionIds: filteredStagedActionIds,
		actionsById: filteredActionsById,
		computedStates: filteredComputedStates
	});
}
/**
* Return true is the action should be ignored
*/
function isActionFiltered(state, action, predicate, safelist, blockedlist) {
	const predicateMatch = predicate && !predicate(state, action.action);
	const safelistMatch = safelist && !action.action.type.match(safelist.map((s) => escapeRegExp(s)).join("|"));
	const blocklistMatch = blockedlist && action.action.type.match(blockedlist.map((s) => escapeRegExp(s)).join("|"));
	return predicateMatch || safelistMatch || blocklistMatch;
}
/**
* Return string with escaped RegExp special characters
* https://stackoverflow.com/a/6969486/1337347
*/
function escapeRegExp(s) {
	return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function injectZoneConfig(connectInZone) {
	return {
		ngZone: connectInZone ? inject(NgZone) : null,
		connectInZone
	};
}
var DevtoolsDispatcher = class extends ActionsSubject {};
_DevtoolsDispatcher = DevtoolsDispatcher;
_DevtoolsDispatcher.ɵfac = /* @__PURE__ */ (() => {
	let ɵDevtoolsDispatcher_BaseFactory;
	return function DevtoolsDispatcher_Factory(__ngFactoryType__) {
		return (ɵDevtoolsDispatcher_BaseFactory || (ɵDevtoolsDispatcher_BaseFactory = ɵɵgetInheritedFactory(_DevtoolsDispatcher)))(__ngFactoryType__ || _DevtoolsDispatcher);
	};
})();
_DevtoolsDispatcher.ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
	token: _DevtoolsDispatcher,
	factory: _DevtoolsDispatcher.ɵfac
});
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DevtoolsDispatcher, [{ type: Injectable }], null, null);
})();
var ExtensionActionTypes = {
	START: "START",
	DISPATCH: "DISPATCH",
	STOP: "STOP",
	ACTION: "ACTION"
};
var REDUX_DEVTOOLS_EXTENSION = new InjectionToken("@ngrx/store-devtools Redux Devtools Extension");
var DevtoolsExtension = class {
	constructor(devtoolsExtension, config, dispatcher) {
		this.config = config;
		this.dispatcher = dispatcher;
		this.zoneConfig = injectZoneConfig(this.config.connectInZone);
		this.devtoolsExtension = devtoolsExtension;
		this.createActionStreams();
	}
	notify(action, state) {
		if (!this.devtoolsExtension) return;
		if (action.type === PERFORM_ACTION) {
			if (state.isLocked || state.isPaused) return;
			const currentState = unliftState(state);
			if (shouldFilterActions(this.config) && isActionFiltered(currentState, action, this.config.predicate, this.config.actionsSafelist, this.config.actionsBlocklist)) return;
			const sanitizedState = this.config.stateSanitizer ? sanitizeState(this.config.stateSanitizer, currentState, state.currentStateIndex) : currentState;
			const sanitizedAction = this.config.actionSanitizer ? sanitizeAction(this.config.actionSanitizer, action, state.nextActionId) : action;
			this.sendToReduxDevtools(() => this.extensionConnection.send(sanitizedAction, sanitizedState));
		} else {
			const sanitizedLiftedState = _objectSpread2(_objectSpread2({}, state), {}, {
				stagedActionIds: state.stagedActionIds,
				actionsById: this.config.actionSanitizer ? sanitizeActions(this.config.actionSanitizer, state.actionsById) : state.actionsById,
				computedStates: this.config.stateSanitizer ? sanitizeStates(this.config.stateSanitizer, state.computedStates) : state.computedStates
			});
			this.sendToReduxDevtools(() => this.devtoolsExtension.send(null, sanitizedLiftedState, this.getExtensionConfig(this.config)));
		}
	}
	createChangesObservable() {
		if (!this.devtoolsExtension) return EMPTY;
		return new Observable((subscriber) => {
			const connection = this.zoneConfig.connectInZone ? this.zoneConfig.ngZone.runOutsideAngular(() => this.devtoolsExtension.connect(this.getExtensionConfig(this.config))) : this.devtoolsExtension.connect(this.getExtensionConfig(this.config));
			this.extensionConnection = connection;
			connection.init();
			connection.subscribe((change) => subscriber.next(change));
			return connection.unsubscribe;
		});
	}
	createActionStreams() {
		const changes$ = this.createChangesObservable().pipe(share());
		const start$ = changes$.pipe(filter((change) => change.type === ExtensionActionTypes.START));
		const stop$ = changes$.pipe(filter((change) => change.type === ExtensionActionTypes.STOP));
		const liftedActions$ = changes$.pipe(filter((change) => change.type === ExtensionActionTypes.DISPATCH), map((change) => this.unwrapAction(change.payload)), concatMap((action) => {
			if (action.type === IMPORT_STATE) return this.dispatcher.pipe(filter((action) => action.type === UPDATE), timeout(1e3), debounceTime(1e3), map(() => action), catchError(() => of(action)), take(1));
			else return of(action);
		}));
		const actionsUntilStop$ = changes$.pipe(filter((change) => change.type === ExtensionActionTypes.ACTION), map((change) => this.unwrapAction(change.payload))).pipe(takeUntil(stop$));
		const liftedUntilStop$ = liftedActions$.pipe(takeUntil(stop$));
		this.start$ = start$.pipe(takeUntil(stop$));
		this.actions$ = this.start$.pipe(switchMap(() => actionsUntilStop$));
		this.liftedActions$ = this.start$.pipe(switchMap(() => liftedUntilStop$));
	}
	unwrapAction(action) {
		return typeof action === "string" ? (0, eval)(`(${action})`) : action;
	}
	getExtensionConfig(config) {
		var _config$autoPause, _config$trace, _config$traceLimit;
		const extensionOptions = {
			name: config.name,
			features: config.features,
			serialize: config.serialize,
			autoPause: (_config$autoPause = config.autoPause) !== null && _config$autoPause !== void 0 ? _config$autoPause : false,
			trace: (_config$trace = config.trace) !== null && _config$trace !== void 0 ? _config$trace : false,
			traceLimit: (_config$traceLimit = config.traceLimit) !== null && _config$traceLimit !== void 0 ? _config$traceLimit : 75
		};
		if (config.maxAge !== false) extensionOptions.maxAge = config.maxAge;
		return extensionOptions;
	}
	sendToReduxDevtools(send) {
		try {
			send();
		} catch (err) {
			console.warn("@ngrx/store-devtools: something went wrong inside the redux devtools", err);
		}
	}
};
_DevtoolsExtension = DevtoolsExtension;
_DevtoolsExtension.ɵfac = function DevtoolsExtension_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _DevtoolsExtension)(ɵɵinject(REDUX_DEVTOOLS_EXTENSION), ɵɵinject(STORE_DEVTOOLS_CONFIG), ɵɵinject(DevtoolsDispatcher));
};
_DevtoolsExtension.ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
	token: _DevtoolsExtension,
	factory: _DevtoolsExtension.ɵfac
});
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DevtoolsExtension, [{ type: Injectable }], () => [
		{
			type: void 0,
			decorators: [{
				type: Inject,
				args: [REDUX_DEVTOOLS_EXTENSION]
			}]
		},
		{
			type: StoreDevtoolsConfig,
			decorators: [{
				type: Inject,
				args: [STORE_DEVTOOLS_CONFIG]
			}]
		},
		{ type: DevtoolsDispatcher }
	], null);
})();
var INIT_ACTION = { type: INIT };
var RECOMPUTE = "@ngrx/store-devtools/recompute";
var RECOMPUTE_ACTION = { type: RECOMPUTE };
/**
* Computes the next entry in the log by applying an action.
*/
function computeNextEntry(reducer, action, state, error, errorHandler) {
	if (error) return {
		state,
		error: "Interrupted by an error up the chain"
	};
	let nextState = state;
	let nextError;
	try {
		nextState = reducer(state, action);
	} catch (err) {
		nextError = err.toString();
		errorHandler.handleError(err);
	}
	return {
		state: nextState,
		error: nextError
	};
}
/**
* Runs the reducer on invalidated actions to get a fresh computation log.
*/
function recomputeStates(computedStates, minInvalidatedStateIndex, reducer, committedState, actionsById, stagedActionIds, skippedActionIds, errorHandler, isPaused) {
	if (minInvalidatedStateIndex >= computedStates.length && computedStates.length === stagedActionIds.length) return computedStates;
	const nextComputedStates = computedStates.slice(0, minInvalidatedStateIndex);
	const lastIncludedActionId = stagedActionIds.length - (isPaused ? 1 : 0);
	for (let i = minInvalidatedStateIndex; i < lastIncludedActionId; i++) {
		const actionId = stagedActionIds[i];
		const action = actionsById[actionId].action;
		const previousEntry = nextComputedStates[i - 1];
		const previousState = previousEntry ? previousEntry.state : committedState;
		const previousError = previousEntry ? previousEntry.error : void 0;
		const entry = skippedActionIds.indexOf(actionId) > -1 ? previousEntry : computeNextEntry(reducer, action, previousState, previousError, errorHandler);
		nextComputedStates.push(entry);
	}
	if (isPaused) nextComputedStates.push(computedStates[computedStates.length - 1]);
	return nextComputedStates;
}
function liftInitialState(initialCommittedState, monitorReducer) {
	return {
		monitorState: monitorReducer(void 0, {}),
		nextActionId: 1,
		actionsById: { 0: liftAction(INIT_ACTION) },
		stagedActionIds: [0],
		skippedActionIds: [],
		committedState: initialCommittedState,
		currentStateIndex: 0,
		computedStates: [],
		isLocked: false,
		isPaused: false
	};
}
/**
* Creates a history state reducer from an app's reducer.
*/
function liftReducerWith(initialCommittedState, initialLiftedState, errorHandler, monitorReducer, options = {}) {
	/**
	* Manages how the history actions modify the history state.
	*/
	return (reducer) => (liftedState, liftedAction) => {
		let { monitorState, actionsById, nextActionId, stagedActionIds, skippedActionIds, committedState, currentStateIndex, computedStates, isLocked, isPaused } = liftedState || initialLiftedState;
		if (!liftedState) actionsById = Object.create(actionsById);
		function commitExcessActions(n) {
			let excess = n;
			let idsToDelete = stagedActionIds.slice(1, excess + 1);
			for (let i = 0; i < idsToDelete.length; i++) if (computedStates[i + 1].error) {
				excess = i;
				idsToDelete = stagedActionIds.slice(1, excess + 1);
				break;
			} else delete actionsById[idsToDelete[i]];
			skippedActionIds = skippedActionIds.filter((id) => idsToDelete.indexOf(id) === -1);
			stagedActionIds = [0, ...stagedActionIds.slice(excess + 1)];
			committedState = computedStates[excess].state;
			computedStates = computedStates.slice(excess);
			currentStateIndex = currentStateIndex > excess ? currentStateIndex - excess : 0;
		}
		function commitChanges() {
			actionsById = { 0: liftAction(INIT_ACTION) };
			nextActionId = 1;
			stagedActionIds = [0];
			skippedActionIds = [];
			committedState = computedStates[currentStateIndex].state;
			currentStateIndex = 0;
			computedStates = [];
		}
		let minInvalidatedStateIndex = 0;
		switch (liftedAction.type) {
			case LOCK_CHANGES:
				isLocked = liftedAction.status;
				minInvalidatedStateIndex = Infinity;
				break;
			case PAUSE_RECORDING:
				isPaused = liftedAction.status;
				if (isPaused) {
					stagedActionIds = [...stagedActionIds, nextActionId];
					actionsById[nextActionId] = new PerformAction({ type: "@ngrx/devtools/pause" }, +Date.now());
					nextActionId++;
					minInvalidatedStateIndex = stagedActionIds.length - 1;
					computedStates = computedStates.concat(computedStates[computedStates.length - 1]);
					if (currentStateIndex === stagedActionIds.length - 2) currentStateIndex++;
					minInvalidatedStateIndex = Infinity;
				} else commitChanges();
				break;
			case RESET:
				actionsById = { 0: liftAction(INIT_ACTION) };
				nextActionId = 1;
				stagedActionIds = [0];
				skippedActionIds = [];
				committedState = initialCommittedState;
				currentStateIndex = 0;
				computedStates = [];
				break;
			case COMMIT:
				commitChanges();
				break;
			case ROLLBACK:
				actionsById = { 0: liftAction(INIT_ACTION) };
				nextActionId = 1;
				stagedActionIds = [0];
				skippedActionIds = [];
				currentStateIndex = 0;
				computedStates = [];
				break;
			case TOGGLE_ACTION: {
				const { id: actionId } = liftedAction;
				if (skippedActionIds.indexOf(actionId) === -1) skippedActionIds = [actionId, ...skippedActionIds];
				else skippedActionIds = skippedActionIds.filter((id) => id !== actionId);
				minInvalidatedStateIndex = stagedActionIds.indexOf(actionId);
				break;
			}
			case SET_ACTIONS_ACTIVE: {
				const { start, end, active } = liftedAction;
				const actionIds = [];
				for (let i = start; i < end; i++) actionIds.push(i);
				if (active) skippedActionIds = difference(skippedActionIds, actionIds);
				else skippedActionIds = [...skippedActionIds, ...actionIds];
				minInvalidatedStateIndex = stagedActionIds.indexOf(start);
				break;
			}
			case JUMP_TO_STATE:
				currentStateIndex = liftedAction.index;
				minInvalidatedStateIndex = Infinity;
				break;
			case JUMP_TO_ACTION: {
				const index = stagedActionIds.indexOf(liftedAction.actionId);
				if (index !== -1) currentStateIndex = index;
				minInvalidatedStateIndex = Infinity;
				break;
			}
			case SWEEP:
				stagedActionIds = difference(stagedActionIds, skippedActionIds);
				skippedActionIds = [];
				currentStateIndex = Math.min(currentStateIndex, stagedActionIds.length - 1);
				break;
			case PERFORM_ACTION: {
				if (isLocked) return liftedState || initialLiftedState;
				if (isPaused || liftedState && isActionFiltered(liftedState.computedStates[currentStateIndex], liftedAction, options.predicate, options.actionsSafelist, options.actionsBlocklist)) {
					const lastState = computedStates[computedStates.length - 1];
					computedStates = [...computedStates.slice(0, -1), computeNextEntry(reducer, liftedAction.action, lastState.state, lastState.error, errorHandler)];
					minInvalidatedStateIndex = Infinity;
					break;
				}
				if (options.maxAge && stagedActionIds.length === options.maxAge) commitExcessActions(1);
				if (currentStateIndex === stagedActionIds.length - 1) currentStateIndex++;
				const actionId = nextActionId++;
				actionsById[actionId] = liftedAction;
				stagedActionIds = [...stagedActionIds, actionId];
				minInvalidatedStateIndex = stagedActionIds.length - 1;
				break;
			}
			case IMPORT_STATE:
				({monitorState, actionsById, nextActionId, stagedActionIds, skippedActionIds, committedState, currentStateIndex, computedStates, isLocked, isPaused} = liftedAction.nextLiftedState);
				break;
			case INIT:
				minInvalidatedStateIndex = 0;
				if (options.maxAge && stagedActionIds.length > options.maxAge) {
					computedStates = recomputeStates(computedStates, minInvalidatedStateIndex, reducer, committedState, actionsById, stagedActionIds, skippedActionIds, errorHandler, isPaused);
					commitExcessActions(stagedActionIds.length - options.maxAge);
					minInvalidatedStateIndex = Infinity;
				}
				break;
			case UPDATE:
				if (computedStates.filter((state) => state.error).length > 0) {
					minInvalidatedStateIndex = 0;
					if (options.maxAge && stagedActionIds.length > options.maxAge) {
						computedStates = recomputeStates(computedStates, minInvalidatedStateIndex, reducer, committedState, actionsById, stagedActionIds, skippedActionIds, errorHandler, isPaused);
						commitExcessActions(stagedActionIds.length - options.maxAge);
						minInvalidatedStateIndex = Infinity;
					}
				} else {
					if (!isPaused && !isLocked) {
						if (currentStateIndex === stagedActionIds.length - 1) currentStateIndex++;
						const actionId = nextActionId++;
						actionsById[actionId] = new PerformAction(liftedAction, +Date.now());
						stagedActionIds = [...stagedActionIds, actionId];
						minInvalidatedStateIndex = stagedActionIds.length - 1;
						computedStates = recomputeStates(computedStates, minInvalidatedStateIndex, reducer, committedState, actionsById, stagedActionIds, skippedActionIds, errorHandler, isPaused);
					}
					computedStates = computedStates.map((cmp) => _objectSpread2(_objectSpread2({}, cmp), {}, { state: reducer(cmp.state, RECOMPUTE_ACTION) }));
					currentStateIndex = stagedActionIds.length - 1;
					if (options.maxAge && stagedActionIds.length > options.maxAge) commitExcessActions(stagedActionIds.length - options.maxAge);
					minInvalidatedStateIndex = Infinity;
				}
				break;
			default:
				minInvalidatedStateIndex = Infinity;
				break;
		}
		computedStates = recomputeStates(computedStates, minInvalidatedStateIndex, reducer, committedState, actionsById, stagedActionIds, skippedActionIds, errorHandler, isPaused);
		monitorState = monitorReducer(monitorState, liftedAction);
		return {
			monitorState,
			actionsById,
			nextActionId,
			stagedActionIds,
			skippedActionIds,
			committedState,
			currentStateIndex,
			computedStates,
			isLocked,
			isPaused
		};
	};
}
var StoreDevtools = class {
	constructor(dispatcher, actions$, reducers$, extension, scannedActions, errorHandler, initialState, config) {
		const liftedInitialState = liftInitialState(initialState, config.monitor);
		const liftReducer = liftReducerWith(initialState, liftedInitialState, errorHandler, config.monitor, config);
		const liftedAction$ = merge(merge(actions$.asObservable().pipe(skip(1)), extension.actions$).pipe(map(liftAction)), dispatcher, extension.liftedActions$).pipe(observeOn(queueScheduler));
		const liftedReducer$ = reducers$.pipe(map(liftReducer));
		const zoneConfig = injectZoneConfig(config.connectInZone);
		const liftedStateSubject = new ReplaySubject(1);
		this.liftedStateSubscription = liftedAction$.pipe(withLatestFrom(liftedReducer$), emitInZone(zoneConfig), scan(({ state: liftedState }, [action, reducer]) => {
			let reducedLiftedState = reducer(liftedState, action);
			if (action.type !== PERFORM_ACTION && shouldFilterActions(config)) reducedLiftedState = filterLiftedState(reducedLiftedState, config.predicate, config.actionsSafelist, config.actionsBlocklist);
			extension.notify(action, reducedLiftedState);
			return {
				state: reducedLiftedState,
				action
			};
		}, {
			state: liftedInitialState,
			action: null
		})).subscribe(({ state, action }) => {
			liftedStateSubject.next(state);
			if (action.type === PERFORM_ACTION) {
				const unliftedAction = action.action;
				scannedActions.next(unliftedAction);
			}
		});
		this.extensionStartSubscription = extension.start$.pipe(emitInZone(zoneConfig)).subscribe(() => {
			this.refresh();
		});
		const liftedState$ = liftedStateSubject.asObservable();
		const state$ = liftedState$.pipe(map(unliftState));
		Object.defineProperty(state$, "state", { value: toSignal(state$, {
			manualCleanup: true,
			requireSync: true
		}) });
		this.dispatcher = dispatcher;
		this.liftedState = liftedState$;
		this.state = state$;
	}
	ngOnDestroy() {
		this.liftedStateSubscription.unsubscribe();
		this.extensionStartSubscription.unsubscribe();
	}
	dispatch(action) {
		this.dispatcher.next(action);
	}
	next(action) {
		this.dispatcher.next(action);
	}
	error(error) {}
	complete() {}
	performAction(action) {
		this.dispatch(new PerformAction(action, +Date.now()));
	}
	refresh() {
		this.dispatch(new Refresh());
	}
	reset() {
		this.dispatch(new Reset(+Date.now()));
	}
	rollback() {
		this.dispatch(new Rollback(+Date.now()));
	}
	commit() {
		this.dispatch(new Commit(+Date.now()));
	}
	sweep() {
		this.dispatch(new Sweep());
	}
	toggleAction(id) {
		this.dispatch(new ToggleAction(id));
	}
	jumpToAction(actionId) {
		this.dispatch(new JumpToAction(actionId));
	}
	jumpToState(index) {
		this.dispatch(new JumpToState(index));
	}
	importState(nextLiftedState) {
		this.dispatch(new ImportState(nextLiftedState));
	}
	lockChanges(status) {
		this.dispatch(new LockChanges(status));
	}
	pauseRecording(status) {
		this.dispatch(new PauseRecording(status));
	}
};
_StoreDevtools = StoreDevtools;
_StoreDevtools.ɵfac = function StoreDevtools_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _StoreDevtools)(ɵɵinject(DevtoolsDispatcher), ɵɵinject(ActionsSubject), ɵɵinject(ReducerObservable), ɵɵinject(DevtoolsExtension), ɵɵinject(ScannedActionsSubject), ɵɵinject(ErrorHandler), ɵɵinject(INITIAL_STATE), ɵɵinject(STORE_DEVTOOLS_CONFIG));
};
_StoreDevtools.ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
	token: _StoreDevtools,
	factory: _StoreDevtools.ɵfac
});
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StoreDevtools, [{ type: Injectable }], () => [
		{ type: DevtoolsDispatcher },
		{ type: ActionsSubject },
		{ type: ReducerObservable },
		{ type: DevtoolsExtension },
		{ type: ScannedActionsSubject },
		{ type: ErrorHandler },
		{
			type: void 0,
			decorators: [{
				type: Inject,
				args: [INITIAL_STATE]
			}]
		},
		{
			type: StoreDevtoolsConfig,
			decorators: [{
				type: Inject,
				args: [STORE_DEVTOOLS_CONFIG]
			}]
		}
	], null);
})();
/**
* If the devtools extension is connected out of the Angular zone,
* this operator will emit all events within the zone.
*/
function emitInZone({ ngZone, connectInZone }) {
	return (source) => connectInZone ? new Observable((subscriber) => source.subscribe({
		next: (value) => ngZone.run(() => subscriber.next(value)),
		error: (error) => ngZone.run(() => subscriber.error(error)),
		complete: () => ngZone.run(() => subscriber.complete())
	})) : source;
}
var IS_EXTENSION_OR_MONITOR_PRESENT = new InjectionToken("@ngrx/store-devtools Is Devtools Extension or Monitor Present");
function createIsExtensionOrMonitorPresent(extension, config) {
	return Boolean(extension) || config.monitor !== noMonitor;
}
function createReduxDevtoolsExtension() {
	const extensionKey = "__REDUX_DEVTOOLS_EXTENSION__";
	if (typeof window === "object" && typeof window[extensionKey] !== "undefined") return window[extensionKey];
	else return null;
}
function createStateObservable(devtools) {
	return devtools.state;
}
/**
* Provides developer tools and instrumentation for `Store`.
*
* @usageNotes
*
* ```ts
* bootstrapApplication(AppComponent, {
*   providers: [
*     provideStoreDevtools({
*       maxAge: 25,
*       logOnly: !isDevMode(),
*     }),
*   ],
* });
* ```
*/
function provideStoreDevtools(options = {}) {
	return makeEnvironmentProviders([
		DevtoolsExtension,
		DevtoolsDispatcher,
		StoreDevtools,
		{
			provide: INITIAL_OPTIONS,
			useValue: options
		},
		{
			provide: IS_EXTENSION_OR_MONITOR_PRESENT,
			deps: [REDUX_DEVTOOLS_EXTENSION, STORE_DEVTOOLS_CONFIG],
			useFactory: createIsExtensionOrMonitorPresent
		},
		{
			provide: REDUX_DEVTOOLS_EXTENSION,
			useFactory: createReduxDevtoolsExtension
		},
		{
			provide: STORE_DEVTOOLS_CONFIG,
			deps: [INITIAL_OPTIONS],
			useFactory: createConfig
		},
		{
			provide: StateObservable,
			deps: [StoreDevtools],
			useFactory: createStateObservable
		},
		{
			provide: ReducerManagerDispatcher,
			useExisting: DevtoolsDispatcher
		}
	]);
}
var StoreDevtoolsModule = class StoreDevtoolsModule {
	static instrument(options = {}) {
		return {
			ngModule: StoreDevtoolsModule,
			providers: [provideStoreDevtools(options)]
		};
	}
};
_StoreDevtoolsModule = StoreDevtoolsModule;
_StoreDevtoolsModule.ɵfac = function StoreDevtoolsModule_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _StoreDevtoolsModule)();
};
_StoreDevtoolsModule.ɵmod = /* @__PURE__ */ ɵɵdefineNgModule({ type: _StoreDevtoolsModule });
_StoreDevtoolsModule.ɵinj = /* @__PURE__ */ ɵɵdefineInjector({});
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StoreDevtoolsModule, [{
		type: NgModule,
		args: [{}]
	}], null, null);
})();
//#endregion
export { INITIAL_OPTIONS, RECOMPUTE, REDUX_DEVTOOLS_EXTENSION, StoreDevtools, StoreDevtoolsConfig, StoreDevtoolsModule, provideStoreDevtools };
