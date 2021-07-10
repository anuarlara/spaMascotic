import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroInputComponent } from './registro-input.component';

describe('RegistroInputComponent', () => {
  let component: RegistroInputComponent;
  let fixture: ComponentFixture<RegistroInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
