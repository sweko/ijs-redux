import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store } from 'src/app/services/flux-service';

@Component({
  selector: 'subtract-button',
  templateUrl: './subtract-button.component.html',
  styleUrls: ['./subtract-button.component.css']
})
export class SubtractButtonComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit() {
  }

  subtract() {
    const state = this.store.getState();
    this.store.setState({
      ...state,
      value: state.value - 1
    });
  }

}
