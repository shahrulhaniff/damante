import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { NotificationPage } from '../notification/notification';
import { HttpClient } from '@angular/common/http';
NotificationPage;
//@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  collection = [];
  station :any;
  video: any = {
    url: 'https://www.youtube.com/embed/7fs7_HIM8Ig',
    title: 'Damante Corporate video'
};
trustedVideoUrl: SafeResourceUrl;
  ImageArray: { 'image': string; }[];
  constructor(public navCtrl: NavController,
    private domSanitizer: DomSanitizer, public http: HttpClient) {
      this.station = "maluri";
      for (let i = 1; i <= 100; i++) {
        this.collection.push(`item ${i}`);
      }
      // this.ImageArray = [
      //   { 'image': '../../assets/imgs/lora1.jpg' },
      //   { 'image': '../../assets/imgs/lora2.jpg' },
      //   { 'image': '../../assets/imgs/motor.jpg' },
      // ]
  }


  No : any;
  read_val : any;
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
  
  

  ionViewWillEnter(): void {
    // this.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.video.url);

    this.load();
  }

  load() : void
  {
    this.http
    .get('http://myprism.my/iot/retrievealert.php')
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

notiPage(): void {
  this.navCtrl.push(NotificationPage);
}

}