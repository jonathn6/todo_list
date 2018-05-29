import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ItemDetailPage } from '../view-item/view-item';
import { ItemSliding } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-show-overdue',
  templateUrl: 'show-overdue.html',
})
export class ShowOverduePage {

  passedArray;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  //
  // if the user elects to view the details of a specific item, close the swip and push the item by passing
  // the item as a navigation parameter to ItemDetailPage
  //
  viewItem(item, slidingItem){
    this.closeSlider(slidingItem);
    this.navCtrl.push(ItemDetailPage, {
      item: item
    });
  }

  ionViewDidLoad() {
    this.passedArray = this.navParams.get('overdueItems');
  }

  closeSlider(slidingItem: ItemSliding) {
    slidingItem.close();
  }

}
