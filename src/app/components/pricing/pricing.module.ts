import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PricingRoutingModule } from './pricing-routing.module';
import { PricingComponent } from './pricing.component';
import { PricingAboutComponent } from './pricing-about/pricing-about.component';
import { PayingComponent } from './pricing-about/paying/paying.component';
import { PricingFaqComponent } from './pricing-faq/pricing-faq.component';
import { MaterialModule } from '../../shared/module/material.module';

@NgModule({
  declarations: [
    PricingComponent,
    PricingAboutComponent,
    PayingComponent,
    PricingFaqComponent,
  ],
  imports: [CommonModule, PricingRoutingModule, MaterialModule],
})
export class PricingModule {}
