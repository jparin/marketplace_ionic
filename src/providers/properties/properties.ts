import { Injectable } from '@angular/core';
import { Property } from '../../models/property';
import { Api } from '../api/api';
/*
  Generated class for the PropertiesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class Properties {

  constructor(public api: Api) { }

  query(params?: any) {
    return this.api.get('/properties', params);
  }

  add(property: Property) {

  }

  delete(property: Property) {

  }

}
