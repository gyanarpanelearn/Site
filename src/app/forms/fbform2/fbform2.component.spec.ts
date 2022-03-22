import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fbform2Component } from './fbform2.component';

describe('Fbform2Component', () => {
  let component: Fbform2Component;
  let fixture: ComponentFixture<Fbform2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fbform2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fbform2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
