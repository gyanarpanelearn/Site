import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IotIComponent } from './iot-i.component';

describe('IotIComponent', () => {
  let component: IotIComponent;
  let fixture: ComponentFixture<IotIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IotIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IotIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
