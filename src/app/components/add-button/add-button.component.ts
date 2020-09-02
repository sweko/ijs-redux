import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store } from 'src/app/services/flux-service';
import { Action } from "src/app/services/actions";

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
    this.store.executeAction(Action.Increment);
  }

}
