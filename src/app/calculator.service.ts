import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  public actionList = [];
  public result = 0;
  public operationList = window['oplst'];
  public clearFields = new Subject<any>();

  constructor() {
  }

  calculate () {
    if (this.actionList[this.actionList.length - 1].operation.name === 'Apply') {
      this.result = this.actionList[this.actionList.length - 1].value;
      for (let i = 0; i < this.actionList.length - 1; i++) {
        this.result = this.actionList[i].operation.fun(this.result, this.actionList[i].value);
      }
    }
  }

  clearList() {
    this.actionList = [];
    this.result = 0;
    this.clearFields.next();
  }
}
