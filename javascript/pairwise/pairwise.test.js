
// const pairwise = require('./pairwise');
const { pairwise, sum } = require('./pairwise');

test('Test an array with many numbers', () => {
    expect(pairwise([1, 4, 2, 3, 0, 5], 7)).toBe(7);
});

//   Testing sum
test("Sum simple array", () => {
    expect(sum([1, 2, 3])).toBe(6)
})

test("Sum empty array", () => {
    expect(sum([])).toBe(0)
})

test("Sum array with negative", () => {
    expect(sum([-1, -1, -1])).toBe(-3)
})

test("Sum larger array numbers", () => {
    expect(sum([50000, 10, 12312312412])).toBe(12312362422)
})

