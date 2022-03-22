import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FsdCComponent } from './fsd-c.component';

describe('FsdCComponent', () => {
  let component: FsdCComponent;
  let fixture: ComponentFixture<FsdCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FsdCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FsdCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
