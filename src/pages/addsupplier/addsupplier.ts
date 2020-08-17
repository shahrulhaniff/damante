import { Component,ElementRef, ViewChild } from '@angular/core';
import { IonicPage,ToastController,AlertController,App,LoadingController, NavController, NavParams } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SupplierPage } from '../supplier/supplier';

SupplierPage;
@IonicPage()
@Component({
  selector: 'page-addsupplier',
  templateUrl: 'addsupplier.html',
})
export class AddsupplierPage {

  private baseURI: string = "http://www.vems.my/iot/";



  public items : Array<any> = [];
  public num : any;
  /**public checkSupplier : boolean = false;*/
  a: any;
  sname = "";
  scode = "";
  address = "";
  tel_number = "";
  fax_number = "";
  website = "";
  semail = "";


  
  constructor(public loadingCtrl: LoadingController, public app: App, public navCtrl: NavController, public http: HttpClient, public toastCtrl: ToastController, public navParams: NavParams,
    public alertCtrl: AlertController,public elementRef: ElementRef) {
 }
 ionViewWillEnter(): void {
  this.load();
}

max: any;
load(): void {

  this.http
  .get('http://myprism.my/iot/supplier.php')
  .subscribe((data: any) => {
    console.dir(data);
    this.items = data;
  },
    (error: any) => {
      console.dir(error);
    });

  }
  navigateToOtherPage(): void {
    this.navCtrl.push(SupplierPage);
  }

  
  @ViewChild('myInput') myInput: ElementRef;
  resize() {
    var element = this.myInput['_elementRef'].nativeElement.getElementsByClassName("text-input")[0];
    var scrollHeight = element.scrollHeight;
    element.style.height = scrollHeight + 'px';
    this.myInput['_elementRef'].nativeElement.style.height = (scrollHeight + 16) + 'px';

  }
  setChild(sType_) {
  
    console.log(this.a)


  }


  addSupplier() {

    this.createSupplier(
      this.sname,
      this.scode,
      this.address,
      this.tel_number,
      this.fax_number,
      this.website,
      this.semail,
    );

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddsupplierPage');
  }
  createSupplier(

    name: string,
    code: string,
    address: string,
    tel_number: string,
    fax_number: string,
    website: string,
    email: string,

  ):

  
  void {
    console.log("DALAM HEADERS");
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/json' }),
      options: any = {
        "key": "create", "name": name, "code": code, "address": address, "tel_number": tel_number, "fax_number": fax_number,
        "website": website, "email": email
      },
      url: any = this.baseURI + "addsupplier.php";
    this.http.post(url, JSON.stringify(options), headers)
      .subscribe((_data: any) => {

        
        if (name == "" || code == "" || address == ""
        || tel_number == ""|| fax_number == ""|| website == ""|| email == "")
        {
        let alert = this.alertCtrl.create({
          title: 'ERROR',
          subTitle: 'Please fill in the form!',

          buttons: ['OK']
        });
        alert.present();}

        else {
        const toast = this.toastCtrl.create({

          message: 'Your new supplier is successfully added!',
          duration: 3000,
          showCloseButton: true,
          closeButtonText: 'Ok'

        });

        toast.present();
      }
      },
        (error: any) => {
          let alert = this.alertCtrl.create({
            title: 'ERROR',
            subTitle: 'Please fill in the form!',

            buttons: ['OK']
          });
          alert.present();
          console.log(error)
        });

  }/** 
  else {

    //a=model,b=plate, c=type
    
   if( 
  this.address==""||this.code==""){

      this.checkSupplier=false;
      let alert = this.alertCtrl.create({
        title: 'ERROR',
        subTitle: 'Please fill in all details.',
        buttons: ['OK']
      });
      alert.present();
      
    }

    else {

      let headers: any = new HttpHeaders({ 'Content-Type': 'application/json' }),
      options: any = {
        "key": "create", "name": name, "code": code, "address": address, "tel_number": tel_number, "fax_number": fax_number, "website": website,
        "email": email

      },

      url: any = this.baseURI + "addsupplier.php";

      
    this.http.post(url, JSON.stringify(options), headers)
      .subscribe((_data: any) => {
       
       
       
       
          this.checkSupplier=true;
          const toast = this.toastCtrl.create({

          message: 'Your new supplier is successfully added!',
          duration: 3000,
          showCloseButton: true,
          closeButtonText: 'Ok'

        });

        toast.present();
        

      },
        (error: any) => {
          let alert = this.alertCtrl.create({
            title: 'ERROR',
            subTitle: 'Please fill in the form!',

            buttons: ['OK']
          });
          alert.present();
          console.log(error)
        });

     }
    


  }

}*/
  // showAlert(){
  //   const alert :this.alertCtrl.create({
  //     title : 'Fill the form!',
  //     subTitle : 'Equipment Name are not fill yet',
  //     buttons : ['OK']
  //   });
  //   alert.present();
  // }
}

