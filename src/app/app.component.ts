import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  greet(name: string) {
    alert('Hello ' + name);
  }


  hi(name: string) {
    alert('I want to eat ' + name);
  }

  ad(drink: string) {
    alert('I advice you to not drink ' + drink)
  }
}
