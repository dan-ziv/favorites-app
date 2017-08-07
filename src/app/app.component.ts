import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'app';
  public screen: string;

  constructor() {
    this.screen = 'f';
  }

  public changeScreen(screen: string) {
    if (this.screen !== screen) {
      this.screen = screen;
    }
  }
}
