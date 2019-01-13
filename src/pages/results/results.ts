import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';

import { AngularFireDatabase} from 'angularfire2/database';

import { Voyage } from '../../models/voyage';
import { Observable } from 'rxjs';
import { VoyageService } from '../../services/voyage.service';

@Component({
  selector: 'page-results',
  templateUrl: 'results.html'
})
export class ResultsPage {

  voyage = {} as Voyage;
  voyageListRef$: Observable<Voyage[]>;

  constructor(public navCtrl: NavController, private afDatabase: AngularFireDatabase, 
    private voyageService: VoyageService, public navParams: NavParams) {

      this.voyageListRef$ = this.voyageService
        .getVoyageList()
        .snapshotChanges()
        .map(
          changes => {
            return changes.map(c => ({
              key: c.payload.key, ...c.payload.val()
            }));
          }
        );
    
  }


  /*let student1Id = 'student1'
  let class1Id = 'class1'
  let updates = {
    [`student_enrolments/${student1Id}/${class1Id}`]: true,
    [`class_enrolments/${class1Id}/${student1Id}`]: true
  }
  firebase.database().ref().update(updates)*/



}

