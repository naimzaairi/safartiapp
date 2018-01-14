import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { FirstPage } from '../pages/first/first';
import { MesVoyagesPage } from '../pages/mesvoyages/mesvoyages';
import { ResultsPage } from '../pages/results/results';
import { SafartiPage } from '../pages/safarti/safarti';
import { SigninPage } from '../pages/signin/signin';
import { SignupPage } from '../pages/signup/signup';
import { CreateVoyagePage } from '../pages/createvoyage/createvoyage';
import { ResearchDetailPage } from '../pages/researchdetail/researchdetail';
import { MVoyParticipantPage } from '../pages/mvoyparticipant/mvoyparticipant';
import { MVoyPreparantPage } from '../pages/mvoypreparant/mvoypreparant';
import { ForgotPasswordPage } from '../pages/forgotpassword/forgotpassword';
import { MyAccountPage } from '../pages/myaccount/myaccount';
import { ModifyAccountPage } from '../pages/modifyaccount/modifyaccount';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from '@ionic-native/camera';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    FirstPage,
    MesVoyagesPage,
    ResultsPage,
    SafartiPage,
    SigninPage,
    SignupPage,
    CreateVoyagePage,
    ResearchDetailPage,
    MVoyParticipantPage,
    MVoyPreparantPage,
    ForgotPasswordPage,
    MyAccountPage,
    ModifyAccountPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    FirstPage,
    MesVoyagesPage,
    ResultsPage,
    SafartiPage,
    SigninPage,
    SignupPage,
    CreateVoyagePage,
    ResearchDetailPage,
    MVoyParticipantPage,
    MVoyPreparantPage,
    ForgotPasswordPage,
    MyAccountPage,
    ModifyAccountPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Camera
  ]
})
export class AppModule {}
