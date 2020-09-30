import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountDownObsComponent } from './count-down-obs.component';

describe('CountDownObsComponent', () => {
  let component: CountDownObsComponent;
  let fixture: ComponentFixture<CountDownObsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountDownObsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountDownObsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
