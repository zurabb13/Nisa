import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogCmsComponent } from './blog-cms.component';

describe('BlogCmsComponent', () => {
  let component: BlogCmsComponent;
  let fixture: ComponentFixture<BlogCmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogCmsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogCmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
