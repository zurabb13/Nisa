import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { MaterialModule } from '../../shared/module/material.module';
import { OverviewComponent } from './overview/overview.component';

@NgModule({
  declarations: [HomeComponent, HomeHeaderComponent, OverviewComponent],
  imports: [CommonModule, HomeRoutingModule, MaterialModule],
})
export class HomeModule {}
