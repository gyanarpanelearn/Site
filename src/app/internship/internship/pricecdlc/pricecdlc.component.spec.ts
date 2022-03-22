import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricecdlcComponent } from './pricecdlc.component';

describe('PricecdlcComponent', () => {
  let component: PricecdlcComponent;
  let fixture: ComponentFixture<PricecdlcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricecdlcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricecdlcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
