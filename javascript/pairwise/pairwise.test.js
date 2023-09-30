
// const pairwise = require('./pairwise');
const { pairwise, sum, find_number_in_array } = require('./pairwise');

test('Test an array with many numbers 1', () => {
    expect(pairwise([1, 4, 2, 3, 0, 5], 7)).toBe(11);
});

test('Test an array with many numbers 2', () => {
    expect(pairwise([7, 9, 11, 13, 15], 20)).toBe(6);
});

test('Test an array with many numbers 3', () => {
    expect(pairwise([1, 3, 2, 4], 4)).toBe(1);
});

test('Test an array with many numbers 4', () => {
    expect(pairwise([1, 1, 1], 2)).toBe(1);
});

test('Test an array with many numbers 5', () => {
    expect(pairwise([0, 0, 0, 0, 1, 1], 1)).toBe(10);
});

test('Test an array with many numbers 6', () => {
    expect(pairwise([], 100)).toBe(0);
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

// Testing find function
test("Find with a value that exists", () => {
    expect(find_number_in_array([1, 5, 3, 7, 2, 2], 5)).toBe(1)
})

test("Find where doesn't exist", () => {
    expect(find_number_in_array([1, 5, 3, 7, 2, 2], 8)).toBe(-1)
})

test("Find with two of the same number", () => {
    expect(find_number_in_array([1, 5, 3, 7, 5, 2], 5)).toBe(1)
})


