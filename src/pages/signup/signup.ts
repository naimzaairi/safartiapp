import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';
import { Camera } from '@ionic-native/camera';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {

  base64Image:any;
  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public camera:Camera) {

  }

  accessGallery(){
    this.camera.getPicture({
      sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
      destinationType: this.camera.DestinationType.DATA_URL,
      quality: 100
     }).then((imageData) => {
       this.base64Image = 'data:image/jpeg;base64,'+imageData;
       var chooseBtn = document.getElementById('choose-btn');
       chooseBtn.style.display = "none";
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
}


 showTabsPage(): void{

   let confirm = this.alertCtrl.create({
      title: 'Bienvenue !',
      message: 'Votre compte est désormais crée. Un mail vous a été envoyé.',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.navCtrl.push(TabsPage);
          }
        }
      ]
    });
    confirm.present();

  }

  


}

