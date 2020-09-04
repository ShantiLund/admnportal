import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PligrimComponent } from './pligrim.component';

describe('PligrimComponent', () => {
  let component: PligrimComponent;
  let fixture: ComponentFixture<PligrimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PligrimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PligrimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
