import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { SubtitleComponent } from './subtitle/subtitle.component';
import { MeetSectionComponent } from './meet-section/meet-section.component';
import { HttpClientModule } from '@angular/common/http';
import { register } from 'swiper/element/bundle';

register();

@NgModule({
  declarations: [AboutComponent, SubtitleComponent, MeetSectionComponent],
  imports: [CommonModule, AboutRoutingModule, HttpClientModule],
})
export class AboutModule {}
