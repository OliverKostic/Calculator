import {async, ComponentFixture, inject, TestBed} from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { InputsComponent } from './inputs.component';
import {CalculatorService} from '../calculator.service';

describe('InputsComponent', () => {
  let component: InputsComponent;
  let fixture: ComponentFixture<InputsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ InputsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
