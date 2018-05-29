import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
 
@Component({
  selector: 'item-update-item',
  templateUrl: 'item-update.html'
})
export class ItemUpdatePage {
 
  id: string;
  date: string;
  name: string;
  description: string;
  status: string;
 
  constructor(public navParams: NavParams, public view: ViewController){
 
  }
//
// when the user is finished updating the name and/or description, put all the items data into a new
// object and dismis the view.  When the view is dismissed, the newly created object is returned to the
// current view
//
  updateItem() {
    let newItem = {
      id: this.id,
      date: this.date,
      name: this.name,
      status: this.status,
      description: this.description
    };
 
    this.view.dismiss(newItem);
  }
 //
 // when this view is loaded, populate the view's fields with the data passed from the root view.  This
 // information is displayed so the user can update either the items name or description
 //
  ionViewDidLoad() {
    this.id = this.navParams.get('item').id;
    this.date = this.navParams.get('item').date;
    this.name = this.navParams.get('item').name;
    this.description = this.navParams.get('item').description;
    this.status = this.navParams.get('item').status;
  }
 
}
