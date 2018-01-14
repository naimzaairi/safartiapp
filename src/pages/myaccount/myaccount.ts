import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';

import { ModifyAccountPage} from '../modifyaccount/modifyaccount';


@Component({
  selector: 'page-myaccount',
  templateUrl: 'myaccount.html'
})
export class MyAccountPage {

  constructor(public navCtrl: NavController) {
  }

  showModifyAccount(): void{
    this.navCtrl.push(ModifyAccountPage);
  }


}

