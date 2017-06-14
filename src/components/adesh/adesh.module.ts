import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdeshComponent } from './adesh';

@NgModule({
  declarations: [
    AdeshComponent,
  ],
  imports: [
    IonicPageModule.forChild(AdeshComponent),
  ],
  exports: [
    AdeshComponent
  ]
})
export class AdeshComponentModule {}
