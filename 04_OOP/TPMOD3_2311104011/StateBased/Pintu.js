class Pintu {
  constructor() {
    this.state = 'Terkunci';
    this.tampilkanStatus();
  }

  kunciPintu() {
    if (this.state === "Terbuka") {
      this.state = "Mengunci pintu...";
      console.log(this.state);
      this.state = "Terkunci";
      this.tampilkanStatus();
    } else if (this.state === "Terkunci") {
      console.log("Pintu sudah terkunci.");
    }
  }

  bukaPintu() {
    if (this.state === "Terkunci") {
      this.state = "Membuka pintu...";
      console.log(this.state);
      this.state = "Terbuka";
      this.tampilkanStatus();
    } else if (this.state === "Terbuka") {
      console.log("Pintu sudah terbuka.");
    }
  }

  tampilkanStatus() {
    console.log(`Pintu ${this.state}!`);
  }
}

const pintu = new Pintu();
pintu.bukaPintu();
setTimeout(() => pintu.kunciPintu(), 4000);
setTimeout(() => pintu.kunciPintu(), 5000);
