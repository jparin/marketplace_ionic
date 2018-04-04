import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Property } from '../../models/property';
import { Properties } from '../../providers/providers';

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

  currentProperties: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public properties: Properties) { }

  /**
   * Perform a service for the proper properties.
   */
  getProperties(ev) {
    let val = ev.target.value;
    if (!val || !val.trim()) {
      this.currentProperties = [];
      return;
    }
    this.currentProperties = this.properties.query({
      name: val
    });
  }

  /**
   * Navigate to the detail page for this property.
   */
  openProperty(property: Property) {
    this.navCtrl.push('PropertyDetailPage', {
      property: property
    });
  }

}
