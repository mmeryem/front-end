import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavireDetailComponent } from './navire-detail.component';

describe('NavireDetailComponent', () => {
  let component: NavireDetailComponent;
  let fixture: ComponentFixture<NavireDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavireDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavireDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
