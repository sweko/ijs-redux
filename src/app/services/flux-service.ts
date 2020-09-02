import { Injectable } from "@angular/core";

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

    private notifyStateChange() {
        for (const listener of this.listeners) {
            listener();
        }
    }

    // to-do: unregister
    public register(listener:Listener) { 
        this.listeners.push(listener);
    }

    public getState() {
        console.log("State has been requested");
        return {
            ...this.state
        };
    }

    public setState(newState: State) {
        console.log("State has been updated");
        this.state = newState;
        this.notifyStateChange();
    }
}