import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import { PopoverPage } from "./popover"

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController) {

  }

  onClick(event:any){
    console.log('Clicked', event);
    let popover = this.popoverCtrl.create(PopoverPage,{"data12":"data32"},{showBackdrop:false,enableBackdropDismiss:false});
    popover.present({
      ev: event
    });
  }
}
