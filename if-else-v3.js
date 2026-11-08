/** 
Kamu sedang membuat sistem klasifikasi hero untuk game buatanmu sendiri. Setiap hero memiliki tiga atribut:
attack: kekuatan serangan fisik.
magic: kekuatan sihir.
special: kekuatan kemampuan khusus hero.

Aturan role
Role	    Syarat

Fighter ⚔️	    Attack minimal 70, magic di bawah 50, dan special di bawah 80
Mage 🔮	        Magic lebih dari 100, attack di bawah 40, dan special di bawah 80
Battle Mage ⚡	Attack minimal 70 dan magic minimal 70
Legend 👑       Special minimal 80, tanpa memedulikan attack dan magic
Novice 🌱	    Tidak memenuhi kondisi role di atas

Urutan pengecekan juga penting. Gunakan prioritas berikut:
1.⁠ ⁠Legend
2.⁠ ⁠Battle Mage
3.⁠ ⁠Fighter
4.⁠ ⁠Mage
5.⁠ ⁠Novice
 * 
 */

const hero = {
  nama: "Alucard",
  attack: 40,
  magic: 40,
  special: 0,
};
let heroRole = "";

console.log("====================================");
console.log(hero);

if (hero.special >= 80) {
  heroRole = "Legend 👑";
} else if (hero.attack >= 70 && hero.magic >= 70) {
  heroRole = "Battle Mage ⚡";
} else if (hero.attack >=70 && hero.magic <=50 && hero.special <=80) {
  heroRole = "fighter ⚔️"
} else if (hero.magic >=100 && hero.attack <=40 && hero.special <=80) {
  heroRole = "mage 🔮"
} else {
  heroRole = "novice 🌱 "
}
console.log("Di clasifikasikan sebagai role: ", heroRole);


/** 2. Aturan harga tiket
Harga tiket normal adalah Rp50.000.

A. Diskon berdasarkan umur
- Umur di bawah 5 tahun: Gratis.
- Umur 5–12 tahun: Diskon 50%.
- Umur di atas 12 tahun: Harga normal.
B. Diskon member
- Jika pelanggan adalah member, mendapat diskon tambahan 10%.
- Diskon member hanya berlaku jika pelanggan berumur di atas 12 tahun.
C. Diskon hari tertentu
- Jika membeli tiket pada hari Wednesday, mendapat diskon tambahan Rp10.000 per tiket.
- Diskon ini tidak berlaku untuk tiket gratis.
D. Biaya tambahan
- Jika membeli lebih dari 3 tiket, dikenakan biaya admin Rp5.000 untuk seluruh transaksi.
- Jika membeli 3 tiket atau kurang, tidak ada biaya admin.

Nama: Budi
Umur: 17
Member: Ya
Hari: Saturday
Jumlah tiket: 2

Harga tiket: Rp...
Total diskon: Rp...
Biaya admin: Rp...
Total pembayaran: Rp...*/

const pembeli = {
  nama:"budi",
  umur:17,
  member:"ya",
  hari:"wednesday",
  jumlah_tiket:4,
}
const harga_tiket_normal = 50000;
let harga_tiket =0;
let total_diskon =0;
let biaya_admin =0;
let total_pembayaran =0;
if (pembeli.umur <5) {
harga_tiket =pembeli.jumlah_tiket*harga_tiket_normal;
total_diskon =0;
biaya_admin =0;
total_pembayaran =0;
} else if (pembeli.umur >=5 && pembeli.umur <=12) {
harga_tiket =pembeli.jumlah_tiket*harga_tiket_normal;
total_diskon =harga_tiket*50/100;
biaya_admin =0;
total_pembayaran =harga_tiket-total_diskon;
} else {
  harga_tiket =pembeli.jumlah_tiket*harga_tiket_normal;
  total_diskon =0;
  if (pembeli.member =="ya") {
    total_diskon =harga_tiket*10/100;
}
biaya_admin =0;
total_pembayaran =harga_tiket-total_diskon;
}
console.log(pembeli);
console.log("Harga tiket: Rp",harga_tiket);
console.log("Total diskon: Rp",total_diskon);
console.log("Biaya admin: Rp",biaya_admin);
console.log("total pembayaran saat ini",total_pembayaran)
if (pembeli.hari =="wednesday") {
  total_pembayaran =total_pembayaran-(10000*pembeli.jumlah_tiket);
}
if (pembeli.jumlah_tiket >3) {
  biaya_admin =5000
  total_pembayaran =total_pembayaran+biaya_admin;

}
console.log("biaya admin sebenarnya",biaya_admin);
console.log("Total pembayaran: Rp",total_pembayaran);