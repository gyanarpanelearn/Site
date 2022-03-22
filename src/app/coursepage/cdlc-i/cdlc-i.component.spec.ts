import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdlcIComponent } from './cdlc-i.component';

describe('CdlcIComponent', () => {
  let component: CdlcIComponent;
  let fixture: ComponentFixture<CdlcIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdlcIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdlcIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
