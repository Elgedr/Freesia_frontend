import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipcardComponent } from './shipcard.component';

describe('ShipcardComponent', () => {
  let component: ShipcardComponent;
  let fixture: ComponentFixture<ShipcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipcardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
