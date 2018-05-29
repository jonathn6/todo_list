import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
 
@Component({
  selector: 'page-view-item',
  templateUrl: 'view-item.html'
})
export class ItemDetailPage {
 
  name;
  description;
  status;
 
  constructor(public navParams: NavParams){
 
  }
 
  ionViewDidLoad() {
    this.name = this.navParams.get('item').name;
    this.description = this.navParams.get('item').description;
    this.status = this.navParams.get('item').status;
  }
 
}
