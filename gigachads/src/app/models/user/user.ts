import { Drink } from '../drink/drink';

type OrderedProduct = {
  drink: Drink;
  amount: number;
  retail_price: number;
};

export class User {
  'login': string;
  'password': string;
  'basket': OrderedProduct[];
  'balance': number;
  'number_of_purchases': number = 0;

  constructor(login: string, password: string, balance: number = 30000) {
    this.login = login;
    this.password = password;
    this.basket = [];
    this.balance = balance;
    this.number_of_purchases = 0;
  }
}
