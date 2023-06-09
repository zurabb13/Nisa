import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedComponent } from '../components/shared.component';
import { HomeComponent } from '../../components/home/home.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: SharedComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () =>
          import('../../components/home/home.module').then(
            (home) => home.HomeModule
          ),
      },
      {
        path: 'about',
        loadChildren: () =>
          import('../../components/about/about.module').then(
            (about) => about.AboutModule
          ),
      },
      {
        path: 'contact',
        loadChildren: () =>
          import('../../components/contact/contact.module').then(
            (contact) => contact.ContactModule
          ),
      },
      {
        path: 'pricing',
        loadChildren: () =>
          import('../../components/pricing/pricing.module').then(
            (pricing) => pricing.PricingModule
          ),
      },
      {
        path: 'blog',
        loadChildren: () =>
          import('../../components/blog/blog.module').then(
            (blog) => blog.BlogModule
          ),
      },
      {
        path: '**',
        component: PageNotFoundComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SharedRoutingModule {}
