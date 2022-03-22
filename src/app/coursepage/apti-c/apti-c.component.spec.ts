import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AptiCComponent } from './apti-c.component';

describe('AptiCComponent', () => {
  let component: AptiCComponent;
  let fixture: ComponentFixture<AptiCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AptiCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AptiCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
