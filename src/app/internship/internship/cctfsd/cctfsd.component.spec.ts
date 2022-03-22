import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CctfsdComponent } from './cctfsd.component';

describe('CctfsdComponent', () => {
  let component: CctfsdComponent;
  let fixture: ComponentFixture<CctfsdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CctfsdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CctfsdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
