import { Component, ElementRef, ViewChild } from '@angular/core';
@Component({
  selector: 'app-shared-section',
  templateUrl: './shared-section.component.html',
  styleUrls: ['./shared-section.component.scss'],
})
export class SharedSectionComponent {
  @ViewChild('swiperContainer') swiperContainer!: ElementRef;
  card = [
    {
      title: 'Blog',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      img: 'assets/img/cart-1.svg',
    },
    {
      title: 'Documentation',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
      img: 'assets/img/cart-2.svg',
    },
    {
      title: 'intergrations',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
      img: 'assets/img/cart-3.svg',
    },
    {
      title: 'Customers',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
      img: 'assets/img/cart-4.svg',
    },
  ];
}
