import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QaSummaryDashboardComponent } from './qa-summary-dashboard.component';

describe('QaSummaryDashboardComponent', () => {
  let component: QaSummaryDashboardComponent;
  let fixture: ComponentFixture<QaSummaryDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QaSummaryDashboardComponent]
    });
    fixture = TestBed.createComponent(QaSummaryDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
