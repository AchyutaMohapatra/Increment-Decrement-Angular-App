import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo-app';
  num = 1;

  add(){
    this.num = this.num + 1;
  }

  sub(){
    this.num = this.num - 1;
  }
}
