import { index, store, destroy } from "./controller.js";

const main = () => {
  console.log("--- TAMPILAN AWAL ---");
  index();

  // Menambah 2 Data
  store({ nama: 'Data 11', umur: 30, alamat: 'Jl. Data 11', email: 'data11@mail.com' });
  store({ nama: 'Data 12', umur: 31, alamat: 'Jl. Data 12', email: 'data12@mail.com' });

  console.log("\n--- TAMPILAN SETELAH DITAMBAH ---");
  index();

 //Menghapus data 9 
  destroy("Data 9");

  console.log("\n--- TAMPILAN SETELAH DIHAPUS ---");
  index();
};

main();