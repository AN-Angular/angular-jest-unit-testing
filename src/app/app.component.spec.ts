import { AppComponent } from "./app.component"

// describe('AppComponent', () => {
//   let fixture: AppComponent

//   beforeEach(() => {
//     fixture = new AppComponent()
//   })

//   it('should have a title Angular-Jest', () => {
//     expect(fixture.title).toBe('angular-jest-unit-testing')
//   })
  
// })

// describe('addNumbers', () => {
//   let fixture: AppComponent

//   beforeEach(() => {
//     fixture = new AppComponent()
//   })

//   it('should return the sum of num1 and num2', () => {
//     expect(fixture.addNumbers(10, 20)).toBe(30)
//   })

//   it('should return a number', () => {
//     expect(typeof fixture.addNumbers(10, 20)).toBe('number')
//   })
// })

// ******** whole of the above code can be combined into a single test suite,   ******** //
describe('AppComponent', () => {
  let fixture: AppComponent;

  beforeEach(() => {
    fixture = new AppComponent();
  });

  it('should have a title Angular-Jest', () => {
    expect(fixture.title).toBe('angular-jest-unit-testing');
  });

  describe('addNumbers()', () => {
    it('should return the sum of num1 and num2', () => {
      expect(fixture.addNumbers(10, 20)).toBe(30);
    });

    it('should return a number', () => {
      expect(typeof fixture.addNumbers(10, 20)).toBe('number');
    });
  });
});