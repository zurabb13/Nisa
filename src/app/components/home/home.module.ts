import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { MaterialModule } from '../../shared/module/material.module';
import { OverviewComponent } from './overview/overview.component';
import { SharedSectionComponent } from './shared-section/shared-section.component';
import { register } from 'swiper/element/bundle';
import { CartComponent } from './shared-section/cart/cart.component';
import { DiscoverComponent } from './discover/discover.component';
import { DiscoverSectionComponent } from './discover-section/discover-section.component';
register();
@NgModule({
  declarations: [
    HomeComponent,
    HomeHeaderComponent,
    OverviewComponent,
    SharedSectionComponent,
    CartComponent,
    DiscoverComponent,
    DiscoverSectionComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, MaterialModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeModule {}
