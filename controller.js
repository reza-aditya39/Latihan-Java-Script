import users from "./data.js";

const index = () => {
  // Untuk menampilkan data menggunakan map
  console.log("\n=== Daftar User ===");
  users.map((user, urutan) => {
    console.log(`${urutan + 1}. Nama: ${user.nama} | Umur: ${user.umur} | Alamat: ${user.alamat} | Email: ${user.email}`);
  });
};

const store = (userBaru) => {
  // Menambah data menggunakan proses push
  users.push(userBaru);
  console.log(`\n[+] Berhasil menambahkan data: ${userBaru.nama}`);
};
  

//menghapus data
const destroy = (hapususer) => {
  // mencari data keberapa yang diinput lalu ada di indeks keberapa
  const urutan = users.findIndex((user) => user.nama === hapususer);

  //apabila data ditemukan maka akan menghapus data menggunakan splice 
  if (urutan !== -1) {
    users.splice(urutan, 1);
    
    console.log(`\n[-] Berhasil menghapus: ${hapususer}`);
  } else {
    console.log(`\n[!] Gagal: Data ${hapususer} tidak ditemukan.`);
  }
};

export { index, store, destroy };