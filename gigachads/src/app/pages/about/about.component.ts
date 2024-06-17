import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  data: any;

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.http.get("assets/fake_data.json").subscribe((data) => {
      if (data) {
        this.data = JSON.parse(JSON.stringify(data));
      }
    });
  }
}
