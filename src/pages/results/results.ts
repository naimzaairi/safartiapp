import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';

import { ResearchDetailPage } from '../researchdetail/researchdetail';


@Component({
  selector: 'page-results',
  templateUrl: 'results.html'
})
export class ResultsPage {


  constructor(public navCtrl: NavController) {
  

  }

  showResearchDetail() {
    this.navCtrl.push(ResearchDetailPage);
  }

}

