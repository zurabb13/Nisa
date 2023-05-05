import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PricingRoutingModule } from './pricing-routing.module';
import { PricingComponent } from './pricing.component';
import { PricingAboutComponent } from './pricing-about/pricing-about.component';
import { PayingComponent } from './pricing-about/paying/paying.component';


@NgModule({
  declarations: [
    PricingComponent,
    PricingAboutComponent,
    PayingComponent
  ],
  imports: [
    CommonModule,
    PricingRoutingModule
  ]
})
export class PricingModule { }
