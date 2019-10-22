import {Directive, ElementRef, EventEmitter, HostListener, Output} from '@angular/core';

/**
 * 指令(Directives)
 * 监听组件外部的点击事件
 */
@Directive({
  selector: '[clickOutside]'
})
export class ClickOutsideDirective {

  constructor(private _elementRef: ElementRef) {
  }

  @Output()
  public clickOutside = new EventEmitter();

  @HostListener('document:click', ['$event.target'])
  public onClick(targetElement) {
    const clickedInside = this._elementRef.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this.clickOutside.emit(null);
    }
  }

}
