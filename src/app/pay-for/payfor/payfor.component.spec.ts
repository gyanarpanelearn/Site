import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayforComponent } from './payfor.component';

describe('PayforComponent', () => {
  let component: PayforComponent;
  let fixture: ComponentFixture<PayforComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayforComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
