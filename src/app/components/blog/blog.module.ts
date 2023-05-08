import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogModuleComponent } from './blog.component';
import { BlogSectionComponent } from './blog-section/blog-section.component';
import { MaterialModule } from '../../shared/module/material.module';
import { BlogComponent } from '../home/blog/blog.component';
import { BlogCmsComponent } from './blog-cms/blog-cms.component';
import { BlogService } from '../../shared/service/blog.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [BlogModuleComponent, BlogSectionComponent, BlogCmsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    BlogRoutingModule,
    MaterialModule,
    BlogComponent,
  ],
  providers: [BlogService],
})
export class BlogModule {}
