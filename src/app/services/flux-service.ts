import { Injectable } from '@angular/core';

export interface State {
    value: number;
}

export type Listener = () => void;

@Injectable()
export class Store {
    private state: State = {
        value: 10
    }

    private listeners: Listener[] = [];

    public getState() {
        // NOT FOOLPROOF
        return {
            ...this.state
        };
    }

    // todo: unregister
    public register(listener: Listener) {
        this.listeners.push(listener);
    }

    private notifyChange() {
        for (const listener of this.listeners) {
            listener();
        }
    }

    public setState(newState: State) {
        this.state = newState;
        this.notifyChange();
    }
}