import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { NotificationPage } from '../notification/notification';

NotificationPage;
//@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  video: any = {
    url: 'https://www.youtube.com/embed/7fs7_HIM8Ig',
    title: 'Damante Corporate video'
};
trustedVideoUrl: SafeResourceUrl;
  ImageArray: { 'image': string; }[];
  constructor(public navCtrl: NavController,
    private domSanitizer: DomSanitizer) {
      this.ImageArray = [
        { 'image': '../../assets/imgs/lora1.jpg' },
        { 'image': '../../assets/imgs/lora2.jpg' },
        { 'image': '../../assets/imgs/motor.jpg' },
      ]
  }

  ionViewWillEnter(): void {
    this.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.video.url);
}

notiPage(): void {
  this.navCtrl.push(NotificationPage);
}

}