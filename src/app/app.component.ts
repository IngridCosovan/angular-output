import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  items = ['item1', 'item2', 'item3', 'item4'];

  greet(name: string) {
    alert('Hello ' + name);
  }


  hi(name: string) {
    alert('I want to eat ' + name);
  }

  ad(drink: string) {
    alert('I advice you to not drink ' + drink)
  }
  
  addItem(newItem: string) {
    this.items.push(newItem);
  }
}
