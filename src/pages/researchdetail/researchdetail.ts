import { Component } from '@angular/core';
import { NavController, AlertController, ToastController, NavParams } from 'ionic-angular';

import { PublicProfilePage } from "../publicprofile/publicprofile";

import { AngularFireDatabase} from 'angularfire2/database';

@Component({
  selector: 'page-researchdetail',
  templateUrl: 'researchdetail.html'
})
export class ResearchDetailPage {

  

  constructor(public navCtrl: NavController, private toastCtrl: ToastController, 
    public alertCtrl: AlertController, public navParams: NavParams, private afDatabase: AngularFireDatabase) {
    
    

  }

  ionViewDidLoad(){
    console.log(this.navParams.get('voyage'));
  }

  showPublicProfile() :void{
    this.navCtrl.push(PublicProfilePage);
  }  

  participerConfirm() {
    let alert = this.alertCtrl.create({
      title: 'Confirmer',
      message: 'Voulez-vous participer à ce voyage ?',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Oui, je confirme',
          handler: () => {
            console.log('confirm clicked');
            this.presentToast();
          }
        }
      ]
    });
    alert.present();
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'C\'est confirmé ! Vous trouverez le voyage dans la section Mes Voyages.',
      position: 'bottom',
      showCloseButton: true,
      closeButtonText: "OK"
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });


  
    toast.present();
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



  /*participer(voyage_id){

    let participationInfo = {voyage_id: voyage_id, user_id: this.currUser };
     this.voyage.addParticipation(participationInfo).subscribe(data=>{
      if(data){
        this.showInformation(data);
      }else{
        this.showInformation(data);
      }
    },
    error =>{

    }
    );

  }

   showInformation(text) {
    let alert = this.alertCtrl.create({
      title: '',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(prompt);
  }*/



  



}

