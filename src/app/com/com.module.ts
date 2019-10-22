import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ClickOutsideDirective} from './click-outside.directive';

@NgModule({
  declarations: [
    ClickOutsideDirective
  ],
  exports: [
    ClickOutsideDirective
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ComModule {
}
