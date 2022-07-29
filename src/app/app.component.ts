import {
  ANALYZE_FOR_ENTRY_COMPONENTS,
  Component,
  VERSION,
} from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  greet(name: string) {
    alert('Hello ' + name);
  }
}
