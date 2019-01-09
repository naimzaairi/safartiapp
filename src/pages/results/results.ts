import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';

import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';

import { ResearchDetailPage } from '../researchdetail/researchdetail';
import { Voyage } from '../../models/voyage';
import { Observable } from 'rxjs';

@Component({
  selector: 'page-results',
  templateUrl: 'results.html'
})
export class ResultsPage {

  voyage = {} as Voyage;
  voyageListRef$: Observable<any[]>;


  constructor(public navCtrl: NavController, private afDatabase: AngularFireDatabase) {

    this.voyageListRef$ = this.afDatabase.list('voyage-list/').valueChanges();
    
  }



  showResearchDetail() {
    this.navCtrl.push(ResearchDetailPage);
  }

}

