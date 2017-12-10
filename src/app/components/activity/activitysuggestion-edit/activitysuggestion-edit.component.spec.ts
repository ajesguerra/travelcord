import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitysuggestionEditComponent } from './activitysuggestion-edit.component';

describe('ActivitysuggestionEditComponent', () => {
  let component: ActivitysuggestionEditComponent;
  let fixture: ComponentFixture<ActivitysuggestionEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivitysuggestionEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitysuggestionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
