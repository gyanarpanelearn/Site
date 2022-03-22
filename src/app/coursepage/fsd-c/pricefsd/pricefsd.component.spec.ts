import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricefsdComponent } from './pricefsd.component';

describe('PricefsdComponent', () => {
  let component: PricefsdComponent;
  let fixture: ComponentFixture<PricefsdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricefsdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricefsdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
