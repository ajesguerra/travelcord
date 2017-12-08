import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTravelersComponent } from './view-travelers.component';

describe('ViewTravelersComponent', () => {
  let component: ViewTravelersComponent;
  let fixture: ComponentFixture<ViewTravelersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTravelersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTravelersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
