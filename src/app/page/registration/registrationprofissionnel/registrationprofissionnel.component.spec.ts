import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationprofissionnelComponent } from './registrationprofissionnel.component';

describe('RegistrationprofissionnelComponent', () => {
  let component: RegistrationprofissionnelComponent;
  let fixture: ComponentFixture<RegistrationprofissionnelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrationprofissionnelComponent]
    });
    fixture = TestBed.createComponent(RegistrationprofissionnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
