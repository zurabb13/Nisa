import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { BlogService } from '../../../shared/service/blog.service';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RouterLink],
  providers: [BlogService],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  blog: any;
  getAllData() {
    this._service.getBlog().subscribe((res) => {
      this.blog = res;
    });
  }
  constructor(
    private _service: BlogService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.getAllData();
  }
  ngOnInit() {}
  navigate(id: number) {
    const url = window.location.href;
    window.scrollTo(0, 0);
    this._router.navigate(url === 'blog' ? [id] : ['blog', id]);
  }
}
