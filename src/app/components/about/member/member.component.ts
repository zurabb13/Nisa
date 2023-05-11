import { Component } from '@angular/core';
interface client {
  img: string;
  name: string;
  about: string;
  social: string;
}
@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss'],
})
export class MemberComponent {
  members: client | any = member;
  icons: any = icon;
}
const member = [
  {
    img: 'assets/img/member/client-1.webp',
    name: 'Zura Baramia',
    about: 'Lorem ipsum dolor sit amet, consec -tetur adipiscing elit. ',
    color: 'cadetblue',
    position: 'CEO & FOUNDER',
  },
  {
    img: 'assets/img/member/client-2.webp',
    name: 'Katie Smith',
    about: 'Lorem ipsum dolor sit amet, consec -tetur adipiscing elit. ',
    color: 'blue',
    position: 'CEO & FOUNDER',
  },
  {
    img: 'assets/img/member/client-3.webp',
    name: 'Borkat Ali',
    about: 'Lorem ipsum dolor sit amet, consec -tetur adipiscing elit. ',
    color: 'green',
    position: 'CTO & Co- Founder',
  },
  {
    img: 'assets/img/member/client-4.webp',
    name: 'Alex Mex',
    about: 'Lorem ipsum dolor sit amet, consec -tetur adipiscing elit. ',
    color: 'yellowgreen',
    position: 'CEO & FOUNDER',
  },
  {
    img: 'assets/img/member/client-5.webp',
    name: 'Tahn Lane',
    about: 'Lorem ipsum dolor sit amet, consec -tetur adipiscing elit. ',
    color: 'teal',
    position: 'VP of Marketing',
  },
  {
    img: 'assets/img/member/client-6.webp',
    name: 'Maruf Mia',
    about: 'Lorem ipsum dolor sit amet, consec -tetur adipiscing elit. ',
    color: 'purple',
    position: 'VP of product',
  },
];
const icon = [
  { icon: 'assets/img/icon/twiter.svg', link: 'https://twitter.com/' },
  {
    icon: 'assets/img/icon/linkedin.svg',
    link: 'https://www.linkedin.com/feed/',
  },
  { icon: 'assets/img/icon/facebook.svg', link: 'https://www.facebook.com/' },
  { icon: 'assets/img/icon/instagram.svg', link: 'https://www.instagram.com/' },
];
