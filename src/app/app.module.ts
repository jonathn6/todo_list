import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { DatePipe } from '@angular/common'
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AddItemPage } from '../pages/add-item/add-item';
import { ItemDetailPage } from '../pages/view-item/view-item';
import { ItemUpdatePage } from '../pages/item-update/item-update';
import { ShowPendingPage } from '../pages/show-pending/show-pending';
import { ShowCompletePage } from '../pages/show-complete/show-complete';
import { ShowOverduePage } from '../pages/show-overdue/show-overdue';
import { IonicStorageModule  } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddItemPage,
    ItemDetailPage,
    ItemUpdatePage,
    ShowPendingPage,
    ShowCompletePage,
    ShowOverduePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddItemPage,
    ItemDetailPage,
    ItemUpdatePage,
    ShowPendingPage,
    ShowCompletePage,
    ShowOverduePage
  ],
  providers: [
    DatePipe,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
