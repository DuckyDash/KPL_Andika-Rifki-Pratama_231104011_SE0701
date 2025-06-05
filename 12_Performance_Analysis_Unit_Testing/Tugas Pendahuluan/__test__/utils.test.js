const { cariTandaBilangan } = require('../utils');

test('Angka negatif', () => {
  expect(cariTandaBilangan('-5')).toBe('Negatif');
});

test('Angka positif', () => {
  expect(cariTandaBilangan('10')).toBe('Positif');
});

test('Angka nol', () => {
  expect(cariTandaBilangan('0')).toBe('Nol');
});

test('Input bukan angka', () => {
  expect(cariTandaBilangan('abc')).toBe('Bukan angka');
});
