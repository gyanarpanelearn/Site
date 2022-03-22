import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MlCComponent } from './ml-c.component';

describe('MlCComponent', () => {
  let component: MlCComponent;
  let fixture: ComponentFixture<MlCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MlCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MlCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
