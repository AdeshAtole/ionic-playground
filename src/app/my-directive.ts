import { Directive, ElementRef, Renderer } from "@angular/core"
import {DefaultValueAccessor,NgControl} from "@angular/forms"

@Directive({
    selector : "[my-dir][ngModel]",
    providers: [DefaultValueAccessor]
})
export class MyDirective{
    constructor(private elementRef:ElementRef, private renderer: Renderer, private model: NgControl){
        console.log('in directive cons', elementRef);
    }

     writeValue(value: any): void {
    // Write to view        
    if (value !== null && value !== undefined) {

    //   value = VMasker.toPattern(value, Mask);
      console.log('logging', value);
      this.model.valueAccessor.writeValue(value);
    //   console.log('childNodes', this.elementRef.nativeElement.childNodes);
    //   console.log('filtered', [...this.elementRef.nativeElement.childNodes].filter(node =>{ return node.localName == 'input'}));
      var inputNode = Array.from(this.elementRef.nativeElement.childNodes).filter(node => {
        if(node['localName'] == 'input')
            return node;
        })[0];
      this.renderer.setElementProperty(inputNode, 'value', value);    
    }
  }

  valueChange(value) {
    // prevent user to input non-digit characters while typing
    // and limit user input to CardMaskLength characters         
    let val = value.replace(/\D/g, '');
    // val = val.substring(0, CardMaskLength);    

    //write formatted to control view
    this.writeValue(val);

    this.model.viewToModelUpdate(val);    
  }

  ngOnInit() {
    this.model.valueChanges.subscribe((value : any) => {
        if(value)
        this.valueChange(value);
    });
}
}