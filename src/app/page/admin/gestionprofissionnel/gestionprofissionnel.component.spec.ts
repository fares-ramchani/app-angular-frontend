import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionprofissionnelComponent } from './gestionprofissionnel.component';

describe('GestionprofissionnelComponent', () => {
  let component: GestionprofissionnelComponent;
  let fixture: ComponentFixture<GestionprofissionnelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionprofissionnelComponent]
    });
    fixture = TestBed.createComponent(GestionprofissionnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
