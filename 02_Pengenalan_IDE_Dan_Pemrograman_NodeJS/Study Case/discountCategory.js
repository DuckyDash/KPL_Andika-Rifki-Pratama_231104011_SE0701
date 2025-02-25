import readline from "readline";

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function main() {
    input.question("Masukkan jumlah barang: ", (JBarang) => {
        const jumlahBarang = parseInt(JBarang);
        if (isNaN(jumlahBarang) || jumlahBarang <= 0) {
            console.log("Harap masukkan angka yang valid.");
            input.close();
            return;
        }

        const hargaBarang = [];
        let totalHarga = 0;

        function inputHarga(idx) {
            if (idx < jumlahBarang) {
                input.question(`Masukkan harga barang ke-${idx + 1}: `, (hargaIn) => {
                    const harga = parseInt(hargaIn);
                    if (isNaN(harga) || harga < 0) {
                        console.log("Harap masukkan harga yang valid.");
                        inputHarga(idx);
                    } else {
                        hargaBarang.push(harga);
                        totalHarga += harga;
                        inputHarga(idx + 1); 
                    }
                });
            } else {
                let DiscountType = "";

                if (totalHarga > 100000) {
                    DiscountType = "Big Discount";
                } else if (totalHarga >= 50000 && totalHarga <= 100000) {
                    DiscountType = "Medium Discount";
                } else {
                    DiscountType = "No Discount";
                }

                console.log(`\nOutput:`);
                console.log(`Total harga: ${totalHarga}`);
                console.log(`Jumlah barang: ${jumlahBarang}`);
                console.log(`Discount Type: ${DiscountType}`);

                for (let i = 0; i < jumlahBarang; i++) {
                    console.log(`Informasi tambahan untuk barang ke-${i + 1}`);
                }
                input.close();
            }
        }
        inputHarga(0);
    });
}

main();
