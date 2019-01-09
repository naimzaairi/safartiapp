import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule,  } from '@angular/forms';
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
import { PublicProfilePage } from '../pages/publicprofile/publicprofile';;

//Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database'


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from '@ionic-native/camera';
import { FIREBASE_CONFIG } from './app.firebase.config';
import { CreateProfilePage } from '../pages/createprofile/createprofile';

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
    ModifyAccountPage,
    PublicProfilePage,
    CreateProfilePage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    AngularFireDatabaseModule
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
    ModifyAccountPage,
    PublicProfilePage,
    CreateProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Camera
  ]
})
export class AppModule {}
