import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetSectionComponent } from './meet-section.component';

describe('MeetSectionComponent', () => {
  let component: MeetSectionComponent;
  let fixture: ComponentFixture<MeetSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeetSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeetSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
