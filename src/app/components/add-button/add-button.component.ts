import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store } from 'src/app/services/flux-service';

@Component({
  selector: 'add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.css']
})
export class AddButtonComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit() {
  }

  add() {
    const state = this.store.getState();
    this.store.setState({
      ...state,
      value: state.value + 1
    });
  }

}
