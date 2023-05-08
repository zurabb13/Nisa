import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogModuleComponent } from './blog.component';
import { BlogSectionComponent } from './blog-section/blog-section.component';
import { BlogCmsComponent } from './blog-cms/blog-cms.component';

const routes: Routes = [
  {
    path: '',
    component: BlogModuleComponent,
    children: [
      {
        path: '',
        component: BlogSectionComponent,
      },
      {
        path: ':id',
        component: BlogCmsComponent,
      },
    ],
  },
];
3;
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogRoutingModule {}
