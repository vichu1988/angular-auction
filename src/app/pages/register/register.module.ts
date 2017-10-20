import { ComponentsModule } from '../../components/components.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule.forChild([{
      path: '',
      component: RegisterComponent
    }])
  ],
  declarations: [RegisterComponent]
})
export class RegisterModule { }
