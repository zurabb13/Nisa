import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { SubtitleComponent } from './subtitle/subtitle.component';
import { MeetSectionComponent } from './meet-section/meet-section.component';
import { HttpClientModule } from '@angular/common/http';
import { register } from 'swiper/element/bundle';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { MaterialModule } from '../../shared/module/material.module';

register();

@NgModule({
  declarations: [
    AboutComponent,
    SubtitleComponent,
    MeetSectionComponent,
    ClientDetailsComponent,
  ],
  imports: [CommonModule, AboutRoutingModule, HttpClientModule, MaterialModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AboutModule {}
