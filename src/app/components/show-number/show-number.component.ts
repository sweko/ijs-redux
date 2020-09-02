import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'show-number',
  templateUrl: './show-number.component.html',
  styleUrls: ['./show-number.component.css']
})
export class ShowNumberComponent implements OnInit {

  @Input() value: number;

  constructor() { }

  ngOnInit() {
  }

}
