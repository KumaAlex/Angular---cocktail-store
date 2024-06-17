import { Component, EventEmitter, Output } from '@angular/core';
import {BasketService} from "../../../services/basket/basket.service";
import {Drink} from "../../../models/drink/drink";


type OrderedProduct = {
  drink: Drink;
  amount: number;
  retail_price: number;
};

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})

export class BasketComponent {
  constructor(private basket: BasketService) {
  }

  orderedProducts: OrderedProduct[] = []

  ngOnInit() {
    this.basket.loadUserBasket();
    this.getOrder();
  }

  getOrder() {
    this.orderedProducts = this.basket.get_from_basket();
  }

  removeOrder(order: OrderedProduct) {
    this.basket.remove_from_basket(order);
    this.getOrder();
  }
}
