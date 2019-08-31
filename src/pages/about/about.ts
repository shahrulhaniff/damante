import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, App, AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { HttpClient, HttpHeaders } from '@angular/common/http';


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

    this.initializeLocation();
    this.initializeSensornum();
  }
  ionViewWillEnter(): void {
    this.load();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
    this.setChild;
    
  }


  load(): void {
    if (this.a == 1) {
    
       this.http
       .get('http://www.vems.my/iot/retrievedata.php')
       .subscribe((data : any) =>
       {
          console.dir(data);
          this.items2 = data;
       
         
  
         },
 
         
       (error : any) =>
       {
          console.dir(error);
       });
      }
    if (this.a == 1) {
      this.http
        .get('http://www.vems.my/iot/display.php')
        .subscribe((data: any) => {
          console.dir(data);
          this.items1 = data;



        },


          (error: any) => {
            console.dir(error);
          });
    }

    else if (this.a == 2) {
      this.http
        .get('http://www.vems.my/iot/diff.php')
        .subscribe((data: any) => {
          console.dir(data);
          this.items1 = data;



        },


          (error: any) => {
            console.dir(error);
          });

    }
  }


  

  //onChange(setSensornumValue(sLocation)){
  //console.log(setSensornumValue(sLocation).target.value);}
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


  //location_id;
  setSensornumValue(sLocation) {
    this.selectedSensornum = this.sensornum.filter(sensornum =>
      sensornum.location_id == sLocation.id)
    console.log(this.sLocation.name)
    this.location_id = this.sLocation.id
  }

  /*setSensornumValue(sLocation) {
    this.selectedSensornum = this.sensornum.filter(sensornum =>
      sensornum.location_id == sLocation.id)
    console.log(this.sLocation.name)
  }*/

  setChild() {
    this.a = this.sSensornum.name;
    this.b = this.sLocation.name;
    //this.ionViewDidLoad();
    this.ionViewWillEnter();
    console.log(this.a);
    console.log(this.b)

  }

  onLED(): void {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/json' }),
      options: any = { "key": "update" },
      url: any = "http://www.vems.my/iot/updateLEDstatus.php";

    this.http.post(url, JSON.stringify(options), headers)

  }


  @ViewChild('myInput') myInput: ElementRef;
  resize() {
    var element = this.myInput['_elementRef'].nativeElement.getElementsByClassName("text-input")[0];
    var scrollHeight = element.scrollHeight;
    element.style.height = scrollHeight + 'px';
    this.myInput['_elementRef'].nativeElement.style.height = (scrollHeight + 16) + 'px';

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