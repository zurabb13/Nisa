import { Component } from '@angular/core';

@Component({
  selector: 'app-blog-section',
  templateUrl: './blog-section.component.html',
  styleUrls: ['./blog-section.component.scss'],
})
export class BlogSectionComponent {
  filterPost = blog;
  active = 'stories';
  filterData(data: string) {
    this.active = data;
    if (data === 'all') {
      this.filterPost = blog;
    } else {
      this.filterPost = blog.filter((post) => post.category === data);
    }
  }
}
const blog = [
  {
    img: 'assets/img/blog/image-1.png',
    data: 'May 5. 2022 | 4 MIN READ',
    text: 'How marketing can help your business more than anything.',
    stories: 'stories',
    link: '',
    category: 'stories',
  },
  {
    img: 'assets/img/blog/image-2.png',
    data: 'May 5. 2022 | 4 MIN READ',
    text: 'How marketing can help your business more than anything.',
    stories: 'stories',
    link: '',
    category: 'stories',
  },
  {
    img: 'assets/img/blog/image-3.png',
    data: 'May 5. 2022 | 4 MIN READ',
    text: 'How marketing can help your business more than anything.',
    stories: 'stories',
    link: '',
    category: 'technology',
  },
  {
    img: 'assets/img/blog/image-4.png',
    data: 'May 5. 2022 | 4 MIN READ',
    text: 'How marketing can help your business more than anything.',
    stories: 'stories',
    link: '',
    category: 'design',
  },
  {
    img: 'assets/img/blog/image-5.png',
    data: 'May 5. 2022 | 4 MIN READ',
    text: 'How marketing can help your business more than anything.',
    stories: 'stories',
    link: '',
    category: 'design',
  },
  {
    img: 'assets/img/blog/image-6.png',
    data: 'May 5. 2022 | 4 MIN READ',
    text: 'How marketing can help your business more than anything.',
    stories: 'stories',
    link: '',
    category: 'stories',
  },
];
