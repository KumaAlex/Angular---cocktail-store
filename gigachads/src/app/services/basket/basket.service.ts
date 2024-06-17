import { Injectable } from '@angular/core';
import { Drink } from '../../models/drink/drink';
import { User } from 'src/app/models/user/user';
import { LoginService } from '../login/login.service';

type OrderedProduct = {
  drink: Drink;
  amount: number;
  retail_price: number;
};
@Injectable({
  providedIn: 'root',
})
export class BasketService {
  constructor(private login: LoginService) {}
  private orderedProducts: OrderedProduct[] = [];
  private currentUser!: User;
  private totalPrice: number = 0;

  countTotalPrice() {
    this.totalPrice = 0;
    this.currentUser.basket.forEach(e => {
      this.totalPrice += parseFloat((e.amount * e.retail_price).toFixed(2));
    });
  }

  loadUserBasket() {
    let localUser = localStorage.getItem('currentUser')
    if (localUser) {
      let curUser: User = JSON.parse(localUser);
      this.orderedProducts = curUser.basket;
    }
  }

  updateUserBasket() {
    if (this.login.getCurrentUser()) {
      this.currentUser = this.login.getCurrentUser();
      this.currentUser.basket = this.orderedProducts;
      this.login.updateUser(this.currentUser);
    }
  }

  buy_basket() {
    this.currentUser = this.login.getCurrentUser();
    this.countTotalPrice();
    if (this.currentUser.balance < this.totalPrice) {
      console.log("Not enough money");
      alert("Not enough money");
      return;
    }
    this.currentUser.balance = parseFloat((this.currentUser.balance - this.totalPrice).toFixed(2));
    this.currentUser.basket = [];
    this.currentUser.number_of_purchases += 1;
    this.login.updateUser(this.currentUser);
    this.clear_basket();
    return;
  }

  clear_basket() {
    this.totalPrice = 0;
    this.orderedProducts = [];
    this.currentUser = this.login.getCurrentUser();
    this.currentUser.basket = [];
    this.login.updateUser(this.currentUser);
  }

  add_to_basket(drink: Drink, amount: number, retail_price: number) {
    this.updateUserBasket();
    for (let i of this.orderedProducts) {
      if (i.drink === drink) {
        i.amount += amount;
        if (i.amount >= 20) i.amount = 20;
        return;
      }
    }
    const item = {
      drink: drink,
      amount: amount,
      retail_price: retail_price,
    };
    this.orderedProducts.push(item);
    this.updateUserBasket();
  }

  remove_from_basket(drink: OrderedProduct) {
    this.orderedProducts = this.orderedProducts.filter(
      (product) => product !== drink
    );
    this.totalPrice =
      parseFloat(this.totalPrice.toFixed(2)) +
      parseFloat((drink.retail_price * drink.amount).toFixed(2));
    this.updateUserBasket();
  }

  get_from_basket() {
    return (this.orderedProducts);
  }

  get_total_price() {
    return this.totalPrice;
  }
}
