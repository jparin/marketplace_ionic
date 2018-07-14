import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { PropertyCreatePage } from './property-create';

@NgModule({
  declarations: [
    PropertyCreatePage,
  ],
  imports: [
    IonicPageModule.forChild(PropertyCreatePage),
    TranslateModule.forChild()
  ],
})
export class PropertyCreatePageModule {}
