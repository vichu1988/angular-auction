import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DetailsComponent} from './details.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: DetailsComponent
    }])
  ],
  declarations: [DetailsComponent]
})
export class DetailsModule {
}
