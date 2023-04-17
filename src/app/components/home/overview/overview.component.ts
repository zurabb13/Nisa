import { Component } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent {
  header = 'Discover the power of creative freedom with Nisa.';
  text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt
    finibus tortor. Donec lobortis augue sed ante molestie, vitae maximus nunc
    semper.`;
  button = 'Explore Section';
  details = 'Add some additional details about your product';
  name = 'Motiur Leeman';
  about = 'Markating Manager';
}
