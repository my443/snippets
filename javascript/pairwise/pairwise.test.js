
const pairwise = require('./pairwise')

test('Test an array with many numbers', () => {
    expect(pairwise([1,4,2,3,0,5], 7)).toBe(7);
  });