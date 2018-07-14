import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Favorite } from '../../models/favorite';
import { Favorites } from '../../providers/providers';
import { Markets } from '../../providers/providers';
/**
 * Generated class for the FavoritePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favorite',
  templateUrl: 'favorite.html',
})
export class FavoritePage {
  favorite_list: Favorite[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public favorites: Favorites, public markets: Markets) {
    this.favorite_list = this.favorites.query();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritePage');
  }

   /**
   * Navigate to the detail page for this market.
   */
  openMarket(favorite: Favorite) {
    let selected_market = this.markets.query({market_id:favorite.market_id});
    console.log("selected market");
    console.log(selected_market);
    this.navCtrl.push('TradePage', {
      market: selected_market[0]
    });
  }
}
