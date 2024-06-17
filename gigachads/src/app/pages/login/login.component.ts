import { Component } from '@angular/core';
import { User } from 'src/app/models/user/user';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private loginService: LoginService) {}

  username: string = "";
  password: string = "";

  login() {
    const user: User = new User(this.username, this.password);
    this.loginService.loginUser(user);
  }
  
}
