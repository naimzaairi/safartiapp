import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { CreateProfilePage } from '../createprofile/createprofile';
import { User } from '../../models/user';

import { AngularFireAuth } from 'angularfire2/auth'

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {

  user = {} as User;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, 
    private afAuth: AngularFireAuth) {

  } 

  async register(user: User){
    try{
      const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
      if(result){
        let confirm = this.alertCtrl.create({
          title: 'Bienvenue !',
          message: 'Votre compte est désormais crée. Un mail vous a été envoyé.',
          buttons: [
            {
              text: 'OK',
              handler: () => {
                this.navCtrl.setRoot(CreateProfilePage);
              }
            }
          ]
        });
        confirm.present();
      }      
      console.log(result);
    }
    catch(e){
      console.error(e);
    }
  }
}



