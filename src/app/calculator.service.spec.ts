import { TestBed, inject } from '@angular/core/testing';
import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalculatorService]
    });
  });

  it('service created', inject([CalculatorService], (service: CalculatorService) => {
    expect(service).toBeTruthy();
  }));

  it('operations loaded', inject([CalculatorService], (service: CalculatorService) => {
    expect(service.operationList.length).toEqual(5);
  }));

  it('can add', inject([CalculatorService], (service: CalculatorService) => {
    service.actionList.push({
      operation: service.operationList[1],
      value: 1
    });
    service.actionList.push({
      operation: service.operationList[0],
      value: 2
    });
    service.calculate();
    expect(service.result).toEqual(3);
  }));

  it('can subtract', inject([CalculatorService], (service: CalculatorService) => {
    service.actionList.push({
      operation: service.operationList[2],
      value: 2
    });
    service.actionList.push({
      operation: service.operationList[0],
      value: 4
    });
    service.calculate();
    expect(service.result).toEqual(2);
  }));

  it('can multiply', inject([CalculatorService], (service: CalculatorService) => {
    service.actionList.push({
      operation: service.operationList[3],
      value: 2
    });
    service.actionList.push({
      operation: service.operationList[0],
      value: 4
    });
    service.calculate();
    expect(service.result).toEqual(8);
  }));

  it('can divide', inject([CalculatorService], (service: CalculatorService) => {
    service.actionList.push({
      operation: service.operationList[4],
      value: 3
    });
    service.actionList.push({
      operation: service.operationList[0],
      value: 9
    });
    service.calculate();
    expect(service.result).toEqual(3);
  }));

  it('can calculate', inject([CalculatorService], (service: CalculatorService) => {
    service.actionList.push({
      operation: service.operationList[1],
      value: 2
    });
    service.actionList.push({
      operation: service.operationList[3],
      value: 4
    });
    service.actionList.push({
      operation: service.operationList[2],
      value: 6
    });
    service.actionList.push({
      operation: service.operationList[4],
      value: 2
    });
    service.actionList.push({
      operation: service.operationList[0],
      value: 2
    });
    service.calculate();
    expect(service.result).toEqual(5);
  }));
});

