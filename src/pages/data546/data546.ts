import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
/**
 * Generated class for the Data1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-data546',
  templateUrl: 'data546.html',
})
export class Data546Page {

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public http: HttpClient,
     private domSanitizer: DomSanitizer) {
  }

No : any;
dateTime : any;
temperature : any;
humidity : any;
current : any;
X : any;
Y : any;
Z : any;
public items : Array<any> = [];

  ionViewDidLoad() {
    console.log('ionViewDidLoad Data546Page');
  }

  ionViewWillEnter(): void {
    // this.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.video.url);

    this.load();
  }

  load() : void
  {
    this.http
    .get('http://www.vems.my/iot/data546.php')
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
