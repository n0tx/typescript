"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
// belum menggunakan generic
// fungsi 1 dan 2 mempunyai pola yang sama
// hanya tipe datanya yang berbeda
// oleh karena itu dapat dibuatkan
// menjadi generik 1 fungsi saja
// yang bisa digunakan kembali pada berbagai tipe data
// sehingga menjadi fleksibel
// tanpa kehilangan keamanan tipe datanya
// param1: object
// param2: tuple
// return object dengan spread
function getDataSatu(value1, value2) {
    return __assign(__assign({}, value1), value2);
}
// param1: object
// param2: array number
// return list object
function getDataDua(value1, value2) {
    return { value1: value1, value2: value2 };
}
console.log(getDataSatu({ name: "Riki", age: 25 }, ["Jakarta", true]));
// { '0': 'Jakarta', '1': true, name: 'Riki', age: 25 }
console.log(getDataDua({ name: "Budi", age: 28 }, [5, 5, 5]));
// { value1: { name: 'Budi', age: 28 }, value2: [ 5, 5, 5 ] }
// menggunakan generic
// param1: object
// param2: object
// return menggabungkan obj, obj2
// yang sudah di spread
function getData(obj, obj2) {
    return __assign(__assign({}, obj), obj2);
}
console.log(getData({ name: "Riki", age: 25 }, ["Jakarta", true]));
// { '0': 'Jakarta', '1': true, name: 'Riki', age: 25 }
console.log(getData({ name: "Budi", age: 28 }, [5, 5, 5])); // 28
// { '0': 5, '1': 5, '2': 5, name: 'Budi', age: 28 }
console.log(getData({ id: 1, nama: "Riki", isComplete: true }, { age: 25 }));
// { id: 1, nama: 'Riki', isComplete: true, age: 25 }
console.log(getData({ id: 1, nama: "Riki", isComplete: true }, { age: 25 }));
// { id: 1, nama: 'Riki', isComplete: true, age: 25 }
