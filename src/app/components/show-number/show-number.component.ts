import { Component, OnInit, Input } from '@angular/core';
import { Store } from 'src/app/services/flux-service';

@Component({
  selector: 'show-number',
  templateUrl: './show-number.component.html',
  styleUrls: ['./show-number.component.css']
})
export class ShowNumberComponent implements OnInit {

  @Input() value: number;

  constructor(private store: Store) { 
    this.store.register(this.refresh.bind(this));
  }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    console.log("Refreshing display");
    const state = this.store.getState();
    this.value = state.value;
  }
}
