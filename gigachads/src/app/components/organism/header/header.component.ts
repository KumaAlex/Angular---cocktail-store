import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from "@angular/router";
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private r: Router, private login: LoginService) {}

  isAuth: boolean = false;


  checkAuth() {
    this.isAuth = localStorage.getItem('auth') ? true : false;
    this.login.sharedAuth.subscribe((a) => {
      // this.isAuth = a;
      this.isAuth = localStorage.getItem('auth') ? true : false;
    });
  }

  ngOnInit() {
    this.checkAuth();
  }

  unauth() {
    localStorage.removeItem('auth');
    localStorage.removeItem('currentUser');
    this.isAuth = false;
    this.r.navigate(['/catalogue']);
  }

  @Input() search: () => void = () => {};

  receivedData: string = "";

  receiveDataFromChild(data: string) {
    this.receivedData = data;
    this.handle();
  }

  @Output() dataEvent = new EventEmitter<string>();
  handle() {
    this.dataEvent.emit(this.receivedData);
  }
}
