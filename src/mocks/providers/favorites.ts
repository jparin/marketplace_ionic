import { Injectable } from '@angular/core';

import { Market } from '../../models/market';
import { Favorite } from '../../models/favorite';

@Injectable()
export class Favorites {
  favorites: Favorite[] = [];

  defaultMarket: any = {};


  constructor() {
    let favorite = [];

    for (let favorite of this.favorites) {
      this.favorites.push(new Favorite(Favorite));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.favorites;
    }

    return this.favorites.filter((favorite) => {
      for (let key in params) {
        let field = favorite[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return favorite;
        } else if (field == params[key]) {
          return favorite;
        }
      }
      return null;
    });
  }

  add(favorite: Favorite) {
    this.favorites.push(favorite);
  }

  delete(favorite: Favorite) {
    this.favorites.splice(this.favorites.indexOf(favorite), 1);
  }
}
