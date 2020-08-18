import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, App, AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LocationPage } from '../location/location';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {


  public form: FormGroup;
  public location: any[];
  public sensornum: any[];

  public selectedLocation: any[];
  public selectedSensornum: any[];

  public sLocation: any;
  public sSensornum: any;
  //public location_id: any;

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

  public fetch_location : Array<any> = [];
  public fetch_devices : Array<any> = [];
  public fetch_data : Array<any> = [];
  //public items: Array<any> = [];
  public items1: Array<any> = [];
  public items2: Array<any> = [];

  public selectedDevice: any[];
  public devices: any[];
  public location_id: any;

  constructor(  public navCtrl: NavController, 
                public loadingCtrl: LoadingController, 
                public app: App, 
                public alertCtrl: AlertController, 
                public http: HttpClient, 
                public fb: FormBuilder,
                public navParams: NavParams) {

    // Create form builder validation rules
      this.form = fb.group({
        "location": ["", Validators.required],
        "devices": ["", Validators.required]
     });
  }

  ionViewDidLoad() {
    this.load_location();
    this.load_devices();
    //console.log(this.buttons); //no need since dynamic call from db
  }

  load_location() : void
  {
    this.http
    .get('http://www.vems.my/iot/fetch_location.php')
    .subscribe((data : any) =>
    {
       console.dir(data);
       this.fetch_location = data;
        
      },
    (error : any) =>
    {
       console.dir(error);
    });
}
load_devices() : void
{
  this.http
  .get('http://www.vems.my/iot/fetch_devices.php')
  .subscribe((data : any) =>
  {
     console.dir(data);
     this.fetch_devices = data;
    },
  (error : any) =>
  {
     console.dir(error);
  });
}

load_data(sen_id : any, d1 : any, d2 : any) : void
{
  console.log("PARAMETER dlm load_data() : "+ sen_id);
  this.http
  .get('http://www.vems.my/iot/fetch_data.php?sensor_ID=sensor_'+sen_id+'&d1='+d1+'&d2='+d2)
  .subscribe((data : any) =>
  {
     console.dir(data);
     this.fetch_data = data;
    },
  (error : any) =>
  {
     console.dir(error);
  }); 
}
setDeviceValue(location_id) {
  this.selectedDevice = this.fetch_devices.filter(fetch_devices =>
    fetch_devices.location == location_id)
    console.log(this.location_id);
    console.log(this.selectedDevice);
}

//declare test dulu nt delete lepas hantar parameter dari form
public date1: any = 'none';
public date2: any = 'none';
setData(device_id) {
  console.log("PARAMETER dlm setData() : "+ device_id);
  this.load_data(device_id,this.date1,this.date2);
}

  go(param : any ): void {
    console.log("bawak id : "+ param);
    this.navCtrl.push(LocationPage, param);
  }

  /*Declare button of buttons*/ /*
  public buttons : Array<any>=[
    {
      location_id : 'location1',
      location_name : 'LRT Ampang'
    },
    {
      location_id : 'location2',
      location_name : 'LRT Cahaya Station'
    },
    {
      location_id : 'location3',
      location_name : 'LRT Cempaka Station'
    },
    {
      location_id : 'location4',
      location_name : 'LRT Cempaka Station'
    },
    {
      location_id : 'location5',
      location_name : 'LRT Cempaka Station'
    },
    {
      location_id : 'location6',
      location_name : 'LRT Cempaka Station'
    },
    {
      location_id : 'location7',
      location_name : 'LRT Cempaka Station'
    },
    {
      location_id : 'location8',
      location_name : 'LRT Cempaka Station'
    },
    {
      location_id : 'location9',
      location_name : 'LRT Cempaka Station'
    },
    {
      location_id : 'location10',
      location_name : 'LRT Cempaka Station'
    },
    {
      location_id : 'location11',
      location_name : 'LRT Cempaka Station'
    },
    {
      location_id : 'location12',
      location_name : 'LRT Cempaka Station'
    },
    {
      location_id : 'location13',
      location_name : 'LRT Cempaka Station'
    },
    {
      location_id : 'location14',
      location_name : 'LRT Cempaka Station'
    }
  ]; */

/*
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
*/

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