import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'general-container',
  templateUrl: './general-container.component.html',
  styleUrls: ['./general-container.component.css']
})
export class GeneralContainerComponent implements OnInit {

  actualValue: number = 10;

  constructor() { }

  ngOnInit() {
  }

  changeValue(value: number) {
    this.actualValue = value;
  }

}
