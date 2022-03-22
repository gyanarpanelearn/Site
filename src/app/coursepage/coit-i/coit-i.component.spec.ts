import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoitIComponent } from './coit-i.component';

describe('CoitIComponent', () => {
  let component: CoitIComponent;
  let fixture: ComponentFixture<CoitIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoitIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoitIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
