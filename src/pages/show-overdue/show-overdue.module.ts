import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShowOverduePage } from './show-overdue';

@NgModule({
  declarations: [
    ShowOverduePage,
  ],
  imports: [
    IonicPageModule.forChild(ShowOverduePage),
  ],
})
export class ShowOverduePageModule {}
