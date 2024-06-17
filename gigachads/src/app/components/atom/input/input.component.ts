import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})

export class InputComponent {
  @Input() input_placeholder: string = "";
  @Output() dataEvent = new EventEmitter<string>();


  text: string = "";
  handle() {
    this.dataEvent.emit(this.text);
  }

}



