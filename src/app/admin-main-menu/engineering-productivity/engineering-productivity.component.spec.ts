import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineeringProductivityComponent } from './engineering-productivity.component';

describe('EngineeringProductivityComponent', () => {
  let component: EngineeringProductivityComponent;
  let fixture: ComponentFixture<EngineeringProductivityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EngineeringProductivityComponent]
    });
    fixture = TestBed.createComponent(EngineeringProductivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
