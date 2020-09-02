import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  @Input() theValue: number;
  @Output() changeValue: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  doChangeValue(value: number) {
    this.theValue = value;  
    this.changeValue.emit(this.theValue);
  }

}
