import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarButtonComponent } from './navbar-button.component';

describe('NavbarButtonComponent', () => {
  let component: NavbarButtonComponent;
  let fixture: ComponentFixture<NavbarButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
