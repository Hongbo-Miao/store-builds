import { Action, ActionReducer, ActionReducerMap } from './models';
export declare function combineReducers<T, V extends Action = Action>(reducers: ActionReducerMap<T, V>, initialState?: Partial<T>): ActionReducer<T, V>;
export declare function omit(object: {
    [key: string]: any;
}, keyToRemove: string): {};
export declare function compose<A>(): (i: A) => A;
export declare function compose<A, B>(b: (i: A) => B): (i: A) => B;
export declare function compose<A, B, C>(c: (i: B) => C, b: (i: A) => B): (i: A) => C;
export declare function compose<A, B, C, D>(d: (i: C) => D, c: (i: B) => C, b: (i: A) => B): (i: A) => D;
export declare function compose<A, B, C, D, E>(e: (i: D) => E, d: (i: C) => D, c: (i: B) => C, b: (i: A) => B): (i: A) => E;
export declare function compose<A, B, C, D, E, F>(f: (i: E) => F, e: (i: D) => E, d: (i: C) => D, c: (i: B) => C, b: (i: A) => B): (i: A) => F;
