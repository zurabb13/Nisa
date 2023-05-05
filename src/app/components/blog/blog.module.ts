import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogModuleComponent } from './blog.component';
import { BlogSectionComponent } from './blog-section/blog-section.component';
import { MaterialModule } from '../../shared/module/material.module';
import { BlogComponent } from '../home/blog/blog.component';

@NgModule({
  declarations: [BlogModuleComponent, BlogSectionComponent],
  imports: [CommonModule, BlogRoutingModule, MaterialModule, BlogComponent],
})
export class BlogModule {}
