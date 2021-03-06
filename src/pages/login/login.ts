import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController, MenuController } from 'ionic-angular';

import { User } from '../../providers/providers';
import { DashboardPage } from '../dashboard/dashboard';
// import { DashboardPage } from '../dashboard/dashboard';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  account: { email: string, password: string } = {
    email: '',
    password: ''
  };

  // Our translated text strings
  private loginErrorString: string;

  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public menu: MenuController,
    public translateService: TranslateService) {
    
    this.translateService.get('LOGIN_ERROR').subscribe((value) => {
      // this.loginErrorString = value;
    })
  }

  // Attempt to login in through our User service
  doLogin() {

    this.navCtrl.setRoot("DashboardPage");
    return false;

    // this.user.login(this.account).subscribe((resp) => {
    //   this.navCtrl.push("DashboardPage");
    // }, (err) => {
    //   this.navCtrl.push("DashboardPage");
    //   // Unable to log in
    //   let toast = this.toastCtrl.create({
    //     message: this.loginErrorString,
    //     duration: 3000,
    //     position: 'top'
    //   });
    //   toast.present();
    // });
  }

  signup() {
    this.navCtrl.push('SignupPage');
  }

  ionViewDidEnter() {
    // the root left menu should be disabled on the tutorial page
    this.menu.enable(false);
  }

  ionViewWillLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }
}
