import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';
import { SigninPage } from '../signin/signin';



@Component({
  selector: 'page-forgotpassword',
  templateUrl: 'forgotpassword.html'
})
export class ForgotPasswordPage {

  constructor(public navCtrl: NavController,private toastCtrl: ToastController) {

  }

  showTabsPage(): void{
    this.navCtrl.push(TabsPage);
  }

  confirmSentPasswordToast() {
    let toast = this.toastCtrl.create({
      message: 'Nous vous avons envoyé un mot de passe provisoire. Consultez votre boîte mail',
      position: 'bottom',
      showCloseButton: true,
      closeButtonText: "OK"
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
      this.navCtrl.pop();
    });
    
    toast.present();
  }


}

