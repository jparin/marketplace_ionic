import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

/**
 * Generated class for the MyAccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-account',
  templateUrl: 'my-account.html',
})
export class MyAccountPage {
  upgradeModal: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public modal: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyAccountPage');
  }

  upgradeAccount(level){
    switch(level){
      case 1:
        this.presentAccountVerificationModal(level);
      break;
      case 2:

      break;
      case 3:

      break;
    }
  }

  presentAccountVerificationModal(level) {
    this.upgradeModal = this.modal.create("UserVerificationPage", { lvl: level });
    this.upgradeModal.present();
  }

  closeModal(){
    this.upgradeModal.dismiss();
  }
}
