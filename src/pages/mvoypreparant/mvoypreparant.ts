import { Component } from '@angular/core';
import { NavController, AlertController,ToastController ,NavParams } from 'ionic-angular';
//import  { VoyageService } from '../../services/voyage-service';
import { MesVoyagesPage } from '../mesvoyages/mesvoyages';

@Component({
  selector: 'page-mvoypreparant',
  templateUrl: 'mvoypreparant.html'
})
export class MVoyPreparantPage {

  voyageInfo: any;

  constructor(public navCtrl: NavController/*,private voyage: VoyageService, private navParams: NavParams,*/, private toastCtrl: ToastController, public alertCtrl: AlertController) {
    /*let voyageId = navParams.get("voyageId");
    this.voyage.infoVoyage(voyageId).subscribe(data=>{
      if(data){
        this.voyageInfo = data;
        console.log(this.voyageInfo);
      }else{
        this.showInformation(data);
      }
    },
    error =>{

    }
    );*/
  }

  /*deleteParticipation(participation_id){
    this.voyage.deleteParticipation(participation_id).subscribe(data=>{
      if(data){
        this.showInformation(data);
      }
    });
    this.navCtrl.setRoot(this.navCtrl.getActive().component);
  }

  deleteVoyage(voyage_id){
    this.voyage.deleteVoyage(voyage_id).subscribe(data=>{
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
              message: 'Voyage annulé ! Le voyage n'existe plus. Les participants recevrons une notification.',
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

  appelerParticipant() {
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

  supprimerParticipant() {
    let alert = this.alertCtrl.create({
      title: 'Confirmer',
      message: 'Voulez-vous supprimer ce participant? Il sera aveti par notification',
      buttons: [
        {
          text: 'Non',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Oui, je veux supprimer',
          handler: () => {
            console.log('confirm clicked');
            this.toastAnnuler();
            //Supprimer le participant 
            // Refresh la page
          }
        }
      ]
    });
    alert.present();
  }

  toastAnnuler() {
    let toast = this.toastCtrl.create({
      message: 'Participant supprimé ! Abdelilah ne fait plus parti de ce voyage. Il sera averti par une notification.',
      position: 'bottom',
      showCloseButton: true,
      closeButtonText: "OK"
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });


  
    toast.present();
  }



}

