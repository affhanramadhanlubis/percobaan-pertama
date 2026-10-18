// Sebuah tempat parkir memiliki tarif 1 jam pertama 5ribu, satu jam berikutnya *2ribu setiap jam, dan jika parkir lebih dari 5 jam diberikan diskon 10%
console.log("=============Latihan 1==============");
const tarif_1 = 5000; // nilai pasti dari soal
const tarif_2 = 2000; // nilai pasti dari soal
const discount = 10;
const hour = 7; // inputan user (unutk sekrang wajib bilangan bulat)

console.log("Kamu parkir ", hour, " Jam");

if (hour <= 1) {
  console.log("Tarif anda: ", tarif_1);
} else if (hour > 1 && hour < 5) {
  // cari harga 2000
  const X = hour - 1;
  const si_2000 = X * tarif_2;
  // tambahkan harga 1 jam pertama
  const pay = si_2000 + tarif_1;

  console.log("Harga parkir kamu: ", pay);
} else if (hour >= 5) {
  // cari harga 2000
  const X = hour - 1;
  const si_2000 = X * tarif_2;
  // tambahkan harga 1 jam pertama
  const pay = si_2000 + tarif_1;

  const after_discount = pay - (pay * 10) / 100;

  console.log("Total Biaya parkir: ", pay);
  console.log("Kamu dapat discount, jadi hanya perlu bayar: ", after_discount);
}
/**
 * 5 jam
 *
 * 1 jam 5000
 *
 * 1 jam berikutnya 2000
 * 1 jam berikutnya 2000
 * 1 jam berikutnya 2000
 * 1 jam berikutnya 2000
 *
 */

console.log("\n=============Latihan 2============");
// latihan 2: bikin system login sekeloh
const username_correct ="affan@gmail.com"; //data
const password_correct ="affananakbaik";

const username ="affan@gmail.com"; //input user
const password ="affananakbaik";
console.log("username",username,"password",password);
if (username == username_correct && password == password_correct) {
    console.log("username dan password benar");
} else {
    console.log("username dan password salah");
}
console.log("=================latihan 3===================");
//jika total belanja minimal 200rb gratis ongkir jika tidak ongkir 15rb
const belanja =200000;
console.log("total belanja",belanja)
if (belanja >=200000) {
    console.log("kamu mendapatkan gratis ongkir");
} else {
    console.log("kamu harus bayar ongkir sebesar 15rb");
}
console.log("====================latihan 4========================");
//jika jarak pengiriman kurang dari =5km maka ongkir 2rb/km jika jarak diatas 5km dan dibawah 10km ongkir 3rb/km kalo lewat 10km ongkir 100rb
const pengiriman =1;
const ongkir_1 =2000
const ongkir_2 =3000
const ongkir_3 =120000
let total_pembayaran =0;
console.log("pengiriman",pengiriman,"km")
if (pengiriman <5) {
total_pembayaran =ongkir_1 * pengiriman;
    console.log("kamu bayar ongkir",total_pembayaran);
} else if (pengiriman <10) {
    total_pembayaran =ongkir_2 * pengiriman
    console.log ("kamu bayar ongkir",total_pembayaran);
} else if (pengiriman >=10) {
    console.log("kamu harus bayar ongkir sebesar",ongkir_3)
}