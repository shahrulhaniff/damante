import { Component, ViewChild ,ElementRef  } from '@angular/core';
import { NavController, LoadingController, App, AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { Geolocation, GeolocationOptions, Geoposition, PositionError } from '@ionic-native/geolocation';
declare var google;

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  options: GeolocationOptions;
  currentPos: Geoposition;
  @ViewChild('map') mapElement: ElementRef;
  map: any;

  constructor(public navCtrl: NavController,public loadingCtrl: LoadingController,public app: App, public alertCtrl: AlertController, private geolocation: Geolocation) {

  }

  ionViewDidEnter() {
    this.getUserPosition();
  }
  getUserPosition() {
    this.options = {
      enableHighAccuracy : false
      };
      this.geolocation.getCurrentPosition(this.options).then((pos : Geoposition) => {
  
          this.currentPos = pos;     
  
          console.log(pos);
          this.addMap(2.993932,101.816241);
  
      },(err : PositionError)=>{
          console.log("error : " + err.message);
      ;
      })
  }
   
  addMap(lat,long){

    let latLng = new google.maps.LatLng(lat, long);

    let mapOptions = {
    center: latLng,
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    this.addMarker();
}

addMarker(){

  let marker = new google.maps.Marker({
  map: this.map,
  animation: google.maps.Animation.DROP,
  position: this.map.getCenter()
  });

  let content = "<p>D'amante(M) Sdn.Bhd</p>";          
  let infoWindow = new google.maps.InfoWindow({
  content: content
  });

  google.maps.event.addListener(marker, 'click', () => {
  infoWindow.open(this.map, marker);
  });

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




}
