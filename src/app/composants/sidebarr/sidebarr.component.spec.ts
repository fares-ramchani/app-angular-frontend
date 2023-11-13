import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarrComponent } from './sidebarr.component';

describe('SidebarrComponent', () => {
  let component: SidebarrComponent;
  let fixture: ComponentFixture<SidebarrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarrComponent]
    });
    fixture = TestBed.createComponent(SidebarrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
