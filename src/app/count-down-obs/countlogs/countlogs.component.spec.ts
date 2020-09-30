import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountlogsComponent } from './countlogs.component';

describe('CountlogsComponent', () => {
  let component: CountlogsComponent;
  let fixture: ComponentFixture<CountlogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountlogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
