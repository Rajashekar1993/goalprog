import { Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appBlueColor]'
})
export class BlueColorDirective {

  constructor(element:ElementRef) { 
  	element.nativeElement.style.color="blue";
  }

  @HostListener('mouseenter') doSomeThing() {
  	console.log('mouse entered');
  }

  @HostListener('click', ['$event.target'])
  onClick(btn) {
    //console.log('button', event, 'number of clicks:', this.numberOfClicks++);
    console.log(event);
 }
  

}
