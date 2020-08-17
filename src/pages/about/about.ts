import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, App, AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Location1Page } from '../location1/location1';
import { Location2Page } from '../location2/location2';
import { Location3Page } from '../location3/location3';
import { Location4Page } from '../location4/location4';
import { Location5Page } from '../location5/location5';
import { Location6Page } from '../location6/location6';
import { Location7Page } from '../location7/location7';
import { Location8Page } from '../location8/location8';
import { Location9Page } from '../location9/location9';
import { Location10Page } from '../location10/location10';
import { Location11Page } from '../location11/location11';
import { Location12Page } from '../location12/location12';
import { Location13Page } from '../location13/location13';
import { Location14Page } from '../location14/location14';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {


  public location: any[];
  public sensornum: any[];

  public selectedLocation: any[];
  public selectedSensornum: any[];

  public sLocation: any;
  public sSensornum: any;
  public location_id: any;

  a: any;
  b: any;

  private baseURI: string = "http://www.vems.my/iot/";

  dateTime: any;
  humidity: any;
  temperature: any;
  current: any;
  X: any;
  Y: any;
  Z: any;


  //public items: Array<any> = [];
  public items1: Array<any> = [];
  public items2: Array<any> = [];

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public app: App, public alertCtrl: AlertController, public http: HttpClient, public navParams: NavParams) {
  }
 
  go1(): void {
    this.navCtrl.push(Location1Page);
  }

  go2(): void {
    this.navCtrl.push(Location2Page);
  }
  go3(): void {
    this.navCtrl.push(Location3Page);
  }
  go4(): void {
    this.navCtrl.push(Location4Page);
  }

  go5(): void {
    this.navCtrl.push(Location5Page);
  }
  go6(): void {
    this.navCtrl.push(Location6Page);
  }
  go7(): void {
    this.navCtrl.push(Location7Page);
  }

  go8(): void {
    this.navCtrl.push(Location8Page);
  }
  go9(): void {
    this.navCtrl.push(Location9Page);
  }
  go10(): void {
    this.navCtrl.push(Location10Page);
  }

  go11(): void {
    this.navCtrl.push(Location11Page);
  }
  go12(): void {
    this.navCtrl.push(Location12Page);
  }
  go13(): void {
    this.navCtrl.push(Location13Page);
  }

  go14(): void {
    this.navCtrl.push(Location14Page);
  }


  logout() {
    let alert = this.alertCtrl.create({
      title: 'Logout',
      message: 'Do you really want to logout?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Logout',


          handler: () => {
            //console.log('logout clicked');
            const loading = this.loadingCtrl.create({
              duration: 500
            });
            loading.present();
            window.localStorage.clear();

            this.app.getRootNav().setRoot(LoginPage);


          }
        }
      ]
    });
    alert.present();
  }

  doRefresh(refresher: any) {
    console.log('Begin async operation', refresher);
    this.navCtrl.setRoot(AboutPage);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }
}