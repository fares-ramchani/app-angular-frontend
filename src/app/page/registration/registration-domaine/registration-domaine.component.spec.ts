import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationDomaineComponent } from './registration-domaine.component';

describe('RegistrationDomaineComponent', () => {
  let component: RegistrationDomaineComponent;
  let fixture: ComponentFixture<RegistrationDomaineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrationDomaineComponent]
    });
    fixture = TestBed.createComponent(RegistrationDomaineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
