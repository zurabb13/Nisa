import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent {
  blogs = [
    {
      img: 'assets/img/blog/image-1.png',
      data: 'May 5. 2022 | 4 MIN READ',
      text: 'How marketing can help your business more than anything.',
    },
    {
      img: 'assets/img/blog/image-2.png',
      data: 'May 5. 2022 | 4 MIN READ',
      text: 'How marketing can help your business more than anything.',
    },
    {
      img: 'assets/img/blog/image-3.png',
      data: 'May 5. 2022 | 4 MIN READ',
      text: 'How marketing can help your business more than anything.',
    },
    {
      img: 'assets/img/blog/image-4.png',
      data: 'May 5. 2022 | 4 MIN READ',
      text: 'How marketing can help your business more than anything.',
    },
    {
      img: 'assets/img/blog/image-5.png',
      data: 'May 5. 2022 | 4 MIN READ',
      text: 'How marketing can help your business more than anything.',
    },
    {
      img: 'assets/img/blog/image-6.png',
      data: 'May 5. 2022 | 4 MIN READ',
      text: 'How marketing can help your business more than anything.',
    },
  ];
}
