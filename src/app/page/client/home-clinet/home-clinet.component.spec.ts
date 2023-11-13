import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeClinetComponent } from './home-clinet.component';

describe('HomeClinetComponent', () => {
  let component: HomeClinetComponent;
  let fixture: ComponentFixture<HomeClinetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeClinetComponent]
    });
    fixture = TestBed.createComponent(HomeClinetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
