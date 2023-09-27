import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo2FeatureComponent } from './demo2-feature.component';

describe('Demo2FeatureComponent', () => {
  let component: Demo2FeatureComponent;
  let fixture: ComponentFixture<Demo2FeatureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Demo2FeatureComponent]
    });
    fixture = TestBed.createComponent(Demo2FeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
