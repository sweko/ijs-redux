import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'subtract-button',
  templateUrl: './subtract-button.component.html',
  styleUrls: ['./subtract-button.component.css']
})
export class SubtractButtonComponent implements OnInit {

  @Input() value: number;
  @Output() clicked: EventEmitter<number> = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  subtract() {
    this.clicked.emit(this.value - 1);
  }

}
