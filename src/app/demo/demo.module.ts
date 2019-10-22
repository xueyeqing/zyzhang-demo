import {NgModule} from '@angular/core';
import {ComModule} from '../com/com.module';
import {TestComponent} from './test/test.component';
import {DemoRoutingModule} from './demo-routing.module';

@NgModule({
  declarations: [TestComponent],
  imports: [
    ComModule,
    DemoRoutingModule,
  ]
})
export class DemoModule {
}
