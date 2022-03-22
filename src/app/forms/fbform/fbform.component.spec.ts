import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FbformComponent } from './fbform.component';

describe('FbformComponent', () => {
  let component: FbformComponent;
  let fixture: ComponentFixture<FbformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FbformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FbformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
