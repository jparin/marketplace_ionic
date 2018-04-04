import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { PropertyDetailPage } from './property-detail';

@NgModule({
  declarations: [
    PropertyDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(PropertyDetailPage),
    TranslateModule.forChild()
  ],
})
export class PropertyDetailPageModule {}
