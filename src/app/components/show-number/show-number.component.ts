import { Component, OnInit, Input } from '@angular/core';
import { Store } from 'src/app/services/flux-service';

@Component({
  selector: 'show-number',
  templateUrl: './show-number.component.html',
  styleUrls: ['./show-number.component.css']
})
export class ShowNumberComponent implements OnInit {

  value: number;

  constructor(private store: Store) { }

  ngOnInit() {
    this.value = this.store.state.value;
  }

}
