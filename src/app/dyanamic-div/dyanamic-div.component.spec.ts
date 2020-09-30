import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DyanamicDivComponent } from './dyanamic-div.component';

describe('DyanamicDivComponent', () => {
  let component: DyanamicDivComponent;
  let fixture: ComponentFixture<DyanamicDivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DyanamicDivComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DyanamicDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
