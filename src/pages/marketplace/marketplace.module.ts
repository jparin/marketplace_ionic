import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { MarketplacePage } from './marketplace';

@NgModule({
  declarations: [
    MarketplacePage,
  ],
  imports: [
    IonicPageModule.forChild(MarketplacePage),
    TranslateModule.forChild()
  ],
})
export class MarketplacePageModule {}
