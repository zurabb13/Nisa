import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingAboutComponent } from './pricing-about.component';

describe('PricingAboutComponent', () => {
  let component: PricingAboutComponent;
  let fixture: ComponentFixture<PricingAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PricingAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PricingAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
