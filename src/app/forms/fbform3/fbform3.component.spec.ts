import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fbform3Component } from './fbform3.component';

describe('Fbform3Component', () => {
  let component: Fbform3Component;
  let fixture: ComponentFixture<Fbform3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fbform3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fbform3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
