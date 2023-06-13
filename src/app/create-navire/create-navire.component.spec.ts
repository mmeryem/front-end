import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNavireComponent } from './create-navire.component';

describe('CreateNavireComponent', () => {
  let component: CreateNavireComponent;
  let fixture: ComponentFixture<CreateNavireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateNavireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateNavireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
