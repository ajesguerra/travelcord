import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTravelersComponent } from './search-travelers.component';

describe('SearchTravelersComponent', () => {
  let component: SearchTravelersComponent;
  let fixture: ComponentFixture<SearchTravelersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchTravelersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchTravelersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
