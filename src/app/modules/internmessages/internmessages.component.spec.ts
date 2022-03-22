import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternmessagesComponent } from './internmessages.component';

describe('InternmessagesComponent', () => {
  let component: InternmessagesComponent;
  let fixture: ComponentFixture<InternmessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternmessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternmessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
