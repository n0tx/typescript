// array menggunakan type annotation
let daftarNilai: number[] = [80, 75, 90, 65];
console.log(daftarNilai); // [80, 75, 90, 65]
console.log({ daftarNilai }); // { daftarNilai: [ 80, 75, 90, 65 ] }

// array menggunakan otomatis type annotation dengan
// melalui dari isi data variable
let daftarNama = ["Riki", "Andi", "Budi", "Dery"];
console.log(daftarNama); // [ 'Riki', 'Andi', 'Budi', 'Dery' ]
console.log({ daftarNama }); // { daftarNama: [ 'Riki', 'Andi', 'Budi', 'Dery' ] }

// tipe arrray dengan union
let biodata: (number | string)[] = ["Riki", 17, "Andi", 20, "Budi", 19];
console.log(biodata); // [ 'Riki', 17, 'Andi', 20, 'Budi', 19 ]
console.log({ biodata }); // { biodata: [ 'Riki', 17, 'Andi', 20, 'Budi', 19 ] }

// empty array
let array_kosong: [] = [];
console.log(array_kosong); // []
console.log({ array_kosong }); // { array_kosong: [] }
