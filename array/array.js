// array menggunakan type annotation
var daftarNilai = [80, 75, 90, 65];
console.log(daftarNilai); // [80, 75, 90, 65]
console.log({ daftarNilai: daftarNilai }); // { daftarNilai: [ 80, 75, 90, 65 ] }
// array menggunakan otomatis type annotation dengan
// melalui dari isi data variable
var daftarNama = ["Riki", "Andi", "Budi", "Dery"];
console.log(daftarNama); // [ 'Riki', 'Andi', 'Budi', 'Dery' ]
console.log({ daftarNama: daftarNama }); // { daftarNama: [ 'Riki', 'Andi', 'Budi', 'Dery' ] }
// tipe arrray dengan union
var biodata = ["Riki", 17, "Andi", 20, "Budi", 19];
console.log(biodata); // [ 'Riki', 17, 'Andi', 20, 'Budi', 19 ]
console.log({ biodata: biodata }); // { biodata: [ 'Riki', 17, 'Andi', 20, 'Budi', 19 ] }
// empty array
var array_kosong = [];
console.log(array_kosong);
console.log({ array_kosong: array_kosong });
