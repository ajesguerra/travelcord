import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitysuggestionListComponent } from './activitysuggestion-list.component';

describe('ActivitysuggestionListComponent', () => {
  let component: ActivitysuggestionListComponent;
  let fixture: ComponentFixture<ActivitysuggestionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivitysuggestionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitysuggestionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
