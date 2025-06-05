export function akarPersamaanKuadrat([a,b,c]) {
    const diskriminan = b * b - 4 * a * c;
    if (diskriminan < 0) {
        return "Tidak ada akar real";
    } else if (diskriminan === 0) {
        const akar = -b / (2 * a);
        return `Akar ganda: ${akar}`;
    } else {
        const akar1 = (-b + Math.sqrt(diskriminan)) / (2 * a);
        const akar2 = (-b - Math.sqrt(diskriminan)) / (2 * a);
        return `Akar-akar: ${akar1} dan ${akar2}`;
    }
}

export function hasilKuadrat([a, b]){
    return [a * a, 2 * a * b, b * b];
}
