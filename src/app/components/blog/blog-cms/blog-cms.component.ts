import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../../shared/service/blog.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-blog-cms',
  templateUrl: './blog-cms.component.html',
  styleUrls: ['./blog-cms.component.scss'],
})
export class BlogCmsComponent implements OnInit {
  blog: any;
  user: any;
  constructor(
    private _service: BlogService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this._route.params.subscribe((params) => {
      this._service.getBlogId(params['id']).subscribe((res) => {
        this.user = res;
      });
    });
  }

  ngOnInit() {}

  back() {
    this._router.navigate(['blog']);
  }
}
