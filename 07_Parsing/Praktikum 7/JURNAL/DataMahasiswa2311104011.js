const fs = require('fs');
const path = require('path');

class DataMahasiswa2311104011 {
    static readJSON() {
        const filePath = path.join(__dirname, 'jurnal7_1_2311104011.json');

        if (!fs.existsSync(filePath)) {
            console.log("File tidak ditemukan!");
            return;
        }

        const rawData = fs.readFileSync(filePath);
        const data = JSON.parse(rawData);

        const namalengkap = `${data.firstName} ${data.lastName}`;
        const alamat = `${data.address.streetAddress}, ${data.address.city}, ${data.address.state}`;
        console.log(`
            Nama ${namalengkap}
            Jenis Kelamin: ${data.gender}
            Umur: ${data.age}
            Alamat: ${alamat}`);

        console.log("Daftar Mata Kuliah yang Diambil:");
        data.courses.forEach((course, index) => {
            console.log(`${index + 1}. ${course.code} - ${course.name}`);
        }); 
    }
}

module.exports = DataMahasiswa2311104011;
