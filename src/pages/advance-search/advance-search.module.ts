import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdvanceSearchPage } from './advance-search';

@NgModule({
  declarations: [
    AdvanceSearchPage,
  ],
  imports: [
    IonicPageModule.forChild(AdvanceSearchPage),
  ],
})
export class AdvanceSearchPageModule {}
