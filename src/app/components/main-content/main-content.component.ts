import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  @Input() actualValue: number;
  
  @Output() clicked: EventEmitter<number> = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  changeValue(value: number) {
    this.actualValue = value;
    this.clicked.emit(this.actualValue);
  }

}
