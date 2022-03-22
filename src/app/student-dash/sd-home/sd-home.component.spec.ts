import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SdHomeComponent } from './sd-home.component';

describe('SdHomeComponent', () => {
  let component: SdHomeComponent;
  let fixture: ComponentFixture<SdHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SdHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SdHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
