import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesforceAdminComponent } from './salesforce-admin.component';

describe('SalesforceAdminComponent', () => {
  let component: SalesforceAdminComponent;
  let fixture: ComponentFixture<SalesforceAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesforceAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesforceAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
