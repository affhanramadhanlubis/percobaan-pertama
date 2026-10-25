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
  attack: 90,
  magic: 50,
  special: 100,
};
let heroRole = "";

console.log("====================================");
console.log(hero);

if (hero.special >= 80) {
  heroRole = "Legend 👑";
} else if (hero.attack >= 70 && hero.magic >= 70) {
  heroRole = "Battle Mage ⚡";
}

console.log("Di clasifikasikan sebagai role: ", heroRole);
