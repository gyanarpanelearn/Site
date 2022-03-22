import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamAbtComponent } from './team-abt.component';

describe('TeamAbtComponent', () => {
  let component: TeamAbtComponent;
  let fixture: ComponentFixture<TeamAbtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamAbtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamAbtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
