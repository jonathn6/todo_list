import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { DatePipe } from '@angular/common'

/**
 * Generated class for the AddItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-add-item',
  templateUrl: 'add-item.html',
})
export class AddItemPage {
  
  public dateAdded;

  id: string;
  date: string;
  name: string;
  description: string;
  status: string;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController, public datepipe: DatePipe) {
  }  
  //
  // when the user enters new data to be added to the list, build an object, populate the fields, and dismis
  // this view.  When the view is dismissed, the newly created item will be returned to the current view
  //
  saveItem(){
 
    this.dateAdded=new Date();

    let newItem = {
      id: this.dateAdded,
      date: this.datepipe.transform(this.dateAdded, 'MM-dd-yy'),
      name: this.name,
      status: "pending",
      description: this.description
    };
 
    this.view.dismiss(newItem);
 
  }
 
  close(){
    this.view.dismiss();
  }

  ionViewDidLoad() {
  }

}
