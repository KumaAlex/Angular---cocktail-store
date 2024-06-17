import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';
import { User } from 'src/app/models/user/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private loginService: LoginService) {}

  username: string = "";
  password1: string = "";
  password2: string = "";

  register() {
    if (this.password1 === this.password2) {
      const user: User = new User(this.username, this.password1);
      console.log(user);
      this.loginService.registerUser(user);
    } else {
      console.log("Passwords are not the same");
      alert("Passwords are not the same")
    }
  }
}
