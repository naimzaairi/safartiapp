import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth'
import { AngularFireDatabase} from 'angularfire2/database';

import { Voyage } from '../../models/voyage';
import { HomePage } from '../home/home';
import { VoyageService } from '../../services/voyage.service';

@Component({
  selector: 'page-createvoyage',
  templateUrl: 'createvoyage.html'
})
export class CreateVoyagePage {

  userId: string;

  voyage: Voyage = {
    depart: '',
    destination: '',
    date: '',
    heure: '',
    prix: undefined,
    places: undefined,
    rdv: '',
    infos: '',
    participants: []

  };



  constructor(public navCtrl: NavController, public alertCtrl: AlertController,
    private afDatabase: AngularFireDatabase, private afAuth: AngularFireAuth, 
    private voyageService: VoyageService) {

    this.afAuth.authState.subscribe(user => {
        if(user) this.userId = user.uid
      })

  }

  createVoyage(voyage: Voyage){

      if(this.afAuth.auth){
        this.voyageService.addVoyage(voyage).then(ref =>{

          const alert = this.alertCtrl.create({
            title: 'Voyage Crée!',
            subTitle: 'Votre voyage a bien été crée. Vous pouvez le retrouver dans Mes Voyages',
            buttons: [
              {
                text: 'Ok',
                handler: ()=> {
                  this.navCtrl.setRoot(HomePage, { key: ref.key });
                  console.log(ref.key); 
                  console.log('Ok clicked');
                }
              },
            ]
          });
          alert.present();
        })
      }

    console.log(voyage);

  }








}

