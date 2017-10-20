import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SubTitleComponent } from './sub-title/sub-title.component';
import { OfferCardComponent } from './offer-card/offer-card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SidebarComponent, SubTitleComponent, OfferCardComponent],
  exports: [SidebarComponent, SubTitleComponent, OfferCardComponent],
  entryComponents: [SidebarComponent, SubTitleComponent, OfferCardComponent]
})
export class ComponentsModule { }
