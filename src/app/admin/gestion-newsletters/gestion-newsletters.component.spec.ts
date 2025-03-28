import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionNewslettersComponent } from './gestion-newsletters.component';

describe('GestionNewslettersComponent', () => {
  let component: GestionNewslettersComponent;
  let fixture: ComponentFixture<GestionNewslettersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionNewslettersComponent]
    });
    fixture = TestBed.createComponent(GestionNewslettersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
