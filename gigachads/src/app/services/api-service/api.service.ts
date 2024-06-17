import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable, BehaviorSubject } from 'rxjs';
import { Drink } from 'src/app/models/drink/drink';


@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private BaseUrl = 'https://www.thecocktaildb.com/api/json/v1/1/';

  private APIs = {
    name: 'search.php?s=',
    id: 'lookup.php?i=',
    random: 'random.php',
    ingredient: 'filter.php?i=',
    alcoholic: 'filter.php?a=',
    category: 'filter.php?c=',
    glass: 'filter.php?g=',
    allCategories: 'list.php?c=list',
    allGlasses: 'list.php?g=list',
    allIngredients: 'list.php?i=list',
    allAlcoholic: 'list.php?a=list',
  };

  private currentData = new BehaviorSubject<Drink[]>([]);
  sharedData = this.currentData.asObservable();
  constructor() {}

  getCurrentData() {
    return this.sharedData;
  }

  fetchData(url: string): Observable<any> {
    return new Observable((observer) => {
      axios
        .get(this.BaseUrl + url)
        .then((response) => {
          this.currentData.next(response.data.drinks);
        })
        .catch((error) => {
          observer.error(error);
        });
    });
  }



  get_by_name(url: string) {
    return this.fetchData(this.APIs.name + url);
  }
  get_by_id(url: string) {
    return this.fetchData(this.APIs.id + url);
  }
  get_by_random(url: string) {
    return this.fetchData(this.APIs.random + url);
  }
  get_by_ingredient(url: string) {
    return this.fetchData(this.APIs.ingredient + url);
  }
  get_by_alcoholic(url: string) {
    return this.fetchData(this.APIs.alcoholic + url);
  }
  get_by_category(url: string) {
    return this.fetchData(this.APIs.category + url);
  }
  get_by_glass(url: string) {
    return this.fetchData(this.APIs.glass + url);
  }
  get_alltypes_Categories() {
    return this.fetchData(this.APIs.allCategories);
  }
  get_alltypes_Glasses() {
    return this.fetchData(this.APIs.allGlasses);
  }
  get_alltypes_Ingredients() {
    return this.fetchData(this.APIs.allIngredients);
  }
  get_alltypes_Alcoholic() {
    return this.fetchData(this.APIs.allAlcoholic);
  }
}
