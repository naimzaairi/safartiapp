import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { SigninPage } from '../signin/signin';
import * as $ from 'jquery';

@Component({
  selector: 'page-first',
  templateUrl: 'first.html'
})
export class FirstPage {

  constructor(public navCtrl: NavController) {
  }

  showSignupPage(): void{
    this.navCtrl.push(SignupPage);
  }
  showSigninPage(): void{
    this.navCtrl.push(SigninPage);
  }

  
  ionViewDidLoad(){
    $(window).bind('resize', function(){
    if($(window).width() >= 801){
      $('.disable').hide();
      $('#disable-sign').show();
    }
    else{
      $('.disable').show();
      $('#disable-sign').hide();
    }
    
    });

    if ($(window).width() >= 801) {
      $('.disable').hide();
      $('#disable-sign').show();
    }

    if($(window).width() < 801){
      $('#disable-sign').hide();
    }
 
  }





}

