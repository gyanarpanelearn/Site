import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FedCComponent } from './fed-c.component';

describe('FedCComponent', () => {
  let component: FedCComponent;
  let fixture: ComponentFixture<FedCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FedCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FedCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
