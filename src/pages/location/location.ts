import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-location',
  templateUrl: 'location.html',
})
export class LocationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    if (this.navParams.get("record")){
      this.selectEntry(this.selectEntry(this.navParams.get("record")))
    }
    console.log('ionViewDidLoad LocationPage');
  }

  selectEntry(buttons: any):void{
    this.location_id=this.list2.map(buttons=>buttons.location_id);

    for( let i=0;i<=this.list2.length;i++){
      //if(this.list2.id==this.location_id[i]){ }
      console.log("semak id : "+ this.location_id);
    }
  }

  public list2: Array<any> = [
    {
      location_id:"location1",
      device: "ëxample"
    },
    {
      location_id:"location2",
      device: "ëxample"
    }
  ];
  public location_id: Array<any>=[];

}
