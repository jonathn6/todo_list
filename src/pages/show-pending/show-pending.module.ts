import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShowPendingPage } from './show-pending';

@NgModule({
  declarations: [
    ShowPendingPage,
  ],
  imports: [
    IonicPageModule.forChild(ShowPendingPage),
  ],
})
export class ShowPendingPageModule {}
