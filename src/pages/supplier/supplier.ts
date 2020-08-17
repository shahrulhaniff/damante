import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { AddsupplierPage } from '../addsupplier/addsupplier';
/**
 * Generated class for the SupplierPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-supplier',
  templateUrl: 'supplier.html',
})
export class SupplierPage {

  constructor(public navCtrl: NavController, public http: HttpClient, public navParams: NavParams) {
  }

  id : any;
  name : any;
  code : any;

  public items : Array<any> = [];

  ionViewDidLoad() {
    console.log('ionViewDidLoad SupplierPage');
  }

  ionViewWillEnter() : void
  {
   this.load();
  }
  addsupplierPage(): void {
    this.navCtrl.push(AddsupplierPage);
  }


  load() : void
  {
    this.http
    .get('http://myprism.my/iot/supplier.php')
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
