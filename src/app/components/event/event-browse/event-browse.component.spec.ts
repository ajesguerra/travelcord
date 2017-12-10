import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventBrowseComponent } from './event-browse.component';

describe('EventBrowseComponent', () => {
  let component: EventBrowseComponent;
  let fixture: ComponentFixture<EventBrowseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventBrowseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventBrowseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
