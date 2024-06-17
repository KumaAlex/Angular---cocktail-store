import { Component, Input } from '@angular/core';
import { ApiService } from 'src/app/services/api-service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  constructor(private api: ApiService, private r: Router) {}
  receivedData: string = '';

  filter: string = 'name';

  search() {
    switch (this.filter) {
      case 'name':
        this.api.get_by_name(this.receivedData).subscribe();
        break;
      case 'alcoholic':
        this.api.get_by_alcoholic(this.receivedData).subscribe();
        break;
      case 'ingredient':
        this.api.get_by_ingredient(this.receivedData).subscribe();
        break;
      case 'category':
        this.api.get_by_category(this.receivedData).subscribe();
        break;
      case 'glass':
        this.api.get_by_glass(this.receivedData).subscribe();
        break;

      default:
        break;
    }
    this.r.navigate(['/catalogue']);
  }

  receiveDataFromChild(data: string) {
    this.receivedData = data;
  }
}
