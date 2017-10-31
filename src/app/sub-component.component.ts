import { Component, Input } from '@angular/core';

@Component({
  selector: 'sub-compo',
  template: `
              <ion-list [virtualScroll]="listData" [approxItemHeight]="20" [virtualTrackBy]="trackSc">
                <div *virtualItem="let myData">
                  <ion-item >
                      {{myData}}
                    </ion-item>
                </div>
              </ion-list>
            `

})

export class SubComponentComponent{
  @Input() listData;

  ngOnInit(){
    console.log('list data', this.listData);
  }

  trackSc(a,b){
    console.log('track',a,b);
    return b;
  }
}
