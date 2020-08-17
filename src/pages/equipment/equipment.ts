import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { AddassetPage } from '../addasset/addasset';
/**
 * Generated class for the EquipmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-equipment',
  templateUrl: 'equipment.html',
})
export class EquipmentPage {

  constructor(public navCtrl: NavController, public http: HttpClient, public navParams: NavParams) {
  }

  num : any;
  e_name : any;
  e_ID : any;
  sensor_ID : any;
  location_name : any;
  

  public items : Array<any> = [];


  ionViewDidLoad() {
    console.log('ionViewDidLoad EquipmentPage');
  }

  ionViewWillEnter() : void
  {
   this.load();
  }
  addassetPage(): void {
    this.navCtrl.push(AddassetPage);
  }


  load() : void
  {
    this.http
    .get('http://www.vems.my/iot/equipment.php')
    .subscribe((data : any) =>
    {
       console.dir(data);
       this.items = data;
        
      },
    (error : any) =>
    {
       console.dir(error);
    });
}
}
