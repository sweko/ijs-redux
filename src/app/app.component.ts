import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  appValue: number = 12;

  title = 'ijs-redux';

  doChangeValue(value: number) {
    this.appValue = value; 
  }
}
