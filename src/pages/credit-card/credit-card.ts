import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CreditCardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-credit-card',
  templateUrl: 'credit-card.html',
})
export class CreditCardPage {
  cet_qty:any;
  usd_total_amount:any;
  btc_total_amount:any;
  selectedPage:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedPage = navParams.get('pageSelected');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreditCardPage');
  }

  cardImage = 'assets/img/misc/credit-card.png';

  // card = {
  //     cardType: '',
  //     cardNumber: '',
  //     redactedCardNumber: '',
  //     expiryMonth: null,
  //     expiryYear: null,
  //     cvv: '',
  //     postalCode: ''
  // };

  amountCompute() {
    this.usd_total_amount = parseInt(this.cet_qty) * 0.005;
    this.btc_total_amount = parseInt(this.cet_qty) * 0.0000005;
  }

 
}
