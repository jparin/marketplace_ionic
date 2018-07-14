import { Component, ViewChild } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { TranslateService } from '@ngx-translate/core';
import { Config, Nav, Platform, App } from 'ionic-angular';
import { timer } from 'rxjs/observable/timer'; 

// import {LoginPage} from '../pages/login/login';
import { Settings } from '../providers/providers';
import {FirstRunPage} from '../pages/pages';
@Component({
  selector: 'page-side-menu',
  templateUrl: 'side_menu.html'
})
export class MyApp {
  rootPage = FirstRunPage;
  current_page = "test";
  @ViewChild(Nav) nav: Nav;
  
  platform;
  
  pages: any[] = [
    { title: 'Dashboard', icon: 'ios-apps', component: 'DashboardPage' },
    { title: 'Messages', icon: 'ios-chatboxes',component: 'MessagesPage' },
    { title: 'Marketplace', icon: 'ios-home',component: 'TabsPage' },
    { title: 'Wallet', icon: 'md-card',component: 'WalletPage' },
    { title: 'Settings', icon: 'ios-cog',component: 'SettingsPage' }
    // { title: 'Search', icon: 'ios-search',component: 'SearchPage' }
  ]

  showSplash = true;

  constructor(private translate: TranslateService, platform: Platform, settings: Settings, private config: Config, private statusBar: StatusBar, private splashScreen: SplashScreen, public app:App) {
    this.platform = platform;
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      timer(0).subscribe(()=> this.showSplash = false);


    });
    this.initTranslate(); 

    console.log("APP COMPONENTS");
    
    // console.log(this.nav);
    this.platform.registerBackButtonAction(() => {
      alert("back");
    },1);
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
      this.config.set('android', 'backButtonText', values.BACK_BUTTON_TEXT);
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
      this.nav.setRoot(page.component);
  }
}
