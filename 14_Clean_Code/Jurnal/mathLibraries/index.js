// Menghitung Faktor Persekutuan Terbesar (FPB) dari dua bilangan
export function calculateGCD(a, b) {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

// Menghitung Kelipatan Persekutuan Terkecil (KPK) dari dua bilangan
export function calculateLCM(a, b) {
  return (a * b) / calculateGCD(a, b);
}

// Mengembalikan bentuk turunan dari sebuah polinomial yang diberikan dalam bentuk array koefisien
export function derivePolynomial(coefficients) {
  const derivativeTerms = coefficients
    .slice(0, -1)
    .map((coefficient, index) => {
      const exponent = coefficients.length - index - 1;
      const result = coefficient * exponent;

      if (result === 0) return null;

      if (exponent - 1 === 0) return `${result}`;
      if (exponent - 1 === 1) return `${result}x`;

      return `${result}x^${exponent - 1}`;
    })
    .filter(Boolean); // Menghapus elemen null

  return derivativeTerms.join(' + ').replace(/\+\s\-/g, '- ');
}

// Mengembalikan bentuk integral dari sebuah polinomial yang diberikan dalam bentuk array koefisien
export function integratePolynomial(coefficients) {
  const integralTerms = coefficients
    .map((coefficient, index) => {
      const exponent = coefficients.length - index;
      const result = coefficient / exponent;

      if (result === 0) return null;

      if (exponent === 1) return `${result}x`;

      return `${result}x^${exponent}`;
    })
    .filter(Boolean); // Menghapus elemen null

  return integralTerms.join(' + ').replace(/\+\s\-/g, '- ') + ' + C';
}
