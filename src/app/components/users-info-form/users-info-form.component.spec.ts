import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersInfoFormComponent } from './users-info-form.component';

describe('UsersInfoFormComponent', () => {
  let component: UsersInfoFormComponent;
  let fixture: ComponentFixture<UsersInfoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersInfoFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersInfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
