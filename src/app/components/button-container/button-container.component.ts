import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';


@Component({
  selector: 'button-container',
  templateUrl: './button-container.component.html',
  styleUrls: ['./button-container.component.css']
})
export class ButtonContainerComponent implements OnInit {

  @Input() value: number;

  @Output() changeValue: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  doChangeValue(number) {
    this.changeValue.emit(number);
  }

}
