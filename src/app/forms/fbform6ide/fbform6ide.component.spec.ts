import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fbform6ideComponent } from './fbform6ide.component';

describe('Fbform6ideComponent', () => {
  let component: Fbform6ideComponent;
  let fixture: ComponentFixture<Fbform6ideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fbform6ideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fbform6ideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
