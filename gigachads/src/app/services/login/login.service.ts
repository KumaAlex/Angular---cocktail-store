import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user/user';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private fakeUserUrl = 'assets/fake_user.json';

  auth: boolean = false;
  private currentAuth = new BehaviorSubject(false);
  sharedAuth = this.currentAuth.asObservable();

  private currentUser!: User;

  constructor(private http: HttpClient, private router: Router) {}

  getCurrentUser() {
    let curUser = localStorage.getItem('currentUser')
    if (curUser) {
      return JSON.parse(curUser);
    }
  }

  setCurrentUser(user: User) {
    localStorage.setItem('currentUser', JSON.stringify(user));
  }

  isAuth(): boolean {
    return localStorage.getItem('auth') === 'true';
  }

  updateUser(user: User) {
    if (user.login.length && user.password.length) {
      let curUsers = localStorage.getItem('users');
      let storedUsers = curUsers ? JSON.parse(curUsers) : [];
      let OK = false;
      if (storedUsers) {
        (storedUsers).forEach((e: any) => {
          if (
            e.user.login === user.login &&
            e.user.password === user.password
          ) {
            e.user.balance = user.balance;
            e.user.password = user.password;
            e.user.basket = user.basket;
            e.user.number_of_purchases = user.number_of_purchases;
            this.setCurrentUser(e.user);
            OK = true;
          }
        });
        if (OK) {
          localStorage.setItem('users', JSON.stringify(storedUsers));
          console.log('User updated successfuly');
        } else {
          console.log('Something is gone wrong during updating user');
        }
      }
    } else {
      console.log('Invalid username or password');
      alert('Invalid username or password');
    }
  }

  authSuccess(user: User) {
    localStorage.setItem('auth', 'true');
    this.currentAuth.next(this.isAuth());
    this.currentUser = user;
    localStorage.setItem('currentUser', JSON.stringify(this.currentUser))
    console.log('Logged in successfuly');
    this.router.navigate(['catalogue']);
  }

  verifyUser(users: [], user: User) {
    if (
      users.find(
        (u: User) => u.login === user.login && u.password === user.password
      )
    )
      return true;
    else {
      let storedUsers = localStorage.getItem('users');
      let OK = false;
      if (storedUsers) {
        JSON.parse(storedUsers).forEach((e: any) => {
          if (e.user.login === user.login && e.user.password === user.password) {
            OK = true;
            user.balance = e.user.balance;
            user.basket = e.user.basket;
            user.number_of_purchases = e.user.number_of_purchases;
          }
        });
      }
      return OK;
    }
  }

  loginUser(user: User) {
    console.log(user);
    let users = this.http.get(this.fakeUserUrl).subscribe((users: any) => {
      if (this.verifyUser(users.users, user)) {
        this.authSuccess(user);
      } else {
        console.log('Invalid username or password');
        alert('Invalid username or password');
      }
    });
  }

  registerUser(user: User) {
    let users = this.http.get(this.fakeUserUrl).subscribe((users: any) => {
      if (this.verifyUser(users.users, user)) {
        console.log('This user already exists');
        alert('This user already exists');
      } else {
        if (user.login.length && user.password.length >= 8) {
          this.authSuccess(user);
          let storedUsers = localStorage.getItem('users');
          let curUsers = storedUsers ? JSON.parse(storedUsers) : [];
          curUsers.push({ user });
          localStorage.setItem('users', JSON.stringify(curUsers));
          console.log('Registered in successfuly');
        } else {
          console.log('Invalid username or password');
          alert('Invalid username or password');
        }
      }
    });
  }
}
