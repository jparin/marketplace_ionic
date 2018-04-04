import { Component, ViewChild } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { TranslateService } from '@ngx-translate/core';
import { Config, Nav, Platform } from 'ionic-angular';

import { FirstRunPage } from '../pages/pages';
import { Settings } from '../providers/providers';

@Component({
  template: `<ion-menu [content]="content">
    <ion-header>
      <ion-toolbar class="menu-toolbar">
        <img class="menu-logo" src="assets/imgs/logo.png">
        <h1>Cestates</h1>
        <span class="menu-sub-heading">Marketplace</span>
        <div class="menu-other-content">
          <div>
             <ion-icon name="person"></ion-icon> <span>Joed Parin</span>
          </div>
          <div>
            <img class="cestates-currency" src="assets/imgs/logo-small.png"> 
            <span>123432.323</span>
          </div>
        </div>
      </ion-toolbar>
    </ion-header>

    <ion-content class="menu-pages-list">
      <ion-list>
        <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)"><ion-icon name="{{p.icon}}"></ion-icon>
          {{p.title}}
        </button>
      </ion-list>
    </ion-content>

  </ion-menu>
  <ion-nav #content [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage = FirstRunPage;

  @ViewChild(Nav) nav: Nav;

  pages: any[] = [
    { title: 'Dashboard', icon: 'ios-apps', component: 'DashboardPage' },
    { title: 'Messages', icon: 'ios-chatboxes',component: 'MessagesPage' },
    { title: 'Marketplace', icon: 'ios-home',component: 'MarketplacePage' },
    { title: 'My Properties', icon: 'ios-home-outline', component: 'MarketplacePage' },
    { title: 'Profile', icon: 'md-contact',component: 'ProfilePage' },
    { title: 'Wallet', icon: 'md-card',component: 'WalletPage' },
    { title: 'Settings', icon: 'ios-cog',component: 'SettingsPage' },
    { title: 'Search', icon: 'ios-search',component: 'SearchPage' }
  ]

  constructor(private translate: TranslateService, platform: Platform, settings: Settings, private config: Config, private statusBar: StatusBar, private splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    this.initTranslate();
  }

  initTranslate() {
    // Set the default language for translation strings, and the current language.
    this.translate.setDefaultLang('en');
    const browserLang = this.translate.getBrowserLang();

    if (browserLang) {
      if (browserLang === 'zh') {
        const browserCultureLang = this.translate.getBrowserCultureLang();

        if (browserCultureLang.match(/-CN|CHS|Hans/i)) {
          this.translate.use('zh-cmn-Hans');
        } else if (browserCultureLang.match(/-TW|CHT|Hant/i)) {
          this.translate.use('zh-cmn-Hant');
        }
      } else {
        this.translate.use(this.translate.getBrowserLang());
      }
    } else {
      this.translate.use('en'); // Set your language here
    }

    this.translate.get(['BACK_BUTTON_TEXT']).subscribe(values => {
      this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
