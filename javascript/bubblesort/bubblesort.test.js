const { bubbleSort } = require('./index');

test('Test a sort 1', () => {
    expect(bubbleSort([1, 7, 3, 2, 8, 5])).toStrictEqual([1, 2, 3, 5, 7, 8]);
});

test('Test an array with many numbers 1', () => {
    expect(bubbleSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])).toStrictEqual([1, 1,  2, 2,    4,  8, 32,43, 43, 55, 63, 92, 123, 123, 234, 345, 5643]);
});

test('Test an empty array', () => {
    expect(bubbleSort([])).toStrictEqual([]);
});