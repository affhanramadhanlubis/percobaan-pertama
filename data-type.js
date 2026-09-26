// Data Types and Variables in JavaScript

// Variables
// let, const, var
let nama = "Affhan Ramadhan";
console.log("Namaku adalah " + nama); // pertama muncul
nama = "Fernando Silva";
console.log("Namaku sekarang adalah " + nama); // kedua muncul

const umur = 15;
const umurke2 = 20;

console.log("Umurku adalah " + umur); // ketiga muncul
console.log("Umurku sekarang adalah " + umur); // keempat muncul

// string, number, boolean, null, undefined, object, array

// String untuk text
let nama2 = "Affhan Ramadhan";
// Number untuk angka
const umur2 = 15;
// Boolean untuk benar atau salah
const apakahKelas11 = false; // bisa false/true menyimpan nilai yang benar atau salah
const checkKelas = () => {
  if (apakahKelas11 === true) {
    console.log("yah dia kelas 11");
  } else {
    console.log("tidak dia tidak kelas 11");
  }
};

checkKelas();

// Null untuk tidak ada nilai, embernya ada, isi nggak ada
const sesuatu = null;
const makan = "sate";
console.log(sesuatu);
// Undefined untuk nilai yang belum didefinisikan embernya nggk ada
// Array untuk menyimpan data dalam bentuk key-value
const keluarga = ["aldo", "aldi", "akbar", "azizah", "affhan"]; // array = list = daftar. array of string, 0, 1, 2,3 dst
console.log(keluarga);
console.log(keluarga[0]);
// Obejct
const dataSiswa = {
  nama: "Affhan Ramadhan",
  kelas: 10,
  umur: 15,
  jeniskelamin: "laki-laki",
};
console.log(dataSiswa);
console.log(dataSiswa.umur);

// Symbol untuk membuat identifier unik
