import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceWeatherWidgetComponent } from './space-weather-widget.component';

describe('SpaceWeatherWidgetComponent', () => {
  let component: SpaceWeatherWidgetComponent;
  let fixture: ComponentFixture<SpaceWeatherWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpaceWeatherWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceWeatherWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
