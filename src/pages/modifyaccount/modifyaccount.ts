import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-modifyaccount',
  templateUrl: 'modifyaccount.html'
})
export class ModifyAccountPage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
  }

  showMyAccount() {
    let confirm = this.alertCtrl.create({
      title: 'Confirmation',
      message: 'Confirmez-vous les changements sur votre profil ?',
      buttons: [
        {
          text: 'Annuler',
          handler: () => {
            console.log('Dismiss clicked');
          }
        },
        {
          text: 'Oui',
          handler: () => {
            console.log('Agree clicked');
            this.navCtrl.pop();
          }
        }
      ]
    });
    confirm.present();
  }


}

