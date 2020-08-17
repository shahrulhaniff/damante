import { Component, ViewChild } from '@angular/core';
import { Platform, Tabs, Nav} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { Push, PushObject, PushOptions } from '@ionic-native/push';
import { AlertController } from "ionic-angular";
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { NotificationPage } from '../pages/notification/notification';
//private push: Push,public http:Http,

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = LoginPage;
  public alertShown: boolean = false;

  constructor(platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    public alertCtrl: AlertController,
    private push: Push,

  ) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
      this.checkPreviousAuthorization();
      this.pushSetup();
      //this.initPushNotification();
    });
  }

  checkPreviousAuthorization(): void {
    if ((window.localStorage.getItem('email') === "undefined" || window.localStorage.getItem('email') === null)) {
      this.rootPage = LoginPage;
    } else {

      this.rootPage = LoginPage;

    }
  }

  pushSetup() {
    const options: PushOptions = {
      android: {
        senderID: '1012486531089',
        icon: 'alert_icon',
        iconColor: "red",
        forceShow: true,
        topics: ["group_1", "public"]
      },
      ios: {
        alert: 'true',
        badge: true,
        sound: 'false'
      }
    };

    const pushObject: PushObject = this.push.init(options);

    pushObject.on('notification').subscribe((notification: any) => {
      if (notification.additionalData.foreground) {
        let youralert = this.alertCtrl.create({
          title: 'Alert Notification',
          message: notification.message,
        });
        youralert.present();
        this.nav.push(NotificationPage)
      }
    });
    pushObject.on('registration').subscribe((registration: any) => console.log('Device registered', registration));
    pushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));
  }
}




/*
  initPushNotification()
{
// to check if we have permission
this.push.hasPermission()
.then((res: any) => {
if (res.isEnabled) {
console.log('We have permission to send push notifications');
} else {
console.log('We don\'t have permission to send push notifications');
}
});

// to initialize push notifications
const options: PushOptions = {
android: {
senderID: '433069474329'},
ios: {
alert: 'true',
badge: true,
sound: 'false'
},
windows: {}
};
const pushObject: PushObject = this.push.init(options);
pushObject.on('notification').subscribe((notification: any) =>{
console.log('Received a notification', notification);
//Notification Display Section
let confirmAlert = this.alertCtrl.create({
title: 'New Notification',
message: JSON.stringify(notification),
buttons: [{
text: 'Ignore',
role: 'cancel'
}, {
text: 'View',
handler: () => {
//TODO: Your logic here
//self.nav.push(DetailsPage, {message: data.message});
}
}]
});
confirmAlert.present();
//
});
pushObject.on('registration').
subscribe((registration: any) =>
console.log('Device registered', registration));
pushObject.on('error').
subscribe(error =>
console.error('Error with Push plugin', error));
}*/

