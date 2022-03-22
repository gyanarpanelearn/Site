import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VpanComponent } from './vpan.component';

describe('VpanComponent', () => {
  let component: VpanComponent;
  let fixture: ComponentFixture<VpanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VpanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VpanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
