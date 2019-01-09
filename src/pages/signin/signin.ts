import { Component } from '@angular/core';
import { NavController, AlertController} from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';
import { ForgotPasswordPage } from '../forgotpassword/forgotpassword';
import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html'
})
export class SigninPage {

  user = {} as User;

  constructor(private afAuth: AngularFireAuth, public navCtrl: NavController, public alert: AlertController) {

  }

  async login(user: User){
    try{
      const result = await this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
      console.log(result);
      if(result){
        this.navCtrl.push(TabsPage);
      }
    }
    catch (e){
      this.showErrorAlert()
      console.error(e);
    }
  }
  showErrorAlert(){
    let errorAlert = this.alert.create({
      title: 'Echec',
      message: 'Email ou Mot de passe invalide',
      buttons: [
        {
          text: 'Réessayer',
        }
      ]
      
    });
    errorAlert.present();
  }

  showForgotPasswordPage() :void{
    this.navCtrl.push(ForgotPasswordPage);
  }

}

