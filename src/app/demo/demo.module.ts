import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ComModule} from '../com/com.module';
import {TestComponent} from './test/test.component';
import {DemoRoutingModule} from './demo-routing.module';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [TestComponent],
  imports: [
    CommonModule,
    ComModule,
    DemoRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule
  ]
})
export class DemoModule {
}
