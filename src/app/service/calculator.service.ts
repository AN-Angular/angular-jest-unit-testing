import { Injectable } from '@angular/core';
import { LoggerService } from './logger/logger.service';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor(private loggerService: LoggerService) { }

  public addNumbers(num1: number, num2: number): number {
    return num1 + num2; // returns the sum of num1 and num2
  }

  public subtractNumbers(num1: number, num2: number): number {
    return num1 - num2; // returns the difference of num1 and num2
  }

  public multiplyNumbers(num1: number, num2: number): number {
    return num1 * num2; // returns the product of num1 and num2
  }

  public divideNumbers(num1: number, num2: number): number {
    if (num2 === 0) {
      throw new Error('Division by zero is not allowed'); // handle division by zero
    }
    return num1 / num2; // returns the quotient of num1 and num2
  }

}
