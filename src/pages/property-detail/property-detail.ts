import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Properties } from '../../providers/providers';
/**
 * Generated class for the PropertyDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-property-detail',
  templateUrl: 'property-detail.html',
})
export class PropertyDetailPage {

  property: any;

  constructor(public navCtrl: NavController, navParams: NavParams, properties: Properties) {
    this.property = navParams.get('property') || properties.defaultProperty;
  }

}
