import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogModuleComponent } from './blog.component';

const routes: Routes = [
  {
    path: '',
    component: BlogModuleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogRoutingModule {}
