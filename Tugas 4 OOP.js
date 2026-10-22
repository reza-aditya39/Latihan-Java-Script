// Kendaraan sebagai class parent
class Kendaraan {
    #harga;
    #stok;

    constructor(brand, model, tahun, stok, harga){
        this.brand = brand;
        this.model = model;
        this.tahun = tahun;
        this.#stok = stok;
        this.#harga = harga;
    }

    // Buat fungsi perantara agar subclass bisa melihat nilai private
    getStok() {
        return this.#stok;
    }
    
    getHarga() {
        return this.#harga;
    }
}

// class mobil anakan dari kendaraan
class Mobil extends Kendaraan{
    constructor(brand, model, tahun, stok, harga, bahanbakar){
        super(brand, model, tahun, stok, harga);
        const cekbahanbakar = bahanbakar.toLowerCase();
        //kondisional hanya bisa diisi bensin, listrik, hybrid
        if(!['bensin', 'listrik', 'hybrid'].includes(cekbahanbakar)){
            throw new Error ("Pilihan bahan bakar tidak valid")
        }
       this.bahanbakar = cekbahanbakar;
    }
    // output class mobil
    deskripsi (){
        
        return `Mobil : ${this.brand} 
Model : ${this.model} 
Tahun Pembuatan : ${this.tahun}
Stok : ${this.getStok()}
Harga : ${this.getHarga()}  
Jenis Bahan Bakar : ${this.bahanbakar}`;
    }
}
// class motor anakan dari kendaraan
class Motor extends Kendaraan{
    constructor(brand, model, tahun, stok, harga, bagasi){
        super(brand, model, tahun, stok, harga);
       this.bagasi = bagasi;
    }
    // output class motor
    deskripsi (){
        return `Motor : ${this.brand} 
Model : ${this.model} 
Tahun Pembuatan : ${this.tahun}
Stok : ${this.getStok()}
Harga : ${this.getHarga()}  
Ukuran Bagasi : ${this.bagasi}`;
    }
}
// entitas pelanggan 
class Pelanggan{
    constructor(nama, nomortel){
        this.nama = nama;
        this.nomortel = nomortel;
        this.kendaraansewa = null;
    }
    //menampilkan status pelanggan apakah udah sewa atau belum
    deskripsi () {
        let statussewa = 'Pelanggan belum sewa kendaraan';
        if (this.kendaraansewa !== null) {
            statussewa = `Sedang menyewa ${this.kendaraansewa.brand}`
        }
        //output pelanggan
        return `Nama : ${this.nama}
Nomor Telp. : ${this.nomortel}
Status Sewa : ${statussewa}`;
    }

    sewakendaraan(kendaraanbeli){
        this.kendaraansewa = kendaraanbeli;
    }

}

// MEMBUAT DAFTAR KENDARAAN (Masukkan Mobil & Motor)
const daftarkendaraan = [
    new Mobil("Honda","prelude", 2026, 5, 2000000, "hybrid"),
    new Mobil("Lexus","TX", 2023, 3, 1400000, "listrik"),
    new Motor("Yamaha", "NMAX", 2024, 10, 350000, "25 Liter")
];
//MENAMPILKAN DAFTAR KENDARAAN
console.log("=== DAFTAR KENDARAAN TERSEDIA ===");
daftarkendaraan.forEach((kendaraan, index) => {
    console.log(`${index + 1}.`);
    console.log(kendaraan.deskripsi());
    console.log("----------------------");
});


//MEMBUAT DATA PELANGGAN
const daftarPelanggan = [
    new Pelanggan("Zata", "08134624367"),
    new Pelanggan("Zeta", "08134624368"),
    new Pelanggan("Zatai", "08134624369"),
];
//MENAMPILKAN DAFTAR PELANGGAN
console.log("\n=== DAFTAR PELANGGAN ===");
//MENAMPILKAN DATA PELANGGAN MENGGUNAKAN LOOPING FOREACH
daftarPelanggan.forEach((pelanggan, index) => {
    console.log(`${index + 1}.`);
    
    if (index == 1) {
        pelanggan.sewakendaraan({
            brand: "Honda",
            model: "prelude",
            tahun: 2026,
            stock: 5,
            harga: 2000000,
            bahanbakar: "hybrid"
        })
    }
    
    console.log(pelanggan.deskripsi());
    console.log("----------------------");
});

return