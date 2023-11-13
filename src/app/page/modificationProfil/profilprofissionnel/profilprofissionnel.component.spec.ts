import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilprofissionnelComponent } from './profilprofissionnel.component';

describe('ProfilprofissionnelComponent', () => {
  let component: ProfilprofissionnelComponent;
  let fixture: ComponentFixture<ProfilprofissionnelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfilprofissionnelComponent]
    });
    fixture = TestBed.createComponent(ProfilprofissionnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
