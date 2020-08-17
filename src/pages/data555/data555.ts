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
  selector: 'page-data555',
  templateUrl: 'data555.html',
})
export class Data555Page {

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
    console.log('ionViewDidLoad Data555Page');
  }

  ionViewWillEnter(): void {
    // this.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.video.url);

    this.load();
  }

  load() : void
  {
    this.http
    .get('http://www.vems.my/iot/data555.php')
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
