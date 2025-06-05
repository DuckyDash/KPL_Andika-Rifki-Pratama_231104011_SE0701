const { CariNilaiPangkat } = require('./math');

test('a = 0, b = 5 → return 1', () => {
  expect(CariNilaiPangkat(0, 5)).toBe(1);
});

test('a = -3, b = 2 → return -1 (negatif)', () => {
  expect(CariNilaiPangkat(-3, 2)).toBe(-1);
});

test('a = 20, b = 2 → return -2 (antara 10 dan 100)', () => {
  expect(CariNilaiPangkat(20, 2)).toBe(-2);
});

test('a = 1000000, b = 10 → return -3 (overflow)', () => {
  expect(CariNilaiPangkat(1000000, 10)).toBe(-3);
});

test('a = 2, b = 3 → return 8', () => {
  expect(CariNilaiPangkat(2, 3)).toBe(8);
});
