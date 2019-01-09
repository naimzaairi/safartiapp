import { Component } from '@angular/core';
import { NavController, AlertController, ToastController, NavParams } from 'ionic-angular';
/*import  { VoyageService } from '../../services/voyage-service';*/
//import { MesVoyagesPage } from '../mesvoyages/mesvoyages';

import { PublicProfilePage } from '../publicprofile/publicprofile'

@Component({
  selector: 'page-mvoyparticipant',
  templateUrl: 'mvoyparticipant.html'
})
export class MVoyParticipantPage {

  //participation : any;

  constructor(public navCtrl: NavController/*,private voyage: VoyageService, private navParams: NavParams, */, private toastCtrl: ToastController,public alertCtrl: AlertController) {
    /*let partId = navParams.get("participationId");
    this.voyage.infoParticipation(partId).subscribe(data=>{
      if(data instanceof Array){
        this.participation = data;
        console.log(this.participation);
      }else{
        this.showInformation(data);
      }
    },
    error =>{

    }
    );*/
  }

  /*public deleteParticipation(participation_id){
    console.log(participation_id);
    this.voyage.deleteParticipation(participation_id).subscribe(data=>{
      if(data){
        this.showInformation(data);
      }
    });
    this.navCtrl.setRoot(MesVoyagesPage);

  }
  showInformation(text) {
    let alert = this.alertCtrl.create({
      title: 'Erreur',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(prompt);
  }*/

  annulerVoyage() {
    let alert = this.alertCtrl.create({
      title: 'Confirmer',
      message: 'Voulez-vous annuler ce voyage?',
      buttons: [
        {
          text: 'Non',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Oui, je veux annuler',
          handler: () => {
            console.log('confirm clicked');
            //Supprimer le voyage 
            // Retour Page Home avec un toast :
            /*  toastAnnuler() {
            let toast = this.toastCtrl.create({
              message: 'Voyage annulé ! Vous ne faites plus partie de ce voyage.',
              position: 'bottom',
              showCloseButton: true,
              closeButtonText: "OK"
            });
          
            toast.onDidDismiss(() => {
              console.log('Dismissed toast');
            }); 
            */
          }
        }
      ]
    });
    alert.present();
  }

  appelerOrganisateur() {
    let alert = this.alertCtrl.create({
      title: '06 52 91 11 85',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Appeler',
          handler: () => {
            console.log('confirm clicked');
            //Utiliser API pour appeler
          }
        }
      ]
    });
    alert.present();
  }

  showPublicProfile(){
    this.navCtrl.push(PublicProfilePage);
  }


}

