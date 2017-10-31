import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import { PopoverPage } from "./popover"

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // myPat = "[0-9]*";
  myVal : string;
  val = 'text123'
  @ViewChild( "selectableInput") selectableInput;
  childData = [
                  'ChildData1',
                  'ChildData2',
                  'ChildData3',
                  'ChildData4'
              ];
  parentData =  [
                      "ParentData1",
                      "ParentData2",
                      "ParentData3",
                      "ParentData4",
                      "ParentData5"
                ]

  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController) {

  }

  selectTheText(){
    let inputNode = Array.from(this.selectableInput.getNativeElement().childNodes).filter(node => {
      if(node['localName'] == 'input')
          return node;
      })[0] as  HTMLInputElement;
      console.log('select text', [inputNode]);
      inputNode.select();
  }

  ngOnInit(){
    console.log('in on init');
    // this.selectTheText();
    // console.log(this.selectableInput);
  }

  ngAfterViewInit(){
    console.log('after view init');
    // this.selectTheText();
    // console.log(this.selectableInput);

  }

  ngAfterViewChecked(){
    console.log('after checked');
    // this.selectTheText();

  }

  focussed(){
    console.log('focussed');
  }

  blurred(){
    console.log('blurred');
  }

  onClick(event:any){
    console.log('Clicked', event);
    let popover = this.popoverCtrl.create(PopoverPage,{"data12":"data32"},{showBackdrop:false,enableBackdropDismiss:false});
    popover.present({
      ev: event
    });
  }
}
