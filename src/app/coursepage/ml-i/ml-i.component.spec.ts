import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MlIComponent } from './ml-i.component';

describe('MlIComponent', () => {
  let component: MlIComponent;
  let fixture: ComponentFixture<MlIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MlIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MlIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
