import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from '../components/shared.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { FooterComponent } from '../components/footer/footer.component';
import { SendInfoComponent } from '../components/send-info/send-info.component';
import { MaterialModule } from './material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SharedComponent, NavbarComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FooterComponent,
    SendInfoComponent,
    MaterialModule,
    RouterModule,
  ],
})
export class SharedModule {}
