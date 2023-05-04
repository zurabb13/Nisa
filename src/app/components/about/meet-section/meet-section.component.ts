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
    { img: 'assets/img/%20about/meet-1.png', alt: 'meet-person' },
    { img: 'assets/img/%20about/meet-2.png', alt: 'meet-person' },
    { img: 'assets/img/%20about/meet-3.png', alt: 'meet-person' },
    { img: 'assets/img/%20about/meet-4.png', alt: 'meet-person' },
    { img: 'assets/img/%20about/meet-5.png', alt: 'meet-person' },
    { img: 'assets/img/%20about/meet-6.png', alt: 'meet-person' },
    { img: 'assets/img/%20about/meet-7.png', alt: 'meet-person' },
  ];
  details = [
    { info: '98%', text: 'CCustomer satisfaction' },
    { info: '120M+', text: 'CLIENT RETENTION' },
    { info: '32K+', text: 'EMAILS PER MONTH' },
    { info: '48M+', text: 'MONTHLY CAMAIGNS' },
  ];
  ngAfterViewInit() {
    let swiper = new Swiper('.mySwiper', {
      loop: true,
      // slidesPerView: 1,
    });
  }
}
