import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { InfoComponent } from './info/info.component';
import { MaterialModule } from '../../shared/module/material.module';
import { FormComponent } from '../../shared/components/form/form.component';
import { ClientDetailsComponent } from '../about/client-details/client-details.component';

@NgModule({
  declarations: [ContactComponent, InfoComponent],
  imports: [
    CommonModule,
    ContactRoutingModule,
    MaterialModule,
    FormComponent,
    ClientDetailsComponent,
  ],
})
export class ContactModule {}
