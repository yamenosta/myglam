import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarousselSectionComponent } from './caroussel-section.component';

describe('CarousselSectionComponent', () => {
  let component: CarousselSectionComponent;
  let fixture: ComponentFixture<CarousselSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarousselSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarousselSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
