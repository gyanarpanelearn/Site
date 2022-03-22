import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacedSComponent } from './placed-s.component';

describe('PlacedSComponent', () => {
  let component: PlacedSComponent;
  let fixture: ComponentFixture<PlacedSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacedSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacedSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
