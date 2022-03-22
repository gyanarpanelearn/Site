import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurinternshipprogramsComponent } from './ourinternshipprograms.component';

describe('OurinternshipprogramsComponent', () => {
  let component: OurinternshipprogramsComponent;
  let fixture: ComponentFixture<OurinternshipprogramsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurinternshipprogramsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurinternshipprogramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
