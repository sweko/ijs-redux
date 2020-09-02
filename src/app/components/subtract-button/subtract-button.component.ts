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
    this.store.state.value = this.store.state.value - 1;
  }

}
