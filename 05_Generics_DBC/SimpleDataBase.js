class SimpleDataBase {
    constructor() {
        this.storedData = [];
        this.inputDates = [];
    }

    AddNewData(data) {
        if (typeof data !== 'number' || !Number.isFinite(data)) {
            throw new Error("Data harus berupa angka desimal (float)");
        }
        this.storedData.push(data);
        this.inputDates.push(new Date());
    }

    PrintAllData() {
        this.storedData.forEach((data, index) => {
            console.log(`Data: ${index + 1}, berisi :${data}, Date: ${this.inputDates[index]}`);
        });
    }
}

const db = new SimpleDataBase();
db.AddNewData(12.5);
db.AddNewData(34.7);
db.AddNewData(56.9);
db.PrintAllData();