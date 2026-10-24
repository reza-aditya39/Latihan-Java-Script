//data awal 
let produkList = [
    { id: 1, nama: "Laptop", harga: 12000000},
    { id: 2, nama: "Smartphone", harga: 5000000},
    { id: 3, nama: "Thermal Paste", harga: 130000},
    { id: 4, nama: "Mouse", harga: 250000},
    { id: 5, nama: "Keyboard", harga: 600000},
    { id: 6, nama: "Ram", harga: 3200000},
    { id: 7, nama: "VGA", harga: 1200000}
]
//event  untuk memberitahu ketika ada penambahan atau penghapusan data
const eventHandler ={
    Tambah: function(){ console.log("Data Berhasil Ditambahkan");},
    Hapus: function(){ console.log("Data Berhasil Dihapus");}
}

// fungsi untuk menambah produk menggunakan spread operator
function tambahproduk(id,nama,harga){
    const produkbaru = {id,nama,harga};

    //penggabungan array menggunakan spread
    produkList = [...produkList, produkbaru]
    //menampilkan ketika berhasil menambahkan produk
    eventHandler.Tambah();
}
//fungsi untuk menghapus produk menggunakan id
function hapusproduk(...ids){
    // mengambil elemen pertama dari kumpulan rest parameter
    const iddihapus = ids[0];
    //menampilkan data menggunakan filter untuk mengeliminasi id yang dipilih
    produkList= produkList.filter(produk=>produk.id !== iddihapus);
    eventHandler.Hapus();
}
//fungsi untuk menampilkan produk
function Tampilkanproduk(){
    console.log("--- Daftar Produk ---");
    produkList.forEach(produk=>{
        //menggunakan destucting untuk mengekstrak properti
        const {id, nama, harga} = produk;
        console.log(`ID: ${id}  | Nama: ${nama}  | Harga: Rp${harga}`);
    })
    console.log("----------------------\n");
}

Tampilkanproduk();
//penambahan data
tambahproduk(8,"Tablet", 7000000);
Tampilkanproduk();
//pengurangan data
hapusproduk(2);
Tampilkanproduk();
