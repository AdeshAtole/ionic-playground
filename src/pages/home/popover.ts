import {Component} from "@angular/core"
import {ViewController} from "ionic-angular"
import {NavParams} from "ionic-angular"

@Component({
  template: `
    <ion-list>
      <ion-list-header>Ionic</ion-list-header>
      <button ion-item (click)="close()">Learn Ionic</button>
      <button ion-item (click)="close()">Documentation</button>
      <button ion-item (click)="close()">Showcase</button>
      <button ion-item (click)="close()">GitHub Repo</button>
    </ion-list>
  `
})
export class PopoverPage {
  constructor(public params:NavParams, public viewCtrl: ViewController) {
     console.log('datarec',params);
  }

  close() {
    this.viewCtrl.dismiss();
  }
}