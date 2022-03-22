import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PincludeComponent } from './pinclude.component';

describe('PincludeComponent', () => {
  let component: PincludeComponent;
  let fixture: ComponentFixture<PincludeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PincludeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PincludeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
