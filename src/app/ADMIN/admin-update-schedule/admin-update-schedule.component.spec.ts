import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUpdateScheduleComponent } from './admin-update-schedule.component';

describe('AdminUpdateScheduleComponent', () => {
  let component: AdminUpdateScheduleComponent;
  let fixture: ComponentFixture<AdminUpdateScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUpdateScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUpdateScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
