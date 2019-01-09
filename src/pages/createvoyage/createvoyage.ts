import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth'
import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';

import { Voyage } from '../../models/voyage';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-createvoyage',
  templateUrl: 'createvoyage.html'
})
export class CreateVoyagePage {

  voyage = {} as Voyage;

  voyageRef$: AngularFireList<Voyage>;
  userId: string;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController,
    private afDatabase: AngularFireDatabase, private afAuth: AngularFireAuth) {

      this.afAuth.authState.subscribe(user => {
        if(user) this.userId = user.uid
      })

      this.voyageRef$ = this.afDatabase.list(`voyage-list/${this.userId}`);
  }

  createVoyage(voyage: Voyage){

    this.afAuth.authState.subscribe(auth => {
      if(this.afAuth.auth){
        this.voyageRef$.push({
          depart: this.voyage.depart,
          destination: this.voyage.destination,
          date: this.voyage.date,
          heure: this.voyage.heure,
          prix: Number(this.voyage.prix),
          places: Number(this.voyage.places),
          rdv: this.voyage.rdv,
          infos: this.voyage.infos,
          organisateur: this.userId
        })
        .then(() => this.navCtrl.setRoot(HomePage));
      }
      
  })

    

    console.log(voyage);

  }








}

