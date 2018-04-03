import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMyAutoFocus]'
})
export class MyAutoFocusDirective implements AfterViewInit{

  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit(): void {
    this.elementRef.nativeElement.focus();
  }

}
