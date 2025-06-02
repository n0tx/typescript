"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Biodata = /** @class */ (function () {
    function Biodata(name, age) {
        this.name = name;
        this.age = age;
    }
    // bentuk fungsi pada class
    Biodata.prototype.perkenalan = function () {
        return "Halo nama saya: ".concat(this.name, " dan umur saya ").concat(this.age, " tahun.");
    };
    return Biodata;
}());
// instansiasi object riki
// pembuatan object baru dengan nama riki
var riki = new Biodata("Riki Candra", 17);
console.log(riki.name); // Riki Candra
console.log(riki.age); // 17
console.log(riki.perkenalan());
// Halo nama saya: Riki Candra dan umur saya 17 tahun.
