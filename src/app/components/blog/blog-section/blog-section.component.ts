import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../../shared/service/blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-section',
  templateUrl: './blog-section.component.html',
  styleUrls: ['./blog-section.component.scss'],
})
export class BlogSectionComponent implements OnInit {
  blog: any = [];
  active = 'stories';
  filterPost: any = [];
  constructor(private _service: BlogService, private _route: Router) {}
  getAllData() {
    this._service.getBlog().subscribe((res) => {
      this.blog = res;
      this.filterData('stories');
    });
  }
  filterData(data: string) {
    this.active = data;
    if (data === 'all') {
      this.filterPost = this.blog;
    } else {
      this.filterPost = this.blog.filter((blog: any) => blog.category === data);
    }
  }

  ngOnInit(): void {
    this.getAllData();
  }
  navigate(id: number) {
    this._route.navigate(['blog', id]);
  }
}
