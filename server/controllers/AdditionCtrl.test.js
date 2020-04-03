const {additionTwoValues} = require('./AdditionCtrl');

test('add 1+2 to equal 3', () => {
  expect(additionTwoValues(1, 2)).toBe(3);
});
