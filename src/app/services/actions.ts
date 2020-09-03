import { State } from "./flux-service";

export enum Action {
    Increment = "increment",
    Decrement = "decrement",
    IncrementBy = "increment-by"
}

export type Reducer<T = any> = (state: State, payload: T) => State;

const increment: Reducer<never> = (state: State) => {
    return {
        ...state,
        value: state.value + 1
    };
}

const incrementBy: Reducer<number> = (state: State, payload: number) => {
    return {
        ...state,
        value: state.value + payload
    };
}

const decrement = (state: State) => {
    return {
        ...state,
        value: state.value - 1
    }
}

const x: {[key: number]: string} = {};

export const actions: {[key in Action]: Reducer} = {
    [Action.Increment] : increment,
    [Action.Decrement] : decrement,
    [Action.IncrementBy] : incrementBy,
}