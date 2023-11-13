import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDomaineComponent } from './gestion-domaine.component';

describe('GestionDomaineComponent', () => {
  let component: GestionDomaineComponent;
  let fixture: ComponentFixture<GestionDomaineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionDomaineComponent]
    });
    fixture = TestBed.createComponent(GestionDomaineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
