import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';
import { ForgotPasswordPage } from '../forgotpassword/forgotpassword';

@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html'
})
export class SigninPage {

  constructor(public navCtrl: NavController) {

  }

  showTabsPage(): void{
    this.navCtrl.push(TabsPage);
  }

  showForgotPasswordPage() :void{
    this.navCtrl.push(ForgotPasswordPage);
  }

}

