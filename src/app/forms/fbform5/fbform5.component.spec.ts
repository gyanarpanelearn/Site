import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fbform5Component } from './fbform5.component';

describe('Fbform5Component', () => {
  let component: Fbform5Component;
  let fixture: ComponentFixture<Fbform5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fbform5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fbform5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
