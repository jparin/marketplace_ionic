import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController } from 'ionic-angular';

import { Property } from '../../models/property';
import { Properties } from '../../providers/providers';

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
  currentProperties: Property[];

  constructor(public navCtrl: NavController, public properties: Properties, public modalCtrl: ModalController) {
    this.currentProperties = this.properties.query();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MarketplacePage');
  }

  addProperty() {
    let addModal = this.modalCtrl.create('PropertyCreatePage');
    addModal.onDidDismiss(property => {
      if (property) {
        this.properties.add(property);
      }
    })
    addModal.present();
  }

  /**
   * Delete an property from the list of properties.
   */
  deleteProperty(property) {
    this.properties.delete(property);
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
