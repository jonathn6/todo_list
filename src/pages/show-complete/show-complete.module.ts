import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShowCompletePage } from './show-complete';

@NgModule({
  declarations: [
    ShowCompletePage,
  ],
  imports: [
    IonicPageModule.forChild(ShowCompletePage),
  ],
})
export class ShowCompletePageModule {}
