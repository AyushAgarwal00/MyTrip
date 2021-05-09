import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  constructor(private el:ElementRef) {
   }

   @HostListener('mouseover') onHover() {
// this.el.nativeElement.style.color="#29d"; 
this.el.nativeElement.setAttribute('style', 'color: #29d; font-weight:bold');
 }

 @HostListener('mouseout') onMouseOut()
 {
  //  this.el.nativeElement.style.color="black";
  this.el.nativeElement.setAttribute('style', 'color: black; font-weight:normal');
 }
}
