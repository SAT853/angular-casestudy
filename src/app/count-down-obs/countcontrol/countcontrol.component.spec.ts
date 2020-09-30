import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountcontrolComponent } from './countcontrol.component';

describe('CountcontrolComponent', () => {
  let component: CountcontrolComponent;
  let fixture: ComponentFixture<CountcontrolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountcontrolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountcontrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
