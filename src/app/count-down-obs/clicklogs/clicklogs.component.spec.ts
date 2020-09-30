import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClicklogsComponent } from './clicklogs.component';

describe('ClicklogsComponent', () => {
  let component: ClicklogsComponent;
  let fixture: ComponentFixture<ClicklogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClicklogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClicklogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
