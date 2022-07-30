import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Output() greetEvent = new EventEmitter();
  name = 'CCC';

  @Output() outSayHi = new EventEmitter();
  desire = 'icecream';

  @Output() newItemEvent = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  callParentGreet() {
    this.greetEvent.emit(this.name);
  }

  sayHi() {
    this.outSayHi.emit(this.desire);
  }

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
}
