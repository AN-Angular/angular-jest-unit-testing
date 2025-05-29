import { TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';
import { LoggerService } from './logger/logger.service';

describe('CalculatorService', () => {
  let service: CalculatorService;
  let loggerService: LoggerService

  beforeEach(() => {
    TestBed.configureTestingModule({});

    // Create an instance of LoggerService
    // This is necessary because CalculatorService depends on LoggerService
    loggerService = new LoggerService();
    service = new CalculatorService(loggerService);

    // Alternatively, you can use TestBed.inject(LoggerService) if you want to use the TestBed's dependency injection
    // calculatorService = TestBed.inject(CalculatorService);
    
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a number when adding', () => {
    const result = service.addNumbers(10, 20);
    expect(typeof result).toBe('number');
  });

  it('should add two numbers', () => {
    const result = service.addNumbers(10, 20);
    expect(result).toBe(30);
  })

  it('should return a number when subtracting', () => {
    const result = service.subtractNumbers(20, 10);
    expect(typeof result).toBe('number');
  });

  it('should subtract two numbers', () => {
    const result = service.subtractNumbers(20, 10);
    expect(result).toBe(10);
  });

  it('should return a number when multiplying', () => {
    const result = service.multiplyNumbers(10, 20);
    expect(typeof result).toBe('number');
  });

  it('should multiply two numbers', () => {
    const result = service.multiplyNumbers(10, 20);
    expect(result).toBe(200);
  });

  it('should return a number when dividing', () => {
    const result = service.divideNumbers(20, 10);
    expect(typeof result).toBe('number');
  });

  it('should divide two numbers', () => {
    const result = service.divideNumbers(20, 10);
    expect(result).toBe(2);
  });

  it('should throw an error when dividing by zero', () => {
    expect(() => service.divideNumbers(20, 0)).toThrowError('Division by zero is not allowed');
  });

});
