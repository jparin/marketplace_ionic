import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, ViewController, Platform } from 'ionic-angular';
import { Market } from '../../models/market';
import { Markets } from '../../providers/providers';

/**
 * Generated class for the MarketplacePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-marketplace',
  templateUrl: 'marketplace.html',
})
export class MarketplacePage {
  currencies_list: Market[];
  property_list: Market[];
  search_property_list: Market[];
  selected_currency: string = "USD";
  search_query: string = "";

  constructor(public navCtrl: NavController, public markets: Markets, public modalCtrl: ModalController, public viewCtrl: ViewController, public platform: Platform) {
    this.currencies_list = this.markets.query({type : "currency"});
    this.property_list = this.markets.query({type : "property", base_currency: this.selected_currency});

    this.platform.registerBackButtonAction(()=> {
      return false;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MarketplacePage');
  }

  addMarket() {
    let addModal = this.modalCtrl.create('PropertyCreatePage');
    addModal.onDidDismiss(property => {
      if (property) {
        this.markets.add(property);
      }
    })
    addModal.present();
  }

  /**
   * Delete an property from the list of markets.
   */
  deleteMarket(market) {
    this.markets.delete(market);
  }

  /**
   * Navigate to the detail page for this market.
   */
  openMarket(market: Market) {
    this.navCtrl.push('TradePage', {
      market: market
    });
  }

  changeMarketCurrency(selected_currency){
    this.property_list = this.markets.query({base_currency : selected_currency});
    if(this.search_query.trim() != ""){
      this.search_property_list = this.markets.getMarketWithSelectedCurrency({
        name: this.search_query,
        base_currency : this.selected_currency
      });
    }
  }
  
  getMarkets(ev) {
    let val = ev.target.value;
    if (!val || !val.trim()) {
      this.search_property_list = [];
      return;
    }
    this.search_property_list = this.markets.getMarketWithSelectedCurrency({
      name: val,
      base_currency : this.selected_currency
    });
  }

}
