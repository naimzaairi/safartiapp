import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { SigninPage } from '../signin/signin';
import { Camera } from '@ionic-native/camera';
import { Profile } from '../../models/profile';

import { AngularFireAuth } from 'angularfire2/auth'
import { AngularFireDatabase} from 'angularfire2/database';

@Component({
  selector: 'page-createprofile',
  templateUrl: 'createprofile.html'
})
export class CreateProfilePage {

  profile = {} as Profile;

  //base64Image:any;
  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public camera:Camera, 
    private afAuth: AngularFireAuth, private afDatabase: AngularFireDatabase) {

  } 

  createProfile(){

      this.afAuth.authState.take(1).subscribe(auth => {
          this.afDatabase.object(`profile/${auth.uid}`).set(this.profile)
          .then(() => this.navCtrl.setRoot(SigninPage));
      })
  }

  /*accessGallery(){
    this.camera.getPicture({
      sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
      destinationType: this.camera.DestinationType.DATA_URL,
      quality: 100
     }).then((imageData) => {
       this.base64Image = 'data:image/jpeg;base64,'+imageData;
       var chooseBtn = document.getElementById('choose-btn');
       var photoLbl = document.getElementById('lbl-photo');
       chooseBtn.style.display = "none";
       photoLbl.style.display = "none";
      }, (err) => {
       console.log(err);
     });
   }


  AjaxCtrl($scope) {
    $scope.countries = ['usa', 'canada', 'mexico', 'france'];
    $scope.$watch('country', function(newVal) {
        if (newVal) $scope.cities = ['Los Angeles', 'San Francisco'];
    });
    $scope.$watch('city', function(newVal) {
        if (newVal) $scope.suburbs = ['SOMA', 'Richmond', 'Sunset'];
    });
}*/

}

