import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FligtcardComponent } from './fligtcard.component';

describe('FligtcardComponent', () => {
  let component: FligtcardComponent;
  let fixture: ComponentFixture<FligtcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FligtcardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FligtcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
