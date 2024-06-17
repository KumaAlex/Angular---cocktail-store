import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {Drink} from "../../models/drink/drink";
import {ApiService} from 'src/app/services/api-service/api.service';


@Component({
  selector: 'app-alco-detail',
  templateUrl: './alco-detail.component.html',
  styleUrls: ['./alco-detail.component.css']
})

export class AlcoDetailComponent {
  constructor(private route: ActivatedRoute, private api: ApiService) {
  }

  curID: string = '';
  curDrink: Drink | any = null;

  ngOnInit() {
    this.getData();
    this.dataObs();
  }

  dataObs() {
    this.api.sharedData.subscribe((array) => {
      this.curDrink = array[0];
    });
  }

  async getData() {
    this.curID = this.route.snapshot.params['id'];
    try {
      this.api.get_by_id(this.curID).subscribe(
        (response) => {
          this.curDrink = response;
          console.log(response);
        }
      );
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

}
