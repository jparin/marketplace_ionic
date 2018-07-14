import { Injectable } from '@angular/core';
import { Market } from '../../models/market';
import { Api } from '../api/api';
/*
  Generated class for the PropertiesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class Markets {

  constructor(public api: Api) { }

  query(params?: any) {
    return this.api.get('/markets', params);
  }

  add(market: Market) {

  }

  delete(market: Market) {

  }

}
