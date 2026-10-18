// Sebuah tempat parkir memiliki tarif 1 jam pertama 5ribu, satu jam berikutnya *2ribu setiap jam, dan jika parkir lebih dari 5 jam diberikan diskon 10%

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
