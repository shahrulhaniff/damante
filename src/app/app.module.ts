import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { LocationPage } from '../pages/location/location';
import { Data1Page } from '../pages/data1/data1';
import { ContactPage } from '../pages/contact/contact';
import { AddassetPage } from '../pages/addasset/addasset';
import { AddsupplierPage } from '../pages/addsupplier/addsupplier';
import { EquipmentPage } from '../pages/equipment/equipment';
import { HomePage } from '../pages/home/home';
import { NotificationPage } from '../pages/notification/notification';
import { TabsPage } from '../pages/tabs/tabs';
import {LoginPage} from '../pages/login/login';
import { SupplierPage } from '../pages/supplier/supplier';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from '@angular/common/http';
import { Geolocation } from '@ionic-native/geolocation';
import {NgxPaginationModule} from 'ngx-pagination';
//import { Push, PushObject, PushOptions } from '@ionic-native/push';
import { HttpModule } from '@angular/http';
import { Push } from '@ionic-native/push';
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    LocationPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    NotificationPage,
    EquipmentPage,
    AddassetPage,
    SupplierPage,
    AddsupplierPage,
    Data1Page

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    HttpModule,
    NgxPaginationModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    LocationPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    NotificationPage,
    EquipmentPage,
    AddassetPage,
    SupplierPage,
    AddsupplierPage,
    Data1Page

  ],
  providers: [
    //Push,
    StatusBar,
    SplashScreen,
    Geolocation,
    Push,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
