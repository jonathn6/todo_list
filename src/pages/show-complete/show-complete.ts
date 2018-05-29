import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ItemDetailPage } from '../view-item/view-item';
import { ItemSliding } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-show-complete',
  templateUrl: 'show-complete.html',
})
export class ShowCompletePage {

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
    this.passedArray = this.navParams.get('completedItems');
  }

  closeSlider(slidingItem: ItemSliding) {
    slidingItem.close();
  }

}
