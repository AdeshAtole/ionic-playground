import { Component } from '@angular/core';

/**
 * Generated class for the AdeshComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'adesh',
  templateUrl: 'adesh.html'
})
export class AdeshComponent {

  text: string;

  constructor() {
    console.log('Hello AdeshComponent Component');
    this.text = 'Hello World';
  }

}
