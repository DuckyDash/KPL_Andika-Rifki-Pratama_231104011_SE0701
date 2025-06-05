import { FPB, KPK, Turunan, Integral } from './mathLibraries/index.js';

// Contoh penggunaan FPB
console.log("FPB dari 60 dan 45:", FPB(60, 45));

// Contoh penggunaan KPK
console.log("KPK dari 12 dan 8:", KPK(12, 8));

// Polinomial untuk turunan: x³ + 4x² -12x + 9
const polynomial1 = [1, 4, -12, 9];
console.log("Turunan dari x³ + 4x² -12x + 9:", Turunan(polynomial1));

// Polinomial untuk integral: 4x³ + 6x² -12x + 9
const polynomial2 = [4, 6, -12, 9];
console.log("Integral dari 4x³ + 6x² -12x + 9:", Integral(polynomial2));
r