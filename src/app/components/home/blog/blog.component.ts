import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent {
  blogs = [
    {
      img: 'assets/img/blog/image-1.png',
      data: 'May 5. 2022 | 4 MIN READ',
      text: 'How marketing can help your business more than anything.',
      stories: 'stories',
      link: '',
    },
    {
      img: 'assets/img/blog/image-2.png',
      data: 'May 5. 2022 | 4 MIN READ',
      text: 'How marketing can help your business more than anything.',
      stories: 'stories',
      link: '',
    },
    {
      img: 'assets/img/blog/image-3.png',
      data: 'May 5. 2022 | 4 MIN READ',
      text: 'How marketing can help your business more than anything.',
      stories: 'stories',
      link: '',
    },
    {
      img: 'assets/img/blog/image-4.png',
      data: 'May 5. 2022 | 4 MIN READ',
      text: 'How marketing can help your business more than anything.',
      stories: 'stories',
      link: '',
    },
    {
      img: 'assets/img/blog/image-5.png',
      data: 'May 5. 2022 | 4 MIN READ',
      text: 'How marketing can help your business more than anything.',
      stories: 'stories',
      link: '',
    },
    {
      img: 'assets/img/blog/image-6.png',
      data: 'May 5. 2022 | 4 MIN READ',
      text: 'How marketing can help your business more than anything.',
      stories: 'stories',
      link: '',
    },
  ];
}
