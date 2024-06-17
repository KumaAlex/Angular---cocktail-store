import { Component } from '@angular/core';
import { ApiService } from './services/api-service/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gigachads';

  constructor(private apiService: ApiService) {}

  receivedData: string = "";

  receiveDataFromChild(data: string) {
    this.receivedData = data;
    console.log('cat');
  }

  ngOnInit() {
    this.fetchData();
  }

  cards = [];


  fetchData = () => {
    this.apiService.get_by_name(this.receivedData).subscribe(
      (response) => {
        this.cards = response.drinks;
        console.log(this.cards);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
