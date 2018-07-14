import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SellPropertyPage } from './sell-property';

@NgModule({
  declarations: [
    SellPropertyPage,
  ],
  imports: [
    IonicPageModule.forChild(SellPropertyPage),
  ],
})
export class SellPropertyPageModule {}
