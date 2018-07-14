import { Injectable } from '@angular/core';
import { Favorite } from '../../models/favorite';
import { Api } from '../api/api';
/*
  Generated class for the PropertiesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class Favorites {

  constructor(public api: Api) { }

  query(params?: any) {
    return this.api.get('/favorites', params);
  }

  add(favorite: Favorite) {

  }

  delete(favorite: Favorite) {

  }

}
