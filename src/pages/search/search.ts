import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Market } from '../../models/market';
import { Markets } from '../../providers/providers';

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

  currentMarkets: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public markets: Markets) { }

  /**
   * Perform a service for the proper properties.
   */
  getMarkets(ev) {
    let val = ev.target.value;
    if (!val || !val.trim()) {
      this.currentMarkets = [];
      return;
    }
    this.currentMarkets = this.markets.query({
      name: val
    });
  }

  /**
   * Navigate to the detail page for this property.
   */
  openMarket(market: Market) {
    this.navCtrl.push('TradePage', {
      market: market
    });
  }

}
