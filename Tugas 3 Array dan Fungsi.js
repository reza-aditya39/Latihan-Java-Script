//membuat array awal untuk isi data produk
let produkToko =[
    {id:1, nama: "Laptop", harga:7000000, stok:5},
    {id:2, nama: "Mouse", harga:200000, stok:10},
    {id:3, nama: "Keyboard", harga:350000, stok:7}
]
tampilkanproduk();

//fungsi untuk menambahkan produk menggunakan metode push
function tambahproduk(nama,harga,stok){
    const produkbaru={
        id:produkToko.length+1,
        nama:nama,
        harga:harga,
        stok:stok
    };
    produkToko.push(produkbaru)
}
// menambahkan data produk menggunakan fungsi tambahproduk
 tambahproduk("Monitor", 2700000,12)

//fungsi untuk menampilkan data produk menggunakan tabel
function tampilkanproduk(){
    console.table(produkToko);
}
//menampilkan data produk yang telah ditambahkan
tampilkanproduk()

//fungsi menghapus produk menggunakan metode filter yang menampilkan semua data kecuali id yang diinput
function hapusproduk(id){
    produkToko=produkToko.filter(produk=> produk.id !==id)
}

//menghapus produk yang id 2
hapusproduk(2)
//menampilkan hasil akhir data produk
tampilkanproduk()