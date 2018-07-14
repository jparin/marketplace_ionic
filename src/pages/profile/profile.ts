import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  user;

  users = [
    { user_id : 1, email: 'carlosmatos@bitconnect.com', name: 'Carlos Matos', address: 'San Pedro, Laguna', mobile : '+63 915 607 0154', image: 'carlo.jpg', 
    properties : [ 
      {
        property_id : 1,
        title: '645sqm Lot for sale at Banyan Ridge Timberland Heights San Mateo',
        address: 'Philippines, San Mateo, Malanday Malanday, San Mateo',
        token_owned : 37
      },
      {
        property_id : 2,
        title: '33sqm Lot for sale at Banyan Ridge Timberland Heights San Mateo',
        address: 'Philippines, Navarro, General Trias, Cavite',
        token_owned : 12
      },
      {
        property_id : 3,
        title: '40sqm Lot for sale at Banyan Oracle San Mateo',
        address: 'Philippines, San Mateo,  Malanday, San Vicente',
        token_owned : 14
      }
    ]
    },
    { user_id : 2, email: 'satoshinakamoto@bitcoin.com', name: 'Satoshi Nakamoto', image: 'mystery.png', mobile : '+63 916 102 0111', address: 'Malate, Manila', 
    properties : [ 
      {
        property_id : 1,
        title: '645sqm Lot for sale at Banyan Ridge Timberland Heights San Mateo',
        address: 'Philippines, San Mateo, Malanday Malanday, San Mateo',
        token_owned : 37
      },
      {
        property_id : 2,
        title: '33sqm Lot for sale at Banyan Ridge Timberland Heights San Mateo',
        address: 'Philippines, Navarro, General Trias, Cavite',
        token_owned : 12
      },
      {
        property_id : 3,
        title: '40sqm Lot for sale at Banyan Oracle San Mateo',
        address: 'Philippines, San Mateo,  Malanday, San Vicente',
        token_owned : 14
      }
    ]
    }
  ]



  constructor(public navCtrl: NavController, public navParams: NavParams) {

    var selected_userId = this.navParams.get('userId');
    this.user = this.getUser(selected_userId);
    console.log(this.user);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  ionViewDidLeave() {
    // this.navCtrl.popToRoot();
  }


  getUser(user_id) {
    var u = {}
    this.users.forEach(user => {
      console.log(user);
      if(user.user_id == user_id){
         u = user;
         return true;
      }
    });

    return u;
  }

  viewProperty(propertyId){

  }
}
