const fs = require('fs');
const path = require('path');

class GlossaryItem2311104011 {
    static ReadJSON() {
        const filePath = path.join(__dirname, 'jurnal7_3_2311104011.json');

        if (!fs.existsSync(filePath)) {
            console.log("File tidak ditemukan!");
            return;
        }

        const rawData = fs.readFileSync(filePath);
        const data = JSON.parse(rawData);

        const entry = data.glossary?.GlossDiv?.GlossList?.GlossEntry;

        if (!entry) {
            console.log("Data GlossEntry tidak ditemukan.");
            return;
        }

        console.log("=== Glossary Entry ===");
        console.log(`ID: ${entry.ID}`);
        console.log(`GlossTerm: ${entry.GlossTerm}`);
        console.log(`Acronym: ${entry.Acronym}`);
        console.log(`Abbreviation: ${entry.Abbrev}`);
        console.log(`Definition: ${entry.GlossDef.para}`);
        console.log(`See Also: ${entry.GlossDef.GlossSeeAlso.join(', ')}`);
        console.log(`Gloss See: ${entry.GlossSee}`);
    }
}

module.exports = GlossaryItem2311104011;
