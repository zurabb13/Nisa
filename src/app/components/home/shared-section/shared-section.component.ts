import { AfterViewInit, Component } from '@angular/core';
import Swiper from 'swiper';
@Component({
  selector: 'app-shared-section',
  templateUrl: './shared-section.component.html',
  styleUrls: ['./shared-section.component.scss'],
})
export class SharedSectionComponent implements AfterViewInit {
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
  ngAfterViewInit() {
    const swiper = new Swiper('.mySwiper', {
      loop: true,
      slidesPerView: 2,
      spaceBetween: 30,
    });
  }
}
