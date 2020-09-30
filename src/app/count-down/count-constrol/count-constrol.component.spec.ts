import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountConstrolComponent } from './count-constrol.component';

describe('CountConstrolComponent', () => {
  let component: CountConstrolComponent;
  let fixture: ComponentFixture<CountConstrolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountConstrolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountConstrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
