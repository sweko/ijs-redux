import { Injectable } from "@angular/core";

export interface State {
    value: number;
}

@Injectable()
export class Store {
    state: State = {
        value: 10
    }
}