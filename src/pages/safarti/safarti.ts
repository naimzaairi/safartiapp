import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController, App } from 'ionic-angular';

import { FirstPage } from '../first/first';
import { MyAccountPage } from '../myaccount/myaccount';



@Component({
  selector: 'page-safarti',
  templateUrl: 'safarti.html'
})
export class SafartiPage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public app: App) {

  }

  items = [
    "Mon Compte",
    "C'est quoi Safarti ?",
    'Déconnexion',
  ];

  itemSelected(item: string) {
    console.log("Selected Item", item);
    
    switch(item){

      case "Mon Compte":
      this.navCtrl.push(MyAccountPage);
      break;

      case "C'est quoi Safarti ?":
      console.log("Salut toi");
      break;

      case 'Déconnexion':
        this.navCtrl.setRoot(FirstPage);
        this.app.getRootNavs()[0].push(FirstPage);
        break;
    }
  }

}
