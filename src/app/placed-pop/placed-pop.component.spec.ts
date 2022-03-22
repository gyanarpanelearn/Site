import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacedPopComponent } from './placed-pop.component';

describe('PlacedPopComponent', () => {
  let component: PlacedPopComponent;
  let fixture: ComponentFixture<PlacedPopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacedPopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacedPopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
