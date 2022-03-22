import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Testf1Component } from './testf1.component';

describe('Testf1Component', () => {
  let component: Testf1Component;
  let fixture: ComponentFixture<Testf1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Testf1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Testf1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
