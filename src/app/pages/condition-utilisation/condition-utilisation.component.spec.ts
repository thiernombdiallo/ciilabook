import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionUtilisationComponent } from './condition-utilisation.component';

describe('ConditionUtilisationComponent', () => {
  let component: ConditionUtilisationComponent;
  let fixture: ComponentFixture<ConditionUtilisationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConditionUtilisationComponent]
    });
    fixture = TestBed.createComponent(ConditionUtilisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
