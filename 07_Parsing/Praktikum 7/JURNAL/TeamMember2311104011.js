const fs = require('fs');
const path = require('path');

class TeamMember2311104011 {
    static readJSON() {
        const filePath = path.join(__dirname, 'jurnal7_2_2311104011.json');

        if (!fs.existsSync(filePath)) {
            console.log("File tidak ditemukan!");
            return;
        }

        const rawData = fs.readFileSync(filePath);
        const data = JSON.parse(rawData);

        console.log("Team member list:");

        data.members.forEach(member => {
            const namaLengkap = `${member.firstName} ${member.lastName}`;
            console.log(`${member.nim} ${namaLengkap} (${member.age} ${member.gender})`);
          });
          
    }
}
module.exports = TeamMember2311104011;
