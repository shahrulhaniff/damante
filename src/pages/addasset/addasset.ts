import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, AlertController, ToastController, LoadingController, NavController, App, NavParams } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EquipmentPage } from '../equipment/equipment';
//import { FormBuilder, FormGroup, Validators } from "@angular/forms";


@IonicPage()
@Component({
  selector: 'page-addasset',
  templateUrl: 'addasset.html',
})
export class AddassetPage {
  /*initializeSupply() {
    throw new Error("Method not implemented.");
  }*/

  private baseURI: string = "http://www.vems.my/iot/";
  num = "";
  equipmentname = "";
  equipmentid = "";
  sensor_ID = "";
  sLocation = "";
  brand = "";
  model = "";
  sSupplier = "";


  public supply: any[];
  public sSupply: any;
  public items: Array<any> = [];
  a: any;
  //public isisemua = true;

  /* [1]declare form guna FormGroup */
  //public form : FormGroup;

  constructor(public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public app: App,
    public elementRef: ElementRef,
    public loadingCtrl: LoadingController,
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient
    //,public fb : FormBuilder
  ) {

    /* [2] Nak buat Required 
    this.form = fb.group({
      "form1" : ["", Validators.required],
      "form2" : ["", Validators.required]
    });
    */
    /*
    this.initializeSupply();*/
  }
  ionViewWillEnter(): void {
    this.load();
  }
  max: any;
  load(): void {


    this.http
      .get('http://myprism.my/iot/equipment.php')
      .subscribe((data: any) => {
        console.dir(data);
        this.items = data;
      },
        (error: any) => {
          console.dir(error);
        });
    /** 
        this.initializeSupply() ;{ 
          this.supply = [
            { id: 1, name: 'WSJ2485' , name1: 'Proton Saga'},
            { id: 2, name: 'WQX461', name1: 'Proton Iswara'},
            { id: 3, name: 'WNQ5272',name1: 'Perodua Kembara' },
            { id: 4, name: 'WVL973', name1: 'Inokom Lorry' },
            { id: 5, name: 'BEW4380', name1: 'Perodua Rusa' },
            { id: 6, name: 'WSR3840', name1: 'Proton Saga' },
            { id: 7, name: 'WTG4611', name1: 'Proton Exora' },
            { id: 8, name: 'WVQ4054', name1: 'Toyota Hilux'},
            
          ];
        }*/
  }
  navigateToOtherPage(): void {
    this.navCtrl.push(EquipmentPage);
  }

  @ViewChild('myInput') myInput: ElementRef;
  resize() {
    var element = this.myInput['_elementRef'].nativeElement.getElementsByClassName("text-input")[0];
    var scrollHeight = element.scrollHeight;
    element.style.height = scrollHeight + 'px';
    this.myInput['_elementRef'].nativeElement.style.height = (scrollHeight + 16) + 'px';

  }
  setChild(sType_) {
    this.a = this.sSupply.name;
    console.log(this.a)


  }/** 
  addAsset2() {
    console.log("TEST==>", this.equipmentid);
    if (this.equipmentname == "") {
      //this.showAlert();
      //console.log("POPUP VALIDATION - TAK ISI LAGII");

    } else {
      console.log("PROCEED");
      this.addAsset();
    }
  }*/
  addAsset2() {

    this.createAsset(
      this.equipmentname,
      this.equipmentid,
      this.sensor_ID,
      this.sLocation,
      this.brand,
      this.model,
      this.sSupplier,
    );
    console.log("equipmentid");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddassetPage');
  }
  createAsset(

    e_name: string,
    e_ID: string,
    sensor_ID: string,
    location: string,
    brand: string,
    model: string,
    supplier: string,

  ): void {
    console.log("DALAM HEADERS", e_ID);
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/json' }),
      options: any = {
        "key": "create", "e_name": e_name, "e_ID": e_ID, "sensor_ID": sensor_ID, "location": location, "brand": brand,
        "model": model, "supplier": supplier
      },
      url: any = this.baseURI + "addasset.php";
    this.http.post(url, JSON.stringify(options), headers)
      .subscribe((_data: any) => {

        if (e_name == "" || e_ID == "" || sensor_ID == ""
        || location == ""|| brand == ""|| model == ""|| supplier == "") {
          let alert = this.alertCtrl.create({
            title: 'ERROR',
            subTitle: 'Please fill in the form!',

            buttons: ['OK']
          });
          alert.present();

        }
        else {
          const toast = this.toastCtrl.create({

            message: 'Your new equipment is successfully added!',
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

  }

  // showAlert(){
  //   const alert :this.alertCtrl.create({
  //     title : 'Fill the form!',
  //     subTitle : 'Equipment Name are not fill yet',
  //     buttons : ['OK']
  //   });
  //   alert.present();
  // }
}
