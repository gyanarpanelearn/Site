import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IotCComponent } from './iot-c.component';

describe('IotCComponent', () => {
  let component: IotCComponent;
  let fixture: ComponentFixture<IotCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IotCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IotCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
