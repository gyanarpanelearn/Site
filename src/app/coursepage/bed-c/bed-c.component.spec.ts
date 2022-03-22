import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BedCComponent } from './bed-c.component';

describe('BedCComponent', () => {
  let component: BedCComponent;
  let fixture: ComponentFixture<BedCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BedCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BedCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
