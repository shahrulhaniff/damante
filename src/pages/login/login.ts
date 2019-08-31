import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, AlertController, LoadingController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public http   : HttpClient, public app: App, public alertCtrl: AlertController , public loadingCtrl : LoadingController) {
  }
  public items : Array<any> = [];
  public nemail : Array<any> = [];
  public npassword : Array<any> = [];
  public checkLogin : boolean = false;
  public nfullname : Array<any> = [];
  public fullname : Array<any> = [];
  public alertid : Array<any> = [];
  public nalertid : Array<any> = [];

  email = "";
  password = "";

  login(){

    this.nemail = this.items.map(items => items.email);
    this.npassword = this.items.map(items => items.password);
    this.nfullname = this.items.map(items => items.fullname);
    this.nalertid = this.items.map(items => items.alertid);


    const alert = this.alertCtrl.create({
      title: 'Attention',
      subTitle: ' Please check your device and take action immediately.',
      buttons: ['OK'],
      //cssClass: 'alertcss'
      
    });
    
    
    for(let i = 0; i <= this.items.length; i++){
      if(this.email == this.nemail[i] && this.password == this.npassword[i]){
        this.checkLogin=true;
        window.localStorage.setItem('email', this.nemail[i]);
        window.localStorage.setItem('password', this.npassword[i]);
        window.localStorage.setItem('fullname', this.nfullname[i]);
        window.localStorage.setItem('alertid', this.nalertid[i]);


        console.log(this.nfullname[i]);
        console.log(this.npassword[i]);
        console.log(this.nalertid[i]);
        if(this.nalertid[i]=='3')
        {
          alert.present();
          this.navCtrl.setRoot(TabsPage);
        }
         
          break;
        }
        else {
          this.checkLogin=false;
        }
  
    }
  const loading = this.loadingCtrl.create({
    duration: 500
  });

  loading.onDidDismiss(() => {

    if (this.checkLogin == true){
      if(window.localStorage.getItem('alertid')=="3"){
      window.localStorage.setItem('email', this.email);
      const alert = this.alertCtrl.create({
        title: 'Welcome!',
        subTitle: 'Thanks for logging in.',
        buttons: ['OK']
        
      });
      alert.present();
      this.navCtrl.setRoot(TabsPage);
      }
      else{

        this.navCtrl.setRoot(TabsPage);
      }
     
      }
      else {
        let alert = this.alertCtrl.create({
          title: 'ERROR',
          subTitle: 'Wrong username or password!',
          buttons: ['OK']
        });
        alert.present();
      }

    
  });

  loading.present();
}



  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  ionViewWillEnter() : void
  {
     this.load();
  }

  load() : void
  {
     this.http
     .get('http://www.vems.my/iot/login.php')
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

