import { Component } from '@angular/core';
import { navbarData } from './navbarData';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  link = navbarData;
}
