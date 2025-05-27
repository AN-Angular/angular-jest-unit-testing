import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [FormsModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-jest-unit-testing';

  num1 = 10; // number
  num2 = 20; // number

  public addNumbers(num1: number, num2: number): number {
    return num1 + num2; // returns the sum of num1 and num2
  }
}
