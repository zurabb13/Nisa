import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedComponent } from '../components/shared.component';
import { HomeComponent } from '../../components/home/home.component';

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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SharedRoutingModule {}
