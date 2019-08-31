import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
/**
 * Generated class for the NotificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notification',
  templateUrl: 'notification.html',
})
export class NotificationPage {
  collection = [];
  station :any;
  constructor(public navCtrl: NavController, public http: HttpClient, public navParams: NavParams) {
    this.station = "maluri";
    for (let i = 1; i <= 100; i++) {
      this.collection.push(`item ${i}`);
    }
    //this.initializeLocation();
    //this.initializeSensornum();
  }

No : any;
dateTime : any;
message : any;
e_name : any;
e_ID : any;
sensor_ID : any;
read_type : any;
location_name : any;
type : any;
//public itemsmaluri : Array<any> = [];
//public itemsampang : Array<any> = [];
public items : Array<any> = [];


public location: any[];
public sensornum: any[];

public selectedLocation: any[];
public selectedSensornum: any[];

public sLocation: any;
public sSensornum: any;
public location_id: any;
a: any;
b: any;



  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificationPage');
  }


  ionViewWillEnter() : void
  {
   this.load();
  }

  load() : void
  {
    this.http
    .get('http://www.vems.my/iot/retrievealert.php')
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
/*
else if (this.a == 2) {
  this.http
    .get('http://www.vems.my/iot/diff.php')
    .subscribe((data: any) => {
      console.dir(data);
      this.itemsampang = data;



    },


      (error: any) => {
        console.dir(error);
      });

}


  }
  initializeLocation() {
    this.location = [
      { id: 0, name: 'None' },
      { id: 1, name: 'LRT Ampang Station' },
      { id: 2, name: 'LRT Cahaya Station' },
      { id: 3, name: 'LRT Cempaka Station' },
      { id: 4, name: 'LRT Pandan Indah Station' },
      { id: 5, name: 'LRT Pandan Jaya Station' },
      { id: 6, name: 'LRT Maluri Station' },
      { id: 7, name: 'LRT Miharja Station' },


    ];
  }

  initializeSensornum() {
    this.sensornum = [
      { id: 1, name: '1', location_id: 1, location_name: 'LRT Ampang Station' },
      { id: 1, name: '2', location_id: 1, location_name: 'LRT Ampang Station' },
      { id: 2, name: '15', location_id: 2, location_name: 'LRT Cahaya Station' },
      { id: 3, name: '15', location_id: 3, location_name: 'LRT Cempaka Station' },
      { id: 4, name: '10', location_id: 4, location_name: 'LRT Pandan Indah Station' },
      { id: 5, name: '5', location_id: 5, location_name: 'LRT Pandan Jaya Station' },
      { id: 6, name: '1', location_id: 6, location_name: 'LRT Maluri Station' },
      { id: 7, name: '3', location_id: 7, location_name: 'LRT Miharja Station' },
    ];
  }
  setSensornumValue(sLocation) {
    this.selectedSensornum = this.sensornum.filter(sensornum =>
      sensornum.location_id == sLocation.id)
    console.log(this.sLocation.name)
    this.location_id = this.sLocation.id
  }
  setChild() {
    this.a = this.sSensornum.name;
    this.b = this.sLocation.name;
    //this.ionViewDidLoad();
    this.ionViewWillEnter();
    console.log(this.a);
    console.log(this.b)

  }doRefresh(refresher: any) {
    console.log('Begin async operation', refresher);
    this.navCtrl.setRoot(NotificationPage);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }*/
}