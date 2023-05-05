import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import Swiper from 'swiper';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../shared/module/material.module';

@Component({
  selector: 'app-client-details',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientDetailsComponent implements AfterViewInit {
  clients = CLIENT;
  ngAfterViewInit() {
    const swiper = new Swiper('.mySwiper', {
      loop: true,
      navigation: {
        nextEl: '.next',
        prevEl: '.prev',
      },
    });
  }
}
const CLIENT = [
  {
    title: '1. TITLE HERE',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium consectetur egestas.',
    name: 'Alex Mex',
    position: 'CEO/DIRECTOR',
    image: 'assets/img/client/client-1.png',
  },
  {
    title: '2. TITLE HERE',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium consectetur egestas.',
    name: 'Alex Mex',
    position: 'CEO/DIRECTOR',
    image: 'assets/img/client/client-2.png',
  },
  {
    title: '3. TITLE HERE',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium consectetur egestas.',
    name: 'Alex Mex',
    position: 'CEO/DIRECTOR',
    image: 'assets/img/client/client-3.png',
  },
  {
    title: '4. TITLE HERE',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium consectetur egestas.',
    name: 'Alex Mex',
    position: 'CEO/DIRECTOR',
    image: 'assets/img/client/client-1.png',
  },
  {
    title: '5. TITLE HERE',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium consectetur egestas.',
    name: 'Alex Mex',
    position: 'CEO/DIRECTOR',
    image: 'assets/img/client/client-2.png',
  },
];
