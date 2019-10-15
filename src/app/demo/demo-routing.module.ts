import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TestComponent} from './test/test.component';
import {SetTitleGuard} from '../com/guard/set-title.guard';

const routes: Routes = [
  { path: 'test', component: TestComponent, data: { title: 'demo-test' }, canActivate: [SetTitleGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
