import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookignSucceedComponent } from './bookign-succeed.component';

describe('BookignSucceedComponent', () => {
  let component: BookignSucceedComponent;
  let fixture: ComponentFixture<BookignSucceedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookignSucceedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookignSucceedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
