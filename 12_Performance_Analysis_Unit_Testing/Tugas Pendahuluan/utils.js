function cariTandaBilangan(a) {
  const num = parseInt(a);
  if (isNaN(num)) return 'Bukan angka';
  if (num < 0) return 'Negatif';
  if (num > 0) return 'Positif';
  return 'Nol';
}

module.exports = { cariTandaBilangan };
