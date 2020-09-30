import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountClicklogsComponent } from './count-clicklogs.component';

describe('CountClicklogsComponent', () => {
  let component: CountClicklogsComponent;
  let fixture: ComponentFixture<CountClicklogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountClicklogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountClicklogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
