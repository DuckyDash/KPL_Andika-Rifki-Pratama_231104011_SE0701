const fs = require('fs');
const path = require('path');

class DataMahasiswa2311104011 {
  static readJSON() {
    const filePath = path.join(__dirname, 'tp7_1_2311104011.json');

    if (!fs.existsSync(filePath)) {
      console.log("File tidak ditemukan!");     
      return;
    }

    const rawData = fs.readFileSync(filePath);
    const data = JSON.parse(rawData);

    const namaLengkap = `${data.nama.depan} ${data.nama.belakang}`;
    console.log(`Nama ${namaLengkap} dengan nim ${data.nim} dari fakultas ${data.fakultas}`);
  }
}

module.exports = DataMahasiswa2311104011;
