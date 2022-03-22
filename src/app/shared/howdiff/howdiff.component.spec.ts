import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowdiffComponent } from './howdiff.component';

describe('HowdiffComponent', () => {
  let component: HowdiffComponent;
  let fixture: ComponentFixture<HowdiffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowdiffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowdiffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
