import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitysuggestionNewComponent } from './activitysuggestion-new.component';

describe('ActivitysuggestionNewComponent', () => {
  let component: ActivitysuggestionNewComponent;
  let fixture: ComponentFixture<ActivitysuggestionNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivitysuggestionNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitysuggestionNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
