import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingSucceedComponent } from './booking-succeed.component';

describe('BookingSucceedComponent', () => {
  let component: BookingSucceedComponent;
  let fixture: ComponentFixture<BookingSucceedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingSucceedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingSucceedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
