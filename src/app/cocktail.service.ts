import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
  Cocktail = [
    {
      name: 'The first',
      price: 23,
      img: 'Img1'
    },
    {
      name: 'The second',
      price: 18,
      img: 'Img2'
    },
    {
      name: 'The third',
      price: 24,
      img: 'Img3'
    }
  ];

  constructor() {}

  getCocktails() {
    return this.Cocktail;
  }
}
