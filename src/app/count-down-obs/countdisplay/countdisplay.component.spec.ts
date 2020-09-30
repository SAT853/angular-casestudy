import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdisplayComponent } from './countdisplay.component';

describe('CountdisplayComponent', () => {
  let component: CountdisplayComponent;
  let fixture: ComponentFixture<CountdisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountdisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
