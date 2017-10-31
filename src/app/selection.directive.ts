import { Directive, ElementRef, Renderer, HostListener } from "@angular/core"
import {DefaultValueAccessor,NgControl} from "@angular/forms"

@Directive({
    selector : "[selection-directive]",
    // providers: [DefaultValueAccessor]
})
export class SelectionDirective{

    constructor(private elementRef:ElementRef){
        console.log('in directive cons', elementRef);
    }

    @HostListener('focus', ['$event']) onClick($event){
      if(this.elementRef.nativeElement.tagName.toLowerCase() == "ion-input"){
        let inputNode = Array.from(this.elementRef.nativeElement.childNodes).filter(node => {
            if(node['localName'] == 'input'){
                return true;
            }
        }) [0]  as HTMLInputElement;
        console.log('input node', inputNode);
        inputNode.select();
      }
  }

}
