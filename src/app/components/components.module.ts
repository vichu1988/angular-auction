import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SidebarComponent],
  exports: [SidebarComponent],
  entryComponents: [SidebarComponent]
})
export class ComponentsModule { }
