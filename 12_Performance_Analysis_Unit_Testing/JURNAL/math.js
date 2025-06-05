function CariNilaiPangkat(a, b) {
  if (a === 0) return 1;
  if (a < 0) return -1;
  if (a > 10 && a < 100) return -2;
  try {
    const result = Math.pow(a, b);
    if (!Number.isSafeInteger(result)) return -3;
    return result;
  } catch (e) {
    return -3;
  }
}

module.exports = { CariNilaiPangkat };
