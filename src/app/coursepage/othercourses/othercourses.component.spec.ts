import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OthercoursesComponent } from './othercourses.component';

describe('OthercoursesComponent', () => {
  let component: OthercoursesComponent;
  let fixture: ComponentFixture<OthercoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OthercoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OthercoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
