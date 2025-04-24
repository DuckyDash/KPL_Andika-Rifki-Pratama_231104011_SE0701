const fs = require('fs');
const path = require('path');

class KuliahMahasiswa2311104011 {
    static readJSON() {
        const filePath = path.join(__dirname, 'tp7_2_2311104011.json');

        if (!fs.existsSync(filePath)) {
            console.log("File tidak ditemukan!");
            return;
        }

        const rawData = fs.readFileSync(filePath);
        const data = JSON.parse(rawData);

        console.log("Daftar Mata Kuliah yang Diambil:");
        data.courses.forEach((course, index) => {
            console.log(`${index + 1}. ${course.code} - ${course.name}`);
        });
    }
}

module.exports = KuliahMahasiswa2311104011;
