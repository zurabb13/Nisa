import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swiper from 'swiper';

@Component({
  selector: 'app-meet-section',
  templateUrl: './meet-section.component.html',
  styleUrls: ['./meet-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MeetSectionComponent implements OnInit, AfterViewInit {
  public data: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  images = [
    { img: 'assets/img/%20about/meet-1.webp', alt: 'meet-person' },
    { img: 'assets/img/%20about/meet-2.webp', alt: 'meet-person' },
    { img: 'assets/img/%20about/meet-3.webp', alt: 'meet-person' },
    { img: 'assets/img/%20about/meet-4.webp', alt: 'meet-person' },
    { img: 'assets/img/%20about/meet-5.webp', alt: 'meet-person' },
    { img: 'assets/img/%20about/meet-6.webp', alt: 'meet-person' },
    { img: 'assets/img/%20about/meet-7.webp', alt: 'meet-person' },
  ];
  details = [
    { info: '98%', text: 'CCustomer satisfaction' },
    { info: '120M+', text: 'CLIENT RETENTION' },
    { info: '32K+', text: 'EMAILS PER MONTH' },
    { info: '48M+', text: 'MONTHLY CAMAIGNS' },
  ];
  ngAfterViewInit() {
    let swiper = new Swiper('.mySwiper', {
      // loop: true,
      slidesPerView: 1,
      spaceBetween: 30,
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        790: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        900: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      },
    });
  }
}
