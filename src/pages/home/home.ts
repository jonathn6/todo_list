import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { AddItemPage } from '../add-item/add-item'
import { ItemDetailPage } from '../view-item/view-item';
import { ItemUpdatePage } from '../item-update/item-update';
import { ShowPendingPage } from '../show-pending/show-pending';
import { ShowCompletePage } from '../show-complete/show-complete';
import { ShowOverduePage } from '../show-overdue/show-overdue';
import { Storage } from '@ionic/storage';
import { ItemSliding } from 'ionic-angular';
 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
 
  public items = [];
  public pendingItems = [];
  public completedItems = [];
  public overdueItems = [];
  public i;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, private storage: Storage) {
 
  }
 
  ionViewDidLoad(){
    //
    // when the application starts, look to see if there is any saved application data.  If there is,
    // load it so the data is displayed in the root view.
    //
    this.getData();
  }
 
  addItem(){
 
    //
    // when the user elects to add an item to the todo list, push the AddItemPage to the top of the
    // navigation stack.  When the AddItemPage is dismissed, the data collected on the page is returned
    // in 'item'.  If 'item' is returned, add 'item' into the items array and then save the data to
    // storage.
    //

    let addModal = this.modalCtrl.create(AddItemPage);
 
    addModal.onDidDismiss((item) => {
 
          if(item){
            this.saveItem(item);
            this.setData();
          }
 
    });
 
    addModal.present();
 
  }

//
// when the user elects to edit a specific item, first we close the item's sliding status on the root 
// page.  Then, we set up to call ItemUpdatePage and set up the navigation parameter to be 'item'.
// 'item' is the data contained in the specific item the user elected to update.  If 'item' is returned
// by ItemUpdatePage, then we need to find the original instance in the 'items' array based on id and 
// replace the name and description data with the updated data.
//

  editItem(item, slidingItem) {

    this.closeSlider(slidingItem);
    let addModal = this.modalCtrl.create(ItemUpdatePage,{
      item: item
    });
 
    addModal.onDidDismiss((item) => {
 
          if(item){
            this.updateArray(item);
          }
 
    });

    addModal.present();

  }
  
 //
 // save the returned 'item' to the 'items' array
 //

  saveItem(item){
    this.items.push(item);
  }
 
  //
  // when the user elects to view a specific item's data this function will push the
  // ItemDetailPage to the top of the navigation stack and it will pass the object data in 
  // the specific item to the new page in the navigation parameters
  //

  viewItem(item, slidingItem){
    this.closeSlider(slidingItem);
    this.navCtrl.push(ItemDetailPage, {
      item: item
    });
  }
 
  //
  // after the user selects a function after swiping on the 'item' I want to close the swipe
  //

  closeSlider(slidingItem: ItemSliding) {
    slidingItem.close();
  }

  //
  // if the user elects to change the status of an item, this function will set the status of the selected
  // item and then save that data to the app storage
  //

  setStatus(item,status, slidingItem){
    this.closeSlider(slidingItem);
    item.status = status;
    this.setData();
  }

  //
  // if the user elects to update data, this function will find the original item in the items array
  // based on comparing the object id of each element in the items array to the id of the item updated
  // by the user.  When the item is found, the elemens data is replaced with the new data. Then the data
  // will be saved to the app storage.
  //

  updateArray(item) {

    for(this.i = 0; this.i < this.items.length; this.i++) {
      if(this.items[this.i].id == item.id){
        this.items[this.i] = item;
        break;
      }
    }
    this.setData();
  }
//
// if the user elects to delete a specific item, remove that item from the items array and save the
// resulting array to the app storage.
//
  removeItem(item, slidingItem){
    
    this.closeSlider(slidingItem);
    for(this.i = 0; this.i < this.items.length; this.i++) {
 
      if(this.items[this.i] == item){
        this.items.splice(this.i, 1);
      }
 
    }
    this.setData();
 
  }
//
// if the user elects to view all the items flagged as pending, populate an array by filtering
// the 'items' array based on the status being 'pending'.  Then, push the ShowPendingPage passing it
// the new array as a navigation parameter
//
  showPending(){
    this.pendingItems = this.items.filter((item) => {return item.status === "pending"});
     this.navCtrl.push(ShowPendingPage, {
      pendingItems: this.pendingItems      
    });
  }
  //
  // if the user elects to view all the items flagged as completed, populate an array by filtering
  // the 'items' array based on the status being 'complete'.  Then, push the ShowCompletePage passing it
  // the new array as a navigation parameter
  //
  showComplete() {
    this.completedItems = this.items.filter((item) => {return item.status === "complete"});
     this.navCtrl.push(ShowCompletePage, {
      completedItems: this.completedItems      
    });
  }
  //
  // if the user elects to view all the items flagged as overdue, populate an array by filtering
  // the 'items' array based on the status being 'overdue'.  Then, push the ShowOverduePage passing it
  // the new array as a navigation parameter
  //
  showOverdue() {
    this.overdueItems = this.items.filter((item) => {return item.status === "overdue"});
     this.navCtrl.push(ShowOverduePage, {
      overdueItems: this.overdueItems      
    });
  }
//
// save the items array to the app storage
//
  setData() {
    this.storage.set('myData', this.items);
  }
//
// retrieve any app storage data
//
  getData() {
    this.storage.get('myData').then((val) => {
      if (val != null) {
        this.items = val;
      }
    });
  }
}
