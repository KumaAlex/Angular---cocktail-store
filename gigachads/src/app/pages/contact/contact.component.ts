import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  name: string = "";
  surname: string = "";
  email: string = "";
  message: string = "";

  send() {
    this.name = "";
    this.surname = "";
    this.email = "";
    this.message = "";
  }
}
