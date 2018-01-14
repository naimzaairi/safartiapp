import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';
import { ForgotPasswordPage } from '../forgotpassword/forgotpassword';
import { Footer } from 'ionic-angular/components/toolbar/toolbar-footer';


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

