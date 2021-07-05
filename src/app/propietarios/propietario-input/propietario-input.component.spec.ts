import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropietarioInputComponent } from './propietario-input.component';

describe('PropietarioInputComponent', () => {
  let component: PropietarioInputComponent;
  let fixture: ComponentFixture<PropietarioInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropietarioInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropietarioInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
