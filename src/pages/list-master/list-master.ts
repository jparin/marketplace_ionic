import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';

import { Property } from '../../models/property';
import { Properties } from '../../providers/providers';

@IonicPage()
@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html'
})
export class ListMasterPage {
  currentProperties: Property[];

  constructor(public navCtrl: NavController, public propertys: Properties, public modalCtrl: ModalController) {
    this.currentProperties = this.propertys.query();
  }

  /**
   * The view loaded, let's query our propertys for the list
   */
  ionViewDidLoad() {
  }

  /**
   * Prompt the user to add a new property. This shows our PropertyCreatePage in a
   * modal and then adds the new property to our data source if the user created one.
   */
  addProperty() {
    let addModal = this.modalCtrl.create('PropertyCreatePage');
    addModal.onDidDismiss(property => {
      if (property) {
        this.propertys.add(property);
      }
    })
    addModal.present();
  }

  /**
   * Delete an property from the list of propertys.
   */
  deleteProperty(property) {
    this.propertys.delete(property);
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
