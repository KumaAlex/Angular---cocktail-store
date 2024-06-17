import { Component, Input } from '@angular/core';
import { Drink } from 'src/app/models/drink/drink';
import {BasketService} from "../../../services/basket/basket.service";

@Component({
  selector: 'app-alco-card',
  templateUrl: './alco-card.component.html',
  styleUrls: ['./alco-card.component.css']
})
export class AlcoCardComponent {

  @Input() drink: Drink | any = null;

  receivedData: number = 0;

  validator() {
    if (this.amount > 20) {
      this.amount = 20;
    } else if (this.amount < 1) {
      this.amount = 1;
    }
  }
  constructor(private basket: BasketService) { }

  amount: number = 1;

  buyDrink() {
    this.validator();
    let retail_price = ((this.drink.idDrink % 10) * 100 + this.drink.idDrink * 100) / 1000;
    this.basket.add_to_basket(this.drink, this.amount, retail_price);
  }

}
