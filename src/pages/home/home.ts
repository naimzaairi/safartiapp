import { Component } from '@angular/core';
import { NavController, AlertController, ToastController } from 'ionic-angular';

import { ResultsPage } from '../results/results';
import { CreateVoyagePage } from '../createvoyage/createvoyage';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Profile } from '../../models/profile';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  profileData : Observable<any>

  villes;
  showList: boolean = false;
  searchQuery: string = '';
  items: string[];

  constructor(private afAuth: AngularFireAuth, private afDatabase: AngularFireDatabase, public navCtrl: NavController, public alertCtrl: AlertController,
    public toast: ToastController) {
    this.initializeItems(); 
  }

  ionViewWillLoad(){
    this.afAuth.authState.subscribe(data => {
      if(data && data.email && data.uid){
        this.toast.create({
          message: `Bienvenue sur Safarti !`,
          duration: 3000
        }).present();

        //this.profileData = this.afDatabase.object('profile').valueChanges();
        this.profileData = this.afDatabase.object(`profile/${data.uid}`).valueChanges();
        //this.profileData = this.afDatabase.object(`user/${data.uid}`).valueChanges();
      }
      else{
        this.toast.create({
          message: 'Impossible de trouver les informations.',
          duration: 3000
        }).present();
      }
      
    });
  }


  initializeItems() {
    this.items = [
      'Tanger',
      'Tetouan',
      'Rabat',
      'Marrakech',
      'Agadir',
      'Casablanca'
    ];
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      
      // Filter the items
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
      
      // Show the results
      this.showList = true;
    } else {
      
      // hide the results when the query is empty
      this.showList = false;
    }
  }

/*
  topics = [];
  name: string;
  talks = [];
  preparedTags = [
    'Lissafa',
    'Omar Al Khiam',
    'Facultés',
    'Zénith',
    'Technopark',
    'Panoramique',
    'Gare Oasis',
    'Mekka',
    'Bachkou',
    'Derb Ghalef',
    'Abdelmoumen',
    'Faculté de Médecine',
    'Wafasalaf',
    'Hassan II',
    'Place Mohamed V',
    'Place des Nations-Unies',
    'Marché Central',
    'Mohamed Diouri',
    'La Résistance',
    'Place Al Yassir',
    'Casa Voyageurs',
    'Les Anciens Abattoirs',
    'Grande Ceinture',
    'Ali Yata',
    'Achouhada',
    'Hay Mohammadi',
    'Ibn Tachfine',
    'Hay Raja',
    'Force Auxiliaires',
    'Oqba Ibn Nafia',
    'Attacharouk',
    'Hôpital de Sidi Moumen',
    'Centre de Maintenance',
    'Mohamed Zefzaf',
    'Ennassim',
    'Sidi Moumen',
    'Riviéra',
    'Ghandi',
    'Beauséjour',
    'Hay Andia',
    'Anfa Park',
    'Place Financière',
    'Abdellah Ben Cherif',
    'Cité de l\'Air',
    'Sidi Abderrahmane',
    'Faculté de Médecine',
    'Hay Hassani',
    'Littoral',
    'Ain Diab Plage',
  ]


  initializeVilles() {
    this.villes = [
      'Lissafa',
      'Omar Al Khiam',
      'Facultés',
      'Zénith',
      'Technopark',
      'Panoramique',
      'Gare Oasis',
      'Mekka',
      'Bachkou',
      'Derb Ghalef',
      'Abdelmoumen',
      'Faculté de Médecine',
      'Wafasalaf',
      'Hassan II',
      'Place Mohamed V',
      'Place des Nations-Unies',
      'Marché Central',
      'Mohamed Diouri',
      'La Résistance',
      'Place Al Yassir',
      'Casa Voyageurs',
      'Les Anciens Abattoirs',
      'Grande Ceinture',
      'Ali Yata',
      'Achouhada',
      'Hay Mohammadi',
      'Ibn Tachfine',
      'Hay Raja',
      'Force Auxiliaires',
      'Oqba Ibn Nafia',
      'Attacharouk',
      'Hôpital de Sidi Moumen',
      'Centre de Maintenance',
      'Mohamed Zefzaf',
      'Ennassim',
      'Sidi Moumen',
      'Riviéra',
      'Ghandi',
      'Beauséjour',
      'Hay Andia',
      'Anfa Park',
      'Place Financière',
      'Abdellah Ben Cherif',
      'Cité de l\'Air',
      'Sidi Abderrahmane',
      'Faculté de Médecine',
      'Hay Hassani',
      'Littoral',
      'Ain Diab Plage',
    ];
  }
  getVilles(ev) {
    // Reset items back to all of the items
    this.initializeVilles();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.villes = this.villes.filter((ville) => {
        return (ville.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
*/
  //SQL DES VILLES DU MAROC : https://github.com/alaouy/sql-moroccan-cities

  showResults() : void{
      this.navCtrl.push(ResultsPage);
 
  }

showCreateVoyage() : void{
  this.navCtrl.push(CreateVoyagePage);

}

}

