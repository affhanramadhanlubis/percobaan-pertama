// if = jika
// else = selain itu
/**
 * if (kondisi) {
 * jika benar maka jalankan kode ini
 * } else {
 * jika tidak benar maka jalankan kode ini
 * }
 */
/** 90 - 100 = A 
 * 80 - 89 = B
 * 70 - 79 = C
 * 60 - 69 = D
 * 0 - 59 = E
 */
const nilai = 100;
const nama = "prabowo";
console.log(nama);
if (nilai >100) {
    console.log("nilai yg kamu input salah bro");
}
if (nilai <=100 && nilai >=90) {
    console.log("nilai kamu A");
} else if(nilai >=80 && nilai <=89) {
    console.log("nilai kamu B");
} else if(nilai <=79 && nilai >=70) { 
    console.log("nilai kamu C"); 
} else if(nilai <=69 && nilai >=60) {
    console.log("nilai kamu D");
} else if(nilai <=59) {
    console.log("nilai kamu E");
}
// jika jenis kelamin laki laki dan tinggi badan 170 keatas boleh ikut paskibra jika perempuan dan tinggi badan 160 keatas boleh ikut paskibra
const gender ="perempuan";
const tinggibadan = 159;
console.log("siswa tinggi badan ", tinggibadan , gender);
if (gender == "laki-laki" && tinggibadan >=170) {
    console.log("boleh ikut paskibra");
} else if(gender == "perempuan" && tinggibadan >=160) {
    console.log("boleh ikut paskibra");
} else {
    console.log("tinggi kamu kurang bro");
}
//jika umur diatas 17 tahun boleh memiliki sim jika di bawah 17 tidak boleh memiliki sim tapi jika ia adalah pemain balap boleh memiliki sim