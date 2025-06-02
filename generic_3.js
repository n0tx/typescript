"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var riki = {
    id: 1,
    name: "Riki Candra",
    isComplete: true,
};
var budi = {
    id: 2,
    name: "Budi",
};
// fungsi generic ini artinya
// <> simbol diamond: tipe generik yang
// merupakan melakukan extends dari tipe yang mempunyai length dengan return tipe number (string, array, tuple, array of object)
// parameter, (value: T): tipe apa saja yang valuenya
// mempunyai length (string, array, tuple, array of object)
// return dengan tipe number: panjang length dari parameter
function getLength(value) {
    return value.length;
}
var persons = [riki, budi];
// string
console.log(getLength("Riki Candra")); // 11
// tuple (array tetap)
console.log(getLength(["Riki", 28])); // 2
// array
console.log(getLength([1, 2, 3])); // 3
// array of object
console.log(getLength(persons)); // 2
