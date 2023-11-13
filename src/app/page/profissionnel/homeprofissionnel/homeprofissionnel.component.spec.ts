import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeprofissionnelComponent } from './homeprofissionnel.component';

describe('HomeprofissionnelComponent', () => {
  let component: HomeprofissionnelComponent;
  let fixture: ComponentFixture<HomeprofissionnelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeprofissionnelComponent]
    });
    fixture = TestBed.createComponent(HomeprofissionnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
