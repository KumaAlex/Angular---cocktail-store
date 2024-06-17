import { Component } from '@angular/core';
import { Drink } from 'src/app/models/drink/drink';
import { ApiService } from 'src/app/services/api-service/api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  constructor(private api: ApiService) {}

  drinks: Drink[] = [];
  videoUrl: string = "https://www.youtube.com/watch?v=uvKKILoO-Nk";

  ngOnInit() {
    this.dataObs();
  }

  async dataObs() {
    this.api.sharedData.subscribe((array) => {
      this.drinks = array.slice(0, 6);
      console.log(this.videoUrl);
    });
  }

}
