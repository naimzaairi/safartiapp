import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { MVoyPreparantPage } from '../mvoypreparant/mvoypreparant';
import { MVoyParticipantPage } from '../mvoyparticipant/mvoyparticipant';



@Component({
  selector: 'page-mesvoyages',
  templateUrl: 'mesvoyages.html'
})
export class MesVoyagesPage {

  mesvoyages: string;

  constructor(public navCtrl: NavController) {
    this.mesvoyages = "preparant";
  }

  showMVoyPreparant(){
    this.navCtrl.push(MVoyPreparantPage);
  }

  showMVoyParticipant(){
    this.navCtrl.push(MVoyParticipantPage);
  }

}
