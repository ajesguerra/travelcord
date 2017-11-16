import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacestestComponent } from './placestest.component';

describe('PlacestestComponent', () => {
  let component: PlacestestComponent;
  let fixture: ComponentFixture<PlacestestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacestestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacestestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
