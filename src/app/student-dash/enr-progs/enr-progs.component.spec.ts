import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrProgsComponent } from './enr-progs.component';

describe('EnrProgsComponent', () => {
  let component: EnrProgsComponent;
  let fixture: ComponentFixture<EnrProgsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnrProgsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrProgsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
