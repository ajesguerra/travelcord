import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFollowingComponent } from './view-following.component';

describe('ViewFollowingComponent', () => {
  let component: ViewFollowingComponent;
  let fixture: ComponentFixture<ViewFollowingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewFollowingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFollowingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
