import { Component, OnInit } from '@angular/core';
import {CalculatorService} from '../calculator.service';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css']
})
export class InputsComponent implements OnInit {

  inputNumber: number;

  operator: Object;

  operationList: Array<Object>;

  operatorName: String = 'Operator';

  constructor(private svc: CalculatorService) {
    this.operationList = svc.operationList;
    this.svc.clearFields.subscribe( () => { this.inputNumber = undefined; });
  }

  ngOnInit() {
  }

  changeOption(option) {
    this.operator = option;
    this.operatorName = option.name;
  }

  addStep () {
    this.svc.actionList.push({
      operation: this.operator,
      value: this.inputNumber
    });
  }
}
