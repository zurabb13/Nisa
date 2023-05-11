import { AfterViewInit, Component } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
})
export class ReviewComponent implements AfterViewInit {
  review = [
    {
      img: 'assets/img/client/person-1.webp',
      person: 'Zura Baramia',
      prof: 'Angular Developer',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc luctus venenatis mi aliquet cras interdum. Lectus cons ectetur fermentum lorem aliquam.',
    },
    {
      img: 'assets/img/client/person-2.webp',
      person: 'Zura Baramia',
      prof: 'Angular Developer',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc luctus venenatis mi aliquet cras interdum. Lectus cons ectetur fermentum lorem aliquam.',
    },
    {
      img: 'assets/img/client/person-3.webp',
      person: 'Zura Baramia',
      prof: 'Angular Developer',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc luctus venenatis mi aliquet cras interdum. Lectus cons ectetur fermentum lorem aliquam.',
    },
    {
      img: 'assets/img/client/person-1.webp',
      person: 'Zura Baramia',
      prof: 'Angular Developer',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc luctus venenatis mi aliquet cras interdum. Lectus cons ectetur fermentum lorem aliquam.',
    },
  ];

  ngAfterViewInit() {
    const swiper = new Swiper('.mySwiper', {
      slidesPerView: 1,
      loop: false,
      breakpoints: {
        790: {
          slidesPerView: 3,
          loop: true,
        },
      },
      navigation: {
        nextEl: '.next',
        prevEl: '.prev',
      },
    });
  }
}
