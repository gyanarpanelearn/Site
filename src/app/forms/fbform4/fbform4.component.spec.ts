import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fbform4Component } from './fbform4.component';

describe('Fbform4Component', () => {
  let component: Fbform4Component;
  let fixture: ComponentFixture<Fbform4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fbform4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fbform4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
