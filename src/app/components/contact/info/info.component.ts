import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent {
  details = details;
  social = social;
}
const details = [
  { img: 'assets/img/info/messages.svg', text: 'zura.baramia98@outlook.com' },
  { img: 'assets/img/info/call.svg', text: '+995-511-15-35-89' },
  { img: 'assets/img/info/location.svg', text: '6391 Elgin Delaware 10299' },
];
const social = [
  {
    img: 'assets/img/icon/twiter.svg',
    link: 'https://twitter.com',
  },
  {
    img: 'assets/img/icon/facebook.svg',
    link: 'https://facebook.com/zurabb13',
  },
  {
    img: 'assets/img/icon/instagram.svg',
    link: 'https://instagram.com/zurabb13',
  },
  {
    img: 'assets/img/icon/linkedin.svg',
    link: 'https://linkedin.com/in/zurabb13/',
  },
  {
    img: 'assets/img/icon/pinterest.svg',
    link: 'https://pinterest.com',
  },
];
