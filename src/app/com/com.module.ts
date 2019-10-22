import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {DateFormatPipe} from './pipe/date-format.pipe';
import {ClickOutsideDirective} from './click-outside.directive';

@NgModule({
  declarations: [
    DateFormatPipe,
    ClickOutsideDirective
  ],
  exports: [
    DateFormatPipe,
    ClickOutsideDirective
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ComModule {
}
